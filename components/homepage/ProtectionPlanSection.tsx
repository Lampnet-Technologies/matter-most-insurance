"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle, LayoutGrid, List } from "lucide-react";
import styles from "./ProtectionPlanSection.module.css";
import Image from "next/image";

const plans = [
  {
    image: "/Overlay%20(2).png",
    title: "Income Protection",
    description:
      "Ensure your family's lifestyle remains unchanged. Tax-free benefit payments when it matters most.",
    features: ["Disability Riders", "Accelerated Death Benefits"],
    configHref: "/config/income",
  },
  {
    image: "/Overlay.png",
    title: "Debt-Shielding Fortress",
    description:
      "Clear mortgages and loans instantly. Your loved ones inherit valuable assets, not crushing liabilities.",
    features: ["Mortgage Payoff", "Student Loan Clearing"],
    configHref: "/config/debt",
  },
  {
    image: "/Overlay%20(1).png",
    title: "Generational Wealth",
    description:
      "Cash value components to build a foundation for education, business starts, and retirement.",
    features: ["Cash Value Accumulation", "Retirement Supplements"],
    configHref: "/config/wealth",
  },
];

export default function ProtectionPlanSection() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <section className={styles.section} aria-label="Hero Protection Plan">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>
            What Your Hero Protection Plan Includes
          </h2>
          <div className={styles.viewToggle} aria-label="View options">
            <button
              type="button"
              className={`${styles.toggleBtn} ${viewMode === "grid" ? styles.toggleBtnActive : ""}`}
              aria-label="Expanded view"
              onClick={() => setViewMode("grid")}
            >
              <LayoutGrid size={18}  />
            </button>
            <button
              type="button"
              className={`${styles.toggleBtn} ${viewMode === "list" ? styles.toggleBtnActive : ""}`}
              aria-label="Dropdown list view"
              onClick={() => setViewMode("list")}
            >
              <List size={18} />
            </button>
          </div>
        </div>
 
        <ul className={`${styles.grid} ${viewMode === "list" ? styles.listView : ""}`} role="list">
          {plans.map((plan) => (
            <li key={plan.title} className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">
                <Image
                  src={plan.image}
                  alt="Plan icon"
                  className={styles.cardIconImage}
                  width={44}
                  height={44}
                />
              </div>
              <h3 className={styles.planTitle}>{plan.title}</h3>
              <p className={styles.planDesc}>{plan.description}</p>

              <ul className={styles.features} role="list">
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <CheckCircle size={14} className={styles.featureCheck} aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link href={plan.configHref} className={styles.configLink}>
                Config Module →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
