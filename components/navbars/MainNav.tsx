"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./MainNav.module.css";
import { Button } from "@base-ui/react";

const navLinks = [
  { label: "Dashboard", href: "/dashboard", active: true },
  { label: "Products", href: "/products" },
  { label: "Resources", href: "/resources" },
  { label: "Support", href: "/support" },
];

export default function MainNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`${styles.link} ${link.active ? styles.linkActive : ""}`}
              >
                {link.label}
                {link.active && <span className={styles.activeUnderline} />}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className={styles.actions}>
          <button
            className={styles.bellBtn}
            aria-label="Notifications"
            title="Notifications"
          >
            <BellIcon />
          </button>
          <Link href="/secure-plan" className={styles.ctaBtn}>
            Secure Plan
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
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`${styles.mobileLink} ${link.active ? styles.mobileLinkActive : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileActions}>
          <Link
            href="/secure-plan"
            className={styles.mobileCta}
            onClick={() => setMobileOpen(false)}
          >
            Secure Plan
          </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function BellIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}
