import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalPolicyBySlug } from "@/lib/legal";

const policy = legalPolicyBySlug["refund-policy"];

export const metadata: Metadata = {
  title: policy.title,
  description: policy.metaDescription,
};

export default function RefundPolicyPage() {
  return <LegalPage policy={policy} />;
}
