import React from "react";

import MainNav from "@/components/navbars/MainNav";
import MainFooter from "@/components/footers/MainFooter";

import IULAdBanner from "@/components/iul/IULAdBanner";
import IULHero from "@/components/iul/IULHero";
import IULFeatures from "@/components/iul/IULFeatures";
import IULWealth from "@/components/iul/IULWealth";
import IULStats from "@/components/iul/IULStats";
import IULFinalCTA from "@/components/iul/IULFinalCTA";
import IULStories from "@/components/iul/IULStories";


export default function IULPage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <MainNav />

      <main
        id="main-content"
        className="space-y-20 py-12 max-w-screen-2xl mx-auto"
      >
        <IULAdBanner />
        <IULHero />
        <IULFeatures />
        <IULWealth />
        <IULStats />
        <IULStories />
        <IULFinalCTA />
      </main>

      <MainFooter />
    </div>
  );
}
