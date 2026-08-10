"use client";

import { motion } from "framer-motion";

export default function WorldMapBackground() {
  // Flight Arc Curves connecting key global diplomatic hubs
  const arcs = [
    { id: "center-east", path: "M 500 220 Q 610 160, 720 230", color: "#00FF95", delay: 0.2 },
    { id: "center-west", path: "M 500 220 Q 360 160, 230 150", color: "#00E5FF", delay: 0.6 },
    { id: "center-south", path: "M 500 220 Q 480 320, 530 350", color: "#FF33B5", delay: 1.0 },
    { id: "ny-geneva", path: "M 230 150 Q 360 80, 480 135", color: "#00FF95", delay: 0 },
    { id: "geneva-dhaka", path: "M 480 135 Q 600 110, 720 230", color: "#00E5FF", delay: 0.8 },
    { id: "dhaka-tokyo", path: "M 720 230 Q 800 170, 880 160", color: "#00FF95", delay: 1.6 },
    { id: "london-ny", path: "M 460 115 Q 340 90, 230 150", color: "#FF33B5", delay: 2.2 },
    { id: "brasilia-sa", path: "M 310 350 Q 420 400, 530 350", color: "#00E5FF", delay: 1.2 },
    { id: "sydney-dhaka", path: "M 840 370 Q 800 280, 720 230", color: "#9D4EDD", delay: 2.8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
      {/* Radial Mask & Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_15%,_#050B1A_80%)] z-10" />

      {/* Pure Detailed Animated SVG Tactical World Map */}
      <svg
        className="w-full h-full min-w-[1000px] max-w-[1500px] opacity-45 select-none"
        viewBox="0 0 1000 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Tactical Grid Pattern */}
          <pattern id="tactical-grid-detailed" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(0, 229, 255, 0.06)" strokeWidth="0.6" />
            <circle cx="30" cy="30" r="0.8" fill="rgba(0, 255, 149, 0.2)" />
          </pattern>

          {/* Glowing Stroke Gradients */}
          <linearGradient id="auroraStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FF95" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#9D4EDD" stopOpacity="0.4" />
          </linearGradient>

          {/* Animated Glow Filters */}
          <filter id="glow-light" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background Grid */}
        <rect width="1000" height="500" fill="url(#tactical-grid-detailed)" />

        {/* Tactical Coordinate Tick Marks Along Top & Bottom */}
        <g fill="rgba(0, 229, 255, 0.35)" fontSize="6" fontFamily="monospace">
          <text x="150" y="15">120°W</text>
          <text x="350" y="15">60°W</text>
          <text x="500" y="15">0°</text>
          <text x="650" y="15">60°E</text>
          <text x="850" y="15">120°E</text>

          <text x="150" y="490">120°W</text>
          <text x="350" y="490">60°W</text>
          <text x="500" y="490">0°</text>
          <text x="650" y="490">60°E</text>
          <text x="850" y="490">120°E</text>
        </g>

        {/* Latitude & Longitude Axis Lines */}
        <g stroke="rgba(0, 229, 255, 0.12)" strokeWidth="0.6" strokeDasharray="3 3">
          <line x1="0" y1="250" x2="1000" y2="250" /> {/* Equator */}
          <line x1="0" y1="160" x2="1000" y2="160" />
          <line x1="0" y1="340" x2="1000" y2="340" />
          <line x1="500" y1="0" x2="500" y2="500" />
          <line x1="250" y1="0" x2="250" y2="500" />
          <line x1="750" y1="0" x2="750" y2="500" />
        </g>

        {/* Detailed SVG Vector Continents & Landmasses with Subtle Breathing */}
        <motion.g
          animate={{ opacity: [0.55, 0.75, 0.55] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          fill="rgba(10, 24, 50, 0.65)"
          stroke="url(#auroraStroke)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        >
          {/* North America */}
          <path d="M 60 70 L 110 50 L 170 45 L 230 55 L 290 80 L 310 110 L 290 140 L 260 160 L 260 190 L 230 230 L 210 240 L 190 200 L 160 180 L 120 170 L 100 130 L 70 100 Z" />
          <path d="M 215 240 L 235 255 L 245 285 L 225 270 L 210 250 Z" />

          {/* South America */}
          <path d="M 245 285 L 275 280 L 320 300 L 345 340 L 335 390 L 305 440 L 285 460 L 270 430 L 270 370 L 250 330 L 240 300 Z" />

          {/* Greenland & Iceland */}
          <path d="M 310 35 L 370 25 L 400 45 L 380 85 L 340 95 L 315 70 Z" />
          <path d="M 430 80 L 450 75 L 455 85 L 435 90 Z" />

          {/* Europe */}
          <path d="M 460 75 L 490 60 L 515 50 L 530 70 L 515 100 L 485 100 Z" />
          <path d="M 450 105 L 470 95 L 475 115 L 455 120 Z" />
          <path d="M 470 120 L 520 115 L 560 125 L 565 155 L 515 160 L 475 150 L 465 130 Z" />

          {/* Africa & Madagascar */}
          <path d="M 450 165 L 550 160 L 585 190 L 575 250 L 545 320 L 515 370 L 490 370 L 465 310 L 440 250 L 430 200 Z" />
          <path d="M 585 330 L 600 325 L 595 365 L 580 370 Z" />

          {/* Asia & Japan */}
          <path d="M 565 125 L 650 105 L 750 90 L 870 95 L 895 125 L 865 165 L 790 170 L 730 180 L 650 165 L 575 155 Z" />
          <path d="M 560 165 L 615 170 L 625 210 L 585 235 L 565 210 Z" />
          <path d="M 685 185 L 745 190 L 755 255 L 715 285 L 675 235 Z" />
          <path d="M 745 175 L 845 170 L 865 210 L 835 255 L 775 250 L 745 210 Z" />
          <path d="M 870 150 L 885 140 L 890 180 L 875 190 Z" />
          <path d="M 785 260 L 845 265 L 865 295 L 815 310 L 775 285 Z" />

          {/* Australia & NZ */}
          <path d="M 780 330 L 865 320 L 895 360 L 875 415 L 805 425 L 765 385 Z" />
          <path d="M 915 410 L 930 405 L 935 440 L 920 445 Z" />
        </motion.g>

        {/* Detailed Geographical Region Labels */}
        <g fill="rgba(232, 244, 248, 0.45)" fontSize="7" fontFamily="monospace" letterSpacing="1">
          <text x="140" y="110">NORTH AMERICA</text>
          <text x="270" y="360">SOUTH AMERICA</text>
          <text x="475" y="135">EUROPE</text>
          <text x="485" y="240">AFRICA</text>
          <text x="730" y="130">RUSSIA</text>
          <text x="770" y="210">CHINA</text>
          <text x="700" y="230">INDIA</text>
          <text x="815" y="370">AUSTRALIA</text>
          <text x="335" y="65">GREENLAND</text>

          {/* Ocean Labels */}
          <text x="290" y="200" fill="rgba(0, 229, 255, 0.35)" fontSize="6" letterSpacing="2">NORTH ATLANTIC OCEAN</text>
          <text x="320" y="410" fill="rgba(0, 229, 255, 0.35)" fontSize="6" letterSpacing="2">SOUTH ATLANTIC OCEAN</text>
          <text x="640" y="340" fill="rgba(0, 229, 255, 0.35)" fontSize="6" letterSpacing="2">INDIAN OCEAN</text>
          <text x="80" y="300" fill="rgba(0, 229, 255, 0.35)" fontSize="6" letterSpacing="2">PACIFIC OCEAN</text>
        </g>

        {/* --- ANIMATED MAP RAYS / LIGHT BEAMS --- */}
        {/* Base Track Arcs */}
        <g stroke="rgba(0, 229, 255, 0.15)" strokeWidth="1" fill="none" strokeDasharray="3 3">
          {arcs.map((arc) => (
            <path key={`base-${arc.id}`} d={arc.path} />
          ))}
        </g>

        {/* Traveling Animated Glowing Rays */}
        <g fill="none" filter="url(#glow-light)">
          {arcs.map((arc) => (
            <motion.path
              key={`ray-${arc.id}`}
              d={arc.path}
              stroke={arc.color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="40 180"
              initial={{ strokeDashoffset: 220 }}
              animate={{ strokeDashoffset: -220 }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: arc.delay,
                ease: "linear",
              }}
            />
          ))}
        </g>

        {/* Glowing Radar Target Beacons */}
        {/* Hub 1: DHAKA (Primary HQ) */}
        <g transform="translate(720, 230)">
          {/* Animated Expanding Ripple */}
          <motion.circle
            r="16"
            fill="none"
            stroke="#00FF95"
            strokeWidth="1.5"
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
          />
          <circle r="14" fill="none" stroke="#00FF95" strokeWidth="1" strokeDasharray="3 3" />
          <circle r="4" fill="#00FF95" className="animate-pulse" />
          <line x1="-18" y1="0" x2="18" y2="0" stroke="#00FF95" strokeWidth="0.8" />
          <line x1="0" y1="-18" x2="0" y2="18" stroke="#00FF95" strokeWidth="0.8" />
          <text x="22" y="4" fill="#00FF95" fontSize="8" fontFamily="monospace" fontWeight="bold">
            DHAKA HQ [23°42'N 90°22'E]
          </text>
        </g>

        {/* Hub 2: NEW YORK (UN Headquarters) */}
        <g transform="translate(230, 150)">
          <motion.circle
            r="12"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="1.2"
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 2.8, repeat: Infinity, delay: 0.5, ease: "easeOut" }}
          />
          <circle r="8" fill="none" stroke="#00E5FF" strokeWidth="0.8" />
          <circle r="3" fill="#00E5FF" />
          <text x="15" y="4" fill="#00E5FF" fontSize="7" fontFamily="monospace">UN HQ [NEW YORK]</text>
        </g>

        {/* Hub 3: GENEVA */}
        <g transform="translate(480, 135)">
          <motion.circle
            r="12"
            fill="none"
            stroke="#FF33B5"
            strokeWidth="1.2"
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 3, repeat: Infinity, delay: 1, ease: "easeOut" }}
          />
          <circle r="9" fill="none" stroke="#FF33B5" strokeWidth="0.8" />
          <circle r="2.5" fill="#FF33B5" />
          <text x="14" y="4" fill="#FF33B5" fontSize="7" fontFamily="monospace">GENEVA [PALAIS DES NATIONS]</text>
        </g>

        {/* Hub 4: CENTRAL ORIGIN BEACON */}
        <g transform="translate(500, 220)">
          <motion.circle
            r="15"
            fill="none"
            stroke="#00FF95"
            strokeWidth="1.5"
            initial={{ scale: 0.4, opacity: 1 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
          <circle r="3" fill="#00FF95" className="animate-ping" />
        </g>

        {/* Outer Corner HUD Frame Brackets */}
        <g stroke="#00FF95" strokeWidth="1.2" opacity="0.6">
          <path d="M 25 55 L 25 25 L 55 25" />
          <path d="M 975 55 L 975 25 L 945 25" />
          <path d="M 25 445 L 25 475 L 55 475" />
          <path d="M 975 445 L 975 475 L 945 475" />
        </g>
      </svg>
    </div>
  );
}
