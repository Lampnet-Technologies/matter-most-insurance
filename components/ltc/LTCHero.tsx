import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import styles from "./LTCHero.module.css";

export default function LTCHero() {
  return (
    <section className={styles.section} aria-label="LTC product hero">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* ── Left col (7/12): copy ──────────────── */}
          <div className={styles.leftCol}>
            {/* "Product Spotlight" pill */}
            <div className={styles.pill}>Product Spotlight</div>

            <h1 className={styles.headline}>
              LTC: The Hero Who Plans for Every Season of Life
            </h1>

            <p className={styles.subhead}>
              LTC coverage fills the gaps Medicare doesn&rsquo;t, protecting
              your assets, preserving your dignity, and reducing your
              family&rsquo;s burden.
            </p>

            <div className={styles.ctas}>
              <Link href="/contact" className={styles.btnPrimary}>
                Protect My Legacy
              </Link>
              <Link href="/ltc/guide" className={styles.btnGhost}>
                <FileText />
                Download Policy Guide
              </Link>
            </div>
          </div>

          {/* ── Right col (5/12): tilted image + stat card ── */}
          <div className={styles.rightCol}>
            {/* Slightly-rotated image frame */}
            <div className={styles.imageFrame}>
              <Image
                src="/LTC-Image1.png"
                alt="Elegant senior woman in a light-filled modern home, looking confidently out a window"
                fill
                priority
                sizes="(max-width:900px) 100vw, 42vw"
                className={styles.heroImage}
              />
            </div>

            {/* Floating stat card — bottom-left of the image frame */}
            <div className={styles.statCard}>
              <div className={styles.statRow}>
                <div className={styles.statBar} aria-hidden="true" />
                <div>
                  <p className={styles.statValue}>92%</p>
                  <p className={styles.statLabel}>Asset Retention Rate</p>
                </div>
              </div>
              <p className={styles.statQuote}>
                &ldquo;We didn&rsquo;t just buy a policy; we secured our
                children&rsquo;s inheritance.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
