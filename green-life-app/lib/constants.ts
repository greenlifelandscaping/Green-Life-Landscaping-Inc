import {
  Scissors,
  Flower2,
  TreePine,
  Snowflake,
  Layers,
  Award,
  Users,
  Star,
  ShieldCheck,
  Leaf,
  CalendarCheck,
  MapPin,
} from 'lucide-react';
import type { Service, NavItem, Review, TrustStat, GalleryItem } from './types';

export const SITE = {
  name: 'Green Life Landscaping Inc',
  shortName: 'Green Life Landscaping',
  tagline: 'Maryland’s trusted full-service landscaping company',
  description:
    'Professional lawn care, landscaping, tree services, hardscaping, and snow removal in Burtonsville, MD. Serving Montgomery County since 2005. Licensed, insured, and 5-star rated.',
  url: 'https://www.greenlifelandscaping.us',
  phone: '(410) 905-2697',
  phoneHref: 'tel:4109052697',
  email: 'greenlife.contacts@gmail.com',
  emailHref: 'mailto:greenlife.contacts@gmail.com',
  foundedYear: 2005,
  yearsInBusiness: 20,
  rating: 5.0,
  reviewCount: 47,
  address: {
    street: '',
    city: 'Burtonsville',
    region: 'MD',
    postalCode: '20866',
    country: 'US',
  },
  serviceArea: [
    'Burtonsville',
    'Silver Spring',
    'Rockville',
    'Germantown',
    'Gaithersburg',
    'Olney',
    'Laurel',
    'Columbia',
    'Clarksville',
  ],
  hours: 'Mon–Fri 7am–5pm',
  license: 'Maryland Licensed & Insured',
  insured: 'Fully Insured',
  social: {
    facebook: 'https://facebook.com/greenlifelandscapingmd',
    instagram: 'https://instagram.com/greenlifelandscapingmd',
    google: 'https://g.page/greenlifelandscapingmd',
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    slug: 'lawn-care',
    title: 'Lawn Care Services',
    icon: Scissors,
    shortDescription:
      'Regular mowing, aeration, dethatching, and overseeding. Consistent care that keeps your lawn healthy season after season.',
    longDescription:
      'Our crews mow at the correct seasonal height for Maryland cool-season grasses, edge every hard surface, and blow off walks and patios on every visit. Add aeration and overseeding programs for a lawn that gets healthier each year.',
    inclusions: [
      'Weekly or bi-weekly mowing & edging',
      'Spring & fall lawn aeration',
      'Dethatching and overseeding',
      'Targeted weed control programs',
      'Free no-obligation lawn assessment',
    ],
    startingPrice: 'Free assessment',
    detail: {
      headline: 'Lawn Care in Burtonsville & Montgomery County',
      paragraphs: [
        'A great lawn isn’t luck — it’s a schedule. We mow at the right seasonal height for Maryland’s cool-season grasses, sharpen blades weekly to prevent ragged tips, and rotate cut patterns so your turf never develops ruts.',
        'Beyond mowing, our seasonal programs include core aeration to break up clay compaction, slit-seeding to thicken thin areas, and targeted weed control calibrated to Maryland’s grass varieties and soil chemistry.',
        'Whether you want a pristine show lawn or a low-fuss yard that just looks tidy, we build the schedule around your goals — not a one-size-fits-all subscription.',
      ],
      benefits: [
        { title: 'Consistent crew', description: 'The same team mows your property each week — they know the gates, the dog, the soft spots.' },
        { title: 'Sharp blades only', description: 'Dull blades shred grass tips and brown the lawn. Ours are sharpened on a strict rotation.' },
        { title: 'Right height for the season', description: 'Cool-season grasses need 3.5–4″ in summer heat. We adjust deck height by month, not by guess.' },
        { title: 'No subcontractors', description: 'Green Life employees do every job. You see the same faces all season.' },
      ],
    },
  },
  {
    slug: 'landscaping',
    title: 'Landscaping Services',
    icon: Flower2,
    shortDescription:
      'Design, installation, and ongoing maintenance. We transform overgrown or bare outdoor spaces into structured, attractive landscapes.',
    longDescription:
      'From a complete front-yard makeover to a focused planting refresh, we handle the design and the install ourselves. Mulch beds, foundation plantings, perennial gardens, sod, and full landscape installations — all done by crews who do this work every day.',
    inclusions: [
      'Landscape design consultations',
      'Tree, shrub & perennial installation',
      'Mulch installation with crisp bed edging',
      'Sod installation & lawn renovation',
      '1-year plant replacement warranty',
    ],
    startingPrice: 'Free assessment',
    detail: {
      headline: 'Landscape Design & Installation Across Montgomery County',
      paragraphs: [
        'A good landscape outlasts its installer. We start every project with a walk-through to understand how you actually use your yard, then design plantings that work with Maryland’s clay soil, summer humidity, and hard winters — not against them.',
        'We install trees, shrubs, perennials, sod, and mulch beds sourced from local growers, and we hand-cut a 4-inch trench at every bed edge so the line stays crisp for the whole season. Every plant comes with a one-year replacement warranty.',
        'Whether you’re refreshing a tired front yard or doing a full backyard transformation, we’re a single point of contact from design through install through ongoing maintenance.',
      ],
      benefits: [
        { title: 'Plants chosen for MD soil', description: 'No big-box-store plants that die in August. We use local growers and species that thrive in our zone.' },
        { title: 'Crisp hand-cut bed edges', description: 'A 4″ trench at every bed line keeps mulch in, grass out, and your beds looking sharp all season.' },
        { title: 'Design + install + maintain', description: 'One team handles the whole arc, so the design intent doesn’t get lost between phases.' },
        { title: '1-year plant warranty', description: 'If a plant we installed doesn’t make it through the first year, we replace it on us.' },
      ],
    },
  },
  {
    slug: 'tree-services',
    title: 'Tree Services',
    icon: TreePine,
    shortDescription:
      'Safe tree removal, precision pruning, trimming, and stump grinding by experienced crews with proper equipment and full insurance.',
    longDescription:
      'From backyard maple pruning to a 60-foot oak coming down over a roof line, we work with rigging, climbers, and bucket trucks rated for the job. Storm damage response runs 24/7 during Maryland’s severe weather season, and we always grind the stump on request.',
    inclusions: [
      'Tree removal — residential & commercial',
      'Pruning, trimming & crown thinning',
      'Stump grinding 8–12" below grade',
      '24/7 storm damage response',
      'Full debris haul-off included',
    ],
    startingPrice: 'Free assessment',
    detail: {
      headline: 'Tree Removal, Pruning & Storm Response in Maryland',
      paragraphs: [
        'Tree work in Montgomery County means dealing with mature oaks, tight property lines, and overhead utility lines. Our climbers and bucket truck operators are trained for the rigging required when you can’t just drop a tree — and our equipment is rated for it.',
        'For routine work, we handle pruning, crown thinning, deadwooding, and shape correction by ISA-certified hands. For removals, we plan the cut sequence around your structures and haul everything off site the same day — no piles of chipped wood left behind.',
        'During storm season, our 24/7 emergency line dispatches a crew to active clients within hours. If a tree is on your roof or blocking your driveway, call us.',
      ],
      benefits: [
        { title: 'ISA-certified arborists', description: 'Any pruning or removal involving structures is overseen by a credentialed arborist.' },
        { title: '$2M liability coverage', description: 'Tree work is high-risk. We carry insurance well above the state minimum on every job.' },
        { title: '24/7 storm response', description: 'Active clients get priority dispatch during severe weather events.' },
        { title: 'Same-day haul-off', description: 'Chips, logs, and brush all leave with the crew unless you ask us to keep firewood.' },
      ],
    },
  },
  {
    slug: 'hardscaping',
    title: 'Hardscaping',
    icon: Layers,
    shortDescription:
      'Patios, retaining walls, walkways, and outdoor structures built with quality materials and proper technique — designed to hold up through Maryland winters.',
    longDescription:
      'We install paver patios, walkways, and retaining walls on properly compacted base — the part that determines whether your patio looks new in 10 years or starts heaving in two. Includes drainage planning, geogrid-reinforced retaining walls, fire pits, and seat walls.',
    inclusions: [
      'Engineered base preparation',
      'Paver patios, walkways & driveways',
      'Segmental retaining walls',
      'Fire pits, seat walls & step risers',
      'Drainage solutions integrated into every build',
    ],
    startingPrice: 'Free assessment',
    detail: {
      headline: 'Paver Patios, Walkways & Retaining Walls Built to Last',
      paragraphs: [
        'Hardscaping looks like masonry but lives or dies on what’s underneath. We excavate to the right depth, compact a properly graded base of crushed stone, and lay every paver on a screeded bedding sand — the steps that separate a patio that’s still flat in 10 years from one that starts heaving in two.',
        'We install Techo-Bloc, Belgard, and Unilock paver systems on patios, walkways, and driveways; build segmental retaining walls with geogrid reinforcement; and integrate drainage into every build so water moves where it should.',
        'For finishing details — fire pits, seat walls, lighting conduit, step risers — we plan them at design time, not as bolt-ons later. The result holds up through Maryland winters and reads as one cohesive piece.',
      ],
      benefits: [
        { title: 'Engineered base prep', description: '6–8 inches of compacted crushed stone, properly graded for drainage. This is the work that matters most.' },
        { title: 'Polymeric sand joints', description: 'Joints filled with polymeric sand resist weeds and washout without locking the system rigidly.' },
        { title: 'Geogrid-reinforced walls', description: 'Retaining walls over 4 ft get geogrid layers tied back into the embankment — they don’t lean.' },
        { title: 'Drainage planned in', description: 'Every patio has a 1–2% slope away from structures. We plan the water before we plan the pattern.' },
      ],
    },
  },
  {
    slug: 'snow-removal',
    title: 'Snow Removal',
    icon: Snowflake,
    shortDescription:
      'Residential and commercial snow plowing, salting, and ice management throughout the Maryland winter season. Reliable storm-event coverage.',
    longDescription:
      'Maryland winters are unpredictable — when a storm hits, you need a crew that’s already on the road. Our seasonal contracts include automatic dispatch when accumulation thresholds are met, salting and pre-treatment, and dependable coverage through every storm event.',
    inclusions: [
      'Residential driveway plowing',
      'Commercial parking lot service',
      'Salting & pre-treatment',
      'Reliable storm-event dispatch',
      'Seasonal contracts or per-event billing',
    ],
    startingPrice: 'Free assessment',
    seasonal: true,
    detail: {
      headline: 'Snow Removal in Burtonsville & Montgomery County',
      paragraphs: [
        'When a storm hits, the crews that show up are the ones who were already on the road. Our seasonal contracts trigger automatic dispatch the moment accumulation crosses your threshold — so you don’t wake up snowed in waiting for a call back.',
        'We handle residential driveways and commercial parking lots, with pre-treatment, plowing, salting, and ice management as separate line items so you only pay for what you need. Sidewalks, walkways, and ADA-compliant clearing are available on commercial contracts.',
        'Contracts run November 1 through March 31. Per-event billing is available but contract clients get priority during heavy storms.',
      ],
      benefits: [
        { title: 'Automatic dispatch', description: 'You set the snowfall threshold. We dispatch automatically — no need to call when you wake up to snow.' },
        { title: 'Pre-treatment included', description: 'When ice is forecast, we brine your surfaces in advance so it doesn’t bond to the pavement.' },
        { title: 'Commercial-grade equipment', description: 'Plow trucks, salt spreaders, snow blowers, and shovels — rated for back-to-back storms.' },
        { title: 'Contract priority', description: 'Seasonal contract clients get dispatched first during major events. Per-event clients are served after.' },
      ],
    },
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sarah M.',
    location: 'Burtonsville, MD',
    rating: 5,
    serviceType: 'Lawn Care',
    quote:
      'Green Life showed up exactly when they said, worked clean, and the yard looks incredible. I’ve hired three other landscapers before — none came close to the quality or reliability.',
  },
  {
    id: 'r2',
    author: 'Robert J.',
    location: 'Silver Spring, MD',
    rating: 5,
    serviceType: 'Tree Removal',
    quote:
      'Had a large tree come down in a storm. They were out the next morning, cleaned everything up, and gave me a fair price. Honest work from honest people. Highly recommend.',
  },
  {
    id: 'r3',
    author: 'Lisa T.',
    location: 'Rockville, MD',
    rating: 5,
    serviceType: 'Lawn Care + Cleanups',
    quote:
      'We’ve used Green Life for lawn care and seasonal cleanups for three years. They’re consistent, professional, and our yard has never looked better. Worth every penny.',
  },
  {
    id: 'r4',
    author: 'Brian M.',
    location: 'Olney, MD',
    rating: 5,
    serviceType: 'Hardscaping',
    quote:
      'Rebuilt our patio and walkway. Two winters in and it’s dead level — no settling, no weeds in the joints. The crew was respectful, the price was fair, and the work is excellent.',
  },
];

