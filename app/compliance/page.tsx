import React from "react";

import MainFooter from "@/components/footers/MainFooter";
import NavTwo from "@/components/navbars/NavTwo";

export default function CompliancePage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <NavTwo />

      <main id="main-content">
        This is the Legal/Compliance page
      </main>

      <MainFooter />
    </div>
  );
}
