"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Shield, Wallet, Activity, FileSignature, X } from "lucide-react";
import styles from "./ServicesSidebar.module.css";

export default function ServicesSidebar() {
  const [showAd1, setShowAd1] = useState(true);
  const [showAd2, setShowAd2] = useState(true);

  return (
    <div className={styles.outerWrapper}>
      {/* Dark sticky card */}
      <div className={`sticky top-0 ${styles.sidebarContainer}`}>
        <h3 className={styles.heading}>The Heroic Selection</h3>
        <p className={styles.description}>
          Specific vehicles designed for aggressive protection and sophisticated
          wealth accumulation.
        </p>

        <div className={styles.list}>
          {[
            { icon: Shield, title: "IUL", subtitle: "Indexed Universal Life", href: "/indexed-universal-life" },
            { icon: Wallet, title: "EIA", subtitle: "Equity Indexed Annuity", href: "/equity-indexed-annuity" },
            { icon: Activity, title: "LTC", subtitle: "Long-Term Care", href: "/long-term-care" },
            {
              icon: FileSignature,
              title: "TLB",
              subtitle: "Term with Living Benefits",
              href: "/term-life-benefits",
            },
          ].map((item, index) => (
            <Link key={index} href={item.href} className={styles.listItem}>
              <div className={styles.iconWrapper}>
                <item.icon size={18} className={styles.icon} />
              </div>
              <div className={styles.textWrapper}>
                <h4 className={styles.itemTitle}>{item.title}</h4>
                <p className={styles.itemSubtext}>{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* IUL Retirement Example Section */}
        <div className={styles.retirementExampleSection}>
          <h3 className={styles.retirementHeading}>IUL Retirement Example</h3>
          <p className={styles.retirementDescription}>
            Here&apos;s How A 35-Year-Old Man Retiring At Age 70 Could Use IUL To Retire Like A Hero
          </p>
          <div className={styles.retirementImageWrapper}>
            <Image
              src="/retirement-example.png"
              alt="IUL Retirement Example Chart"
              width={300}
              height={180}
              className={styles.retirementImage}
            />
          </div>
        </div>

        {/* Ads Section here if needed */}

        {/* End Ads Section */}
      </div>
    </div>
  );
}
