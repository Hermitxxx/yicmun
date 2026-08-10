"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X, ArrowUpRight } from "lucide-react";
import { EVENT_CONFIG } from "@/config/registration";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#overview" },
    { name: "Early Bird", href: "#early-bird" },
    { name: "Highlights", href: "#highlights" },
    { name: "Delegate", href: "#delegate" },
    { name: "Campus", href: "#campus" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050B1A]/80 backdrop-blur-md border-b border-[#E8F4F8]/10 py-3.5 shadow-2xl shadow-black/40"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[#0A1628] border border-[#00FF87]/30 flex items-center justify-center text-[#00FF87] group-hover:border-[#00FF87] group-hover:shadow-[0_0_15px_rgba(0,255,135,0.3)] transition-all duration-300">
            <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div>
            <span className="block font-bold text-sm sm:text-base text-[#FAFBFC] tracking-tight group-hover:text-[#00FF87] transition-colors">
              YICMUN 2026
            </span>
            <span className="block text-[10px] font-mono text-[#E8F4F8]/60 uppercase tracking-widest -mt-0.5">
              Youth Int. Council
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0A1628]/60 backdrop-blur-md px-5 py-2 rounded-full border border-[#E8F4F8]/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-[#E8F4F8]/80 hover:text-[#00FF87] px-4 py-1.5 rounded-full transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#00FF87] rounded-full group-hover:w-1/2 transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#early-bird"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#00FF87] to-[#00D4FF] text-[#050B1A] hover:shadow-[0_0_20px_rgba(0,255,135,0.4)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-[#0A1628] border border-[#E8F4F8]/15 flex items-center justify-center text-[#E8F4F8] hover:text-[#00FF87] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#050B1A]/95 backdrop-blur-xl border-b border-[#E8F4F8]/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-medium text-[#E8F4F8]/90 hover:text-[#00FF87] px-3 py-2 rounded-lg hover:bg-[#0A1628] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#early-bird"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#00FF87] to-[#00D4FF] text-[#050B1A]"
                >
                  <span>Register Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
