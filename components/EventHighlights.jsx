"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Globe, MessageSquareText, Award, Users, ArrowUpRight } from "lucide-react";
import { EVENT_CONFIG } from "@/config/registration";

export default function EventHighlights() {
  const iconsMap = {
    Globe: Globe,
    MessageSquareText: MessageSquareText,
    Award: Award,
    Users: Users,
  };

  return (
    <section id="highlights" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeading
          eyebrow="EVENT HIGHLIGHTS"
          title="What Makes YICMUN 2026 Exceptional"
          subtitle="Explore the core elements designed to give every delegate an immersive, competitive, and transformative conference experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EVENT_CONFIG.pillars.map((pillar, idx) => {
            const Icon = iconsMap[pillar.iconName] || Globe;
            const accentColors = [
              "text-[#00FF87] border-[#00FF87]/30 bg-[#00FF87]/10",
              "text-[#00D4FF] border-[#00D4FF]/30 bg-[#00D4FF]/10",
              "text-[#FF6EC7] border-[#FF6EC7]/30 bg-[#FF6EC7]/10",
              "text-[#7B2FBE] border-[#7B2FBE]/30 bg-[#7B2FBE]/10",
            ];

            return (
              <GlassCard
                key={pillar.id}
                delay={idx * 0.1}
                className="group space-y-5 p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${accentColors[idx % accentColors.length]} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono text-[#E8F4F8]/40 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-[#00D4FF] mb-1">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-[#FAFBFC] group-hover:text-[#00FF87] transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#E8F4F8]/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8F4F8]/10 flex items-center justify-between text-xs font-mono text-[#00FF87]">
                  <span>YICMUN 2026 Core Feature</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
