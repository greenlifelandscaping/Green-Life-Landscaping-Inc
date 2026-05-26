import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { SITE, SERVICES, CITIES } from '@/lib/constants';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-dark text-white/70">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Image
              src="/logos/dark-bg.png"
              alt="Green Life Landscaping Inc"
              width={216}
              height={72}
              style={{ height: 60, width: 'auto' }}
              className="mb-4"
            />
            <p className="font-body text-[13px] leading-[1.65] max-w-sm">
              Maryland’s trusted full-service landscaping company. Reliable, licensed, and built
              for the long haul since {SITE.foundedYear}.
            </p>
            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 text-[13px] text-white/60 hover:text-brand-accent transition-colors"
              >
                <Phone size={14} className="text-brand-accent" />
                {SITE.phone}
              </a>
              <span className="inline-flex items-center gap-2 text-[13px] text-white/60">
                <MapPin size={14} className="text-brand-accent" />
                Burtonsville, MD — Serving Montgomery County
              </span>
            </div>
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-brand-accent hover:text-brand-dark transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-brand-accent hover:text-brand-dark transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-white text-[12px] tracking-[0.06em] uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-brand-accent transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-white text-[12px] tracking-[0.06em] uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-accent transition-colors">All Services</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-accent transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
              <li><Link href="/estimate#estimate-form" className="hover:text-brand-accent transition-colors">Get a Free Estimate</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-white text-[12px] tracking-[0.06em] uppercase mb-4">
              Top Service Areas
            </h4>
            {/* CSS multi-column flow at md+: a 12-entry list becomes two balanced
                6-entry columns. Mobile stays single-column. */}
            <ul className="text-[13px] md:columns-2 md:gap-x-4">
              {CITIES.filter((c) => c.tier <= 2).map((c) => (
                <li key={c.slug} className="mb-2 break-inside-avoid">
                  <Link
                    href={`/service-areas/${c.slug}`}
                    className="text-white/60 hover:text-brand-accent transition-colors"
                  >
                    {c.name}, MD
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/service-areas"
              className="mt-4 inline-block font-display font-bold text-[12px] tracking-[0.04em] uppercase text-brand-accent hover:text-white transition-colors"
            >
              View all service areas →
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-white/50">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>{SITE.license} · Serving Since {SITE.foundedYear}</p>
        </div>
      </div>
    </footer>
  );
}
