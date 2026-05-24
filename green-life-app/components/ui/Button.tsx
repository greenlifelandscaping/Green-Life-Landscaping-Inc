import Link from 'next/link';
import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark' | 'earth';
type Size = 'sm' | 'default' | 'lg';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-primary text-white shadow-cta hover:bg-green-800 hover:-translate-y-px hover:shadow-cta-strong',
  secondary:
    'bg-white text-brand-primary border-2 border-brand-primary hover:bg-surface-alt hover:-translate-y-px',
  ghost:
    'bg-transparent text-white border-[1.5px] border-green-200/80 hover:bg-white/10 hover:border-white',
  dark:
    'bg-brand-dark text-white hover:bg-green-900/90 hover:-translate-y-px',
  earth:
    'bg-brand-secondary text-white hover:bg-earth-700 hover:-translate-y-px',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-[13px]',
  default: 'px-6 py-3 text-[15px]',
  lg: 'px-8 py-4 text-[17px]',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-display font-bold tracking-[0.03em] rounded-md transition-all duration-200 ease-out disabled:bg-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-y-0 disabled:hover:translate-y-0';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className' | 'href'> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = 'primary',
      size = 'default',
      fullWidth = false,
      className = '',
      children,
    } = props;

    const classes = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      fullWidth ? 'w-full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    if ('href' in props && props.href) {
      const { href, variant: _v, size: _s, fullWidth: _fw, className: _c, children: _ch, ...rest } = props;
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...rest}
        >
          {children}
        </Link>
      );
    }

    const { variant: _v, size: _s, fullWidth: _fw, className: _c, children: _ch, ...rest } =
      props as ButtonAsButton;
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...rest}>
        {children}
      </button>
    );
  }
);
