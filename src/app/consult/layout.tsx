import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Discuss Your Institutional Requirement | Credence Africa" },
  description:
    "Contact Credence Africa about advisory, learning, events or intelligence. Share your organization, intended output, market and timing for an initial assessment.",
};

export default function ConsultLayout({ children }: { children: React.ReactNode }) {
  return children;
}
