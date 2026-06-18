"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import styles from "./MainNav.module.css";
import { Button } from "@base-ui/react";

const navLinks = [
  { label: "Company", href: "/about", hasDropdown: true },
  { label: "Providers", href: "/providers", hasDropdown: true },
  { label: "Protections", href: "/services", hasDropdown: true },
  { label: "Benefits", href: "/benefits", hasDropdown: true },
  { label: "Lucrativeness", href: "/lucrativeness", hasDropdown: true },
  { label: "Insights", href: "/support", hasDropdown: true },
];

const companyOptions = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Partners", href: "/providers" },
  { label: "Join The Team", href: "/join-us" },
  { label: "Contact", href: "/contact" },
];

const providersOptions = [
  { label: "Overview", href: "/providers" },
  { label: "US", href: "/providers?region=us" },
  { label: "Canada", href: "/providers?region=ca" },
];

const protectionsOptions = [
  { label: "Overview", href: "/services" },
  { label: "Indexed Universal Life (IUL)", href: "/indexed-universal-life" },
  { label: "Equity Indexed Annuity (EIA)", href: "/equity-indexed-annuity" },
  { label: "Long-Term Care (LTC) Insurance", href: "/long-term-care" },
  { label: "Term Life Insurance with Living Benefits (TLB)", href: "/term-life-benefits" },
];

const benefitsOptions = [
  { label: "Overview", href: "/benefits" },
  { label: "EIA", href: "/benefits?tab=eia" },
  { label: "IUL", href: "/benefits?tab=iul" },
  { label: "LTC", href: "/benefits?tab=ltc" },
  { label: "TLB", href: "/benefits?tab=tlb" },
];

const lucrativenessOptions = [
  { label: "Overview", href: "/lucrativeness" },
  { label: "IUL", href: "/lucrativeness?tab=iul" },
  { label: "EIA", href: "/lucrativeness?tab=eia" },
  { label: "LTC", href: "/lucrativeness?tab=ltc" },
  { label: "TLB", href: "/lucrativeness?tab=tlb" },
];

const insightsOptions = [
  { label: "Blogs", href: "/articles" },
  { label: "FAQs", href: "/support" },
  { label: "Chat with us", href: "/contact" },
];

const dropdownOptionsMap: Record<string, { label: string; href: string }[]> = {
  Company: companyOptions,
  Providers: providersOptions,
  Protections: protectionsOptions,
  Benefits: benefitsOptions,
  Lucrativeness: lucrativenessOptions,
  Insights: insightsOptions,
};

export default function MainNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownsOpen, setMobileDropdownsOpen] = useState<Record<string, boolean>>({});
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownsOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

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
            const dropdownOpen = activeDropdown === link.label;
            const options = dropdownOptionsMap[link.label] || [];
            
            // Check if any of the dropdown items is active
            const isPathActive = options.some((option) => pathname === option.href);

            return (
              <li
                key={link.label}
                className={styles.productDropdownContainer}
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`${styles.link} ${isPathActive ? styles.linkActive : ""}`}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    size={16}
                    className={`${styles.chevronIcon} ${dropdownOpen ? styles.chevronOpen : ""}`}
                  />
                  {isPathActive && (
                    <span className={styles.activeUnderline} />
                  )}
                </button>

                {/* Dropdown menu */}
                {dropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    {options.map((option) => {
                      const isOptionActive = pathname === option.href;
                      return (
                        <Link
                          key={option.label}
                          href={option.href}
                          className={`${styles.dropdownItem} ${isOptionActive ? styles.dropdownItemActive : ""}`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {option.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right actions */}
        <div className={styles.actions}>
          <Link href="/contact" className={styles.ctaBtn}>
            GET CONSULTATION
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
              const mobileOpenState = !!mobileDropdownsOpen[link.label];
              const options = dropdownOptionsMap[link.label] || [];
              const isPathActive = options.some((option) => pathname === option.href);

              return (
                <li key={link.label}>
                  <button
                    onClick={() => toggleMobileDropdown(link.label)}
                    className={`${styles.mobileLink} ${styles.mobileDropdownBtn} ${isPathActive ? styles.mobileLinkActive : ""}`}
                    aria-expanded={mobileOpenState ? "true" : "false"}
                    aria-haspopup="true"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={16}
                      className={`${styles.chevronIcon} ${mobileOpenState ? styles.chevronOpen : ""}`}
                    />
                  </button>
                  {mobileOpenState && (
                    <ul className={styles.mobileSubmenu}>
                      {options.map((option) => {
                        const isOptionActive = pathname === option.href;
                        return (
                          <li key={option.label}>
                            <Link
                              href={option.href}
                              className={`${styles.mobileSubmenuItem} ${isOptionActive ? styles.mobileSubmenuItemActive : ""}`}
                              onClick={() => {
                                setMobileDropdownsOpen((prev) => ({ ...prev, [link.label]: false }));
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
            })}
          </ul>
          <div className={styles.mobileActions}>
            <Link
              href="/contact"
              className={styles.mobileCta}
              onClick={() => setMobileOpen(false)}
            >
              GET CONSULTATION
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
