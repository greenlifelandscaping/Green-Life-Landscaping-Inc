import type { Metadata } from 'next';
import Image from 'next/image';
import { Tag, Clock, ShieldCheck, Phone, MapPin, Navigation, Map, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SubHero } from '@/components/sections/SubHero';
import { ContactForm } from '@/components/sections/ContactForm';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { SITE, TEAM, PAGE_HEROES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact Green Life Landscaping Inc in Burtonsville, MD. Call ${SITE.phone} or request a free estimate online. Serving Montgomery County since 2005.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />
      <SubHero
        breadcrumbLabel="Contact"
        title="Get a Free Estimate for Your Property"
        description={`Call us directly at ${SITE.phone} or fill out the form below. We'll get back to you within one business day with a free, no-obligation estimate for landscaping services in Burtonsville, MD and Montgomery County.`}
        backgroundImage={PAGE_HEROES.contact}
      >
        <div className="flex gap-2 flex-wrap">
          {[
            { icon: Tag, label: 'Always Free Estimates' },
            { icon: Clock, label: 'Respond Within 1 Business Day' },
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div>
              <span className="inline-block font-display font-bold text-overline uppercase text-brand-primary mb-2.5">
                Get In Touch
              </span>
              <h2 className="font-display font-bold text-fluid-h2 text-neutral-900 mb-3">
                Let’s Talk About Your Property
              </h2>
              <p className="font-body text-[17px] text-neutral-600 leading-[1.65] mb-10">
                We serve Burtonsville, MD and all of Montgomery County — including Silver Spring,
                Rockville, Germantown, Olney, and Laurel. No physical storefront; we come to
                you.
              </p>

              <div className="space-y-6">
                <ContactItem icon={Phone} label="Phone">
                  <a href={SITE.phoneHref} className="font-bold text-neutral-800 hover:text-brand-primary">
                    {SITE.phone}
                  </a>
                </ContactItem>
                <ContactItem icon={MapPin} label="Based In">
                  {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
                </ContactItem>
                <ContactItem icon={Navigation} label="Service Area">
                  Montgomery County, MD and surrounding areas.
                  <br />
                  We come to your property — no storefront visits needed.
                </ContactItem>
                <ContactItem icon={Clock} label="Hours">
                  {SITE.hours}
                </ContactItem>
              </div>

              {/* Estimators */}
              <div className="mt-10">
                <div className="font-display font-bold text-[13px] text-neutral-900 mb-3.5 flex items-center gap-2">
                  <Users size={16} className="text-brand-primary" />
                  Meet Your Estimators
                </div>
                <div className="grid grid-cols-2 gap-3.5">
                  {TEAM.map((p) => (
                    <div key={p.name}>
                      <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-card-hover bg-neutral-100 mb-2.5">
                        <Image
                          src={p.photo}
                          alt={`${p.name}, Green Life Landscaping estimator`}
                          fill
                          sizes="(max-width: 1024px) 50vw, 240px"
                          className="object-cover"
                        />
                      </div>
                      <div className="font-display font-bold text-[13px] text-neutral-900">{p.name}</div>
                      <div className="font-body text-[12px] text-neutral-500">{p.role}</div>
                    </div>
                  ))}
                </div>
                <p className="font-body text-[13px] text-neutral-600 leading-[1.6] mt-3.5">
                  When you reach out, one of our estimators — not a salesperson — comes to your
                  property. Honest assessments, straight pricing, no pressure.
                </p>
              </div>

              {/* Service area card */}
              <div className="bg-surface-alt rounded-xl p-6 mt-8">
                <div className="font-display font-bold text-[13px] text-neutral-900 mb-3.5 flex items-center gap-2">
                  <Map size={16} className="text-brand-primary" />
                  Areas We Serve
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {SITE.serviceArea.map((city) => (
                    <span key={city} className="font-body text-[13px] text-neutral-600">
                      {city}, MD
                    </span>
                  ))}
                </div>
                <p className="font-body text-[12px] text-neutral-400 mt-3 leading-[1.55]">
                  Not on this list? Call us — we likely serve your area or can refer you to
                  someone who does.
                </p>
              </div>
            </div>

            <ContactForm
              title="Send us a message"
              subtitle="Fill in what you can and we’ll follow up with anything we need to provide a quote."
              showInfoPanel={false}
              compact
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="flex-shrink-0 h-11 w-11 rounded-[10px] bg-surface-alt text-brand-primary flex items-center justify-center">
        <Icon size={20} />
      </div>
      <div>
        <div className="font-display font-bold text-[11px] tracking-[0.06em] uppercase text-neutral-400 mb-1">
          {label}
        </div>
        <div className="font-body text-[15px] text-neutral-800">{children}</div>
      </div>
    </div>
  );
}
