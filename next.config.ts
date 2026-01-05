import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.henoticdiagnostics.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "henoticdiagnostics.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com", // Common for WP avatars
        pathname: "/**",
      }
    ],
  },
  // Optional: Enable logging for debugging image issues
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
