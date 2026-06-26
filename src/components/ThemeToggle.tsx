"use client";
 
/**
 * ThemeToggle
 * ----------------------------------------------------------------------------
 * Button that switches between light and dark mode.
 *
 * Why we need `isClient` at all: the server has no way to know a returning
 * visitor's saved theme preference (it lives in the browser's localStorage),
 * so the very first render is always a guess. If we rendered the sun/moon
 * icon immediately, it could flash the wrong icon for a frame after
 * hydration corrects it. The placeholder div below reserves the same size
 * so nothing shifts on screen while we wait.
 *
 */


import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
 
function useIsClient() {
  return useSyncExternalStore(
    () => () => {}, // subscribe: nothing external ever changes, so this is a no-op
    () => true, // getSnapshot: once running in the browser, we're "client"
    () => false, // getServerSnapshot: always false while rendering on the server
  );
}
 
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();
 
  if (!isClient) {
    return <div className="h-9 w-9" aria-hidden="true" />;
  }
 
  const isDark = resolvedTheme === "dark";
 
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-foreground transition-colors hover:border-cobalt hover:text-cobalt"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}