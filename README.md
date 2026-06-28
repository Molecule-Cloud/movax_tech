# Movax Technologies — Website

The marketing site and client portal for Movax Technologies Ltd, a digital
transformation and software solutions company serving businesses across
Ghana and Africa.

## Tech Stack

- **[Next.js 16](https://nextjs.org)** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** — theme tokens defined in `src/app/globals.css`, not a
  `tailwind.config.js`
- **[Framer Motion](https://www.framer.com/motion/)** — used sparingly, for
  a few deliberate entrance/scroll animations, not everywhere
- **[next-themes](https://github.com/pacocoursey/next-themes)** — light/dark
  mode
- **[Resend](https://resend.com)** — transactional email for the contact form
- **[Supabase](https://supabase.com)** — auth + Postgres database, for the
  client portal (see "Known Gaps" below — not yet merged into `main`)

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in real values, see below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

See `.env.example` for the full, current list with explanations. As of this
writing, `main` actually depends on:

- `RESEND_API_KEY`, `CONTACT_EMAIL_TO` - required for the contact form to
  send real email. Without these set, the form fails gracefully with a
  clear error rather than crashing.

Variables for the client portal (`NEXT_PUBLIC_SUPABASE_URL`,
`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`) and the site's canonical URL
(`NEXT_PUBLIC_SITE_URL`, used by the sitemap/robots/OG image) are documented
in `.env.example` too, ready for whenever those features get implemented.

## Available Scripts

```bash
npm run dev          # local dev server
npm run build         # production build
npm run start          # run a production build locally
npx tsc --noEmit         # type-check without emitting files
npx eslint .              # lint
```

**Before every commit, run all three checks** — type-check, lint, and build
— not just one. Several real bugs were caught specifically because all
three were run together (a missing API key that only failed at build time,
not at lint or type-check time; a lint rule that only fires on literal
strings, not all equivalent code). None of these are optional sanity
checks; treat all three as required.

## Project Structure

```
src/
  app/                 → routes (Next.js App Router: one folder = one URL)
    page.tsx              → homepage, composes all the section components
    layout.tsx             → root layout: fonts, theme provider, metadata
    about/                  → /about
    login/, portal/          → client portal (pending — see Known Gaps)
    api/contact/               → contact form's email-sending endpoint
  components/            → one file per section/UI piece, PascalCase
  lib/                     → shared utilities (e.g. contact-details.ts,
                              supabase/ clients) — pending, see Known Gaps
supabase/
  schema.sql              → database schema + Row Level Security policies
                            for the client portal — run manually in
                            Supabase's SQL Editor, not auto-applied
```

## Git Workflow

- `main` is protected — no direct pushes. Every change goes through a PR.
- One feature branch per piece of work: `feature/short-description`.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/):
  `feat:`, `fix:`, `chore:`, `docs:`.
- **Actually read the diff before merging a PR**, not just the description.
  A previous PR merged a complete rewrite of the color system that silently
  broke dark mode, the marquee animation, and the entire brand palette —
  the build still passed, lint was clean, nothing crashed. Only reading the
  actual file changes would have caught it.

## Known Gaps / Roadmap

Accurate as of the last working session — update this list as things land.

**Still in development, not yet merged into `main`:**
- Footer (+ a small refactor pulling shared contact details into `src/lib/contact-details.ts`)
- About page (`/about`)
- SEO basics: `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `not-found.tsx`, expanded metadata + LocalBusiness structured data in `layout.tsx`
- Client portal: Supabase auth, `/login`, `/portal`, `proxy.ts`, `supabase/schema.sql` — real auth and a real database, deliberately scoped for v1 with **no custom admin UI** (project status gets updated via Supabase's own dashboard) and **no public sign-up** (client accounts are created manually when a project starts)

**Not built yet:**
- Mobile nav menu — currently only the logo and theme toggle are reachable on phone/tablet; the nav links themselves have no mobile-friendly menu
- Privacy Policy / Terms pages — increasingly necessary now that the contact form and the (pending) auth system both collect real personal data
- WhatsApp chat button — needs a real WhatsApp Business number first
- Real photos for the Services grid (9 needed) and Process section (1 needed) — currently wired to `public/services/*.jpg` and `public/process/our-process.jpg`, which don't exist yet, so those slots show as broken images until photos are added
- CI — no automated lint/typecheck/build check on PRs yet; currently done by hand, every time
- Rate limiting on `/api/contact` — a honeypot field stops basic bots, but there's no limit on request volume from one source
- A real accessibility/Lighthouse audit across the assembled site
- Booking/consultation flow, blog (blog only makes sense once there's real content to publish)

**Deliberately on hold:**
- A custom admin UI for the client portal (v1 uses Supabase's dashboard directly)
- A "Partners" visual accent in the Hero — attempted a few times, never quite landed; parked for a fresh pass later

## Deployment

Deployed to vercel. [Vercel](https://vercel.com) is the natural fit for a
Next.js project this size. Whenever that happens: every environment
variable in `.env.example` needs to be set again in the hosting provider's
dashboard — `.env.local` is local-only and never gets deployed
automatically.