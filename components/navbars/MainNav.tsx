"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Menu, X, ChevronDown } from "lucide-react";
import styles from "./MainNav.module.css";
import { Button } from "@base-ui/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Protections", href: "/products", hasDropdown: true },
  { label: "Company", href: "/company", hasDropdown: true },
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

const companyOptions = [
  { label: "About Us", href: "/about" },
  { label: "Join Our Team", href: "/join-us" },
];

export default function MainNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const productsDropdownRef = useRef<HTMLLIElement>(null);
  const companyDropdownRef = useRef<HTMLLIElement>(null);
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

  const handleCompanyMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setCompanyDropdownOpen(true);
  };

  const handleCompanyMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setCompanyDropdownOpen(false);
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
            const isCompanyPath = pathname === "/about" || pathname === "/join-us";

            if (link.hasDropdown) {
              const isProductsDropdown = link.label === "Protections";
              const isCompanyDropdown = link.label === "Company";
              const dropdownOpen = isProductsDropdown ? productsDropdownOpen : companyDropdownOpen;
              const options = isProductsDropdown ? productOptions : companyOptions;
              const dropdownRef = isProductsDropdown ? productsDropdownRef : companyDropdownRef;
              const onMouseEnter = isProductsDropdown ? handleMouseEnter : handleCompanyMouseEnter;
              const onMouseLeave = isProductsDropdown ? handleMouseLeave : handleCompanyMouseLeave;
              const isPathActive = isProductsDropdown ? isProductPath : isCompanyPath;

              return (
                <li
                  key={link.label}
                  className={styles.productDropdownContainer}
                  ref={dropdownRef}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <button
                    className={`${styles.link} ${isPathActive ? styles.linkActive : ""}`}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {/* Wrapped text in span for flexbox stability */}
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
                            onClick={() => {
                              if (isProductsDropdown) {
                                setProductsDropdownOpen(false);
                              } else {
                                setCompanyDropdownOpen(false);
                              }
                            }}
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
         {/*  <button
            className={styles.bellBtn}
            aria-label="Notifications"
            title="Notifications"
          >
            <Bell size={18} />
          </button> */}
          <Link href="#" className={styles.ctaBtn}>
            Book A Consultation
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
              const isCompanyPath = pathname === "/about" || pathname === "/join-us";

              if (link.hasDropdown) {
                const isProductsDropdown = link.label === "Protections";
                const mobileOpen_state = isProductsDropdown ? mobileProductsOpen : mobileCompanyOpen;
                const setMobileOpen_state = isProductsDropdown ? setMobileProductsOpen : setMobileCompanyOpen;
                const options = isProductsDropdown ? productOptions : companyOptions;
                const isPathActive = isProductsDropdown ? isProductPath : isCompanyPath;

                return (
                  <li key={link.label}>
                    <button
                      onClick={() => setMobileOpen_state(!mobileOpen_state)}
                      className={`${styles.mobileLink} ${styles.mobileDropdownBtn} ${isPathActive ? styles.mobileLinkActive : ""}`}
                      aria-expanded={mobileOpen_state ? "true" : "false"}
                      aria-haspopup="true"
                    >
                      {/* Wrapped text in span */}
                      <span>{link.label}</span>
                      {/* Reused existing CSS classes instead of inline styles */}
                      <ChevronDown
                        size={16}
                        className={`${styles.chevronIcon} ${mobileOpen_state ? styles.chevronOpen : ""}`}
                      />
                    </button>
                    {mobileOpen_state && (
                      <ul className={styles.mobileSubmenu}>
                        {options.map((option) => {
                          const isOptionActive = pathname === option.href;
                          return (
                            <li key={option.label}>
                              <Link
                                href={option.href}
                                className={`${styles.mobileSubmenuItem} ${isOptionActive ? styles.mobileSubmenuItemActive : ""}`}
                                onClick={() => {
                                  setMobileOpen_state(false);
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
              href="#"
              className={styles.mobileCta}
              onClick={() => setMobileOpen(false)}
            >
              Book A Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
