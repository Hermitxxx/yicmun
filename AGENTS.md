<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Youth International Council Model United Nations
## Complete Landing Page Plan

## 1. Project Overview

Build a premium, highly animated, responsive landing page for:

**Youth International Council Model United Nations**

**Event dates:** 25–27 September

**Motto:** **DEBATE. DIPLOMACY. DIRECTION**

The website is an event/campaign landing page for a non-profit organization (NGO).

### Primary goals

1. Introduce and promote the MUN event.
2. Communicate the event identity and purpose.
3. Create excitement around participation.
4. Highlight the limited-time Early Bird registration.
5. Provide information about participation.
6. Provide two separate registration paths.
7. Redirect users to the appropriate Google Form.

The website itself does **not** handle registration data.

---

## 2. Core User Flow

```text
User visits landing page
        ↓
Animated Hero
        ↓
Early Bird Countdown
        ↓
Event information
        ↓
Event highlights
        ↓
Registration options
        ↓
 ┌───────────────────────┐
 │                       │
 ▼                       ▼
Delegate Registration   Campus Registration
 │                       │
 ▼                       ▼
Google Form #1          Google Form #2
 │                       │
 ▼                       ▼
Google Sheets           Google Sheets
```

---

## 3. Registration Categories

### 3.1 Delegate Registration

For individual participants who want to participate in the Model United Nations event as delegates.

**Temporary description:**

> Step into the world of international diplomacy, represent a nation, engage in meaningful debate, and collaborate with fellow young leaders to address global challenges.

**CTA:** `Register as Delegate`

The button redirects to the official Delegate Google Form.

### 3.2 Campus Registration

For schools, colleges, universities, or educational institutions that want to register their campus or participate through a group of students.

**Temporary description:**

> Bring your campus into the conversation. Register your institution and give students an opportunity to experience diplomacy, debate, leadership, and international collaboration.

**CTA:** `Register Your Campus`

The button redirects to the official Campus Google Form.

---

## 4. Google Form / Data Architecture

No registration backend or database is required.

```text
Landing Page
      ↓
Google Form
      ↓
Google Form Submission
      ↓
Google Sheets
      ↓
Excel Export
```

Google Forms automatically stores responses in a connected Google Sheet.

The client should own:

- Google Forms
- Google Sheets
- Registration data

The developer only needs the final Google Form URLs.

---

## 5. Early Bird Registration

Early Bird registration is a major conversion feature.

**Price:** `৳1,750`

**Deadline:** End of August 2026

Use the exact configured deadline:

```text
August 31, 2026
11:59:59 PM
Bangladesh Standard Time (UTC+06:00)
```

The page should make this offer highly visible without making the website feel like an e-commerce sale page.

### Temporary messaging

**EARLY BIRD REGISTRATION**

**৳1,750**

> Secure your place at Youth International Council Model United Nations before the Early Bird window closes.

CTA:

**Register Now**

All copy is replaceable if the client provides official wording.

---

## 6. Early Bird Countdown

Create a live countdown timer to:

```text
2026-08-31T23:59:59+06:00
```

Do not hardcode remaining days/hours.

Example configuration:

```javascript
const EARLY_BIRD_DEADLINE = "2026-08-31T23:59:59+06:00";
```

### Display

```text
EARLY BIRD REGISTRATION

৳1,750

Early Bird closes in

[ DAYS ] [ HOURS ] [ MINUTES ] [ SECONDS ]

[ REGISTER NOW ]
```

### Behavior

The countdown must:

- Update every second.
- Show days, hours, minutes and seconds.
- Never display negative values.
- Stop when the deadline is reached.
- Show an expired state after the deadline.
- Respect Bangladesh Standard Time.

### Expired state

After the deadline, replace the active offer with:

**EARLY BIRD REGISTRATION CLOSED**

Do not continue presenting ৳1,750 as an active offer.

### Countdown animation

Initial:

- Fade in.
- Move upward.
- Stagger each time unit.

Value change:

- Old value exits upward.
- New value enters from below.
- Subtle scale transition.
- Seconds may use a tiny pulse.

Hover:

- Card lifts.
- Slight scale.
- Border/accent transition.

The animation should create urgency without becoming irritating.

---

## 7. Website Scope

### We are building

