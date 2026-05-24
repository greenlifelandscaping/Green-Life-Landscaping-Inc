import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';

type SubHeroProps = {
  overline?: string;
  title: string;
  description?: string;
  backgroundImage?: string;
  breadcrumbLabel?: string;
  children?: ReactNode;
};

export function SubHero({
  overline,
  title,
  description,
  backgroundImage,
  breadcrumbLabel,
  children,
}: SubHeroProps) {
  return (
    <section className="relative bg-brand-dark overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/50 via-transparent to-brand-dark/70" />
        </div>
      )}
      <div className="relative container-page py-12 sm:py-16 lg:py-[72px]">
        {breadcrumbLabel && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 font-display font-semibold text-[12px] tracking-[0.04em] uppercase text-white/60 mb-4 sm:mb-5"
          >
            <Link href="/" className="text-brand-accent hover:text-green-300">
              Home
            </Link>
            <ChevronRight size={12} />
            <span>{breadcrumbLabel}</span>
          </nav>
        )}
        {overline && !breadcrumbLabel && (
          <span className="inline-block font-display font-bold text-overline text-brand-accent mb-4">
            {overline}
          </span>
        )}
        <h1 className="font-display font-extrabold text-fluid-h1 text-white max-w-[720px] mb-3 sm:mb-4">
          {title}
        </h1>
        {description && (
          <p className="font-body text-fluid-body-lg text-white/90 max-w-[580px]">
            {description}
          </p>
        )}
        {children && <div className="mt-6 sm:mt-7">{children}</div>}
      </div>
    </section>
  );
}
