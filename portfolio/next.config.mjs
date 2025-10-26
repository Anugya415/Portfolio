/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix for workspace root detection warning
  outputFileTracingRoot: process.cwd(),
  
  // Optimize for development
  experimental: {
    optimizePackageImports: ['@tailwindcss/postcss']
  },
  
  // Ensure proper static file handling
  trailingSlash: false,
  
  // Development configuration
  env: {
    CUSTOM_KEY: 'portfolio'
  }
};

export default nextConfig;
