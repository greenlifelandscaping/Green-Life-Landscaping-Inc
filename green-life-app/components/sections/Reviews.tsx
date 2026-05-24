import { Star } from 'lucide-react';
import { REVIEWS } from '@/lib/constants';

function initials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-surface-earth section-pad" aria-labelledby="reviews-heading">
      <div className="container-page">
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <span className="inline-block font-display font-bold text-overline uppercase text-brand-primary mb-2.5">
            What Our Customers Say
          </span>
          <h2
            id="reviews-heading"
            className="font-display font-bold text-fluid-h2 text-neutral-900 mb-4"
          >
            Real Reviews From Real Clients
          </h2>
          <p className="font-body text-[17px] text-neutral-600 leading-[1.65]">
            Homeowners across Burtonsville and Montgomery County trust Green Life Landscaping to
            show up, do great work, and keep their properties looking sharp year-round.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.slice(0, 3).map((r) => (
            <article key={r.id} className="bg-white rounded-lg shadow-card p-6 flex flex-col">
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#f57c00] text-[#f57c00]" />
                ))}
              </div>
              <p className="italic font-body text-[14px] leading-[1.68] text-neutral-700 mb-4">
                “{r.quote}”
              </p>
              <div className="flex items-center gap-2.5 mt-auto">
                <div className="h-9 w-9 rounded-pill bg-green-100 flex items-center justify-center font-display font-bold text-[13px] text-brand-primary flex-shrink-0">
                  {initials(r.author)}
                </div>
                <div>
                  <div className="font-display font-bold text-[13px] text-neutral-900">
                    {r.author}
                  </div>
                  <div className="font-body text-[12px] text-neutral-400">{r.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
