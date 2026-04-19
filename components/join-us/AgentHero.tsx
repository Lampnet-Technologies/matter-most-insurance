import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./AgentHero.module.css";

export default function AgentHero() {
  return (
    <section className={styles.section} aria-label="Agent partnership hero">
      {/* Background image */}
      <div className={styles.imageBg}>
        <Image
          src="/join-us-heroimage.png"
          alt="Modern architectural glass skyscraper reflecting a clear blue sky with sharp geometric lines"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        {/* Scrim: dark left → transparent right */}
        <div className={styles.scrim} aria-hidden="true" />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.inner}>
          <span className={styles.eyebrow}>Agent Partnership Program</span>

          <h1 className={styles.headline}>
            Architect Your
            <br />
            Own Success.
          </h1>

          <p className={styles.subhead}>
            Join the Hero Team at Matter Most. We provide the monolithic
            infrastructure; you build the legacy of protection.
          </p>

          <Link href="#join-form" className={styles.cta}>
            Become a Hero
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
