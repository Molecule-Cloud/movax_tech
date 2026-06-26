import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // next/image refuses to optimize images from domains it doesn't
    // explicitly trust — this is a deliberate security boundary (it stops
    // arbitrary external URLs from being proxied through your server's
    // image optimizer), so every external image source has to be added
    // here on purpose.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;