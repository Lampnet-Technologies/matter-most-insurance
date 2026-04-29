import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutArchitecture from "@/components/about/AboutArchitecture";
import AboutLeadership from "@/components/about/AboutLeadership";
import AboutPartners from "@/components/about/AboutPartners";

import MainNav from "@/components/navbars/MainNav";
import MainFooter from "@/components/footers/MainFooter";
import AdBanner from "@/components/ui/AdBanner";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <MainNav />

      <main id="main-content">
        <AboutHero />
        <AboutArchitecture />
        <AboutLeadership />
        <AboutPartners />

         {/* Bottom ad */}
                <AdBanner placement="mid" />
      </main>

      <MainFooter />
    </div>
  );
}
