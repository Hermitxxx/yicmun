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
      "bg-gradient-to-r from-[#00FF95] via-[#00E5FF] to-[#00FF95] text-[#040817] font-bold shadow-[0_0_30px_rgba(0,255,149,0.55)] border border-[#00FF95] hover:shadow-[0_0_40px_rgba(0,255,149,0.8)]",
    secondary:
      "bg-[#0C1A33] text-[#FAFBFC] font-semibold border-2 border-[#00E5FF]/60 hover:border-[#00FF95] hover:bg-[#102447] hover:shadow-[0_0_30px_rgba(0,229,255,0.45)]",
    accent:
      "bg-gradient-to-r from-[#8B5CF6] via-[#FF33B5] to-[#00FF95] text-[#FAFBFC] font-bold shadow-[0_0_35px_rgba(255,51,181,0.55)] border border-[#FF33B5]/70 hover:shadow-[0_0_45px_rgba(255,51,181,0.8)]",
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
