import React from "react";
import Image from "next/image";
import styles from "./AgentRevenue.module.css";

const opportunities = [
  {
    number: "01",
    title: "Aggressive Commission Structures",
    body: "We offer top-tier street level contracts and performance-based overrides that reward growth and architectural stability.",
  },
  {
    number: "02",
    title: "Renewal Wealth Building",
    body: "Lifetime vesting on renewals ensures your book of business becomes a lasting financial asset for your future.",
  },
  {
    number: "03",
    title: "Quarterly Profit Participation",
    body: "Share in the success of the firm through our unique transparency model and performance pools.",
  },
];

export default function AgentRevenue() {
  return (
    <section
      className={styles.section}
      aria-label="Agent Revenue Opportunities"
    >
      <div className={styles.container}>
        {/* ── Left: image with floating stat badge ── */}
        <div className={styles.imageCol}>
          {/* Gold blur orb behind image */}
          <div className={styles.orb} aria-hidden="true" />

          <div className={styles.imageWrap}>
            <Image
              src="/join-us-image2.png"
              alt="Professional business interaction in a bright modern office"
              fill
              sizes="(max-width:900px) 100vw, 50vw"
              className={styles.image}
            />
          </div>

          {/* Floating stat badge */}
          <div className={styles.statBadge}>
            <span className={styles.statValue}>98%</span>
            <span className={styles.statLabel}>Agent Retention</span>
          </div>
        </div>

        {/* ── Right: heading + numbered items ─────── */}
        <div className={styles.contentCol}>
          <h2 className={styles.heading}>Agent Revenue Opportunities</h2>

          <ol className={styles.list} role="list">
            {opportunities.map((item) => (
              <li key={item.number} className={styles.item}>
                <div className={styles.itemNumber} aria-hidden="true">
                  {item.number}
                </div>
                <div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemBody}>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
