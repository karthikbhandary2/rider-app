import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Load images from randomuser.me for Lego driver profile pictures
    domains: ['randomuser.me'],
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/trip/:path*',
        destination: 'http://api-gateway:8081/trip/:path*',
      },
      {
        source: '/ws/:path*',
        destination: 'http://api-gateway:8081/ws/:path*',
      },
    ];
  },
};

export default nextConfig;
