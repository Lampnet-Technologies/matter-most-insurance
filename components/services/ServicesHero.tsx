import React from "react";
import styles from "./ServicesHero.module.css";

export default function ServicesHero() {
  return (
    <section className={styles.section} aria-label="Services overview hero">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* ── Left: headline block (8 cols) ──────── */}
          <div className={styles.headlineCol}>
            <span className={styles.eyebrow}>Comprehensive Protection</span>
            <h1 className={styles.headline}>
              The Architecture of <br />
              <em className={styles.headlineItalic}>Protective Frameworks</em>
            </h1>
            <p className={styles.subhead}>
              Our approach to risk is sculptural—defining boundaries, fortifying
              structures, and ensuring the longevity of your financial legacy
              through calculated precision.
            </p>
          </div>

          {/* ── Right: rating with gold accent (4 cols) ── */}
          <div className={styles.ratingCol}>
            <div className={styles.ratingCard}>
              <div className={styles.ratingScore}>A+</div>
              <div className={styles.ratingLabel}>Industry Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
