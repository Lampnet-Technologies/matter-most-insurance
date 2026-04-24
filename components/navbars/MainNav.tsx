"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Menu, X, ChevronDown } from "lucide-react";
import styles from "./MainNav.module.css";
import { Button } from "@base-ui/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Join Us", href: "/join-us" },
  { label: "Affiliate", href: "/affiliate" },
  { label: "News", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

const productOptions = [
  { label: "Indexed Universal Life (IUL)", href: "/indexed-universal-life" },
  { label: "Equity Indexed Annuity (EIA)", href: "/equity-indexed-annuity" },
  { label: "Long-Term Care Insurance (LTC)", href: "/long-term-care" },
  {
    label: "Term Life with Living Benefits (TLB)",
    href: "/term-life-benefits",
  },
];

export default function MainNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
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
            const isProductPath = pathname.startsWith("/products");

            if (link.hasDropdown) {
              return (
                <li
                  key={link.label}
                  className={styles.productDropdownContainer}
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`${styles.link} ${isProductPath ? styles.linkActive : ""}`}
                    aria-expanded={productsDropdownOpen}
                    aria-haspopup="true"
                  >
                    {/* Wrapped text in span for flexbox stability */}
                    <span>{link.label}</span>
                    <ChevronDown
                      size={16}
                      className={`${styles.chevronIcon} ${productsDropdownOpen ? styles.chevronOpen : ""}`}
                    />
                    {isProductPath && (
                      <span className={styles.activeUnderline} />
                    )}
                  </button>

                  {/* Dropdown menu */}
                  {productsDropdownOpen && (
                    <div className={styles.dropdownMenu}>
                      {productOptions.map((option) => {
                        const isOptionActive = pathname === option.href;
                        return (
                          <Link
                            key={option.label}
                            href={option.href}
                            className={`${styles.dropdownItem} ${isOptionActive ? styles.dropdownItemActive : ""}`}
                            onClick={() => setProductsDropdownOpen(false)}
                          >
                            {option.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </li>
              );
            }

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
          <button
            className={styles.bellBtn}
            aria-label="Notifications"
            title="Notifications"
          >
            <Bell size={18} />
          </button>
          <Link href="/services" className={styles.ctaBtn}>
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
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isProductPath = pathname.startsWith("/products");

              if (link.hasDropdown) {
                return (
                  <li key={link.label}>
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      // Added the new mobileDropdownBtn class
                      className={`${styles.mobileLink} ${styles.mobileDropdownBtn} ${isProductPath ? styles.mobileLinkActive : ""}`}
                      aria-expanded={mobileProductsOpen ? "true" : "false"}
                      aria-haspopup="true"
                    >
                      {/* Wrapped text in span */}
                      <span>{link.label}</span>
                      {/* Reused existing CSS classes instead of inline styles */}
                      <ChevronDown
                        size={16}
                        className={`${styles.chevronIcon} ${mobileProductsOpen ? styles.chevronOpen : ""}`}
                      />
                    </button>
                    {mobileProductsOpen && (
                      <ul className={styles.mobileSubmenu}>
                        {productOptions.map((option) => {
                          const isOptionActive = pathname === option.href;
                          return (
                            <li key={option.label}>
                              <Link
                                href={option.href}
                                className={`${styles.mobileSubmenuItem} ${isOptionActive ? styles.mobileSubmenuItemActive : ""}`}
                                onClick={() => {
                                  setMobileProductsOpen(false);
                                  setMobileOpen(false);
                                }}
                              >
                                {option.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }

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
              href="/services"
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
