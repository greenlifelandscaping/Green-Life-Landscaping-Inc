import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, MapPin, ShieldCheck, CalendarCheck, Phone, Calendar, Check } from 'lucide-react';
import { SubHero } from '@/components/sections/SubHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { SITE, CITIES, SERVICES, PAGE_HEROES } from '@/lib/constants';

type Props = { params: { city: string } };

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const city = CITIES.find((c) => c.slug === params.city);
  if (!city) return {};
  const title = `Landscaping in ${city.fullName} — Lawn Care, Hardscaping & More`;
  const description = `${city.name} landscaping by Green Life Landscaping Inc. Lawn care, hardscaping, tree services, snow removal & seasonal cleanups across ${city.county}. Licensed, insured, free estimates. Call ${SITE.phone}.`;
  return {
    title,
    description,
    alternates: { canonical: `/service-areas/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/service-areas/${city.slug}`,
      type: 'website',
    },
    keywords: [
      `landscaping ${city.name} MD`,
      `lawn care ${city.name}`,
      `${city.name} landscaper`,
      `landscaping ${city.county}`,
      `tree service ${city.name}`,
      `hardscaping ${city.name} MD`,
      `snow removal ${city.name}`,
    ],
  };
}

export default function CityPage({ params }: Props) {
  const city = CITIES.find((c) => c.slug === params.city);
  if (!city) notFound();

  const tierLabel =
    city.tier === 1 ? 'Top Service Area' : city.tier === 2 ? 'Growing Service Area' : 'Service Area';

  // City-specific LocalBusiness JSON-LD — distinct from the root one so each
  // page tells Google "Green Life serves THIS specific city."
  const cityBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LandscapingBusiness',
    '@id': `${SITE.url}/service-areas/${city.slug}#business`,
    name: `${SITE.name} — ${city.fullName}`,
    description: `Landscaping, lawn care, hardscaping, tree services, and snow removal in ${city.fullName}.`,
    url: `${SITE.url}/service-areas/${city.slug}`,
    telephone: `+1-${SITE.phone.replace(/\D/g, '')}`,
    image: `${SITE.url}/logos/light-bg.png`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: { '@type': 'AdministrativeArea', name: city.county },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      // Numbers, not strings — matches the root layout's AggregateRating
      // and satisfies Google's strict Integer/Number requirement on
      // reviewCount/ratingValue. See layout.tsx for the GSC issue this fixes.
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
          { name: city.fullName, path: `/service-areas/${city.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityBusinessSchema) }}
      />

      <SubHero
        breadcrumbLabel={city.name}
        title={`Landscaping in ${city.fullName}`}
        description={`Lawn care, landscaping, hardscaping, tree services, and snow removal for ${city.name} homeowners and businesses. Locally based, licensed and insured, free no-obligation estimates.`}
        backgroundImage={PAGE_HEROES.services}
      >
        <div className="flex gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-white text-brand-primary font-display font-extrabold text-[11px] tracking-[0.06em] uppercase px-3 py-1.5 rounded-pill shadow-card">
            <MapPin size={12} strokeWidth={2.5} />
            {tierLabel}
          </span>
          {[
            { icon: ShieldCheck, label: 'Licensed & Insured' },
            { icon: CalendarCheck, label: 'Serving Since 2005' },
            { icon: MapPin, label: city.county },
          ].map(({ icon: IconBadge, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-pill px-3.5 py-1.5 font-display font-semibold text-[12px] text-white/95"
            >
              <IconBadge size={14} className="text-brand-accent" />
              {label}
            </span>
          ))}
        </div>
      </SubHero>

      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-start">
            {/* Main column */}
            <article>
              <span className="inline-block font-display font-bold text-overline uppercase text-brand-primary mb-3">
                Why {city.name}
              </span>
              <h2 className="font-display font-bold text-fluid-h2 text-neutral-900 mb-5">
                Local landscaping for {city.fullName}
              </h2>
              <p className="font-body text-[17px] text-neutral-700 leading-[1.75] mb-10">
                {city.intro}
              </p>

              {/* Services we offer in this city */}
              <h3 className="font-display font-bold text-fluid-h3 text-neutral-900 mb-5">
                Services we deliver in {city.name}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {SERVICES.map((s) => {
                  const Icon = s.icon;
                  const isSnow = s.seasonal;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className={`group flex items-start gap-3.5 bg-surface-base rounded-lg p-5 hover:shadow-card transition-shadow ${
                        isSnow ? 'bg-haint-50' : ''
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 h-10 w-10 rounded-[10px] flex items-center justify-center ${
                          isSnow
                            ? 'bg-haint-50 text-haint-700 border border-haint-300'
                            : 'bg-surface-alt text-brand-primary'
                        }`}
                      >
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      <div>
                        <div className="font-display font-bold text-[14px] text-neutral-900 mb-1 flex items-center gap-1 group-hover:gap-2 transition-all">
                          {s.title}
                          <ArrowRight size={12} strokeWidth={2.5} className="opacity-60" />
                        </div>
                        <p className="font-body text-[12.5px] text-neutral-600 leading-[1.55]">
                          {s.shortDescription.split('.')[0]}.
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* City-specific characteristics */}
              <h3 className="font-display font-bold text-fluid-h3 text-neutral-900 mb-5">
                What makes {city.name} different
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {city.characteristics.map((c) => (
                  <div key={c.title} className="bg-surface-alt rounded-lg p-5">
                    <div className="h-9 w-9 rounded-md bg-white shadow-card flex items-center justify-center text-brand-primary mb-3">
                      <Check size={16} strokeWidth={2.5} />
                    </div>
                    <h4 className="font-display font-bold text-[14px] text-neutral-900 mb-1.5">
                      {c.title}
                    </h4>
                    <p className="font-body text-[13px] text-neutral-600 leading-[1.6]">{c.body}</p>
                  </div>
                ))}
              </div>

              {/* Neighborhoods */}
              <h3 className="font-display font-bold text-fluid-h3 text-neutral-900 mb-5">
                Neighborhoods we serve in {city.name}
              </h3>
              <ul className="flex flex-wrap gap-2 mb-12">
                {city.neighborhoods.map((n) => (
                  <li
                    key={n}
                    className="inline-flex items-center gap-1.5 bg-surface-alt rounded-pill px-3.5 py-1.5 font-display font-semibold text-[13px] text-brand-primary"
                  >
                    <MapPin size={12} strokeWidth={2.5} />
                    {n}
                  </li>
                ))}
              </ul>

              {/* Map */}
              <h3 className="font-display font-bold text-fluid-h3 text-neutral-900 mb-5">
                {city.name} on the map
              </h3>
              <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-card mb-12">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    `${city.fullName} ${city.zips[0]}`,
                  )}&output=embed&z=12`}
                  title={`Map of ${city.fullName} — Green Life Landscaping service area`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full h-[280px] sm:h-[360px] lg:h-[420px]"
                />
              </div>

              {/* FAQ */}
              <h3 className="font-display font-bold text-fluid-h3 text-neutral-900 mb-5">
                {city.name} FAQ
              </h3>
              <div className="space-y-4 mb-12">
                {city.faq.map((item) => (
                  <details
                    key={item.q}
                    className="bg-surface-base rounded-lg p-5 group [&_summary]:cursor-pointer"
                  >
                    <summary className="font-display font-bold text-[15px] text-neutral-900 list-none flex items-start gap-2.5">
                      <span className="flex-shrink-0 h-5 w-5 mt-0.5 rounded-full bg-brand-primary text-white text-[12px] inline-flex items-center justify-center group-open:bg-brand-dark">
                        Q
                      </span>
                      {item.q}
                    </summary>
                    <p className="font-body text-[14px] text-neutral-600 leading-[1.7] mt-3 pl-7">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>

              {/* JSON-LD FAQPage schema — boosts FAQ rich-result chances */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: city.faq.map((f) => ({
                      '@type': 'Question',
                      name: f.q,
                      acceptedAnswer: { '@type': 'Answer', text: f.a },
                    })),
                  }),
                }}
              />

              {/* CTA + back link */}
              <div className="mt-2 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <Link
                  href="/service-areas"
                  className="inline-flex items-center gap-1.5 font-display font-semibold text-[13px] text-neutral-600 hover:text-brand-primary"
                >
                  ← All service areas
                </Link>
                <Link
                  href={`/estimate?city=${city.slug}#estimate-form`}
                  className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-display font-bold text-fluid-cta tracking-[0.03em] px-6 py-3.5 rounded-md shadow-cta hover:bg-green-800 transition-all"
                >
                  Get a free {city.name} estimate
                  <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-[112px] flex flex-col gap-5">
              <div className="bg-white rounded-xl shadow-card p-6 border border-neutral-100">
                <div className="font-display font-bold text-[11px] tracking-[0.08em] uppercase text-neutral-400 mb-2">
                  Coverage
                </div>
                <div className="font-display font-extrabold text-[20px] text-neutral-900 mb-1">
                  {city.fullName}
                </div>
                <div className="font-body text-[13px] text-neutral-600 mb-4">{city.county}</div>
                <div className="font-display font-bold text-[11px] tracking-[0.08em] uppercase text-neutral-400 mb-2">
                  ZIPs served
                </div>
                <div className="font-body text-[14px] text-neutral-900">
                  {city.zips.join(' · ')}
                </div>
              </div>

              <div className="bg-brand-dark text-white rounded-xl p-6 shadow-card">
                <h3 className="font-display font-extrabold text-[20px] leading-tight text-white mb-2.5">
                  Free {city.name} estimate
                </h3>
                <p className="font-body text-[13px] text-white/80 leading-[1.6] mb-5">
                  We respond within one business day. No-obligation, no pressure.
                </p>
                <Link
                  href={`/estimate?city=${city.slug}#estimate-form`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-brand-primary font-display font-bold text-[14px] tracking-[0.03em] px-5 py-3 rounded-md hover:bg-surface-alt transition-colors"
                >
                  <Calendar size={15} strokeWidth={2.25} />
                  Free Estimate
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="mt-2.5 w-full inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 font-display font-bold text-[14px] tracking-[0.03em] px-5 py-3 rounded-md hover:bg-white/15 transition-colors"
                >
                  <Phone size={15} strokeWidth={2.25} />
                  {SITE.phone}
                </a>
              </div>

              {/* Other top cities */}
              <div className="bg-white rounded-xl shadow-card p-6 border border-neutral-100">
                <div className="font-display font-bold text-[11px] tracking-[0.08em] uppercase text-neutral-400 mb-3">
                  Also serving
                </div>
                <ul className="flex flex-col gap-1">
                  {CITIES.filter((c) => c.slug !== city.slug)
                    .slice(0, 6)
                    .map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/service-areas/${c.slug}`}
                          className="flex items-center justify-between gap-2 px-2.5 py-2 rounded-md font-display font-semibold text-[13px] text-neutral-700 hover:bg-surface-alt hover:text-brand-primary transition-colors"
                        >
                          <span>{c.name}</span>
                          <ArrowRight size={12} className="opacity-50" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Need a landscaper in {city.name}?
            <br />
            <em className="not-italic text-brand-accent">We’re already here.</em>
          </>
        }
        subtitle={`Free estimates, no pressure. Serving ${city.fullName} since 2005.`}
      />
    </>
  );
}
