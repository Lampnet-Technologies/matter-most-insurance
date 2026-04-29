import styles from "./LTCStories.module.css";

const stories = [
  {
    name: "Eva, Age 40",
    condition: "Heart Attack (Critical Illness)",
    story:
      "Eva started a business with a $250,000 loan and bought an IUL for the same face amount. Ten years later, a serious heart attack struck. She accelerated her IUL death benefit and received more than enough funds for medical bills and all financial needs. Her business survived. Her family was safe.",
  },
  {
    name: "Sarah",
    condition: "Chronic Illness After Car Accident",
    story:
      "Sarah paid under $28/month for a $300,000 IUL. After a car accident led to chronic illness, she was able to accelerate her benefit. After paying only $4,487.84 in premiums, she received a cash payout of $34,549 used for mortgage and medical expenses.",
  },
  {
    name: "Robert, Age 45",
    condition: "Terminal Cancer (8 Months to Live)",
    story:
      "Robert bought a $500,000 IUL. Ten years later: pancreatic cancer, 8 months to live. He accelerated his death benefit immediately. No financial stress. Enough money for treatment and every need. He survived.",
  },
];

export default function LTCStories() {
  return (
    <section className={styles.section} aria-label="Real hero stories">
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Real Hero Stories</h2>

        <div className={styles.grid}>
          {stories.map((s, i) => (
            <article key={i} className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.cardName}>{s.name}</h3>
                <span className={styles.cardCondition}>{s.condition}</span>
              </header>
              <p className={styles.cardBody}>{s.story}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}