/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Optimize production builds
  poweredByHeader: false,
  compress: true,
  // Trailing slash for consistency
  trailingSlash: false,
}

module.exports = nextConfig
