import { PortfolioItem } from '../types/work.types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'fresh-radiant-bridal-makeup',
    title: 'Fresh Radiant Bridal Beauty',
    subtitle: 'Wedding Ceremony & Reception Look',
    category: 'hair-makeup',
    categoryLabel: 'Hair & Makeup',
    year: '2024',
    client: 'Private Bridal Client',
    role: 'Lead Hair & Makeup Artist',
    coverImage:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop',
        alt: 'Fresh glowing bridal makeup portrait',
        caption: 'Radiant skin finish with soft champagne highlighter and natural glow',
      },
      {
        url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
        alt: 'Soft eye makeup detail with natural brows',
        caption: 'Individual lash placement with soft neutral eyeshadow tones',
      },
      {
        url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
        alt: 'Bridal side profile portrait',
        caption: 'Soft cream blush and natural velvet lip finish',
      },
    ],
    featured: true,
    description:
      'A natural, glowing bridal hair and makeup look designed to look fresh in daylight and hold up comfortably throughout the wedding reception.',
    editorialDetails: {
      concept:
        'Enhancing natural skin texture with lightweight hydration, elegant hair styling, and individual lashes.',
      techniques: [
        'Skin prep and long-wear base application',
        'Custom mixed highlighter and blush tones',
        'Individual lash placement for natural volume',
        'Bridal hair styling and veil placement',
      ],
      deliverables: [
        'Bridal hair and makeup trial session',
        'Wedding day styling with touch-up kit',
        'Entourage styling coordination',
      ],
      publicationOrUse: 'Tagaytay Garden Wedding',
    },
    compare: {
      beforeUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
      afterUrl:
        'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop',
      beforeLabel: 'Natural Bare Skin',
      afterLabel: 'Radiant Bridal Glam',
    },
  },
  {
    id: 'minimalist-chrome-gel-nails',
    title: 'Silver Chrome & Clear Gel Nails',
    subtitle: 'Custom Hand-Sculpted Extensions',
    category: 'nails',
    categoryLabel: 'Nail Services',
    year: '2024',
    client: 'Private Studio Client',
    role: 'Nail Artist & Stylist',
    coverImage:
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop',
        alt: 'Silver chrome sculpted nail tips',
        caption: 'Hand-sculpted gel extensions with mirror silver chrome finish',
      },
      {
        url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop',
        alt: 'Clean nude base with silver French lines',
        caption: 'Translucent nude base with hand-painted silver line work',
      },
    ],
    featured: true,
    description:
      'Clean structured gel extensions finished with liquid silver chrome details and high-shine top coat for a modern, elevated look.',
    editorialDetails: {
      concept:
        'Combining minimalist neutral bases with modern metallic accents for durable daily elegance.',
      techniques: [
        'Structured builder gel application for apex strength',
        'Mirror chrome powder buffing',
        'Detailed cuticle care and prep',
        'High-durability top coat seal',
      ],
      deliverables: [
        'Full set of sculpted gel extensions',
        'Custom hand-painted chrome nail art',
        'Home care instructions & cuticle oil',
      ],
      publicationOrUse: 'Private Studio Collection',
    },
  },
  {
    id: 'aurelia-botanicals-branding',
    title: 'Aurelia Botanicals Visual Identity',
    subtitle: 'Skincare Brand & Packaging Design',
    category: 'design',
    categoryLabel: 'Graphic Design',
    year: '2024',
    client: 'Aurelia Botanicals',
    role: 'Lead Brand Designer',
    coverImage:
      'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
        alt: 'Embossed skincare packaging and stationery',
        caption: 'Embossed logo mark on natural textured paper packaging',
      },
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
        alt: 'Brand collateral and stationery set',
        caption: 'Warm neutral color palette and clean typography layout',
      },
    ],
    featured: true,
    description:
      'A complete visual identity system featuring custom logo typography, a warm neutral color palette, and clean packaging design.',
    editorialDetails: {
      concept:
        'A clean, modern aesthetic reflecting natural skincare ingredients and thoughtful craftsmanship.',
      techniques: [
        'Custom typography and logo suite creation',
        'Color palette and font pairing guide',
        'Packaging label and box print layout',
        'Social media templates and digital guidelines',
      ],
      deliverables: [
        'Primary, secondary, and sub-mark logo files',
        'Print-ready packaging label files',
        'Brand identity style guide PDF',
        'Editable social media launch templates',
      ],
      publicationOrUse: 'Brand Launch & Online Store',
    },
  },
  {
    id: 'editorial-bronze-glam-makeup',
    title: 'Soft Bronze Glam & Hair Styling',
    subtitle: 'Fashion Lookbook & Campaign',
    category: 'hair-makeup',
    categoryLabel: 'Hair & Makeup',
    year: '2024',
    client: 'Local Fashion Label',
    role: 'Lead Hair & Makeup Artist',
    coverImage:
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop',
        alt: 'Warm bronze eye makeup look',
        caption: 'Warm bronze tones with subtle winged eyeliner and fresh skin',
      },
      {
        url: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?q=80&w=1200&auto=format&fit=crop',
        alt: 'Photoshoot model look',
        caption: 'Glossy eyelid accent applied right before shooting',
      },
    ],
    featured: false,
    description:
      'Warm bronze eyeshadow tones paired with natural skin texture, glossy lips, and textured hair waves for a fashion lookbook shoot.',
    editorialDetails: {
      concept:
        'Creating warm, sun-kissed makeup looks and effortless hair styling that look natural under studio lighting and daylight.',
      techniques: [
        'Warm bronze and gold eyeshadow blending',
        'Dewy highlight placement on cheekbones',
        'Textured wave hair styling and hold',
        'Nude glossy lip finish',
      ],
      deliverables: [
        '4 unique model looks for lookbook',
        'Continuous on-set touch-ups',
        'Skin prep and hair prep before shoot',
      ],
      publicationOrUse: 'Summer Apparel Campaign',
    },
  },
  {
    id: 'pastel-french-3d-nail-art',
    title: 'Pastel French & 3D Floral Nails',
    subtitle: 'Spring Hand Artistry Collection',
    category: 'nails',
    categoryLabel: 'Nail Services',
    year: '2023',
    client: 'Private Client Session',
    role: 'Nail Artist',
    coverImage:
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1200&auto=format&fit=crop',
        alt: 'Detailed floral nail art',
        caption: 'Sheer blush base with hand-sculpted 3D floral accents',
      },
    ],
    featured: false,
    description:
      'Delicate sheer pink base with soft pastel micro-French tips and subtle 3D gel flower accents for a feminine aesthetic.',
    editorialDetails: {
      concept:
        'Playful yet elegant nail styling suited for both everyday wear and special occasions.',
      techniques: [
        'Hand-painted micro-French lines',
        '3D embossed gel flowers and pearl placement',
        'Natural nail reinforcement overlay',
        'Gentle cuticle detailing',
      ],
      deliverables: [
        'Custom 10-finger hand-painted set',
        'Nail hydration care application',
      ],
      publicationOrUse: 'Studio Nail Portfolio',
    },
  },
  {
    id: 'studio-reverie-identity',
    title: 'Studio Reverie Brand & Packaging',
    subtitle: 'Home Fragrance & Lifestyle Line',
    category: 'design',
    categoryLabel: 'Graphic Design',
    year: '2023',
    client: 'Studio Reverie',
    role: 'Graphic Designer & Art Director',
    coverImage:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop',
        alt: 'Candle packaging and brand cards',
        caption: 'Minimalist product labels on warm neutral textured boxes',
      },
    ],
    featured: false,
    description:
      'Clean typography and minimalist packaging designed for a boutique home fragrance and lifestyle brand.',
    editorialDetails: {
      concept:
        'Understated elegance with warm neutral tones, clean typography, and uncluttered layouts.',
      techniques: [
        'Logo suite and typography hierarchy design',
        'Product box and jar label design',
        'Marketing collateral and card layout',
        'Print supplier file preparation',
      ],
      deliverables: [
        'Full logo suite with vector assets',
        'Product label and box print files',
        'Brand style guide document',
        'Business cards and thank-you cards',
      ],
      publicationOrUse: 'Boutique Store & Online Launch',
    },
  },
];

