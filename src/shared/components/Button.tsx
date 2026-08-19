import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-[#2c2c2c] hover:bg-[#1a1c1a] text-[#faf9f6] shadow-sm hover:shadow-md active:scale-[0.99]",
    secondary:
      "bg-[#f7f3f0] hover:bg-[#efeeeb] text-[#1a1c1a] border border-[#c5b3a6]/30",
    outline:
      "bg-transparent text-[#1a1c1a] border border-[#c5b3a6]/40 hover:border-[#1a1c1a]",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-[11px] tracking-[0.15em]",
    md: "px-6 py-3 text-xs tracking-[0.18em]",
    lg: "px-8 sm:px-10 py-4 text-xs tracking-[0.2em]",
  };

  return (
    <button
      className={`inline-flex items-center justify-center font-medium uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
