/**
 * ServiceMarquee
 * ----------------------------------------------------------------------------
 * The scrolling strip of services directly beneath the navbar.
 *
 * Deliberately built with pure CSS (one keyframe animation defined in
 * globals.css) instead of a JS animation library. It runs on the
 * compositor thread, costs nothing on the main thread, and needs zero
 * JavaScript to function — which matters for "loads almost instantly."
 *
 * The track renders twice, back-to-back, and the animation moves exactly
 * -50% (one copy's width) before looping — so the seam where it repeats is
 * invisible to the eye.
 *
 * `aria-hidden="true"`: this is an ambient, decorative repeat of services
 * that are already listed properly in the real Services section further
 * down the page. A screen reader narrating an infinitely scrolling list
 * would be actively unhelpful, so we hide this copy from assistive tech.
 */
const SERVICES = [
  "Software Development",
  "Web Development",
  "Digital Marketing",
  "IT Consultancy",
  "Data Science",
  "Kubernetes",
  "Artificial Intelligence",
  "Business Automation",
] as const;
 
function MarqueeTrack() {
  return (
    <div className="flex shrink-0 items-center">
      {SERVICES.map((service) => (
        <span
          key={service}
          className="flex items-center gap-10 pr-10 font-mono text-xs uppercase tracking-wider text-foreground/60"
        >
          {service}
          <span className="text-copper">•</span>
        </span>
      ))}
    </div>
  );
}
 
export function ServiceMarquee() {
  return (
    <div
      className="overflow-hidden border-b border-border-subtle bg-surface py-2.5"
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max motion-reduce:animate-none">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </div>
  );
}