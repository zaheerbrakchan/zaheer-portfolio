/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use webpack instead of Turbopack
  webpack: (config) => {
    return config;
  },
  // Disable Turbopack completely
  devIndicators: {
    buildActivity: true,
  },
};

export default nextConfig;
