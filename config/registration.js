/**
 * Youth International Council Model United Nations (YICMUN) Configuration
 */

export const EVENT_CONFIG = {
  name: "Youth International Council Model United Nations",
  shortName: "YICMUN 2026",
  session: "SESSION II · 2026",
  motto: ["DEBATE.", "DIPLOMACY.", "DIRECTION."],
  mottoText: "DEBATE. DIPLOMACY. DIRECTION.",
  dates: "25–27 September 2026",
  formattedDates: "25TH, 26TH & 27TH SEPTEMBER 2026",
  shortDates: "25–27 Sept 2026",
  location: "Dhaka, Bangladesh",
  venue: "To Be Announced (Dhaka)",
  organizer: "Youth International Council",

  // Early Bird Registration Details
  earlyBird: {
    price: "৳1,750",
    rawPrice: 1750,
    currency: "BDT",
    // Exact deadline: August 31, 2026 11:59:59 PM BST (UTC+06:00)
    deadlineISO: "2026-08-31T23:59:59+06:00",
    label: "EARLY BIRD REGISTRATION",
    badge: "Limited Time Offer",
    description: "Secure your seat at Youth International Council Model United Nations before the Early Bird window closes.",
  },

  // Conference Days Schedule Data (Matching Client Design)
  conferenceDays: [
    {
      dayNumber: "01",
      dayLabel: "DAY ONE",
      dateNumber: "18",
      monthYear: "JUNE 2026",
      description: "Opening Ceremony & Committee Sessions Begin",
    },
    {
      dayNumber: "02",
      dayLabel: "DAY TWO",
      dateNumber: "19",
      monthYear: "JUNE 2026",
      description: "Full Committee Debates & Delegate Social Night",
    },
    {
      dayNumber: "03",
      dayLabel: "DAY THREE",
      dateNumber: "20",
      monthYear: "JUNE 2026",
      description: "Resolution Voting & Closing Ceremony & Awards",
    },
  ],

  // Venue Data (Matching Client Design)
  venues: [
    {
      dates: "18TH - 19TH JUNE",
      name: "MASTERMIND DHANMONDI CAMPUS",
      description: "Opening ceremony and full committee sessions.",
      isPrimary: true,
    },
    {
      dates: "20TH JUNE",
      name: "Le MERIDIEN",
      description: "Closing ceremony, awards, and final moments.",
      isPrimary: false,
    },
  ],

  // Centralized Registration Form URLs
  registrationLinks: {
    // Official Google Forms (Can be updated anytime)
    delegate: process.env.NEXT_PUBLIC_DELEGATE_FORM_URL || "https://forms.google.com/delegate-registration",
    campus: process.env.NEXT_PUBLIC_CAMPUS_FORM_URL || "https://forms.google.com/campus-registration",
  },

  // Key Event Highlights / Pillars
  pillars: [
    {
      id: "diplomacy",
      title: "Global Diplomacy",
      subtitle: "Represent & Advocate",
      description: "Step into the shoes of global diplomats, represent international stances, and negotiate resolutions on urgent world issues.",
      iconName: "Globe",
    },
    {
      id: "debate",
      title: "High-Stakes Debate",
      subtitle: "Articulate & Persuade",
      description: "Hone your public speaking, parliamentary procedure, and persuasive argumentation against sharp young intellects.",
      iconName: "MessageSquareText",
    },
    {
      id: "leadership",
      title: "Youth Leadership",
      subtitle: "Collaborate & Lead",
      description: "Build alliances, craft consensus, and forge lifelong connections with aspiring leaders and global thinkers.",
      iconName: "Award",
    },
    {
      id: "committees",
      title: "Dynamic Committees",
      subtitle: "Simulate & Resolve",
      description: "Engage in crises, international bodies, and specialized councils tailored to diverse geopolitical challenges.",
      iconName: "Users",
    },
  ],

  // Event Details Grid
  details: [
    {
      label: "Event Dates",
      value: "18–20 June 2026",
      subtext: "3 Days of Intensive Simulation",
      icon: "Calendar",
    },
    {
      label: "Location",
      value: "Dhaka, Bangladesh",
      subtext: "Mastermind Campus & Le Méridien",
      icon: "MapPin",
    },
    {
      label: "Eligibility",
      value: "High School & University",
      subtext: "Delegates & Institutional Delegations",
      icon: "UserCheck",
    },
    {
      label: "Registration Status",
      value: "Early Bird Live",
      subtext: "Discounted ৳1,750 Slot Access",
      icon: "Sparkles",
    },
  ],
};
