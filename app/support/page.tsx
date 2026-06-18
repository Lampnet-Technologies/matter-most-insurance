"use client";

import React, { useState } from "react";
import MainNav from "@/components/navbars/MainNav";
import MainFooter from "@/components/footers/MainFooter";
import { ChevronRight } from "lucide-react";
import styles from "./support.module.css";

const faqs = [
  {
    id: 1,
    question: "What does Mattermost do?",
    answer:
      "We offer the vast selection of benefits and services from Indexed Universal Life (IUL) Insurance with Living Benefits, Equity Indexed Annuity (EIA), Long-Term Care (LTC), and Term-Life Insurance (TLB) with Living Benefits through partnerships with some of the most well-trusted insurance providers and carriers in the US and Canada. In fact, each company we partner with must be rated A or higher by industry standards.",
  },
  {
    id: 2,
    question: "What medical condition does Long Term Care cover?",
    answer:
      "Long-term care insurance generally covers care for chronic illnesses, disabilities, or cognitive impairments (like Alzheimer's) that affect your ability to perform activities of daily living (ADLs) such as bathing, dressing, eating, and transferring.",
  },
  {
    id: 3,
    question: "What platforms does Instapay payment gateway support?",
    answer:
      "Instapay payment gateway supports all major web and mobile platforms, integrating seamlessly with Shopify, WooCommerce, Magento, and custom React/Next.js storefronts through our robust developer API.",
  },
  {
    id: 4,
    question: "Does Instapay provide international payments support?",
    answer:
      "Yes, Instapay provides comprehensive international payment processing, supporting over 135 currencies and local payment methods worldwide, enabling you to receive payments from global clients securely.",
  },
  {
    id: 5,
    question: "Is there any setup fee or annual maintenance fee that I need to pay regularly?",
    answer:
      "No, we do not charge any setup fees or hidden annual maintenance fees. Our pricing is transparent and based strictly on a flat transaction fee or plan premium, with no regular overhead costs.",
  },
];

export default function SupportPage() {
  const [activeFaqId, setActiveFaqId] = useState(1);
  const activeFaq = faqs.find((f) => f.id === activeFaqId) || faqs[0];

  return (
    <div className={styles.section}>
      <MainNav />

      {/* Skyscraper Hero Banner */}
      <section className={styles.hero} aria-label="FAQ Header">
        <h1 className={styles.heroTitle}>FAQ</h1>
      </section>

      <main id="main-content" className={styles.main}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>

          <div className={styles.faqLayout}>
            {/* Left Column: Questions List */}
            <div className={styles.questionsList} role="tablist" aria-label="Questions list">
              {faqs.map((faq) => {
                const isActive = faq.id === activeFaqId;
                return (
                  <button
                    key={faq.id}
                    className={`${styles.faqBtn} ${isActive ? styles.faqBtnActive : ""}`}
                    onClick={() => setActiveFaqId(faq.id)}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`faq-panel-${faq.id}`}
                    id={`faq-tab-${faq.id}`}
                  >
                    <span
                      className={`${styles.dot} ${isActive ? styles.dotActive : ""}`}
                      aria-hidden="true"
                    />
                    <span className={styles.questionText}>{faq.question}</span>
                    <ChevronRight
                      size={18}
                      className={`${styles.chevron} ${isActive ? styles.chevronActive : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Answer Panel */}
            <div
              className={styles.answerCard}
              id={`faq-panel-${activeFaq.id}`}
              role="tabpanel"
              aria-labelledby={`faq-tab-${activeFaq.id}`}
            >
              <h3 className={styles.answerTitle}>{activeFaq.question}</h3>
              <p className={styles.answerText}>{activeFaq.answer}</p>
            </div>
          </div>
        </div>
      </main>

      <MainFooter />
    </div>
  );
}
