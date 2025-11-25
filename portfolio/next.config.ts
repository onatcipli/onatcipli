import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",

  // Base path for GitHub Pages (e.g., /repo-name)
  basePath: isProd ? basePath : "",
  assetPrefix: isProd ? basePath : "",

  // Trailing slash for static hosting compatibility
  trailingSlash: true,

  // Configure remote images from App Store
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
      },
      {
        protocol: "https",
        hostname: "is2-ssl.mzstatic.com",
      },
      {
        protocol: "https",
        hostname: "is3-ssl.mzstatic.com",
      },
      {
        protocol: "https",
        hostname: "is4-ssl.mzstatic.com",
      },
      {
        protocol: "https",
        hostname: "is5-ssl.mzstatic.com",
      },
    ],
  },
};

export default nextConfig;
