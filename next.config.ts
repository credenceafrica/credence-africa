
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/sectors/agriculture-food', destination: '/sectors/agribusiness', permanent: true },
      { source: '/sectors/creative-digital-economy', destination: '/sectors/creative-economy', permanent: true },
      { source: '/sectors/education-skills-development', destination: '/sectors/skills-workforce-development', permanent: true },
      { source: '/sectors/mobility-logistics', destination: '/sectors/mobility-transport-logistics', permanent: true },
      { source: '/sectors/technology-digital-economy', destination: '/sectors/technology-ai-digital-economy', permanent: true },
      { source: '/sectors/faith-based-organizations', destination: '/sectors', permanent: true },
      { source: '/sectors/non-profit-sector', destination: '/sectors', permanent: true },
      { source: '/sectors/public-sector-governance', destination: '/sectors', permanent: true },
      { source: '/sectors/smes-startups', destination: '/sectors', permanent: true },
      { source: '/sectors/cooperatives-social-economy', destination: '/sectors', permanent: true },
      { source: '/sectors/hospitality-tourism', destination: '/sectors', permanent: true },
    ];
  },
};

export default nextConfig;
