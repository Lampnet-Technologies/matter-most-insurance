"use client";

import React, { useEffect } from "react";
import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { useAsyncState } from "@/lib/hooks";
import MainFooter from "@/components/footers/MainFooter";
import NavTwo from "@/components/navbars/NavTwo";

export default function IncomeProtectionPage() {
  const { data, loading, error, startLoading, setData, setError } = useAsyncState<string>(null);

  useEffect(() => {
    // Simulate async data loading
    const loadContent = async () => {
      startLoading();
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setData("Income Protection content loaded successfully!");
      } catch (err) {
        setError("Failed to load income protection details. Please try again.");
      }
    };

    loadContent();
  }, [startLoading, setData, setError]);

  if (loading) {
    return (
      <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
        <NavTwo />
        <main id="main-content">
          <Loading message="Loading income protection details..." size="lg" />
        </main>
        <MainFooter />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
        <NavTwo />
        <main id="main-content">
          <ErrorMessage
            title="Unable to Load Content"
            message={error}
            onRetry={() => window.location.reload()}
          />
        </main>
        <MainFooter />
      </div>
    );
  }

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
              Income Protection
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.75,
                color: "#44474c",
                marginBottom: "24px",
              }}
            >
              This page is the dedicated Income Protection product module.
            </p>
            {data && (
              <div
                style={{
                  padding: "24px",
                  background: "#f7fafc",
                  borderRadius: "16px",
                  marginBottom: "24px",
                }}
              >
                <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
                  Loaded Content
                </h2>
                <p style={{ margin: 0 }}>{data}</p>
              </div>
            )}
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
                Build out sections here for coverage details, eligibility
                criteria, sample scenarios, and a custom configuration flow.
              </p>
            </div>
          </div>
        </section>
      </main>

      <MainFooter />
    </div>
  );
}
