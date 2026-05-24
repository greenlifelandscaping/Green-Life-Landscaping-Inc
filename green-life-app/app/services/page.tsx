import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { SubHero } from '@/components/sections/SubHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { SERVICES, PAGE_HEROES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Lawn Care & Landscaping Services',
  description:
    'Full outdoor service offerings from Green Life Landscaping in Burtonsville, MD: lawn care, landscaping, tree services, hardscaping, and snow removal across Montgomery County.',
  alternates: { canonical: '/services' },
};

const SERVICE_HERO_MAP: Record<string, string> = {
  'lawn-care': PAGE_HEROES.lawnCare,
  landscaping: PAGE_HEROES.landscaping,
  'tree-services': PAGE_HEROES.treeServices,
  hardscaping: PAGE_HEROES.hardscaping,
  'snow-removal': PAGE_HEROES.snowRemoval,
};

export default function ServicesPage() {
  return (
    <>
      <SubHero
        breadcrumbLabel="Services"
        title="Outdoor Services Built for Maryland Properties"
        description="Five service lines, all delivered by our own employees. Pick what you need, or let us walk the property and recommend the right scope."
        backgroundImage={PAGE_HEROES.services}
      />

      <section className="bg-white border-b border-neutral-100">
        <div className="container-page py-5">
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              const isSnow = s.seasonal;
              return (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-pill font-display font-semibold text-[12px] tracking-[0.03em] transition-colors ${
                    isSnow
                      ? 'bg-haint-50 text-haint-700 border border-haint-300'
                      : 'bg-surface-alt text-brand-primary hover:bg-green-100'
                  }`}
                >
                  <Icon size={13} strokeWidth={2.5} />
                  {s.title}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-base section-pad">
        <div className="container-page space-y-14">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            const isSnow = service.seasonal;
            const photo = SERVICE_HERO_MAP[service.slug];
            const flipped = idx % 2 === 1;
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-24 bg-white rounded-xl shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] hover:shadow-card-hover transition-shadow"
              >
                <Link
                  href={`/services/${service.slug}`}
                  aria-label={`Learn more about ${service.title}`}
                  className={`group relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] block ${flipped ? 'lg:order-2' : ''}`}
                >
                  <Image
                    src={photo}
                    alt={`${service.title} project example`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {isSnow && (
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-haint-50 text-haint-900 border border-haint-300 font-display font-extrabold text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 rounded-pill">
                      Seasonal
                    </span>
                  )}
                </Link>

                <div className="p-7 lg:p-10 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`h-12 w-12 rounded-[12px] flex items-center justify-center ${
                        isSnow
                          ? 'bg-haint-50 text-haint-700 border border-haint-300'
                          : 'bg-surface-alt text-brand-primary'
                      }`}
                    >
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    {service.startingPrice && (
                      <span className="font-display font-semibold text-[11px] tracking-[0.04em] bg-earth-100 text-earth-900 px-2.5 py-1 rounded-pill">
                        {service.startingPrice}
                      </span>
                    )}
                  </div>
                  <h2 className="font-display font-bold text-[26px] text-neutral-900 mb-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:text-brand-primary transition-colors"
                    >
                      {service.title}
                    </Link>
                  </h2>
                  <p className="font-body text-[16px] text-neutral-600 leading-[1.65] mb-5">
                    {service.longDescription}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {service.inclusions.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5 font-body text-[14px] text-neutral-700">
                        <Check
                          size={16}
                          className={`mt-0.5 flex-shrink-0 ${isSnow ? 'text-haint-700' : 'text-green-600'}`}
                          strokeWidth={2.5}
                        />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-3 items-center">
                    <Link
                      href={`/services/${service.slug}`}
                      className={`inline-flex items-center gap-1.5 font-display font-bold text-[14px] tracking-[0.03em] px-5 py-3 rounded-md border-2 transition-colors ${
                        isSnow
                          ? 'text-haint-700 border-haint-700 hover:bg-haint-50'
                          : 'text-brand-primary border-brand-primary hover:bg-surface-alt'
                      }`}
                    >
                      Learn more
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                    <Link
                      href={`/estimate?service=${service.slug}`}
                      className={`inline-flex items-center gap-2 font-display font-bold text-[14px] tracking-[0.03em] px-5 py-3 rounded-md shadow-cta transition-all ${
                        isSnow
                          ? 'bg-haint-700 text-white hover:bg-haint-900'
                          : 'bg-brand-primary text-white hover:bg-green-800'
                      }`}
                    >
                    Get a quote for {service.title.replace(' Services', '')}
                    <ArrowRight size={15} strokeWidth={2.5} />
                  </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
