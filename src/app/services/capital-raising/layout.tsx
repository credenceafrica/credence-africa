import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capital Raising and Investment Structuring",
  description: "Capital raising preparation, investment structuring, blended and development finance advisory for institutions and projects across Africa.",
  alternates: { canonical: "/services/capital-raising" },
};

export default function CapitalRaisingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
