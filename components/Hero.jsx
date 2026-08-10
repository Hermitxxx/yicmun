"use client";

import { motion } from "framer-motion";
import { Sparkles, UserCheck, Building2, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import { EVENT_CONFIG } from "@/config/registration";
import WorldMapBackground from "@/components/effects/WorldMapBackground";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const mottoWords = EVENT_CONFIG.motto;

  return (
    <section className="relative min-h-screen pt-36 pb-24 md:pt-44 md:pb-32 flex items-center justify-center overflow-hidden z-10">
      {/* Tactical SVG World Map Background Layer */}
      <WorldMapBackground />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 text-center flex flex-col items-center"
        >
          {/* 1. Session Tag Line */}
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#0A1628]/90 border border-[#00FF87]/40 text-sm sm:text-base font-mono font-semibold text-[#00FF87] tracking-[0.3em] uppercase backdrop-blur-md shadow-lg shadow-[#00FF87]/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00FF87] animate-pulse" />
              <span>{EVENT_CONFIG.session}</span>
            </div>
          </motion.div>

          {/* 2. Main Title: MUN */}
          <motion.div variants={itemVariants} className="space-y-2 max-w-3xl">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-widest text-[#FAFBFC] leading-none uppercase">
              <span className="text-gradient-aurora">MUN</span>
            </h1>
          </motion.div>

          {/* 3. Sub-headline: YOUTH INTERNATIONAL COUNCIL MODEL UNITED NATIONS */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <h2 className="text-xs sm:text-sm font-mono text-[#00D4FF] uppercase tracking-[0.3em] font-semibold leading-relaxed">
              {EVENT_CONFIG.name}
            </h2>
          </motion.div>

          {/* 4. Motto: "DEBATE. DIPLOMACY. DIRECTION." */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-2.5 text-base sm:text-xl md:text-2xl font-extrabold tracking-wider text-[#E8F4F8] pt-1"
          >
            <span className="text-[#E8F4F8]/40">&quot;</span>
            {mottoWords.map((word, idx) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.15 }}
                className={
                  idx === 0
                    ? "text-[#00FF95] glow-text-green"
                    : idx === 1
                    ? "text-[#00E5FF] glow-text-cyan"
                    : "text-[#FF33B5] drop-shadow-[0_0_15px_rgba(255,51,181,0.6)]"
                }
              >
                {word}
              </motion.span>
            ))}
            <span className="text-[#E8F4F8]/40">&quot;</span>
          </motion.div>

          {/* 5. Date Line: 25TH, 26TH & 27TH SEPTEMBER 2026 */}
          <motion.div variants={itemVariants} className="pt-1">
            <span className="inline-block text-xs sm:text-sm font-mono tracking-[0.25em] text-[#FAFBFC] uppercase font-bold px-4 py-1.5 rounded-md bg-[#0A1628]/80 border border-[#E8F4F8]/15">
              {EVENT_CONFIG.formattedDates}
            </span>
          </motion.div>

          {/* 6. Early Bird Registration Forms / Dual CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto"
          >
            <Button
              href="#delegate"
              external={false}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <UserCheck className="w-5 h-5" />
              <span>Register as Delegate</span>
            </Button>

            <Button
              href="#campus"
              external={false}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Building2 className="w-5 h-5" />
              <span>Register Your Campus</span>
            </Button>
          </motion.div>

          {/* Early Bird Rate Badge */}
          <motion.div
            variants={itemVariants}
            className="pt-1 flex flex-wrap items-center justify-center gap-3 text-xs text-[#E8F4F8]/60 font-mono"
          >
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0A1628] border border-[#00FF87]/20 text-[#00FF87]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Early Bird Rate: {EVENT_CONFIG.earlyBird.price} BDT</span>
            </div>
            <span className="text-[#E8F4F8]/40">• Limited Slots Available</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
