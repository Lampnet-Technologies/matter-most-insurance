import React from "react";
import ComplianceHero from "@/components/compliance/ComplianceHero";
import ComplianceLicensing from "@/components/compliance/ComplianceLicensing";
import ComplianceProtectionLayers from "@/components/compliance/ComplianceProtectionLayers";
import CompliancePrivacy from "@/components/compliance/CompliancePrivacy";
import ComplianceTotem from "@/components/compliance/ComplianceTotem";
import MainFooter from "@/components/footers/MainFooter";
import MainNav from "@/components/navbars/MainNav";

export default function CompliancePage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <MainNav />

      <main id="main-content">
        <ComplianceHero />
        <ComplianceLicensing />
        <ComplianceProtectionLayers />
        <CompliancePrivacy />
        <ComplianceTotem />
      </main>

      <MainFooter />
    </div>
  );
}
