"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { UserCheck, Building2, Sparkles, Globe } from "lucide-react";
import { EVENT_CONFIG } from "@/config/registration";

export default function FinalCTA() {
  return (
    <section className="py-28 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-10 sm:p-16 glass-panel border border-[#00FF87]/40 text-center space-y-8 overflow-hidden shadow-[0_0_80px_rgba(0,255,135,0.15)]"
        >
          {/* Intense Moving Background Aurora Lights */}
          <div className="absolute inset-0 bg-linear-to-r from-[#00FF87]/10 via-[#7B2FBE]/20 to-[#00D4FF]/10 opacity-70 pointer-events-none" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full bg-[radial-gradient(circle,rgba(0,255,135,0.2)_0%,transparent_70%)] blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-arctic-blue border border-[#00FF87]/40 text-xs font-mono text-[#00FF87] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>YICMUN 2026 REGISTRATION IS OPEN</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-snow tracking-tight leading-[1.1]">
              Ready to take your seat at the table?
            </h2>

            <p className="text-xl sm:text-2xl font-extrabold font-mono tracking-widest text-[#00FF87]">
              DEBATE. DIPLOMACY. DIRECTION.
            </p>

            <p className="text-base sm:text-lg text-frost-white/80 leading-relaxed font-normal max-w-2xl mx-auto">
              Join delegates from across the region for three unforgettable days of diplomacy, debate, and youth leadership in Dhaka. Early Bird rate of ৳1,750 BDT available for a limited time.
            </p>

            {/* Dual CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={EVENT_CONFIG.registrationLinks.delegate}
                external={true}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <UserCheck className="w-5 h-5" />
                <span>Register as Delegate</span>
              </Button>

              <Button
                href={EVENT_CONFIG.registrationLinks.campus}
                external={true}
                variant="accent"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Building2 className="w-5 h-5" />
                <span>Register Your Campus</span>
              </Button>
            </div>

            <p className="text-xs font-mono text-frost-white/50 pt-2">
              Registration forms hosted securely via Google Forms • 25–27 September 2026
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
