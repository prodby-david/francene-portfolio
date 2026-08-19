import { NavItem } from '../types/navigation.types';

export const BRAND_NAME = 'FRANCENE';

export const NAV_ITEMS: NavItem[] = [
  {
    title: 'About',
    href: '#atelier',
  },
  {
    title: 'Services',
    href: '#services',
    subItems: [
      {
        title: 'Hair & Makeup',
        href: '#hair-and-makeup',
        categoryId: 'hair-makeup',
        description: 'Bridal, debut, event, and photoshoot glam',
      },
      {
        title: 'Nail Services',
        href: '#nail-services',
        categoryId: 'nails',
        description: 'Gel extensions, builder overlays, and custom nail art',
      },
      {
        title: 'Digital Templates',
        href: '#digital-services',
        categoryId: 'digital',
        description: 'Custom Canva templates, social kits, and planners',
      },
    ],
  },
  {
    title: 'UGC & Model',
    href: '#creator-model',
  },
  {
    title: 'Portfolio',
    href: '#work',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

export const BOOK_NOW_LINK = {
  title: 'Book Now',
  href: '#contact',
};


