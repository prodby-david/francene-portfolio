export interface SubMenuItem {
  title: string;
  href: string;
  categoryId?: 'hair-makeup' | 'nails' | 'digital';
  description?: string;
}

export interface NavItem {
  title: string;
  href: string;
  subItems?: SubMenuItem[];
}

export interface NavigationState {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  isWorkDropdownOpen: boolean;
  activeSection: string;
}


