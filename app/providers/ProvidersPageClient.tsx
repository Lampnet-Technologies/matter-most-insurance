"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MainNav from "@/components/navbars/MainNav";
import MainFooter from "@/components/footers/MainFooter";
import styles from "./providers.module.css";

interface Partner {
  id: number;
  name: string;
  image: string;
  region: "ca" | "us";
}

const partners: Partner[] = [
  { id: 1, name: "Equitable", image: "/P1.png", region: "ca" },
  { id: 2, name: "IA Financial Group", image: "/P2.png", region: "ca" },
  { id: 3, name: "National Life", image: "/P3.png", region: "us" },
  { id: 4, name: "BMO", image: "/P4.png", region: "ca" },
  { id: 5, name: "Pacific Life", image: "/P5.png", region: "us" },
  { id: 6, name: "Mutual of Omaha", image: "/P6.png", region: "us" },
  { id: 7, name: "Prudential", image: "/P7.png", region: "us" },
  { id: 8, name: "Nationwide", image: "/P8.png", region: "us" },
  { id: 9, name: "Empire Life", image: "/P9.png", region: "ca" },
  { id: 10, name: "Crump", image: "/P10.png", region: "us" },
  { id: 11, name: "Fidelity Investments", image: "/P11.png", region: "us" },
  { id: 12, name: "Allianz", image: "/P12.png", region: "us" },
  { id: 13, name: "Capital Group", image: "/P13.png", region: "us" },
  { id: 14, name: "AIG", image: "/P14.png", region: "us" },
  { id: 15, name: "Franklin Templeton", image: "/P15.png", region: "ca" },
  { id: 16, name: "The Hartford", image: "/P16.png", region: "us" },
  { id: 17, name: "Everest", image: "/P17.png", region: "ca" },
  { id: 18, name: "ivari", image: "/P18.png", region: "ca" },
];

export default function ProvidersPageClient({ initialTab }: { initialTab: "all" | "ca" | "us" }) {
  const [activeTab, setActiveTab] = useState<"all" | "ca" | "us">(initialTab);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Sync state if initialTab prop changes (e.g. navigation click)
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  // Filter partners based on tab
  const filteredPartners = partners.filter((partner) => {
    if (activeTab === "all") return true;
    return partner.region === activeTab;
  });

  // Reset pagination when active tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // Paginated partners
  const totalPages = Math.ceil(filteredPartners.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPartners = filteredPartners.slice(startIndex, startIndex + itemsPerPage);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.section}>
      <MainNav />

      {/* Skyscraper Hero Banner */}
      <section className={styles.hero} aria-label="Providers Header">
        <div className={styles.heroContent}>
          <p className={styles.heroPre}>PROTECTION PLANS BENEFITS</p>
          <h1 className={styles.heroTitle}>Our Insurance Partners</h1>
          <p className={styles.heroSub}>
            Access Top-Rated Providers Across Canada And The United States, All In One Place.
          </p>
          <Link href="/services" className={styles.heroBtn}>
            Get a Plan &rarr;
          </Link>
        </div>
      </section>

      <main id="main-content" className={styles.main}>
        <div className={styles.container}>
          {/* Tab controls */}
          <div className={styles.tabs} role="tablist" aria-label="Providers region options">
            <button
              className={`${styles.tabBtn} ${activeTab === "all" ? styles.tabBtnActive : ""}`}
              onClick={() => setActiveTab("all")}
              role="tab"
              aria-selected={activeTab === "all"}
            >
              All
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === "ca" ? styles.tabBtnActive : ""}`}
              onClick={() => setActiveTab("ca")}
              role="tab"
              aria-selected={activeTab === "ca"}
            >
              (CA) Canada
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === "us" ? styles.tabBtnActive : ""}`}
              onClick={() => setActiveTab("us")}
              role="tab"
              aria-selected={activeTab === "us"}
            >
              (US) United States
            </button>
          </div>

          {/* Partners Grid */}
          <div className={styles.grid}>
            {paginatedPartners.map((partner) => (
              <div key={partner.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    width={160}
                    height={60}
                    className={styles.image}
                  />
                </div>
                <p className={styles.partnerName}>{partner.name}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className={styles.pagination} aria-label="Pagination">
              {pages.map((p) => {
                const isActive = p === currentPage;
                return (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`${styles.pageBtn} ${isActive ? styles.pageBtnActive : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {p}
                  </button>
                );
              })}
            </nav>
          )}
        </div>
      </main>

      <MainFooter />
    </div>
  );
}
