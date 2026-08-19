import { ATELIER_LOCATION_INFO } from '../constants/contactOptions';

export function AtelierDirectInfo() {
  return (
    <div className="space-y-8 bg-[#faf9f6] p-8 sm:p-10 border border-[#c5b3a6]/30">
      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-[#6a5c51] font-semibold block mb-2">
          Studio &amp; Location
        </span>
        <h3 className="font-editorial text-2xl text-[#1a1c1a] font-medium">
          {ATELIER_LOCATION_INFO.studio}
        </h3>
        <p className="text-xs sm:text-sm text-[#484740] mt-3 leading-relaxed">
          {ATELIER_LOCATION_INFO.address}
        </p>
      </div>

      <div className="space-y-4 pt-6 border-t border-[#c5b3a6]/20 text-xs sm:text-sm">
        <div>
          <div className="text-[11px] uppercase tracking-widest text-[#797770]">
            Direct Email Inquiries
          </div>
          <a
            href={`mailto:${ATELIER_LOCATION_INFO.email}`}
            className="text-[#1a1c1a] font-medium hover:text-[#6a5c51] transition-colors"
          >
            {ATELIER_LOCATION_INFO.email}
          </a>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-widest text-[#797770]">
            Press &amp; Collaborations
          </div>
          <a
            href={`mailto:${ATELIER_LOCATION_INFO.pressEmail}`}
            className="text-[#1a1c1a] font-medium hover:text-[#6a5c51] transition-colors"
          >
            {ATELIER_LOCATION_INFO.pressEmail}
          </a>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-widest text-[#797770]">
            Operating Schedule
          </div>
          <div className="text-[#484740]">
            {ATELIER_LOCATION_INFO.hours}
          </div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-widest text-[#797770]">
            Response Time
          </div>
          <div className="text-[#484740]">
            {ATELIER_LOCATION_INFO.responseWindow}
          </div>
        </div>
      </div>
    </div>
  );
}

