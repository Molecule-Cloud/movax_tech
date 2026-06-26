"use client";

/**
 * ProcessSteps
 * ----------------------------------------------------------------------------
 * The four-step delivery process — Assess → Architect → Build → Scale — as
 * a vertical list beside a single supporting image. Numbered because it's
 * a genuine sequence, not decoration.
 *
 * This is also the first place `text-copper` gets used since the original
 * design plan. Not an oversight: copper was deliberately reserved for "a
 * real sequence marker," and every other accent on the site so far has used
 * cobalt instead — spending the one warm color in exactly one place is what
 * keeps it reading as a signature rather than just another color in the
 * palette.
 *
 * IMAGE SETUP: same pattern as the Services grid — this points at
 * `/process/our-process.jpg`, a real file under `public/process/` that
 * doesn't exist yet. Drop a photo there with that exact filename and it
 * appears with zero code changes; until then it's a broken-image icon,
 * which is expected.
 *
 * The stagger (each step fading in after the one before it, then the image)
 * deliberately echoes the content: a process that happens in sequence,
 * revealed in sequence.
 */
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";

const STEPS = [
  {
    title: "Assess",
    description:
      "We start by understanding how your business actually operates today — the systems, workflows, and bottlenecks already in place — before recommending anything.",
  },
  {
    title: "Architect",
    description:
      "We design the right technical approach for your specific situation: the stack, the infrastructure, the integrations — planned before a single line of code is written.",
  },
  {
    title: "Build",
    description:
      "We build in focused, reviewable increments rather than one large opaque delivery, so you can see progress and catch issues early.",
  },
  {
    title: "Scale",
    description:
      "Once it's live, we make sure it stays reliable as usage grows, and keep improving it based on how the business actually uses it.",
  },
] as const;

export function ProcessSteps() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.15 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
          How We Work
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
          A clear process, every time.
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-12 lg:grid-cols-2 lg:gap-16"
      >
        {/* Steps list — appears second on mobile (image leads), first on
         * desktop (left column). */}
        <motion.div variants={container} className="order-2 lg:order-1">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              className={index > 0 ? "border-t border-border-subtle py-6" : "pb-6"}
            >
              <span className="font-display text-3xl font-semibold text-copper">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-medium text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Supporting image */}
        <motion.div
          variants={fadeUp}
          className="relative order-1 aspect-[4/5] overflow-hidden rounded-2xl bg-surface lg:order-2 lg:aspect-auto lg:min-h-[420px]"
        >
          <Image
            src="/services/our-process.jpg"
            alt="A Movax engineer reviewing a project architecture plan"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}