import React from "react";
import styles from "./Loading.module.css";

interface LoadingProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

export default function Loading({
  message = "Loading...",
  size = "md",
}: LoadingProps) {
  return (
    <div
      className={`${styles.wrapper} ${styles[size]}`}
      role="status"
      aria-live="polite"
    >
      <span className={styles.spinner} aria-hidden="true" />
      <span className={styles.message}>{message}</span>
    </div>
  );
}
