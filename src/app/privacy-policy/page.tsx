import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalPolicyBySlug } from "@/lib/legal";

const policy = legalPolicyBySlug["privacy-policy"];

export const metadata: Metadata = {
  title: policy.title,
  description: policy.metaDescription,
};

export default function PrivacyPolicyPage() {
  return <LegalPage policy={policy} />;
}
