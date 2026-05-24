import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck, CalendarCheck, MapPin, CheckCircle2, Handshake, Repeat, Check, Calendar, Phone } from 'lucide-react';
import { SubHero } from '@/components/sections/SubHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { SITE, TEAM, PAGE_HEROES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Green Life Landscaping Services Inc — a Burtonsville, MD landscaping company serving Montgomery County since 2005. Licensed, insured, and committed to quality outdoor care.',
  alternates: { canonical: '/about' },
};

const MISSION = [
  {
    icon: CheckCircle2,
    title: 'Quality Work',
    body:
      'We don’t cut corners. Every project — from routine mowing to full landscape installation — is handled with the same standard of care and attention to detail.',
  },
  {
    icon: Handshake,
    title: 'Honest Service',
    body:
      'We tell you what your property actually needs — not what generates the biggest invoice. Transparent pricing, honest assessments, and no surprise charges.',
  },
  {
    icon: Repeat,
    title: 'Long-Term Relationships',
    body:
      'Most of our clients have been with us for years. We know their properties, understand their preferences, and provide a level of consistency that one-off contractors simply can’t match.',
  },
];

const NUMBERS = [
  { num: '2005', label: 'Year Founded', accent: false },
  { num: '500+', label: 'Projects Completed', accent: true },
  { num: '5.0 ★', label: 'Google Rating', accent: false },
  { num: '100%', label: 'Licensed & Insured', accent: true },
];

const DIFFERENTIATORS = [
  'Tailored plans based on your property’s actual needs',
  'Consistent crew who knows your property over time',
  'Direct communication — no call centers, no runarounds',
  'Full-service: design, install, and maintain',
  'Eco-friendly methods that protect your lawn long-term',
];

