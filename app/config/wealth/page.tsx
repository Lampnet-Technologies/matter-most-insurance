import React from "react";

import MainFooter from "@/components/footers/MainFooter";
import NavTwo from "@/components/navbars/NavTwo";

export default function GenerationalWealthPage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <NavTwo />

      <main id="main-content">
        <section style={{ padding: "60px 40px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "42px",
                fontWeight: 700,
                marginBottom: "24px",
              }}
            >
              Generational Wealth
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.75,
                color: "#44474c",
                marginBottom: "24px",
              }}
            >
              This page is the dedicated Generational Wealth product module.
            </p>
            <div
              style={{
                padding: "24px",
                background: "#f7fafc",
                borderRadius: "16px",
              }}
            >
              <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
                Page scaffold
              </h2>
              <p style={{ margin: 0 }}>
                Use this page to add deeper narrative, product details, case
                studies, and a rich configuration experience specific to this
                wealth-building solution.
              </p>
            </div>
          </div>
        </section>
      </main>

      <MainFooter />
    </div>
  );
}
