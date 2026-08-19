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
    id: 'boutique-digital-social-suite',
    title: 'Aesthetic Brand Social Media & Digital Suite',
    subtitle: 'Canva Post Grids, Story Packs & Planners',
    category: 'digital',
    categoryLabel: 'Digital Templates',
    year: '2024',
    client: 'Aurelia Boutique PH',
    role: 'Lead Digital Template Designer',
    coverImage:
      'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
        alt: 'Canva social media feed preview',
        caption: 'Cohesive Instagram grid layout with customizable fonts and palette',
      },
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
        alt: 'Digital planner and price list template',
        caption: 'Editable price sheet and client intake forms in Canva',
      },
    ],
    featured: true,
    description:
      'A comprehensive 30-piece editable Canva template suite featuring cohesive Instagram feed layouts, promotional story frames, and client booking forms.',
    editorialDetails: {
      concept:
        'Warm neutral aesthetics paired with clean typography hierarchy for effortless social branding.',
      techniques: [
        'Canva Pro & Free compatible element structure',
        'Custom palette hex code integration',
        'Instagram grid layout continuity design',
        'Story highlight icon set creation',
      ],
      deliverables: [
        'Direct Canva template access links',
        '30 editable post & story templates',
        'Client intake form & price list layout',
        'Quick-start PDF editing guide',
      ],
      publicationOrUse: 'Digital Collection Launch',
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
    id: 'canva-social-media-template-pack',
    title: 'Aesthetic Creator Canva Template Suite',
    subtitle: 'Editable Social Media & Digital Planners',
    category: 'digital',
    categoryLabel: 'Digital Templates',
    year: '2023',
    client: 'Boutique Studio Collective',
    role: 'Digital Template Designer',
    coverImage:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop',
        alt: 'Canva social media template layout',
        caption: 'Minimalist Instagram post layouts and story highlight icons',
      },
    ],
    featured: false,
    description:
      'Fully editable Canva template pack including 24 feed layouts, story designs, carousel slides, and client intake forms.',
    editorialDetails: {
      concept:
        'Neutral aesthetic, cohesive typography hierarchy, and effortless drag-and-drop customization in Canva.',
      techniques: [
        'Canva Pro and Free component optimization',
        'Social media grid planning and color harmony',
        'Story highlight and engagement sticker creation',
        'Instant digital access link generation',
      ],
      deliverables: [
        'Direct editable Canva access links',
        '24 post & story templates',
        'PDF installation & font guide',
        'Bonus highlight icons & color palette hex codes',
      ],
      publicationOrUse: 'Digital Template Collection',
    },
  },
];


