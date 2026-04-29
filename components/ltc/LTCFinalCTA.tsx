import React from "react";
import Link from "next/link";
import styles from "./LTCFinalCTA.module.css";

export default function LTCFinalCTA() {
  return (
    <section
      className={styles.section}
      aria-label="Ready to secure the next season"
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>Ready to secure the next season?</h2>
        <p className={styles.body}>
          Our experts provide architectural risk assessments to ensure your
          assets are protected against the unpredictable. Schedule your
          confidential consultation today.
        </p>
        <div className={styles.ctas}>
          <Link href="/contact" className={styles.btnPrimary}>
            Protect My Legacy
          </Link>
          <Link href="#" className={styles.btnOutline}>
            Speak with an Expert
          </Link>
        </div>
      </div>
    </section>
  );
}
