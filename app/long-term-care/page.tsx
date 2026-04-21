import React from "react";

import NavThree from "@/components/navbars/NavThree";
import MainFooter from "@/components/footers/MainFooter";

import LTCHero from "@/components/ltc/LTCHero";
import LTCAdBanner from "@/components/ltc/LTCAdBanner";
import LTCBenefits from "@/components/ltc/LTCBenefits";
import LTCGapStrategy from "@/components/ltc/LTCGapStrategy";
import LTCFinalCTA from "@/components/ltc/LTCFinalCTA";

export default function LTCPage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <NavThree />

      <main id="main-content">
        <LTCHero />
        <LTCAdBanner />
        <LTCBenefits />
        <LTCGapStrategy />
        <LTCFinalCTA />
      </main>

      <MainFooter />
    </div>
  );
}