export default function AboutPage() {
  return (
    <>
      <SubHero
        breadcrumbLabel="About Us"
        title="A Maryland Landscaping Company Built on Honest Work"
        description={`Green Life Landscaping Services Inc has been caring for properties across Burtonsville and Montgomery County since 2005. We built this business one satisfied customer at a time — and that's still how we operate today.`}
        backgroundImage={PAGE_HEROES.about}
      >
        <div className="flex gap-2 flex-wrap">
          {[
            { icon: ShieldCheck, label: 'Licensed & Insured' },
            { icon: CalendarCheck, label: 'Serving Since 2005' },
            { icon: MapPin, label: 'Burtonsville, MD' },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-pill px-3.5 py-1.5 font-display font-semibold text-[12px] text-white/95"
            >
              <Icon size={14} className="text-brand-accent" />
              {label}
            </span>
          ))}
        </div>
      </SubHero>

      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-block font-display font-bold text-overline uppercase text-brand-primary mb-2.5">
                Our Story
              </span>
              <h2 className="font-display font-bold text-fluid-h2 text-neutral-900 mb-5">
                Started in 2005. Still Doing It Right.
              </h2>
              <div className="space-y-4 font-body text-[16px] text-neutral-600 leading-[1.7]">
                <p>
                  Green Life Landscaping Services Inc was founded in Burtonsville, Maryland in
                  2005 with a simple idea: do quality work, be honest with customers, and show up
                  when you say you will. Two decades later, that’s still the whole business plan.
                </p>
                <p>
                  What started as a small crew handling lawn maintenance for local homeowners
                  grew steadily through referrals — because when you do good work, people talk.
                  Today, we offer a full range of outdoor services including lawn care,
                  landscaping, tree services, hardscaping, and snow removal, serving residential
                  and commercial properties throughout Montgomery County and the surrounding
                  region.
                </p>
                <p>
                  We’re not a franchise or a call center with subcontractors. We’re a local
                  Maryland company where the owners are involved in every project. When you hire
                  Green Life, you get experienced professionals who care about the outcome — not
                  just the invoice.
                </p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-card-hover aspect-[4/3] lg:aspect-auto lg:h-[460px] w-full">
              <Image
                src="/gallery/project-08.jpeg"
                alt="Green Life Landscaping crew on site in Burtonsville MD"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-0 pb-16">
        <div className="container-page">
          <div className="text-center max-w-[600px] mx-auto mb-10">
            <span className="inline-block font-display font-bold text-overline uppercase text-brand-primary mb-2.5">
              Meet the Team
            </span>
            <h2 className="font-display font-bold text-fluid-h2 text-neutral-900 mb-4">
              Free Estimates Done by Professionals
            </h2>
            <p className="font-body text-[17px] text-neutral-600 leading-[1.65]">
              When you request a free estimate from Green Life Landscaping, you’ll meet either
              Sergio or Ederson — both seasoned estimators who know the work firsthand. No
              salespeople, no inflated scopes. Just a straight answer on what the job needs and
              what it will cost — always free of charge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[880px] mx-auto">
            {TEAM.map((person) => (
              <article
                key={person.name}
                className="bg-white rounded-xl shadow-card-hover overflow-hidden border border-neutral-200"
              >
                <div className="relative aspect-[4/5] bg-neutral-100">
                  <Image
                    src={person.photo}
                    alt={`${person.name}, ${SITE.shortName} ${person.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 440px"
                    className="object-cover"
                  />
                </div>
                <div className="px-7 py-6">
                  <div className="font-display font-extrabold text-[20px] text-neutral-900">
                    {person.name}
                  </div>
                  <div className="font-display font-bold text-[13px] tracking-[0.04em] uppercase text-brand-primary mt-1">
                    {person.role}
                  </div>
                  <p className="font-body text-[13px] text-neutral-600 leading-[1.65] mt-3">
                    {person.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex gap-3 justify-center flex-wrap mt-10">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 bg-brand-primary text-white font-display font-bold text-[15px] px-6 py-3 rounded-md shadow-cta hover:bg-green-800 transition-colors"
            >
              <Calendar size={16} strokeWidth={2.25} />
              Get a Free Estimate
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 bg-white text-brand-primary border-2 border-brand-primary font-display font-bold text-[15px] px-6 py-3 rounded-md hover:bg-surface-alt transition-colors"
            >
              <Phone size={16} strokeWidth={2.25} />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface-base section-pad">
        <div className="container-page">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="inline-block font-display font-bold text-overline uppercase text-brand-primary mb-2.5">
              What We Stand For
            </span>
            <h2 className="font-display font-bold text-fluid-h2 text-neutral-900 mb-4">
              Our Mission
            </h2>
            <p className="font-body text-[17px] text-neutral-600 leading-[1.65]">
              We deliver quality landscaping services that respect your property, your time, and
              your budget. No cookie-cutter results. No upselling. Just the work you asked for,
              done properly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MISSION.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-lg shadow-card p-8">
                <div className="h-12 w-12 rounded-[12px] bg-surface-alt text-brand-primary flex items-center justify-center mb-4">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="font-display font-bold text-[18px] text-neutral-900 mb-2.5">
                  {title}
                </h3>
                <p className="font-body text-[14px] text-neutral-600 leading-[1.65]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark section-pad">
        <div className="container-page">
          <div className="text-center max-w-[600px] mx-auto mb-10 sm:mb-12">
            <span className="inline-block font-display font-bold text-overline uppercase text-brand-accent mb-2.5">
              By the Numbers
            </span>
            <h2 className="font-display font-bold text-fluid-h2 text-white">
              20 Years of Showing Up
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] bg-white/[0.08] rounded-xl overflow-hidden">
            {NUMBERS.map((n) => (
              <div key={n.label} className="bg-white/[0.06] px-4 sm:px-7 py-8 sm:py-10 text-center">
                <div
                  className={`font-display font-extrabold text-[32px] sm:text-[40px] lg:text-[48px] leading-none ${
                    n.accent ? 'text-brand-accent' : 'text-white'
                  }`}
                >
                  {n.num}
                </div>
                <div className="font-body text-[11px] sm:text-[13px] text-white/55 mt-2 tracking-[0.03em] leading-tight">
                  {n.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-card-hover aspect-[4/3] lg:aspect-auto lg:h-[400px] w-full order-2 lg:order-1">
              <Image
                src="/gallery/project-15.jpeg"
                alt="Green Life crew member at work in Maryland"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block font-display font-bold text-overline uppercase text-brand-primary mb-2.5">
                What Sets Us Apart
              </span>
              <h2 className="font-display font-bold text-fluid-h2 text-neutral-900 mb-5">
                No Cookie-Cutter Results. Ever.
              </h2>
              <div className="space-y-4 font-body text-[16px] text-neutral-600 leading-[1.7]">
                <p>
                  A lot of landscaping companies treat every property the same. They show up with
                  the same plan, the same approach, and the same crew — regardless of what your
                  property actually needs.
                </p>
                <p>
                  That’s not how we work. Every property is different, and every client has
                  different goals. We take the time to understand your space, your preferences,
                  and your budget before we put together a plan.
                </p>
              </div>
              <ul className="mt-6 flex flex-col gap-2.5">
                {DIFFERENTIATORS.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 font-body text-[15px] text-neutral-700">
                    <Check size={16} className="text-green-600 mt-1 flex-shrink-0" strokeWidth={2.5} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Ready to work with a crew
            <br />
            <em className="not-italic text-brand-accent">you can actually count on?</em>
          </>
        }
        subtitle="Free estimates. No obligation. We serve Burtonsville, MD and all of Montgomery County."
      />
    </>
  );
}
