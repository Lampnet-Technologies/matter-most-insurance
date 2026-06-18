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
          <h2 className={styles.heading}>Term Life Insurance with Living Benefits(TLB)</h2>
          <p className={styles.description}>
            Insurance policy that provides a guaranteed death benefit to your
            beneficiaries — PLUS living benefits.
          </p>
        </div>

        {/* ── Cards below content ────────────────────── */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Landmark size={24} />
            </div>
            <div className={styles.cardContent}>
              <h4 className={styles.cardHeading}>Terminal Illness Coverage</h4>
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
              <h4 className={styles.cardHeading}>Critical Illness Coverage</h4>
              <p className={styles.cardText}>
                Capturing upside potential without the downside risk of standard
                markets.
              </p>
            </div>
          </div>
        </div>
        <Link href="/term-life-benefits" className={styles.cta}>
          Explore Frameworks <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
