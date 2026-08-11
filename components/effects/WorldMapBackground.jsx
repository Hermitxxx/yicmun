"use client";

import { motion } from "framer-motion";

export default function WorldMapBackground() {
  // Flight Arc Curves connecting key global diplomatic hubs
  // Canvas coordinate space: 1400 x 650
  const arcs = [
    { id: "dhaka-ny", path: "M 1016 254 Q 720 70, 441 203", color: "#00FF95", delay: 0 },
    { id: "dhaka-geneva", path: "M 1016 254 Q 860 160, 721 186", color: "#00E5FF", delay: 1.2 },
    { id: "ny-geneva", path: "M 441 203 Q 580 120, 721 186", color: "#00FF95", delay: 2.4 },
    { id: "geneva-nairobi", path: "M 721 186 Q 770 250, 829 329", color: "#FF33B5", delay: 3.6 },
    { id: "dhaka-tokyo", path: "M 1016 254 Q 1100 200, 1189 218", color: "#00FF95", delay: 4.8 },
    { id: "london-ny", path: "M 700 170 Q 560 110, 441 203", color: "#FF33B5", delay: 6.0 },
    { id: "brasilia-geneva", path: "M 532 374 Q 630 260, 721 186", color: "#00E5FF", delay: 1.8 },
    { id: "sydney-dhaka", path: "M 1229 432 Q 1120 330, 1016 254", color: "#9D4EDD", delay: 4.2 },
    { id: "vienna-nairobi", path: "M 757 180 Q 800 250, 829 329", color: "#00E5FF", delay: 5.4 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
      {/* Expanded Radial Mask & Dark Vignette Overlay for Edge-to-Edge Spread */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_#040817_90%)] z-10" />

      {/* High-Precision Tactical SVG World Map Canvas */}
      <svg
        className="w-full h-full min-w-[1200px] max-w-[1700px] opacity-50 select-none transition-opacity duration-700"
        viewBox="0 0 1400 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Dual-Tier Tactical Micro-Grid Pattern */}
          <pattern id="tactical-grid-detailed" width="45" height="45" patternUnits="userSpaceOnUse">
            <path d="M 45 0 L 0 0 0 45" fill="none" stroke="rgba(0, 229, 255, 0.04)" strokeWidth="0.5" />
            <circle cx="45" cy="45" r="0.75" fill="rgba(0, 255, 149, 0.18)" />
          </pattern>

          {/* Glowing Stroke Gradient for Coastlines */}
          <linearGradient id="auroraStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FF95" stopOpacity="0.7" />
            <stop offset="40%" stopColor="#00E5FF" stopOpacity="0.65" />
            <stop offset="80%" stopColor="#9D4EDD" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF33B5" stopOpacity="0.4" />
          </linearGradient>

          {/* Atmospheric Landmass Fill Gradient */}
          <linearGradient id="landmassFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0A1832" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#040D1F" stopOpacity="0.6" />
          </linearGradient>

          {/* Animated Ray Glow Filters */}
          <filter id="glow-light" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="beacon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Micro Tactical Grid Background */}
        <rect width="1400" height="650" fill="url(#tactical-grid-detailed)" />

        {/* --- LATITUDE & LONGITUDE GRATICULE SYSTEM --- */}
        {/* Longitude Meridians (Vertical lines every 30°) */}
        <g stroke="rgba(0, 229, 255, 0.08)" strokeWidth="0.6" strokeDasharray="3 3">
          <line x1="70" y1="40" x2="70" y2="610" />   {/* 180°W */}
          <line x1="175" y1="40" x2="175" y2="610" /> {/* 150°W */}
          <line x1="280" y1="40" x2="280" y2="610" /> {/* 120°W */}
          <line x1="385" y1="40" x2="385" y2="610" /> {/* 90°W */}
          <line x1="490" y1="40" x2="490" y2="610" /> {/* 60°W */}
          <line x1="595" y1="40" x2="595" y2="610" /> {/* 30°W */}
          <line x1="805" y1="40" x2="805" y2="610" /> {/* 30°E */}
          <line x1="910" y1="40" x2="910" y2="610" /> {/* 60°E */}
          <line x1="1015" y1="40" x2="1015" y2="610" /> {/* 90°E */}
          <line x1="1120" y1="40" x2="1120" y2="610" /> {/* 120°E */}
          <line x1="1225" y1="40" x2="1225" y2="610" /> {/* 150°E */}
          <line x1="1330" y1="40" x2="1330" y2="610" /> {/* 180°E */}
        </g>

        {/* Prime Meridian (0° Greenwich Axis) */}
        <line x1="700" y1="35" x2="700" y2="615" stroke="rgba(0, 255, 149, 0.22)" strokeWidth="0.8" strokeDasharray="5 3" />

        {/* Latitude Parallels (Horizontal lines) */}
        <g stroke="rgba(0, 229, 255, 0.08)" strokeWidth="0.6" strokeDasharray="3 3">
          <line x1="60" y1="95" x2="1340" y2="95" />   {/* 75°N Arctic Circle */}
          <line x1="60" y1="140" x2="1340" y2="140" /> {/* 60°N */}
          <line x1="60" y1="185" x2="1340" y2="185" /> {/* 45°N */}
          <line x1="60" y1="230" x2="1340" y2="230" /> {/* 30°N Tropic of Cancer */}
          <line x1="60" y1="278" x2="1340" y2="278" /> {/* 15°N */}
          <line x1="60" y1="372" x2="1340" y2="372" /> {/* 15°S */}
          <line x1="60" y1="420" x2="1340" y2="420" /> {/* 30°S Tropic of Capricorn */}
          <line x1="60" y1="465" x2="1340" y2="465" /> {/* 45°S */}
          <line x1="60" y1="510" x2="1340" y2="510" /> {/* 60°S */}
        </g>

        {/* Equator (0° Axis) */}
        <line x1="50" y1="325" x2="1350" y2="325" stroke="rgba(0, 229, 255, 0.28)" strokeWidth="1" strokeDasharray="6 4" />

        {/* Longitude Coordinate Ticks Along Top & Bottom Margins */}
        <g fill="rgba(0, 229, 255, 0.4)" fontSize="7" fontFamily="monospace" textAnchor="middle">
          <text x="70" y="25">180°W</text>
          <text x="175" y="25">150°W</text>
          <text x="280" y="25">120°W</text>
          <text x="385" y="25">90°W</text>
          <text x="490" y="25">60°W</text>
          <text x="595" y="25">30°W</text>
          <text x="700" y="25" fill="rgba(0, 255, 149, 0.65)" fontWeight="bold">0° PRIME MERIDIAN</text>
          <text x="805" y="25">30°E</text>
          <text x="910" y="25">60°E</text>
          <text x="1015" y="25">90°E</text>
          <text x="1120" y="25">120°E</text>
          <text x="1225" y="25">150°E</text>
          <text x="1330" y="25">180°E</text>

          <text x="70" y="635">180°W</text>
          <text x="175" y="635">150°W</text>
          <text x="280" y="635">120°W</text>
          <text x="385" y="635">90°W</text>
          <text x="490" y="635">60°W</text>
          <text x="595" y="635">30°W</text>
          <text x="700" y="635" fill="rgba(0, 255, 149, 0.65)" fontWeight="bold">0° GREENWICH</text>
          <text x="805" y="635">30°E</text>
          <text x="910" y="635">60°E</text>
          <text x="1015" y="635">90°E</text>
          <text x="1120" y="635">120°E</text>
          <text x="1225" y="635">150°E</text>
          <text x="1330" y="635">180°E</text>
        </g>

        {/* Latitude Labels Along Left & Right Boundaries */}
        <g fill="rgba(0, 229, 255, 0.35)" fontSize="6.5" fontFamily="monospace">
          <text x="15" y="98">75°N</text>
          <text x="15" y="143">60°N</text>
          <text x="15" y="188">45°N</text>
          <text x="15" y="233">30°N</text>
          <text x="15" y="328" fill="rgba(0, 229, 255, 0.7)" fontWeight="bold">0° EQUATOR</text>
          <text x="15" y="423">30°S</text>
          <text x="15" y="468">45°S</text>
          <text x="15" y="513">60°S</text>

          <text x="1350" y="98">75°N</text>
          <text x="1350" y="143">60°N</text>
          <text x="1350" y="188">45°N</text>
          <text x="1350" y="233">30°N</text>
          <text x="1350" y="328" fill="rgba(0, 229, 255, 0.7)" fontWeight="bold">0° EQUATOR</text>
          <text x="1350" y="423">30°S</text>
          <text x="1350" y="468">45°S</text>
          <text x="1350" y="513">60°S</text>
        </g>

        {/* --- HIGH-DETAIL CONTINENTS & ISLAND MASSES --- */}
        <motion.g
          animate={{ opacity: [0.65, 0.85, 0.65] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          fill="url(#landmassFill)"
          stroke="url(#auroraStroke)"
          strokeWidth="1.1"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          {/* North America & Arctic Archipelago */}
          <path d="M 95 105 L 125 90 L 155 85 L 195 80 L 235 75 L 285 70 L 335 65 L 385 70 L 435 85 L 475 105 L 465 135 L 435 155 L 445 185 L 475 205 L 465 245 L 435 285 L 415 315 L 395 325 L 375 305 L 355 275 L 315 265 L 285 245 L 265 215 L 235 205 L 195 195 L 165 175 L 135 165 L 115 145 Z" />
          <path d="M 415 315 L 435 325 L 455 345 L 445 355 L 425 345 Z" />

          {/* Greenland & Baffin / Iceland */}
          <path d="M 505 55 L 565 45 L 615 65 L 595 115 L 545 125 L 515 95 Z" />
          <path d="M 645 125 L 675 120 L 685 135 L 655 140 Z" />

          {/* South America */}
          <path d="M 455 345 L 495 335 L 545 345 L 585 365 L 615 405 L 605 455 L 565 515 L 535 555 L 515 565 L 495 535 L 495 475 L 485 415 L 465 375 Z" />

          {/* Europe & Scandinavia & British Isles */}
          <path d="M 725 95 L 765 85 L 805 95 L 815 125 L 785 155 L 745 155 L 725 125 Z" />
          <path d="M 675 155 L 705 145 L 715 165 L 685 185 Z" />
          <path d="M 665 165 L 680 160 L 685 175 L 670 180 Z" strokeWidth="0.8" />
          <path d="M 695 175 L 745 165 L 795 175 L 815 215 L 765 245 L 715 235 L 685 205 Z" />

          {/* Africa & Arabia */}
          <path d="M 665 245 L 795 235 L 855 265 L 865 315 L 845 375 L 805 445 L 775 495 L 745 495 L 715 425 L 685 355 L 645 305 Z" />
          <path d="M 835 415 L 865 405 L 855 465 L 835 475 Z" />
          <path d="M 795 245 L 855 235 L 885 265 L 855 295 L 815 285 Z" />

          {/* Asia & Russian Northern Frontier */}
          <path d="M 815 175 L 915 145 L 1035 125 L 1155 135 L 1265 145 L 1285 185 L 1225 215 L 1145 215 L 1075 225 L 985 215 L 895 195 Z" />
          
          {/* Indian Subcontinent & Bay of Bengal / Dhaka Region */}
          <path d="M 915 225 L 985 225 L 1035 255 L 1015 315 L 975 335 L 945 295 L 915 265 Z" />
          <path d="M 980 340 L 995 335 L 990 355 L 975 350 Z" strokeWidth="0.8" />

          {/* Southeast Asia & Indochina */}
          <path d="M 1035 255 L 1115 255 L 1135 295 L 1095 335 L 1055 315 Z" />

          {/* China & Korea & East Asian Coast */}
          <path d="M 1075 215 L 1195 215 L 1215 255 L 1165 285 L 1105 275 Z" />

          {/* Island Archipelagos: Japan, Philippines, Indonesia */}
          <path d="M 1215 185 L 1235 175 L 1245 215 L 1225 235 Z" strokeWidth="0.9" /> {/* Japan */}
          <path d="M 1145 295 L 1165 290 L 1160 335 L 1140 330 Z" strokeWidth="0.8" /> {/* Philippines */}
          <path d="M 1065 345 L 1115 340 L 1145 355 L 1095 365 Z" strokeWidth="0.8" /> {/* Sumatra/Java */}
          <path d="M 1135 335 L 1185 330 L 1195 365 L 1145 360 Z" strokeWidth="0.8" /> {/* Borneo/Celebes */}
          <path d="M 1205 345 L 1265 340 L 1275 365 L 1215 370 Z" strokeWidth="0.8" /> {/* Papua New Guinea */}

          {/* Australia & New Zealand */}
          <path d="M 1145 425 L 1255 415 L 1285 455 L 1265 525 L 1185 535 L 1135 485 Z" />
          <path d="M 1215 545 L 1235 540 L 1230 560 L 1210 560 Z" strokeWidth="0.8" /> {/* Tasmania */}
          <path d="M 1305 505 L 1325 495 L 1335 555 L 1315 565 Z" strokeWidth="0.8" /> {/* New Zealand */}

          {/* Antarctica Margin */}
          <path d="M 100 605 L 300 595 L 500 600 L 700 590 L 900 600 L 1100 595 L 1300 605 L 1300 625 L 100 625 Z" opacity="0.5" />
        </motion.g>

        {/* Detailed Geographical Region Labels */}
        <g fill="rgba(232, 244, 248, 0.4)" fontSize="7.5" fontFamily="monospace" letterSpacing="1.2">
          <text x="240" y="160">NORTH AMERICA</text>
          <text x="510" y="440">SOUTH AMERICA</text>
          <text x="730" y="195">EUROPE</text>
          <text x="730" y="340">AFRICA</text>
          <text x="1050" y="170">ASIA</text>
          <text x="965" y="275">INDIA</text>
          <text x="1190" y="475">AUSTRALIA</text>
          <text x="530" y="85">GREENLAND</text>

          {/* Ocean Labels in Subtle Ice Cyan */}
          <text x="440" y="240" fill="rgba(0, 229, 255, 0.3)" fontSize="6.5" letterSpacing="2.5">NORTH ATLANTIC OCEAN</text>
          <text x="490" y="490" fill="rgba(0, 229, 255, 0.3)" fontSize="6.5" letterSpacing="2.5">SOUTH ATLANTIC OCEAN</text>
          <text x="890" y="410" fill="rgba(0, 229, 255, 0.3)" fontSize="6.5" letterSpacing="2.5">INDIAN OCEAN</text>
          <text x="120" y="360" fill="rgba(0, 229, 255, 0.3)" fontSize="6.5" letterSpacing="2.5">PACIFIC OCEAN</text>
        </g>

        {/* --- ANIMATED FLIGHT ARCS & LIGHT RAYS --- */}
        {/* Base Track Lines */}
        <g stroke="rgba(0, 229, 255, 0.15)" strokeWidth="1" fill="none" strokeDasharray="3 3">
          {arcs.map((arc) => (
            <path key={`base-${arc.id}`} d={arc.path} />
          ))}
        </g>

        {/* Traveling Glowing Light Rays - Single Subtle Pulse Per Line */}
        <g fill="none" filter="url(#glow-light)">
          {arcs.map((arc) => (
            <motion.path
              key={`ray-${arc.id}`}
              d={arc.path}
              stroke={arc.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="40 1000"
              initial={{ strokeDashoffset: 1000 }}
              animate={{ strokeDashoffset: -1000 }}
              transition={{
                duration: 7,
                repeat: Infinity,
                delay: arc.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </g>

        {/* --- TACTICAL BEACONS & DIPLOMATIC HUBS --- */}

        {/* Primary Hub: DHAKA HQ (Host HQ) */}
        <g transform="translate(1016, 254)">
          {/* Breathing Ripple */}
          <motion.circle
            r="16"
            fill="none"
            stroke="#00FF95"
            strokeWidth="1.2"
            animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle r="4" fill="#00FF95" className="animate-pulse" filter="url(#beacon-glow)" />
          <line x1="-16" y1="0" x2="16" y2="0" stroke="#00FF95" strokeWidth="0.8" />
          <line x1="0" y1="-16" x2="0" y2="16" stroke="#00FF95" strokeWidth="0.8" />

          {/* Informative Badge */}
          <rect x="20" y="-18" width="135" height="26" rx="4" fill="rgba(4, 12, 28, 0.85)" stroke="#00FF95" strokeWidth="0.8" />
          <text x="26" y="-6" fill="#00FF95" fontSize="8" fontFamily="monospace" fontWeight="bold">
            DHAKA [HOST HQ]
          </text>
          <text x="26" y="4" fill="rgba(0, 255, 149, 0.75)" fontSize="6.5" fontFamily="monospace">
            23.8°N 90.4°E | UTC+6
          </text>
        </g>

        {/* 2. Primary UN Hub: NEW YORK UN HQ */}
        <g transform="translate(441, 203)">
          <motion.circle
            r="3.5"
            fill="#00E5FF"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          <circle r="8" fill="none" stroke="#00E5FF" strokeWidth="0.8" strokeDasharray="2 2" />

          <rect x="-140" y="-18" width="130" height="26" rx="4" fill="rgba(4, 12, 28, 0.85)" stroke="#00E5FF" strokeWidth="0.8" />
          <text x="-134" y="-6" fill="#00E5FF" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
            NEW YORK [UN HQ]
          </text>
          <text x="-134" y="4" fill="rgba(0, 229, 255, 0.75)" fontSize="6.5" fontFamily="monospace">
            40.7°N 74.0°W | UTC-5
          </text>
        </g>

        {/* 3. Primary European UN Hub: GENEVA (Node Pin Only) */}
        <g transform="translate(721, 186)">
          <motion.circle
            r="3.5"
            fill="#FF33B5"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: 0.5 }}
          />
          <circle r="8" fill="none" stroke="#FF33B5" strokeWidth="0.8" strokeDasharray="2 2" />
        </g>

        {/* 4. Secondary UN Hub: NAIROBI UNEP HQ */}
        <g transform="translate(829, 329)">
          <circle r="3" fill="#00FF95" />
          <rect x="12" y="-12" width="115" height="20" rx="3" fill="rgba(4, 12, 28, 0.75)" stroke="rgba(0, 255, 149, 0.4)" strokeWidth="0.6" />
          <text x="16" y="-2" fill="#00FF95" fontSize="7" fontFamily="monospace" fontWeight="bold">
            NAIROBI [UNEP HQ]
          </text>
          <text x="16" y="5" fill="rgba(0, 255, 149, 0.65)" fontSize="6" fontFamily="monospace">
            1.3°S 36.8°E | UTC+3
          </text>
        </g>

        {/* 5. Secondary UN Hub: TOKYO UNU HQ */}
        <g transform="translate(1189, 218)">
          <circle r="3" fill="#00E5FF" />
          <rect x="-115" y="-12" width="108" height="20" rx="3" fill="rgba(4, 12, 28, 0.75)" stroke="rgba(0, 229, 255, 0.4)" strokeWidth="0.6" />
          <text x="-110" y="-2" fill="#00E5FF" fontSize="7" fontFamily="monospace" fontWeight="bold">
            TOKYO [UNU HQ]
          </text>
          <text x="-110" y="5" fill="rgba(0, 229, 255, 0.65)" fontSize="6" fontFamily="monospace">
            35.7°N 139.7°E | UTC+9
          </text>
        </g>

        {/* 6. Secondary UN Hub: VIENNA */}
        <g transform="translate(757, 145)">
          <circle r="2.5" fill="#00E5FF" />
          <rect x="-105" y="-10" width="100" height="18" rx="3" fill="rgba(4, 12, 28, 0.75)" stroke="rgba(0, 229, 255, 0.3)" strokeWidth="0.6" />
          <text x="-100" y="-1" fill="#00E5FF" fontSize="6.5" fontFamily="monospace" fontWeight="bold">
            VIENNA [UN OFFICE]
          </text>
          <text x="-100" y="5" fill="rgba(0, 229, 255, 0.6)" fontSize="5.5" fontFamily="monospace">
            48.2°N 16.3°E | UTC+1
          </text>
        </g>

        {/* --- INFORMATIVE HUD CORNER TELEMETRY BARS --- */}
        <g fill="rgba(0, 255, 149, 0.6)" fontSize="7" fontFamily="monospace">
          <text x="35" y="48">GLOBAL DIPLOMACY MATRIX • SESSION 2026</text>
          <text x="1365" y="48" textAnchor="end" fill="rgba(0, 229, 255, 0.6)">COUNCIL COVERAGE: 6 CONTINENTS</text>

          <text x="35" y="605" fill="rgba(232, 244, 248, 0.5)">STATUS: REGISTRATION OPEN • DELEGATE & CAMPUS TRACKS</text>
          <text x="1365" y="605" textAnchor="end" fill="rgba(232, 244, 248, 0.5)">YICMUN OFFICIAL DIPLOMATIC MAP</text>
        </g>

        {/* Outer Corner HUD Framing Brackets */}
        <g stroke="#00FF95" strokeWidth="1.2" opacity="0.55">
          <path d="M 30 65 L 30 35 L 65 35" />
          <path d="M 1370 65 L 1370 35 L 1335 35" />
          <path d="M 30 585 L 30 615 L 65 615" />
          <path d="M 1370 585 L 1370 615 L 1335 615" />
        </g>
      </svg>
    </div>
  );
}



