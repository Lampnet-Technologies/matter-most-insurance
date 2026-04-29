import React from "react";

import MainNav from "@/components/navbars/MainNav";
import MainFooter from "@/components/footers/MainFooter";
import AdBanner from "@/components/ui/AdBanner";

import TLBHero from "@/components/tlb/TLBHero";
import TLBStory from "@/components/tlb/TLBStory";
import TLBHeroOptions from "@/components/tlb/TLBHeroOptions";
import TLBCoverageGrid from "@/components/tlb/TLBCoverageGrid";

export default function TLBPage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <MainNav />

      <main
        id="main-content"
        style={{
          paddingTop: "64px",
          paddingBottom: "80px",
          display: "flex",
          flexDirection: "column",
          gap: "0",
        }}
      >
        <TLBHero />
        <TLBStory />
        <TLBHeroOptions />
        <TLBCoverageGrid />

        {/* Bottom ad */}
        <AdBanner placement="mid" />
      </main>

      <MainFooter />
    </div>
  );
}
