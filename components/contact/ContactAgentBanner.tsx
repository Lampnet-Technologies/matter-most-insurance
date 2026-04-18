import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ContactAgentBanner.module.css";

export default function ContactAgentBanner() {
  return (
    <section className={styles.section} aria-label="Agent portal">
      <div className={styles.container}>
        <div className={styles.banner}>
          {/* ── Left: copy ─────────────────────── */}
          <div className={styles.copy}>
            <span className={styles.eyebrow}>Expertise Portal</span>
            <h2 className={styles.heading}>
              Professional Advisors: Partner with the Monolith.
            </h2>
            <p className={styles.body}>
              Are you an agent looking for a more secure platform? Join our
              network of elite advisors managing premium assets nationwide.
            </p>
            <Link href="/agent-portal" className={styles.cta}>
              Enter Agent Portal
            </Link>
          </div>

          {/* ── Right: image pane ──────────────────────── */}
          <div className={styles.imagePane} aria-hidden="true">
            <Image
              src="/contactagentbanner2.png"
              alt="Professional advisors working together"
              fill
              className={styles.agentImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
