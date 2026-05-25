import type { LucideIcon } from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  longDescription: string;
  inclusions: string[];
  startingPrice?: string;
  seasonal?: boolean;
  /** Full SEO description for the dedicated detail page (2–3 paragraphs). */
  detail?: {
    headline: string;
    paragraphs: string[];
    benefits: { title: string; description: string }[];
  };
};

export type NavItem = {
  label: string;
  href: string;
};

export type Review = {
  id: string;
  author: string;
  location: string;
  rating: number;
  quote: string;
  serviceType: string;
};

export type TrustStat = {
  icon: LucideIcon;
  stat: string;
  label: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
};

export type CityPage = {
  slug: string;
  /** Display name, e.g. "Ellicott City" */
  name: string;
  /** Used in the URL display path & metadata, e.g. "Ellicott City, MD" */
  fullName: string;
  county: string;
  zips: readonly string[];
  /** 1 = Gold Mine, 2 = Strong Growth, 3 = Strategic Perimeter */
  tier: 1 | 2 | 3;
  /** Sister/secondary city covered on the same page, e.g. "Severna Park" */
  alsoServes?: string;
  /** Comma-list of well-known neighborhoods/communities — appears as chips on the page */
  neighborhoods: readonly string[];
  /** Unique opening paragraph for SEO — 80-140 words, city-specific narrative */
  intro: string;
  /** 4 city-specific characteristics affecting landscaping/snow work */
  characteristics: readonly { title: string; body: string }[];
  /** 3 city-specific FAQ items */
  faq: readonly { q: string; a: string }[];
};
