/**
 * ServicesGrid
 * ----------------------------------------------------------------------------
 * Replaces the earlier accordion: every service is visible at once, in a
 * 3x3 grid on large screens, each with its own photo. A server component —
 * no interactivity needed here, which keeps this section's JS cost at zero.
 *
 * `sizes` on the Image tells the browser which actual file size to fetch at
 * each breakpoint (full width on mobile, half on tablet, a third on
 * desktop) — without it, the browser would have to guess and likely
 * over-fetch a larger image than the slot actually needs.
 */

import Image from "next/image";

const SERVICES = [
  {
    slug: "software-development",
    title: "Software Development",
    description:
      "Custom systems built around how your business actually operates, not a generic off-the-shelf workaround.",
    imageAlt: "A software engineer writing code on a laptop",
  },
  {
    slug: "website-development",
    title: "Website Development",
    description:
      "Fast, secure, properly built websites that represent your business the way it deserves to be represented.",
    imageAlt: "A designer reviewing a website layout on screen",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Strategy and execution behind growing a digital presence that actually drives business, not just impressions.",
    imageAlt: "A marketer reviewing campaign analytics on a dashboard",
  },
  {
    slug: "branding",
    title: "Branding",
    description:
      "Visual identity and positioning for businesses establishing — or rethinking — how they present themselves.",
    imageAlt: "Brand identity materials laid out for review",
  },
  {
    slug: "it-consultancy",
    title: "IT Consultancy",
    description:
      "Strategic guidance on technology decisions, before you commit budget to the wrong ones.",
    imageAlt: "A consultant presenting a technology roadmap",
  },
  {
    slug: "data-science",
    title: "Data Science",
    description:
      "Turning the data your business already has into decisions, not just dashboards.",
    imageAlt: "A data analyst reviewing charts and data visualizations",
  },
  {
    slug: "kubernetes",
    title: "Kubernetes",
    description:
      "Infrastructure built to stay reliable as your usage grows, not just to launch.",
    imageAlt: "An infrastructure or container orchestration dashboard",
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    description:
      "Practical AI integration suited to a real business problem, not AI for its own sake.",
    imageAlt: "A visualization of an AI model or data pipeline on screen",
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    description:
      "Removing the repetitive manual work that quietly slows your team down.",
    imageAlt: "An automated workflow or process diagram on a screen",
  },
] as const;

export function ServicesGrid() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
          What We Do
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Services built for where you&apos;re headed, not just where you are.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div key={service.slug}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
              <Image
                src={`/services/${service.slug}.jpg`}
                alt={service.imageAlt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-5 font-display text-lg font-medium text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}