export const TRUST_STATS: TrustStat[] = [
  { icon: CalendarCheck, stat: '20+ Years', label: 'In business since 2005' },
  { icon: Award, stat: '500+ Projects', label: 'Across Montgomery County' },
  { icon: Star, stat: '5.0 Rating', label: `${SITE.reviewCount} Google reviews` },
];

export const HERO_STATS = [
  { num: '20+', label: 'Years in Business' },
  { num: '500+', label: 'Projects Completed' },
  { num: '5.0 ★', label: 'Average Google Rating' },
  { num: '100%', label: 'Licensed & Insured' },
];

export const WHY_US = [
  {
    icon: ShieldCheck,
    title: 'Fully Licensed & Insured',
    description:
      'Maryland-certified and fully insured on every job. You’re protected — and so is your property.',
  },
  {
    icon: CalendarCheck,
    title: 'In Business Since 2005',
    description:
      'Over 20 years serving Burtonsville and Montgomery County. Experience you can see in every project.',
  },
  {
    icon: Users,
    title: 'The Same Crew. Every Time.',
    description:
      'No rotating strangers. The same professionals care for your property consistently — they know your yard.',
  },
  {
    icon: Leaf,
    title: 'Eco-Conscious Methods',
    description:
      'Sustainable practices that protect your lawn’s long-term health and the local environment.',
  },
];

