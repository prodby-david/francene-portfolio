export interface SocialLinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterData {
  brandName: string;
  socialLinks: SocialLinkItem[];
  copyrightText: string;
}
