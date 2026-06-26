/**
 * HeroPartners
 * ----------------------------------------------------------------------------
 * A small bento-style panel of partner organizations, sitting in the open
 * space to the left of the centered hero text. The hero's actual content
 * and background are untouched - this is purely an addition layered on top.
 *
 *
 * Hidden below the `lg` breakpoint - see the original note: no graceful way
 * to fit this beside the centered headline on a tablet or phone.
 */
const PARTNERS = [
  "Derrick Inkoom Foundation",
  "Rotaract Club of Accra",
  "MovsAfriq Discoveries",
] as const;

function PartnerCell({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-black/5 bg-white p-3 text-center shadow-lg ${className}`}
    >
      <span className="font-display text-xs leading-snug font-medium text-ink">
        {name}
      </span>
    </div>
  );
}

export function HeroPartners() {
  return (
    <div className="absolute top-1/2 left-6 z-10 hidden -translate-y-1/2 lg:block xl:left-12">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
        Partners
      </p>
      <div className="relative">
        {/* The blended glow: a large, heavily blurred cobalt shape sitting
         * behind the whole card group. This is what makes solid white
         * cards read as "part of the hero" instead of a sticker on top. */}
        <div
          aria-hidden="true"
          className="absolute -inset-8 rounded-full bg-cobalt/40 blur-3xl"
        />
        <div className="relative flex gap-2.5">
          <PartnerCell name={PARTNERS[0]} className="h-[176px] w-[96px]" />
          <div className="flex flex-col gap-2.5">
            <PartnerCell name={PARTNERS[1]} className="h-[83px] w-[96px]" />
            <PartnerCell name={PARTNERS[2]} className="h-[83px] w-[96px]" />
          </div>
        </div>
      </div>
    </div>
  );
}