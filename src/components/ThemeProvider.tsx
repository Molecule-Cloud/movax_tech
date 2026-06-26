"use client";
 
/**
 * ThemeProvider
 * ----------------------------------------------------------------------------
 * This component wraps the `next-themes` library to provide a consistent theme
 * management system throughout the application. It sets the theme based on the
 * user's OS preference by default, but allows for explicit theme selection and
 * persistence using the `ThemeToggle` component.
 *
 * @param children - The child components that will receive the theme context.
 * @param props - Additional props to be passed to the `next-themes` provider.
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