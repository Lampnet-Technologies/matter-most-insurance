import React from "react";
import { Zap, Shield, FileText, Check } from "lucide-react";
import styles from "./TLBHeroOptions.module.css";

const options = [
  {
    id: "hero-option",
    icon: <Zap />,
    iconTheme: "teal",
    title: "The Hero Option",
    body: "Our flagship Living Benefits rider allows you to access your death benefit while you are still alive in the event of a qualifying chronic or critical illness.",
  },
  {
    id: "renewability",
    icon: <Shield />,
    iconTheme: "gray",
    title: "Guaranteed Renewability",
    body: "Lock in your protection. Your coverage remains active as long as premiums are paid, regardless of future changes in your health or occupation.",
  },
  {
    id: "convertible",
    icon: <FileText />,
    iconTheme: "gray",
    title: "Convertible Clauses",
    body: "Flexibility for the future. Convert your term policy to permanent coverage without a new medical exam at any point during your term.",
  },
];

const excellenceFeatures = [
  "Flexible 15, 20, 25, and 30-year terms",
  "No-exam options up to $500,000",
  "Accelerated death benefit at no cost",
  "Digital-first application with instant decisions",
];

export default function TLBHeroOptions() {
  return (
    <section className={styles.section} aria-label="TLB policy options and excellence features">
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* ── Left: 3 icon+text option rows ──────── */}
          <div className={styles.optionsCol}>
            {options.map((opt) => (
              <div key={opt.id} className={styles.option}>
                <div
                  className={`${styles.iconWrap} ${styles[`icon_${opt.iconTheme}`]}`}
                  aria-hidden="true"
                >
                  {opt.icon}
                </div>
                <div>
                  <h3 className={styles.optionTitle}>{opt.title}</h3>
                  <p className={styles.optionBody}>{opt.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Right: dark navy excellence card ───── */}
          <div className={styles.excellenceCard}>
            {/* Teal blur orb — bottom-right */}
            <div className={styles.orb} aria-hidden="true" />

            <div className={styles.excellenceContent}>
              <h2 className={styles.excellenceTitle}>Designed for Excellence</h2>
              <div className={styles.excellenceRule} aria-hidden="true" />

              <ul className={styles.featureList} role="list">
                {excellenceFeatures.map((feat) => (
                  <li key={feat} className={styles.featureItem}>
                    <span className={styles.featureCheck} aria-hidden="true">
                      <Check />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── SVG icons ─────────────────────────────────── */
/* function BoltIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6l-9-4z"/>
    </svg>
  );
}

function ContractIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <line x1="10" y1="9" x2="8" y2="9"/>
      <path d="M14 17l2-2-2-2" strokeWidth="1.4"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5l-4-4 1.41-1.41L10 13.67l6.59-6.59L18 8.5l-8 8z"/>
    </svg>
  );
}
 */