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
    id: 'graphic-design',
    title: 'Brand Identity & Graphic Design',
    category: 'design',
    categoryLabel: 'Graphic Design',
    subtitle: 'Logos, typography systems, packaging & social media design',
    description:
      'Thoughtful branding for modern small businesses and lifestyle creators looking for a clean, cohesive, and memorable visual presence.',
    startingPrice: '₱8,000',
    basePriceNumeric: 8000,
    idealFor: 'Boutiques, beauty brands, cafes, content creators, and online stores',
    deliverables: [
      'Primary logo, alternate marks, and sub-icons',
      'Brand color palette and typography pairings',
      'Social media launch templates',
      'Print-ready packaging and business card files',
    ],
    tiers: [
      {
        name: 'Starter Brand Identity Kit',
        price: '₱8,000',
        priceNumeric: 8000,
        duration: '2-3 Weeks Turnaround',
        features: [
          'Primary logo and sub-mark vector files',
          'Color palette and typography guide',
          'Business card print layout file',
          '15-page brand style guide PDF',
        ],
      },
      {
        name: 'Full Brand & Packaging Suite',
        price: '₱18,000',
        priceNumeric: 18000,
        duration: '4-5 Weeks Turnaround',
        features: [
          'Complete logo system with all file formats',
          'Product packaging and label layout design',
          'Set of 9 editable Canva or Figma templates',
          'Full brand manual with print guidelines',
        ],
      },
    ],
    addOns: [
      {
        id: 'packaging-box-dieline',
        label: 'Product Box or Label Packaging Layout',
        price: 4000,
        priceFormatted: '₱4,000',
      },
      {
        id: 'additional-social-templates',
        label: 'Set of 6 Additional Social Media Templates',
        price: 2500,
        priceFormatted: '₱2,500',
      },
      {
        id: 'rush-turnaround',
        label: 'Rush 10-Day Project Turnaround',
        price: 3500,
        priceFormatted: '₱3,500',
      },
    ],
  },
  {
    id: 'all-in-studio-package',
    title: 'All-In Hair, Makeup, Nails & Design',
    category: 'bespoke',
    categoryLabel: 'Full Studio Package',
    subtitle: 'Combined hair, makeup, nail styling & branding for business launches',
    description:
      'The complete package for founders and creators launching a new brand or campaign. Includes professional hair and makeup, custom nails, and visual branding.',
    startingPrice: '₱22,000',
    basePriceNumeric: 22000,
    idealFor: 'Brand founders, content creators, and commercial campaigns',
    deliverables: [
      'Complete visual brand identity suite',
      'On-location hair and makeup styling for photoshoot',
      'Custom set of gel extension nails for the shoot',
      'Shoot moodboard and creative visual direction',
    ],
    tiers: [
      {
        name: 'Campaign Launch Package',
        price: '₱22,000',
        priceNumeric: 22000,
        duration: '1-Day Shoot + 3 Weeks Design',
        features: [
          'Full starter logo and identity design files',
          'Half-day on-set hair and makeup styling',
          'Custom set of gel extension nails',
          'Photoshoot moodboard and styling guide',
        ],
      },
      {
        name: 'Full Brand Launch & Multi-Look Production',
        price: '₱38,000',
        priceNumeric: 38000,
        duration: 'Full Day Shoot + 5 Weeks Design',
        features: [
          'Complete packaging and brand identity manual',
          'Full-day on-location hair & makeup with 3 look changes',
          '2 sets of custom gel extensions or press-on sets',
          'Social media launch graphics and banner kit',
        ],
      },
    ],
    addOns: [
      {
        id: 'extra-model-makeup',
        label: 'Additional Model Hair & Makeup on Shoot Day',
        price: 2500,
        priceFormatted: '₱2,500',
      },
      {
        id: 'extra-design-revision',
        label: 'Additional Revision Round on Design',
        price: 2000,
        priceFormatted: '₱2,000',
      },
    ],
  },
];


