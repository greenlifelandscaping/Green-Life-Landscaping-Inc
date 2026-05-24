import Image from 'next/image';
import { WHY_US } from '@/lib/constants';

export function WhyUs() {
  return (
    <section id="about" className="bg-brand-dark section-pad">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[72px] items-center">
          <div>
            <span className="inline-block font-display font-bold text-overline uppercase text-brand-accent mb-2.5">
              Why Green Life Landscaping
            </span>
            <h2 className="font-display font-bold text-fluid-h2 text-white mb-4">
              Stop Dealing With Unreliable Landscapers.
            </h2>
            <p className="font-body text-[17px] text-white/70 leading-[1.65] max-w-[600px]">
              We’re a Maryland-based crew that shows up when scheduled, does the work right, and
              stands behind every job. No subcontractors. No excuses. Just consistent, quality
              outdoor care.
            </p>

            <ul className="mt-8 flex flex-col gap-5.5">
              {WHY_US.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-3.5">
                  <div className="flex-shrink-0 h-10 w-10 rounded-[10px] bg-white/10 flex items-center justify-center">
                    <Icon size={20} className="text-brand-accent" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[15px] text-white mb-1">
                      {title}
                    </h3>
                    <p className="font-body text-[13px] text-white/60 leading-[1.6]">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.35)] hidden lg:block">
            <div className="relative w-full h-[480px]">
              <Image
                src="/gallery/project-02.jpeg"
                alt="Front yard mulch refresh and shrub pruning by Green Life Landscaping in Burtonsville, MD"
                fill
                sizes="(max-width: 1024px) 0, 600px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
