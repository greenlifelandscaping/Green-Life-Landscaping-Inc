import Link from 'next/link';
import { Calendar, Phone } from 'lucide-react';
import { SITE } from '@/lib/constants';

type CTABannerProps = {
  title?: React.ReactNode;
  subtitle?: string;
};

export function CTABanner({
  title = (
    <>
      Ready for a yard you’re
      <br />
      <em className="not-italic text-brand-accent">proud to come home to?</em>
    </>
  ),
  subtitle = 'Free estimates. No pressure. Honest work from a crew that shows up.',
}: CTABannerProps) {
  return (
    <section className="bg-brand-primary">
      <div className="container-page py-14 lg:py-[68px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8 text-center lg:text-left">
          <div>
            <h2 className="font-display font-bold text-fluid-h2 leading-[1.25] text-white">
              {title}
            </h2>
            <p className="font-body text-fluid-body-lg text-white/80 mt-3">{subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 lg:flex-shrink-0 lg:items-center justify-center">
            <Link
              href="/estimate#estimate-form"
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
        </div>
      </div>
    </section>
  );
}
