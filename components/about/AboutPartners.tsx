import React from "react";
import styles from "./AboutPartners.module.css";

const partners = [
  "Luminary",
  "Aeterna",
  "Vanguard",
  "Oak & Iron",
];

export default function AboutPartners() {
  return (
    <section className={styles.section} aria-label="Strategic Ecosystem partners">
      <div className={styles.container}>
        <div className={styles.card}>
          <p className={styles.label}>Strategic Ecosystem</p>

          <ul className={styles.partners} role="list">
            {partners.map((partner) => (
              <li key={partner} className={styles.partner}>
                {partner}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
