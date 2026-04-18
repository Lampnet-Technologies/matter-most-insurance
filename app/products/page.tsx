import React from "react";

import MainNav from "@/components/navbars/MainNav";
import MainFooter from "@/components/footers/MainFooter";

import AdBanner from "@/components/ui/AdBanner";


export default function ProductsPage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <MainNav />

      {/* Top sponsor banner */}
      <AdBanner placement="top" />

      <main id="main-content">

        {/* Bottom ad */}
        <AdBanner placement="mid" />
      </main>

      <MainFooter />
    </div>
  );
}
