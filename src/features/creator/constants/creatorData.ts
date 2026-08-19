import { ModelPortfolioItem, CreatorMetric, CreatorCollabFormat, CreatorCapability } from '../types/creator.types';

export const CREATOR_METRICS: CreatorMetric[] = [
  {
    value: '45+',
    label: 'Brand UGC Campaigns',
    sublabel: 'Beauty, skincare & lifestyle deliverables',
  },
  {
    value: '48h',
    label: 'Fast Content Turnaround',
    sublabel: 'From product arrival to final edited cut',
  },
  {
    value: '4K',
    label: 'Ultra HD Production',
    sublabel: 'Natural lighting & studio audio clarity',
  },
  {
    value: '100%',
    label: 'Reliability & Communication',
    sublabel: 'Consistent adherence to brand briefs',
  },
];

export const MODEL_PORTFOLIO_ITEMS: ModelPortfolioItem[] = [
  {
    id: 'ugc-skincare-glow-demo',
    title: 'Hydrating Glow Serum UGC Reel',
    category: 'ugc-video',
    brandOrClient: 'Aurelia Botanicals',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
    videoBadge: '9:16 UGC Reel',
    caption: 'On-camera morning skincare routine with texture swatch and voiceover.',
  },
  {
    id: 'beauty-editorial-modeling',
    title: 'Luminous Bridal & Editorial Modeling',
    category: 'beauty',
    brandOrClient: 'Velvet Atelier Manila',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
    videoBadge: 'Lookbook Shoot',
    caption: 'Commercial beauty modeling showcasing natural dewy skin and hair artistry.',
  },
  {
    id: 'ugc-lip-oil-unboxing',
    title: 'Tinted Lip Oil Unboxing & Application',
    category: 'ugc-video',
    brandOrClient: 'Kiyomi Beauty PH',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    videoBadge: 'TikTok Ad',
    caption: 'High-hook problem-solution demonstration with macro close-up lip swatches.',
  },
  {
    id: 'commercial-fashion-modeling',
    title: 'Minimalist Linen Apparel Campaign',
    category: 'commercial',
    brandOrClient: 'Lina Collective',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop',
    videoBadge: 'E-Commerce Shoot',
    caption: 'Studio lookbook modeling and motion product demonstrations.',
  },
];

export const CREATOR_COLLAB_FORMATS: CreatorCollabFormat[] = [
  {
    name: 'Single UGC Video / Product Reel',
    badge: 'Short-Form Reel',
    description: 'Engaging vertical 9:16 video focused on authentic demonstration, hook testing, and clear value proposition.',
    deliverables: [
      '1x 15-30s high-res 9:16 vertical video',
      'Tested hook + voiceover + dynamic subtitles',
      'Natural on-camera product demonstration',
      '1 round of editing revisions included',
      'Organic brand social media usage rights',
    ],
  },
  {
    name: 'Multi-Video UGC Campaign Suite',
    badge: 'Content Suite',
    description: 'Comprehensive campaign package with alternate hooks and raw footage for multi-platform ad deployment.',
    deliverables: [
      '3x unique edited UGC reels with varied hooks',
      '5x styled high-res product photos',
      'Full B-roll and raw footage video files',
      'Hook variation script options for A/B testing',
      'Organic brand usage rights across all platforms',
    ],
  },
  {
    name: 'On-Set Commercial & Beauty Modeling',
    badge: 'Model Booking',
    description: 'On-location or studio presence for apparel lookbooks, cosmetics campaigns, and commercial photo/video shoots.',
    deliverables: [
      'On-location or studio modeling presence',
      'Hair and makeup self-prepared or artist-ready',
      'Commercial lookbook, catalog, or campaign shoot',
      'High energy, promptness, and direction compliance',
      'Commercial usage release for campaign duration',
    ],
  },
];

export const CREATOR_CAPABILITIES: CreatorCapability[] = [
  {
    id: 'ad-rights',
    label: 'Paid Advertising Rights',
    description: 'Spark Ads & Meta ad usage rights available upon request',
  },
  {
    id: 'hook-variations',
    label: 'Alternate Video Hooks',
    description: 'Custom hook variations scripted and recorded for ad A/B testing',
  },
  {
    id: 'raw-footage',
    label: 'Raw Footage & B-Roll',
    description: 'Full unedited high-definition video files for in-house editing',
  },
];
