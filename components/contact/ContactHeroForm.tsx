"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ContactHeroForm.module.css";

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const INTERESTS = [
  { code: "IUL", label: "Indexed Universal Life" },
  { code: "EIA", label: "Equity Indexed Annuity" },
  { code: "LTC", label: "Long Term Care" },
  { code: "TLB", label: "Terminal Loss Benefit" },
];

export default function ContactHeroForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function toggleInterest(code: string) {
    setSelected((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code],
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={styles.section} aria-label="Contact and inquiry form">
      <div className={styles.grid}>
        {/* ── Left column: editorial copy ──────────────────── */}
        <div className={styles.leftCol}>
          {/* Headline */}
          <div className={styles.headlineBlock}>
            <h1 className={styles.headline}>
              Architectural Security
              <br />
              for your <em className={styles.accentWord}>Future.</em>
            </h1>
            <p className={styles.subhead}>
              Our advisors are standing by to help you structure a legacy that
              withstands the volatility of modern markets.
            </p>
          </div>

          {/* Trust totem */}
          <div className={styles.totem}>
            <div className={styles.totemBar} aria-hidden="true" />
            <div>
              <span className={styles.totemStat}>99.8%</span>
              <span className={styles.totemLabel}>Claims Settlement Rate</span>
            </div>
          </div>

          {/* Contact methods */}
          <div className={styles.contactMethods}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon} aria-hidden="true">
                <PhoneIcon />
              </div>
              <div>
                <h4 className={styles.contactTitle}>Direct Advisory</h4>
                <p className={styles.contactDetail}>1-800-MATTER-MOST</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon} aria-hidden="true">
                <MailIcon />
              </div>
              <div>
                <h4 className={styles.contactTitle}>Client Support</h4>
                <p className={styles.contactDetail}>
                  concierge@mattermost.insure
                </p>
              </div>
            </div>
          </div>

          {/* Ad slot / partner perspective card */}
          <div className={styles.adSlot} aria-label="Partner perspective">
            <Image
              src="/contactagentbanner1.png"
              alt="Partner perspective - Protecting assets across 48 states"
              fill
              className={styles.adSlotImage}
            />
            <div className={styles.adSlotContent}>
              <span className={styles.adSlotEyebrow}>Partner Perspective</span>
              <h3 className={styles.adSlotTitle}>
                Protecting Assets Across 48 States.
              </h3>
              <div className={styles.adSlotRule} aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* ── Right column: inquiry form ────────────────────── */}
        <div className={styles.rightCol}>
          <div className={styles.formCard}>
            {/* Decorative blur orb */}
            <div className={styles.formOrb} aria-hidden="true" />

            <h2 className={styles.formTitle}>Inquiry Form</h2>

            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon} aria-hidden="true">
                  ✓
                </div>
                <h3 className={styles.successHeading}>Request Received</h3>
                <p className={styles.successBody}>
                  A senior advisor will review your submission and reach out
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Consultation inquiry form"
              >
                {/* Full name — full width */}
                <div className={`${styles.field} ${styles.fieldFull}`}>
                  <label className={styles.label} htmlFor="contact-name">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    className={styles.input}
                    type="text"
                    placeholder="E.g. Alexander Sterling"
                    autoComplete="name"
                    required
                  />
                </div>

                {/* Email */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-email">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    className={styles.input}
                    type="email"
                    placeholder="alex@sterling.com"
                    autoComplete="email"
                    required
                  />
                </div>

                {/* Phone */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-phone">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    className={styles.input}
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    autoComplete="tel"
                  />
                </div>

                {/* Zip */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-zip">
                    Zip Code
                  </label>
                  <input
                    id="contact-zip"
                    className={styles.input}
                    type="text"
                    placeholder="10001"
                    autoComplete="postal-code"
                    maxLength={10}
                  />
                </div>

                {/* State */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-state">
                    State
                  </label>
                  <div className={styles.selectWrap}>
                    <select
                      id="contact-state"
                      className={styles.select}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select State
                      </option>
                      {US_STATES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <span className={styles.selectChevron} aria-hidden="true">
                      <ChevronIcon />
                    </span>
                  </div>
                </div>

                {/* Interest chips — full width */}
                <div className={`${styles.field} ${styles.fieldFull}`}>
                  <span className={styles.label} id="interest-label">
                    What are you interested in?
                  </span>
                  <div
                    className={styles.chips}
                    role="group"
                    aria-labelledby="interest-label"
                  >
                    {INTERESTS.map((item) => {
                      const active = selected.includes(item.code);
                      return (
                        <label
                          key={item.code}
                          className={`${styles.chip} ${active ? styles.chipActive : ""}`}
                        >
                          <input
                            type="checkbox"
                            className={styles.chipInput}
                            checked={active}
                            onChange={() => toggleInterest(item.code)}
                            aria-label={item.label}
                          />
                          <span className={styles.chipCode}>{item.code}</span>
                          <span className={styles.chipLabel}>{item.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Submit — full width */}
                <div className={`${styles.field} ${styles.fieldFull}`}>
                  <button type="submit" className={styles.submitBtn}>
                    Request Private Consultation
                    <ArrowIcon />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Inline SVG icons ─────────────────────────────────── */
function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l1.9-1.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
