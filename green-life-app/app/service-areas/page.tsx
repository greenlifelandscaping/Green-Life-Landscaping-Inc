import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { SubHero } from '@/components/sections/SubHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { CITIES, SITE, PAGE_HEROES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Service Areas — Maryland Cities We Serve',
  description: `Green Life Landscaping Inc serves Columbia, Ellicott City, Elkridge, Glen Burnie, Severna Park, Annapolis, Bowie, Catonsville, Laurel, Sykesville, and surrounding Maryland communities. Free estimates — call ${SITE.phone}.`,
  alternates: { canonical: '/service-areas' },
};

const TIER_LABELS: Record<number, { label: string; sub: string }> = {
  1: {
    label: 'Top Service Areas',
    sub: 'Highest density of Green Life clients. Same-day route capacity, dedicated crews already nearby.',
  },
  2: {
    label: 'Growing Markets',
    sub: 'Strong client base in these cities with weekly route coverage and full service capacity.',
  },
  3: {
    label: 'Strategic Coverage',
    sub: 'Premium service areas on the perimeter — bigger lot work, dedicated trips, full design-build scope.',
  },
};

export default function ServiceAreasPage() {
  const tiers = [1, 2, 3] as const;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
        ]}
      />
      <SubHero
        breadcrumbLabel="Service Areas"
        title="Maryland Communities We Serve"
        description="Green Life Landscaping has been on Maryland properties since 2005. Below are the cities where we hold the densest client coverage — but if your town isn’t listed, call us. We very likely already serve it."
        backgroundImage={PAGE_HEROES.services}
      />

      <section className="bg-surface-base section-pad">
        <div className="container-page space-y-14">
          {tiers.map((tier) => {
            const cities = CITIES.filter((c) => c.tier === tier);
            const meta = TIER_LABELS[tier];
            // Match lg column count to the tier's card count so the row fills with no orphan cells.
            // Falls back to grid-cols-3 for counts that naturally divide evenly (3, 6, 9...).
            const lgCols =
              cities.length === 1
                ? 'lg:grid-cols-1'
                : cities.length === 2
                  ? 'lg:grid-cols-2'
                  : cities.length === 4
                    ? 'lg:grid-cols-4'
                    : 'lg:grid-cols-3';
            return (
              <section key={tier}>
                <div className="mb-6">
                  <span className="inline-block font-display font-bold text-overline uppercase text-brand-primary mb-2">
                    Tier {tier}
                  </span>
                  <h2 className="font-display font-bold text-fluid-h2 text-neutral-900 mb-2">
                    {meta.label}
                  </h2>
                  <p className="font-body text-[16px] text-neutral-600 max-w-2xl leading-[1.65]">
                    {meta.sub}
                  </p>
                </div>

                <div className={`grid grid-cols-1 sm:grid-cols-2 ${lgCols} gap-5`}>
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/service-areas/${city.slug}`}
                      className="group flex flex-col bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-250 ease-out p-6 hover:-translate-y-0.5 h-full"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="h-9 w-9 rounded-md bg-surface-alt text-brand-primary flex items-center justify-center">
                          <MapPin size={18} strokeWidth={2.25} />
                        </span>
                        <h3 className="font-display font-bold text-[18px] text-neutral-900 flex-1">
                          {city.fullName}
                        </h3>
                      </div>
                      <div className="font-display font-semibold text-[12px] tracking-[0.04em] uppercase text-neutral-400 mb-2">
                        {city.county}
                      </div>
                      <p className="font-body text-[13.5px] text-neutral-600 leading-[1.6] mb-4 line-clamp-4">
                        {city.intro.split('. ')[0]}.
                      </p>
                      <div className="font-body text-[12px] text-neutral-500 mb-4">
                        {city.neighborhoods.slice(0, 4).join(' · ')}
                        {city.neighborhoods.length > 4 ? ` · +${city.neighborhoods.length - 4} more` : ''}
                      </div>
                      <span className="mt-auto inline-flex items-center gap-1 font-display font-bold text-[13px] text-brand-primary group-hover:gap-2 transition-all">
                        Landscaping in {city.name}
                        <ArrowRight size={13} strokeWidth={2.5} />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <CTABanner
        title={
          <>
            Don’t see your town?
            <br />
            <em className="not-italic text-brand-accent">Call us — we probably serve it.</em>
          </>
        }
        subtitle="Our crews already drive most of Anne Arundel, Howard, Prince George’s, Baltimore, and Carroll counties. There’s a strong chance we already pass your street."
      />
    </>
  );
}
