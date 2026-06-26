"use client";

/**
 * VisionCallout
 * ----------------------------------------------------------------------------
 * Presents the company's real stated 2031 ambition as a single confident
 * statement, rather than a fabricated stats counter ("500+ clients served").
 * Movax doesn't have that track record yet, and inventing one would be
 * dishonest content on a real client's site — so instead this leans on the
 * one thing that's actually true: the vision itself, stated plainly.
 *
 * The numeral and statement are deliberately split into a two-column grid
 * with a single dividing rule between them (vertical on desktop, horizontal
 * on mobile) — the same structured-divider language already used in the
 * Services accordion, so the page reads as one consistent system rather
 * than a collection of differently-styled sections.
 re it only plays once,
 * not every time it scrolls in and out of view.
 */
import { motion, useReducedMotion, type Variants } from "framer-motion";

export function VisionCallout() {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
            Our Vision
          </p>
          <p className="mt-2 font-display text-7xl font-semibold leading-none text-foreground sm:text-8xl">
            2031
          </p>
        </div>

        <div className="border-t border-border-subtle pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-12 lg:pl-16">
          <p className="text-lg leading-relaxed text-foreground/80 sm:text-xl">
            We&apos;re building toward being recognized as one of Ghana&apos;s
            leading digital transformation and software solutions companies - 
            serving businesses across Africa with technology, service, and
            results that hold up under scrutiny.
          </p>
        </div>
      </motion.div>
    </section>
  );
}