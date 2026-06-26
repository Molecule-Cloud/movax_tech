import { Hero } from "@/components/Hero";
import { TrustImage } from "@/components/TrustImage";
import { VisionCallout } from "@/components/VisionCallOut";
// import { ServicesAccordion } from "@/components/ServicesAccordion";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProcessSteps } from "@/components/ProcessSteps";



export default function Home() {
  return (
    <>
      <Hero />
      {/* <ServicesAccordion /> */}
      <ServicesGrid />
      <hr></hr>
      <ProcessSteps />
      <VisionCallout />
    </>
  );
}