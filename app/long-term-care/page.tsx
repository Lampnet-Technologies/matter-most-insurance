import React from "react";

import MainNav from "@/components/navbars/MainNav";
import MainFooter from "@/components/footers/MainFooter";

import LTCHero from "@/components/ltc/LTCHero";
import LTCAdBanner from "@/components/ltc/LTCAdBanner";
import LTCBenefits from "@/components/ltc/LTCBenefits";
import LTCGapStrategy from "@/components/ltc/LTCGapStrategy";
import LTCFinalCTA from "@/components/ltc/LTCFinalCTA";
import LTCStories from "@/components/ltc/LTCStories";

export default function LTCPage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <MainNav />

      <main id="main-content">
        <LTCHero />
        <LTCAdBanner />
        <LTCBenefits />
        <LTCGapStrategy />
        <LTCStories />
        <LTCFinalCTA />
      </main>

      <MainFooter />
    </div>
  );
}
