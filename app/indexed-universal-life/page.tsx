import React from "react";

import NavThree from "@/components/navbars/NavThree";
import MainFooter from "@/components/footers/MainFooter";

import IULAdBanner from "@/components/iul/IULAdBanner";
import IULHero from "@/components/iul/IULHero";
import IULFeatures from "@/components/iul/IULFeatures";
import IULWealth from "@/components/iul/IULWealth";
import IULStats from "@/components/iul/IULStats";
import IULFinalCTA from "@/components/iul/IULFinalCTA";


export default function IULPage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <NavThree />

      <main
        id="main-content"
        className="space-y-20 py-12 max-w-screen-2xl mx-auto"
      >
        <IULAdBanner />
        <IULHero />
        <IULFeatures />
        <IULWealth />
        <IULStats />
        <IULFinalCTA />
      </main>

      <MainFooter />
    </div>
  );
}
