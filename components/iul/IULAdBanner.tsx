import React from "react";
import styles from "./IULAdBanner.module.css";

export default function IULAdBanner() {
  return (
    <div className={styles.wrapper} aria-label="Advertisement">
      <div className={styles.slot}>
        <span className={styles.label}>Advertisement — 728×90</span>
      </div>
    </div>
  );
}
