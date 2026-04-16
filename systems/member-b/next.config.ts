import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  experimental: {
    externalDir: true,
  },
  transpilePackages: [
    '@goalconnect/ui-components',
    '@goalconnect/utils',
    '@goalconnect/feature-x',
    '@goalconnect/feature-y',
  ],
  webpack(config) {
    config.resolve = config.resolve || {};
    const monorepoNodeModules = path.resolve(__dirname, '../../node_modules');
    config.resolve.modules = [monorepoNodeModules, ...(config.resolve.modules || [])];
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@goalconnect/ui-components': path.resolve(__dirname, '../../packages/ui-components/src/index.ts'),
      '@goalconnect/utils': path.resolve(__dirname, '../../packages/utils/src/index.ts'),
      '@goalconnect/feature-x': path.resolve(__dirname, '../../packages/feature-x/src/index.ts'),
      '@goalconnect/feature-y': path.resolve(__dirname, '../../packages/feature-y/src/index.ts'),
    };
    return config;
  },
};

export default nextConfig;
