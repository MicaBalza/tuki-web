/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true // Esto activa Critters automáticamente
  }
};

module.exports = nextConfig;