import React from "react";
import LucrativenessPageClient from "./LucrativenessPageClient";

export default async function LucrativenessPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  // Normalize the tab name, defaulting to 'iul'
  const activeTab = (tab || "iul").toLowerCase() as "iul" | "eia" | "ltc" | "tlb";

  return <LucrativenessPageClient initialTab={activeTab} />;
}
