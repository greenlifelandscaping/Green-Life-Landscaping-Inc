import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Calendar,
  Phone,
  ShieldCheck,
  CalendarCheck,
  MapPin,
} from 'lucide-react';
import { SubHero } from '@/components/sections/SubHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { SERVICES, SITE, PAGE_HEROES } from '@/lib/constants';

const SERVICE_HERO_MAP: Record<string, string> = {
  'lawn-care': PAGE_HEROES.lawnCare,
  landscaping: PAGE_HEROES.landscaping,
  'tree-services': PAGE_HEROES.treeServices,
  hardscaping: PAGE_HEROES.hardscaping,
  'snow-removal': PAGE_HEROES.snowRemoval,
};

const INLINE_PHOTOS: Record<string, string[]> = {
  'lawn-care': ['/gallery/project-04.jpeg', '/gallery/project-09.jpeg'],
  landscaping: ['/gallery/project-29.jpeg', '/gallery/project-23.jpeg'],
  'tree-services': ['/gallery/project-19.jpeg', '/gallery/project-20.jpeg'],
  hardscaping: ['/gallery/hardscaping-feature.jpeg', '/gallery/project-26.jpeg'],
  'snow-removal': ['/gallery/snow-04.jpeg', '/gallery/snow-06.jpeg'],
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} in Burtonsville, MD`,
    description: service.longDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${SITE.name}`,
      description: service.shortDescription,
      url: `${SITE.url}/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = service.icon;
  const isSnow = service.seasonal;
  const hero = SERVICE_HERO_MAP[service.slug];
  const inlinePhotos = INLINE_PHOTOS[service.slug] ?? [];
  const others = SERVICES.filter((s) => s.slug !== service.slug);
  const detail = service.detail;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />
      <SubHero
        breadcrumbLabel={service.title}
        title={detail?.headline ?? service.title}
        description={service.longDescription}
        backgroundImage={hero}
        variant={isSnow ? 'snow' : 'green'}
      >
        <div className="flex flex-wrap gap-2">
          {service.startingPrice && (
            <span
              className={`inline-flex items-center gap-1.5 bg-white font-display font-extrabold text-[11px] tracking-[0.06em] uppercase px-3 py-1.5 rounded-pill shadow-card ${
                isSnow ? 'text-haint-700' : 'text-brand-primary'
              }`}
            >
              {service.startingPrice}
            </span>
          )}
          {[
            { icon: ShieldCheck, label: 'Licensed & Insured' },
            { icon: CalendarCheck, label: 'Serving Since 2005' },
            { icon: MapPin, label: 'Montgomery County, MD' },
          ].map(({ icon: IconBadge, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-pill px-3.5 py-1.5 font-display font-semibold text-[12px] text-white/95"
            >
              <IconBadge size={14} className={isSnow ? 'text-haint-300' : 'text-brand-accent'} />
              {label}
            </span>
          ))}
        </div>
      </SubHero>

      <section className="bg-surface-base section-pad">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-start">
            {/* Main column */}
            <article className="bg-white rounded-xl shadow-card p-7 lg:p-10">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`h-12 w-12 rounded-[12px] flex items-center justify-center ${
                    isSnow
                      ? 'bg-haint-50 text-haint-700 border border-haint-300'
                      : 'bg-surface-alt text-brand-primary'
                  }`}
                >
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h2 className="font-display font-bold text-fluid-h2 text-neutral-900">
                  {service.title}
                </h2>
              </div>

              <div className="space-y-4 font-body text-[16px] text-neutral-700 leading-[1.75]">
                {detail?.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>

              {/* What's included */}
              <div className="mt-9 bg-surface-base rounded-lg p-6">
                <h3 className="font-display font-semibold text-[13px] tracking-[0.06em] uppercase text-neutral-700 mb-4">
                  What’s included
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className={`flex-shrink-0 h-5 w-5 rounded-sm flex items-center justify-center mt-0.5 ${
                          isSnow ? 'bg-haint-50 text-haint-700' : 'bg-green-100 text-green-800'
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="font-body text-[14px] text-neutral-700 leading-[1.55]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inline photos */}
              {inlinePhotos.length > 0 && (
                <div className="mt-9 grid grid-cols-2 gap-4">
                  {inlinePhotos.map((src, i) => (
                    <div
                      key={src}
                      className="relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100"
                    >
                      <Image
                        src={src}
                        alt={`${service.title} project ${i + 1} by Green Life Landscaping`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 360px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Why us cards */}
              {detail?.benefits && (
                <div className="mt-10">
                  <h3 className="font-display font-bold text-fluid-h3 text-neutral-900 mb-5">
                    Why homeowners pick us for {service.title.toLowerCase()}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {detail.benefits.map((b, i) => {
                      const isOrphan =
                        detail.benefits.length % 2 === 1 &&
                        i === detail.benefits.length - 1;
                      return (
                        <div
                          key={b.title}
                          className={`rounded-lg p-5 ${
                            isSnow ? 'bg-haint-50' : 'bg-surface-alt'
                          } ${
                            isOrphan
                              ? 'sm:col-span-2 sm:flex sm:items-start sm:gap-5'
                              : ''
                          }`}
                        >
                          <div
                            className={`h-9 w-9 rounded-md bg-white shadow-card flex items-center justify-center mb-3 ${
                              isOrphan ? 'sm:mb-0 sm:shrink-0' : ''
                            } ${
                              isSnow ? 'text-haint-700' : 'text-brand-primary'
                            }`}
                          >
                            <Check size={16} strokeWidth={2.5} />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-[14px] text-neutral-900 mb-1.5">
                              {b.title}
                            </h4>
                            <p className="font-body text-[13px] text-neutral-600 leading-[1.55]">
                              {b.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* CTA + back link */}
              <div className="mt-10 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 font-display font-semibold text-[13px] text-neutral-600 hover:text-brand-primary"
                >
                  <ArrowLeft size={14} />
                  All services
                </Link>
                <Link
                  href={`/estimate?service=${service.slug}#estimate-form`}
                  className={`inline-flex items-center justify-center gap-2 font-display font-bold text-fluid-cta tracking-[0.03em] px-6 py-3.5 rounded-md shadow-cta transition-all ${
                    isSnow
                      ? 'bg-haint-700 text-white hover:bg-haint-900'
                      : 'bg-brand-primary text-white hover:bg-green-800'
                  }`}
                >
                  Get a free {service.title.toLowerCase()} quote
                  <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-[112px] flex flex-col gap-5">
              <div className="bg-white rounded-xl shadow-card p-6">
                <h3 className="font-display font-bold text-[14px] tracking-[0.04em] uppercase text-neutral-900 mb-4">
                  Other Services
                </h3>
                <ul className="flex flex-col gap-1">
                  {others.map((s) => {
                    const SIcon = s.icon;
                    const isSnowy = s.seasonal;
                    return (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-md font-display font-semibold text-[13px] transition-colors ${
                            isSnowy
                              ? 'text-haint-700 hover:bg-haint-50'
                              : 'text-neutral-700 hover:bg-surface-alt hover:text-brand-primary'
                          }`}
                        >
                          <SIcon
                            size={16}
                            className={isSnowy ? 'text-haint-700' : 'text-brand-primary'}
                          />
                          <span className="flex-1">{s.title}</span>
                          <ArrowRight size={12} className="opacity-50" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div
                className={`text-white rounded-xl p-6 shadow-card ${
                  isSnow ? 'bg-haint-900' : 'bg-brand-dark'
                }`}
              >
                <h3 className="font-display font-extrabold text-[20px] leading-tight text-white mb-2.5">
                  Ready for a quote?
                </h3>
                <p className="font-body text-[13px] text-white/80 leading-[1.6] mb-5">
                  Free, no-obligation estimates within one business day.
                </p>
                <Link
                  href={`/estimate?service=${service.slug}#estimate-form`}
                  className={`w-full inline-flex items-center justify-center gap-2 bg-white font-display font-bold text-[14px] tracking-[0.03em] px-5 py-3 rounded-md hover:bg-surface-alt transition-colors ${
                    isSnow ? 'text-haint-700' : 'text-brand-primary'
                  }`}
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
            </aside>
          </div>
        </div>
      </section>

      <CTABanner
        variant={isSnow ? 'snow' : 'green'}
        title={
          <>
            Ready to schedule
            <br />
            <em className={`not-italic ${isSnow ? 'text-haint-300' : 'text-brand-accent'}`}>
              your {service.title.toLowerCase()}?
            </em>
          </>
        }
        subtitle="Free estimates. Honest pricing. Maryland-licensed crew."
      />
    </>
  );
}
