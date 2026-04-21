import React from "react";
import { Shield, Home, Heart } from "lucide-react";
import styles from "./LTCBenefits.module.css";

const benefits = [
  {
    id: "asset-protection",
    icon: <Shield />,
    iconTheme: "navy",
    title: "Asset Protection",
    body: "Shield your hard-earned savings and real estate from the rising costs of private nursing and specialised care, ensuring your legacy remains intact for the next generation.",
  },
  {
    id: "home-care",
    icon: <Home />,
    iconTheme: "teal",
    title: "Home Care",
    body: "Retain the comfort of your own residence with comprehensive coverage that supports professional home nursing, adaptive renovations, and day-to-day medical management.",
  },
  {
    id: "in-home-assistance",
    icon: <Heart />,
    iconTheme: "gold",
    title: "In-Home Assistance",
    body: "Professional support for daily living activities, including meal preparation, mobility assistance, and medication adherence, provided by certified caregivers you trust.",
  },
];

export default function LTCBenefits() {
  return (
    <section className={styles.section} aria-label="LTC Benefits">
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Strategic Preservation of Wealth &amp; Wellness
          </h2>
          <p className={styles.subhead}>
            Beyond standard care, our Long-Term Care solutions are designed as
            architectural safeguards for your financial estate.
          </p>
        </div>

        {/* 3-column benefit cards */}
        <ul className={styles.grid} role="list">
          {benefits.map((benefit) => (
            <li
              key={benefit.id}
              className={`${styles.card} ${styles[`card_${benefit.iconTheme}`]}`}
            >
              <div
                className={`${styles.iconWrap} ${styles[`icon_${benefit.iconTheme}`]}`}
                aria-hidden="true"
              >
                {benefit.icon}
              </div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardBody}>{benefit.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
