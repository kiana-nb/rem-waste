import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/skip-select',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
