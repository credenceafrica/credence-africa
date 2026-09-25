import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research and Market Intelligence in Africa",
  description:
    "Commissioned research and market intelligence for institutions building Africa: sector studies, market sizing, policy analysis, ecosystem mapping and capital intelligence.",
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
