import React from "react";

import MainFooter from "@/components/footers/MainFooter";
import NavTwo from "@/components/navbars/NavTwo";

export default function JoinUsPage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <NavTwo />

      <main id="main-content">
        This is the Join Us page
      </main>

      <MainFooter />
    </div>
  );
}
