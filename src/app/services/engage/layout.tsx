import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Market Activation and Event Management Kenya | Product Launches, Trade Expos, Brand Activations',
  description: 'Market activation and event management services in Kenya for product launches, trade expos, brand activations, deal rooms, and audience engagement platforms designed for customer acquisition and commercial growth.',
};

export default function EngageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
