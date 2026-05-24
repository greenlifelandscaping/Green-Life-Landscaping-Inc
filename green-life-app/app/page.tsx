import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { WhyUs } from '@/components/sections/WhyUs';
import { PhotoStrip } from '@/components/sections/PhotoStrip';
import { Reviews } from '@/components/sections/Reviews';
import { ServiceAreas } from '@/components/sections/ServiceAreas';
import { FAQ } from '@/components/sections/FAQ';
import { CTABanner } from '@/components/sections/CTABanner';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${SITE.name} | Landscaping Services in Burtonsville, MD`,
  description: SITE.description,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyUs />
      <PhotoStrip />
      <Reviews />
      <ServiceAreas />
      <FAQ />
      <CTABanner />
    </>
  );
}
