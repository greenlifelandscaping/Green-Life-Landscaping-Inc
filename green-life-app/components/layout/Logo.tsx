import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  variant?: 'light' | 'dark';
  size?: number;
  className?: string;
};

export function Logo({ variant = 'light', size = 108, className = '' }: LogoProps) {
  const src = variant === 'dark' ? '/logos/dark-bg.png' : '/logos/light-bg.png';
  return (
    <Link
      href="/"
      className={`inline-flex items-center group ${className}`}
      aria-label="Green Life Landscaping — home"
    >
      <Image
        src={src}
        alt="Green Life Landscaping Inc"
        width={size * 3}
        height={size}
        priority
        style={{ height: size, width: 'auto' }}
        className="block"
      />
    </Link>
  );
}
