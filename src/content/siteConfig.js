/* ============================================================================
 * Teacity Web Studio — SITE CONFIG
 * ----------------------------------------------------------------------------
 * 👉 THIS IS THE ONLY FILE YOU NEED TO EDIT to change text, prices, numbers,
 *    links or packages on the whole website.
 *    Placeholders to replace are marked with:  ⚠️ REPLACE
 * ==========================================================================*/

/* ---------------------------------------------------------------------------
 * 1. CONTACT  (⚠️ REPLACE the two numbers below)
 *    WhatsApp number format: country code + number, no +, no spaces.
 *    India example: 919876543210  (91 = India, then your 10-digit number)
 * ------------------------------------------------------------------------ */
export const WHATSAPP_NUMBER = '919678833566' // ⚠️ your WhatsApp number (91 + 9678833566)
export const PHONE_NUMBER = '+91 96788 33566' // your call/display phone number

/* Default pre-filled WhatsApp message (used by hero, header, floating button) */
export const DEFAULT_WA_MESSAGE =
  'Hi Anurag! I saw Teacity Web Studio and I would like a website for my business.'

/** Pre-filled message when someone taps a package CTA */
export function packageMessage(packageName) {
  return `Hi Anurag! I am interested in the ${packageName} package for my business. Please share the details.`
}

/* ---------------------------------------------------------------------------
 * 2. BRAND
 * ------------------------------------------------------------------------ */
export const brand = {
  name: 'Teacity Web Studio',
  owner: 'Anurag Sen',
  tagline: 'Websites for local businesses in Upper Assam',
  cities: ['Dibrugarh', 'Tinsukia'],
  region: 'Upper Assam',
  cityNickname: 'Tea City',
  founded: 2024,
}

/* Desktop navigation links (shown 900px and up) */
export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Packages', href: '#packages' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

/* ---------------------------------------------------------------------------
 * 3. SEO  (used in index.html meta tags — update when your domain is ready)
 * ------------------------------------------------------------------------ */
export const seo = {
  title: 'Teacity Web Studio — Website Designer in Dibrugarh & Tinsukia',
  description:
    'Affordable, mobile-friendly websites for small businesses in Dibrugarh, Tinsukia, across Assam and anywhere in India. Clinics, salons, coaching institutes, hotels & more. WhatsApp to get started.',
  siteUrl: 'https://example.com', // ⚠️ REPLACE with your real domain (https://yourdomain.com)
  ogImage: '/og-image.svg', // ⚠️ REPLACE with a 1200x630 JPG/PNG when you have one
}

/* ---------------------------------------------------------------------------
 * 4. SECTION COPY  (all headings and body text on the page)
 * ------------------------------------------------------------------------ */
export const copy = {
  hero: {
    badge: 'The Tea City of Assam',
    title: 'Professional websites for local businesses in Dibrugarh, Tinsukia & beyond',
    sub: 'Your customers search on Google and Maps before they visit. A fast, simple website puts your business in front of them — and brings you more calls and enquiries. Distance is not a problem — we can work together entirely on WhatsApp.',
    ctaPrimary: 'Chat on WhatsApp',
    ctaSecondary: 'See packages',
    trust: [
      'Mobile-friendly design',
      'WhatsApp & call buttons',
      'Google Maps embed',
    ],
    toast: 'New enquiry received',
    mockSiteName: 'Your Business',
    mockServices: ['Services', 'Gallery', 'Contact'],
    mockCta: 'Chat with us',
  },
  problem: {
    eyebrow: 'The problem',
    title: 'Customers search online first. Can they find you?',
    sub: 'More and more people check Google before visiting a shop or clinic. Without a website — or with only an Instagram page — you lose those customers to whoever shows up first.',
    badTitle: 'The problem today',
    bad: [
      'Customers search Google and Maps, but your business is not listed properly',
      'An Instagram page alone does not build trust',
      'Your phone number is hard to find, so calls never come',
      'Enquiries quietly go to your competitors',
    ],
    goodTitle: 'With a simple website',
    good: [
      'Your business shows up properly on Google',
      'One tap to start a WhatsApp chat or call',
      'Services, prices and photos are always available',
      'A small investment that works for you every day',
    ],
    punch: 'A good website works like a receptionist 24×7 — without the salary.',
  },
  businesses: {
    eyebrow: 'Who I build for',
    title: 'A website for every local business',
    sub: 'I build simple, effective websites for small businesses — in Dibrugarh, Tinsukia, or anywhere in Assam and India. Distance is not a problem.',
  },
  packages: {
    eyebrow: 'Simple pricing',
    title: 'Clear packages. Fixed prices. No surprises.',
    sub: 'Every package includes a mobile-friendly design, WhatsApp button and call button. Choose what fits your business.',
    popularBadge: 'Most Popular',
    maintenanceTitle: 'Yearly maintenance',
    addonsTitle: 'Add-ons',
    termsTitle: 'Clear terms:',
  },
  work: {
    eyebrow: 'My work',
    title: 'See the work, then decide',
    sub: 'One live sample is shown below. Clinic and salon demos are coming soon.',
    liveCta: 'Visit live site',
    demoCta: 'I want one too',
  },
  how: {
    eyebrow: 'How it works',
    title: 'Just 4 simple steps',
    sub: 'No long process, no confusing paperwork. One message on WhatsApp and we begin.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Your questions, straight answers',
  },
  cta: {
    eyebrow: "Let's talk",
    title: 'Plan your website over WhatsApp',
    sub: "Send me a message — I will suggest the right package for your business. No pressure, no forms. Just a simple conversation.",
    button: 'Message me on WhatsApp',
  },
}

