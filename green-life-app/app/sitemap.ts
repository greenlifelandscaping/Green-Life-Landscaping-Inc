import type { MetadataRoute } from 'next';
import { SITE, CITIES, SERVICES } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const coreRoutes: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE.url}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/service-areas`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/gallery`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/about`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE.url}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE.url}/estimate`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const cityPages: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${SITE.url}/service-areas/${c.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    // Tier 1 cities get higher priority than tier 3
    priority: c.tier === 1 ? 0.85 : c.tier === 2 ? 0.75 : 0.65,
  }));

  return [...coreRoutes, ...servicePages, ...cityPages];
}
