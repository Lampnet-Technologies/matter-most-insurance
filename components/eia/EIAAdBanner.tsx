import React from "react";
import styles from "./EIAAdBanner.module.css";

export default function EIAAdBanner() {
  return (
    <div className={styles.wrapper} aria-label="Advertisement">
      <div className={styles.slot}>
        <span className={styles.label}>Advertisement: Leaderboard 728×90</span>
      </div>
    </div>
  );
}
