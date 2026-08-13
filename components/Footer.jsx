"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUp } from "lucide-react";
import Image from "next/image";
import { EVENT_CONFIG } from "@/config/registration";

// Clean inline SVG brand icons
const FacebookIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Key Dates", href: "#key-dates" },
    { name: "Venue", href: "#venue" },
    { name: "Early Bird Rate", href: "#early-bird" },
    { name: "Delegate Registration", href: "#delegate" },
    { name: "Campus Registration", href: "#campus" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/yicmun.official_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  ];

  return (
    <footer className="relative z-10 bg-[#03060F] border-t border-[#E8F4F8]/10 pt-16 pb-12 text-[#E8F4F8]/70 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-between">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A1628] border border-[#00FF87]/30 flex items-center justify-center p-1.5">
                <Image
                  src="/assets/yicmun-new-logo.jpeg"
                  alt="YICMUN Logo"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <span className="block font-bold text-base text-[#FAFBFC] tracking-tight">
                  Youth International Council MUN
                </span>
                <span className="block text-xs font-mono text-[#00FF87]">
                  {EVENT_CONFIG.shortDates} • {EVENT_CONFIG.location}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E8F4F8]/60 leading-relaxed max-w-md">
              Organized by Youth International Council. Empowering youth leaders through multilateral negotiation, debate excellence, and international diplomacy.
            </p>

            <div className="text-xs font-mono text-[#00D4FF] font-semibold">
              {EVENT_CONFIG.mottoText}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FAFBFC] font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#00FF87] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FAFBFC] font-semibold">
              Connect With Us
            </h4>

            <div className="space-y-2 text-xs text-[#E8F4F8]/70 font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00FF87]" />
                <span>yicmun.official@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00D4FF]" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    className="w-9 h-9 rounded-xl bg-[#0A1628] border border-[#E8F4F8]/15 flex items-center justify-center text-[#E8F4F8] hover:text-[#00FF87] hover:border-[#00FF87]/50 hover:scale-110 transition-all"
                    aria-label={s.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E8F4F8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#E8F4F8]/50">
          <p>© 2026 Youth International Council. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#00FF87] hover:text-[#FAFBFC] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
