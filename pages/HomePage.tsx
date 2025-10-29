import { HeroCinematic } from "../components/HeroCinematic";
import { BentoPortfolio } from "../components/BentoPortfolio";
import { HorizontalShowcase } from "../components/HorizontalShowcase";
import { AboutSection } from "../components/AboutSection";
import { ContactCTA } from "../components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroCinematic />
      <BentoPortfolio />
      <HorizontalShowcase />
      <AboutSection />
      <ContactCTA />
    </>
  );
}