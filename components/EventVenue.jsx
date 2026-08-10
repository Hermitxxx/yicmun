"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { EVENT_CONFIG } from "@/config/registration";
import { Lock, Sparkles, HelpCircle, EyeOff } from "lucide-react";

export default function EventVenue() {
  const venues = EVENT_CONFIG.venues || [];

  return (
    <section id="venue" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="ANNOUNCEMENT PENDING"
          title="Where It Happens"
          subtitle="Two prestigious locations in Dhaka. Official venues releasing soon."
        />

        {/* Mysterious 2-Column Venue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {venues.map((venue, idx) => (
            <GlassCard
              key={venue.name}
              delay={idx * 0.15}
              className="group flex flex-col justify-between items-center text-center p-8 sm:p-12 relative overflow-hidden min-h-[300px] border border-[#00FF87]/20 hover:border-[#00FF87]/50"
            >
              {/* Background Holographic Shimmer Beam */}
              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 2 + idx,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#00FF87]/10 to-transparent skew-x-12 pointer-events-none"
              />

              {/* Top Row: Date Badge & Lock Indicator */}
              <div className="w-full flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1628] border border-[#00D4FF]/30 text-xs font-mono text-[#00D4FF] tracking-wider uppercase">
                  <span>{venue.dates}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#0A1628] border border-[#00FF87]/30 flex items-center justify-center text-[#00FF87] group-hover:scale-110 transition-transform">
                  <Lock className="w-4 h-4 animate-pulse" />
                </div>
              </div>

              {/* Mysterious Title & Confidential Badge */}
              <div className="my-auto space-y-3 relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#FF33B5]/10 border border-[#FF33B5]/30 text-[11px] font-mono text-[#FF33B5] tracking-widest uppercase">
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>{venue.code || "LOCATION // CLASSIFIED"}</span>
                </div>

                <h3 className="font-bold text-2xl sm:text-3xl text-[#FAFBFC] tracking-tight group-hover:text-[#00FF87] transition-colors duration-300">
                  <span className="inline-block relative">
                    <span className="opacity-90">{venue.name}</span>
                    <motion.span
                      animate={{ opacity: [0.3, 0.9, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00FF87] via-[#00D4FF] to-[#FF33B5]"
                    />
                  </span>
                </h3>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-[#E8F4F8]/75 leading-relaxed max-w-xs group-hover:text-[#FAFBFC] transition-colors relative z-10">
                {venue.description}
              </p>

              {/* Bottom Secret Status Line */}
              <div className="w-full pt-4 mt-4 border-t border-[#E8F4F8]/10 flex items-center justify-between text-xs font-mono text-[#00FF87]/80">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87] animate-ping" />
                  <span>Venue Reveal Coming Soon</span>
                </span>
                <HelpCircle className="w-4 h-4 text-[#00D4FF]" />
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Mysterious CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center pt-2"
        >
          <a
            href="#early-bird"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-[#00FF87]/40 bg-[#0A1628]/80 text-[#00FF87] font-mono text-xs font-semibold tracking-wider uppercase hover:bg-[#00FF87]/10 hover:border-[#00FF87] hover:shadow-[0_0_25px_rgba(0,255,135,0.35)] transition-all duration-300 group"
          >
            <Sparkles className="w-4 h-4 text-[#00FF87] group-hover:rotate-12 transition-transform" />
            <span>Stay Tuned For Venue Announcement</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
