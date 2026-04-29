import React from "react";
import Image from "next/image";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.section} aria-label="Our heroic story">
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* ── Left: copy ────────────────────────── */}
          <div className={styles.leftCol}>
            {/* Ghost "M" watermark behind content */}
            <div className={styles.watermark} aria-hidden="true">
              <WatermarkIcon />
            </div>

            <div className={styles.copyContent}>
              <h1 className={styles.headline}>
                Our Heroic{" "}
                <br />
                <em className={styles.headlineItalic}>Story.</em>
              </h1>

              <p className={styles.body}>
                We don&rsquo;t just manage risk; we architect certainty in an
                uncertain world. Founded on the principles of structural
                integrity and uncompromising foresight, Matter Most was built
                to serve as the monolithic foundation for the world&rsquo;s most
                complex enterprises.
              </p>

              {/* Gold left-border pull-quote */}
              <blockquote className={styles.pullQuote}>
                <span className={styles.quoteBar} aria-hidden="true" />
                <p className={styles.quoteText}>
                  &ldquo;Building fortresses for financial legacies since
                  1994.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>

          {/* ── Right: tall architectural photo ───── */}
          <div className={styles.rightCol}>
            <div className={styles.imageFrame}>
              <Image
                src="/iul-img1.png"
                alt="Modern architectural glass skyscraper with clean geometric lines, symbolising structural integrity"
                fill
                priority
                sizes="(max-width:900px) 100vw, 45vw"
                className={styles.heroImg}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* Ghost watermark icon — double-M or shield shape */
function WatermarkIcon() {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" aria-hidden="true">
      <path d="M20 160V40l40 60 40-60 40 60 40-60v120h-20V80l-20 30-20-30v80h-20V80l-20 30-20-30v80H20z" opacity="0.06"/>
    </svg>
  );
}
