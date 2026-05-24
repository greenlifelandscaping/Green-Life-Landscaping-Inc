import { ShieldCheck, CalendarCheck, MapPin, Tag } from 'lucide-react';

const ITEMS = [
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: CalendarCheck, label: 'Serving Since 2005' },
  { icon: MapPin, label: 'Burtonsville & Montgomery County, MD' },
  { icon: Tag, label: 'Free Estimates' },
];

export function TrustBar() {
  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="container-page py-5">
        <div className="flex items-center gap-8 flex-wrap justify-center">
          {ITEMS.map((item, idx) => (
            <div key={item.label} className="flex items-center gap-4">
              <div className="flex items-center gap-2 font-display font-bold text-[13px] text-neutral-700">
                <item.icon size={18} className="text-brand-primary" strokeWidth={2} />
                {item.label}
              </div>
              {idx < ITEMS.length - 1 && (
                <span className="hidden md:block w-px h-5 bg-neutral-200" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
