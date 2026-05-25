import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SERVICES, SITE } from '@/lib/constants';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const CONTACT_INBOX = process.env.CONTACT_INBOX ?? 'greenlife.contacts@gmail.com';
const FROM_ADDRESS = process.env.CONTACT_FROM ?? 'Green Life Website <onboarding@resend.dev>';

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  address?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
};

function asString(v: unknown, max = 2000): string {
  if (typeof v !== 'string') return '';
  return v.trim().slice(0, max);
}

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function escapeHtml(v: string): string {
  return v
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function serviceLabel(slug: string): string {
  if (slug === 'multiple') return 'Multiple services / not sure';
  return SERVICES.find((s) => s.slug === slug)?.title ?? slug ?? 'Not specified';
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot — silent success if filled
  if (asString(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name, 120);
  const phone = asString(body.phone, 40);
  const email = asString(body.email, 200);
  const address = asString(body.address, 300);
  const service = asString(body.service, 60);
  const message = asString(body.message, 4000);

  const errors: Record<string, string> = {};
  if (!name) errors.name = 'Name is required.';
  if (!phone) errors.phone = 'Phone is required.';
  if (!email) errors.email = 'Email is required.';
  else if (!isEmail(email)) errors.email = 'Please use a valid email address.';
  if (!address) errors.address = 'Property address is required.';
  if (!service) errors.service = 'Please select a service.';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: 'Validation failed.', errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not configured.');
    return NextResponse.json(
      { ok: false, error: 'Email service is not configured. Please call us directly.' },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const submittedAt = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'medium',
    timeStyle: 'short',
  });
  const serviceName = serviceLabel(service);
  const subject = `New free estimate request — ${name} (${serviceName})`;

  const textBody = [
    `New free estimate request from ${SITE.name}`,
    '',
    `Name:    ${name}`,
    `Phone:   ${phone}`,
    `Email:   ${email}`,
    `Address: ${address}`,
    `Service: ${serviceName}`,
    '',
    'Message:',
    message || '(no message provided)',
    '',
    '---',
    `Submitted: ${submittedAt} ET`,
    `Source:    ${SITE.url}`,
  ].join('\n');

  const htmlBody = `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:24px;background:#f8f8f6;font-family:'Open Sans',Arial,sans-serif;color:#1a1a1a;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.08);">
      <tr>
        <td style="background:#1b4d1e;padding:24px 28px;">
          <div style="font-family:'Montserrat',Arial,sans-serif;font-weight:700;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#66bb6a;">New lead</div>
          <div style="font-family:'Montserrat',Arial,sans-serif;font-weight:800;font-size:22px;color:#ffffff;margin-top:6px;">Estimate request</div>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 28px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.6;">
            <tr><td style="padding:6px 0;color:#5a5a5a;width:90px;">Name</td><td style="padding:6px 0;font-weight:600;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:6px 0;color:#5a5a5a;">Phone</td><td style="padding:6px 0;"><a href="tel:${escapeHtml(phone.replace(/[^+\d]/g, ''))}" style="color:#2e7031;text-decoration:none;font-weight:600;">${escapeHtml(phone)}</a></td></tr>
            <tr><td style="padding:6px 0;color:#5a5a5a;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#2e7031;text-decoration:none;font-weight:600;">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:6px 0;color:#5a5a5a;vertical-align:top;">Address</td><td style="padding:6px 0;"><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}" style="color:#2e7031;text-decoration:none;font-weight:600;">${escapeHtml(address)}</a></td></tr>
            <tr><td style="padding:6px 0;color:#5a5a5a;">Service</td><td style="padding:6px 0;font-weight:600;">${escapeHtml(serviceName)}</td></tr>
          </table>

          <div style="margin-top:18px;padding-top:18px;border-top:1px solid #f0f0f0;">
            <div style="font-family:'Montserrat',Arial,sans-serif;font-weight:600;font-size:11px;letter-spacing:0.04em;text-transform:uppercase;color:#3d3d3d;margin-bottom:8px;">Message</div>
            <div style="font-size:14px;line-height:1.65;color:#1a1a1a;white-space:pre-wrap;">${escapeHtml(message) || '<span style="color:#9e9e9e;">(no message provided)</span>'}</div>
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding:14px 28px;background:#f1f8f1;font-size:12px;color:#5a5a5a;">
          Submitted ${escapeHtml(submittedAt)} ET · via ${escapeHtml(SITE.url)}
        </td>
      </tr>
    </table>
  </body>
</html>`;

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [CONTACT_INBOX],
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    if (error) {
      console.error('[contact] Resend error:', error);
      return NextResponse.json(
        { ok: false, error: 'Failed to send email. Please call us directly.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return NextResponse.json(
      { ok: false, error: 'Something went wrong. Please call us directly.' },
      { status: 500 }
    );
  }
}
