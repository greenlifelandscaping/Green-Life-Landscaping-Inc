# Green Life Landscaping Services Inc — Design System

## Overview

**Green Life Landscaping Services Inc** is a Maryland-based landscaping company offering full-service residential and commercial outdoor solutions. The brand positions itself as a dependable, mid-tier professional — experienced, eco-conscious, and results-driven.

**Core Promise:** Beautiful + functional + sustainable outdoor spaces  
**Market Position:** Dependable mid-tier professional (not luxury, not cheap)  
**Geography:** Maryland / DMV area

### Sources Provided
- Logo files (PNG, multiple color variants): `assets/logo-*.png`
- Brand photography: `assets/photo-*.jpeg` — team and tree service work
- Verbal brand brief (see below)
- No codebase or Figma file was provided; design system is built from brand brief + visual assets

---

## Services (Primary Navigation)

1. **Lawn Care** — mowing, aeration, dethatching, seeding
2. **Cleanups** — leaves, gutters, seasonal
3. **Tree Services** — removal, pruning, trimming
4. **Hardscaping** — patios, structural work
5. **Fence Installation & Repair**
6. **Mulch & Plant Care**
7. **Drainage Solutions**

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Professional and grounded** — speaks like a contractor who shows up on time, not a startup
- **Direct, results-focused** — leads with what gets done, not feelings or aspirations
- **Trustworthy** — emphasizes experience, consistency, long-term relationships
- **Warm but not casual** — approachable without being playful or flippant
- **No slang, no humor, no trendy language**

### Copy Patterns
- **You-focused** — "Your outdoor space," "Your property," not "we do this"
- **Action-forward headlines** — verbs first: "Transform Your Outdoor Space," "Get a Clean Yard"
- **Result-first subheadings** — pain point → solution: "Stop dealing with unreliable landscapers. Get consistent care that actually shows up."
- **Casing:** Title Case for headings; sentence case for body copy
- **Numbers build trust:** "15+ years," "500+ projects," "Fully licensed & insured"
- **No emoji** in any marketing or UI copy
- **CTA formula:** action verb + specific outcome → "Book Free Estimate," "Get a Quote Today," "Schedule Service"

### Example Headlines
- "Transform Your Outdoor Space"
- "Reliable Landscaping That Actually Lasts"
- "Built for Beauty. Designed for Function."

### Example Subheadings
- "Stop dealing with unreliable landscapers."
- "No more inconsistent yard care."
- "Get a clean, structured outdoor space with long-term durability."

---

## VISUAL FOUNDATIONS

### Color System
- **Primary:** Deep Forest Green `#2e7031` — used in logo "Green Life" text, primary CTAs, headings on light backgrounds
- **Secondary:** Earth Brown `#6d4c41` — secondary accents, borders, earth tones
- **Accent:** Light Green `#66bb6a` — hover states, highlights, leaf motifs
- **Dark BG:** `#1b4d1e` — footer, dark sections, nav overlays
- **Neutral BG:** `#f8f8f6` — warm off-white page background (not stark white)
- **White:** `#ffffff` — card surfaces, form fields
- Full scale: see `colors_and_type.css`

### Typography
- **Display/Headings:** Montserrat (Google Fonts) — Bold 700/800 for hero; SemiBold 600 for h3/h4
  - *Substitution note: The actual logo uses a rounded serif-influenced italic for "Green Life" — the closest web-safe match is Montserrat with uppercase tracking. Real logo typography is image-based (not a web font).*
- **Body:** Open Sans — Regular 400 for paragraphs; SemiBold 600 for labels
- **No serif fonts** — this is a contractor service, not a law firm
- **Hero text:** 60–72px, tight letter-spacing
- **H1:** 48px / H2: 36px / H3: 30px / H4: 24px
- **Body:** 16–18px, line-height 1.65 for readability

### Backgrounds & Surfaces
- **Default page background:** warm off-white `#f8f8f6` — never stark white
- **Section alternation:** off-white → white → light green tint `#f1f8f1` → dark green `#1b4d1e`
- **Cards:** white `#ffffff` with subtle shadow, 12px radius
- **Dark sections (footer, hero overlays):** deep green `#1b4d1e` with white text
- **No gradients** as primary backgrounds — solid colors only
- **Full-bleed imagery** used in hero sections with a dark overlay (`rgba(0,0,0,0.45)`) for text legibility
- **Earth tone section:** `#efebe9` for testimonials or trust sections

### Imagery Style
- **Real work photography** — job sites, completed projects, team in branded gear
- **Warm, natural color grading** — autumn foliage, green lawns, earthy tones
- **No stock-photo-clean** — authentic, slightly gritty field photography preferred
- **Before/after pairs** are a key conversion tool
- **Team photos:** approachable, professional, branded polo/shirt
- Available: tree service action shot, owner/team portrait

### Iconography
- **Style:** Lucide Icons (line icons, 1.5px stroke, rounded caps) — CDN linked
- **No emoji** used as icons
- **No hand-drawn SVG icon sets** 
- **Icon size:** 20px UI / 24px in cards / 32px in feature sections
- **Color:** icon inherits text color or uses `--brand-primary` on colored surfaces
- See ICONOGRAPHY section below

### Layout & Spacing
- **Max content width:** 1280px centered
- **Section padding:** 80–96px vertical
- **Card grid:** 3-column on desktop, 2-column tablet, 1-column mobile
- **Spacing scale:** 4px base unit (see tokens in `colors_and_type.css`)
- **Grid gap:** 24px (cards), 48px (section columns)

