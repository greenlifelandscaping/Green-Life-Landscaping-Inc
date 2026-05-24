import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type CardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  size?: 'default' | 'large';
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  ctaLabel = 'Learn more',
  size = 'default',
}: CardProps) {
  const isLarge = size === 'large';
  const content = (
    <div
      className={`group bg-white rounded-lg shadow-card transition-all duration-250 ease-out hover:shadow-card-hover hover:-translate-y-0.5 h-full flex flex-col ${
        isLarge ? 'p-7' : 'p-5'
      }`}
    >
      <div
        className={`flex items-center justify-center bg-surface-alt rounded-md text-brand-primary ${
          isLarge ? 'h-14 w-14 mb-5' : 'h-10 w-10 mb-4'
        }`}
      >
        <Icon size={isLarge ? 28 : 20} strokeWidth={2} />
      </div>
      <h3
        className={`font-display font-bold text-neutral-900 ${
          isLarge ? 'text-h4 mb-3' : 'text-[13px] leading-tight mb-2'
        }`}
      >
        {title}
      </h3>
      <p
        className={`font-body text-neutral-500 ${
          isLarge ? 'text-body mb-5 flex-1' : 'text-[11px] leading-[1.55] flex-1'
        }`}
      >
        {description}
      </p>
      {href ? (
        <span
          className={`mt-auto inline-flex items-center gap-1 text-brand-primary font-display font-bold ${
            isLarge ? 'text-[13px]' : 'text-[11px]'
          } group-hover:gap-2 transition-all`}
        >
          {ctaLabel}
          <ArrowRight size={isLarge ? 14 : 12} strokeWidth={2.5} />
        </span>
      ) : null}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label={`${title} — ${ctaLabel}`} className="block h-full">
        {content}
      </Link>
    );
  }
  return content;
}
