import React from "react";
import BenefitsPageClient from "./BenefitsPageClient";

export default async function BenefitsPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  // Normalize the tab name, defaulting to 'eia'
  const activeTab = (tab || "eia").toLowerCase() as "eia" | "iul" | "ltc" | "tlb";

  return <BenefitsPageClient initialTab={activeTab} />;
}
