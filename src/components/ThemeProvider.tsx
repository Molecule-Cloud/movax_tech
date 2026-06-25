"use client";
 
/**
 * ThemeProvider
 * ----------------------------------------------------------------------------
 * Thin wrapper around `next-themes`, so the rest of the app imports theming
 * from "@/components/theme-provider" without needing to know which library
 * is doing the work underneath. If we ever swap theming libraries, this is
 * the only file that changes.
 *
 * `attribute="class"` tells next-themes to toggle a `dark` class on <html>
 * (rather than e.g. a data-attribute) — this is what the `@custom-variant
 * dark` rule in globals.css is watching for.
 *
 * `enableSystem` means a first-time visitor gets their OS preference by
 * default, but `setTheme` (used in ThemeToggle) can override and persist
 * an explicit choice in localStorage from then on.
 */
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";
 
type Props = ComponentProps<typeof NextThemesProvider>;
 
export function ThemeProvider({ children, ...props }: Props) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  );
}