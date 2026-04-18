import React from "react";
import styles from "./AdBanner.module.css";

interface AdBannerProps {
  placement?: "top" | "mid" | "bottom";
  className?: string;
}

export default function AdBanner({
  placement = "top",
  className = "",
}: AdBannerProps) {
  return (
    <div
      className={`${styles.wrapper} ${className}`}
      aria-label="Advertisement"
    >
      <p className={styles.label}>Sponsor Insight</p>
      <div className={styles.slot}>
        <span className={styles.slotText}>Leaderboard 728×90</span>
      </div>
    </div>
  );
}
