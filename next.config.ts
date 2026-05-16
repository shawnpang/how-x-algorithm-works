import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  basePath: "/howxworks",
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/howxworks",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
