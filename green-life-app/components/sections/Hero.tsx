import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Phone } from 'lucide-react';
import { SITE, HERO_STATS, PAGE_HEROES } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative bg-brand-dark overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Image
          src={PAGE_HEROES.home}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/60 via-brand-dark/40 to-green-800/60" />
      </div>

      <div className="relative container-page py-12 sm:py-16 lg:py-20">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-pill px-4 py-1.5 mb-6">
          <span className="h-1.5 w-1.5 bg-brand-accent rounded-full" />
          <span className="font-display font-semibold text-[12px] tracking-[0.05em] text-white/90">
            Serving Burtonsville &amp; Montgomery County Since {SITE.foundedYear}
          </span>
        </div>

        <h1 className="font-display font-extrabold text-fluid-hero text-white max-w-[680px] mb-5">
          Landscaping Services
          <br className="hidden sm:block" />{' '}
          in <em className="not-italic text-brand-accent">Burtonsville, MD</em>
        </h1>

        <p className="font-body text-fluid-body-lg text-white/90 max-w-[520px] mb-8 sm:mb-9">
          Dependable lawn care, professional landscaping, and reliable outdoor services — done
          right, every time. Your property deserves a crew that actually shows up.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5">
          <Link
            href="/estimate"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary font-display font-bold text-fluid-cta tracking-[0.03em] px-6 sm:px-8 py-3.5 sm:py-4 rounded-md shadow-card hover:bg-surface-alt hover:-translate-y-0.5 transition-all"
          >
            <Calendar size={18} strokeWidth={2.25} />
            Get a Free Estimate
          </Link>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-transparent text-white/90 border-2 border-white/35 font-display font-bold text-fluid-cta tracking-[0.03em] px-6 sm:px-8 py-3.5 sm:py-4 rounded-md hover:bg-white/10 hover:border-white/60 transition-all"
          >
            <Phone size={18} strokeWidth={2.25} />
            {SITE.phone}
          </a>
        </div>

        <div className="mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-x-6 sm:gap-x-10 gap-y-5 sm:gap-y-6">
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-extrabold text-[22px] sm:text-[26px] lg:text-[30px] leading-none text-white">
                {stat.num}
              </div>
              <div className="font-body text-[11px] sm:text-[12px] text-white/60 mt-1.5 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
