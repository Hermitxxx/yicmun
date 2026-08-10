import AuroraBackground from "@/components/effects/AuroraBackground";
import StarField from "@/components/effects/StarField";
import PointerGlow from "@/components/effects/PointerGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EarlyBirdCountdown from "@/components/EarlyBirdCountdown";
import ConferenceDays from "@/components/ConferenceDays";
import EventVenue from "@/components/EventVenue";
import DelegateRegistration from "@/components/DelegateRegistration";
import CampusRegistration from "@/components/CampusRegistration";
import EventDetails from "@/components/EventDetails";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050B1A] text-[#E8F4F8] selection:bg-[#00FF87]/30 selection:text-[#00FF87]">
      {/* Visual Background Layers */}
      <AuroraBackground />
      <StarField />
      <PointerGlow />

      {/* Main Page Layout */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <EarlyBirdCountdown />
        <ConferenceDays />
        <EventVenue />
        <DelegateRegistration />
        <CampusRegistration />
        <EventDetails />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
