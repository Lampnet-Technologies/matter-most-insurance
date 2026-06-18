"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import MainNav from "@/components/navbars/MainNav";
import MainFooter from "@/components/footers/MainFooter";
import styles from "./lucrativeness.module.css";
import { Plus } from "lucide-react";

type TabKey = "iul" | "eia" | "ltc" | "tlb";

interface CardItem {
  title: string;
  desc: string;
}

interface ListGroup {
  title: string;
  items: string[];
}

interface AccordionItemData {
  title: string;
  desc: string;
}

interface TabData {
  tabLabel: string;
  section1Title: string;
  section1Cards: CardItem[];
  // Section 2 can be bullet groups or cards
  section2Title: string;
  section2Type: "bullets" | "cards";
  section2Bullets?: ListGroup[];
  section2Cards?: CardItem[];
  // Section 3 (Accordions) is optional
  section3Title?: string;
  section3Accordions?: AccordionItemData[];
  // Section 4 (Rows) is optional
  section4Title?: string;
  section4Rows?: CardItem[];
}

const tabContents: Record<TabKey, TabData> = {
  iul: {
    tabLabel: "Indexed Universal Life (IUL) Insurance",
    section1Title: "Ways income is accessed from an IUL",
    section1Cards: [
      {
        title: "Accelerated Living Benefits",
        desc: "The insured experiences a qualified illness condition.",
      },
      {
        title: "Accumulated Cash Value",
        desc: "The policy owner chooses to receive income from the policy cash value accumulation.",
      },
      {
        title: "Compensation Method",
        desc: "The policy owner chooses to either fully surrender or sell the policy.",
      },
      {
        title: "Death Benefits",
        desc: "The beneficiary is getting the death benefit after the insured has died.",
      },
    ],
    section2Title: "Accelerated Benefits Qualification Conditions",
    section2Type: "bullets",
    section2Bullets: [
      {
        title: "Critical Illness",
        items: ["Cancer", "Stroke", "Heart Attack", "Organ Transplant"],
      },
      {
        title: "Chronic Illness",
        items: ["Inability to perform ADLs", "Long-term care support"],
      },
      {
        title: "Cognitive Conditions",
        items: ["Alzheimer's Disease", "Lewy Body Dementia"],
      },
      {
        title: "Terminal Illness",
        items: ["Access benefits early"],
      },
    ],
    section3Title: "Ways to Access Your Accumulated Cash Value in an IUL Policy",
    section3Accordions: [
      {
        title: "Income for The Rest of Your Life",
        desc: "With an IUL, policyholders can structure systematic withdrawals or policy loans to establish a reliable, tax-free stream of income that can last throughout their retirement years.",
      },
      {
        title: "Policy Loans",
        desc: "Borrow against the accumulated cash value in the policy. Loans are typically tax-free and do not require regular monthly payments, as they can be repaid from the final death benefit.",
      },
      {
        title: "Borrow Cash Value",
        desc: "Use the cash value as leverage. You can borrow directly from the insurance company using your policy's cash value as collateral at competitive interest rates.",
      },
      {
        title: "Withdrawal",
        desc: "Directly withdraw cash from the policy's accumulated value. Withdrawals are generally tax-free up to the total amount of premiums paid (cost basis).",
      },
      {
        title: "Full Surrender",
        desc: "Cancel the policy entirely and receive the cash surrender value, which represents the total cash value minus any surrender charges or outstanding loans.",
      },
      {
        title: "Accelerated Benefit Riders",
        desc: "Access policy values early to cover costs associated with critical, chronic, or terminal illnesses if these riders are active.",
      },
      {
        title: "Collateral for Loans (Bank Loans)",
        desc: "Assign the policy's cash value to a commercial bank as collateral to secure a private loan, often under very favorable terms.",
      },
    ],
    section4Title: "Compensation Methods",
    section4Rows: [
      {
        title: "Fully Surrendering the Policy",
        desc: "Policyholders may choose to surrender their life insurance policy and receive its accumulated cash value. Once the policy is terminated, the funds can be used for medical treatment, personal expenses, or other financial needs.",
      },
      {
        title: "Life Settlement",
        desc: "If your life insurance policy no longer fits your needs, you may be able to sell it for cash and use the proceeds for long-term care, retirement, or other financial goals.",
      },
      {
        title: "Selling the policy to a viatical settlement company",
        desc: "A viatical settlement allows a policyholder to sell their life insurance policy to a third party in exchange for a lump-sum payment. The amount received is typically higher than the policy's cash value but lower than its full death benefit, providing access to funds while the insured is still living.",
      },
    ],
  },
  eia: {
    tabLabel: "Equity Indexed Annuities (EIA)",
    section1Title: "Why Choose an Equity Indexed Annuity?",
    section1Cards: [
      {
        title: "Principal Protection",
        desc: "Your initial investment is protected by the issuer, helping preserve your capital in market downturns.",
      },
      {
        title: "Growth Potential",
        desc: "Earn interest based partially on index returns, while maintaining downside protection.",
      },
      {
        title: "Retirement Planning",
        desc: "Ideal for accumulated savings, offering tax-deferral features to accelerate your growth.",
      },
      {
        title: "Income Security",
        desc: "Provides options for guaranteed lifetime income throughout your retirement years.",
      },
    ],
    section2Title: "Protection & Security Features",
    section2Type: "bullets",
    section2Bullets: [
      {
        title: "Insurance Company Guarantees",
        items: ["The issuer guarantees principal preservation and minimum interest credits."],
      },
      {
        title: "State Guarantee Funds",
        items: ["Additional protection may be available through state insurance guarantee associations."],
      },
      {
        title: "Lower Risk Exposure",
        items: ["Protects balance from stock market losses while tracking market indices."],
      },
      {
        title: "Retirement Security",
        items: ["Designed to help preserve wealth while generating growth opportunities."],
      },
    ],
    section3Title: "Annuity Payout Choices",
    section3Accordions: [
      {
        title: "Single Life Annuity",
        desc: "Provides regular payments for the lifetime of the annuitant, stopping immediately upon their death with no beneficiary payout.",
      },
      {
        title: "Life Annuity with Period Certain (Guaranteed)",
        desc: "Guarantees payments for the annuitant's lifetime, but if the annuitant dies within a specified period (e.g., 10 or 20 years), payments continue to the beneficiary for the remainder of that period.",
      },
      {
        title: "Joint and Survivor",
        desc: "Provides continuous income payments for the lifetimes of two individuals (usually spouses). Payments continue until both individuals have passed away.",
      },
      {
        title: "Cash Refund Option",
        desc: "If the annuitant dies before receiving payments equal to the total premium paid, the remaining balance is paid to the beneficiary in a lump sum.",
      },
      {
        title: "Systematic Withdrawals",
        desc: "Allows the owner to schedule regular, custom withdrawals from the annuity balance without formally initiating lifetime payouts (annuitization).",
      },
      {
        title: "Social Security Integration",
        desc: "Coordinates annuity distributions to align with Social Security benefit start dates, maximizing retirement cash flow efficiency.",
      },
    ],
  },
  ltc: {
    tabLabel: "Long-Term Care Insurance (LTC)",
    section1Title: "Ways income is accessed from an LTC",
    section1Cards: [
      {
        title: "Accelerated Living Benefits",
        desc: "The insured experiences a qualified illness condition.",
      },
      {
        title: "Death Benefits",
        desc: "The beneficiary is getting the death benefit when the insured has died.",
      },
      {
        title: "Compensation Method",
        desc: "The policy owner chooses to either fully surrender or sell the policy.",
      },
    ],
    section2Title: "Accelerated Benefits Qualification Conditions",
    section2Type: "bullets",
    section2Bullets: [
      {
        title: "Critical Illness",
        items: ["Cancer", "Stroke", "Heart Attack", "Organ Transplant"],
      },
      {
        title: "Chronic Illness",
        items: ["Inability to perform ADLs", "Long-term care support"],
      },
      {
        title: "Cognitive Conditions",
        items: ["Alzheimer's Disease", "Lewy Body Dementia"],
      },
      {
        title: "Terminal Illness",
        items: ["Access benefits early"],
      },
    ],
    section4Title: "Compensation Methods",
    section4Rows: [
      {
        title: "Fully Surrendering the Policy",
        desc: "Policyholders may choose to surrender their life insurance policy and receive its accumulated cash value. Once the policy is terminated, the funds can be used for medical treatment, personal expenses, or other financial needs.",
      },
      {
        title: "Life Settlement",
        desc: "If your life insurance policy no longer fits your needs, you may be able to sell it for cash and use the proceeds for long-term care, retirement, or other financial goals.",
      },
      {
        title: "Selling the policy to a viatical settlement company",
        desc: "A viatical settlement allows a policyholder to sell their life insurance policy to a third party in exchange for a lump-sum payment. The amount received is typically higher than the policy's cash value but lower than its full death benefit, providing access to funds while the insured is still living.",
      },
    ],
  },
  tlb: {
    tabLabel: "Term Life Insurance with Living Benefits (TLB)",
    section1Title: "Wealth Advantages",
    section1Cards: [
      {
        title: "Wealth Accumulation",
        desc: "By helping cover long-term care expenses, LTC insurance allows you to preserve more of your savings and investments for future financial goals.",
      },
      {
        title: "Wealth Protection",
        desc: "Avoid using retirement savings, investment accounts, or other assets to pay for costly long-term care services.",
      },
      {
        title: "Wealth Transfer",
        desc: "Protect the assets you intend to pass on to loved ones, charities, or future generations.",
      },
      {
        title: "Financial Security",
        desc: "Gain confidence knowing that unexpected healthcare costs are less likely to disrupt your long-term financial plans.",
      },
    ],
    section2Title: "Protection & Security Features",
    section2Type: "cards",
    section2Cards: [
      {
        title: "Protect Retirement Savings",
        desc: "Long-term care expenses can significantly impact retirement assets if proper planning is not in place.",
      },
      {
        title: "Preserve Family Wealth",
        desc: "Coverage helps reduce the financial burden that healthcare costs may place on family members.",
      },
      {
        title: "Support Quality Care",
        desc: "Access funds that can help pay for professional care services when they are needed most.",
      },
      {
        title: "Reduce Financial Stress",
        desc: "Planning ahead can help provide greater peace of mind during difficult health situations.",
      },
    ],
    section3Title: "Methods Of Paying Benefits",
    section3Accordions: [
      {
        title: "Per Diem",
        desc: "Under a per diem benefit method, the insurance company pays a fixed daily or monthly amount regardless of the actual expenses incurred for care services.",
      },
      {
        title: "Indemnity",
        desc: "The indemnity method pays a pre-determined benefit amount once the insured qualifies for benefits, without requiring ongoing receipts or proof of actual expenses.",
      },
      {
        title: "Bucket of Money",
        desc: "A pool of funds (benefit limit) is established at policy inception. As you incur care expenses, benefits are paid out, drawing down from this total pool until it is exhausted.",
      },
    ],
  },
};

