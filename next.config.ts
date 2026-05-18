import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      { source: "/x", destination: "/howxworks", permanent: true },
      { source: "/x-algorithm", destination: "/howxworks", permanent: true },
    ];
  },
};

export default nextConfig;
