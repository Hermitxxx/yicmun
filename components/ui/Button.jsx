"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = true,
  external = true,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 relative group overflow-hidden cursor-pointer select-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#00FF87] to-[#00D4FF] text-[#050B1A] font-semibold hover:shadow-[0_0_25px_rgba(0,255,135,0.4)] border border-[#00FF87]/50",
    secondary:
      "bg-[#0A1628]/80 text-[#E8F4F8] border border-[#E8F4F8]/15 hover:border-[#00FF87]/50 hover:bg-[#0A1628] hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]",
    accent:
      "bg-gradient-to-r from-[#7B2FBE] via-[#FF6EC7] to-[#00FF87] text-[#FAFBFC] font-semibold hover:shadow-[0_0_30px_rgba(255,110,199,0.35)] border border-[#FF6EC7]/40",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2.5",
    lg: "text-base px-8 py-4 gap-3 font-semibold",
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {/* Subtle shine sweep effect on hover */}
      <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />

      <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">{children}</span>

      {icon && (
        <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return <button onClick={onClick}>{content}</button>;
}
