import React from "react";

import MainNav from "@/components/navbars/MainNav";
import MainFooter from "@/components/footers/MainFooter";

import AdBanner from "@/components/ui/AdBanner";

export default function AffiliatePage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <MainNav />

      {/* Top sponsor banner */}
      <AdBanner placement="top" />

      <main id="main-content">
        <section style={{ padding: "60px 60px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "700",
                marginBottom: "24px",
              }}
            >
             Affiliate Program Coming Soon
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#44474c",
                marginBottom: "32px",
              }}
            >
              Affiliates content coming soon.
            </p>
          </div>
        </section>

        {/* Bottom ad */}
        <AdBanner placement="mid" />
      </main>

      <MainFooter />
    </div>
  );
}
