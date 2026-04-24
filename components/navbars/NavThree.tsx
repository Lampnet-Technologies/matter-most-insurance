"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import styles from "./NavThree.module.css";
import { Button } from "@base-ui/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "All Products", href: "/services" },
  { label: "IUL", href: "/indexed-universal-life" },
  { label: "EIA", href: "/equity-indexed-annuity" },
  { label: "LTC", href: "/long-term-care" },
  { label: "TLB", href: "/term-life-benefits" },
];

export default function NavThree() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.logo}>
          <Link href="/" aria-label="Matter Most Insurance home">
            <span className={styles.logoText}>Matter Most Insurance</span>
          </Link>
        </div>

        {/* Desktop links */}
        <ul className={styles.links} role="list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                >
                  {link.label}
                  {isActive && <span className={styles.activeUnderline} />}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right actions */}
        <div className={styles.actions}>
          <Link href="/get-a-quote" className={styles.ctaBtn}>
            Get a Consultation
          </Link>

          {/* Mobile hamburger */}
          <Button
            type="button"
            className={styles.hamburger}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className={styles.mobileMenu} aria-label="Mobile navigation">
          <ul role="list">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ""}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.mobileActions}>
            <Link
              href="/get-a-quote"
              className={styles.mobileCta}
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
