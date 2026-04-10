import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade and Growth Advisory in Africa | Market Entry, Cross-Border Expansion, Trade Facilitation | Credence Africa',
  description: 'Credence Africa helps institutions enter African markets, expand across borders, structure trade flows, and scale globally through market entry strategy, trade facilitation, market intelligence, and execution support.',
};

export default function TradeGrowthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
