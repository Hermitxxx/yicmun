"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = "",
}) {
  return (
    <div className={`space-y-4 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1628]/90 border border-[#00FF87]/30 text-xs font-mono text-[#00FF87] tracking-wider uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87] animate-pulse" />
          {eyebrow}
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAFBFC] leading-[1.15]"
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-[#E8F4F8]/70 leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
