import React from "react";
import styles from "./TLBCoverageGrid.module.css";

const coverageItems = [
  {
    id: "payout",
    eyebrow: "Payout Logic",
    title: "Lump Sum Security",
    body: "Unlike secondary market options, TLB ensures your beneficiaries receive a tax-free lump sum payment designed to replace income, pay off mortgages, and fund educational legacies.",
  },
  {
    id: "underwriting",
    eyebrow: "Underwriting",
    title: "Algorithmic Precision",
    body: 'Our proprietary "Smart-Term" underwriting uses real-time data points to bypass invasive exams for qualified applicants, reducing approval times from weeks to minutes.',
  },
  {
    id: "customization",
    eyebrow: "Customization",
    title: "Rider Architecture",
    body: "Add layers of protection with Child Term Riders, Waiver of Premium, and Accidental Death benefits to tailor the policy to your specific familial architecture.",
  },
  {
    id: "consultation",
    eyebrow: "Consultation",
    title: "Expert Oversight",
    body: "Every policy is backed by a dedicated Expertise Manager who reviews your coverage annually to ensure it aligns with your evolving financial objectives.",
  },
];

export default function TLBCoverageGrid() {
  return (
    <section className={styles.section} aria-label="Comprehensive Coverage Benefits">
      <div className={styles.container}>
        <h2 className={styles.heading}>Comprehensive Coverage Benefits</h2>

        <ul className={styles.grid} role="list">
          {coverageItems.map((item) => (
            <li key={item.id} className={styles.card}>
              <span className={styles.eyebrow}>{item.eyebrow}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardBody}>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
