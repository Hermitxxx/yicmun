# Youth International Council Model United Nations (YICMUN 2026)
## Complete Design System & Architectural Specification

---

## 1. Design Philosophy & Aesthetic Identity

The visual identity of **Youth International Council Model United Nations 2026 (YICMUN)** is built upon the theme:

> ### **Nordic Aurora / Arctic Diplomacy**
> **Motto:** *DEBATE. DIPLOMACY. DIRECTION.*

### Core Tenets
* **Atmospheric & Ethereal:** Immersive dark midnight canvas paired with dynamic northern-light (Aurora Borealis) ambient glow and tactical grid textures.
* **Institutional & Diplomatic:** Crisp typography, authoritative hierarchy, clean geometry, and high contrast suitable for premier international youth summits.
* **Conversion & Urgency Focused:** High-visibility Early Bird promotion and live real-time countdown designed to seamlessly funnel delegates and institutional campus delegations into dedicated Google Forms.
* **Fluid Micro-Interactions:** Custom spring physics and choreographed Framer Motion viewport triggers that reward user interaction without compromising performance or accessibility.

---

## 2. Color Palette & Token System

The design system operates on a dark foundational palette enriched with vibrant arctic and aurora accents.

### 2.1 Core Palette Tokens

| Token Name | Hex Code | Tailwind / CSS Variable | Semantic Usage |
| :--- | :--- | :--- | :--- |
| **Deep Midnight** | `#040817` / `#050B1A` | `--color-deep-midnight`, `--deep-midnight` | Primary page canvas background, deep foundation |
| **Arctic Blue** | `#0A1628` | `--color-arctic-blue`, `--arctic-blue` | Card backgrounds, badge surfaces, navigation pill |
| **Aurora Green** | `#00FF95` / `#00FF87` | `--color-aurora-green`, `--aurora-green` | Primary CTAs, active status indicators, success glow |
| **Ice Cyan** | `#00E5FF` / `#00D4FF` | `--color-ice-cyan`, `--ice-cyan` | Secondary accents, sub-headlines, links, borders |
| **Glacier Pink** | `#FF33B5` / `#FF6EC7` | `--color-glacier-pink`, `--glacier-pink` | Accent highlights, tertiary tags, urgency elements |
| **Violet Sky** | `#9D4EDD` / `#7B2FBE` | `--color-violet-sky`, `--violet-sky` | Aurora background gradients, accent glow sweeps |
| **Frost White** | `#E8F4F8` | `--color-frost-white`, `--frost-white` | Body copy, secondary labels, subtle borders |
| **Snow** | `#FAFBFC` | `--color-snow`, `--snow` | Primary headings, high-contrast titles, values |
| **Gold / Imperial** | `#E5C158` / `#F4D36D` | `--color-gold`, `--color-gold-light` | Diplomatic insignia, gold gradient text highlights |

---

### 2.2 Gradient & Effect Tokens

```css
/* Aurora Primary Gradient (Headings & Primary CTAs) */
linear-gradient(135deg, #FFFFFF 0%, #00FF95 40%, #00E5FF 100%)

/* Electric Accent Gradient */
linear-gradient(135deg, #00FF95 0%, #00E5FF 50%, #FF33B5 100%)

/* Pink Aurora Accent */
linear-gradient(135deg, #00FF95 0%, #FF33B5 100%)

/* Diplomatic Gold Gradient */
linear-gradient(135deg, #FFF0B2 0%, #E5C158 50%, #B88E28 100%)
```

---

### 2.3 Glow & Shadow Tokens

* **Aurora Green Glow:** `box-shadow: 0 0 30px rgba(0, 255, 149, 0.4)` / `text-shadow: 0 0 15px rgba(0, 255, 149, 0.6)`
* **Ice Cyan Glow:** `box-shadow: 0 0 30px rgba(0, 229, 255, 0.4)` / `text-shadow: 0 0 15px rgba(0, 229, 255, 0.6)`
* **Glacier Pink Glow:** `box-shadow: 0 0 35px rgba(255, 51, 181, 0.55)` / `filter: drop-shadow(0 0 15px rgba(255, 51, 181, 0.6))`
* **Glass Panel Depth:** `box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.45)`

---

## 3. Typography & Font System

The project incorporates Google Fonts loaded via `next/font/google` in `app/layout.js`.

```
┌────────────────────────────────────────────────────────┐
│                      TYPOGRAPHY                        │
├─────────────────────┬──────────────────────────────────┤
│ Primary Sans:       │ Montserrat (Clean & Modern)      │
│ Display Serif:      │ Cinzel / Cormorant Garamond      │
│ Technical & Mono:   │ JetBrains Mono (Dates/Counters)  │
└─────────────────────┴──────────────────────────────────┘
```

### 3.1 Font Stack Hierarchy

