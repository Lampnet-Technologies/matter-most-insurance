import React from "react";
import { ArrowRight, Landmark, TrendingUp } from "lucide-react";
import styles from "./ServicesRetirement.module.css";
import Link from "next/link";

export default function ServicesBusinessContinuity() {
  return (
    <section
      className={styles.section}
      aria-label="Business continuity services"
    >
      <div className={styles.container}>
        {/* ── Content on top ────────────────────────── */}
        <div className={styles.content}>
          <span className={styles.numberLabel}>04</span>
          <h2 className={styles.heading}>Business Continuity</h2>
          <p className={styles.description}>
            Protect the enterprise. From Key Person insurance to Buy-Sell
            agreements, we secure the operational integrity of your business
            against personnel risks.
          </p>
        </div>

        {/* ── Cards below content ────────────────────── */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Landmark size={24} />
            </div>
            <div className={styles.cardContent}>
              <h4 className={styles.cardHeading}>Key Person Insurance</h4>
              <p className={styles.cardText}>
                Safeguard your business against the loss of critical personnel.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <TrendingUp size={24} />
            </div>
            <div className={styles.cardContent}>
              <h4 className={styles.cardHeading}>Buy-Sell Agreements</h4>
              <p className={styles.cardText}>
                Create a structured plan for the orderly transfer of ownership
                in the event of a key person&apos;s departure or death.
              </p>
            </div>
          </div>
        </div>
        <Link href="/long-term-care" className={styles.cta}>
          Explore Frameworks <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
