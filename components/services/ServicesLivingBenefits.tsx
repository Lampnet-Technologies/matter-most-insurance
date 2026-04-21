import React from "react";
import styles from "./ServicesLivingBenefits.module.css";

export default function ServicesLivingBenefits() {
  return (
    <section className={styles.section} aria-label="Living benefits and business continuity services">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* ── Left: Living Benefits (6 cols) ────────── */}
          <div className={styles.contentCol}>
            <div className={styles.content}>
              <span className={styles.numberLabel}>03</span>
              <h2 className={styles.heading}>Living Benefits</h2>
              <p className={styles.description}>
                Access your policy values while you&apos;re alive. Critical, chronic,
                and terminal illness riders ensure your protection acts as a resource
                during times of need.
              </p>
              <button className={styles.cta}>
                Review Benefits
              </button>
            </div>
          </div>

          {/* ── Right: Business Continuity (6 cols) ──── */}
          <div className={styles.contentCol}>
            <div className={styles.content}>
              <span className={styles.numberLabel}>04</span>
              <h2 className={styles.heading}>Business Continuity</h2>
              <p className={styles.description}>
                Protect the enterprise. From Key Person insurance to Buy-Sell
                agreements, we secure the operational integrity of your business
                against personnel risks.
              </p>
              <button className={styles.cta}>
                Secure Assets
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}