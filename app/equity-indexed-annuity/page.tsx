import React from "react";

import NavThree from "@/components/navbars/NavThree";
import MainFooter from "@/components/footers/MainFooter";

import EIAAdBanner from "@/components/eia/EIAAdBanner";
import EIAHero from "@/components/eia/EIAHero";
import EIAFeatures from "@/components/eia/EIAFeatures";
import EIAPhilosophy from "@/components/eia/EIAPhilosophy";
import EIAFinalCTA from "@/components/eia/EIAFinalCTA";

export default function EIAPage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <NavThree />

      <main id="main-content">
        <EIAAdBanner />
        <EIAHero />
        <EIAFeatures />
        <EIAPhilosophy />
        <EIAFinalCTA />
      </main>

      <MainFooter />
    </div>
  );
}
