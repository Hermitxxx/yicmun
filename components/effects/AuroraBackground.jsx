"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#050B1A]">
      {/* Primary Ambient Gradient Base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0A1628] via-[#050B1A] to-[#03060F]" />

      {/* Aurora Wave 1: Green / Cyan Top Left */}
      <motion.div
        animate={{
          x: [-30, 40, -30],
          y: [-20, 30, -20],
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] -left-[10%] w-[65vw] h-[65vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle,_rgba(0,255,135,0.18)_0%,_rgba(0,212,255,0.08)_40%,_transparent_70%)] blur-[90px]"
      />

      {/* Aurora Wave 2: Violet / Magenta Top Right */}
      <motion.div
        animate={{
          x: [40, -30, 40],
          y: [20, -40, 20],
          scale: [1.1, 0.95, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[15%] -right-[15%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] rounded-full bg-[radial-gradient(circle,_rgba(123,47,190,0.22)_0%,_rgba(255,110,199,0.09)_45%,_transparent_75%)] blur-[100px]"
      />

      {/* Aurora Wave 3: Deep Ice Cyan Center Bottom */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [30, -30, 30],
          scale: [0.9, 1.1, 0.9],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] left-[20%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-[radial-gradient(circle,_rgba(0,212,255,0.12)_0%,_rgba(0,255,135,0.05)_50%,_transparent_70%)] blur-[110px]"
      />

      {/* Noise Texture Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] mix-blend-overlay" />
    </div>
  );
}
