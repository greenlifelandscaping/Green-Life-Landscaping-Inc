'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Calendar, ChevronDown, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_ITEMS, SITE, SERVICES } from '@/lib/constants';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? 'shadow-card-hover' : 'shadow-card'
      }`}
    >
      <nav aria-label="Primary" className="container-page">
        <div className="flex items-center justify-between h-[68px] lg:h-[96px]">
          <Logo size={88} className="hidden lg:inline-flex" />
          <Logo size={52} className="lg:hidden" />

          <ul className="hidden lg:flex items-center gap-0.5" role="list">
            {NAV_ITEMS.filter((i) => i.href !== '/services').slice(0, 2).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`inline-flex items-center px-3.5 py-2 rounded-md font-display font-semibold text-[13px] transition-colors ${
                    isActive(item.href)
                      ? 'text-brand-primary bg-surface-alt'
                      : 'text-neutral-700 hover:text-brand-primary hover:bg-surface-alt'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="relative group">
              <Link
                href="/services"
                aria-current={isActive('/services') ? 'page' : undefined}
                className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-md font-display font-semibold text-[13px] transition-colors ${
                  isActive('/services')
                    ? 'text-brand-primary bg-surface-alt'
                    : 'text-neutral-700 hover:text-brand-primary hover:bg-surface-alt group-hover:text-brand-primary group-hover:bg-surface-alt'
                }`}
              >
                Services
                <ChevronDown size={14} className="opacity-70 transition-transform group-hover:rotate-180" />
              </Link>

              <div
                role="menu"
                className="absolute top-full left-[-8px] min-w-[320px] bg-white rounded-lg shadow-[0_18px_48px_rgba(0,0,0,0.16),0_2px_6px_rgba(0,0,0,0.06)] border border-neutral-200 p-2 mt-3 opacity-0 invisible -translate-y-1.5 transition-all duration-150 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50 before:content-[''] before:absolute before:-top-3 before:inset-x-0 before:h-3"
              >
                {SERVICES.map((s) => {
                  const Icon = s.icon;
                  const isSnow = s.slug === 'snow-removal';
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className={`flex items-center gap-3 p-2.5 rounded-md transition-colors ${
                        isSnow ? 'hover:bg-haint-50' : 'hover:bg-surface-alt'
                      }`}
                    >
                      <span
                        className={`flex items-center justify-center h-9 w-9 rounded-[9px] flex-shrink-0 ${
                          isSnow
                            ? 'bg-haint-50 text-haint-700 border border-haint-300'
                            : 'bg-surface-alt text-brand-primary'
                        }`}
                      >
                        <Icon size={16} strokeWidth={2} />
                      </span>
                      <span className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-display font-bold text-[13.5px] text-neutral-900 inline-flex items-center gap-2">
                          {s.title.replace(' Services', '')}
                          {s.seasonal && (
                            <span className="font-display font-extrabold text-[9.5px] tracking-[0.08em] uppercase bg-haint-50 text-haint-900 border border-haint-300 px-1.5 py-0.5 rounded-pill">
                              Seasonal
                            </span>
                          )}
                        </span>
                        <span className="font-body text-[11.5px] text-neutral-600 leading-snug font-medium">
                          {s.shortDescription.split('.')[0]}
                        </span>
                      </span>
                    </Link>
                  );
                })}
                <Link
                  href="/services"
                  className="flex items-center justify-between px-3.5 py-2.5 mt-1 font-display font-bold text-[12px] tracking-[0.04em] uppercase text-brand-primary border-t border-neutral-200 hover:bg-surface-alt"
                >
                  View All Services
                  <ArrowRight size={13} strokeWidth={2.5} />
                </Link>
              </div>
            </li>

            {NAV_ITEMS.filter((i) => !['/', '/about', '/services'].includes(i.href)).map(
              (item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`inline-flex items-center px-3.5 py-2 rounded-md font-display font-semibold text-[13px] transition-colors ${
                      isActive(item.href)
                        ? 'text-brand-primary bg-surface-alt'
                        : 'text-neutral-700 hover:text-brand-primary hover:bg-surface-alt'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <Link
            href="/estimate#estimate-form"
            className="hidden lg:inline-flex items-center gap-1.5 bg-brand-primary text-white font-display font-bold text-[13px] tracking-[0.03em] px-5 py-2.5 rounded-md shadow-cta hover:bg-green-800 transition-all"
          >
            <Calendar size={14} strokeWidth={2.25} />
            Get a Free Estimate
          </Link>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-[10px] bg-surface-alt text-brand-primary"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="lg:hidden fixed inset-0 top-[68px] bg-brand-dark/40 backdrop-blur-[2px] z-40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-[68px] right-0 bottom-0 w-[86vw] max-w-[360px] bg-white shadow-[-16px_0_40px_rgba(0,0,0,0.18)] flex flex-col gap-1 p-5 overflow-y-auto z-50 transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between pb-3.5 mb-2 border-b border-neutral-100">
          <span className="font-display font-bold text-[11px] tracking-[0.14em] uppercase text-brand-primary">
            Menu
          </span>
          <button
            onClick={() => setOpen(false)}
            className="h-10 w-10 rounded-[10px] bg-neutral-100 text-neutral-700 inline-flex items-center justify-center"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center px-3.5 py-3.5 rounded-md font-display font-semibold text-[16px] min-h-[48px] ${
              isActive(item.href)
                ? 'text-brand-primary bg-surface-alt'
                : 'text-neutral-900'
            }`}
          >
            {item.label}
          </Link>
        ))}
        <div className="pl-3.5 ml-4 border-l-2 border-green-100 flex flex-col gap-0.5 py-1">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`px-3 py-2.5 rounded-md font-display font-semibold text-[14px] min-h-[44px] flex items-center gap-2 ${
                s.seasonal
                  ? 'text-haint-700 hover:bg-haint-50 hover:text-haint-900'
                  : 'text-neutral-600 hover:text-brand-primary hover:bg-surface-alt'
              }`}
            >
              {s.title.replace(' Services', '')}
              {s.seasonal && (
                <span className="font-display font-extrabold text-[9.5px] tracking-[0.08em] uppercase bg-haint-50 text-haint-900 border border-haint-300 px-1.5 py-0.5 rounded-pill">
                  Seasonal
                </span>
              )}
            </Link>
          ))}
        </div>

        <Link
          href="/estimate#estimate-form"
          className="mt-4 inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-display font-bold text-[15px] px-5 py-4 rounded-md shadow-cta min-h-[52px]"
        >
          <Calendar size={16} strokeWidth={2.25} />
          Get a Free Estimate
        </Link>
        <a
          href={SITE.phoneHref}
          className="mt-2 inline-flex items-center justify-center gap-2 bg-surface-alt text-brand-primary font-display font-bold text-[15px] px-5 py-4 rounded-md min-h-[52px]"
        >
          <Phone size={14} strokeWidth={2.25} />
          Call {SITE.phone}
        </a>
      </div>
    </header>
  );
}
