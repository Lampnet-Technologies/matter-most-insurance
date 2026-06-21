"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
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

/* const otherLinks = [
  { label: "Hero Stories", href: "/hero-stories" },
  { label: "Safety Claims", href: "/claims" },
  { label: "Privacy Protocol", href: "/privacy" },
  { label: "Legal/Compliance", href: "/compliance" },
]; */

const companyLinks = [
  { label: "Affiliate Program", href: "/affiliate" },
  { label: "News", href: "/articles" },
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
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialBtn}
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 14, height: 14 }}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className={styles.socialBtn}
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true" style={{ width: 14, height: 14 }}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialBtn}
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 14, height: 14 }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialBtn}
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 14, height: 14 }}>
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
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
        {/*   <div className={styles.linkCol}>
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
          </div> */}

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
