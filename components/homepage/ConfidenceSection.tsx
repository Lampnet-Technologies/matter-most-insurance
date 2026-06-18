import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ConfidenceSection.module.css";

export default function ConfidenceSection() {
  return (
    <section className={styles.section} aria-label="Financial Confidence">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            More Than Protection, A Path to Financial Confidence
          </h2>
          <p className={styles.body}>
            We help individuals, families, and business owners protect what
            matters most while creating opportunities for long-term financial
            growth. Through innovative protection products and wealth-building
            strategies, our solutions support retirement planning, asset
            protection, legacy preservation, and financial security at every
            stage of life.
          </p>
          <div className={styles.action}>
            <Link href="/about" className={styles.btnPrimary}>
              About Us
            </Link>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/homepage-img-2.png"
            alt="Advisor consultation for financial confidence"
            fill
            sizes="(max-width: 900px) 100vw, 686px"
            className={styles.image}
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
