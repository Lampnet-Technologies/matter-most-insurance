import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import styles from "./LTCGapStrategy.module.css";

const checklistItems = [
  {
    title: "Custom Benefit Periods",
    body: "Tailor your duration of care to your family's health history.",
  },
  {
    title: "Inflation Protection",
    body: "Ensuring your daily benefit amount grows as healthcare costs rise.",
  },
];

export default function LTCGapStrategy() {
  return (
    <section className={styles.section} aria-label='The "Gap" Strategy — Why Medicare Isn&apos;tEnough'>
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* ── Left: 2×2 image mosaic ─────────────── */}
          <div className={styles.mosaicCol}>
            {/* Column A: photo top, teal card bottom */}
            <div className={styles.mosaicColA}>
              <div className={styles.mosaicPhotoA}>
                <Image
                  src="/LTC-Image2.png"
                  alt="Tranquil minimalist living room with large glass windows overlooking a serene forest"
                  fill
                  sizes="(max-width:900px) 50vw, 25vw"
                  className={styles.mosaicImg}
                />
              </div>
              <div className={`${styles.mosaicCard} ${styles.mosaicCardTeal}`}>
                <span className={styles.mosaicCardText}>
                  Comprehensive Care
                </span>
              </div>
            </div>

            {/* Column B: navy card top (offset down), photo bottom */}
            <div className={styles.mosaicColB}>
              <div className={`${styles.mosaicCard} ${styles.mosaicCardNavy}`}>
                <span className={styles.mosaicCardText}>
                  24/7 Concierge
                </span>
              </div>
              <div className={styles.mosaicPhotoB}>
                <Image
                  src="/LTC-Image3.png"
                  alt="Close up of a luxury fountain pen resting on a heavy-weight parchment document"
                  fill
                  sizes="(max-width:900px) 50vw, 25vw"
                  className={styles.mosaicImg}
                />
              </div>
            </div>
          </div>

          {/* ── Right: editorial content ────────────── */}
          <div className={styles.contentCol}>
            <h2 className={styles.heading}>
              The &ldquo;Gap&rdquo; Strategy:
              <br />
              Why Medicare Isn&rsquo;t Enough
            </h2>

            <div className={styles.bodyText}>
              <p>
                Most Americans assume federal programs cover their twilight
                years. The reality is far more selective. While Medicare handles
                acute clinical needs, it often excludes the very services that
                allow for dignity: daily assistance, long-term home stays, and
                cognitive care.
              </p>
              <p className={styles.bodyEmphasis}>
                Our LTC strategy isn&rsquo;t just an insurance product—it&rsquo;s
                a financial instrument for total freedom.
              </p>
            </div>

            <ul className={styles.checklist} role="list">
              {checklistItems.map((item) => (
                <li key={item.title} className={styles.checkItem}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    <CheckCircle />
                  </span>
                  <div>
                    <p className={styles.checkTitle}>{item.title}</p>
                    <p className={styles.checkBody}>{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}