import React from "react";
import Link from "next/link";
import styles from "./FinalCTASection.module.css";

export default function FinalCTASection() {
  return (
    <section className={styles.section} aria-label="Final call to action">
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Because You Deserve a Hero in Your Corner
        </h2>
        <p className={styles.body}>
          Join thousands of families and business owners who have secured their
          future with Matter Most. Don&rsquo;t leave your legacy to chance.
        </p>
 
        <div className={styles.ctas}>
          <Link href="/get-protected" className={styles.btnPrimary}>
            Claim Your Protection
          </Link>
          <Link href="/contact" className={styles.btnOutline}>
            Talk to an Expert
          </Link>
        </div>
      </div>
    </section>
  );
}
