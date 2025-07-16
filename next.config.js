/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exclude nested app directories from the build
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules',
        '**/nen-type-aura-test/**',
        '**/code-the-subtext/**',
        '**/flex-factory-fun/**',
        '**/realtalk-advice-bot/**',
        '**/whispered-time-capsule/**',
        '**/whispered-time-capsule-app/**',
        '**/gpt-suite/**'
      ]
    };
    return config;
  },
  // Exclude directories from the build
  experimental: {
    excludeDefaultMomentLocales: true,
  }
};

module.exports = nextConfig;
