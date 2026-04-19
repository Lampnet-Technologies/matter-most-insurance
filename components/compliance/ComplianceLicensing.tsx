import React from "react";
import { ShieldCheck, CheckCircle, Gavel } from "lucide-react";
import styles from "./ComplianceLicensing.module.css";

const carrierRatings = [
  "A.M. Best Rating: A+ (Superior)",
  "Standard & Poor's: AA-",
];

export default function ComplianceLicensing() {
  return (
    <section
      className={styles.section}
      aria-label="State licensing and carrier authorization"
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* ── Card 1: State Licensing (wide, light) ─── */}
          <div className={styles.licensingCard}>
            {/* Ghost gavel watermark */}
            <div className={styles.watermark} aria-hidden="true">
              <Gavel size={24} />
            </div>

            <div className={styles.licensingContent}>
              <span className={styles.licensingIcon} aria-hidden="true">
                <ShieldCheck size={36} />
              </span>
              <h2 className={styles.licensingTitle}>
                State Licensing &amp; Registration
              </h2>
              <p className={styles.licensingBody}>
                Matter Most Insurance is a licensed producer in all 50 U.S.
                states and the District of Columbia. We maintain strict
                adherence to the NAIC (National Association of Insurance
                Commissioners) guidelines.
              </p>
              <div className={styles.badges}>
                <span className={styles.badge}>NPN: 19482201</span>
                <span className={styles.badge}>SEC Registered</span>
              </div>
            </div>
          </div>

          {/* ── Card 2: Carrier Authorization (narrow, dark) ── */}
          <div className={styles.carrierCard}>
            <div>
              <h2 className={styles.carrierTitle}>Carrier Authorization</h2>
              <p className={styles.carrierBody}>
                We only partner with &lsquo;A&rsquo; Rated carriers (A.M. Best)
                to ensure the financial solvency and claims-paying ability of
                every policy we broker.
              </p>
            </div>

            <ul className={styles.ratingsList} role="list">
              {carrierRatings.map((rating) => (
                <li key={rating} className={styles.ratingItem}>
                  <span className={styles.ratingCheck} aria-hidden="true">
                    <CheckCircle size={18} />
                  </span>
                  {rating}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
