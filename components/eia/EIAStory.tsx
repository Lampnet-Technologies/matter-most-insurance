import React from "react";
import Image from "next/image";
import styles from "./EIAStory.module.css";
import { Star, Users } from "lucide-react";

export default function EIAStory() {
  return (
    <section
      className={styles.section}
      aria-label="Client success story — The Thompson Family"
    >
      <div className={styles.container}>
        <div className={styles.card}>
          {/* ── Left: family photo ─────────────────── */}
          <div className={styles.imageCol}>
            <Image
              src="/eia-img4.png"
              alt="A serene outdoor family portrait representing financial security and legacy"
              fill
              sizes="(max-width:900px) 100vw, 50vw"
              className={styles.storyImg}
            />
            {/* Subtle navy overlay tint */}
            <div className={styles.imgOverlay} aria-hidden="true" />
          </div>

          {/* ── Right: story editorial ─────────────── */}
          <div className={styles.contentCol}>
            <div className={styles.eyebrowRow}>
              <Star />
              <span className={styles.eyebrow}>Real Hero Scenario</span>
            </div>

            <h2 className={styles.heading}>Education Funding</h2>

            <div className={styles.bodyText}>
              <p>
                Parents and grandparents use EIAs to grow education funds
                safely. Tax-deferred growth timed to coincide with tuition
                years. If withdrawn after owner age 59½, only earnings are taxed
                at your current rate.
              </p>
              <h2 className={styles.heading}>Structured Settlements</h2>
              <p>
                Lottery winnings, legal settlements, sports contracts large lump
                sums often disappear fast. An EIA converts that windfall into a
                protected long-term income stream. Instead of one big taxable
                check, you receive structured, spread-out income.
              </p>
            </div>

            {/* Attribution */}
            {/* <div className={styles.attribution}>
              <div className={styles.attributionIcon} aria-hidden="true">
                <Users size={20} />
              </div>
              <div>
                <p className={styles.attributionName}>The Thompson Family</p>
                <p className={styles.attributionSub}>
                  Secured $1.5M TLB Policy
                </p>
              </div>
            </div> */}
            <p className={styles.conclusion}>
              Retire smart. Retire comfortably. Retire confidently. That is what
              matters most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
function FamilyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}
 */