### Border Radius
- **Cards:** 12px (`--radius-lg`)
- **Buttons:** 8px (`--radius-md`) — slightly rounded, not pill-shaped
- **Input fields:** 8px
- **Badges/chips:** 9999px pill for status labels
- **Image containers:** 12px rounded corners unless full-bleed

### Shadow System
- **Cards (resting):** `0 2px 6px rgba(0,0,0,0.08)` — subtle lift
- **Cards (hover):** `0 8px 32px rgba(0,0,0,0.12)` — elevates on interaction
- **CTA buttons:** `0 4px 20px rgba(46, 112, 49, 0.20)` — green-tinted glow
- **No heavy drop shadows** — clean, modern feel

### Hover & Interaction States
- **Primary button hover:** darken to `#245227`, slight upward translate (`-2px`)
- **Cards hover:** shadow deepens, slight scale `(1.01)`
- **Links hover:** color shifts to `#3a8c3e`
- **Nav items hover:** green underline appears
- **Transitions:** 250ms ease for colors/shadows; 300ms spring for transforms

### Animation
- **Minimal animation** — this is a professional services site, not a tech startup
- **Transitions only:** hover states, menu open/close, accordion expand
- **Fade-in on scroll** acceptable for sections (opacity 0 → 1, translateY 20px → 0)
- **No bouncing, spinning, or playful keyframe animations**
- **Easing:** `ease` for color; `cubic-bezier(0.34, 1.56, 0.64, 1)` for spring effects (rare)

### Corner & Card Style
- Rounded corners (12px) on cards — soft, approachable
- White card surface with `--shadow-sm` resting, `--shadow-lg` on hover
- Thin border `1px solid #e0e0e0` optional for cards on white backgrounds
- No colored left-border accent — full-card design language

---

## ICONOGRAPHY

### Approach
Icons use **Lucide Icons** (CDN: `https://unpkg.com/lucide@latest`) — consistent 1.5px stroke weight, rounded line caps, clean geometric style. This matches the professional-but-approachable brand tone.

### Usage
- Service cards: 28–32px icon in brand green `#2e7031`
- Navigation: 20px icons alongside text labels (optional on desktop)
- Trust indicators: 24px icons (checkmark, shield, star)
- Contact form: 20px field prefix icons
- Footer social: 20px icons

### Key Icons Used
| Service | Lucide Icon |
|---|---|
| Lawn Care | `scissors` |
| Cleanups | `wind` |
| Tree Services | `tree-pine` |
| Hardscaping | `layers` |
| Fence | `fence` |
| Mulch & Plants | `flower-2` |
| Drainage | `droplets` |
| Phone | `phone` |
| Email | `mail` |
| Location | `map-pin` |
| Clock | `clock` |
| Check | `check-circle-2` |
| Star (review) | `star` |
| Quote | `quote` |

### Logo Assets (in `assets/`)
| File | Usage |
|---|---|
| `logo-primary.png` | Default: brown trunk, deep green leaves, green + black text |
| `logo-dark-text.png` | On light backgrounds: autumn leaves, all-black text |
| `logo-light-text.png` | On light backgrounds: lighter variant |
| `logo-green-text.png` | Minimal version: light tree + bright green text only |
| `logo-tree-variant-1.png` | Tree illustration only (no text), black trunk |
| `logo-tree-variant-2.png` | Tree illustration only (no text), green trunk |
| `photo-tree-service.jpeg` | Action photography: crew member with chainsaw |
| `photo-team-owner.jpeg` | Team/owner portrait: professional branded polo |

---

## FILES INDEX

```
/
├── README.md                     ← This file
├── colors_and_type.css           ← All CSS variables (colors, type, spacing, shadows)
├── SKILL.md                      ← Agent skill definition
├── assets/
│   ├── logo-primary.png          ← Primary logo (brown trunk, deep green)
│   ├── logo-dark-text.png        ← Logo with dark/black text variant
│   ├── logo-light-text.png       ← Logo light variant
│   ├── logo-green-text.png       ← Logo green-only text variant
│   ├── logo-tree-variant-1.png   ← Tree icon only (black trunk)
│   ├── logo-tree-variant-2.png   ← Tree icon only (green trunk)
│   ├── photo-tree-service.jpeg   ← Photography: tree removal in action
│   └── photo-team-owner.jpeg     ← Photography: owner/team portrait
├── preview/
│   ├── colors-primary.html       ← Primary green palette
│   ├── colors-earth.html         ← Earth brown palette
│   ├── colors-neutral.html       ← Neutral/gray palette
│   ├── colors-semantic.html      ← Semantic color tokens
│   ├── type-display.html         ← Display/hero typography
│   ├── type-headings.html        ← H1–H4 heading scale
│   ├── type-body.html            ← Body + label type
│   ├── spacing-tokens.html       ← Spacing scale
│   ├── spacing-radius.html       ← Border radius tokens
│   ├── spacing-shadows.html      ← Shadow system
│   ├── components-buttons.html   ← Button variants
│   ├── components-cards.html     ← Service card components
│   ├── components-forms.html     ← Form inputs + contact form
│   ├── components-badges.html    ← Badges, chips, trust indicators
│   ├── components-nav.html       ← Navigation header
│   └── brand-logos.html          ← Logo variants display
└── ui_kits/
    └── website/
        ├── README.md             ← Website UI kit guide
        └── index.html            ← Full website prototype
```

---

## Key Differentiators (Copy Use)
- Eco-friendly approach
- Full-service: design → build → maintain
- Long-term relationships & consistency  
- 15+ years of experience
- Maryland-based, locally trusted