- Premium event landing page
- Responsive design
- Registration CTAs
- Google Form redirection
- Early Bird promotion
- Live countdown
- Nordic aurora visual identity
- Heavy Framer Motion animation
- Distinct hover effects
- Mobile experience
- Accessibility
- Performance-conscious visual effects

### We are NOT building

- Registration backend
- Database
- Authentication
- Admin dashboard
- Custom registration form
- Payment system
- Google Sheets API integration
- User dashboard

---

## 8. Technology Stack

- Next.js 16
- React
- JavaScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

Framer Motion is a **core requirement**, not an optional enhancement.

---

## 9. Design Direction

### Primary concept

**Nordic Aurora / Arctic Diplomacy**

Combine:

- Scandinavian minimalism
- Aurora borealis atmosphere
- Arctic darkness
- International diplomacy
- Youthful energy
- Premium event aesthetics

The result should feel:

- Ethereal
- Cold
- Majestic
- Sophisticated
- Institutional
- Modern
- Spacious
- Atmospheric
- Energetic through motion

It should not resemble:

- Generic SaaS
- AI startup landing pages
- Gaming websites
- Overly colorful festival pages
- Corporate banking pages

---

## 10. Visual Philosophy

Balance two characteristics.

### Minimalism

- Large negative space
- Restrained typography
- Strong hierarchy
- Clean grid
- Simple components
- Limited decorative elements

### Aurora atmosphere

- Northern-light inspired gradients
- Soft atmospheric light
- Frosted glass
- Star fields
- Ice/crystal textures
- Ethereal light waves
- Glacier reflections
- Subtle environmental motion

Aurora effects should feel atmospheric, not decorative clutter.

---

## 11. Color System

```text
Aurora Green  #00FF87
Arctic Blue   #0A1628
Frost White   #E8F4F8
Violet Sky    #7B2FBE
Ice Cyan      #00D4FF
Glacier Pink  #FF6EC7
Snow          #FAFBFC
Deep Midnight #050B1A
```

Deep Midnight should be the primary foundation.

Use Aurora Green, Ice Cyan, Violet Sky and Glacier Pink selectively for:

- Highlights
- Aurora effects
- Countdown emphasis
- Interactive states
- Decorative effects

Keep the overall interface dark and restrained.

---

## 12. Typography

### Primary font

Montserrat

### Display / Hero

- Weight 700
- Tight tracking
- Strong impact

### Body

- Weight 400
- 16px base
- 1.6 line-height
- Max width around 72ch

### UI labels

- 0.875rem
- Weight 500
- Slight letter spacing

### Monospace

JetBrains Mono for:

- Event dates
- Countdown metadata
- Small technical-style labels
- Decorative metadata

### Scale

```text
Hero: clamp(2.5rem, 5vw, 4rem)
H1: 2.25rem
H2: 1.5rem
Body: 1rem / 1.6
Small: 0.875rem
```

---

## 13. Layout System

Maximum container:

```text
1280px
```

Side padding:

```text
1.5rem
```

Primary layout:

```text
CSS Grid
```

Use asymmetric layouts and editorial compositions.

Avoid generic three-equal-column feature grids.

Base spacing:

```text
8px / 0.5rem
```

Section spacing:

```text
clamp(4rem, 8vw, 8rem)
```

---

## 14. Responsive Behavior

Primary breakpoint:

```text
768px
```

### Desktop

- Split layouts
- Asymmetric grids
- Atmospheric visuals
- Larger typography
- More complex motion
- Pointer effects where appropriate

### Mobile

- Single-column layouts
- Reduced decorative complexity
- Smaller typography
- Simplified background animation
- No pointer tracking
- Touch-friendly buttons
- No horizontal overflow

Mobile must still feel animated and premium.

---

# 15. Page Structure

Current foundation:

```text
1. Navigation
2. Hero
3. Early Bird Countdown
4. Event Introduction / Overview
5. Event Highlights / Key Information
6. Delegate Registration
7. Campus Registration
8. Event Information / Important Details
9. Final CTA
10. Footer
```

Additional sections may be added when official information is provided.

Possible future content:

- Venue
- Eligibility
- Committees
- Schedule
- Prizes
- Speakers
- Organizers
- Rules
- FAQs
- Contact information

Never invent official event information.

