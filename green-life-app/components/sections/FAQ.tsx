'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/constants';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="bg-white section-pad" aria-labelledby="faq-heading">
      <div className="container-page">
        <div className="text-center max-w-[600px] mx-auto mb-12">
          <span className="inline-block font-display font-bold text-overline uppercase text-brand-primary mb-2.5">
            Common Questions
          </span>
          <h2
            id="faq-heading"
            className="font-display font-bold text-fluid-h2 text-neutral-900 mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="font-body text-[17px] text-neutral-600 leading-[1.65]">
            Answers to what homeowners in Burtonsville and Montgomery County most often ask
            about our landscaping services.
          </p>
        </div>

        <div className="max-w-[760px] mx-auto flex flex-col gap-1">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.q}
                className={`rounded-md border-[1.5px] overflow-hidden transition-colors ${
                  isOpen ? 'border-brand-accent' : 'border-neutral-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-display font-semibold text-[15px] text-neutral-900 hover:text-brand-primary transition-colors"
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span
                    className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center transition-all ${
                      isOpen ? 'bg-brand-primary text-white rotate-45' : 'bg-surface-alt text-brand-primary'
                    }`}
                  >
                    <Plus size={14} strokeWidth={2.5} />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 font-body text-[15px] text-neutral-600 leading-[1.7]">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
