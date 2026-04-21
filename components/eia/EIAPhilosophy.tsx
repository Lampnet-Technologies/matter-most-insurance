import React from "react";
import Image from "next/image";
import styles from "./EIAPhilosophy.module.css";

export default function EIAPhilosophy() {
  return (
    <section className={styles.section} aria-label="EIA Philosophy — The Bedrock Strategy">
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* ── Left: editorial copy ──────────────── */}
          <div className={styles.copyCol}>
            <div className={styles.block}>
              <span className={styles.eyebrow}>The Philosophy</span>
              <blockquote className={styles.pullQuote}>
                &ldquo;In an era of unpredictability, our Equity Indexed
                Annuities act as the bedrock of your financial skyscraper.&rdquo;
              </blockquote>
            </div>

            <div className={styles.bodyText}>
              <p>
                Financial stability isn&rsquo;t about chasing the highest peak;
                it&rsquo;s about ensuring the foundation never shifts. The
                Matter Most EIA provides the unique advantage of market-linked
                growth without the liability of market-driven losses.
              </p>
              <p>
                Through architectural excellence in risk management, we have
                designed a vehicle that captures the momentum of the S&amp;P 500
                while maintaining a strictly enforced zero-percent floor. This
                is more than insurance—it is engineered peace of mind.
              </p>
            </div>
          </div>

          {/* ── Right: staggered 2-column mosaic ─── */}
          <div className={styles.mosaicCol}>

            {/* Column A: offset down, photo top */}
            <div className={styles.colA}>
              <div className={styles.photoA}>
                <Image
                  src="/eia-img2.png"
                  alt="Interior of a high-end minimalist corporate office with large glass windows"
                  fill
                  sizes="(max-width:900px) 50vw, 25vw"
                  className={styles.mosaicImg}
                />
              </div>
              {/* Teal-border quote card */}
              <div className={styles.quoteCard}>
                <p className={styles.quoteText}>
                  &ldquo;The most secure way to bridge the gap between
                  accumulation and distribution.&rdquo;
                </p>
              </div>
            </div>

            {/* Column B: photo top, gold stat card bottom */}
            <div className={styles.colB}>
              <div className={styles.photoB}>
                <Image
                  src="/eia-img3.png"
                  alt="Professional business consultant in a sharp charcoal suit standing confidently in a modern architectural lobby"
                  fill
                  sizes="(max-width:900px) 50vw, 25vw"
                  className={styles.mosaicImg}
                />
              </div>
              <div className={styles.statCard}>
                <p className={styles.statValue}>100%</p>
                <p className={styles.statLabel}>Principal Protection</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
