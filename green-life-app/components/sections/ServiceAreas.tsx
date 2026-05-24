import { MapPin } from 'lucide-react';
import { SITE } from '@/lib/constants';

export function ServiceAreas() {
  return (
    <section className="bg-surface-alt section-pad">
      <div className="container-page">
        <div className="text-center max-w-[600px] mx-auto mb-10">
          <span className="inline-block font-display font-bold text-overline uppercase text-brand-primary mb-2.5">
            Where We Work
          </span>
          <h2 className="font-display font-bold text-fluid-h2 text-neutral-900 mb-4">
            Proudly Serving Burtonsville &amp; Surrounding Areas
          </h2>
          <p className="font-body text-[17px] text-neutral-600 leading-[1.65]">
            Based in Burtonsville, MD, Green Life Landscaping serves residential and commercial
            properties throughout Montgomery County and the surrounding region.
          </p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mt-10">
          {SITE.serviceArea.map((city) => (
            <li
              key={city}
              className="flex items-center gap-2 bg-white rounded-md px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.06)] font-display font-semibold text-[13px] text-neutral-800"
            >
              <MapPin size={16} className="text-green-600 flex-shrink-0" />
              {city}, MD
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
