"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MainNav from "@/components/navbars/MainNav";
import MainFooter from "@/components/footers/MainFooter";
import styles from "./benefits.module.css";

type TabKey = "eia" | "iul" | "ltc" | "tlb";

interface ContentData {
  heroTitle: string;
  image1: string;
  image2: string;
  section1: { title: string; desc: string }[];
  section2: { title: string; desc: string }[];
  section3: { title: string; desc: string }[];
}

const tabData: Record<TabKey, ContentData> = {
  eia: {
    heroTitle: "Equity Indexed Annuities (EIA) Benefits",
    image1: "/eia-img1.png",
    image2: "/eia-img2.png",
    section1: [
      {
        title: "Up to 26% Purchase Bonus",
        desc: "For purchasing an annuity you can receive an up front bonus of up to 26% on your money.",
      },
      {
        title: "Growth Potential from Indexes",
        desc: "Enjoy market-like returns without the market-like volatility.",
      },
      {
        title: "Two Layers of Safety",
        desc: "From a safety standpoint, first, the return of principal on the EIA contract is guaranteed by the insurer, along with a modest rate of interest. Second, the various state insurance guarantee funds stand behind the EIA.",
      },
      {
        title: "Guaranteed Principal Protection & Growth Potential Without Risk of Loss",
        desc: "Your initial investment (principal) is protected from market losses, meaning you won't lose money in down years, preserving your base capital.",
      },
    ],
    section2: [
      {
        title: "Liquidity",
        desc: "Equity index annuities offer a variety of liquidity options. Many equity indexed annuities allow the owner free withdrawals up to 10%. Many annuities also offer increased or full access to the contract value for qualified care needs.",
      },
      {
        title: "Education Funding and Charity",
        desc: "The tax-deferred growth and annuitization payout options can be structured and timed to coincide with the projected costs and years that tuition is needed. Additionally, an annuity owner may gift money from the annuity to grandchildren or others for college education, and if the money is not withdrawn until after the owner's age 59 ½, earnings only are taxed at the owner's current tax rates.",
      },
    ],
    section3: [
      {
        title: "Guaranteed Rate",
        desc: "The accumulated proceeds are guaranteed by both the insurer and various state insurance funds.",
      },
      {
        title: "Tax-deferred Growth Benefits",
        desc: "When you roll over funds from a tax-qualified plan into an annuity, the funds maintain their tax-deferred status and the interest or accumulated earnings within the annuity are not taxed each year but are taxed later, so you won't pay income taxes until you withdraw money.",
      },
      {
        title: "Guaranteed Life Income & Retirement Income",
        desc: "Receive guaranteed income payments for life, even if you reach over 100 years of age. Retirement or old age can be financially challenging when you consider the loss of earned income, increased health care costs, and the possibility of expensive nursing home care.",
      },
      {
        title: "Benefits Over Bank Accounts",
        desc: "The tax-deferred growth and guaranteed life income can't be offered by any bank account and are the main reasons annuities are attractive to people who are saving money for retirement. Compared to bank savings accounts, where the money could run out before the account owner dies, annuities could pay out an income for life. Annuities also bypass probate when funds are to be distributed to annuitants and beneficiaries.",
      },
      {
        title: "The State Guarantee Fund",
        desc: "Safety is a primary factor that causes clients to invest in fixed annuities. The products have redundant safety nets that make them a good fit for people or situations where risk of loss is inappropriate to them.",
      },
    ],
  },
  iul: {
    heroTitle: "Indexed Universal Life (IUL) Benefits",
    image1: "/iul-img1.png",
    image2: "/iul-img2.png",
    section1: [
      {
        title: "Tax-Deferred Growth",
        desc: "Cash value growth within the policy accumulates tax-deferred, enabling faster asset compounding.",
      },
      {
        title: "Upside Market Potential",
        desc: "Earn interest based on a market index (like S&P 500) up to a designated cap, with 0% floors.",
      },
      {
        title: "Flexible Premium Payments",
        desc: "Adjust your premium payments and death benefits over time to fit your changing financial situation.",
      },
      {
        title: "Tax-Free Retirement Loans",
        desc: "Access your accumulated cash value tax-free through policy loans, providing passive income in retirement.",
      },
    ],
    section2: [
      {
        title: "Policy Loans & Withdrawals",
        desc: "IUL policies provide penalty-free access to cash values for emergency funding, buying property, or college tuition.",
      },
      {
        title: "Legacy Building & Wealth Transfer",
        desc: "Pass on a tax-free death benefit to your beneficiaries, bypassing costly probate court processes.",
      },
    ],
    section3: [
      {
        title: "Overcoming Inflation",
        desc: "IUL cash value growth indexes against inflation, outperforming traditional bank savings accounts.",
      },
      {
        title: "Tax-Free Death Benefit",
        desc: "Your family receives the death benefit tax-free, securing their future and protecting their financial stability.",
      },
      {
        title: "Financial Security for Life",
        desc: "Enjoy peace of mind knowing your family is covered, regardless of how market conditions fluctuate.",
      },
      {
        title: "Flexibility Over Term Policies",
        desc: "Unlike term life insurance which expires, IUL offers permanent protection plus an active investment vehicle.",
      },
      {
        title: "No Contribution Limits",
        desc: "Unlike IRAs and 401(k)s, IUL policies have no government-mandated contribution limits, maximizing wealth building.",
      },
    ],
  },
  ltc: {
    heroTitle: "Long-Term Care (LTC) Benefits",
    image1: "/LTC-Image1.png",
    image2: "/LTC-Image2.png",
    section1: [
      {
        title: "Comprehensive Care Coverage",
        desc: "Fills coverage gaps by covering nursing home stays, assisted living, and home health care.",
      },
      {
        title: "Asset Preservation",
        desc: "Protects your retirement nest egg and family home from being liquidated to pay for high care costs.",
      },
      {
        title: "Relief for Family Caregivers",
        desc: "Provides resources to hire professional care, relieving adult children from round-the-clock physical caregiving.",
      },
      {
        title: "Tax Advantages",
        desc: "LTC policy premiums and benefits often qualify for significant federal and state tax deductions.",
      },
    ],
    section2: [
      {
        title: "Flexible Payout Options",
        desc: "Choose between daily, weekly, or monthly benefit caps to custom-fit your local care facility rates.",
      },
      {
        title: "Inflation Protection",
        desc: "Add riders that automatically grow your daily benefit limit by 3% or 5% annually to combat inflation.",
      },
    ],
    section3: [
      {
        title: "Home Health Care Support",
        desc: "Allows you to receive top-quality medical and personal care in the comfort of your own home.",
      },
      {
        title: "Customized Facility Selection",
        desc: "Gives you the freedom to choose your preferred assisted living or memory care facility.",
      },
      {
        title: "Shared Care Options",
        desc: "Allows couples to share a combined pool of long-term care benefits for maximum utilization.",
      },
      {
        title: "Securing Family Peace of Mind",
        desc: "Relieves your family of the stressful financial and emotional burden of managing elder care.",
      },
      {
        title: "Independent Living Retention",
        desc: "Retain your independence and lifestyle for longer with early intervention and assisted care services.",
      },
    ],
  },
  tlb: {
    heroTitle: "Term Life Insurance with Living Benefits (TLB) Benefits",
    image1: "/tlb-img1.png",
    image2: "/tlb-img2.png",
    section1: [
      {
        title: "Living Benefits Access",
        desc: "Accelerate your death benefit to receive cash payments while living if diagnosed with a qualifying illness.",
      },
      {
        title: "Critical Illness Coverage",
        desc: "Receive financial support for major health events like heart attacks, stroke, invasive cancer, or organ transplants.",
      },
      {
        title: "Chronic Illness Support",
        desc: "Get help if you are unable to perform two of the six basic Activities of Daily Living (ADLs).",
      },
      {
        title: "Lower Cost Protection",
        desc: "Get high-limit protection and peace of mind at rates that are 20-30% lower than permanent plans.",
      },
    ],
    section2: [
      {
        title: "Cash Payout Flexibility",
        desc: "Spend your living benefit payments on anything—medical bills, mortgage payments, experimental treatments, or travel.",
      },
      {
        title: "Convertibility Options",
        desc: "Option to convert your temporary term policy into a permanent cash-value plan without a medical exam.",
      },
    ],
    section3: [
      {
        title: "Mortgage Protection",
        desc: "Ensure your mortgage is fully paid off if you face a critical health crisis or unexpected death.",
      },
      {
        title: "Terminal Illness Advance",
        desc: "Receive up to 100% of your policy limit early if diagnosed with a terminal illness with under 12-24 months to live.",
      },
      {
        title: "Income Replacement",
        desc: "Replace lost income during lengthy recovery periods following a major heart attack, stroke, or surgery.",
      },
      {
        title: "Guaranteed Level Premiums",
        desc: "Your premium rates remain locked and stable for the entire term duration (10, 20, or 30 years).",
      },
      {
        title: "Debt Shield Security",
        desc: "Shield your family from inheriting student loans, business debts, and personal liabilities.",
      },
    ],
  },
};

