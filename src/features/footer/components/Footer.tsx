import { FOOTER_DATA } from '../constants/footerData';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="w-full py-20 sm:py-28 border-t border-[#c5b3a6]/30 bg-[#faf9f6] text-[#6a5c51]">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 sm:px-10 lg:px-20 max-w-[1440px] mx-auto gap-8">
        <a
          href="#"
          className="font-editorial text-2xl tracking-[0.2em] text-[#1a1c1a] hover:opacity-70 transition-opacity duration-300"
        >
          {FOOTER_DATA.brandName}
        </a>

        <SocialLinks links={FOOTER_DATA.socialLinks} />

        <p className="text-xs uppercase tracking-[0.15em] text-[#797770]">
          {FOOTER_DATA.copyrightText}
        </p>
      </div>
    </footer>
  );
}
