import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Commissioned Research in Africa | Sector Studies, Market Sizing and Policy Analysis | Credence Africa",
  description:
    "Credence Africa runs commissioned research and analysis — sector and market studies, market sizing, policy and regulatory analysis, institutional diagnostics and decision-support reporting — for institutions building the evidence base behind capital, market and governance decisions.",
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
