import React from "react";
import styles from "./ContactProtocol.module.css";

const steps = [
  {
    number: "01",
    title: "Discovery Scan",
    body: "Within 24 hours, a senior advisor reviews your submission and assets to identify structural gaps in your current coverage.",
  },
  {
    number: "02",
    title: "Drafting Phase",
    body: "We curate a bespoke insurance blueprint, selecting specific vehicles (IUL, LTC, etc.) tailored to your risk profile.",
  },
  {
    number: "03",
    title: "Verification",
    body: "A virtual or in-person session to finalise your plan and initiate the secure transfer of risk to Matter Most.",
  },
];

export default function ContactProtocol() {
  return (
    <section
      className={styles.section}
      aria-label="What happens next — the protocol"
    >
      <div className={styles.container}>
        {/* ── Section header ───────────────── */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>The Protocol</span>
            <h2 className={styles.heading}>What Happens Next?</h2>
          </div>
          <p className={styles.headerDesc}>
            Transparency is the bedrock of insurance architecture. Here is our
            three-step engagement process.
          </p>
        </div>

        {/* ── Steps grid ───────────────────── */}
        <ol className={styles.stepsGrid} role="list">
          {steps.map((step, i) => (
            <li key={step.number} className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">
                {step.number}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
