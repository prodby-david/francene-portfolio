export type WorkCategory = 'all' | 'hair-makeup' | 'nails' | 'digital';

export interface WorkCategoryOption {
  id: WorkCategory;
  label: string;
  count?: number;
  description: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface ProjectCompareItem {
  beforeUrl: string;
  afterUrl: string;
  beforeLabel: string;
  afterLabel: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'hair-makeup' | 'nails' | 'digital';
  categoryLabel: string;
  year: string;
  client: string;
  role: string;
  coverImage: string;
  galleryImages: ProjectImage[];
  featured: boolean;
  description: string;
  editorialDetails: {
    concept: string;
    techniques: string[];
    deliverables: string[];
    publicationOrUse: string;
  };
  compare?: ProjectCompareItem;
}

export interface WorkFilterState {
  selectedCategory: WorkCategory;
  searchQuery: string;
}

