import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox",
  }
};

export default nextConfig;
