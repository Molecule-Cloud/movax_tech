/**
 * Hero
 * ----------------------------------------------------------------------------
 * The page's opening section. Composes the ambient background (server
 * component, static SVG) with the animated content (client component,
 * framer-motion) — kept in separate files so only the piece that actually
 * needs interactivity ships as client-side JavaScript.
 */
import { HeroBackground } from "@/components/HeroBackground";
import { HeroContent } from "@/components/HeroContent";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </section>
  );
}