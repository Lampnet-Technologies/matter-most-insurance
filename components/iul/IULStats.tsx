import React from "react";
import styles from "./IULStats.module.css";

const stats = [
  { value: "12.5%", label: "Avg. Cap Rate" },
  { value: "0%", label: "Guaranteed Floor" },
  { value: "100%", label: "Tax-Free Income" },
  { value: "Instant", label: "Liquidity Access" },
];

export default function IULStats() {
  return (
    <section className={styles.section} aria-label="IUL performance statistics">
      <div className={styles.container}>
        <dl className={styles.grid}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`${styles.item} ${i > 0 ? styles.itemBorder : ""}`}
            >
              <dt className={styles.value}>{stat.value}</dt>
              <dd className={styles.label}>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
