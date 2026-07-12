import type { NextConfig } from "next";

import { legacyRedirects } from "./src/config/legacy-redirects";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/iletisim",
        permanent: true,
      },
      {
        source: "/.well-known/llms.txt",
        destination: "/llms.txt",
        permanent: true,
      },
      ...legacyRedirects,
    ];
  },
};

export default nextConfig;
