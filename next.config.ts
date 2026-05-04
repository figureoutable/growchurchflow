import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // In dev, avoid long-lived optimized-image cache when replacing files under /public.
    minimumCacheTTL: process.env.NODE_ENV === "development" ? 0 : 60,
  },
};

export default nextConfig;
