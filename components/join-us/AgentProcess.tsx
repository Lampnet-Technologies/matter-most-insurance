import React from "react";
import styles from "./AgentProcess.module.css";

const steps = [
  {
    number: "1",
    title: "Initial Discovery",
    body: "A confidential consultation to align your career goals with our monolithic infrastructure.",
  },
  {
    number: "2",
    title: "Strategic Alignment",
    body: "We map out your personalised business plan and revenue projections within our platform.",
  },
  {
    number: "3",
    title: "Seamless Integration",
    body: "Full onboarding to our tech suite, including data migration and licensing support.",
  },
  {
    number: "4",
    title: "Hero Launch",
    body: "Market activation with your dedicated support team and lead generation launch.",
  },
];

export default function AgentProcess() {
  return (
    <section
      className={styles.section}
      aria-label="Join the Hero Team — 4 step process"
    >
      <div className={styles.container}>
        {/* ── Section header ─────────────────── */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Join the Hero Team</h2>
          <p className={styles.subhead}>
            Your transition to a premier platform is executed with four
            calculated milestones.
          </p>
        </div>

        {/* ── Steps grid ─────────────────────── */}
        <ol className={styles.grid} role="list">
          {steps.map((step) => (
            <li key={step.number} className={styles.step}>
              {/* Ghost number — large, sits behind content */}
              <span className={styles.ghostNum} aria-hidden="true">
                {step.number}
              </span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
