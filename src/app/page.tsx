import { Hero } from "@/components/Hero";
import { TrustImage } from "@/components/TrustImage";
import { VisionCallout } from "@/components/VisionCallOut";
// import { ServicesAccordion } from "@/components/ServicesAccordion";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ContactSection } from "@/components/ContactSection";



export default function Home() {
  return (
    <>
      <Hero />
      {/* <ServicesAccordion /> */}
      <ServicesGrid />
      <hr></hr>
      <ProcessSteps />
      <ContactSection />
      <VisionCallout />
    </>
  );
}