import React from "react";
import ProvidersPageClient from "./ProvidersPageClient";

export default async function ProvidersPage({
  searchParams,
}: {
  searchParams: Promise<{ region?: string }>;
}) {
  const { region } = await searchParams;
  
  let activeRegion: "all" | "ca" | "us" = "all";
  if (region) {
    const normalized = region.toLowerCase();
    if (normalized === "ca" || normalized === "canada") {
      activeRegion = "ca";
    } else if (normalized === "us" || normalized === "usa" || normalized === "united states") {
      activeRegion = "us";
    }
  }

  return <ProvidersPageClient initialTab={activeRegion} />;
}
