
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
      // Sector slugs retired in favour of the 2026 SEO paths. Legacy URLs point
      // straight at the new destination so no request takes two hops.
      { source: '/sectors/financial-services', destination: '/sectors/finance', permanent: true },
      { source: '/sectors/healthcare-wellness', destination: '/sectors/healthcare', permanent: true },
      { source: '/sectors/agribusiness', destination: '/sectors/agriculture', permanent: true },
      { source: '/sectors/green-economy', destination: '/sectors/energy', permanent: true },
      { source: '/sectors/technology-ai-digital-economy', destination: '/sectors/technology', permanent: true },
      { source: '/sectors/mobility-transport-logistics', destination: '/sectors/mobility', permanent: true },
      { source: '/sectors/creative-economy', destination: '/sectors/consumer', permanent: true },

      // Older slugs that previously chained through the names above.
      { source: '/sectors/agriculture-food', destination: '/sectors/agriculture', permanent: true },
      { source: '/sectors/creative-digital-economy', destination: '/sectors/consumer', permanent: true },
      { source: '/sectors/education-skills-development', destination: '/sectors/skills-workforce-development', permanent: true },
      { source: '/sectors/mobility-logistics', destination: '/sectors/mobility', permanent: true },
      { source: '/sectors/technology-digital-economy', destination: '/sectors/technology', permanent: true },
      { source: '/sectors/faith-based-organizations', destination: '/sectors', permanent: true },
      { source: '/sectors/non-profit-sector', destination: '/sectors', permanent: true },
      { source: '/sectors/public-sector-governance', destination: '/sectors', permanent: true },
      { source: '/sectors/smes-startups', destination: '/sectors', permanent: true },
      { source: '/sectors/cooperatives-social-economy', destination: '/sectors', permanent: true },
      { source: '/sectors/hospitality-tourism', destination: '/sectors', permanent: true },

      // Sectors retired in October 2026 to match the seven-sector structure in
      // Credence's Consultant Onboarding Guide. No replacement page covers the
      // same scope, so these route to the sector index rather than a 404.
      { source: '/sectors/blue-economy', destination: '/sectors', permanent: true },
      { source: '/sectors/skills-workforce-development', destination: '/sectors', permanent: true },
      { source: '/sectors/trade-infrastructure-industrial-development', destination: '/sectors', permanent: true },

      // Themes retired the same month for the same reason. Five themes
      // continue under their existing slugs with titles and copy updated to
      // match the onboarding guide, so they need no redirect. These nine have
      // no 2026 equivalent and route to the theme index instead.
      { source: '/themes/investment', destination: '/themes', permanent: true },
      { source: '/themes/trade', destination: '/themes', permanent: true },
      { source: '/themes/industrialization', destination: '/themes', permanent: true },
      { source: '/themes/infrastructure', destination: '/themes', permanent: true },
      { source: '/themes/transformation', destination: '/themes', permanent: true },
      { source: '/themes/policy', destination: '/themes', permanent: true },
      { source: '/themes/enterprise', destination: '/themes', permanent: true },
      { source: '/themes/innovation', destination: '/themes', permanent: true },
      { source: '/themes/urbanization', destination: '/themes', permanent: true },

      { source: '/services/market-intelligence', destination: '/services/research', permanent: true },
      { source: '/services/events', destination: '/services/credence-engage', permanent: true },
      { source: '/services/events/:id*', destination: '/services/credence-engage/:id*', permanent: true },
    ];
  },
};

export default nextConfig;
