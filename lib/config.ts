export const siteConfig = {
  name: 'Lens Studio',
  tagline: 'Light. Moment. Story.',
  description: 'Berlin-based photography studio specializing in portraits, editorial, and commercial work.',
  url: 'https://lens-studio.de',
  location: 'Berlin, Germany',
  founded: '2018',

  contact: {
    email: 'hello@lens-studio.de',
    phone: '+49 30 987 654 32',
    address: 'Mitte, Berlin',
    instagram: 'https://instagram.com/lensstudio.berlin',
  },

  booking: {
    calUsername: 'lens-studio',
    calEventSlug: 'photo-consultation',
  },

  resend: {
    from: 'noreply@lens-studio.de',
    to: 'hello@lens-studio.de',
  },

  nav: [
    { label: 'Work', href: '/#portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/#about' },
    { label: 'Book a call', href: '/booking', cta: true },
  ],

  hero: {
    eyebrow: 'Photography Studio · Berlin',
    headline: ['Light.', 'Moment.', 'Story.'],
    sub: 'We capture the photographs your brand will be remembered by.',
    cta: { label: 'View our work', href: '/#portfolio' },
    ctaSecondary: { label: 'Book a session', href: '/booking' },
  },

  about: {
    eyebrow: 'About the studio',
    headline: 'We shoot with intention.',
    body: [
      'Lens Studio was founded in Berlin in 2018. We believe photography is not about equipment — it is about seeing. Our team of three photographers specializes in portrait, editorial, and commercial work for brands and individuals.',
      'Every project starts with a conversation. We want to understand what you need to communicate before we pick up a camera.',
    ],
    stats: [
      { num: '340+', label: 'Projects' },
      { num: '6',    label: 'Years' },
      { num: '4.9',  label: 'Google rating' },
    ],
  },

  services: [
    {
      id: 'portrait',
      name: 'Portrait Sessions',
      desc: 'Personal and professional portraits. Individual, couple, or team. Studio or on-location.',
      price: 'from €280',
      duration: '2h session',
      includes: ['Pre-shoot consultation', '20 edited images', 'Private gallery'],
    },
    {
      id: 'editorial',
      name: 'Editorial & Brand',
      desc: 'Visual content for brands, publications, and campaigns. Concept to delivery.',
      price: 'from €850',
      duration: 'Half-day',
      includes: ['Creative direction', '50+ edited images', 'Usage rights'],
    },
    {
      id: 'product',
      name: 'Product Photography',
      desc: 'Clean, commercial product shots for e-commerce, packaging, and campaigns.',
      price: 'from €420',
      duration: 'Per day',
      includes: ['Studio setup', 'White + lifestyle', 'RAW + edited'],
    },
    {
      id: 'consultation',
      name: 'Creative Consultation',
      desc: '60-minute call to plan your shoot, define the visual direction, and answer your questions.',
      price: '€80',
      duration: '60 min',
      includes: ['Mood board review', 'Shot list draft', 'Q&A'],
    },
  ],

  portfolio: [
    { id: 'p1', title: 'Anna K.',         category: 'Portrait',   img: '/images/p1.jpg' },
    { id: 'p2', title: 'Bloom Brand',      category: 'Editorial',  img: '/images/p2.jpg' },
    { id: 'p3', title: 'Raw Collection',   category: 'Product',    img: '/images/p3.jpg' },
    { id: 'p4', title: 'Studio Session',   category: 'Portrait',   img: '/images/p4.jpg' },
    { id: 'p5', title: 'Nola Magazine',    category: 'Editorial',  img: '/images/p5.jpg' },
    { id: 'p6', title: 'Craft Studio',     category: 'Product',    img: '/images/p6.jpg' },
  ],

  testimonials: [
    {
      text: 'Lens Studio completely changed how our brand looks online. The images speak for themselves.',
      author: 'Clara M.', role: 'Founder, Bloom Berlin',
    },
    {
      text: 'Professional, calm, and incredibly talented. The portraits they made for our team are stunning.',
      author: 'Jonas W.', role: 'Head of Marketing, Tectonic GmbH',
    },
    {
      text: 'I was nervous before the shoot. Afterwards I had 30 photos I actually love. Highly recommended.',
      author: 'Mia R.', role: 'Freelance consultant',
    },
  ],
}

export type SiteConfig = typeof siteConfig