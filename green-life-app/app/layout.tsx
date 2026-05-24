import type { Metadata, Viewport } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingCTA, MobileFloatingCTA } from '@/components/layout/FloatingCTA';
import { SITE } from '@/lib/constants';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Landscaping Services in Burtonsville, MD`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  keywords: [
    'landscaping Burtonsville MD',
    'lawn care Burtonsville MD',
    'landscaping Montgomery County MD',
    'tree service Burtonsville',
    'snow removal Maryland',
    'hardscaping Silver Spring',
    'paver patio installer',
    'fence installation Maryland',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Burtonsville, MD`,
    description:
      'Reliable landscaping, lawn care, tree services & snow removal across Montgomery County. Licensed & insured. Free estimates.',
  },
  twitter: { card: 'summary_large_image', title: SITE.name, description: SITE.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#1b4d1e',
  width: 'device-width',
  initialScale: 1,
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LandscapingBusiness',
  '@id': `${SITE.url}#business`,
  name: SITE.name,
  image: `${SITE.url}/logos/light-bg.png`,
  url: SITE.url,
  telephone: `+1-${SITE.phone.replace(/\D/g, '')}`,
  priceRange: '$$',
  foundingDate: '2005',
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  areaServed: [
    ...SITE.serviceArea.map((c) => ({ '@type': 'City', name: c })),
    { '@type': 'AdministrativeArea', name: 'Montgomery County, MD' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: String(SITE.rating),
    reviewCount: String(SITE.reviewCount),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-surface-base pb-20 sm:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-brand-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-display focus:font-bold focus:text-[13px]"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <MobileFloatingCTA />
      </body>
    </html>
  );
}
