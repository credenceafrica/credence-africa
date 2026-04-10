import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Public Affairs Advisory in Africa | Government Relations, Policy, and Regulatory Strategy | Credence Africa',
  description: 'Credence Africa helps institutions navigate government relations, regulatory approvals, policy reform, stakeholder engagement, and market shaping regulation across African markets.',
};

export default function PublicAffairsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
