/**
 * Navbar
 * ----------------------------------------------------------------------------
 * Primary site navigation, sticky to the top of the viewport.
 *
 * This stays a Server Component (no "use client" here) on purpose — none of
 * it needs interactivity except the theme toggle, which is isolated into its
 * own small client component below. Keeping the navbar itself server-rendered
 * means less JavaScript shipped to the browser, which is part of how we hit
 * "loads almost instantly."
 *
 * Known gap (next pass): on narrow screens the link list is hidden entirely
 * rather than collapsing into a menu button. We're calling that out rather
 * than pretending it's finished — a proper mobile menu is next on the list.
 */
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
 
const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
 
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          MOVAX<span className="text-cobalt">*</span>
        </Link>
 
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-cobalt hover:bg-white rounded-full px-3 py-1.5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
 
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-cobalt px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-cobalt sm:inline-block"
          >
            Start a Project
          </a>
        </div>
      </nav>
    </header>
  );
}