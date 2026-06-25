import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Market Intelligence in Africa | Sector Reports, Ecosystem Mapping, Capital Intelligence | Credence Africa",
  description:
    "Credence Africa gives investors, market entrants and growth teams commercial visibility before they deploy — market and sector intelligence reports, ecosystem and stakeholder mapping, opportunity and entry scans, capital and investment intelligence and ongoing intelligence subscriptions.",
};

export default function MarketIntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
