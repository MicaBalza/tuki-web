/** @type {import('next').NextConfig} */
const nextConfig = {
  // Target modern browsers to reduce polyfills and transpilation
  compiler: {
    // Remove console.log in production (optional optimization)
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Optimize for modern browsers
  swcMinify: true,

  experimental: {
    // Use modern JavaScript output
    modernBrowsers: true,
  },
};

module.exports = nextConfig;
