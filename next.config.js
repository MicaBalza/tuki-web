const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  compress: true,
  productionBrowserSourceMaps: false,

  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lottie-react",
      "swiper",
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