// Generate gallery items: pull from project-01.jpeg .. project-49.jpeg + the feature shot.
const GALLERY_CATEGORIES = [
  'Hardscaping',
  'Landscaping',
  'Lawn Care',
  'Tree Services',
  'Hardscaping',
  'Landscaping',
] as const;

// IDs of project photos that survive deduplication (the 6 byte-identical
// duplicates were removed: project-03, 07, 14, 17, 18, 46).
const GALLERY_PROJECT_IDS = [
  1, 2, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16, 19, 20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
  47, 48, 49,
] as const;

const PROJECT_GALLERY: GalleryItem[] = GALLERY_PROJECT_IDS.map((n, i) => {
  const category = GALLERY_CATEGORIES[i % GALLERY_CATEGORIES.length];
  return {
    id: `g${n}`,
    title: `${category} project`,
    category,
    src: `/gallery/project-${String(n).padStart(2, '0')}.jpeg`,
    alt: `${category} project by Green Life Landscaping in Maryland`,
  };
});

// Real snow-removal crew photos from the 2025-26 winter season.
const SNOW_GALLERY: GalleryItem[] = [
  { id: 'snow-1', title: 'Driveway plow & shovel', category: 'Snow Removal', src: '/gallery/snow-01.jpeg', alt: 'Green Life crew plowing and shoveling a residential driveway in Montgomery County, MD' },
  { id: 'snow-2', title: 'Sidewalk clearing', category: 'Snow Removal', src: '/gallery/snow-02.jpeg', alt: 'Snow removal from a residential sidewalk by Green Life Landscaping' },
  { id: 'snow-3', title: 'Plow truck on driveway', category: 'Snow Removal', src: '/gallery/snow-03.jpeg', alt: 'Green Life plow truck clearing a Maryland driveway during a storm event' },
  { id: 'snow-4', title: 'Backpack blower crew', category: 'Snow Removal', src: '/gallery/snow-04.jpeg', alt: 'Crew clearing snow from paver walkways with backpack blowers' },
  { id: 'snow-5', title: 'Salting & pre-treatment', category: 'Snow Removal', src: '/gallery/snow-05.jpeg', alt: 'Pre-treatment and salting of a residential walkway by Green Life Landscaping' },
  { id: 'snow-6', title: 'Commercial lot service', category: 'Snow Removal', src: '/gallery/snow-06.jpeg', alt: 'Commercial parking lot snow plowing by Green Life Landscaping in Maryland' },
  { id: 'snow-7', title: 'Winter property care', category: 'Snow Removal', src: '/gallery/snow-07.jpeg', alt: 'Winter property maintenance by Green Life Landscaping in Burtonsville MD' },
  { id: 'snow-8', title: 'Storm-event response', category: 'Snow Removal', src: '/gallery/snow-08.jpeg', alt: 'Storm-event snow response by Green Life Landscaping' },
];

