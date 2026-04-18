import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./KnowledgeHubSection.module.css";

const articles = [
  {
    category: "Wealth Preservation",
    title: "The Infinite Banking Protocol: Beyond Standard Coverage",
    excerpt:
      "Discover how cash-value accumulation can serve as your personal private bank while maintaining maximum protection levels.",
    href: "/articles/infinite-banking",
    image: "/Container%20(10).png",
    imageAlt: "Editorial cover for wealth preservation",
  },
  {
    category: "Risk Analysis",
    title: "The 5 Pillars of Business Continuity in Volatile Markets",
    excerpt:
      "Protecting your enterprise means planning for the unexpected. We analyse the core structures of resilient businesses.",
    href: "/articles/business-continuity",
    image: "/Risk%20Analysis.png",
    imageAlt: "Editorial cover for risk analysis",
  },
  {
    category: "Legacy Building",
    title: "Structured Settlement vs. Lump Sum: A Hero's Guide",
    excerpt:
      "Strategic distributions of wealth can ensure multiple generations remain secure. Which path fits your long-term roadmap?",
    href: "/articles/settlement-guide",
    image: "/Legacy%20Building.png",
    imageAlt: "Editorial cover for legacy building",
  },
];

export default function KnowledgeHubSection() {
  return (
    <section className={styles.section} aria-label="Knowledge Hub">
      <div className={styles.container}>
        {/* Header row */}
        <div className={styles.header}>
          <div>
            <h2 className={styles.heading}>
              Knowledge Hub: Editorial Insights
            </h2>
            <p className={styles.subheading}>
              Intelligence for the modern pragmatic protector.
            </p>
          </div>
          <Link href="/articles" className={styles.exploreLink}>
            Explore All Articles →
          </Link>
        </div>

        {/* Article cards */}
        <ul className={styles.grid} role="list">
          {articles.map((article) => (
            <li key={article.title}>
              <Link href={article.href} className={styles.card}>
                {/* Dark image placeholder */}
                <div className={styles.cardImage} aria-hidden="true">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    sizes="fit-content"
                    fill
                    className={styles.cardImageImage}
                  />
                  <div className={styles.imageScanlines} />
                  <div className={styles.imageGlint} />
                </div>

                {/* Card body */}
                <div className={styles.cardBody}>
                  <span className={styles.category}>{article.category}</span>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.excerpt}>{article.excerpt}</p>
                  <span className={styles.readMore}>Read More →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
