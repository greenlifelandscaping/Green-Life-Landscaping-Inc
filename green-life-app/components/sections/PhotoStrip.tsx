import Image from 'next/image';

const PHOTOS = [
  { src: '/gallery/project-29.jpeg', alt: 'Residential landscaping project by Green Life Landscaping in Maryland' },
  { src: '/gallery/hardscaping-feature.jpeg', alt: 'Hardscape installation by Green Life Landscaping in Maryland' },
  { src: '/gallery/snow-01.jpeg', alt: 'Winter snow removal by Green Life Landscaping in Maryland' },
  { src: '/gallery/project-04.jpeg', alt: 'Healthy maintained lawn by Green Life Landscaping' },
  { src: '/gallery/project-19.jpeg', alt: 'Tree service work by Green Life Landscaping crew in Maryland' },
];

export function PhotoStrip() {
  return (
    <section className="bg-neutral-900" aria-label="Project photo gallery">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 h-[260px] sm:h-[260px]">
        {PHOTOS.map((p, idx) => (
          <div
            key={p.src}
            className={`relative overflow-hidden ${
              idx === 3 ? 'sm:col-span-2 lg:col-span-1' : ''
            } ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover transition-transform duration-500 hover:scale-[1.06]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