export const GALLERY: GalleryItem[] = [...PROJECT_GALLERY, ...SNOW_GALLERY];

// Curated heroes per page — sample from the project photos.
export const PAGE_HEROES = {
  home: '/gallery/project-01.jpeg',
  about: '/gallery/project-04.jpeg',
  services: '/gallery/project-13.jpeg',
  contact: '/gallery/project-21.jpeg',
  gallery: '/gallery/project-28.jpeg',
  estimate: '/gallery/project-35.jpeg',
  lawnCare: '/gallery/project-04.jpeg',
  landscaping: '/gallery/project-09.jpeg',
  treeServices: '/gallery/project-13.jpeg',
  hardscaping: '/gallery/hardscaping-feature.jpeg',
  snowRemoval: '/gallery/snow-01.jpeg',
};

export const TEAM = [
  {
    name: 'Sergio',
    role: 'Estimator',
    photo: '/team/sergio.jpeg',
    bio:
      'A familiar face on Maryland properties for years. Sergio handles free estimates for the full range of services — lawn care, landscaping, hardscaping, tree work, and snow.',
  },
  {
    name: 'Ederson',
    role: 'Estimator',
    photo: '/team/ederson.jpeg',
    bio:
      'Ederson handles free estimates across every service we offer. Honest scoping, transparent pricing, and the same standards you’d expect from someone who’s going to do the work.',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'Do you offer free estimates for landscaping services in Burtonsville, MD?',
    a: 'Yes. All estimates are completely free and come with no obligation. We’ll visit your property, assess what needs to be done, and provide a clear, honest quote — no pressure, no hidden fees.',
  },
  {
    q: 'Are you licensed and insured in Maryland?',
    a: 'Absolutely. Green Life Landscaping Services Inc is fully licensed and insured in the state of Maryland. Every job — regardless of size — is covered. You are protected, and so are our crew members.',
  },
  {
    q: 'What areas do you serve in Montgomery County?',
    a: 'We’re based in Burtonsville, MD and serve the full Montgomery County area including Silver Spring, Rockville, Germantown, Gaithersburg, Olney, and Laurel. We also serve parts of Howard and Prince George’s Counties. Call us if you’re unsure whether we cover your area — we likely do.',
  },
  {
    q: 'How often should I schedule lawn care service?',
    a: 'For most Maryland properties, weekly mowing during the growing season (April through October) produces the best results. We’ll assess your lawn and recommend the right frequency based on grass type, growth rate, and your goals.',
  },
  {
    q: 'Do you handle snow removal for residential properties in Maryland?',
    a: 'Yes. We offer residential and commercial snow removal throughout the Maryland service area. Our team handles plowing, salting, and ice management. Seasonal contracts are available so you’re automatically covered during storm events.',
  },
  {
    q: 'Can you handle both large and small landscaping projects?',
    a: 'Yes. We work on everything from routine weekly maintenance to full landscape installations and tree removal. Whether you need a single cleanup or an ongoing service agreement for a large property, we can handle it.',
  },
];
