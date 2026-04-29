import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./ServicesLivingBenefits2.module.css";
import Link from "next/link";

export default function ServicesLivingBenefits2() {
  return (
    <section className={styles.section} aria-label="Living benefits services">
      <div className={styles.container}>
        {/* ── Image on top ───────────────────────────── */}
        {/*  <div className={styles.imageWrapper}>
          <Image
            src="/services-life.png"
            alt="Modern skyscraper with glass facade"
            fill
            sizes="fill"
            loading="eager"
            className={styles.image}
          />
          <div className={styles.imageOverlay} aria-hidden="true"></div>
        </div> */}

        {/* ── Content below image ────────────────────── */}
        <div className={styles.content}>
          <span className={styles.numberLabel}>03</span>
          <h2 className={styles.heading}>Living Benefits</h2>
          <p className={styles.description}>
            Access your policy values while you&apos;re alive. Critical,
            chronic, and terminal illness riders ensure your protection acts as
            a resource during times of need.
          </p>
          <Link href="/term-life-benefits" className={styles.cta}>
            Explore Frameworks <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
