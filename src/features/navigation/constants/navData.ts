import { NavItem } from '../types/navigation.types';

export const BRAND_NAME = 'FRANCENE';

export const NAV_ITEMS: NavItem[] = [
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
        title: 'Graphic Design',
        href: '#graphic-design',
        categoryId: 'design',
        description: 'Brand identity, logos, packaging, and social templates',
      },
    ],
  },
  {
    title: 'Portfolio',
    href: '#work',
  },
  {
    title: 'About',
    href: '#atelier',
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


