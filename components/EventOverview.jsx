"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Shield, Target, Compass, Sparkles } from "lucide-react";

export default function EventOverview() {
  const cards = [
    {
      icon: Shield,
      title: "Diplomatic Representation",
      description: "Step into the role of official country delegates, articulating foreign policy and championing national interests on global committees.",
      color: "text-[#00FF87]",
      borderColor: "border-[#00FF87]/30",
    },
    {
      icon: Target,
      title: "Rigorous Debate",
      description: "Engage in structured parliamentary procedure, intense unmoderated caucuses, and critical resolution drafting.",
      color: "text-[#00D4FF]",
      borderColor: "border-[#00D4FF]/30",
    },
    {
      icon: Compass,
      title: "Strategic Leadership",
      description: "Form powerful bloc alliances, negotiate draft resolutions, and shape the direction of international policy.",
      color: "text-[#FF6EC7]",
      borderColor: "border-[#FF6EC7]/30",
    },
  ];

  return (
    <section id="overview" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="ABOUT YICMUN 2026"
          title="Where Young Leaders Shape Global Policy"
          subtitle="Youth International Council Model United Nations provides a premier platform for aspiring diplomats, debaters, and changemakers to engage with world issues."
        />

        {/* Asymmetric Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Story Panel */}
          <GlassCard className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00FF87] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Event Purpose & Vision</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#FAFBFC] leading-snug">
              Debate complex geopolitical crises. Draft actionable solutions. Lead with conviction.
            </h3>

            <p className="text-base text-[#E8F4F8]/80 leading-relaxed">
              Youth International Council Model United Nations is built on three uncompromising pillars: <strong className="text-[#00FF87]">Debate</strong>, <strong className="text-[#00D4FF]">Diplomacy</strong>, and <strong className="text-[#FF6EC7]">Direction</strong>. Over three intensive days from 25–27 September 2026, participants will experience high-calibre committee simulations designed to mirror real-world multilateral bodies.
            </p>

            <p className="text-base text-[#E8F4F8]/80 leading-relaxed">
              Whether you are an experienced delegate seeking top-tier committee competition or a first-time participant looking to refine your public speaking and negotiation skills, YICMUN provides the guidance, standard, and environment for excellence.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-[#E8F4F8]/10 font-mono text-xs text-[#E8F4F8]/70">
              <div>
                <span className="block text-[#00FF87] font-bold text-base">25–27 SEPT</span>
                <span>Conference Window</span>
              </div>
              <div>
                <span className="block text-[#00D4FF] font-bold text-base">DHAKA</span>
                <span>Host City, Bangladesh</span>
              </div>
            </div>
          </GlassCard>

          {/* Right Pillar Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            {cards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <GlassCard key={card.title} delay={idx * 0.15} className="group">
                  <div className="flex gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-[#0A1628] border ${card.borderColor} flex items-center justify-center ${card.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-[#FAFBFC] group-hover:text-[#00FF87] transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#E8F4F8]/70 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
