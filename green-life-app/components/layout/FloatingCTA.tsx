import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';
import { SITE } from '@/lib/constants';

export function FloatingCTA() {
  return (
    <div
      className="fixed z-40 bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-3 bg-white rounded-pill px-2.5 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.18)] whitespace-nowrap"
      role="region"
      aria-label="Quick contact"
    >
      <a
        href={SITE.phoneHref}
        className="inline-flex items-center gap-2 bg-surface-alt text-brand-primary font-display font-bold text-[14px] tracking-[0.03em] px-5 py-2.5 rounded-pill hover:bg-green-100 transition-colors"
      >
        <Phone size={16} strokeWidth={2.25} />
        Call Us
      </a>
      <Link
        href="/estimate"
        className="inline-flex items-center gap-2 bg-brand-primary text-white font-display font-bold text-[14px] tracking-[0.03em] px-5 py-2.5 rounded-pill shadow-cta hover:bg-green-800 transition-colors"
      >
        <Calendar size={16} strokeWidth={2.25} />
        Free Estimate
      </Link>
    </div>
  );
}

export function MobileFloatingCTA() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 sm:hidden flex gap-2 bg-white border-t border-neutral-200 px-3 py-2 shadow-[0_-2px_16px_rgba(0,0,0,0.12)]"
      style={{ paddingBottom: 'calc(8px + env(safe-area-inset-bottom))' }}
      role="region"
      aria-label="Quick contact"
    >
      <a
        href={SITE.phoneHref}
        className="flex-1 inline-flex items-center justify-center gap-2 bg-surface-alt text-brand-primary font-display font-bold text-[14px] px-3.5 py-3 rounded-[10px] min-h-[50px]"
      >
        <Phone size={16} strokeWidth={2.25} />
        Call Us
      </a>
      <Link
        href="/estimate"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-display font-bold text-[14px] px-3.5 py-3 rounded-[10px] shadow-cta min-h-[50px]"
      >
        <Calendar size={16} strokeWidth={2.25} />
        Free Estimate
      </Link>
    </div>
  );
}
