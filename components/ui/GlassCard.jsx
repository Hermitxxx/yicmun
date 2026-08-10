"use client";

import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden ${
        hover ? "glass-panel-interactive" : ""
      } ${className}`}
      {...props}
    >
      {/* Subtle Corner Ambient Glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-[radial-gradient(circle,_rgba(0,255,135,0.08)_0%,_transparent_70%)] pointer-events-none" />
      {children}
    </motion.div>
  );
}
