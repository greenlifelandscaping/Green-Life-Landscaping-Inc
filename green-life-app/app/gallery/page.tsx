import type { Metadata } from 'next';
import { SubHero } from '@/components/sections/SubHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { PAGE_HEROES } from '@/lib/constants';
import { GalleryClient } from './GalleryClient';

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description:
    "See Green Life Landscaping's work in action. Photos of lawn care, landscaping, tree services, hardscaping, and snow removal projects across Burtonsville and Montgomery County, MD.",
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <SubHero
        breadcrumbLabel="Gallery"
        title="Recent Work From Across Montgomery County"
        description="A sample of lawn care, landscaping, hardscaping, and tree projects we’ve completed for Maryland homeowners. Tap any photo for a closer look."
        backgroundImage={PAGE_HEROES.gallery}
      />
      <GalleryClient />
      <CTABanner />
    </>
  );
}
