import type { NextConfig } from "next";
import path from "node:path";

// Vercel Hobby. No paid add-ons, databases, or background jobs.
// Maximum monthly cost: $0.
const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    root: path.resolve(process.cwd()),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
