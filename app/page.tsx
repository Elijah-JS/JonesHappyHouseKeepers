import { AboutSection } from "@/components/sections/AboutSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { ReputationSection } from "@/components/sections/ReputationSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ValueSection } from "@/components/sections/ValueSection";
import { VisualBreak } from "@/components/sections/VisualBreak";
import { WhySection } from "@/components/sections/WhySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ValueSection />
      <WhySection />
      <ReputationSection />
      <VisualBreak />
      <AboutSection />
      <QuoteSection />
      <FinalCTA />
    </>
  );
}
