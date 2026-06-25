import type { Metadata } from "next";
import { SectorDetail } from "@/components/sector-detail";
import { sectorsBySlug } from "@/lib/sectors-content";

const sector = sectorsBySlug["healthcare-wellness"];

export const metadata: Metadata = {
  title: sector.name,
  description: sector.scope,
};

export default function Page() {
  return <SectorDetail sector={sector} />;
}
