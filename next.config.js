const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Target modern browsers to reduce polyfills and transpilation
  compiler: {
    // Remove console.log in production (optional optimization)
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Note: swcMinify is now default in Next.js 15+ (removed deprecated option)
  // Note: optimizeFonts is now default in Next.js 15+ (removed deprecated option)

  // Enable compression
  compress: true,

  // Production source maps for debugging (disable for smaller builds)
  productionBrowserSourceMaps: false,
};

module.exports = withBundleAnalyzer(nextConfig);
