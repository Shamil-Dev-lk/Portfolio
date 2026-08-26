import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/shamildev-crm',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
