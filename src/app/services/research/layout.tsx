import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Research and Market Intelligence in Africa | Sector Studies, Market Sizing, Ecosystem Mapping and Capital Intelligence | Credence Africa",
  description:
    "Credence Africa runs commissioned research and market intelligence for institutions building Africa: sector and market studies, market sizing, policy and regulatory analysis, institutional diagnostics and decision-support reporting, alongside ecosystem and stakeholder mapping, opportunity and entry scans, capital and investment intelligence and ongoing intelligence subscriptions. The evidence base and the commercial visibility behind confident capital, market and governance decisions.",
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
