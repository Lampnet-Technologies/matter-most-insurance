import React from "react";
import styles from "./ComplianceProtectionLayers.module.css";

const layers = [
  {
    number: "01",
    title: "Errors & Omissions",
    body: "Full liability coverage for professional services rendered, ensuring peace of mind for every client engagement.",
  },
  {
    number: "02",
    title: "Cyber Indemnity",
    body: "Advanced insurance protection against data breaches and digital asset liabilities.",
  },
  {
    number: "03",
    title: "Fidelity Bonding",
    body: "Compulsory bonding for all financial advisors and agents handling client capital.",
  },
  {
    number: "04",
    title: "Reinsurance Backing",
    body: "Tier-1 global reinsurance partnerships to safeguard against catastrophic loss events.",
  },
];

export default function ComplianceProtectionLayers() {
  return (
    <section
      className={styles.section}
      aria-label="Financial Protection Layers"
    >
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Financial Protection Layers</h2>
          <div className={styles.headingRule} aria-hidden="true" />
        </div>

        {/* 4-column grid with hairline dividers */}
        <ul className={styles.grid} role="list">
          {layers.map((layer) => (
            <li key={layer.number} className={styles.card}>
              <span className={styles.number} aria-hidden="true">
                {layer.number}
              </span>
              <h3 className={styles.title}>{layer.title}</h3>
              <p className={styles.body}>{layer.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
