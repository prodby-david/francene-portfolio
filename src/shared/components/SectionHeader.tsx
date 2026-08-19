interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  tag,
  title,
  description,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl ${centered ? "text-center mx-auto" : ""} ${className}`}>
      {tag && (
        <span className="text-xs uppercase tracking-[0.2em] text-[#6a5c51] font-medium block mb-3">
          {tag}
        </span>
      )}
      <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#1a1c1a] font-medium tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[#484740] font-body text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
