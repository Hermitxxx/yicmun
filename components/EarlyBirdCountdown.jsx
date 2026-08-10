"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Tag, Sparkles, AlertCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { EVENT_CONFIG } from "@/config/registration";

export default function EarlyBirdCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date(EVENT_CONFIG.earlyBird.deadlineISO).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <section id="early-bird" className="py-20 relative z-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 sm:p-12 glass-panel border border-[#00FF87]/30 shadow-[0_0_50px_rgba(0,255,135,0.12)] overflow-hidden"
        >
          {/* Animated Background Aura Glow inside Card */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#00FF87]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#00D4FF]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center space-y-8">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1628] border border-[#00FF87]/40 text-xs font-mono text-[#00FF87] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>{EVENT_CONFIG.earlyBird.label}</span>
            </div>

            {/* Pricing Section */}
            <div className="space-y-2">
              {timeLeft.isExpired ? (
                <div className="inline-flex items-center gap-2 text-2xl sm:text-3xl font-extrabold text-[#FF6EC7] font-mono">
                  <AlertCircle className="w-6 h-6" />
                  <span>EARLY BIRD REGISTRATION CLOSED</span>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-mono text-[#FAFBFC] tracking-tight">
                      {EVENT_CONFIG.earlyBird.price}
                    </span>
                    <div className="text-left">
                      <span className="block text-xs font-mono text-[#00FF87] uppercase tracking-wider">
                        Special Rate
                      </span>
                      <span className="block text-xs text-[#E8F4F8]/50">Per Delegate</span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-[#E8F4F8]/70 max-w-xl mx-auto">
                    {EVENT_CONFIG.earlyBird.description}
                  </p>
                </>
              )}
            </div>

            {/* Live Countdown Timer Grid */}
            {!timeLeft.isExpired && (
              <div className="space-y-4 pt-2">
                <span className="block text-xs font-mono uppercase tracking-[0.2em] text-[#00D4FF]">
                  Early Bird Window Closes In
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {timeUnits.map((unit) => (
                    <div
                      key={unit.label}
                      className="p-4 sm:p-5 rounded-2xl bg-[#0A1628]/90 border border-[#E8F4F8]/15 hover:border-[#00FF87]/50 transition-all duration-300 shadow-lg"
                    >
                      <div className="h-12 sm:h-14 flex items-center justify-center overflow-hidden">
                        <AnimatePresence mode="popLayout">
                          <motion.span
                            key={mounted ? unit.value : 0}
                            initial={{ y: 20, opacity: 0, scale: 0.9 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: -20, opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="text-3xl sm:text-4xl font-extrabold font-mono text-[#00FF87] tracking-wider"
                          >
                            {mounted ? String(unit.value).padStart(2, "0") : "00"}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                      <span className="block text-[10px] sm:text-xs font-mono text-[#E8F4F8]/60 tracking-widest mt-1">
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="#delegate"
                external={false}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <span>Register Now</span>
              </Button>
              
              <Button
                href="#campus"
                external={false}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <span>Campus Registration</span>
              </Button>
            </div>

            {/* Timezone Note */}
            <p className="text-[11px] font-mono text-[#E8F4F8]/40">
              * Deadline: August 31, 2026 at 11:59:59 PM BST (UTC+06:00)
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
