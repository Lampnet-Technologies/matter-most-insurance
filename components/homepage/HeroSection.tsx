import React from "react";
import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.section} aria-label="Hero">
      <div className={styles.grid}>
        {/* ── Left: Main hero panel ─────────────────── */}
        <div className={styles.heroPanel}>
          <p className={styles.statusBadge}>
            <span className={styles.statusDot} aria-hidden="true" />
            Protection Status: Active
          </p>

          <h1 className={styles.headline}>
            Every great story has a <em className={styles.heroWord}>hero.</em>{" "}
            That hero is <span className={styles.youWord}>you.</span>
          </h1>

          <p className={styles.body}>
            Protect <strong>WHAT MATTERS MOST.</strong> Secure your health,
            family, wealth, business, and assets to build a lasting legacy.
            You&rsquo;ve worked hard for what you have; we work hard to make
            sure you keep it.
          </p>

          <div className={styles.ctas}>
            <Link href="/products" className={styles.btnPrimary}>
              Upgrade Protection
            </Link>
            <Link href="/resources" className={styles.btnOutline}>
              View My Roadmap
            </Link>
          </div>

          <p className={styles.heroicLabel}>Heroic Protection</p>
        </div>

        {/* ── Right: Mission card ───────────────────── */}
        <aside className={styles.missionCard} aria-label="The Heroic Mission">
          <div className={styles.missionBadge}>
            <p className={styles.missionTagline}>
              &ldquo;Protecting What Matters Most. So You Can Keep Living Your
              Best Life.&rdquo;
            </p>
          </div>

          <div className={styles.missionBody}>
            <h2 className={styles.missionTitle}>The Heroic Mission</h2>
            <p className={styles.missionText}>
              Matter Most Insurance exists to be the hero for you, so you can
              keep being the hero for everyone else. We specialize in plans that
              protect your income, your legacy, and your peace of mind.
            </p>
            <Link href="hero-stories" className={styles.missionLink}>
              Our Full Story →
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
