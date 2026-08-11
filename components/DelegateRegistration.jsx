"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { UserCheck, CheckCircle2, Globe, Sparkles } from "lucide-react";
import { EVENT_CONFIG } from "@/config/registration";

export default function DelegateRegistration() {
  const features = [
    "Individual delegate representation in international committees",
    "Comprehensive study guide & background papers provided",
    "Certificate of participation & award eligibility",
    "Access to delegate social events & networking sessions",
    "Direct mentorship from seasoned executive board members",
  ];

  return (
    <section id="delegate" className="py-20 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="relative p-8 sm:p-12 overflow-hidden border-[#00FF87]/30">

          {/* Ambient Glow background */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(0,255,135,0.12)_0%,transparent_70%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-arctic-blue border border-[#00FF87]/40 text-xs font-mono text-[#00FF87] tracking-wider uppercase">
                <UserCheck className="w-3.5 h-3.5" />
                <span>INDIVIDUAL PARTICIPATION</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-snow">
                  Delegate Registration
                </h2>
                <p className="text-sm font-mono text-[#00D4FF]">
                  Early Bird Price: {EVENT_CONFIG.earlyBird.price} BDT
                </p>
              </div>

              <p className="text-base text-frost-white/80 leading-relaxed max-w-2xl">
                Step into the world of international diplomacy, represent a nation, engage in meaningful debate, and collaborate with fellow young leaders to address global challenges.
              </p>

              <div className="space-y-2.5 pt-2">
                {features.map((feat) => (
                  <div key={feat} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#00FF87] shrink-0 mt-1" />
                    <span className="text-sm text-frost-white/90">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  href={EVENT_CONFIG.registrationLinks.delegate}
                  external={true}
                  variant="primary"
                  size="lg"
                >
                  <UserCheck className="w-5 h-5" />
                  <span>Register as Delegate</span>
                </Button>
              </div>

            </div>

            {/* Right Badge Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm p-6 rounded-3xl bg-arctic-blue/90 border border-[#00FF87]/30 text-center space-y-6 shadow-2xl relative">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-[#00FF87]/20 to-[#00D4FF]/20 border border-[#00FF87]/40 flex items-center justify-center text-[#00FF87] mx-auto">
                  <Globe className="w-8 h-8 animate-pulse" />
                </div>

                <div className="space-y-1">
                  <span className="block text-2xl font-extrabold font-mono text-snow">
                    Delegate Pass
                  </span>
                  <span className="block text-xs font-mono text-[#00FF87] uppercase">
                    YICMUN 2026 Edition
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#050B1A] border border-frost-white/10 text-xs text-frost-white/70 space-y-1">
                  <div className="flex justify-between">
                    <span>Access:</span>
                    <span className="font-mono text-snow">Full 3 Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Includes:</span>
                    <span className="font-mono text-[#00D4FF]">Committees & Socials</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Form:</span>
                    <span className="font-mono text-[#00FF87]">Official Google Form</span>
                  </div>
                </div>

                <p className="text-[11px] text-frost-white/50 italic">
                  Clicking register will open the official Delegate Google Form in a new tab.
                </p>
              </div>
            </div>

          </div>
        </GlassCard>
      </div>
    </section>
  );
}
