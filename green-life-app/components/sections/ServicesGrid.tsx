import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

export function ServicesGrid() {
  return (
    <section id="services" className="bg-surface-base section-pad">
      <div className="container-page">
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <span className="inline-block font-display font-bold text-overline uppercase text-brand-primary mb-2.5">
            What We Do
          </span>
          <h2 className="font-display font-bold text-fluid-h2 text-neutral-900 mb-4">
            Full-Service Outdoor Solutions
          </h2>
          <p className="font-body text-[17px] text-neutral-600 leading-[1.65]">
            From weekly lawn maintenance to large-scale landscaping projects — we handle
            everything your property needs, with the consistency you can count on.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            const isSnow = service.seasonal;
            // If SERVICES count is odd, the last card fills the orphan space at every breakpoint:
            //   sm (2 cols): span 2 → fills the entire last row
            //   md+ (3 cols): span 2 → fills the 2 empty trailing cells
            // It also switches to a horizontal icon+text layout so the wider card reads as deliberate.
            const isOrphan = SERVICES.length % 2 === 1 && idx === SERVICES.length - 1;
            const orphanSpan = isOrphan ? 'sm:col-span-2 md:col-span-2' : '';
            const orphanLayout = isOrphan ? 'sm:flex-row sm:gap-6' : '';
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group flex flex-col bg-white rounded-lg shadow-card transition-all duration-250 ease-out p-7 hover:shadow-card-hover hover:-translate-y-0.5 ${orphanLayout} ${
                  isSnow
                    ? 'bg-gradient-to-br from-haint-50 to-white border border-haint-300 hover:shadow-[0_8px_32px_rgba(74,124,130,0.22)]'
                    : ''
                } ${orphanSpan}`}
              >
                <div
                  className={`flex items-center justify-center h-12 w-12 rounded-[12px] mb-4 ${
                    isOrphan ? 'sm:mb-0 sm:shrink-0 sm:self-start' : ''
                  } ${
                    isSnow
                      ? 'bg-haint-50 border border-haint-300 text-haint-700'
                      : 'bg-surface-alt text-brand-primary'
                  }`}
                >
                  <Icon size={24} strokeWidth={2} />
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="font-display font-bold text-[15px] text-neutral-900 mb-2 flex items-center gap-2">
                    {service.title}
                    {service.seasonal && (
                      <span className="font-display font-extrabold text-[9.5px] tracking-[0.08em] uppercase bg-haint-50 text-haint-900 border border-haint-300 px-1.5 py-0.5 rounded-pill">
                        Seasonal
                      </span>
                    )}
                  </h3>
                  <p className="font-body text-[13px] text-neutral-600 leading-[1.6] flex-1">
                    {service.shortDescription}
                  </p>
                  <span
                    className={`mt-3.5 inline-flex items-center gap-1 font-display font-bold text-[12px] tracking-[0.03em] group-hover:gap-2 transition-all ${
                      isSnow ? 'text-haint-700' : 'text-brand-primary'
                    }`}
                  >
                    Learn more
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-9 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-transparent text-brand-primary border-2 border-brand-primary font-display font-bold text-[15px] tracking-[0.03em] px-6 py-3 rounded-md hover:bg-surface-alt transition-colors"
          >
            View All Services
            <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
