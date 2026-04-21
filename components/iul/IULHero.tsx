import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./IULHero.module.css";

export default function IULHero() {
  return (
    <section className={styles.section} aria-label="IUL product hero">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* ── Left (7/12): mega headline + body + CTA ── */}
          <div className={styles.leftCol}>
            <h1 className={styles.headline}>
              IUL: The <em className={styles.heroWord}>Hero</em> of All
              Protection Plans
            </h1>

            <p className={styles.subhead}>
              Indexed Universal Life insurance provides tax-free wealth
              building, market growth without market risk, and access to living
              benefits when you need them most.
            </p>

            <div className={styles.ctaRow}>
              <Link href="/contact" className={styles.btnPrimary}>
                Get My Free Hero Protection Plan
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* ── Right (5/12): photo + floating stat totem ── */}
          <div className={styles.rightCol}>
            <div className={styles.imageFrame}>
              <Image
                src="/iul-img1.png"
                alt="Modern architectural glass skyscraper reflecting blue sky, signifying financial strength and security"
                fill
                priority
                sizes="(max-width:900px) 100vw, 42vw"
                className={styles.heroImg}
              />
            </div>

            {/* Gold left-border totem card — bottom-left */}
            <div className={styles.totem}>
              <p className={styles.totemValue}>98%</p>
              <p className={styles.totemLabel}>Claim Approval Rating in 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
