import { SocialLinkItem } from '../types/footer.types';

interface SocialLinksProps {
  links: SocialLinkItem[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="text-xs uppercase tracking-[0.18em] text-[#484740] hover:text-[#1a1c1a] border-b border-transparent hover:border-[#1a1c1a] pb-0.5 transition-all duration-300 font-medium"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
