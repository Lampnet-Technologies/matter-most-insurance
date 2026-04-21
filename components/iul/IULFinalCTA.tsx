import React from "react";
import Link from "next/link";
import styles from "./IULFinalCTA.module.css";

export default function IULFinalCTA() {
  return (
    <section
      className={styles.section}
      aria-label="Ready to secure your financial legacy"
    >
      {/* Diagonal decorative lines — pure CSS/SVG, matches source */}
      <div className={styles.diagonals} aria-hidden="true">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 100 L100 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.1"
          />
          <path
            d="M0 0 L100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.1"
          />
        </svg>
      </div>

      <div className={styles.content}>
        <h2 className={styles.heading}>
          Ready to Secure Your Financial Legacy?
        </h2>
        <p className={styles.body}>
          Download our comprehensive guide to IUL and get a custom projection
          from an expert advisor.
        </p>
        <div className={styles.ctas}>
          <Link href="/contact" className={styles.btnPrimary}>
            Get My Free Hero Protection Plan
          </Link>
          <Link href="/contact#compare" className={styles.btnSecondary}>
            Compare Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
