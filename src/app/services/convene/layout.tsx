import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Event Management Services Kenya | Corporate AGMs, Conferences, Investor Briefings, Policy Forums',
  description: 'Corporate event management services in Kenya for corporate AGMs, conferences, investor briefings, policy forums, SACCO delegate and members meetings, executive roundtables, and stakeholder engagement platforms.',
};

export default function ConveneLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
