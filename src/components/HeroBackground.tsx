/**
 * HeroBackground
 * ----------------------------------------------------------------------------
 * The hero's signature element: a quiet mesh of connected nodes, ambient in
 * the background. It's meant to read as "systems, connected" — a visual
 * echo of what Movax actually does (architecting connected technology
 * systems), not a decorative pattern chosen for its own sake.
 *
 * Pure SVG + CSS animation, no JavaScript: it's server-rendered once and
 * costs nothing on the main thread. `currentColor` lets it inherit the
 * cobalt brand color from the wrapping element's `text-cobalt/*` class, so
 * it adapts automatically between light and dark mode without a single
 * `dark:` variant.
 *
 * Node positions are a fixed array, not randomized at render time —
 * randomizing per-render would make the server and the browser roll
 * different numbers and cause a hydration mismatch. Fixed placement also
 * means the composition is deliberate rather than accidental.
 */
const NODES = [
  { x: 650, y: 100, r: 3 }, // 0
  { x: 780, y: 180, r: 4 }, // 1 — pulses
  { x: 900, y: 90, r: 3 }, // 2
  { x: 1020, y: 220, r: 5 }, // 3 — pulses
  { x: 860, y: 320, r: 3 }, // 4
  { x: 1100, y: 340, r: 4 }, // 5
  { x: 950, y: 440, r: 3 }, // 6 — pulses
  { x: 1150, y: 480, r: 5 }, // 7
  { x: 1000, y: 560, r: 3 }, // 8 — pulses
  { x: 700, y: 260, r: 4 }, // 9
  { x: 1080, y: 620, r: 3 }, // 10
  { x: 820, y: 620, r: 4 }, // 11 — pulses
  { x: 920, y: 700, r: 3 }, // 12
  { x: 1180, y: 140, r: 3 }, // 13
] as const;

const EDGES: ReadonlyArray<readonly [number, number]> = [
  [0, 1],
  [1, 2],
  [1, 3],
  [2, 3],
  [3, 5],
  [3, 4],
  [4, 9],
  [4, 6],
  [5, 7],
  [6, 7],
  [6, 8],
  [7, 10],
  [8, 11],
  [8, 12],
  [10, 11],
  [11, 12],
  [1, 9],
  [0, 9],
  [5, 13],
  [2, 13],
];

const PULSING_NODE_INDEXES = new Set([1, 3, 6, 8, 11]);

export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden text-cobalt/10 dark:text-cobalt/20"
    >
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        {EDGES.map(([a, b], i) => {
          const from = NODES[a];
          const to = NODES[b];
          return (
            <line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="currentColor"
              strokeWidth={1}
            />
          );
        })}
        {NODES.map((node, i) => (
          <circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill="currentColor"
            className={PULSING_NODE_INDEXES.has(i) ? "animate-node-pulse" : undefined}
            style={PULSING_NODE_INDEXES.has(i) ? { animationDelay: `${i * 0.6}s` } : undefined}
          />
        ))}
      </svg>
    </div>
  );
}