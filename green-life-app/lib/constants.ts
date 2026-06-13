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
import type { Service, NavItem, Review, TrustStat, GalleryItem, CityPage } from './types';

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
    'Columbia',
    'Ellicott City',
    'Elkridge',
    'Jessup',
    'Glen Burnie',
    'Severna Park',
    'Pasadena',
    'Annapolis',
    'Bowie',
    'Catonsville',
    'Laurel',
    'Beltsville',
    'Sykesville',
    'Eldersburg',
    'Burtonsville',
    'Silver Spring',
    'Germantown',
    'Rockville',
  ],
  hours: 'Mon–Fri 7am–5pm',
  license: 'Maryland Licensed & Insured',
  insured: 'Fully Insured',
  social: {
    facebook: 'https://www.facebook.com/share/1BBp2of58V/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/greenlifelandscaping_md?igsh=d28yc21yMjE5em54',
    google: 'https://share.google/0smevVkYzD9OYuo35',
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    slug: 'lawn-care',
    title: 'Lawn Care',
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
    title: 'Landscaping',
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
    ],
    startingPrice: 'Free assessment',
    detail: {
      headline: 'Landscape Design & Installation Across Montgomery County',
      paragraphs: [
        'A good landscape outlasts its installer. We start every project with a walk-through to understand how you actually use your yard, then design plantings that work with Maryland’s clay soil, summer humidity, and hard winters — not against them.',
        'We install trees, shrubs, perennials, sod, and mulch beds sourced from local growers, and we hand-cut a 4-inch trench at every bed edge so the line stays crisp for the whole season.',
        'Whether you’re refreshing a tired front yard or doing a full backyard transformation, we’re a single point of contact from design through install through ongoing maintenance.',
      ],
      benefits: [
        { title: 'Plants chosen for MD soil', description: 'No big-box-store plants that die in August. We use local growers and species that thrive in our zone.' },
        { title: 'Crisp hand-cut bed edges', description: 'A 4″ trench at every bed line keeps mulch in, grass out, and your beds looking sharp all season.' },
        { title: 'Design + install + maintain', description: 'One team handles the whole arc, so the design intent doesn’t get lost between phases.' },
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
    author: 'Andrea Ciniero',
    location: 'Ellicott City, MD',
    rating: 5,
    serviceType: 'Landscaping + Cleanups',
    quote:
      'If you want a reasonable landscaping company, Green Life is your company. They’ve been my landscaping company for over 10 years. They do an excellent job and their spring clean up just makes you stand back in awe. They do a great job on fall clean up as well. Need something special done… they do that too. They work super hard on every project they do. I highly recommend them if you want your yard to look great.',
  },
  {
    id: 'r2',
    author: 'Linda Betts',
    location: 'Woodlawn, MD',
    rating: 5,
    serviceType: 'Landscaping',
    quote:
      'This crew was amazing! My yard is challenging and chaotic and these guys were so professional and hard working. They made it look like a showplace!',
  },
  {
    id: 'r3',
    author: 'Joan Weeks',
    location: 'Silver Spring, MD',
    rating: 5,
    serviceType: 'Landscaping',
    quote:
      'The planting team did a great job. I used my RING video system to guide them to the exact place to plant the Alberta Spruce and how to water it. It looks great — very healthy dwarf Alberta Spruce.',
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

// Project gallery — every photo explicitly categorized by what it actually
// depicts. Hardscaping, Lawn Care, and Tree Services categories are strict:
// only photos showing that service alone. Landscaping is the umbrella for
// plant beds, mulch work, and multi-service shots.
const PROJECT_GALLERY: GalleryItem[] = [
  // Hardscaping (pure concrete & stone)
  { id: 'g-hard-feature', title: 'Featured hardscape', category: 'Hardscaping', src: '/gallery/hardscaping-feature.jpeg', alt: 'Featured hardscape installation by Green Life Landscaping in Maryland' },
  { id: 'g1', title: 'Retaining wall', category: 'Hardscaping', src: '/gallery/project-01.jpeg', alt: 'Retaining wall built by Green Life Landscaping in Maryland' },
  { id: 'g11', title: 'Concrete patio & steps', category: 'Hardscaping', src: '/gallery/project-11.jpeg', alt: 'Concrete patio and steps with railings by Green Life Landscaping' },
  { id: 'g12', title: 'Hardscape walkway', category: 'Hardscaping', src: '/gallery/project-12.jpeg', alt: 'Hardscape walkway installation on a Maryland property' },
  { id: 'g13', title: 'Backyard concrete patio', category: 'Hardscaping', src: '/gallery/project-13.jpeg', alt: 'Backyard concrete patio with seating by Green Life Landscaping' },
  { id: 'g15', title: 'Hardscape paver work', category: 'Hardscaping', src: '/gallery/project-15.jpeg', alt: 'Hardscape paver work by Green Life Landscaping in Maryland' },
  { id: 'g16', title: 'Concrete walkway extension', category: 'Hardscaping', src: '/gallery/project-16.jpeg', alt: 'Concrete walkway extension by Green Life Landscaping' },
  { id: 'g21', title: 'Hardscape installation', category: 'Hardscaping', src: '/gallery/project-21.jpeg', alt: 'Hardscape installation on a Maryland residential property' },
  { id: 'g26', title: 'Patio install', category: 'Hardscaping', src: '/gallery/project-26.jpeg', alt: 'Patio installation by Green Life Landscaping in Burtonsville, MD' },
  { id: 'g31', title: 'Stone & concrete', category: 'Hardscaping', src: '/gallery/project-31.jpeg', alt: 'Stone and concrete hardscape project by Green Life Landscaping' },
  { id: 'g32', title: 'Hardscape detail', category: 'Hardscaping', src: '/gallery/project-32.jpeg', alt: 'Detail of hardscape construction by Green Life Landscaping' },
  { id: 'g47', title: 'Hardscape feature', category: 'Hardscaping', src: '/gallery/project-47.jpeg', alt: 'Featured hardscape project by Green Life Landscaping in MD' },

  // Lawn Care (pure)
  { id: 'g4', title: 'Manicured lawn', category: 'Lawn Care', src: '/gallery/project-04.jpeg', alt: 'Healthy manicured lawn maintained by Green Life Landscaping' },
  { id: 'g6', title: 'Lawn maintenance', category: 'Lawn Care', src: '/gallery/project-06.jpeg', alt: 'Lawn maintenance work by Green Life Landscaping in Maryland' },
  { id: 'g9', title: 'Full-property lawn', category: 'Lawn Care', src: '/gallery/project-09.jpeg', alt: 'Lush front-yard lawn maintained by Green Life Landscaping in Maryland' },
  { id: 'g10', title: 'Fresh sod install', category: 'Lawn Care', src: '/gallery/project-10.jpeg', alt: 'Green Life crew installing fresh sod during a lawn renovation' },

  // Tree Services (pure)
  { id: 'g19', title: 'Tree work', category: 'Tree Services', src: '/gallery/project-19.jpeg', alt: 'Tree service work by Green Life Landscaping crew in Maryland' },
  { id: 'g20', title: 'Tree removal & pruning', category: 'Tree Services', src: '/gallery/project-20.jpeg', alt: 'Tree removal and pruning by Green Life Landscaping' },
  { id: 'g30', title: 'Tree care', category: 'Tree Services', src: '/gallery/project-30.jpeg', alt: 'Tree care and maintenance by Green Life Landscaping in MD' },
  { id: 'g48', title: 'Tree services', category: 'Tree Services', src: '/gallery/project-48.jpeg', alt: 'Tree services project by Green Life Landscaping in Maryland' },

  // Landscaping (plant beds, mulch, mixed-service shots)
  { id: 'g2', title: 'Mulched beds', category: 'Landscaping', src: '/gallery/project-02.jpeg', alt: 'Fresh mulch installation on landscape beds by Green Life Landscaping' },
  { id: 'g5', title: 'Front-yard plantings', category: 'Landscaping', src: '/gallery/project-05.jpeg', alt: 'Front-yard landscape bed with mulch and perennials by Green Life' },
  { id: 'g8', title: 'Mulch refresh', category: 'Landscaping', src: '/gallery/project-08.jpeg', alt: 'Mulch refresh on landscape beds by Green Life Landscaping' },
  { id: 'g22', title: 'Landscape & hardscape', category: 'Landscaping', src: '/gallery/project-22.jpeg', alt: 'Combined landscape and hardscape project by Green Life Landscaping' },
  { id: 'g23', title: 'Bed edging & planting', category: 'Landscaping', src: '/gallery/project-23.jpeg', alt: 'Crisp bed edging and planting by Green Life Landscaping' },
  { id: 'g24', title: 'Landscape design', category: 'Landscaping', src: '/gallery/project-24.jpeg', alt: 'Landscape design installation by Green Life in Maryland' },
  { id: 'g25', title: 'Landscape & lawn refresh', category: 'Landscaping', src: '/gallery/project-25.jpeg', alt: 'Combined landscape and lawn care refresh by Green Life' },
  { id: 'g27', title: 'Landscape with hardscape', category: 'Landscaping', src: '/gallery/project-27.jpeg', alt: 'Landscape and hardscape installation by Green Life Landscaping' },
  { id: 'g28', title: 'Landscape install', category: 'Landscaping', src: '/gallery/project-28.jpeg', alt: 'Landscape installation by Green Life Landscaping in Maryland' },
  { id: 'g29', title: 'Landscaping', category: 'Landscaping', src: '/gallery/project-29.jpeg', alt: 'Residential landscaping project by Green Life Landscaping in Maryland' },
  { id: 'g33', title: 'Mulched landscape', category: 'Landscaping', src: '/gallery/project-33.jpeg', alt: 'Mulched landscape beds by Green Life Landscaping' },
  { id: 'g34', title: 'Mulch & plant install', category: 'Landscaping', src: '/gallery/project-34.jpeg', alt: 'Mulch and plant install by Green Life Landscaping' },
  { id: 'g35', title: 'Full-property refresh', category: 'Landscaping', src: '/gallery/project-35.jpeg', alt: 'Full-property landscape, mulch, and lawn refresh by Green Life' },
  { id: 'g36', title: 'Landscape design', category: 'Landscaping', src: '/gallery/project-36.jpeg', alt: 'Landscape design project by Green Life Landscaping in MD' },
  { id: 'g37', title: 'Landscape install', category: 'Landscaping', src: '/gallery/project-37.jpeg', alt: 'Landscape installation by Green Life Landscaping in Maryland' },
  { id: 'g38', title: 'Hardscape + landscape', category: 'Landscaping', src: '/gallery/project-38.jpeg', alt: 'Combined hardscape and landscape work by Green Life' },
  { id: 'g39', title: 'Mulch & beds', category: 'Landscaping', src: '/gallery/project-39.jpeg', alt: 'Mulch and landscape bed work by Green Life Landscaping' },
  { id: 'g40', title: 'Landscape & trim', category: 'Landscaping', src: '/gallery/project-40.jpeg', alt: 'Landscape and shrub trimming by Green Life Landscaping' },
  { id: 'g41', title: 'Full-yard care', category: 'Landscaping', src: '/gallery/project-41.jpeg', alt: 'Full-yard tree, mulch, and lawn care by Green Life Landscaping' },
  { id: 'g42', title: 'Bed edging & care', category: 'Landscaping', src: '/gallery/project-42.jpeg', alt: 'Bed edging, trimming, and mulch by Green Life Landscaping' },
  { id: 'g43', title: 'Full property project', category: 'Landscaping', src: '/gallery/project-43.jpeg', alt: 'Full landscape, hardscape, and lawn care project by Green Life' },
  { id: 'g44', title: 'Landscape, trees & mulch', category: 'Landscaping', src: '/gallery/project-44.jpeg', alt: 'Landscape, tree, and mulch work by Green Life Landscaping' },
  { id: 'g45', title: 'Mulch & landscape', category: 'Landscaping', src: '/gallery/project-45.jpeg', alt: 'Mulch, landscape, and hardscape project by Green Life Landscaping' },
  { id: 'g49', title: 'Landscape, hardscape & tree', category: 'Landscaping', src: '/gallery/project-49.jpeg', alt: 'Combined landscape, hardscape, and tree project by Green Life' },
  { id: 'g50', title: 'Pool stonework & beds', category: 'Landscaping', src: '/gallery/project-50.jpeg', alt: 'Stone spillover pool feature with planters and mulched beds by Green Life Landscaping' },
  { id: 'g51', title: 'Poolside landscape bed', category: 'Landscaping', src: '/gallery/project-51.jpeg', alt: 'Poolside landscape bed with palms, daylilies, and fresh mulch by Green Life Landscaping' },
  { id: 'g52', title: 'Astilbe shade plantings', category: 'Landscaping', src: '/gallery/project-52.jpeg', alt: 'Pink astilbe and shade plantings in a mulched bed by Green Life Landscaping' },
  { id: 'g53', title: 'Front-yard landscape refresh', category: 'Landscaping', src: '/gallery/project-53.jpeg', alt: 'Front-yard landscape refresh with Japanese maple, lawn, and mulched bed by Green Life Landscaping' },
  { id: 'g54', title: 'Patterned bed planting', category: 'Landscaping', src: '/gallery/project-54.jpeg', alt: 'Geometric mulched planting bed with patterned shrubs by Green Life Landscaping' },
  { id: 'g55', title: 'Container plantings', category: 'Landscaping', src: '/gallery/project-55.jpeg', alt: 'Container plantings with pink and white petunias on stone steps by Green Life Landscaping' },
  { id: 'g56', title: 'Walkway & front landscape', category: 'Landscaping', src: '/gallery/project-56.jpeg', alt: 'Front yard with stone walkway, mulched beds, and structured plantings by Green Life Landscaping' },
  { id: 'g57', title: 'Patio-side landscape', category: 'Landscaping', src: '/gallery/project-57.jpeg', alt: 'Curved patio-side landscape bed with shrubs and container planter by Green Life Landscaping' },
  { id: 'g58', title: 'Bed edging by patio', category: 'Landscaping', src: '/gallery/project-58.jpeg', alt: 'Variegated grasses and shrubs in a mulched bed along a flagstone patio by Green Life Landscaping' },
  { id: 'g59', title: 'Shade garden in bloom', category: 'Landscaping', src: '/gallery/project-59.jpeg', alt: 'Shade garden with impatiens, astilbe, and hosta in full bloom by Green Life Landscaping' },
  { id: 'g60', title: 'Sideyard plant refresh', category: 'Landscaping', src: '/gallery/project-60.jpeg', alt: 'Side-yard planting refresh with astilbe and fresh mulch by Green Life Landscaping' },
  { id: 'g61', title: 'Mulch refresh & planting', category: 'Landscaping', src: '/gallery/project-61.jpeg', alt: 'Fresh mulch and new plantings along a stone-edged bed by Green Life Landscaping' },
  { id: 'g62', title: 'Pool & water feature', category: 'Landscaping', src: '/gallery/project-62.jpeg', alt: 'Backyard pool with stone water feature and surrounding plantings by Green Life Landscaping' },
  { id: 'g63', title: 'Poolside container display', category: 'Landscaping', src: '/gallery/project-63.jpeg', alt: 'Poolside container display with palm and petunias on a paver patio by Green Life Landscaping' },
];

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
  services: '/gallery/project-25.jpeg',
  contact: '/gallery/project-21.jpeg',
  gallery: '/gallery/project-28.jpeg',
  estimate: '/gallery/project-35.jpeg',
  lawnCare: '/gallery/project-04.jpeg',
  landscaping: '/gallery/project-29.jpeg',
  treeServices: '/gallery/project-19.jpeg',
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

// ============================================================================
// LOCATION-TARGETED LANDING PAGES (SEO)
// Each entry generates a unique static page at /service-areas/{slug}
// with city-specific intro copy, neighborhoods, characteristics, and FAQ.
// Tier 1 = Gold Mine (densest GLL clusters), 2 = Strong Growth, 3 = Perimeter.
// ============================================================================

export const CITIES: readonly CityPage[] = [
  // ── Tier 1 — Gold Mine Hubs ──────────────────────────────────────────────
  {
    slug: 'columbia-md',
    name: 'Columbia',
    fullName: 'Columbia, MD',
    county: 'Howard County',
    zips: ['21044', '21045', '21046'],
    tier: 1,
    neighborhoods: [
      'Wilde Lake',
      'Long Reach',
      'Owen Brown',
      'River Hill',
      'Town Center',
      'Harper’s Choice',
      'Oakland Mills',
      'Kings Contrivance',
    ],
    intro:
      'Columbia is the heart of where Green Life Landscaping does its best work. James Rouse’s planned village system gave the city mature street trees, ten man-made lakes, and a tree canopy that — done right — needs a different maintenance rhythm than tract neighborhoods. We’ve been on properties in every village from Wilde Lake to River Hill, and we know the HOA design rules, the deer pressure on perennial beds, and the drainage realities of homes sitting downhill from Lake Kittamaqundi or the Middle Patuxent. If you own a home in Columbia, you don’t need a generic landscaper — you need a crew that already knows your street.',
    characteristics: [
      {
        title: 'Mature canopy that needs ongoing care',
        body:
          'Columbia’s 50-year-old oaks, maples, and tulip poplars are beautiful — and ready to crack open in a wind event without crown work. We prune, deadwood, and remove with ISA-certified climbers.',
      },
      {
        title: 'HOA-aware design',
        body:
          'Every CA village has architectural review. Our hardscape and planting designs are written to pass first time — no back-and-forth with the New Town Architectural Committee.',
      },
      {
        title: 'Deer-resistant planting palettes',
        body:
          'Boxwood, hellebore, hakonechloa, ornamental alliums — we install palettes that look intentional and don’t get eaten by morning.',
      },
      {
        title: 'Lake-adjacent drainage',
        body:
          'Homes on the lake side of Wilde Lake or Centennial Lane often sit on grade that funnels water poorly. We install French drains and downspout extensions tuned for clay soil.',
      },
    ],
    faq: [
      {
        q: 'Do you handle Columbia Association (CA) architectural review submissions?',
        a: 'Yes — for hardscape, plantings over a certain size, and any change visible from a public road, we prepare the drawings and material spec sheets that CA requires. Most of our submissions are approved on the first review.',
      },
      {
        q: 'How quickly can you start a lawn-care contract in Columbia?',
        a: 'We’re already in Columbia weekly — adding a new lawn to an existing route is typically 1–2 weeks from contract signing during the growing season, or earlier in the off-season.',
      },
      {
        q: 'Do you serve all 10 Columbia villages?',
        a: 'Yes. Wilde Lake, Long Reach, Owen Brown, River Hill, Town Center, Harper’s Choice, Oakland Mills, Kings Contrivance, Hickory Ridge, and Dorsey’s Search — we have active clients in every village.',
      },
    ],
  },
  {
    slug: 'ellicott-city-md',
    name: 'Ellicott City',
    fullName: 'Ellicott City, MD',
    county: 'Howard County',
    zips: ['21042', '21043'],
    tier: 1,
    neighborhoods: [
      'Historic District',
      'Turf Valley',
      'Centennial',
      'Font Hill',
      'Dunloggin',
      'Burleigh Manor',
      'Waverly Woods',
    ],
    intro:
      'Ellicott City sits on Maryland’s steepest residential terrain west of the Patapsco, and that single fact shapes almost everything we do here. Slopes that the 2016 and 2018 floods exposed have made retaining-wall and drainage work the most-requested service in town, and the historic granite-quarried character of Old Ellicott City means hardscape choices need to reference the local stone vocabulary. Whether you own a 1990s colonial in Turf Valley or one of the cut-into-the-hillside homes along Main Street, we know the geological quirks of working in Howard County’s flood-aware corridor — and we build for the next storm, not just the next dry season.',
    characteristics: [
      {
        title: 'Slope-rated retaining walls',
        body:
          'Geogrid-reinforced segmental walls engineered for the steep grades around Patapsco Valley. Built to spec, not stacked.',
      },
      {
        title: 'Drainage that survives Maryland’s next 1,000-year storm',
        body:
          'After 2016 and 2018, drainage is no longer optional. We design French drains, dry wells, and graded swales tuned for Ellicott City’s flood corridors.',
      },
      {
        title: 'Local-stone hardscape choices',
        body:
          'Patapsco granite blends seamlessly with the historic district vocabulary. We source from local quarries when it makes the design.',
      },
      {
        title: 'Tree work on sloped lots',
        body:
          'Removals over a 30-foot drop need a different rigging plan. Our climbers and ground crew are insured and certified for it.',
      },
    ],
    faq: [
      {
        q: 'Do you do retaining-wall work in Ellicott City?',
        a: 'It’s one of our top requests here. We build segmental walls up to 12 feet engineered for the slope, with proper geogrid reinforcement and base prep.',
      },
      {
        q: 'Can you help with drainage problems from past flooding?',
        a: 'Yes. We assess where water actually goes during a storm event — not just where it pools afterward — and design a drainage solution that diverts it away from your foundation and downhill neighbors.',
      },
      {
        q: 'Do you work on historic-district properties?',
        a: 'Yes. We respect the design vernacular of Old Ellicott City and use materials and plantings consistent with the period. We also handle the permits when work is visible from a public right-of-way.',
      },
    ],
  },
  {
    slug: 'elkridge-md',
    name: 'Elkridge',
    fullName: 'Elkridge & Jessup, MD',
    county: 'Howard County',
    zips: ['21075', '20794'],
    tier: 1,
    alsoServes: 'Jessup',
    neighborhoods: [
      'Rockburn',
      'Belmont',
      'Sunset Park',
      'Howard Square',
      'Hammonds Promise',
      'Jessup',
    ],
    intro:
      'The I-95/Route 1 corridor between Baltimore and DC has quietly become one of Maryland’s densest residential and small-commercial growth zones, and Elkridge–Jessup sits right in the middle of it. We serve the new-construction townhouse communities along Montgomery Run as well as the older established lots on the Patapsco side of Route 1. What both sets of clients want from us is the same: a crew that shows up on schedule when their property is sandwiched between two interstates and they don’t have a Saturday morning to lose chasing down a no-show landscaper.',
    characteristics: [
      {
        title: 'Townhouse-scale efficiency',
        body:
          'Most Elkridge yards are compact. We price honest weekly mowing programs that don’t pad hours.',
      },
      {
        title: 'Commercial / mixed-use experience',
        body:
          'Office parks, light industrial, and HOA common areas along Route 1 — we hold accounts in all three.',
      },
      {
        title: 'Sound-buffer plantings',
        body:
          'Properties backing I-95 benefit from layered evergreen screens. We design and install for noise reduction as well as visual privacy.',
      },
      {
        title: 'Quick-turn small jobs',
        body:
          'Single-day cleanups, mulch refreshes, and storm-cleanup turnaround for properties without time to waste.',
      },
    ],
    faq: [
      {
        q: 'Do you serve commercial properties along Route 1?',
        a: 'Yes. We hold weekly contracts on several office and small-industrial properties between Elkridge and Jessup. Includes lawn care, hedge trimming, mulch refresh, and snow removal.',
      },
      {
        q: 'How do you handle properties backing I-95?',
        a: 'Sound and dust are the two issues. We typically install a 3-row evergreen screen (Norway spruce or Cryptomeria, layered with hollies and viburnum) that softens the wall of noise within 2–3 growing seasons.',
      },
      {
        q: 'Can you do same-week service for new-construction punch lists?',
        a: 'Usually yes. We get a lot of late-builder calls for grading repair, sod, and final mulch. As long as the schedule has room we can be on a new-construction property within 5–7 days.',
      },
    ],
  },
  {
    slug: 'glen-burnie-md',
    name: 'Glen Burnie',
    fullName: 'Glen Burnie, MD',
    county: 'Anne Arundel County',
    zips: ['21060', '21061'],
    tier: 1,
    neighborhoods: [
      'Marley',
      'Cromwell',
      'Furnace Branch',
      'Tanyard Springs',
      'Sun Valley',
      'Solley',
    ],
    intro:
      'Glen Burnie is one of Maryland’s most established residential markets — many of our clients here own homes built in the 1960s and 70s, which means we’re working with mature landscapes that have either been beautifully maintained for decades or are now overdue for a full reset. Either way, the conversation is usually about how to bring back the lawn, refresh tired beds, and update hardscape that’s starting to settle. We know the typical lot sizes, soil profiles, and tree species in Marley, Cromwell, and the older Furnace Branch neighborhoods, and we know what does — and doesn’t — work in established Anne Arundel County yards.',
    characteristics: [
      {
        title: 'Established-lawn renovation',
        body:
          'Aeration, slit-seeding, and topdressing programs that bring a tired 50-year-old lawn back to life over one growing season.',
      },
      {
        title: 'Mature bed renewal',
        body:
          'When yew foundation plantings are 40 years old and pressed against the siding, it’s time. We remove overgrown shrubs and re-plant with appropriately scaled options.',
      },
      {
        title: 'Patio resurrects',
        body:
          'Settled flagstone and heaving brick patios from the original build era — relevel, re-set, and seal.',
      },
      {
        title: 'Storm-drop tree removal',
        body:
          'Older neighborhoods have more mature trees and more wind-event damage. We respond within 24 hours for active clients.',
      },
    ],
    faq: [
      {
        q: 'Can you replace 40-year-old foundation shrubs with something more modern?',
        a: 'Absolutely. We remove the overgrown plantings (usually yews, hollies, or junipers grown into the foundation), regrade the bed if needed, and install a new palette appropriate to your home’s style and the light conditions.',
      },
      {
        q: 'Do you serve all of the 21060 / 21061 area?',
        a: 'Yes — both ZIP codes. From Marley and Cromwell down through the Furnace Branch and Solley corridors.',
      },
      {
        q: 'How long does a full lawn renovation take?',
        a: 'Typically one growing season. Fall aeration + slit-seeding sets up a strong spring, then a summer of proper mowing and watering brings the turf back. We schedule the work and tell you exactly what to do between visits.',
      },
    ],
  },

  // ── Tier 2 — Strong Growth Hubs ──────────────────────────────────────────
  {
    slug: 'severna-park-md',
    name: 'Severna Park',
    fullName: 'Severna Park & Pasadena, MD',
    county: 'Anne Arundel County',
    zips: ['21146', '21122'],
    tier: 2,
    alsoServes: 'Pasadena',
    neighborhoods: [
      'Round Bay',
      'Linstead',
      'Olde Severna Park',
      'Riviera Beach',
      'Lake Shore',
      'Magothy Beach',
    ],
    intro:
      'The peninsula running from Pasadena down to Severna Park is Chesapeake Bay country, and the landscaping conversation always starts with two things: salt and slope. Many properties have water on at least one side, mature canopy that drops oak leaves into the shoreline buffer, and bulkheads or riprap that need vegetation transitions. Our crews understand which plants survive salt-spray microclimates along Magothy Beach, which patio materials hold up to humid-summer freeze-thaw on the Severn River side, and how to design outdoor living for homes that genuinely live outdoors six months of the year.',
    characteristics: [
      {
        title: 'Waterfront-appropriate plantings',
        body:
          'Salt-tolerant native palette: switchgrass, beach plum, bayberry, eastern red cedar — chosen for the conditions, not the catalog.',
      },
      {
        title: 'Shoreline buffer compliance',
        body:
          'Anne Arundel County critical-area rules govern the first 100 feet from the waterline. We design plantings that satisfy the buffer requirements and the homeowner.',
      },
      {
        title: 'Outdoor-living hardscape',
        body:
          'Bay-side properties get the most out of patios, fire pits, and dining areas. We build for actual entertaining, not just curb appeal.',
      },
      {
        title: 'Bulkhead-to-lawn transitions',
        body:
          'The 6-foot strip between a hard shoreline and the lawn is often a mess. We design proper transitions that look good and slow runoff.',
      },
    ],
    faq: [
      {
        q: 'Do you know the Anne Arundel County critical-area buffer rules?',
        a: 'Yes. We design plantings that satisfy the Chesapeake Bay Critical Area Act buffer requirements while still meeting the homeowner’s aesthetic goals.',
      },
      {
        q: 'Will my plants survive on a salt-spray property?',
        a: 'The ones we pick will. We use a deliberate native palette of salt-tolerant species — switchgrass, beach plum, bayberry, eastern red cedar — chosen specifically for waterfront conditions.',
      },
      {
        q: 'Can you build a paver patio close to the waterline?',
        a: 'Yes, as long as we’re outside the buffer or have permits. We engineer the base for freeze-thaw stress that bay-front properties experience and use polymeric sand that handles humidity.',
      },
    ],
  },
  {
    slug: 'annapolis-md',
    name: 'Annapolis',
    fullName: 'Annapolis, MD',
    county: 'Anne Arundel County',
    zips: ['21401', '21403', '21409'],
    tier: 2,
    neighborhoods: [
      'Eastport',
      'Murray Hill',
      'Historic District',
      'Wardour',
      'Hillsmere',
      'Bay Ridge',
      'Annapolis Roads',
    ],
    intro:
      'Annapolis is a different kind of client. The historic district has brick-and-boxwood vernacular that goes back to the 18th century; Eastport blends mid-century cottages with modern updates; and the Bay Ridge / Annapolis Roads communities have water views, mature trees, and architectural standards that take landscaping seriously. We do work for state-house staffers, Naval Academy faculty, and longtime Annapolitans, and the through line is the same: detail-level craftsmanship that respects the city’s aesthetic standards. If you’re looking for a crew that won’t replace your 200-year-old boxwood with leyland cypress, you’re in the right place.',
    characteristics: [
      {
        title: 'Heritage-plant respect',
        body:
          'Boxwood, holly, and English-garden vocabulary appropriate to colonial-era architecture. We prune for shape — never shear.',
      },
      {
        title: 'Brick & natural-stone hardscape',
        body:
          'We match the brick walks, granite curbs, and bluestone you see across the historic district. Modern installation, period material.',
      },
      {
        title: 'Historic District commission readiness',
        body:
          'Exterior changes in the HPC area need approval. We prep the submission and walk it through.',
      },
      {
        title: 'Mature tree assessment',
        body:
          'Annapolis has trees older than the country. We assess, preserve, and selectively prune — removal is the last option.',
      },
    ],
    faq: [
      {
        q: 'Do you work in the Annapolis Historic District?',
        a: 'Yes — frequently. We prepare the Historic Preservation Commission submissions and use period-appropriate materials. Most of our HPC submissions are approved on the first review.',
      },
      {
        q: 'Can you maintain a heritage boxwood garden?',
        a: 'Yes. We hand-prune for shape rather than shearing, and we monitor for boxwood blight pressure — which has been increasing in Anne Arundel County over the last 5 years.',
      },
      {
        q: 'Do you serve Eastport and Bay Ridge?',
        a: 'Yes. We have active clients across the bridge in Eastport and out toward Hillsmere, Annapolis Roads, and Bay Ridge.',
      },
    ],
  },
  {
    slug: 'bowie-md',
    name: 'Bowie',
    fullName: 'Bowie, MD',
    county: 'Prince George’s County',
    zips: ['20715', '20716', '20720', '20721'],
    tier: 2,
    neighborhoods: [
      'Belair',
      'Mitchellville',
      'Old Town Bowie',
      'Northridge',
      'Saddlebrook',
      'Hunters Mill',
      'Pointer Ridge',
    ],
    intro:
      'Bowie is a planned-community success story — the Levitt-built Belair neighborhoods turned 60 last year, and they’re still the largest single-developer community in the state. The mature trees that came with those original 1960s plantings are now reaching the end of their lifespan, which means tree work and full-yard refreshes dominate our Bowie schedule. The golf-course communities around Country Club Estates and the newer construction in Northridge round out the work. We know the original Levitt floor plans, the typical lot sizes, and what the soil tested at when the original sod went down — and we know what your house deserves now that it’s 60 years older.',
    characteristics: [
      {
        title: 'End-of-life canopy management',
        body:
          'Many original Belair pin oaks and silver maples are showing signs of decline. We assess, prune, and where needed remove + replace with longer-lived natives.',
      },
      {
        title: 'Golf-course-community standards',
        body:
          'Properties around Country Club Estates have HOA expectations. We meet them without making your yard a copy-paste of the neighbors’.',
      },
      {
        title: 'Levitt-home landscape refresh',
        body:
          'A 1965 Belair home with original foundation plantings needs more than a trim. We do full bed refreshes that re-set the property for the next 30 years.',
      },
      {
        title: 'Northridge new-construction completion',
        body:
          'New PG County builders rarely finish the yard properly. We do final grading, sod, irrigation review, and starter mulch.',
      },
    ],
    faq: [
      {
        q: 'Do you work on the original Belair / Levitt homes?',
        a: 'A lot of our Bowie work is exactly that. The Belair homes are 60+ years old now and the original landscaping is mostly past its prime — we do full resets that respect the architecture.',
      },
      {
        q: 'Are you familiar with the Country Club Estates HOA standards?',
        a: 'Yes. We hold accounts in the community and know what passes architectural review and what doesn’t.',
      },
      {
        q: 'Do you serve all of Bowie?',
        a: 'Yes — Belair, Mitchellville, Old Town, Northridge, Saddlebrook, Hunters Mill, and the Country Club Estates corridor.',
      },
    ],
  },
  {
    slug: 'catonsville-md',
    name: 'Catonsville',
    fullName: 'Catonsville, MD',
    county: 'Baltimore County',
    zips: ['21228', '21250'],
    tier: 2,
    neighborhoods: [
      'Oak Forest',
      'Hillsdale',
      'Ten Hills',
      'Westchester',
      'Beechfield',
      'Catonsville Manor',
    ],
    intro:
      'Catonsville — “Music City of Maryland” — sits right on the western edge of the Baltimore beltway, and that location means we work on everything from 1920s craftsman bungalows on Frederick Road to 1990s colonials in Westchester. The defining feature of Catonsville landscapes is the mature tree canopy: oaks, beeches, and tulip poplars planted when the trolley still ran out Frederick Road. We do a lot of careful tree work here, a lot of shade-garden design (because nothing is in full sun), and a lot of hardscape that has to fit the older-home architecture rather than fight it. If your house has character, we’ll make sure the yard does too.',
    characteristics: [
      {
        title: 'Shade-garden expertise',
        body:
          'Almost every Catonsville lot has more shade than sun. Our planting palettes feature hostas, ferns, heucheras, and shade-tolerant flowering shrubs that actually perform.',
      },
      {
        title: 'Old-home-appropriate hardscape',
        body:
          'Bluestone, brick, and natural-stone walls that look like they’ve been there since 1920. We match the architecture, not the catalog.',
      },
      {
        title: 'Champion-tree care',
        body:
          'Catonsville has some of Baltimore County’s largest residential trees. We prune, brace, cable, and assess risk — preservation first.',
      },
      {
        title: 'Hillside lawn renovation',
        body:
          'A lot of Catonsville sits on real terrain. We aerate and overseed slopes that other crews struggle with.',
      },
    ],
    faq: [
      {
        q: 'My yard is 90% shade — can anything grow?',
        a: 'A lot. We install hostas, ferns, hellebores, heucheras, sweet woodruff, brunnera — palettes that thrive under mature canopies and look intentional rather than weedy.',
      },
      {
        q: 'Do you work on the older homes along Frederick Road?',
        a: 'Yes. We have several clients in the historic district around Frederick Road and Mellor Avenue. Hardscape and plantings respect the period of the home.',
      },
      {
        q: 'My giant beech is concerning me — what do you do?',
        a: 'We send our ISA-certified arborist to assess. We can prune for clearance, cable major limbs, or in worst cases remove safely. Most large beeches can be preserved with the right care.',
      },
    ],
  },

  {
    slug: 'potomac-md',
    name: 'Potomac',
    fullName: 'Potomac, MD',
    county: 'Montgomery County',
    zips: ['20854', '20859'],
    tier: 2,
    neighborhoods: [
      'Avenel',
      'Bradley Hills',
      'Falconhurst',
      'Glen Hills',
      'Stratton Woods',
      'Potomac Village',
      'Potomac Falls',
    ],
    intro:
      'Potomac sits in a different category from anywhere else in Montgomery County. Lots run from a half-acre in Bradley Hills up to four or five in west Potomac and the equestrian corridor along River Road, and that scale changes everything we do — irrigation zones, mowing rotation, drainage strategy, even how we stage a crew. We’ve been on properties in Avenel, Glen Hills, Falconhurst, and Stratton Woods, and we know that a Potomac client expects manicured-not-just-mowed: edged beds, clean fence lines, healthy mature oaks. The neighborhood architectural committees expect documented work, and the older homes on Falls Road expect us to know what ‘historic landscape’ means before we put a shovel in the ground.',
    characteristics: [
      {
        title: 'Estate-scale property work',
        body:
          'Half-acre to five-plus-acre lots are normal here. We bring zero-turn mowers, full irrigation crews, and the staging discipline you need on a property that takes a full day instead of an hour.',
      },
      {
        title: 'Avenel and architectural-committee work',
        body:
          'Avenel, Falconhurst, and a dozen other neighborhoods have written landscape covenants. We document our designs and submit them to the committee — most pass on the first review.',
      },
      {
        title: 'Aging hardwood canopy',
        body:
          'Bradley Hills and Glen Hills oaks were planted in the 60s and are starting to drop limbs. Emerald ash borer killed a generation of street ash. We prune, deadwood, and remove with ISA-certified climbers before storms do it for you.',
      },
      {
        title: 'Rolling-terrain drainage',
        body:
          'Most of Potomac sits on grade. Driveways funnel water toward foundations, basements sit in fall lines, and clay soil holds water for days. We install French drains, regrades, and downspout extensions tuned for the way your lot actually drains.',
      },
    ],
    faq: [
      {
        q: 'Do you do Avenel and other gated/HOA properties?',
        a: 'Yes. We’re already on properties in Avenel, Stratton Woods, and similar covenant-restricted communities. We carry the insurance limits the gates require and submit our designs to the architectural committee before we mobilize.',
      },
      {
        q: 'Can you handle a 3+ acre property in one day?',
        a: 'Yes. We bring multi-person crews, zero-turn mowers, and dedicated trimming teams. A typical 3-acre Potomac estate gets mowed, edged, blown clean, and out in 4–6 hours, depending on bed work.',
      },
      {
        q: 'Do you remove bamboo runs?',
        a: 'Yes, and we do them right. Cutting bamboo back doesn’t kill it — you have to dig out the rhizome network, sometimes install a barrier, and treat the cut stumps. We’ve cleared bamboo runs from a quarter-acre to half-acre and we don’t pretend it takes one visit.',
      },
    ],
  },
  {
    slug: 'olney-md',
    name: 'Olney',
    fullName: 'Olney, MD',
    county: 'Montgomery County',
    zips: ['20832', '20833'],
    tier: 2,
    neighborhoods: [
      'Olney Mill',
      'Williamsburg Village',
      'Cherrywood',
      'James Creek',
      'Norbeck Hills',
      'Brooke Grove',
      'Olney Square',
      'Hidden Creek',
    ],
    intro:
      'Olney is fifteen minutes north of our Burtonsville shop, which means we’re on properties out here more days than not. Most of the housing stock went up between 1975 and 1995 — Olney Mill, Williamsburg Village, Brooke Grove, Cherrywood, Norbeck Hills — and the landscapes that came with those homes are tired. Overgrown foundation shrubs, mulch beds that have lost their edge over twenty years, and oak canopies nobody has pruned since they were planted. What an Olney property usually needs isn’t a one-time mow, it’s a renovation: re-edged beds, thinned canopy, refreshed plantings that fit the home’s age. We do that work, and we do it for clients who plan to stay another twenty years.',
    characteristics: [
      {
        title: 'Established suburbs with tired original landscapes',
        body:
          'Most homes in Olney Mill and Williamsburg Village are 40 years old. Foundation shrubs are leggy, beds have lost their bones, and trees have outgrown their original planting plan. We work in renovation mode, not maintenance mode.',
      },
      {
        title: 'HOA-aware design',
        body:
          'Olney Mill, James Creek, and most other developments have architectural standards. We document our designs and submit for approval — not the homeowner’s problem.',
      },
      {
        title: 'Mature canopy management',
        body:
          '40-year-old oaks, maples, and dogwoods need pruning rhythms most landscapers skip. We climb, deadwood, and thin so storms don’t take down half-trees over the driveway.',
      },
      {
        title: 'Local, fast, dependable',
        body:
          'We’re 15 minutes from Olney. New lawn-care customers on existing routes are typically up and running within 1–2 weeks of contract signing.',
      },
    ],
    faq: [
      {
        q: 'Can you renovate an overgrown 1980s landscape, not just maintain it?',
        a: 'Yes — that’s a lot of what we do in Olney. Renovation usually starts with selective shrub removal, re-edging the beds, fresh mulch, and a planting refresh that suits the architecture. We can do it as a one-time project or staged over a season.',
      },
      {
        q: 'Do you handle James Creek and Brooke Grove HOA submissions?',
        a: 'Yes. We prepare drawings and material specs for the architectural committees, and we don’t pull permits until approval is in hand.',
      },
      {
        q: 'How quickly can you start weekly lawn care in Olney?',
        a: 'Olney is on our route already. Adding a new property is typically 1–2 weeks from contract during the growing season, faster in the off-season.',
      },
    ],
  },
  {
    slug: 'gaithersburg-md',
    name: 'Gaithersburg',
    fullName: 'Gaithersburg, MD',
    county: 'Montgomery County',
    zips: ['20877', '20878', '20879'],
    tier: 2,
    neighborhoods: [
      'Kentlands',
      'Lakelands',
      'Quince Orchard',
      'Washingtonian Woods',
      'Saybrooke',
      'Diamond Farms',
      'Old Town',
      'Mill Creek',
    ],
    intro:
      'Gaithersburg is the largest city in Montgomery County and the most varied — Kentlands and Lakelands are tight-knit New Urbanist communities with strict design standards, Quince Orchard and Saybrooke are big-lot suburbs from the 80s and 90s, and Old Town has Victorian homes that need a different planting palette than anything else on the route. We work in all of it. The Kentlands Architectural Committee won’t approve a planting plan that doesn’t match the master code; Washingtonian Woods homeowners want the mature canopy preserved through every project; and the townhomes in Lakelands have alley-facing yards most landscapers don’t know how to handle. We work with the design standards instead of around them.',
    characteristics: [
      {
        title: 'Kentlands & Lakelands design standards',
        body:
          'Both communities follow strict architectural codes covering plant species, lawn type, even mulch color. Our designs are written to pass committee review on the first submission.',
      },
      {
        title: 'Older Quince Orchard canopy',
        body:
          'Quince Orchard, Saybrooke, and Washingtonian Woods have 30–40 year old shade trees that need ISA-certified pruning, not a homeowner with a chainsaw. We climb and crown-thin so the storms don’t.',
      },
      {
        title: 'Townhome and alley-facing yards',
        body:
          'Lakelands and Kentlands townhomes have tiny front yards and back patios that abut a service alley. We do precision-scale landscape work: container plantings, narrow-bed edging, screening for the alley side.',
      },
      {
        title: 'Old Town Gaithersburg historic plantings',
        body:
          'Victorian-era homes off Frederick Avenue need period-appropriate boxwood, hydrangeas, and bulb beds — not the same palette we’d use in Washingtonian Woods.',
      },
    ],
    faq: [
      {
        q: 'Do you submit landscape plans to the Kentlands and Lakelands architectural committees?',
        a: 'Yes. We prepare drawings to the committee’s specifications, list plant species against the approved master list, and submit for review before any installation. Most submissions pass on the first review.',
      },
      {
        q: 'Can you screen an alley-facing townhome yard in Kentlands?',
        a: 'Yes. We install evergreen hedges, slim trellised plantings, or container compositions that work in the narrow space. Everything we install is on the Kentlands plant code.',
      },
      {
        q: 'Do you serve Old Town Gaithersburg differently than newer developments?',
        a: 'Yes. Old Town’s Victorian and craftsman homes need period-appropriate plantings — boxwood, hydrangeas, irises, peonies. We design to the era, not to the catalog.',
      },
    ],
  },
  {
    slug: 'kensington-md',
    name: 'Kensington',
    fullName: 'Kensington, MD',
    county: 'Montgomery County',
    zips: ['20895'],
    tier: 2,
    neighborhoods: [
      'Old Town Kensington',
      'Rock Creek Hills',
      'Kensington Heights',
      'Town Center',
      'Antique Row corridor',
      'Kensington Estates',
    ],
    intro:
      'Kensington is a small town that takes itself seriously — under a square mile inside the Beltway, an actual mayor, a designated historic district, and a town tree ordinance that protects every street tree over a certain caliper. The lots are tighter here than most of Montgomery County, and that changes how we work. A 0.15-acre lot in Old Town Kensington isn’t a property where you can just mow and blow; it’s a garden, and the bed-to-lawn ratio is usually closer to a 1920s English cottage than a modern subdivision. We do precision work: hand-edging, careful canopy work that respects the town tree ordinance, restorative plantings for Victorian and craftsman homes, and we work in close coordination with the town when permits or removals are involved.',
    characteristics: [
      {
        title: 'Tight lots in the historic district',
        body:
          'Old Town Kensington lots run 0.1–0.2 acres. We work at garden scale, with hand tools where blowers and zero-turns won’t fit. Precision matters more than horsepower here.',
      },
      {
        title: 'Town tree ordinance compliance',
        body:
          'Kensington’s tree ordinance protects mature street trees, and removals require town permits. We pull the permits, work with town arborists, and don’t drop a tree without sign-off.',
      },
      {
        title: 'Victorian and craftsman plantings',
        body:
          'Most homes here pre-date 1940. Period-appropriate boxwood, peony beds, hydrangea, and hellebore beat anything from a contemporary catalog.',
      },
      {
        title: 'Smaller scale, higher detail',
        body:
          'A Kensington job isn’t measured in acres — it’s measured in bed-feet of edge, hand-pruned shrubs, and how clean the lines look from the sidewalk. That’s how we bid it.',
      },
    ],
    faq: [
      {
        q: 'Do you pull permits for street tree work in Kensington?',
        a: 'Yes. The town has a tree canopy ordinance and we work with the town arborist before any pruning or removal of a regulated tree. Permits are part of our bid, not a surprise add-on.',
      },
      {
        q: 'Can you work on a tight lot where there’s no rear access?',
        a: 'Yes. Most of Old Town Kensington has narrow gates or no side yard access. We bring the right equipment for it — walk-behinds, hand tools, and crews who don’t tear up brick walks.',
      },
      {
        q: 'Do you handle plantings appropriate to historic homes?',
        a: 'Yes. We design with period-appropriate species — boxwood, peony, hydrangea, hellebore, mountain laurel — that fit Victorian and craftsman architecture without looking like a modern subdivision border.',
      },
    ],
  },

  // ── Tier 3 — Perimeter Hubs ──────────────────────────────────────────────
  {
    slug: 'laurel-md',
    name: 'Laurel',
    fullName: 'Laurel & Beltsville, MD',
    county: 'Prince George’s County',
    zips: ['20707', '20708', '20723', '20724', '20705'],
    tier: 3,
    alsoServes: 'Beltsville',
    neighborhoods: [
      'Russett',
      'Maryland City',
      'Montpelier',
      'Konterra',
      'Beltsville',
      'Laurel Lakes',
    ],
    intro:
      'Laurel and Beltsville sit on the soft border between the Baltimore and Washington metros, and our clients here reflect that — a mix of long-time PG County homeowners, federal-government commuters, and University of Maryland staff. The properties run the gamut: 1950s Cape Cods near Old Town, 1980s split-levels off Route 1, and newer Russett-area builds with HOA expectations. We do a lot of lawn care, a lot of cleanups, and a steady stream of tree work — the USDA Beltsville Agricultural Research Center next door means we’re also occasionally on commercial accounts adjacent to the research campus.',
    characteristics: [
      {
        title: 'Federal-commuter scheduling',
        body:
          'Our crews work around your work-from-home schedule and don’t need someone home. Reliable lawn care for busy households.',
      },
      {
        title: 'Russett HOA-compliant work',
        body:
          'Russett has architectural standards. We design and install to clear them on the first review.',
      },
      {
        title: 'Mixed-housing-stock experience',
        body:
          '1950s Capes, 80s splits, 2000s colonials — we’ve worked on all of them and know what each needs.',
      },
      {
        title: 'Cleanup & maintenance focus',
        body:
          'Many Laurel/Beltsville clients want consistent maintenance more than big renovations. We hold weekly and biweekly contracts that just run on autopilot.',
      },
    ],
    faq: [
      {
        q: 'I work odd hours — does someone need to be home?',
        a: 'No. As long as we have gate access (or your driveway gate code), we can mow, clean up, mulch, or plant without anyone home. We text photos when done.',
      },
      {
        q: 'Do you serve both Laurel and Beltsville?',
        a: 'Yes. Our crews are in both ZIP code zones weekly and there’s no minimum job size for those areas.',
      },
      {
        q: 'My HOA in Russett is picky — can you handle the approval process?',
        a: 'Yes. We prep the submission package with materials list and concept drawings and walk it through Russett’s architectural review.',
      },
    ],
  },
  {
    slug: 'sykesville-md',
    name: 'Sykesville',
    fullName: 'Sykesville & Eldersburg, MD',
    county: 'Carroll County',
    zips: ['21784', '21104'],
    tier: 3,
    alsoServes: 'Eldersburg',
    neighborhoods: [
      'Fairhaven',
      'Oklahoma Hills',
      'Raincliffe',
      'Piney Ridge',
      'Stoneridge',
      'Eldersburg',
    ],
    intro:
      'Sykesville and Eldersburg are exurban — bigger lots, fewer HOAs, and the closest landscapers most homeowners know are 20 minutes away. The clients we hold here picked us because they wanted the design and execution quality of an inside-the-Beltway crew without the inside-the-Beltway hassle. The work tends to be larger in scope: half-acre and acre-lot properties, full-yard plantings, real hardscape budgets, and tree work on lots that often back to woods. If you’re tired of one-truck operations who don’t finish what they start, we’re worth the call out from Burtonsville.',
    characteristics: [
      {
        title: 'Acre-lot capable',
        body:
          'We bring zero-turn mowers and bigger equipment that finishes a 1-acre lawn in the time others spend just unloading.',
      },
      {
        title: 'Woodland-edge plantings',
        body:
          'Properties backing forest need a transition zone. We design native edge plantings that look intentional rather than overgrown.',
      },
      {
        title: 'Full-yard hardscape scope',
        body:
          'Bigger lots mean bigger patios, fire-pit zones, and connecting walkways. We do whole-yard hardscape plans, not piecemeal additions.',
      },
      {
        title: 'Storm response that actually shows up',
        body:
          'Carroll County’s rural roads slow most landscapers down. Our equipment travels and our crews don’t care about the drive.',
      },
    ],
    faq: [
      {
        q: 'Is Sykesville too far from your Burtonsville base?',
        a: 'No. We hold active accounts there and have route capacity. The drive only matters if the crew minds it — ours doesn’t.',
      },
      {
        q: 'Can you handle a full 1-acre lawn weekly?',
        a: 'Yes. We bring 60-inch zero-turn mowers and a string-trim/blow crew. A 1-acre lawn typically finishes in 35–45 minutes including edging.',
      },
      {
        q: 'I want a full master plan for my property — do you do that?',
        a: 'Yes. Marcus will walk the property, sketch a concept, and price the work in phases so you can spread it over 2-3 seasons without committing to everything at once.',
      },
    ],
  },
  {
    slug: 'millersville-md',
    name: 'Millersville',
    fullName: 'Millersville, MD',
    county: 'Anne Arundel County',
    zips: ['21108'],
    tier: 3,
    neighborhoods: [
      'Robinson Glen',
      'Sun Valley',
      'Old Mill',
      'Indian Knolls',
      'Severnwood Estates',
      'Lake Waterford area',
      'Veterans Highway corridor',
    ],
    intro:
      'Millersville sits in the middle of Anne Arundel County — close enough to Fort Meade, BWI, and Annapolis that everyone here commutes somewhere, and the housing reflects that. Subdivisions from the 80s and 90s with quarter-acre to acre lots, mature pin oak and tulip poplar canopy, and the rolling terrain that’s typical of the Severn Run watershed. Properties closer to the river fall under Maryland’s Critical Area buffer rules, which limit what you can clear inside 1,000 feet of tidal water. We know the rules, and we know how to design plantings that satisfy them without giving up the look the homeowner wanted. Most of our Millersville work is renovation and bed restoration on 30-year-old landscapes that need a refresh.',
    characteristics: [
      {
        title: 'Severn Run / Critical Area buffer rules',
        body:
          'Properties within 1,000 feet of tidal water fall under Maryland’s Critical Area Act, which restricts clearing and impervious surface. We design plantings that comply and we know which native species satisfy the buffer requirement.',
      },
      {
        title: '30-year-old subdivision renovations',
        body:
          'Robinson Glen, Severnwood Estates, and similar developments are full of tired late-80s/early-90s landscapes. We renovate beds, replace overgrown foundation shrubs, and refresh hardscape that’s hit its lifespan.',
      },
      {
        title: 'Rolling-terrain drainage',
        body:
          'The Severn Run watershed runs through here, and most lots sit on grade. We install French drains, regrades, and downspout extensions that work with clay soil, not against it.',
      },
      {
        title: 'Pin oak and tulip poplar canopy',
        body:
          'Both species are common here, both prone to dropping limbs in storms. We climb and deadwood with ISA-certified crews before insurance becomes a conversation.',
      },
    ],
    faq: [
      {
        q: 'Do you know the Maryland Critical Area buffer rules for the Severn Run watershed?',
        a: 'Yes. We design plantings that meet the buffer requirements without sacrificing the homeowner’s vision, and we know which native species count toward your forest-conservation obligation.',
      },
      {
        q: 'Can you renovate a 1990s subdivision landscape?',
        a: 'Yes — that’s a lot of what we do in Millersville. Overgrown foundation shrubs come out, beds get re-edged, fresh mulch goes down, and we install a refreshed planting palette that fits the home’s actual scale.',
      },
      {
        q: 'Do you handle drainage on sloped lots?',
        a: 'Yes. French drains, downspout extensions, regrades, dry creek beds — all engineered for the clay soil and the rolling terrain that’s typical here.',
      },
    ],
  },
  {
    slug: 'severn-md',
    name: 'Severn',
    fullName: 'Severn, MD',
    county: 'Anne Arundel County',
    zips: ['21144'],
    tier: 3,
    neighborhoods: [
      'Pioneer City',
      'Severn Crossing',
      'Reece’s Crossing',
      'Quail Run',
      'Severnwood',
      'Donaldson Estates',
    ],
    intro:
      'Severn is Fort Meade country. Most of our clients here are military families who have been moved three times and will be moved again, and that shapes how they think about a yard — they want it to look sharp without being a project, and they want a crew that’s going to show up reliably whether they’re home for the weekly mow or deployed for nine months. We do that. Severn neighborhoods like Pioneer City and Reece’s Crossing are mid-90s and 2000s builds with quarter-acre lots, builder-grade landscapes, and the kind of clay-heavy soil that needs amendment before anything thrives. We renovate, install, and maintain — and we send invoice receipts the way military families need them for moving claims.',
    characteristics: [
      {
        title: 'Military-family-friendly service',
        body:
          'Most Severn clients are connected to Fort Meade. We service properties whether the family is in town or deployed, and we provide the invoice documentation needed for PCS moves and rental property records.',
      },
      {
        title: 'Builder-grade landscape renovation',
        body:
          'Pioneer City, Reece’s Crossing, and similar 90s/2000s developments came with builder-installed sod and a handful of foundation shrubs. We renovate to something the homeowner actually wants to come home to.',
      },
      {
        title: 'Clay-heavy soil amendment',
        body:
          'Severn’s clay holds water and compacts. Any successful planting starts with soil amendment, drainage assessment, and species selection that fits the soil — not the catalog.',
      },
      {
        title: 'Steady, reliable scheduling',
        body:
          'Military families need predictability. We commit to a service day and we hit it every week, with or without the homeowner present.',
      },
    ],
    faq: [
      {
        q: 'Will you service a property while the homeowner is deployed?',
        a: 'Yes. We handle remote-managed properties for military families — same weekly schedule, invoiced via email, photographs sent for documentation if requested.',
      },
      {
        q: 'Can you turn a builder-grade yard into something we actually like?',
        a: 'Yes. Most Severn yards came with sod, mulch, and three sad shrubs. We renovate beds, add structural plantings, refresh hardscape, and bring the property up to where the home deserves.',
      },
      {
        q: 'Do you provide invoices for PCS moves or rental records?',
        a: 'Yes. We provide itemized invoices with all the documentation military families need for moving claims, rental property records, or unit reimbursement.',
      },
    ],
  },
  {
    slug: 'hanover-md',
    name: 'Hanover',
    fullName: 'Hanover, MD',
    county: 'Anne Arundel County',
    zips: ['21076'],
    tier: 3,
    neighborhoods: [
      'Arundel Preserve',
      'Westport',
      'The Provinces',
      'Hanover Hills',
      'Telegraph Road corridor',
      'Stoney Run',
    ],
    intro:
      'Hanover is one of the fastest-growing communities in Maryland — Arundel Preserve, Westport, The Provinces, and several other developments here are all under 20 years old, and most are still settling into the landscape they were built with. New-construction landscapes look great the day the family moves in, but by year three the sod has thin spots, the builder-planted maples are leaning, and the original mulch beds have lost their edge. We work in renovation mode on these properties — restoring sod, replacing the trees that didn’t take, building the bed structure the builder never installed. Hanover also has a stretch of older homes off Telegraph Road that need a different approach: full mature canopy, established beds, and 1970s landscape architecture that needs an honest assessment, not a sales pitch.',
    characteristics: [
      {
        title: 'New-construction landscape recovery',
        body:
          'Arundel Preserve and Westport homes are typically 5–15 years old. Builder landscapes don’t age well: sod fails, trees lean, beds erode. We restore them to where they should have started.',
      },
      {
        title: 'Townhome and zero-lot-line precision',
        body:
          'Many Hanover communities are HOA townhomes with shared bed lines and tight side yards. We work to community standards and don’t damage neighbor property in the process.',
      },
      {
        title: 'BWI airport corridor planting',
        body:
          'Properties closer to BWI have noise-zone considerations and specific overlay-district plant requirements. We work within both.',
      },
      {
        title: 'Older Telegraph Road homes',
        body:
          'Hanover’s pre-2000 housing stock has mature trees, established beds, and original 1970s landscape thinking that needs renovation. Different approach than the new builds.',
      },
    ],
    faq: [
      {
        q: 'Can you save sod that’s failing on a newer Hanover yard?',
        a: 'Sometimes yes — depends on what’s killing it. Compaction, drainage, or the wrong fescue blend are all fixable. If the soil’s too far gone, we strip and re-install with proper grade and amended soil — not just lay new sod on the same problem.',
      },
      {
        q: 'Do you work on Arundel Preserve townhomes?',
        a: 'Yes. Townhome work is precision work — narrow side yards, shared bed lines, HOA standards. We work to community spec and we don’t damage the neighbor’s side.',
      },
      {
        q: 'Do you handle bigger property work or just lawn care?',
        a: 'Both. We design, install, hardscape, and maintain across every property size in Hanover — from a Westport townhome to a half-acre on Telegraph Road.',
      },
    ],
  },
] as const;
