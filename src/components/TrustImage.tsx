/**
 * TrustImage
 * ----------------------------------------------------------------------------
 * The section directly beneath the Hero: a curved divider flowing into a
 * white (light mode) / panel (dark mode) section built around a photo of a
 * working professional, paired with a short positioning statement.
 *
 * Two implementation notes worth understanding:
 *
 * 1. The curve is a single SVG wave, absolutely positioned at the top of
 *    this section and pulled upward by its own height with `-translate-y-full`
 *    so it sits exactly on the seam between Hero and this section. It's
 *    filled with `currentColor`, which is set to `text-surface` on the
 *    wrapping div — so the curve always matches this section's own
 *    background color, in both themes, without needing two separate paths.
 *
 * 2. We use `bg-surface` rather than a hardcoded white. `--surface` resolves
 *    to white in light mode (matching the "white background" ask) but to a
 *    deep navy panel in dark mode - so toggling dark mode doesn't leave a
 *    jarring white band in an otherwise dark page. If you'd rather this
 *    section stay pure white even in dark mode as a deliberate contrast
 *    moment, that's a one-word change (`bg-surface` → `bg-white`) — flagging
 *    the choice rather than making it silently.
 */
import Image from "next/image";

export function TrustImage() {
  return (
    <section className="relative bg-surface py-24">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -translate-y-full text-surface"
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-[70px] w-full md:h-[110px]"
        >
          <path
            d="M0,120 C240,20 480,100 720,60 C960,20 1200,100 1440,40 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -top-4 -right-4 h-full w-full rounded-2xl bg-cobalt/10"
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1622295023876-0cdf583c41f6?fm=jpg&q=80&w=1200&fit=crop"
              alt="A Movax technology consultant working at a laptop"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              // This image sits in the very first viewport-visible section
              // of the page, so we tell Next.js to prioritize fetching it
              // immediately rather than lazy-loading it — lazy-loading
              // something the visitor sees on first scroll would make the
              // page feel slower, not faster.
              priority
            />
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
            Who We Are
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            A technical team you can actually reach.
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/70">
            Movax Technologies is built around direct access to the people
            doing the work — not account managers relaying messages between
            you and an offshore team. Every engagement is handled by
            engineers and consultants who understand both the technology and
            the business problem behind it.
          </p>
        </div>
      </div>
    </section>
  );
}