/* ---------------------------------------------------------------------------
 * 5. PACKAGES
 *    Edit prices, features, delivery times freely — layout adapts automatically.
 * ------------------------------------------------------------------------ */
export const packages = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹6,000',
    priceNote: 'one-time',
    for: 'Small shops, tutors & freelancers',
    popular: false,
    features: [
      '1–3 pages',
      'Mobile-friendly design',
      'WhatsApp click-to-chat button',
      'Call button',
      'Google Maps embed',
    ],
    delivery: '5–7 days',
    revisions: '1 round of revisions',
  },
  {
    id: 'business',
    name: 'Business',
    price: '₹14,000',
    priceNote: 'one-time',
    for: 'Clinics, salons, coaching institutes & restaurants',
    popular: true,
    features: [
      'Up to 6 pages',
      'Photo gallery or services / menu list',
      'Enquiry form → WhatsApp or email',
      'Google Business Profile setup',
      'Basic SEO (so you show up on Google)',
      'Instagram & social links',
    ],
    delivery: '10–14 days',
    revisions: '2 rounds of revisions',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '₹25,000',
    priceNote: 'one-time',
    for: 'Hotels, tour operators & bigger clinics',
    popular: false,
    features: [
      'Everything in Business, plus:',
      'Up to 10 pages',
      'Appointment / booking request form',
      'Google Analytics + Search Console setup',
      'Content & photo guidance',
      '3 months of free updates after launch',
    ],
    delivery: '2–3 weeks',
    revisions: 'Revisions as per Business package',
  },
]

/* Maintenance & add-ons shown under the package cards */
export const maintenance = {
  price: '₹4,000/year',
  includes: [
    'Hosting',
    'Domain renewal',
    'Up to 3 small edits every month',
  ],
}

export const addons = [
  { name: 'Self-editing CMS', price: '₹3,000 – ₹5,000' },
  { name: 'Extra page', price: '₹1,000' },
  { name: 'Content writing', price: '₹1,500' },
  { name: 'Photo editing', price: '₹1,000' },
  { name: 'Logo design', price: '₹1,500 – ₹3,000' },
]

export const terms = [
  '50% advance to start, 50% before the site goes live.',
  'Revisions are limited to what your package includes.',
  'Domain is paid by you at actual cost and registered in your name — you own it.',
  'Need a custom booking system or admin panel? Separate quote, no problem.',
]

/* ---------------------------------------------------------------------------
 * 6. BUSINESS TYPES  (cards in "Who I build for" section)
 * ------------------------------------------------------------------------ */
