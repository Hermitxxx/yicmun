"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Calendar, MapPin, UserCheck, Sparkles, Clock, Check } from "lucide-react";
import { EVENT_CONFIG } from "@/config/registration";

export default function EventDetails() {
  const details = [
    {
      icon: Calendar,
      title: "Conference Dates",
      value: EVENT_CONFIG.dates,
      detail: "3-Day International Simulation",
      accent: "text-[#00FF87]",
    },
    {
      icon: MapPin,
      title: "Host City & Venue",
      value: EVENT_CONFIG.location,
      detail: EVENT_CONFIG.venue,
      accent: "text-[#00D4FF]",
    },
    {
      icon: UserCheck,
      title: "Eligibility",
      value: "High School & University",
      detail: "Delegates, Campuses & Observers",
      accent: "text-[#FF6EC7]",
    },
    {
      icon: Sparkles,
      title: "Early Bird Status",
      value: "৳1,750 BDT Rate Active",
      detail: `Closes ${EVENT_CONFIG.earlyBird.deadlineShort} BST`,
      accent: "text-[#00FF87]",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Choose Category",
      description: "Select whether you are registering as an individual delegate or as a campus delegation.",
    },
    {
      step: "02",
      title: "Fill Google Form",
      description: "Complete your preferences, committee choices, and contact info in the official form.",
    },
    {
      step: "03",
      title: "Receive Confirmation",
      description: "Get your official delegate allocation, study guides, and event schedule via email.",
    },
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        <SectionHeading
          eyebrow="EVENT DETAILS & STEPS"
          title="Important Information for Delegates"
          subtitle="Review key event metadata, location specifications, and your simple 3-step registration path."
        />

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((item, idx) => {
            const Icon = item.icon;
            return (
              <GlassCard key={item.title} delay={idx * 0.1} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl bg-arctic-blue border border-frost-white/15 flex items-center justify-center ${item.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-frost-white/40 uppercase tracking-widest">
                    Metadata
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-frost-white/60 uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-lg font-bold text-snow mt-0.5">
                    {item.value}
                  </p>
                  <p className="text-xs text-frost-white/70 mt-1">
                    {item.detail}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Simple 3-Step Guide */}
        <div className="pt-8 space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-snow">How Registration Works</h3>
            <p className="text-sm text-frost-white/70">Simple, streamlined registration via official forms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, idx) => (
              <GlassCard key={s.step} delay={idx * 0.15} className="space-y-3 relative">
                <span className="text-3xl font-extrabold font-mono text-[#00FF87]/30 block">
                  {s.step}
                </span>
                <h4 className="text-lg font-bold text-snow">{s.title}</h4>
                <p className="text-xs sm:text-sm text-frost-white/70 leading-relaxed">
                  {s.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
