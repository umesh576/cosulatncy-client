// next.config.mjs
import { readFileSync } from "fs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "2000",
        pathname: "/api/uploads/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
