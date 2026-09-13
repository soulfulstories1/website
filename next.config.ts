import type { NextConfig } from "next";
import path from "path";

// Empty for custom domains (e.g. aaradhyadigitalsolutions.com).
// Set NEXT_PUBLIC_BASE_PATH=/website only for github.io/website subpath deploys.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
