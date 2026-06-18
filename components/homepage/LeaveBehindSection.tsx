import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./LeaveBehindSection.module.css";

export default function LeaveBehindSection() {
  return (
    <section className={styles.section} aria-label="Living Benefits Protection">
      <div className={styles.container}>
        <div className={styles.imagesContainer}>
          <div className={styles.imageWrapper1}>
            <Image
              src="/homepage-img-1.png"
              alt="Elderly couple consulting with financial advisor"
              fill
              sizes="(max-width: 900px) 100vw, 344px"
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper2}>
            <Image
              src="/about-img2.png"
              alt="Professional business meeting discussion"
              fill
              sizes="(max-width: 900px) 100vw, 344px"
              className={styles.image}
            />
          </div>
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Protection Is Not Just About What You Leave Behind
          </h2>
          <div className={styles.bodyBlock}>
            <p className={styles.body}>
              Traditional insurance focuses on what happens after death. Modern
              protection strategies can also help provide financial support while
              you&rsquo;re living. Whether planning for retirement, preserving assets,
              or preparing for unexpected health events, today&rsquo;s solutions are
              designed to serve multiple purposes throughout your lifetime.
            </p>
            <p className={styles.body}>
              Our protection plans are designed in a way that buying a plan also
              generates income that can be passed to the younger generation.
            </p>
          </div>
          <div className={styles.action}>
            <Link href="/services" className={styles.btnPrimary}>
              View Opportunities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
