import React from "react";

import MainNav from "@/components/navbars/MainNav";
import MainFooter from "@/components/footers/MainFooter";

import AdBanner from "@/components/ui/AdBanner";
import HeroSection from "@/components/homepage/HeroSection";
import ConfidenceSection from "@/components/homepage/ConfidenceSection";
import StatsSection from "@/components/homepage/StatsSection";
import ProtectionPlanSection from "@/components/homepage/ProtectionPlanSection";
import LeaveBehindSection from "@/components/homepage/LeaveBehindSection";
import JourneySection from "@/components/homepage/JourneySection";
import KnowledgeHubSection from "@/components/homepage/KnowledgeHubSection";
import AgentCTASection from "@/components/homepage/AgentCTASection";
import FinalCTASection from "@/components/homepage/FinalCTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f7fafc" }}>
      <MainNav />

      {/* Top sponsor banner */}
      <AdBanner placement="top" />

      <main id="main-content">
        <HeroSection />
        <ConfidenceSection />
        <StatsSection />
        <ProtectionPlanSection />
        <LeaveBehindSection />
        <JourneySection />
        <KnowledgeHubSection />
        <AgentCTASection />
        <FinalCTASection />

        {/* Bottom ad */}
        <AdBanner placement="mid" />
      </main>

      <MainFooter />
    </div>
  );
}
