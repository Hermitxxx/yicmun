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
  venue: "Northern University Bangladesh, Permanent Campus",
  organizer: "Youth International Council",

  // Registration Fee Details
  fee: {
    price: "৳1,500",
    delegatePrice: "৳1,500",
    campusPrice: "৳1,500",
    rawPrice: 1500,
    currency: "BDT",
    label: "REGISTRATION FEE",
    description: "Registration fee of ৳1,500 BDT for Delegates and Campus Ambassadors.",
  },

  // Conference Days Schedule Data (Matching Client Design)
  conferenceDays: [
    {
      dayNumber: "01",
      dayLabel: "DAY ONE",
      dateNumber: "25",
      monthYear: "SEPTEMBER 2026",
      description: "",
    },
    {
      dayNumber: "02",
      dayLabel: "DAY TWO",
      dateNumber: "26",
      monthYear: "SEPTEMBER 2026",
      description: "",
    },
    {
      dayNumber: "03",
      dayLabel: "DAY THREE",
      dateNumber: "27",
      monthYear: "SEPTEMBER 2026",
      description: "",
    },
  ],

  // Official Venue Data
  venueInfo: {
    name: "Northern University Bangladesh",
    campus: "Permanent Campus",
    dates: "25–27 September 2026",
    daysBadge: "ALL 3 DAYS · 25TH, 26TH & 27TH SEPT",
    address: "111/2 Kawlar Jame Mosjid Road, Ashkona, Dakshinkhan, Dhaka-1230",
    landmark: "Near Hajj Camp & Hazrat Shahjalal International Airport",
    city: "Dhaka, Bangladesh",
    description: "Northern University Bangladesh, Permanent Campus serves as the official host venue for YICMUN 2026 across all three days, featuring modern auditoriums, plenary committee rooms, and conference facilities for high-level diplomatic debate.",
    mapsUrl: "https://maps.google.com/?q=Northern+University+Bangladesh+Permanent+Campus",
    highlights: [
      "Modern Multipurpose Auditoriums",
      "Executive Committee Rooms",
      "Spacious Delegate Lounges",
      "Secure & Accessible Campus",
    ],
  },
  venues: [
    {
      dates: "ALL 3 DAYS · 25TH–27TH SEPT 2026",
      name: "Northern University Bangladesh",
      campus: "Permanent Campus",
      address: "111/2 Kawlar Jame Mosjid Road, Ashkona, Dakshinkhan, Dhaka-1230",
      landmark: "Near Hajj Camp & Airport",
      description: "Official host venue for YICMUN 2026 across all three days of high-level multilateral debate.",
      isPrimary: true,
      mapsUrl: "https://maps.google.com/?q=Northern+University+Bangladesh+Permanent+Campus",
    },
  ],

  // Centralized Registration Form URLs
  registrationLinks: {
    // Official Google Forms (Can be updated anytime)
    delegate: process.env.NEXT_PUBLIC_DELEGATE_FORM_URL || "https://docs.google.com/forms/d/e/1FAIpQLSdS7EmteqIgDLkwEfHBr4JmhmtXKzXt45xppT_-zmgxPkX6Yw/viewform?usp=dialog",
    campus: process.env.NEXT_PUBLIC_CAMPUS_FORM_URL || "https://docs.google.com/forms/d/e/1FAIpQLSen28hwg34nm82w-Q8fxMpJaPJNzRG5bXOE_082B_gSuM6wKg/viewform?usp=dialog",
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
      value: "25–27 September 2026",
      subtext: "3 Days of Intensive Simulation",
      icon: "Calendar",
    },
    {
      label: "Location",
      value: "Dhaka, Bangladesh",
      subtext: "Northern University Bangladesh, Permanent Campus",
      icon: "MapPin",
    },
    {
      label: "Eligibility",
      value: "High School & University",
      subtext: "Delegates & Institutional Delegations",
      icon: "UserCheck",
    },
    {
      label: "Registration Fee",
      value: "৳1,500 BDT",
      subtext: "Delegate & Campus Ambassador",
      icon: "Sparkles",
    },
  ],
};
