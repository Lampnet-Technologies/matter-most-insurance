import React from "react";
import { Landmark, TrendingUp } from "lucide-react";
import styles from "./ServicesRetirement.module.css";

export default function ServicesRetirement() {
  return (
    <section className={styles.section} aria-label="Retirement strategy services">
      <div className={styles.container}>
        {/* ── Content on top ────────────────────────── */}
        <div className={styles.content}>
          <span className={styles.numberLabel}>02</span>
          <h2 className={styles.heading}>Retirement Strategy</h2>
          <p className={styles.description}>
            Wealth preservation is an art form. We engineer retirement accounts
            that minimize tax exposure while maximizing growth through
            diversified, low-volatility vehicles designed for long-term
            stability.
          </p>
        </div>

        {/* ── Cards below content ────────────────────── */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Landmark size={24} />
            </div>
            <div className={styles.cardContent}>
              <h4 className={styles.cardHeading}>Annuity Portfolios</h4>
              <p className={styles.cardText}>
                Guaranteed income streams built on institutional-grade
                foundations.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <TrendingUp size={24} />
            </div>
            <div className={styles.cardContent}>
              <h4 className={styles.cardHeading}>Market Indexing</h4>
              <p className={styles.cardText}>
                Capturing upside potential without the downside risk of
                standard markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}