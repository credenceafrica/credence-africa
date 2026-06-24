import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Tell us the mandate and a senior Credence Africa advisor will map the fastest credible path to execution — across capital raising, market entry, public affairs, research, intelligence and capability.",
};

export default function ConsultLayout({ children }: { children: React.ReactNode }) {
  return children;
}