export default function LucrativenessPageClient({ initialTab }: { initialTab: TabKey }) {
  const [activeTab, setActiveTab] = useState<TabKey>(initialTab);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const data = tabContents[activeTab];

  // Sync state if initialTab prop changes (e.g. navigation click)
  useEffect(() => {
    setActiveTab(initialTab);
    setOpenAccordion(null);
  }, [initialTab]);

  const toggleAccordion = (idx: number) => {
    setOpenAccordion(openAccordion === idx ? null : idx);
  };

  return (
    <div className={styles.section}>
      <MainNav />

      {/* Skyscraper Hero Banner */}
      <section className={styles.hero} aria-label="Lucrativeness Header">
        <div className={styles.heroContent}>
          <p className={styles.heroPre}>AGENT PARTNERSHIP PROGRAM</p>
          <h1 className={styles.heroTitle}>Lucrative Protection & Wealth Opportunities</h1>
          <p className={styles.heroSub}>
            Build wealth, protect your future, and access powerful living benefits through strategic insurance and financial solutions.
          </p>
          <Link href="/services" className={styles.heroBtn}>
            See Protection Plans &rarr;
          </Link>
        </div>
      </section>

      <main id="main-content" className={styles.main}>
        <div className={styles.container}>
          {/* Section 1: Intro block */}
          <div className={styles.introSection}>
            <div className={styles.introGrid}>
              <div className={styles.introLeft}>
                <h2 className={styles.introLeftTitle}>What Makes These Opportunities Lucrative</h2>
                <p className={styles.introLeftDesc}>
                  Our partnered protection products are designed to provide both financial protection and long-term wealth-building opportunities.
                </p>
              </div>
              <div className={styles.introRight}>
                <div className={styles.introRightContent}>
                  <h3 className={styles.introRightTitle}>Wealth Opportunities</h3>
                  <p className={styles.introRightDesc}>
                    These solutions can generate substantial financial benefits through tax advantages, living benefits, retirement income strategies, wealth preservation, and legacy planning.
                  </p>
                </div>
                <div className={styles.introRightCardsGrid}>
                  <div className={`${styles.introSubCard} ${styles.cardWealthGrowth}`}>
                    <span className={styles.introSubCardText}>Wealth Growth</span>
                  </div>
                  <div className={`${styles.introSubCard} ${styles.cardTaxAdvantages}`}>
                    <span className={styles.introSubCardText}>Tax Advantages</span>
                  </div>
                  <div className={`${styles.introSubCard} ${styles.cardLivingBenefits}`}>
                    <span className={styles.introSubCardText}>Living Benefits</span>
                  </div>
                  <div className={`${styles.introSubCard} ${styles.cardLegacyProtection}`}>
                    <span className={styles.introSubCardText}>Legacy Protection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab controls */}
          <div className={styles.tabs} role="tablist" aria-label="Lucrativeness options">
            {(["iul", "eia", "ltc", "tlb"] as TabKey[]).map((tabKey) => (
              <button
                key={tabKey}
                className={`${styles.tabBtn} ${activeTab === tabKey ? styles.tabBtnActive : ""}`}
                onClick={() => {
                  setActiveTab(tabKey);
                  setOpenAccordion(null);
                }}
                role="tab"
                aria-selected={activeTab === tabKey}
              >
                {tabContents[tabKey].tabLabel}
              </button>
            ))}
          </div>

          {/* Dynamic Tab Contents */}
          <div className={styles.tabContent}>
            {/* Tab Section 1: Split layout (cards grid) */}
            <div className={styles.splitSection}>
              <div className={styles.splitLeft}>{data.section1Title}</div>
              <div className={styles.splitRight}>
                <div className={data.section1Cards.length === 3 ? styles.cardsGrid3 : styles.cardsGrid}>
                  {data.section1Cards.map((card, idx) => (
                    <div key={idx} className={styles.lucrativeCard}>
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      <p className={styles.cardDesc}>{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Section 2: qualification conditions (bullets or cards) */}
            <div className={styles.bgSection}>
              <div className={styles.splitLeft}>{data.section2Title}</div>
              <div className={styles.splitRight}>
                {data.section2Type === "bullets" && data.section2Bullets ? (
                  <div className={styles.qualifyGrid}>
                    {data.section2Bullets.map((col, idx) => (
                      <div key={idx} className={styles.qualifyCol}>
                        <h4 className={styles.qualifyColTitle}>{col.title}</h4>
                        <ul className={styles.qualifyList}>
                          {col.items.map((item, itemIdx) => (
                            <li key={itemIdx} className={styles.qualifyItem}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  data.section2Cards && (
                    <div className={styles.qualifyGrid}>
                      {data.section2Cards.map((card, idx) => (
                        <div key={idx} className={styles.qualifyCol}>
                          <h4 className={styles.qualifyColTitle}>{card.title}</h4>
                          <p className={styles.qualifyColDesc}>{card.desc}</p>
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Tab Section 3: accordion (conditional) */}
            {data.section3Title && data.section3Accordions && (
              <div className={styles.accordionSection}>
                <h3 className={styles.accordionHeading}>{data.section3Title}</h3>
                <div className={styles.accordionGrid}>
                  {data.section3Accordions.map((item, idx) => {
                    const isOpen = openAccordion === idx;
                    return (
                      <div
                        key={idx}
                        className={`${styles.accordionItem} ${isOpen ? styles.accordionOpen : ""}`}
                      >
                        <button
                          type="button"
                          className={styles.accordionHeader}
                          onClick={() => toggleAccordion(idx)}
                          aria-expanded={isOpen}
                        >
                          <span className={styles.accordionTitleText}>{item.title}</span>
                          <Plus size={18} strokeWidth={3} className={styles.accordionIcon} />
                        </button>
                        {isOpen && <div className={styles.accordionContent}>{item.desc}</div>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab Section 4: rows (conditional) */}
            {data.section4Title && data.section4Rows && (
              <div className={styles.bgSection}>
                <div className={styles.splitLeft}>{data.section4Title}</div>
                <div className={styles.splitRight}>
                  <div className={styles.rowsList}>
                    {data.section4Rows.map((row, idx) => (
                      <div key={idx} className={styles.rowItem}>
                        <h4 className={styles.rowTitle}>{row.title}</h4>
                        <p className={styles.rowDesc}>{row.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <MainFooter />
    </div>
  );
}
