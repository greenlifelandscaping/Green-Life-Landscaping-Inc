import { Star } from 'lucide-react';
import type { Review } from '@/lib/types';

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="bg-white rounded-lg shadow-card p-6 flex flex-col h-full">
      <div className="flex items-center gap-0.5 mb-4" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={13} className="fill-[#f57c00] text-[#f57c00]" />
        ))}
      </div>
      <blockquote className="italic text-[12px] leading-[1.55] text-neutral-700 flex-1">
        “{review.quote}”
      </blockquote>
      <footer className="mt-5 pt-4 border-t border-neutral-100">
        <div className="font-display font-bold text-[11px] text-neutral-900">{review.author}</div>
        <div className="font-body text-[11px] text-neutral-500 mt-0.5">
          {review.location} · {review.serviceType}
        </div>
      </footer>
    </article>
  );
}
