import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import styles from "./IULWealth.module.css";

const bullets = [
  "0% Floor Market Protection",
  "Tax-Free Loan Access",
  "No Contribution Limits",
];

export default function IULWealth() {
  return (
    <section
      className={styles.section}
      aria-label="Tax-Free Wealth Building Advantage"
    >
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* ── Left: copy ─────────────────────────── */}
          <div className={styles.copyCol}>
            <span className={styles.eyebrow}>Tax-Free Advantage</span>
            <h2 className={styles.heading}>
              Building Wealth that the Government Can&rsquo;t Touch
            </h2>
            <p className={styles.body}>
              Unlike a traditional 401(k) or IRA, your IUL cash value grows
              tax-deferred, and distributions can be taken tax-free. It&rsquo;s
              the ultimate strategic vehicle for retirement and legacy planning.
            </p>
            <ul className={styles.bullets} role="list">
              {bullets.map((b) => (
                <li key={b} className={styles.bulletItem}>
                  <span className={styles.bulletCheck} aria-hidden="true">
                    <CheckCircle size={20} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: photo ────────────────────────── */}
          <div className={styles.imageCol}>
            <Image
              src="/iul-img2.png"
              alt="Sleek modern interior of a luxury building with minimalist furniture and bright natural light"
              fill
              sizes="(max-width:900px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
