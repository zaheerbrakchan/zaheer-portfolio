/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => config, // force webpack mode
  experimental: {
    turbo: false, // ⛔ disable Turbopack
  },
};

module.exports = nextConfig;
