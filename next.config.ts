import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Correct Root-Level Configuration
  allowedDevOrigins: ["localhost", "192.168.29.182"],

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "storage.googleapis.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "http", hostname: "googleusercontent.com" }
    ],
  },
};

export default nextConfig;
