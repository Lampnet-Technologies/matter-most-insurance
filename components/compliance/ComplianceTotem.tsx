import React from "react";
import { Scale } from "lucide-react";
import styles from "./ComplianceTotem.module.css";

export default function ComplianceTotem() {
  return (
    <section
      className={styles.section}
      aria-label="Office of General Counsel statement"
    >
      <div className={styles.container}>
        {/* Vertical gold bar above quote */}
        <div className={styles.bar} aria-hidden="true" />

        <blockquote className={styles.quote}>
          &ldquo;Our legal framework is designed to be the invisible foundation
          of your financial security. We don&rsquo;t just meet standards; we
          define them.&rdquo;
        </blockquote>

        {/* Attribution: navy circle icon + label */}
        <div className={styles.attribution}>
          <div className={styles.attributionIcon} aria-hidden="true">
            <Scale size={20} />
          </div>
          <span className={styles.attributionLabel}>
            Office of General Counsel
          </span>
        </div>
      </div>
    </section>
  );
}