---

# 16. Navigation

Possible structure:

```text
Logo / Organization Name

About
Event
Registration

[ Register ]
```

Keep the navigation minimal.

### Entrance animation

- Fade in
- `y: -12px → 0`
- Stagger logo and links
- CTA enters last

### Scroll behavior

If sticky:

- Transparent → frosted dark surface
- Subtle backdrop blur
- Thin border
- Animate opacity/surface only
- 200–300ms transition

### Hover

Links:

- Animated accent underline
- Text color transition
- Optional 2px lift

CTA:

- Scale
- Lift
- Shadow
- Accent transition

---

# 17. Hero

Required content:

```text
Youth International Council Model United Nations

Model United Nations

25–27 September

DEBATE. DIPLOMACY. DIRECTION
```

Hero description is temporary.

### Desktop

```text
LEFT
Event metadata
Headline
Motto
Description
CTA

RIGHT
Aurora / atmospheric visual
```

### Mobile

```text
Event metadata
Headline
Motto
Description
CTA
Atmospheric visual
```

### Hero visuals

Use:

- Aurora light
- Star field
- Ethereal waves
- Frosted elements
- Atmospheric glow
- Metadata details

Avoid complex 3D unless later requested.

---

# 18. Hero Animation

The Hero should be one of the most heavily animated areas.

Sequence:

```text
Background
↓
Navigation
↓
Event metadata
↓
Headline
↓
Motto
↓
Description
↓
CTA
↓
Atmospheric visual
```

### Headline

- Fade
- Y translation
- Optional word/line stagger

### Motto

Animate:

```text
DEBATE.
DIPLOMACY.
DIRECTION.
```

as individual words/lines.

### CTA

- Fade
- Upward movement
- Scale `0.96 → 1`

### Aurora

Use slow continuous motion:

- Layered gradient movement
- Slow opacity breathing
- Different movement speeds for depth

The background must never compete with the text.

---

# 19. Hero Hover Effects

### Primary CTA

```text
scale: 1.03
y: -3px
```

Also use:

- Shadow lift
- Accent shift
- Optional subtle internal highlight

### Secondary CTA

- Background transition
- Border accent
- Text transition
- Slight lift

### Atmospheric visual

Optional desktop-only pointer movement of only a few pixels.

Disable if it affects performance.

---

# 20. Early Bird Section

This should visually interrupt the normal page rhythm and grab attention.

Recommended structure:

```text
EARLY BIRD REGISTRATION

৳1,750

Early Bird closes in

┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│ DAYS │ │ HOURS│ │ MIN  │ │ SEC  │
└──────┘ └──────┘ └──────┘ └──────┘

[ REGISTER NOW ]
```

Use:

- Frosted glass
- Aurora border
- Accent typography
- Countdown blocks
- Strong CTA
- Subtle animated indicator

Do not make it look like a discount advertisement.

---

# 21. Event Overview

Purpose:

Explain:

- What the MUN is
- Why it exists
- Who it is for
- What participants can expect

Temporary content can be used.

Layout:

```text
Text + Atmospheric Visual
```

### Animation

On scroll:

1. Label fades in.
2. Heading slides upward.
3. Paragraph staggers.
4. Visual fades/scales in.
5. Decorative aurora moves independently.

### Hover

If a card/visual exists:

- Border highlight
- Slight lift
- Internal light movement
- Small scale

---

# 22. Event Highlights

Potential information:

- Dates
- Duration
- Participation
- Diplomacy
- Debate
- Leadership

Use:

- Asymmetric cards
- Editorial layouts
- Timeline-style presentation
- Large typography
- Metadata blocks

Avoid a generic SaaS feature grid.

### Animation

Possible sequence:

```text
Section heading
↓
Large highlight
↓
Secondary information
↓
Supporting metadata
```

Use:

- Heading reveal
- Date/number reveal
- Card stagger
- Vertical line drawing
- Icon scale-in
- Background light movement

If using a timeline:

- Animate the line from 0% → 100%.
- Reveal each item as the line reaches it.

### Hover

Different elements can have different effects:

- Cards: lift + scale + border
- Icons: small rotate + scale
- Metadata: accent transition
- Timeline marker: expand + brighten

---

# 23. Delegate Registration

Heading:

