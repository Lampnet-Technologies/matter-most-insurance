import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./EIAHero.module.css";

export default function EIAHero() {
  return (
    <section className={styles.section} aria-label="EIA product hero">
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* ── Left (7/12) ─────────────────────────── */}
          <div className={styles.leftCol}>
            <h1 className={styles.headline}>
              EIA: Retire Like a Hero,{" "}
              <br />
              <em className={styles.headlineItalic}>
                Never Outlive Your Money
              </em>
            </h1>
            <p className={styles.subhead}>
              Retire like a hero and never outlive your money. Guaranteed
              lifetime income with 0% market risk. Secure your architectural
              legacy with precision risk management.
            </p>
            <div className={styles.ctas}>
              <Link href="/contact" className={styles.btnPrimary}>
                Secure My Retirement
              </Link>
              <Link href="/eia/prospectus" className={styles.btnSecondary}>
                Download Prospectus
              </Link>
            </div>
          </div>

          {/* ── Right (5/12) ─────────────────────────── */}
          <div className={styles.rightCol}>
            <div className={styles.imageFrame}>
              <Image
                src="/eia-img1.png"
                alt="Low-angle shot of a modern glass skyscraper reflecting a clear blue sky, symbolising stability and transparency"
                fill
                priority
                sizes="(max-width:900px) 100vw, 42vw"
                className={styles.heroImg}
              />
            </div>

            {/* 8px gold-border totem — bottom-left overlap */}
            <div className={styles.totem}>
              <p className={styles.totemValue}>0%</p>
              <p className={styles.totemLabel}>
                Market Loss Exposure. Architectural certainty in every market
                cycle.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
