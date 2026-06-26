"use client";

/**
 * HeroContent
 * ----------------------------------------------------------------------------
 * The headline, subhead, and CTAs — animated in once on page load.
 *
 * This is the hero's one deliberate motion moment (per the design plan): an
 * orchestrated staggered reveal, not scattered effects everywhere. It's a
 * client component specifically so this small animation can run; the
 * background mesh and the rest of the page stay server-rendered to keep the
 * JS bundle small.
 *
 * `useReducedMotion`: the global CSS rule in globals.css that disables
 * animations for prefers-reduced-motion only catches CSS `animation` /
 * `transition` properties. Framer Motion drives its animations with
 * JavaScript (the Web Animations API), which that CSS rule can't reach —
 * so reduced motion has to be opted into explicitly here, by collapsing the
 * transition durations to zero when the user has that OS setting on.
 */
import { motion, useReducedMotion, type Variants } from "framer-motion";

export function HeroContent() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-10 mx-auto max-w-4xl px-6 text-center"
    >
      <motion.p
        variants={item}
        className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cobalt"
      >
        Digital Transformation Partner — Ghana &amp; Africa
      </motion.p>

      <motion.h1
        variants={item}
        className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
      >
        We don't just build websites.
        We build solutions for your growth!
      </motion.h1>

      <motion.p
        variants={item}
        className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg"
      >
        AT MOVAX Technologies, we solve real business problems through technology, help organizations operate more efficiently, and become a leading force in digital transformation across Ghana amd Africa.
        Every software solution we undertake is aimed at creating value, drive innovation, and leave a lasting impact on our clients.
      </motion.p>

      <motion.div
        variants={item}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#contact"
          className="rounded-full bg-cobalt px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cobalt-light"
        >
          Start a Project
        </a>
        <a
          href="#services"
          className="rounded-full border border-border-subtle px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-cobalt hover:text-cobalt"
        >
          See Our Services
        </a>
      </motion.div>
    </motion.div>
  );
}