**Delegate Registration**

Temporary description.

CTA:

**Register as Delegate**

URL:

```text
DELEGATE_GOOGLE_FORM_URL
```

Store the URL centrally.

### Visual

Use a prominent frosted glass panel.

Possible icon themes:

- Globe
- Diplomacy
- Debate
- Document

### Animation

On scroll:

1. Background light enters.
2. Panel fades in.
3. Panel moves `24px → 0`.
4. Icon enters.
5. Heading enters.
6. Description enters.
7. CTA enters last.

### Hover

Card:

```text
y: -6px
scale: 1.01–1.02
```

Icon:

```text
scale: 1.08
small rotation
```

CTA:

```text
scale: 1.03
lift
shadow
```

---

# 24. Campus Registration

Heading:

**Campus Registration**

Temporary description.

CTA:

**Register Your Campus**

URL:

```text
CAMPUS_GOOGLE_FORM_URL
```

### Layout

Use an alternate composition:

```text
Delegate:
Text left / visual right

Campus:
Visual left / text right
```

### Animation

- Fade
- Slide from opposite direction
- Staggered content
- Atmospheric motion
- Visual scale reveal

### Hover

- Card lift
- Slight scale
- Border transition
- Visual parallax
- CTA lift/scale
- Icon rotation/scale

---

# 25. Event Information / Details

Populate only with client-provided official information.

Potential areas:

- Dates
- Venue
- Eligibility
- Participation details
- Registration deadline
- Committees
- Schedule
- Requirements

### Animation

- Section reveal
- Metadata stagger
- Icon reveal
- Timeline/divider drawing
- Background motion

---

# 26. Final CTA

Temporary structure:

```text
Ready to take your seat at the table?

DEBATE. DIPLOMACY. DIRECTION.

[ Register as Delegate ]
[ Register Your Campus ]
```

This should be one of the most visually dramatic sections.

### Animation

```text
Background reveal
↓
Eyebrow
↓
Heading
↓
Motto
↓
Description
↓
Delegate CTA
↓
Campus CTA
```

Use:

- Large aurora background
- Slow moving light
- Heading reveal
- Motto word stagger
- Button stagger

### Hover

Primary:

- Scale 1.04
- Lift
- Shadow
- Accent shift

Secondary:

- Background fade
- Border accent
- Lift

---

# 27. Footer

Temporary content:

```text
Youth International Council
Model United Nations

DEBATE. DIPLOMACY. DIRECTION

About
Event
Delegate Registration
Campus Registration

Contact
Social Links

© 2026 Youth International Council
```

### Animation

On scroll:

- Fade in
- Upward movement
- Columns stagger
- Social icons enter individually
- Divider line draws

Social icons:

- `y: -3px`
- `scale: 1.08`
- Accent transition

---

# 28. Atmospheric Visual System

## Star Field

Very subtle points.

Possible motion:

- Slow opacity twinkle
- Slight movement if efficient

Avoid hundreds of expensive DOM nodes.

## Aurora Waves

Slow-moving gradient shapes.

Use:

- Horizontal/diagonal movement
- Slow scale
- Opacity breathing

## Frosted Glass

Use selectively:

- Dark translucent surface
- Thin border
- Backdrop blur
- Subtle highlight

Do not use glass everywhere.

## Ice Crystal Texture

Very subtle CSS/SVG/background asset.

## Ethereal Light Waves

Slow transform, opacity and rotation behind major sections.

## Glacier Reflection

Subtle reflection effect near major section boundaries if useful.

---

# 29. Background Layer System

Use:

```text
Layer 1 — Deep Midnight
Layer 2 — Star Field
Layer 3 — Aurora Gradients
Layer 4 — Light Waves
Layer 5 — Section-specific effects
```

Each layer should move at a different speed to create depth.

Avoid making the entire page look like one continuously moving gradient.

---

# 30. Optional Pointer Effects

Desktop-only optional enhancement:

- Very subtle radial light following pointer
- Small parallax movement on selected atmospheric elements
- No interference with clicks
- Disable on touch devices
- Disable if performance suffers

This is optional, not a requirement if it harms performance.

---

# 31. Global Hover System

Different UI elements should intentionally have different interactions.

### Buttons

- Scale
- Lift
- Shadow

### Navigation

