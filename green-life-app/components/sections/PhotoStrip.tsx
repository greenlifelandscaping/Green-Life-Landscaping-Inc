import Image from 'next/image';

const PHOTOS = [
  { src: '/gallery/project-05.jpeg', alt: 'Recent landscaping project by Green Life Landscaping' },
  { src: '/gallery/project-11.jpeg', alt: 'Hardscape installation by Green Life Landscaping' },
  { src: '/gallery/snow-01.jpeg', alt: 'Winter snow removal by Green Life Landscaping in Maryland' },
  { src: '/gallery/project-22.jpeg', alt: 'Mulched beds and shrub plantings by Green Life Landscaping' },
  { src: '/gallery/project-30.jpeg', alt: 'Paver patio and walkway by Green Life Landscaping' },
];

export function PhotoStrip() {
  return (
    <section className="bg-neutral-900" aria-label="Project photo gallery">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 h-[260px] sm:h-[260px]">
        {PHOTOS.map((p, idx) => (
          <div
            key={p.src}
            className={`relative overflow-hidden ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
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
