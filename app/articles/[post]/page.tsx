import React from "react";

import MainNav from "@/components/navbars/MainNav";
import MainFooter from "@/components/footers/MainFooter";

export default function PostPage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <MainNav />

      <main id="main-content">
        <section style={{ padding: "60px 40px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "700",
                marginBottom: "24px",
              }}
            >
                Post Title
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#44474c",
                marginBottom: "32px",
              }}
            >
                Post content coming soon.
            </p>
          </div>
        </section>
      </main>

      <MainFooter />
    </div>
  );
}
