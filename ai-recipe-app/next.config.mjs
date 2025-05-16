/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add Tailwind CSS disableOpacityUtilitiesByDefault for Tailwind 4
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    reactRemoveProperties: true,
    removeConsole: process.env.NODE_ENV === 'production',
    react: {
      throwIfNamespace: false,
    },
  },
  webpack: (config) => {
    // Add this to help debug CSS processing issues
    config.infrastructureLogging = {
      level: 'error',
    };
    return config;
  },
};

export default nextConfig; 