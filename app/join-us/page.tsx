import React from "react";
import AgentHero from "@/components/join-us/AgentHero";
import AgentPlatform from "@/components/join-us/AgentPlatform";
import AgentRevenue from "@/components/join-us/AgentRevenue";
import AgentProcess from "@/components/join-us/AgentProcess";
import AgentCTAForm from "@/components/join-us/AgentCTAForm";
import MainFooter from "@/components/footers/MainFooter";
import MainNav from "@/components/navbars/MainNav";

export default function JoinUsPage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <MainNav />

      <main id="main-content">
        <AgentHero />
        <AgentPlatform />
        <AgentRevenue />
        <AgentProcess />
        <AgentCTAForm />
      </main>

      <MainFooter />
    </div>
  );
}
