/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  // If you are deploying to a static host (like GitHub Pages), uncomment the next line:
  // output: 'export',

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/media/file/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/media/file/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '3000',
        pathname: '/api/media/file/**',
      },
    ],
  },
};

export default nextConfig;