- Underline
- Accent transition

### Cards

- Lift
- Border highlight
- Slight scale

### Icons

- Scale
- Small rotation

### Visuals

- Subtle scale
- Parallax

### Social icons

- Lift
- Scale
- Accent transition

Do not give every element the exact same hover animation.

---

# 32. Global Animation System

Framer Motion should use reusable variants.

### Standard entrance

```javascript
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
```

### Stagger

```javascript
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
```

### Global tokens

```text
Standard entrance:
opacity 0 → 1
y 16px → 0
duration 480ms

Strong entrance:
opacity 0 → 1
y 32px → 0
duration 650ms

Stagger:
80–120ms

Hover:
scale 1.02–1.04
y -2px to -5px
180–250ms

Spring:
stiffness 120
damping 20
```

---

# 33. Scroll Animation Strategy

Use Framer Motion viewport triggers.

Recommended:

```text
whileInView
viewport:
  once: true
  amount: 0.2–0.3
```

Most section entrances should play once.

Do not replay large animations every time the user slightly scrolls backward.

Continuous atmospheric effects should be separated from viewport-triggered animations.

---

# 34. Animation Hierarchy

Not every animation should have the same intensity.

Priority:

```text
Registration CTA
        ↓
Early Bird Countdown
        ↓
Hero
        ↓
Major section headings
        ↓
Registration cards
        ↓
Event highlights
        ↓
Navigation
        ↓
Footer
```

Strongest motion should guide attention toward the most important content.

---

# 35. Animation Philosophy

Heavy animation does **not** mean every element constantly moves.

Motion should create:

- Atmosphere
- Depth
- Energy
- Progression
- Premium quality
- Event excitement

Every major animation should serve at least one of:

1. **Guide attention**
2. **Create atmosphere**
3. **Increase engagement with the event/registration**

---

# 36. Accessibility

Include:

- Semantic HTML
- Correct heading hierarchy
- Accessible buttons/links
- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Alt text for meaningful images
- Decorative elements appropriately marked
- Reduced-motion support

The countdown should not aggressively announce every second to screen readers.

Google Form links should clearly communicate that they open an external registration form.

---

# 37. Reduced Motion

Support:

```text
prefers-reduced-motion
```

When enabled:

- Disable continuous background movement.
- Remove large transforms.
- Reduce stagger.
- Reduce scale effects.
- Keep only essential opacity transitions.
- Preserve functionality.

---

# 38. Performance

The page contains many animated effects, so performance is critical.

Rules:

- Avoid unnecessarily heavy libraries.
- Optimize images.
- Use CSS for simple effects where appropriate.
- Keep Framer Motion animations lightweight.
- Prefer `transform` and `opacity`.
- Avoid layout-triggering animations.
- Avoid excessive DOM elements for star fields.
- Avoid large video backgrounds unless requested.
- Lazy-load non-critical assets.
- Simplify effects on mobile.
- Avoid continuous pointer effects on low-power devices.
- Pause/simplify offscreen effects where practical.

---

# 39. Mobile Animation Strategy

Desktop:

- More atmospheric layers
- Pointer effects
- Larger parallax
- More complex hover interactions

Mobile:

- No pointer tracking
- Reduced parallax
- Reduced particle count
- Simpler aurora motion
- Touch-friendly interactions
- Faster/simple entrance animations

The mobile site should still retain the project's animation identity.

---

# 40. Component Architecture

Suggested structure:

```text
app/
│
├── layout.js
├── page.js
├── globals.css
│
components/
│
├── Navbar.jsx
├── Hero.jsx
├── EarlyBirdCountdown.jsx
├── EventOverview.jsx
├── EventHighlights.jsx
├── EventDetails.jsx
├── DelegateRegistration.jsx
├── CampusRegistration.jsx
├── FinalCTA.jsx
├── Footer.jsx
│
├── ui/
│   ├── Button.jsx
│   ├── GlassCard.jsx
│   ├── SectionHeading.jsx
│   └── CountdownUnit.jsx
│
└── effects/
    ├── AuroraBackground.jsx
    ├── StarField.jsx
    ├── LightWaves.jsx
    └── PointerGlow.jsx
```

This is a starting structure and can change with final complexity.

Do not over-componentize simple content.

---

