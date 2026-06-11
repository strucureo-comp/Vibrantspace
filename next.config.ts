import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "duchateau.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }
    ],
  },
};

export default nextConfig;
