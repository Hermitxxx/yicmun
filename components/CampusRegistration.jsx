"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { Building2, CheckCircle2, Award, ShieldCheck } from "lucide-react";
import { EVENT_CONFIG } from "@/config/registration";

export default function CampusRegistration() {
  const campusFeatures = [
    "Group registration & delegation discounts for educational institutions",
    "Best Delegation trophy & institutional award recognition",
    "Faculty advisor & campus ambassador accreditation",
    "Priority committee assignment preferences for institutional delegations",
    "Exclusive institutional leadership networking opportunities",
  ];

  return (
    <section id="campus" className="py-20 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="relative p-8 sm:p-12 overflow-hidden border-[#00D4FF]/30">

          {/* Ambient Glow background */}
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.12)_0%,transparent_70%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Visual Badge */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-sm p-6 rounded-3xl bg-arctic-blue/90 border border-[#00D4FF]/30 text-center space-y-6 shadow-2xl relative">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-[#00D4FF]/20 to-[#7B2FBE]/20 border border-[#00D4FF]/40 flex items-center justify-center text-[#00D4FF] mx-auto">
                  <Building2 className="w-8 h-8 animate-pulse" />
                </div>

                <div className="space-y-1">
                  <span className="block text-2xl font-extrabold font-mono text-snow">
                    Campus Delegation
                  </span>
                  <span className="block text-xs font-mono text-[#00D4FF] uppercase">
                    Institutional Pass
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#050B1A] border border-frost-white/10 text-xs text-frost-white/70 space-y-2">
                  <div className="flex items-center gap-2 text-[#00D4FF] font-semibold">
                    <Award className="w-4 h-4" />
                    <span>Best Delegation Award Eligible</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#00FF87]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Official Institutional Recognition</span>
                  </div>
                </div>

                <p className="text-[11px] text-frost-white/50 italic">
                  Clicking register will open the official Campus Google Form in a new tab.
                </p>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-arctic-blue border border-[#00D4FF]/40 text-xs font-mono text-[#00D4FF] tracking-wider uppercase">
                <Building2 className="w-3.5 h-3.5" />
                <span>INSTITUTIONAL DELEGATIONS</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-snow">
                  Campus Registration
                </h2>
                <p className="text-sm font-mono text-[#FF6EC7]">
                  For Schools, Colleges, Universities & MUN Clubs
                </p>
              </div>

              <p className="text-base text-frost-white/80 leading-relaxed max-w-2xl">
                Bring your campus into the conversation. Register your institution and give students an opportunity to experience diplomacy, debate, leadership, and international collaboration.
              </p>

              <div className="space-y-2.5 pt-2">
                {campusFeatures.map((feat) => (
                  <div key={feat} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#00D4FF] shrink-0 mt-1" />
                    <span className="text-sm text-frost-white/90">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  href={EVENT_CONFIG.registrationLinks.campus}
                  external={true}
                  variant="accent"
                  size="lg"
                >
                  <Building2 className="w-5 h-5" />
                  <span>Register Your Campus</span>
                </Button>
              </div>

            </div>

          </div>
        </GlassCard>
      </div>
    </section>
  );
}
