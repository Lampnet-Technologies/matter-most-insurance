"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle, LayoutGrid, List } from "lucide-react";
import styles from "./ProtectionPlanSection.module.css";
import Image from "next/image";

const plans = [
  {
    image: "/Overlay (2).png",
    title: "Indexed Universal Life (IUL)",
    description: "Protection of your health & wealth",
    features: ["Cash Value Accumulation", "Death Benefit Protection"],
    configHref: "/indexed-universal-life",
  },
  {
    image: "/Overlay.png",
    title: "Equity Indexed Annuity(EIA)",
    description: "Protection for lifetime income",
    features: ["Guaranteed Lifetime Income", "Upfront Bonus Up to 26%"],
    configHref: "/equity-indexed-annuity",
  },
  {
    image: "/Overlay (1).png",
    title: "Long-Term Care(LTC)",
    description: "Protections for good health, weak or ageing care",
    features: ["Nursing Home Care Coverage", "Home Health Care Support"],
    configHref: "/long-term-care",
  },
  {
    image: "/Encrypted.png",
    title: "Term Life Insurance with Living Benefits(TLB)",
    description: "Protection for good health, deadly illnesses & disease care",
    features: ["Critical & Chronic Illness Rider", "Flexible Benefit Access"],
    configHref: "/term-life-benefits",
  },
];

export default function ProtectionPlanSection() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <section className={styles.section} aria-label="Hero Protection Plan">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>
            Our Protection Plans Include
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
                Read more →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
