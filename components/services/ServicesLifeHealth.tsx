import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./ServicesLifeHealth.module.css";
import Link from "next/link";

export default function ServicesLifeHealth() {
  return (
    <section className={styles.section} aria-label="Life & Health services">
      <div className={styles.container}>
        {/* ── Image on top ───────────────────────────── */}
        <div className={styles.imageWrapper}>
          <Image
            src="/services-life.png"
            alt="Modern skyscraper with glass facade"
            fill
            sizes="fill"
            loading="eager"
            className={styles.image}
          />
          <div className={styles.imageOverlay} aria-hidden="true"></div>
        </div>

        {/* ── Content below image ────────────────────── */}
        <div className={styles.content}>
          <span className={styles.numberLabel}>01</span>
          <h2 className={styles.heading}>Indexed Universal Life(IUL)</h2>
          <p className={styles.description}>
            Comprehensive coverage that adapts to the lifecycle of your family
            and career. We provide a safety net that doesn&apos;t just catch
            you, but propels you forward through tailored health and mortality
            strategies.
          </p>
          <Link href="/indexed-universal-life" className={styles.cta}>
            Explore Frameworks <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}