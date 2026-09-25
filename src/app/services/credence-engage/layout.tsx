import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credence Engage: Events and Convenings",
  description: "Convenings, events, market activation and networks that connect capital, policy, markets and strategic partnerships across Africa.",
  alternates: { canonical: "/services/credence-engage" },
};

export default function CredenceEngageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
