"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, UserCheck, Building2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { EVENT_CONFIG } from "@/config/registration";

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
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
          >
            {/* Event Metadata Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A1628]/90 border border-[#00FF87]/30 text-xs font-mono text-[#00FF87] tracking-wider uppercase backdrop-blur-md shadow-lg shadow-[#00FF87]/5">
                <span className="w-2 h-2 rounded-full bg-[#00FF87] animate-pulse" />
                <Calendar className="w-3.5 h-3.5" />
                <span>{EVENT_CONFIG.dates}</span>
                <span className="text-[#E8F4F8]/30">|</span>
                <MapPin className="w-3.5 h-3.5 text-[#00D4FF]" />
                <span className="text-[#00D4FF]">{EVENT_CONFIG.location}</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <span className="block text-xs sm:text-sm font-mono text-[#00D4FF] uppercase tracking-[0.25em] font-semibold">
                {EVENT_CONFIG.organizer} Presents
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#FAFBFC] tracking-tight leading-[1.08]">
                Model United <br className="hidden sm:inline" />
                <span className="text-gradient-aurora">Nations</span>
              </h1>
            </motion.div>

            {/* Animated Motto Stagger: DEBATE. DIPLOMACY. DIRECTION */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl md:text-3xl font-extrabold tracking-wider text-[#E8F4F8]">
              {mottoWords.map((word, idx) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.15 }}
                  className={
                    idx === 0
                      ? "text-[#00FF87]"
                      : idx === 1
                      ? "text-[#00D4FF]"
                      : "text-[#FF6EC7]"
                  }
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#E8F4F8]/75 leading-relaxed max-w-2xl font-normal"
            >
              Step into international diplomacy. Represent a nation, engage in rigorous committee debate, and collaborate with passionate young leaders to formulate resolutions for pressing global challenges.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
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

            {/* Micro Badge / Early Bird Teaser */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex items-center gap-3 text-xs text-[#E8F4F8]/60 font-mono"
            >
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0A1628] border border-[#00FF87]/20 text-[#00FF87]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Early Bird Live: {EVENT_CONFIG.earlyBird.price} BDT</span>
              </div>
              <span className="hidden sm:inline text-[#E8F4F8]/40">• Limited Seats Available</span>
            </motion.div>
          </motion.div>

          {/* Right Atmospheric Hero Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Outer Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#00FF87]/20 via-[#7B2FBE]/30 to-[#00D4FF]/20 blur-2xl transform scale-95" />

              {/* Main Visual Display Card */}
              <div className="relative glass-panel rounded-3xl p-7 sm:p-9 border border-[#E8F4F8]/15 space-y-6 shadow-2xl">
                
                {/* Visual Emblem Header */}
                <div className="flex items-center justify-between border-b border-[#E8F4F8]/10 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00FF87]/20 to-[#00D4FF]/20 border border-[#00FF87]/40 flex items-center justify-center text-[#00FF87]">
                      <Sparkles className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#FAFBFC] text-base">Diplomatic Summit</h3>
                      <p className="text-xs font-mono text-[#00D4FF]">September 2026 Edition</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#00FF87]/10 text-[#00FF87] border border-[#00FF87]/30">
                    BST UTC+06:00
                  </span>
                </div>

                {/* Simulated Committee & Delegate Stats Card */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#0A1628]/80 border border-[#E8F4F8]/10">
                    <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-[#00FF87]">3 Days</span>
                    <span className="text-xs text-[#E8F4F8]/60">Diplomatic Debate</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#0A1628]/80 border border-[#E8F4F8]/10">
                    <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-[#00D4FF]">৳1,750</span>
                    <span className="text-xs text-[#E8F4F8]/60">Early Bird Pass</span>
                  </div>
                </div>

                {/* Quote / Identity Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#0A1628] to-[#12233D] border border-[#7B2FBE]/30 space-y-2">
                  <span className="text-[11px] font-mono text-[#FF6EC7] uppercase tracking-wider block">
                    Youth International Council
                  </span>
                  <p className="text-xs text-[#E8F4F8]/80 italic leading-relaxed">
                    &quot;Empowering the leaders of tomorrow through articulate advocacy, global consensus, and strategic negotiation.&quot;
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
