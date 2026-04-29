import React from "react";
import Image from "next/image";
import styles from "./AboutArchitecture.module.css";

export default function AboutArchitecture() {
  return (
    <section className={styles.section} aria-label="The Architecture of Certainty">
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* ── Left: boardroom photo ──────────────── */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <Image
                src="/about-img2.png"
                alt="Elegant executive boardroom with floor-to-ceiling windows overlooking a city skyline"
                fill
                sizes="(max-width:900px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
          </div>

          {/* ── Right: heading + body ──────────────── */}
          <div className={styles.contentCol}>
            <h2 className={styles.heading}>
              The Architecture of{" "}
              <em className={styles.headingItalic}>Certainty</em>
            </h2>

            <div className={styles.bodyText}>
              <p>
                Risk is not merely a variable to be managed; it is a structural
                component of progress. We engineer insurance solutions with the
                same precision and rigor as a modern skyscraper. Every policy,
                every advisory session, is a meticulously calculated load-bearing
                pillar in your enterprise&rsquo;s foundation.
              </p>
              <p>
                By layering sophisticated quantitative models with deep industry
                intuition, we create a bespoke environment where your ambitions
                are fully insulated from systemic volatility.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
