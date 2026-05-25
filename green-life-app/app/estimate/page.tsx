import type { Metadata } from 'next';
import { Clock, Mail, Calendar, CheckCircle, ShieldCheck, Tag } from 'lucide-react';
import { SubHero } from '@/components/sections/SubHero';
import { ContactForm } from '@/components/sections/ContactForm';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { PAGE_HEROES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Estimate',
  description:
    'Request a free, no-pressure estimate from Green Life Landscaping in Burtonsville, MD. We respond within one business day with a written quote.',
  alternates: { canonical: '/estimate' },
};

const STEPS = [
  {
    icon: Mail,
    title: 'You send us details',
    body: 'Fill the form or call. We’ll ask a few follow-ups by email to make sure we understand the scope.',
  },
  {
    icon: Calendar,
    title: 'We walk the property',
    body: 'Sergio or Ederson schedules an on-site visit — usually within 3–5 business days.',
  },
  {
    icon: CheckCircle,
    title: 'You get a written quote',
    body: 'Detailed scope, line-item pricing, and start window emailed within one business day of the walkthrough.',
  },
];

export default function EstimatePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Free Estimate', path: '/estimate' },
        ]}
      />
      <SubHero
        breadcrumbLabel="Free Estimate"
        title="Tell us what your property needs"
        description="One-time project or ongoing maintenance — we’ll quote it fairly and honestly. Most quotes go out within one business day of the site visit."
        backgroundImage={PAGE_HEROES.estimate}
      >
        <div className="flex gap-2 flex-wrap">
          {[
            { icon: Clock, label: 'Avg. response: 4 hours' },
            { icon: Tag, label: 'Always free, no obligation' },
            { icon: ShieldCheck, label: 'Licensed & Insured' },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-pill px-3.5 py-1.5 font-display font-semibold text-[12px] text-white/95"
            >
              <Icon size={14} className="text-brand-accent" />
              {label}
            </span>
          ))}
        </div>
      </SubHero>

      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="grid md:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
            {STEPS.map(({ icon: Icon, title, body }, idx) => (
              <div key={title} className="relative bg-surface-base rounded-lg p-7">
                <div className="absolute -top-3 left-6 inline-flex items-center justify-center h-7 w-7 rounded-pill bg-brand-primary text-white font-display font-bold text-[12px]">
                  {idx + 1}
                </div>
                <Icon size={22} className="text-brand-primary mb-3" strokeWidth={2} />
                <h3 className="font-display font-semibold text-[18px] text-neutral-900 mb-2">
                  {title}
                </h3>
                <p className="font-body text-[14px] leading-[1.65] text-neutral-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm
        title="Request your free estimate"
        subtitle="Fields marked required help us route your request to the right crew lead."
      />
    </>
  );
}
