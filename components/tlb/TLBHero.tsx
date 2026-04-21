import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./TLBHero.module.css";

export default function TLBHero() {
  return (
    <section className={styles.section} aria-label="TLB product hero">
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* ── Left (7/12) ─────────────────────────── */}
          <div className={styles.leftCol}>
            <span className={styles.pill}>TLB Series</span>

            <h1 className={styles.headline}>
              Term Life Insurance That{" "}
              <em className={styles.italic}>Pays You Now</em>, Not Just Later.
            </h1>

            <p className={styles.subhead}>
              Life insurance that pays you now, not just later. Coverage from
              $25k to $2M with no exam options and 15–30 year terms. Modern
              protection built for the velocity of today&rsquo;s wealth.
            </p>

            <div className={styles.ctas}>
              <Link href="/contact" className={styles.btnPrimary}>
                Get Protection
                <ArrowRight size={20} strokeWidth={2} aria-hidden="true" />
              </Link>
              <Link href="/tlb/rates" className={styles.btnSecondary}>
                View Rates
              </Link>
            </div>
          </div>

          {/* ── Right (5/12) ─────────────────────────── */}
          <div className={styles.rightCol}>
            <div className={styles.imageFrame}>
              <Image
                src="/tlb-img1.png"
                alt="Architectural facade of a glass skyscraper reflecting the sky"
                fill
                priority
                sizes="(max-width:900px) 100vw, 42vw"
                className={styles.heroImg}
              />
            </div>

            {/* Gold-border totem — bottom-left */}
            <div className={styles.totem}>
              <p className={styles.totemValue}>98.4%</p>
              <p className={styles.totemLabel}>Claims Approval Rate</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

