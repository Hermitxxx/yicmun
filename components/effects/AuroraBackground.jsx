"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#040817]">
      {/* Primary Ambient Gradient Base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0C1A33] via-[#040817] to-[#02040B]" />

      {/* Aurora Wave 1: Vivid Electric Green / Cyan Top Left */}
      <motion.div
        animate={{
          x: [-40, 50, -40],
          y: [-30, 40, -30],
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.75, 0.5],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] max-w-[850px] max-h-[850px] rounded-full bg-[radial-gradient(circle,_rgba(0,255,149,0.32)_0%,_rgba(0,229,255,0.18)_40%,_transparent_70%)] blur-[80px]"
      />

      {/* Aurora Wave 2: Electric Violet / Neon Magenta Top Right */}
      <motion.div
        animate={{
          x: [50, -40, 50],
          y: [30, -50, 30],
          scale: [1.15, 0.9, 1.15],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[15%] -right-[15%] w-[65vw] h-[65vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle,_rgba(157,78,221,0.35)_0%,_rgba(255,51,181,0.22)_45%,_transparent_75%)] blur-[90px]"
      />

      {/* Aurora Wave 3: Bright Ice Cyan Center Bottom */}
      <motion.div
        animate={{
          x: [-30, 30, -30],
          y: [40, -40, 40],
          scale: [0.95, 1.25, 0.95],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] left-[15%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] rounded-full bg-[radial-gradient(circle,_rgba(0,229,255,0.28)_0%,_rgba(0,255,149,0.15)_50%,_transparent_70%)] blur-[95px]"
      />

      {/* High-Luminosity Center Core Glow */}
      <div className="absolute top-[15%] left-[25%] right-[25%] h-[350px] rounded-full bg-[radial-gradient(circle,_rgba(0,255,149,0.14)_0%,_rgba(0,229,255,0.08)_50%,_transparent_75%)] blur-[70px] pointer-events-none" />

      {/* Noise Texture Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.55] mix-blend-overlay" />
    </div>
  );
}
