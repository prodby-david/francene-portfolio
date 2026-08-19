export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
  imageAlt: string;
}

export interface AtelierStat {
  value: string;
  label: string;
}

export interface AtelierPillar {
  number: string;
  title: string;
  description: string;
}

export interface PressMention {
  name: string;
  quote: string;
  issue: string;
}
