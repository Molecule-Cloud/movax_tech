/**
 * Hero
 * ----------------------------------------------------------------------------
 * The hero section of the website, which includes the main headline, subheading,
 * and call-to-action button.
 *
 * This component is responsible for displaying the hero content and styling it
 * appropriately. It also handles the click event for the "Get Started" button.
 *
 * @param children - The child components that will be rendered inside the hero.
 */
import { HeroBackground } from "@/components/HeroBackground";
import { HeroContent } from "@/components/HeroContent";
// import { HeroPartners } from "@/components/HeroPartners";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <HeroBackground />
      {/* <HeroPartners /> */}
      <HeroContent />
    </section>
  );
}