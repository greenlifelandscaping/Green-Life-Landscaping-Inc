# Green Life Landscaping

Production-ready marketing site for Green Life Landscaping (Maryland) — Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide icons.

## Stack
- Next.js 14 (App Router, RSC)
- TypeScript (strict)
- Tailwind CSS w/ extended brand tokens (`tailwind.config.ts`)
- Google Fonts via `next/font`: Montserrat (600/700/800) + Open Sans (400/600)
- Lucide React icons
- JSON-LD `LocalBusiness` schema on the root layout

## Routes
- `/` — Home (hero, trust bar, services grid, why us, reviews, CTA, contact form)
- `/services` — Detail cards for all 7 service lines with `#slug` anchors
- `/about` — Story, values, team, credentials
- `/gallery` — Filterable project grid
- `/contact` — Form + map placeholder + service area
- `/estimate` — Dedicated estimate request flow

## Quick start

```bash
npm install
cp .env.example .env.local   # then paste your RESEND_API_KEY
npm run dev                  # http://localhost:3000
npm run build && npm start
```

## Contact form email delivery

Form submissions on `/`, `/contact`, and `/estimate` POST to `app/api/contact/route.ts`,
which uses [Resend](https://resend.com) to deliver an HTML + plain-text email to
`greenlife.contacts@gmail.com` (configurable via `CONTACT_INBOX`).

Setup:
1. Create a free Resend account → grab an API key at https://resend.com/api-keys
2. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```
3. **Sandbox sending** works out of the box with `CONTACT_FROM="…<onboarding@resend.dev>"`
   — but emails will only deliver to the account owner's inbox until you verify a domain.
4. **Production sending**: at https://resend.com/domains add `greenlifelandscaping.com`
   (or your real domain), follow the DNS instructions, then set
   `CONTACT_FROM="Green Life Landscaping <noreply@greenlifelandscaping.com>"`.

The route also includes a honeypot field, input validation (required + email format),
length caps, and HTML escaping on all user input.

## Project structure
```
app/                  → routes, layout, sitemap, robots
components/
  ui/                 → Button, Badge, Card (ServiceCard), TrustItem, ReviewCard
  layout/             → Navbar, Footer, Logo
  sections/           → Hero, TrustBar, ServicesGrid, WhyUs, Reviews, CTABanner,
                        ContactForm, SubHero
lib/
  constants.ts        → SITE, NAV_ITEMS, SERVICES, REVIEWS, TRUST_STATS, GALLERY, TEAM
  types.ts            → shared TS types
tailwind.config.ts    → brand tokens (colors, type scale, shadows, radii)
```

## Customizing
- **Copy / data**: `lib/constants.ts` is the single source of truth — services, reviews, team, service area, contact details.
- **Colors / type / shadows**: extend in `tailwind.config.ts`.
- **Logo**: edit `components/layout/Logo.tsx` (defaults to a Lucide leaf mark).
- **Photos**: drop into `public/images/` and reference via `next/image`.

## Accessibility & performance
- Semantic h1→h2→h3 hierarchy on every page
- Focus-visible outlines on all interactive elements (`globals.css`)
- Skip-to-content link in root layout
- `next/font` Google Fonts (no CLS)
- Mobile-first responsive: sm / md / lg / xl
- Smooth scrolling + scroll-margin offset for anchor links

## SEO
- Per-page `generateMetadata` titles, descriptions, canonicals
- OG / Twitter card metadata on the root
- LocalBusiness JSON-LD with full NAP, areaServed, openingHours, aggregateRating
- `app/sitemap.ts` + `app/robots.ts`
