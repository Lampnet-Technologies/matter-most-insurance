import React from "react";
import ComplianceHero from "@/components/compliance/ComplianceHero";
import ComplianceLicensing from "@/components/compliance/ComplianceLicensing";
import ComplianceProtectionLayers from "@/components/compliance/ComplianceProtectionLayers";
import CompliancePrivacy from "@/components/compliance/CompliancePrivacy";
import ComplianceTotem from "@/components/compliance/ComplianceTotem";
import MainFooter from "@/components/footers/MainFooter";
import NavTwo from "@/components/navbars/NavTwo";

export default function CompliancePage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <NavTwo />

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
