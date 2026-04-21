import React from "react";
import Link from "next/link";
import styles from "./EIAFinalCTA.module.css";

export default function EIAFinalCTA() {
  return (
    <section className={styles.section} aria-label="Ready to engineer your future">
      <div className={styles.container}>
        <h2 className={styles.heading}>Ready to Engineer Your Future?</h2>
        <p className={styles.body}>
          Join the ranks of those who prioritise architectural stability in
          their retirement planning. Consultation is complimentary.
        </p>
        <Link href="/contact" className={styles.btn}>
          Secure My Retirement Now
        </Link>
      </div>
    </section>
  );
}
