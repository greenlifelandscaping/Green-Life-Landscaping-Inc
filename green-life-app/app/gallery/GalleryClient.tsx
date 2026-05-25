'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY, SITE } from '@/lib/constants';

const CATEGORIES = ['All', 'Hardscaping', 'Landscaping', 'Lawn Care', 'Tree Services', 'Snow Removal'] as const;
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
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const items = useMemo(
    () => (active === 'All' ? GALLERY : GALLERY.filter((g) => g.category === active)),
    [active]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: GALLERY.length };
    for (const g of GALLERY) c[g.category] = (c[g.category] ?? 0) + 1;
    return c;
  }, []);

  // Reset open index when filter changes
  useEffect(() => {
    setOpenIdx(null);
  }, [active]);

  // Single lightweight effect for keyboard nav (only attaches when open)
  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIdx(null);
      else if (e.key === 'ArrowRight') setOpenIdx((i) => (i === null ? null : (i + 1) % items.length));
      else if (e.key === 'ArrowLeft') setOpenIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length));
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [openIdx, items.length]);

  const open = openIdx !== null ? items[openIdx] : null;

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

      {/* Gallery grid — uses Next/Image for thumbnails (handled by static layer
          since unoptimized:true). Event delegation on the parent avoids 49
          individual click handlers. */}
      <section className="bg-surface-base section-pad">
        <div className="container-page">
          <div
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3.5 auto-rows-[180px]"
            onClick={(e) => {
              const card = (e.target as HTMLElement).closest('[data-idx]');
              if (!card) return;
              const idx = Number(card.getAttribute('data-idx'));
              if (!Number.isNaN(idx)) setOpenIdx(idx);
            }}
          >
            {items.map((item, idx) => (
              <article
                key={item.id}
                data-idx={idx}
                role="button"
                tabIndex={0}
                aria-label={`Open ${item.alt} in fullscreen`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpenIdx(idx);
                  }
                }}
                className={`group relative rounded-lg overflow-hidden bg-neutral-900 shadow-card hover:shadow-card-hover transition-shadow cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-accent/50 ${
                  SPAN_PATTERN[idx % SPAN_PATTERN.length]
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 pointer-events-none">
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

      {/* Lightbox — plain <img> tag (no Next/Image, no priority flag, no fill).
          Renders only when open !== null. No body scroll lock to avoid the
          SSR/hydration edge case that crashed Hostinger workers. */}
      {open && openIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${openIdx + 1} of ${items.length}`}
          onClick={() => setOpenIdx(null)}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-6"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpenIdx(null); }}
            aria-label="Close fullscreen view"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white inline-flex items-center justify-center border border-white/15 transition-colors"
          >
            <X size={22} strokeWidth={2.25} />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpenIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length)); }}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-6 z-10 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white inline-flex items-center justify-center border border-white/15 transition-colors"
          >
            <ChevronLeft size={26} strokeWidth={2.25} />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpenIdx((i) => (i === null ? null : (i + 1) % items.length)); }}
            aria-label="Next photo"
            className="absolute right-2 sm:right-6 z-10 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white inline-flex items-center justify-center border border-white/15 transition-colors"
          >
            <ChevronRight size={26} strokeWidth={2.25} />
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element -- intentional: avoid Next/Image overhead in modal */}
          <img
            src={open.src}
            alt={open.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[92vw] max-h-[88vh] object-contain"
          />

          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 max-w-[90vw] bg-black/50 border border-white/10 rounded-pill px-4 py-2 text-center pointer-events-none">
            <span className="font-display font-bold text-[11px] tracking-[0.08em] uppercase text-brand-accent mr-2">
              {open.category}
            </span>
            <span className="font-body text-[12px] text-white/85">
              {openIdx + 1} of {items.length}
            </span>
          </div>
        </div>
      )}
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
