export interface ModelPortfolioItem {
  id: string;
  title: string;
  category: 'beauty' | 'commercial' | 'ugc-video';
  brandOrClient: string;
  year: string;
  imageUrl: string;
  videoBadge?: string;
  caption: string;
}

export interface CreatorMetric {
  value: string;
  label: string;
  sublabel: string;
}

export interface CreatorCollabFormat {
  name: string;
  badge: string;
  description: string;
  deliverables: string[];
}

export interface CreatorCapability {
  id: string;
  label: string;
  description: string;
}
