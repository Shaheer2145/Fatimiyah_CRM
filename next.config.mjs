/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  
  // If you are deploying to a static host (like GitHub Pages), uncomment the next line:
  // output: 'export',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // Replace this with your actual image host (e.g., 'images.unsplash.com')
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;