| Font Family | CSS Variable | Intended Application | Weights & Styles |
| :--- | :--- | :--- | :--- |
| **Montserrat** | `var(--font-montserrat)` | Body text, UI labels, buttons, navigation, headings | 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold) |
| **JetBrains Mono** | `var(--font-jetbrains-mono)` | Countdown numbers, dates, session tags, metadata, badges | 400, 600, 700, 800 |
| **Cinzel** | `var(--font-cinzel)` | Diplomatic emblems, institutional headers | 400, 600, 700 |
| **Cormorant Garamond**| `var(--font-cormorant)` | Editorial sub-quotes, motto flourishes | 400, 500, 600, 700 (Italic & Normal) |

---

### 3.2 Typographic Scale

| Level | Size (Mobile / Desktop) | Tracking | Line Height | Application |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | `text-6xl` to `text-9xl` (3.75rem – 8rem) | `tracking-widest` | `leading-none` | Hero "MUN" Title |
| **Section H1/H2** | `text-3xl` to `text-5xl` (1.875rem – 3rem) | `tracking-tight` | `leading-[1.15]` | Section Titles |
| **Card H3/H4** | `text-xl` to `text-2xl` (1.25rem – 1.5rem) | `tracking-tight` | `leading-snug` | Glass Card Titles |
| **Body (Base)** | `text-sm` to `text-base` (0.875rem – 1rem) | Normal | `leading-relaxed` | Paragraphs, descriptions |
| **Monospace Badges**| `text-xs` to `text-sm` (0.75rem – 0.875rem) | `tracking-[0.2em]` to `tracking-[0.3em]` | Normal | Eyebrows, Metadata, Dates |
| **Micro Labels** | `text-[10px]` to `text-[11px]` | `tracking-wider` | Normal | Timestamps, Footnotes |

---

## 4. Spacing, Layout & Container Architecture

### 4.1 Container Dimensions
* **Max Width (Global):** `max-w-7xl` (`1280px`) with responsive padding:
  * Mobile: `px-4` (`16px`)
  * Tablet: `px-6` (`24px`)
  * Desktop: `px-8` (`32px`)
* **Narrow Containers (Hero / Countdown / CTAs):** `max-w-4xl` (`896px`) to `max-w-5xl` (`1024px`)

### 4.2 Vertical Rhythm
* **Section Padding:** `py-20` (Mobile: `80px`) to `py-24` / `py-28` (Desktop: `96px – 112px`)
* **Section Gap Spacing:** `space-y-16` (`64px`)
* **Scroll Offset Anchor:** `scroll-mt-24` (`96px`) for sticky navbar compensation.

---

## 5. UI Components & Design Tokens

### 5.1 Glassmorphism Panel System (`.glass-panel`)
The glassmorphic visual language uses dark translucent layers with backdrop blur to create depth over the aurora canvas without reducing readability.

```css
/* Standard Glass Surface */
.glass-panel {
  background: rgba(10, 22, 45, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 255, 149, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.45);
}

/* Interactive Glass Surface (Hover States) */
.glass-panel-interactive {
  background: rgba(10, 22, 45, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 229, 255, 0.18);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass-panel-interactive:hover {
  background: rgba(10, 24, 50, 0.9);
  border-color: rgba(0, 255, 149, 0.5);
  box-shadow: 0 14px 45px -5px rgba(0, 255, 149, 0.25), 0 0 30px rgba(0, 229, 255, 0.2);
  transform: translateY(-4px);
}
```

---

### 5.2 Button System (`components/ui/Button.jsx`)

The button architecture provides three distinct semantic variants with high visual contrast and animated hover sweep lines.

```
┌────────────────────────────────────────────────────────┐
│                        BUTTONS                         │
├──────────────┬─────────────────────────────────────────┤
│ Primary:     │ Gradient (Green → Cyan), Dark Text      │
│ Secondary:   │ Arctic Dark Blue, Cyan Border           │
│ Accent:      │ Violet → Magenta → Green Gradient       │
└──────────────┴─────────────────────────────────────────┘
```

#### Variants Specification
1. **Primary (`variant="primary"`):**
   * Background: `bg-gradient-to-r from-[#00FF95] via-[#00E5FF] to-[#00FF95]`
   * Text: `#040817` (Dark Navy Bold)
   * Border: `#00FF95`
   * Shadow: `shadow-[0_0_30px_rgba(0,255,149,0.55)]`
   * Hover: Lift `y: -2px`, `scale: 1.03`, expanded glow `shadow-[0_0_40px_rgba(0,255,149,0.8)]`
2. **Secondary (`variant="secondary"`):**
   * Background: `#0C1A33`
   * Text: `#FAFBFC`
   * Border: `border-2 border-[#00E5FF]/60`
   * Hover: Border `#00FF95`, Background `#102447`, glow `shadow-[0_0_30px_rgba(0,229,255,0.45)]`
