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
