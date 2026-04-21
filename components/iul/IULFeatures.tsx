import React from "react";
import { ArrowRight, HeartPulse, ShieldCheck, TrendingUp } from "lucide-react";
import styles from "./IULFeatures.module.css";

const features = [
  {
    id: "living-benefits",
    icon: <HeartPulse size={22} aria-hidden="true" />,
    title: "Living Benefits",
    body: "Access critical funds during your lifetime for chronic or terminal illness, ensuring your quality of care without depleting assets.",
    cta: "Learn More",
    featured: false,
  },
  {
    id: "cash-value",
    icon: <TrendingUp size={22} aria-hidden="true" />,
    title: "Cash Value Growth",
    body: "Leverage market-linked growth without the downside risk. Your principal is protected by a 0% floor while you capture upside potential.",
    cta: "Analyze Charts",
    featured: true /* teal top border */,
  },
  {
    id: "death-benefit",
    icon: <ShieldCheck size={22} aria-hidden="true" />,
    title: "Death Benefit",
    body: "Provide a tax-free legacy for your loved ones. Ensure their financial future is secure with a guaranteed lump sum payment.",
    cta: "Estate Planning",
    featured: false,
  },
];

export default function IULFeatures() {
  return (
    <section className={styles.section} aria-label="IUL Feature Pillars">
      <div className={styles.container}>
        {/* ── Section header with horizontal rule ──── */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.heading}>Unmatched Performance</h2>
            <p className={styles.subhead}>
              The core pillars of our IUL strategy combine security with
              unprecedented growth potential.
            </p>
          </div>
          {/* Horizontal rule that flexes to fill remaining space */}
          <div className={styles.headerRule} aria-hidden="true" />
        </div>

        {/* ── 3-column feature cards ────────────────── */}
        <ul className={styles.grid} role="list">
          {features.map((f) => (
            <li
              key={f.id}
              className={`${styles.card} ${f.featured ? styles.cardFeatured : ""}`}
            >
              <div className={styles.iconWrap} aria-hidden="true">
                {f.icon}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardBody}>{f.body}</p>
              </div>
              {/* Reveal-on-hover CTA */}
              <div className={styles.cardCTA} aria-hidden="true">
                {f.cta}
                <ArrowRight size={16} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