# 41. Registration URL Configuration

Centralize the Google Form URLs.

Example:

```javascript
const registrationLinks = {
  delegate: "DELEGATE_GOOGLE_FORM_URL",
  campus: "CAMPUS_GOOGLE_FORM_URL",
};
```

Or:

```text
NEXT_PUBLIC_DELEGATE_FORM_URL=
NEXT_PUBLIC_CAMPUS_FORM_URL=
```

Actual URLs will be added later.

---

# 42. Google Form Behavior

Registration buttons should:

- Open the correct Google Form.
- Be clearly labeled.
- Use a real external link.
- Prefer a new tab if preserving the landing page is desirable.

Example:

```jsx
<a
  href={registrationLinks.delegate}
  target="_blank"
  rel="noopener noreferrer"
>
  Register as Delegate
</a>
```

Final behavior should be confirmed with the client.

---

# 43. Global CSS Foundation

Use:

```css
@import "tailwindcss";
@import "@heroui/styles";
```

Tailwind v4 theme variables should define the project's visual tokens.

The supplied sample CSS is only a reference. Do not copy its color system because it belongs to a different visual direction.

Base theme:

```text
Deep Midnight
Aurora Green
Arctic Blue
Frost White
Violet Sky
Ice Cyan
Glacier Pink
Snow
```

Global CSS should define:

- Typography
- Background
- Surface tokens
- Borders
- Buttons
- Cards
- Section headings
- Focus states
- Noise/texture effects
- Animation utility classes where useful
- Reduced-motion behavior

---

# 44. Design Rules

## DO

- Use generous whitespace.
- Use dark atmospheric backgrounds.
- Use subtle aurora effects.
- Use frosted glass selectively.
- Use asymmetric layouts.
- Use Montserrat.
- Use Lucide icons.
- Use Framer Motion heavily and intentionally.
- Animate every major section.
- Give interactive elements distinct hover states.
- Use responsive layouts.
- Use accessible focus states.
- Maintain strong visual hierarchy.
- Make Early Bird registration highly visible.
- Use motion to guide attention toward registration.

## DON'T

- No emojis in UI.
- No generic SaaS layout.
- No generic AI copy.
- No "Elevate".
- No "Seamless".
- No "Unleash".
- No "Next-Gen".
- No pure black.
- No excessive shadows.
- No excessive gradients inside content components.
- No three equal-width feature grids.
- No horizontal overflow.
- No `h-screen`.
- No excessive glow.
- No distracting animation.
- No fake event information.
- No fake registration details.
- No animation that blocks interaction.
- No animation that causes layout shifts.
- No unnecessary looping motion on every component.

---

# 45. Content Policy

Until official information is supplied, use placeholders only for:

- Hero description
- Event description
- Registration descriptions
- Footer description
- Contact details
- Social links
- Event-specific information

Do NOT invent:

- Venue
- Committee names
- Speakers
- Prizes
- Eligibility requirements
- Organizer names
- Sponsors
- Partners
- Official rules

Known Early Bird information:

```text
Price:
৳1,750

Deadline:
August 31, 2026

Time:
11:59:59 PM

Timezone:
UTC+06:00
```

Treat these as project facts unless the client changes them.

---

# 46. QA Checklist — Animation

Every major section:

- [ ] Initial entrance animation
- [ ] Scroll-triggered animation
- [ ] Hover interaction where applicable
- [ ] Mobile behavior
- [ ] Reduced-motion behavior
- [ ] No layout shift
- [ ] No flickering
- [ ] No excessive GPU usage
- [ ] No interaction blocking
- [ ] Offscreen animation handled appropriately

---

# 47. QA Checklist — Responsive

Test:

```text
Desktop:
1440px
1280px
1024px

Tablet:
834px
768px

Mobile:
430px
390px
375px
320px
```

Verify:

- [ ] No horizontal overflow
- [ ] No clipped text
- [ ] No oversized animation
- [ ] Buttons remain touch-friendly
- [ ] Countdown remains readable
- [ ] Registration CTAs remain prominent

---

# 48. Development Order

