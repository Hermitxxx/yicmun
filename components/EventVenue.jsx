"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { EVENT_CONFIG } from "@/config/registration";
import {
  MapPin,
  Building2,
  Calendar,
  Navigation,
  ExternalLink,
  ShieldCheck,
  Users,
  Compass,
  ArrowUpRight,
} from "lucide-react";

export default function EventVenue() {
  const venue = EVENT_CONFIG.venueInfo || {
    name: "Northern University Bangladesh",
    campus: "Permanent Campus",
    dates: "25–27 September 2026",
    daysBadge: "ALL 3 DAYS · 25TH, 26TH & 27TH SEPT",
    address: "111/2 Kawlar Jame Mosjid Road, Ashkona, Dakshinkhan, Dhaka-1230",
    landmark: "Near Hajj Camp & Hazrat Shahjalal International Airport",
    city: "Dhaka, Bangladesh",
    description:
      "Northern University Bangladesh, Permanent Campus serves as the official host venue for YICMUN 2026 across all three days, featuring modern auditoriums, plenary committee rooms, and conference facilities for high-level diplomatic debate.",
    mapsUrl: "https://maps.google.com/?q=Northern+University+Bangladesh+Permanent+Campus",
    highlights: [
      "Modern Multipurpose Auditoriums",
      "Executive Committee Rooms",
      "Spacious Delegate Lounges",
      "Secure & Accessible Campus",
    ],
  };

  const venueFeatures = [
    {
      icon: Building2,
      title: "State-of-the-Art Auditoriums",
      description: "Equipped for grand plenary sessions and keynote addresses.",
      accent: "text-[#00FF87]",
      border: "border-[#00FF87]/30",
    },
    {
      icon: Users,
      title: "Executive Committee Chambers",
      description: "Dedicated rooms designed for intense debate and draft resolutions.",
      accent: "text-[#00D4FF]",
      border: "border-[#00D4FF]/30",
    },
    {
      icon: Compass,
      title: "Strategic Dhaka Location",
      description: "Easily accessible near Ashkona and Hazrat Shahjalal International Airport.",
      accent: "text-[#FF6EC7]",
      border: "border-[#FF6EC7]/30",
    },
    {
      icon: ShieldCheck,
      title: "Dedicated Delegate Lounges",
      description: "Comfortable networking hubs, press rooms, and secretariat control.",
      accent: "text-[#00FF87]",
      border: "border-[#00FF87]/30",
    },
  ];

  return (
    <section id="venue" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="OFFICIAL VENUE"
          title="Where Diplomacy Happens"
          subtitle="Northern University Bangladesh, Permanent Campus is the official home for YICMUN 2026 across all three days."
        />

        {/* Single Official Venue Card */}
        <div className="max-w-4xl mx-auto">
          <GlassCard
            delay={0.15}
            className="group relative overflow-hidden p-8 sm:p-12 md:p-14 border border-[#00FF87]/30 hover:border-[#00FF87]/60 transition-all duration-500 shadow-2xl shadow-[#00FF87]/5"
          >
            {/* Background Holographic Shimmer Beam */}
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-1/2 bg-linear-to-r from-transparent via-[#00FF87]/10 to-transparent skew-x-12 pointer-events-none"
            />

            {/* Top Row: Date Badge & Confirmed Status */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-arctic-blue border border-[#00D4FF]/30 text-xs font-mono text-[#00D4FF] tracking-wider uppercase">
                <Calendar className="w-3.5 h-3.5 text-[#00D4FF]" />
                <span>{venue.daysBadge}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FF87]/10 border border-[#00FF87]/40 text-xs font-mono text-[#00FF87] tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4 text-[#00FF87]" />
                <span>CONFIRMED OFFICIAL VENUE</span>
              </div>
            </div>

            {/* Venue Name & Campus Title */}
            <div className="space-y-3 relative z-10 mb-6">
              <h3 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-snow tracking-tight group-hover:text-[#00FF87] transition-colors duration-300">
                {venue.name}
              </h3>
              <div className="inline-block relative">
                <p className="text-lg sm:text-xl font-mono text-[#00D4FF] font-semibold tracking-wide">
                  {venue.campus}
                </p>
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="h-0.5 mt-1 bg-linear-to-r from-[#00FF87] via-[#00D4FF] to-transparent"
                />
              </div>
            </div>

            {/* Address & Landmark Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-arctic-blue/80 border border-frost-white/10 space-y-2 mb-8 relative z-10">
              <div className="flex items-start gap-3 text-frost-white">
                <MapPin className="w-5 h-5 text-[#00FF87] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm sm:text-base font-semibold text-snow">
                    {venue.address}
                  </p>
                  <p className="text-xs sm:text-sm text-frost-white/60 font-mono mt-0.5">
                    Landmark: {venue.landmark}
                  </p>
                </div>
              </div>
            </div>

            {/* Venue Description */}
            <p className="text-sm sm:text-base text-frost-white/80 leading-relaxed relative z-10 mb-10">
              {venue.description}
            </p>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 mb-10">
              {venueFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-4 rounded-xl bg-[#050B1A]/60 border border-frost-white/10 hover:border-frost-white/20 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg bg-arctic-blue flex items-center justify-center ${feat.accent}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-snow">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-xs text-frost-white/65 pl-9.5">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions Row */}
            <div className="pt-6 border-t border-frost-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full border border-[#00D4FF]/40 bg-arctic-blue/90 text-[#00D4FF] font-mono text-xs font-semibold tracking-wider uppercase hover:bg-[#00D4FF]/10 hover:border-[#00D4FF] hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300"
              >
                <Navigation className="w-4 h-4 text-[#00D4FF]" />
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="#delegate"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-linear-to-r from-[#00FF87] to-[#00D4FF] text-[#050B1A] hover:shadow-[0_0_20px_rgba(0,255,135,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Register for Conference</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
