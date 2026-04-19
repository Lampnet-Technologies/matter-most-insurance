import React from "react";
import Image from "next/image";
import { Building, Shield } from "lucide-react";
import styles from "./AgentPlatform.module.css";

export default function AgentPlatform() {
  return (
    <section
      className={styles.section}
      aria-label="Turnkey Hero Business Platform"
    >
      <div className={styles.container}>
        {/* ── Section header ───────────────────── */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.heading}>Turnkey Hero Business Platform</h2>
            <p className={styles.subhead}>
              A robust foundation designed for architectural precision in
              insurance sales. We remove the friction, leaving you to focus on
              the craft.
            </p>
          </div>
          <div className={styles.headerAccent} aria-hidden="true" />
        </div>

        {/* ── Bento grid ───────────────────────── */}
        <div className={styles.grid}>
          {/* Card 1 — wide: Advanced Tech (8/12 cols) */}
          <div
            className={`${styles.card} ${styles.cardWide} ${styles.cardLight}`}
          >
            <div className={styles.cardTop}>
              <span className={styles.cardIcon} aria-hidden="true">
                <Building size={36} />
              </span>
              <h3 className={styles.cardTitle}>Advanced Tech Infrastructure</h3>
              <p className={styles.cardBody}>
                Proprietary CRM and quoting engines built for the modern agent.
                Real-time data visualisation and automated underwriting
                workflows.
              </p>
            </div>
            {/* Dashboard image placeholder */}
            <div className={styles.dashboardImg}>
              <Image
                src="/join-us-image1.png"
                alt="Clean minimalist dashboard UI showing financial growth charts and agent metrics"
                fill
                sizes="90vw"
                className={styles.dashboardImgInner}
              />
            </div>
          </div>

          {/* Card 2 — narrow: Back-Office Support (4/12 cols, dark) */}
          <div
            className={`${styles.card} ${styles.cardNarrow} ${styles.cardDark}`}
          >
            <span className={styles.shieldIcon} aria-hidden="true">
              <Shield size={52} />
            </span>
            <h3 className={styles.cardTitleLight}>
              Unrivaled Back-Office Support
            </h3>
            <p className={styles.cardBodyLight}>
              From compliance to claims processing, our elite support team acts
              as your structural reinforcement.
            </p>
          </div>

          {/* Card 3 — narrow: Expert Training (4/12 cols) */}
          <div
            className={`${styles.card} ${styles.cardNarrow} ${styles.cardLight}`}
          >
            <h3 className={`${styles.cardTitle} ${styles.cardTitleTeal}`}>
              Expert Training
            </h3>
            <p className={styles.cardBody}>
              Continuous education through our &ldquo;Master Builder&rdquo;
              series, led by industry icons.
            </p>
          </div>

          {/* Card 4 — wide: Marketing Suite (8/12 cols) */}
          <div
            className={`${styles.card} ${styles.cardWide} ${styles.cardSurface} ${styles.cardRow}`}
          >
            <div className={styles.marketingText}>
              <h3 className={styles.cardTitle}>Marketing Suite</h3>
              <p className={styles.cardBody}>
                Customisable, high-end editorial assets designed to position you
                as an authority in your local market.
              </p>
            </div>
            {/* Visual mosaic of colour swatches */}
            <div className={styles.mosaic} aria-hidden="true">
              <div className={`${styles.swatch} ${styles.swatchHigh}`} />
              <div className={`${styles.swatch} ${styles.swatchTeal}`} />
              <div className={`${styles.swatch} ${styles.swatchNavy}`} />
              <div className={`${styles.swatch} ${styles.swatchLow}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