export const businesses = [
  { name: 'Clinics & Dentists', icon: 'stethoscope' },
  { name: 'Diagnostic Labs', icon: 'flask' },
  { name: 'Coaching Institutes', icon: 'book' },
  { name: 'Salons & Spas', icon: 'scissors' },
  { name: 'Makeup Artists', icon: 'sparkle' },
  { name: 'Boutiques & Studios', icon: 'shirt' },
  { name: 'Hotels & Homestays', icon: 'bed' },
  { name: 'Tour Operators', icon: 'map' },
  { name: 'Restaurants & Cafes', icon: 'cup' },
  { name: 'Jewellers', icon: 'gem' },
  { name: 'Any local business', icon: 'store' },
]

/* ---------------------------------------------------------------------------
 * 7. MY WORK  (⚠️ REPLACE sampleUrl with your live makeup-artist site link)
 * ------------------------------------------------------------------------ */
export const workSamples = [
  {
    title: 'Makeup Artist Website',
    type: 'Live sample',
    description:
      'A clean, mobile-first website for a bridal and party makeup artist — portfolio, services and contact booking, plus a handcrafted collections section.',
    live: true,
    url: 'https://suparna-makeover.netlify.app',
  },
  {
    title: 'Clinic Website',
    type: 'Demo coming soon',
    description:
      'Doctor profile, OPD timings, services and appointment enquiries on WhatsApp.',
    live: false,
  },
  {
    title: 'Salon Website',
    type: 'Demo coming soon',
    description:
      'Price list, photo gallery, Google Maps and click-to-call for easy bookings.',
    live: false,
  },
]

/* ---------------------------------------------------------------------------
 * 8. HOW IT WORKS
 * ------------------------------------------------------------------------ */
export const steps = [
  {
    title: 'Message me on WhatsApp',
    description:
      'Tell me about your business and what you need. No forms, no email — just a simple chat.',
  },
  {
    title: 'Plan and price finalised',
    description:
      'I suggest the right package for you. Fixed price, written down clearly. 50% advance to start.',
  },
  {
    title: 'Design and build',
    description:
      'You send photos and basic information (or I help you with that). I build a fast, mobile-friendly site and share a preview.',
  },
  {
    title: 'Live!',
    description:
      'After your revisions, the site goes live with your domain, Google Maps and WhatsApp button. Done.',
  },
]

/* ---------------------------------------------------------------------------
 * 9. ABOUT
 * ------------------------------------------------------------------------ */
export const about = {
  photo: '/anurag.jpg',
  name: 'Anurag Sen',
  role: 'Founder, Teacity Web Studio',
  chips: ['Software Developer', 'Based in Dibrugarh', 'Clients across India'],
  paragraphs: [
    'Hello! I am Anurag, a software developer from Dibrugarh — the Tea City of Assam.',
    'I started Teacity Web Studio because I kept seeing the same thing: good local businesses — clinics, salons, coaching centres, hotels — losing customers simply because they have no website, or only an Instagram page.',
    'I am not a big agency. You deal with me directly, on WhatsApp, in simple language. I build affordable websites that load fast even on a slow network, so your customers can find you, trust you, and call you.',
  ],
}

/* ---------------------------------------------------------------------------
 * 10. FAQ  (edit freely — accordion works automatically)
 * ------------------------------------------------------------------------ */
export const faqs = [
  {
    q: 'Who owns the domain?',
    a: 'You do. The domain is purchased in your name at actual cost (usually ₹800–₹1,200 per year for a .com). It always stays in your account — I only help you set it up.',
  },
  {
    q: 'Can I edit the website myself later?',
    a: 'Yes. Basic edits (text, photos, phone number) are covered by the yearly maintenance plan. If you want full self-editing control, I can add a simple CMS for ₹3,000–₹5,000 — and I will show you how to use it.',
  },
  {
    q: 'How do payments work?',
    a: '50% advance to start the work, 50% before the site goes live. UPI or bank transfer — both are fine. You always get a clear written quote before anything begins.',
  },
  {
    q: 'Do you only work with businesses in Dibrugarh & Tinsukia?',
    a: 'No. Dibrugarh is my home base — local businesses can even meet me in person if they want. But most work happens over WhatsApp, and I have clients across Assam and India. Distance is never a problem.',
  },
]

/* ---------------------------------------------------------------------------
 * 11. FOOTER
 * ------------------------------------------------------------------------ */
export const footer = {
  serviceAreas: 'Based in Dibrugarh · Working with clients across India',
  copyrightName: 'Teacity Web Studio',
}
