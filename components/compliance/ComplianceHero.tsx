import React from "react";
import styles from "./ComplianceHero.module.css";

export default function ComplianceHero() {
  return (
    <section className={styles.section} aria-label="Compliance page hero">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* ── Left: headline block (8 cols) ──────── */}
          <div className={styles.headlineCol}>
            <span className={styles.eyebrow}>Regulatory Transparency</span>
            <h1 className={styles.headline}>
              Legal Integrity &amp; <br />
              <em className={styles.headlineItalic}>Compliance Framework</em>
            </h1>
          </div>

          {/* ── Right: pull-quote with gold border (4 cols) ── */}
          <div className={styles.quoteCol}>
            <blockquote className={styles.pullQuote}>
              Architecture of trust: Our commitment to regulatory excellence
              ensures your assets are protected by the highest standards of
              international insurance law.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
