/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'vluwrhdkdjcnnodsngcw.supabase.co',
      },
    ],
  },
};

export default nextConfig;
//domains: [''], // Add allowed image domains here
