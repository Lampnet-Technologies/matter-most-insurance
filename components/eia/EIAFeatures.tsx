import React from "react";
import { Wallet, Shield, CreditCard, } from "lucide-react";
import styles from "./EIAFeatures.module.css";

const features = [
  {
    id: "lifetime-income",
    dark: false,
    icon: <Wallet/>,
    title: "Guaranteed Lifetime Income",
    body: "A structural promise of liquidity that outlasts your horizon, regardless of volatility.",
  },
  {
    id: "market-risk",
    dark: true,
    icon: <Shield />,
    title: "0% Market Risk",
    body: "Lock in gains and shield your principal with a hard-floor guarantee against market downturns.",
  },
  {
    id: "flexible-premium",
    dark: false,
    icon: <CreditCard />,
    title: "Flexible Premium",
    body: "Scale your contributions to match your financial architecture and evolving legacy goals.",
  },
];

export default function EIAFeatures() {
  return (
    <section className={styles.section} aria-label="EIA Precision Features">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Precision Features</h2>
          <div className={styles.rule} aria-hidden="true" />
        </div>

        <ul className={styles.grid} role="list">
          {features.map((f) => (
            <li key={f.id} className={`${styles.card} ${f.dark ? styles.cardDark : ""}`}>
              <span className={`${styles.iconWrap} ${f.dark ? styles.iconDark : ""}`} aria-hidden="true">
                {f.icon}
              </span>
              <h3 className={`${styles.cardTitle} ${f.dark ? styles.cardTitleDark : ""}`}>{f.title}</h3>
              <p className={`${styles.cardBody} ${f.dark ? styles.cardBodyDark : ""}`}>{f.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}