3. **Accent (`variant="accent"`):**
   * Background: `bg-gradient-to-r from-[#8B5CF6] via-[#FF33B5] to-[#00FF95]`
   * Text: `#FAFBFC`
   * Border: `border-[#FF33B5]/70`
   * Shadow: `shadow-[0_0_35px_rgba(255,51,181,0.55)]`

#### Sizes
* **Small (`sm`):** `text-xs px-4 py-2 gap-1.5`
* **Medium (`md`):** `text-sm px-6 py-3 gap-2.5`
* **Large (`lg`):** `text-base px-8 py-4 gap-3 font-semibold`

#### Micro-Interactions
* Built-in `ArrowUpRight` diagonal arrow that glides `+2px` on hover.
* Skewed white shine sweep across the button surface (`group-hover:translate-x-[300%]`).

---

### 5.3 Section Heading (`components/ui/SectionHeading.jsx`)
* **Pill Eyebrow:** Rounded pill container with pulsing green status dot (`animate-pulse`), monospace uppercase text, and green border.
* **Heading (`h2`):** Crisp white (`text-[#FAFBFC]`) with tight tracking and fluid responsive scaling.
* **Subtitle (`p`):** Frost white with 70% opacity (`text-[#E8F4F8]/70`), max-width 48rem (`max-w-3xl`) for optimal line reading length.

---

### 5.4 Countdown Units (`components/EarlyBirdCountdown.jsx`)
* **Unit Box:** `bg-[#0E1E38]`, border `border-aurora-green/40`, ambient glow on hover.
* **Digit Transition:** `AnimatePresence (mode="popLayout")` with slide-up entrance (`y: 20 -> 0`) and exit (`y: 0 -> -20`).
* **Timezone Specification:** Configured to Bangladesh Standard Time (UTC+06:00) with automatic expiration banner when the deadline is reached.

---

## 6. Environmental Background Layering

The visual foundation consists of 4 coordinated layers running in hardware-accelerated CSS and Framer Motion:

```
┌────────────────────────────────────────────────────────┐
│                 LAYER 4: CONTENT LAYER                 │ (Relative z-10)
├────────────────────────────────────────────────────────┤
│                 LAYER 3: POINTER GLOW                  │ (Mouse tracking)
├────────────────────────────────────────────────────────┤
│                 LAYER 2: STAR FIELD                    │ (45 twinkling stars)
├────────────────────────────────────────────────────────┤
│                 LAYER 1: AURORA WAVES & NOISE GRID     │ (Fixed z-0 background)
└────────────────────────────────────────────────────────┘
```

1. **Layer 1 — Aurora Canvas & Mesh (`AuroraBackground.jsx`):**
   * Three high-blur radial gradient blobs (`blur-[80px]` to `blur-[95px]`) continuously oscillating in subtle orbital loops (`duration: 16s - 22s`).
   * Color coordinates: Green/Cyan Top-Left, Violet/Magenta Top-Right, Cyan Center-Bottom.
   * Overlay: 40px grid pattern overlay (`.bg-grid-pattern`) in `mix-blend-overlay`.
2. **Layer 2 — Twinkling Star Field (`StarField.jsx`):**
   * 45 procedurally generated stars with randomized positions, opacities, sizes (1–3px), and staggered breathing cycles.
   * Rendered purely on the client side to eliminate SSR hydration mismatches.
3. **Layer 3 — Cursor Pointer Glow (`PointerGlow.jsx`):**
   * Desktop-only (`pointer: fine` media query check) spring-damped radial glow (`stiffness: 400, damping: 30`) following the mouse pointer.

---

## 7. Motion, Interaction & Easing Tokens

All animations utilize Framer Motion with custom cubic bezier curves and spring physics.

### 7.1 Easing Curves & Timing

```javascript
// Standard Fluid Ease Out
export const fluidEase = [0.16, 1, 0.3, 1];

// Stagger Container Preset
export const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

// Card / Element Entrance Preset
export const itemFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};
```

### 7.2 Viewport Trigger Rules
* All scroll-triggered cards and headings utilize `viewport={{ once: true, margin: "-50px" }}`.
* Animations trigger only on first entry to prevent distracting re-triggering during reading or reverse scrolling.

---

## 8. Accessibility & Performance Standards

1. **Reduced Motion (`prefers-reduced-motion`):**
   * Configured globally in `globals.css` to instantly truncate animation durations to `0.01ms` when requested by the operating system.
2. **Safe Hydration:**
   * Star fields and live timers avoid SSR hydration mismatch by initializing randomized coordinates and current epoch offsets only within client-side `useEffect` hooks.
3. **Contrast Compliance:**
   * High-contrast foreground elements (`#FAFBFC` and `#E8F4F8`) over deep backgrounds (`#040817` and `#0A1628`), meeting WCAG AA standards.
4. **Touch & Mobile Optimization:**
   * Hardware pointer listeners are restricted to mouse-enabled devices (`@media (pointer: fine)`).
   * All touch targets meet the minimum `44x44px` dimension standard.

