import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { ServiceMarquee } from "@/components/Marquee";
 
/**
 * Font setup
 * ----------------------------------------------------------------------------
 * next/font self-hosts these at build time — the browser never makes a
 * request to Google Fonts, which avoids both a render-blocking network
 * request and a layout shift while the font swaps in. Each font is exposed
 * as a CSS variable, then mapped to font-display / font-sans / font-mono in
 * globals.css.
 */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});
 
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
 
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
 
export const metadata: Metadata = {
  title: "Movax Technologies | Digital Transformation & Software Solutions",
  description:
    "Movax Technologies Ltd helps businesses across Ghana and Africa improve efficiency, strengthen their digital presence, and achieve sustainable growth through software, data, and automation.",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is required with next-themes: it sets the
    // `dark` class on this element from a client-side effect, which would
    // otherwise mismatch the server-rendered markup and log a (harmless)
    // hydration warning on every single page load.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          <ServiceMarquee />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}