'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { GALLERY, SITE } from '@/lib/constants';

const CATEGORIES = ['All', 'Hardscaping', 'Landscaping', 'Lawn Care', 'Tree Services'] as const;
type Category = (typeof CATEGORIES)[number];

const SPAN_PATTERN = [
  'sm:col-span-2 sm:row-span-2',
  'sm:col-span-1',
  'sm:col-span-1',
  'sm:col-span-2',
  'sm:col-span-1 sm:row-span-2',
  'sm:col-span-1',
  'sm:col-span-1',
  'sm:col-span-2',
  'sm:col-span-1',
];

export function GalleryClient() {
  const [active, setActive] = useState<Category>('All');

  const items = useMemo(
    () => (active === 'All' ? GALLERY : GALLERY.filter((g) => g.category === active)),
    [active]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: GALLERY.length };
    for (const g of GALLERY) c[g.category] = (c[g.category] ?? 0) + 1;
    return c;
  }, []);

  return (
    <>
      <section className="bg-white border-b border-neutral-100 sticky top-[68px] lg:top-[96px] z-30">
        <div className="container-page py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
            <Stat num={`${GALLERY.length}+`} label="Projects on display" />
            <Stat num={`${SITE.yearsInBusiness}+`} label="Years of work" />
            <Stat num="5.0 ★" label={`${SITE.reviewCount} reviews`} />
            <Stat num="100%" label="Licensed & insured" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-pill font-display font-semibold text-[13px] tracking-[0.03em] border-2 transition-colors ${
                  active === cat
                    ? 'bg-brand-primary border-brand-primary text-white'
                    : 'bg-white border-neutral-200 text-neutral-600 hover:border-brand-accent hover:text-brand-primary'
                }`}
              >
                {cat}
                <span
                  className={`text-[11px] font-bold rounded-pill px-2 py-0.5 ${
                    active === cat ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-500'
                  }`}
                >
                  {counts[cat] ?? 0}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-base section-pad">
        <div className="container-page">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3.5 auto-rows-[180px]">
            {items.map((item, idx) => (
              <article
                key={item.id}
                className={`group relative rounded-lg overflow-hidden bg-neutral-900 shadow-card hover:shadow-card-hover transition-shadow ${
                  SPAN_PATTERN[idx % SPAN_PATTERN.length]
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <span className="inline-block font-display font-bold text-[10px] tracking-[0.08em] uppercase text-brand-accent mb-1">
                      {item.category}
                    </span>
                    <p className="font-display font-bold text-[13px] text-white capitalize">
                      {item.title}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {items.length === 0 && (
            <p className="text-center font-body text-neutral-500 mt-10">
              No projects in this category yet — check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div className="px-1">
      <div className="font-display font-extrabold text-[24px] sm:text-[28px] text-brand-primary leading-none">
        {num}
      </div>
      <div className="font-body text-[12px] text-neutral-500 mt-1.5">{label}</div>
    </div>
  );
}
