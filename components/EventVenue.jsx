"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { EVENT_CONFIG } from "@/config/registration";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function EventVenue() {
  const venues = EVENT_CONFIG.venues || [];

  return (
    <section id="venue" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading using site theme */}
        <SectionHeading
          eyebrow="VENUE"
          title="Where It Happens"
          subtitle="Two prestigious locations. One unforgettable conference experience."
        />

        {/* 2-Column Venue Cards in Aurora Glass Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {venues.map((venue, idx) => (
            <GlassCard
              key={venue.name}
              delay={idx * 0.15}
              className="group flex flex-col justify-between items-center text-center p-8 sm:p-12 relative overflow-hidden min-h-[280px]"
            >
              {/* Date Header Badge */}
              <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A1628] border border-[#00D4FF]/30 text-xs font-mono text-[#00D4FF] tracking-wider uppercase mb-6">
                <MapPin className="w-3.5 h-3.5 text-[#00FF87]" />
                <span>{venue.dates}</span>
              </div>

              {/* Venue Name */}
              <div className="my-auto space-y-2">
                <h3 className="font-bold text-2xl sm:text-3xl text-[#FAFBFC] tracking-tight group-hover:text-[#00FF87] transition-colors duration-300">
                  {venue.name}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-[#E8F4F8]/75 leading-relaxed max-w-xs group-hover:text-[#FAFBFC] transition-colors">
                {venue.description}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* View Full Venue Details Button in Site Style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center pt-2"
        >
          <a
            href="#details"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-[#00FF87]/40 bg-[#0A1628]/80 text-[#00FF87] font-mono text-xs font-semibold tracking-wider uppercase hover:bg-[#00FF87]/10 hover:border-[#00FF87] hover:shadow-[0_0_25px_rgba(0,255,135,0.3)] transition-all duration-300 group"
          >
            <span>View Full Venue Details</span>
            <ArrowUpRight className="w-4 h-4 text-[#00FF87] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