export default function BenefitsPageClient({ initialTab }: { initialTab: TabKey }) {
  const [activeTab, setActiveTab] = useState<TabKey>(initialTab);
  const data = tabData[activeTab];

  // Sync state if initialTab prop changes (e.g. navigation click)
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  return (
    <div className={styles.section}>
      <MainNav />

      {/* Skyscraper Hero Banner */}
      <section className={styles.hero} aria-label="Benefits Header">
        <div className={styles.heroContent}>
          <p className={styles.heroPre}>AGENT PARTNERSHIP PROGRAM</p>
          <h1 className={styles.heroTitle}>{data.heroTitle}</h1>
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
          {/* Tab controls */}
          <div className={styles.tabs} role="tablist" aria-label="Benefits product options">
            {(["eia", "iul", "ltc", "tlb"] as TabKey[]).map((tabKey) => (
              <button
                key={tabKey}
                className={`${styles.tabBtn} ${activeTab === tabKey ? styles.tabBtnActive : ""}`}
                onClick={() => setActiveTab(tabKey)}
                role="tab"
                aria-selected={activeTab === tabKey}
              >
                {tabKey.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Section 1: Image Left / 4 Cards Right */}
          <div className={styles.sectionGrid}>
            <div className={styles.mainImageWrapper}>
              <Image
                src={data.image1}
                alt={`${data.heroTitle} illustration 1`}
                fill
                sizes="(max-width: 900px) 100vw, 550px"
                className={styles.mainImage}
              />
            </div>
            <div className={styles.cardsGrid4}>
              {data.section1.map((card, idx) => (
                <div key={idx} className={styles.benefitCard}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: 2 Cards Left / Image Right */}
          <div className={`${styles.sectionGrid} ${styles.sectionGridReverse}`}>
            <div className={styles.cardsGrid2}>
              {data.section2.map((card, idx) => (
                <div key={idx} className={styles.benefitCard}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                </div>
              ))}
            </div>
            <div className={styles.mainImageWrapper}>
              <Image
                src={data.image2}
                alt={`${data.heroTitle} illustration 2`}
                fill
                sizes="(max-width: 900px) 100vw, 550px"
                className={styles.mainImage}
              />
            </div>
          </div>

          {/* Section 3: 5 Bottom Cards */}
          <div className={styles.bottomCardsContainer}>
            <div className={styles.rowTop}>
              {data.section3.slice(0, 3).map((card, idx) => (
                <div key={idx} className={styles.bottomCard}>
                  <h4 className={styles.bottomCardTitle}>{card.title}</h4>
                  <p className={styles.bottomCardDesc}>{card.desc}</p>
                </div>
              ))}
            </div>
            <div className={styles.rowBottom}>
              {data.section3.slice(3, 5).map((card, idx) => (
                <div key={idx} className={styles.bottomCard}>
                  <h4 className={styles.bottomCardTitle}>{card.title}</h4>
                  <p className={styles.bottomCardDesc}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <MainFooter />
    </div>
  );
}
