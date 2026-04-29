"use client";

import React from "react";
import Link from "next/link";
import { Globe, Share2, Mail } from "lucide-react";
import styles from "./MainFooter.module.css";

const solutionLinks = [
  {
    label: "Indexed Universal Life (IUL)",
    href: "/indexed-universal-life",
  },
  {
    label: "Equity Indexed Annuity (EIA)",
    href: "/equity-indexed-annuity",
  },
  { label: "Long-Term Care (LTC) Insurance",
    href: "/long-term-care" },
  {
    label: "Term Life Insurance with Living Benefits (TLLB)",
    href: "/term-life-benefits",
  },
];

const otherLinks = [
  { label: "Hero Stories", href: "/hero-stories" },
  { label: "Safety Claims", href: "/claims" },
  { label: "Privacy Protocol", href: "/privacy" },
  { label: "Legal/Compliance", href: "/compliance" },
];

const companyLinks = [
  { label: "Affiliate Program", href: "/affiliate" },
  { label: "News", href: "/news" },
  { label: "Contact Us", href: "/contact" },
  { label: "Join Our Team", href: "/join-us" },
];

export default function MainFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* ── Col 1: Brand ──────────────────────── */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.footerLogo}>
              Matter Most Insurance
            </Link>
            <p className={styles.brandDesc}>
              The structured platform for the pragmatic protector. Secure your
              legacy today with our specialised hero-focused insurance modules.
            </p>
            <div className={styles.socialRow} aria-label="Social links">
              <Link
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className={styles.socialBtn}
              >
                <Globe className={styles.socialIcon} aria-hidden="true" />
              </Link>
              <Link
                href="https://example.com/share"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share"
                className={styles.socialBtn}
              >
                <Share2 className={styles.socialIcon} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* ── Col 2: Services ───────────────────── */}
          <div className={styles.linkCol}>
            <h3 className={styles.colHeading}>Services</h3>
            <ul role="list" className={styles.linkList}>
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           {/* ── Col 2: Company ───────────────────── */}
          <div className={styles.linkCol}>
            <h3 className={styles.colHeading}>Company</h3>
            <ul role="list" className={styles.linkList}>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Other ─────────────────────── */}
          <div className={styles.linkCol}>
            <h3 className={styles.colHeading}>Others</h3>
            <ul role="list" className={styles.linkList}>
              {otherLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Email signup ────────────────── */}
          <div className={styles.signupCol}>
            <h3 className={styles.colHeading}>Secure Updates</h3>
            <p className={styles.signupDesc}>
              Field intelligence for the modern hero.
            </p>
            <form
              className={styles.emailForm}
              onSubmit={(e) => e.preventDefault()}
              aria-label="Email newsletter signup"
            >
              <label htmlFor="footer-email" className={styles.srOnly}>
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter ID/Email"
                className={styles.emailInput}
                autoComplete="email"
                required
              />
              <button
                type="submit"
                className={styles.emailSubmit}
                aria-label="Subscribe"
              >
                <Mail className={styles.submitIcon} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────── */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2024 Matter Most Insurance. Protocol V.1. Protecting What Matters
            Most.
          </p>
        </div>
      </div>
    </footer>
  );
}
