import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
