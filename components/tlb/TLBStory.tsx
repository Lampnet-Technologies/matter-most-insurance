import React from "react";
import Image from "next/image";
import styles from "./TLBStory.module.css";
import { Star, Users } from "lucide-react";

export default function TLBStory() {
  return (
    <section className={styles.section} aria-label="Client success story — The Thompson Family">
      <div className={styles.container}>
        <div className={styles.card}>

          {/* ── Left: family photo ─────────────────── */}
          <div className={styles.imageCol}>
            <Image
              src="/tlb-img2.png"
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
              <span className={styles.eyebrow}>Client Success Story</span>
            </div>

            <h2 className={styles.heading}>
              &ldquo;Immediate Certainty for Our Growing Family&rdquo;
            </h2>

            <div className={styles.bodyText}>
              <p>
                When the Thompson family welcomed their second child, their
                financial priorities shifted overnight. They needed more than
                just a policy; they needed{" "}
                <strong>immediate peace of mind</strong> that didn&rsquo;t
                sacrifice their future liquidity.
              </p>
              <p>
                By choosing our Term Life series, they secured a $1.5M death
                benefit with <strong>living benefits</strong>, ensuring that if
                a health crisis ever struck, they could access funds while still
                alive.
              </p>
              <p className={styles.pullQuote}>
                &ldquo;Matter Most gave us the confidence to dream big for our
                kids, knowing our foundation is unbreakable today and
                tomorrow.&rdquo;
              </p>
            </div>

            {/* Attribution */}
            <div className={styles.attribution}>
              <div className={styles.attributionIcon} aria-hidden="true">
                <Users size={20} />
              </div>
              <div>
                <p className={styles.attributionName}>The Thompson Family</p>
                <p className={styles.attributionSub}>Secured $1.5M TLB Policy</p>
              </div>
            </div>
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