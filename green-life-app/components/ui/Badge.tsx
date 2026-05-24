import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'green' | 'earth' | 'gray' | 'dark';

const variantClasses: Record<Variant, string> = {
  green: 'bg-green-100 text-green-900',
  earth: 'bg-earth-100 text-earth-900',
  gray: 'bg-neutral-100 text-neutral-600',
  dark: 'bg-brand-dark text-white',
};

type BadgeProps = {
  variant?: Variant;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
};

export function Badge({ variant = 'green', icon: Icon, children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-display font-semibold text-[11px] tracking-[0.04em] rounded-pill px-2.5 py-1 ${variantClasses[variant]} ${className}`}
    >
      {Icon ? <Icon size={12} strokeWidth={2.5} /> : null}
      {children}
    </span>
  );
}
