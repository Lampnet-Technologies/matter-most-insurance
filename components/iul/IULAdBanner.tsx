"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import styles from "./IULAdBanner.module.css";

interface AdBannerProps {
  placement?: "top" | "mid" | "bottom";
  className?: string;
}

const ADS = [
  "/ads1.png",
  "/ads2.png",
  "/ads3.png",
  "/ads4.png",
  "/ads5.png",
  "/ads6.png",
  "/ads7.png",
];

const ROTATION_INTERVAL = 5000; // 5 seconds

export default function IULAdBanner({
  placement = "top",
  className = "",
}: AdBannerProps) {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ADS.length);
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  if (isClosed) {
    return <div className={`${styles.wrapper} ${styles.empty} ${className}`} />;
  }

  return (
    <div
      className={`${styles.wrapper} ${className}`}
      aria-label="Advertisement"
    >
      {/*  <p className={styles.label}>Sponsor Insight</p> */}
      <div className={styles.slot}>
        <Image
          src={ADS[currentAdIndex]}
          alt={`Advertisement ${currentAdIndex + 1}`}
          fill
          style={{ objectFit: "cover" }}
          priority={currentAdIndex === 0}
          sizes="(max-width: 768px) 100vw, 728px"
        />
        <button
          className={styles.closeBtn}
          aria-label="Close advertisement"
          title="Close"
          onClick={() => setIsClosed(true)}
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
