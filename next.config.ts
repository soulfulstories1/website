import type { NextConfig } from "next";

const repo = "website";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_PAGES ? `/${repo}` : "",
  assetPrefix: process.env.GITHUB_PAGES ? `/${repo}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.GITHUB_PAGES ? `/${repo}` : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
