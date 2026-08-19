import { ServicePackage } from '../types/services.types';

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'hair-and-makeup',
    title: 'Hair & Makeup Services',
    category: 'hair-makeup',
    categoryLabel: 'Hair & Makeup',
    subtitle: 'Bridal, debuts, special events & photoshoots',
    description:
      'Long-lasting hair styling and radiant makeup tailored to enhance your natural beauty under daylight and camera flash. Includes custom skin prep and individual lashes.',
    startingPrice: '₱3,500',
    basePriceNumeric: 3500,
    idealFor: 'Brides, debutantes, event guests, entourage, and photoshoot clients',
    deliverables: [
      'Skin prep and custom foundation shade match',
      'Quality false lash placement and eye enhancement',
      'Hair styling and accessory setting',
      'Event touch-up kit with powder and lip sample',
    ],
    tiers: [
      {
        name: 'Event & Debut Hair & Makeup',
        price: '₱3,500',
        priceNumeric: 3500,
        duration: '2 Hours Session',
        features: [
          'Full skin prep and glowing base',
          'Custom eye makeup with individual lashes',
          'Event hair styling included',
          'Touch-up powder and lip sample kit',
        ],
      },
      {
        name: 'Complete Bridal Hair & Makeup with Trial',
        price: '₱8,500',
        priceNumeric: 8500,
        duration: 'Trial Day + Wedding Day',
        features: [
          '3-hour bridal trial with full hair & makeup consultation',
          'Wedding day ceremony makeup and hair styling',
          'Reception look retouch and setting',
          'Deluxe bridal touch-up kit',
        ],
      },
    ],
    addOns: [
      {
        id: 'additional-head',
        label: 'Additional Entourage Hair & Makeup (Per Person)',
        price: 2000,
        priceFormatted: '₱2,000',
      },
      {
        id: 'early-callout',
        label: 'Early Morning Callout (Before 6:00 AM)',
        price: 1000,
        priceFormatted: '₱1,000',
      },
      {
        id: 'out-of-town-travel',
        label: 'Out of Town Travel & Accommodation Fee',
        price: 2500,
        priceFormatted: '₱2,500',
      },
    ],
  },
  {
    id: 'nail-services',
    title: 'Custom Gel Nails & Extensions',
    category: 'nails',
    categoryLabel: 'Nail Services',
    subtitle: 'Structured gel overlays, soft extensions & hand-painted nail art',
    description:
      'Clean, durable nail styling designed to protect natural nails while providing modern, elegant finishes with high-quality gel products.',
    startingPrice: '₱1,500',
    basePriceNumeric: 1500,
    idealFor: 'Weddings, special events, creative shoots, and everyday elegance',
    deliverables: [
      'Gentle cuticle cleaning and nail shaping',
      'Structured builder gel reinforcement',
      'Custom nail art and chrome details',
      'High-gloss chip-resistant top coat',
    ],
    tiers: [
      {
        name: 'Structured Gel Overlay & Basic Art',
        price: '₱1,500',
        priceNumeric: 1500,
        duration: '1.5 Hours Studio Session',
        features: [
          'Dry cuticle cleaning and nail preparation',
          'Natural nail builder gel reinforcement',
          'Choice of 2 accent nails or French lines',
          'Nail and cuticle hydration oil application',
        ],
      },
      {
        name: 'Full Gel Extensions with Custom 3D Art',
        price: '₱2,800',
        priceNumeric: 2800,
        duration: '2.5 Hours Studio Session',
        features: [
          'Full set of soft gel extension tips',
          '10-finger hand-painted art, chrome, or 3D gems',
          'Reinforced top coat lasting 3 to 4 weeks',
          'Complimentary home care instruction guide',
        ],
      },
    ],
    addOns: [
      {
        id: '3d-sculpted-art',
        label: 'Hand-Sculpted 3D Floral or Ribbon Art',
        price: 500,
        priceFormatted: '₱500',
      },
      {
        id: 'mirror-chrome',
        label: 'Full Set Mirror Chrome Finish',
        price: 400,
        priceFormatted: '₱400',
      },
      {
        id: 'home-service-nail',
        label: 'Home Service Visit Appointment',
        price: 800,
        priceFormatted: '₱800',
      },
    ],
  },
  {
    id: 'digital-services',
    title: 'Custom Canva & Digital Templates',
    category: 'digital',
    categoryLabel: 'Digital Templates',
    subtitle: 'Editable social media packs, digital planners & price lists',
    description:
      'Clean, modern digital templates and social media kits built in Canva for easy editing. Perfect for beauty businesses, creators, and online shops.',
    startingPrice: '₱2,000',
    basePriceNumeric: 2000,
    idealFor: 'Salons, makeup artists, online boutiques, influencers, and service providers',
    deliverables: [
      'Fully editable Canva template links',
      'Custom color palette and typography layout',
      'Instagram post grids and story highlight icons',
      'PDF instructions and export guide',
    ],
    tiers: [
      {
        name: 'Starter Social Template Pack',
        price: '₱2,000',
        priceNumeric: 2000,
        duration: '2-3 Days Delivery',
        features: [
          'Set of 12 editable Canva post & story templates',
          'Custom brand color & font pairings',
          '4 story highlight icon covers',
          'Canva quick editing guide PDF',
        ],
      },
      {
        name: 'Complete Brand Digital & Client Suite',
        price: '₱4,500',
        priceNumeric: 4500,
        duration: '4-5 Days Delivery',
        features: [
          'Set of 24 post, carousel & story templates',
          'Editable service menu / price list sheet',
          'Digital client intake & policy form',
          '8 highlight icons and banner graphics',
        ],
      },
    ],
    addOns: [
      {
        id: 'extra-template-layouts',
        label: '6 Additional Custom Carousel / Post Layouts',
        price: 1000,
        priceFormatted: '₱1,000',
      },
      {
        id: 'fillable-pdf-form',
        label: 'Interactive Fillable PDF Client Agreement',
        price: 1200,
        priceFormatted: '₱1,200',
      },
      {
        id: 'rush-digital-delivery',
        label: 'Rush 24-Hour Template Delivery',
        price: 1500,
        priceFormatted: '₱1,500',
      },
    ],
  },
  {
    id: 'all-in-styling-package',
    title: 'All-In Hair, Makeup & Nail Package',
    category: 'bespoke',
    categoryLabel: 'Full Styling Package',
    subtitle: 'Combined bridal & event hair, makeup glam, and custom gel nails',
    description:
      'The complete beauty experience for brides, debutantes, and special event celebrants. Includes full hair and makeup glam plus custom structured gel nails.',
    startingPrice: '₱4,800',
    basePriceNumeric: 4800,
    idealFor: 'Brides, debutantes, photoshoot models, and event celebrants',
    deliverables: [
      'Full hair styling and camera-ready makeup glam',
      'Quality false lashes and event touch-up sample',
      'Custom structured gel overlay or full extensions',
      'Coordinated styling for your event theme',
    ],
    tiers: [
      {
        name: 'Event Beauty & Nail Glam',
        price: '₱4,800',
        priceNumeric: 4800,
        duration: '3.5 Hours Session',
        features: [
          'Event hair styling and glowing makeup',
          'Structured gel overlay with 2 accent nails',
          'Lash placement and touch-up powder kit',
          'Cuticle care and nail hydration oil',
        ],
      },
      {
        name: 'Bridal Complete Glam & Extensions',
        price: '₱10,800',
        priceNumeric: 10800,
        duration: 'Trial Day + Wedding Day Session',
        features: [
          '3-hour bridal hair & makeup trial',
          'Wedding day hair & makeup with deluxe kit',
          'Full set of sculpted gel extensions with custom art',
          'Coordinated timeline for bridal prep morning',
        ],
      },
    ],
    addOns: [
      {
        id: 'extra-entourage-styling',
        label: 'Additional Entourage Hair & Makeup',
        price: 2000,
        priceFormatted: '₱2,000',
      },
      {
        id: 'home-service-styling',
        label: 'On-Location / Hotel Service Fee',
        price: 1500,
        priceFormatted: '₱1,500',
      },
    ],
  },
];




