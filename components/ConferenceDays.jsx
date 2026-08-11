"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { EVENT_CONFIG } from "@/config/registration";

export default function ConferenceDays() {
  const days = EVENT_CONFIG.conferenceDays || [];
  const accents = [
    { text: "text-[#00FF87]", border: "border-[#00FF87]/30", bg: "bg-[#00FF87]/10" },
    { text: "text-[#00D4FF]", border: "border-[#00D4FF]/30", bg: "bg-[#00D4FF]/10" },
    { text: "text-[#FF6EC7]", border: "border-[#FF6EC7]/30", bg: "bg-[#FF6EC7]/10" },
  ];

  return (
    <section id="key-dates" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Heading using site theme */}
        <SectionHeading
          eyebrow="KEY DATES"
          title="Conference Days"
          subtitle="Mark your calendars — three days that will define your diplomacy journey."
        />

        {/* 3-Column Days Cards in Aurora Glass Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {days.map((item, idx) => {
            const accent = accents[idx % accents.length];
            return (
              <GlassCard
                key={item.dayNumber}
                delay={idx * 0.12}
                className="group flex flex-col justify-between items-center text-center p-8 sm:p-10 relative overflow-hidden min-h-75"
              >
                {/* Background Watermark Number in JetBrains Mono */}
                <span className="absolute top-3 right-5 font-mono font-extrabold text-6xl text-frost-white/5 group-hover:text-[#00FF87]/15 transition-colors pointer-events-none select-none">
                  {item.dayNumber}
                </span>

                {/* Day Label */}
                <div className="w-full flex justify-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-widest border ${accent.border} ${accent.bg} ${accent.text}`}>
                    {item.dayLabel}
                  </span>
                </div>

                {/* Main Date Display */}
                <div className="my-6 space-y-1">
                  <span className="block font-bold text-5xl sm:text-6xl text-snow tracking-tight group-hover:scale-105 group-hover:text-[#00FF87] transition-all duration-300">
                    {item.dateNumber}
                  </span>
                  <span className="block text-xs font-mono uppercase tracking-widest text-frost-white/60">
                    {item.monthYear}
                  </span>
                </div>

                {/* Day Description */}
                <p className="text-sm text-frost-white/80 leading-relaxed max-w-65 group-hover:text-snow transition-colors">
                  {item.description}
                </p>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