```text
1. Project foundation
        ↓
2. Install/configure dependencies
        ↓
3. Design tokens
        ↓
4. Global CSS
        ↓
5. Typography
        ↓
6. Layout/container system
        ↓
7. Reusable UI components
        ↓
8. Navigation
        ↓
9. Atmospheric background system
        ↓
10. Hero
        ↓
11. Early Bird countdown
        ↓
12. Event overview
        ↓
13. Event highlights
        ↓
14. Event details
        ↓
15. Delegate registration
        ↓
16. Campus registration
        ↓
17. Final CTA
        ↓
18. Footer
        ↓
19. Section animations
        ↓
20. Hover interactions
        ↓
21. Countdown edge cases
        ↓
22. Responsive optimization
        ↓
23. Accessibility
        ↓
24. Performance optimization
        ↓
25. Final visual polish
        ↓
26. Google Form URL integration
        ↓
27. Production build
        ↓
28. Deployment
```

---

# 49. Definition of Done

## Content

- [ ] Event branding correctly represented.
- [ ] 25–27 September clearly displayed.
- [ ] Motto prominently displayed.
- [ ] Delegate section exists.
- [ ] Campus section exists.
- [ ] Early Bird price of ৳1,750 displayed.
- [ ] Early Bird deadline configured correctly.
- [ ] Hero copy finalized.
- [ ] Footer copy finalized.
- [ ] Placeholder content replaced where required.

## Registration

- [ ] Delegate CTA opens correct Google Form.
- [ ] Campus CTA opens correct Google Form.
- [ ] Final CTA links work.
- [ ] All Google Form URLs verified.

## Animation

- [ ] Hero heavily animated.
- [ ] Early Bird countdown animated.
- [ ] Overview animated.
- [ ] Highlights staggered.
- [ ] Delegate section animated.
- [ ] Campus section animated.
- [ ] Details animated.
- [ ] Final CTA animated.
- [ ] Footer animated.
- [ ] Distinct hover effects implemented.
- [ ] No layout-shifting animations.
- [ ] Reduced-motion behavior works.

## Design

- [ ] Nordic aurora identity consistent.
- [ ] Dark atmospheric background polished.
- [ ] Typography consistent.
- [ ] Glass effects restrained.
- [ ] Accent colors intentional.
- [ ] No generic SaaS patterns.
- [ ] No excessive visual noise.

## Responsive

- [ ] Desktop polished.
- [ ] Tablet polished.
- [ ] Mobile polished.
- [ ] Countdown works on mobile.
- [ ] Buttons touch-friendly.
- [ ] No horizontal overflow.

## Accessibility

- [ ] Semantic HTML.
- [ ] Keyboard navigation.
- [ ] Visible focus states.
- [ ] Contrast acceptable.
- [ ] Reduced motion supported.
- [ ] Decorative elements handled correctly.

## Performance

- [ ] Production build succeeds.
- [ ] Assets optimized.
- [ ] Animations smooth.
- [ ] No unnecessary heavy effects.
- [ ] Mobile performance acceptable.

## Deployment

- [ ] Production deployment works.
- [ ] Domain connected if applicable.
- [ ] Google Form links work in production.
- [ ] Final client review completed.

---

# 50. Remaining Client Information

Still needed before the final implementation/content plan:

- Official logo
- Official organization description
- Exact event description
- Venue
- Target audience
- Eligibility
- Standard registration deadline
- Delegate registration details
- Campus registration details
- Committees
- Schedule
- Speakers
- Organizers
- Sponsors/partners
- Contact information
- Social media
- Official Google Form URLs
- Official Early Bird wording
- Whether ৳1,750 applies to delegates only or both categories
- What happens after Early Bird closes
- Official brand guidelines
- Reference websites/design preferences
- Official images/assets

Do not invent these details.

---

# 51. Final Project Vision

The finished website should feel like an **immersive digital entrance to an international youth diplomacy event**.

The visual experience should combine:

```text
Nordic Minimalism
        +
Aurora Atmosphere
        +
Diplomatic Sophistication
        +
Youthful Energy
        +
Strong Motion Design
        +
Clear Registration Flow
```

The animation should not exist merely to demonstrate Framer Motion.

Every major motion decision should serve at least one of:

1. **Guide attention**
2. **Create atmosphere**
3. **Increase engagement**
4. **Drive registration**

The final experience should be visually impressive enough to feel like a premium international event website while remaining clear, fast, accessible, and easy to register through.

