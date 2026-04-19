"use client";

import React, { useState } from "react";
import { CheckCircle, ChevronDown, Send } from "lucide-react";
import styles from "./AgentCTAForm.module.css";

const EXPERIENCE_OPTIONS = [
  "0–2 Years",
  "3–5 Years",
  "5–10 Years",
  "10+ Years",
];

export default function AgentCTAForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="join-form"
      className={styles.section}
      aria-label="Become a Hero — partnership application"
    >
      {/* Subtle architectural texture overlay on right half */}
      <div className={styles.bgTexture} aria-hidden="true" />

      <div className={styles.container}>
        {/* ── Left: headline + testimonial ───────── */}
        <div className={styles.leftCol}>
          <h2 className={styles.headline}>
            Secure Your Future with the Monolith.
          </h2>

          {/* Testimonial quote block */}
          <blockquote className={styles.testimonial}>
            <div className={styles.testimonialIcon} aria-hidden="true">
              <CheckCircle size={32} />
            </div>
            <p className={styles.testimonialText}>
              &ldquo;Joining Matter Most was the architectural shift my agency
              needed. The infrastructure is unparalleled.&rdquo; —{" "}
              <cite className={styles.testimonialCite}>
                Marcus V., Elite Partner
              </cite>
            </p>
          </blockquote>
        </div>

        {/* ── Right: form card ─────────────────────── */}
        <div className={styles.rightCol}>
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Become a Hero</h3>

            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon} aria-hidden="true">
                  ✓
                </div>
                <p className={styles.successHeading}>Application Received</p>
                <p className={styles.successBody}>
                  Our compliance office will review your inquiry within 24
                  hours. Confidentiality guaranteed.
                </p>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Hero partnership application"
              >
                {/* Name row */}
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="agent-first">
                      First Name
                    </label>
                    <input
                      id="agent-first"
                      className={styles.input}
                      type="text"
                      autoComplete="given-name"
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="agent-last">
                      Last Name
                    </label>
                    <input
                      id="agent-last"
                      className={styles.input}
                      type="text"
                      autoComplete="family-name"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="agent-email">
                    Professional Email
                  </label>
                  <input
                    id="agent-email"
                    className={styles.input}
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>

                {/* Experience */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="agent-exp">
                    Years of Experience
                  </label>
                  <div className={styles.selectWrap}>
                    <select
                      id="agent-exp"
                      className={styles.select}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select range
                      </option>
                      {EXPERIENCE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <span className={styles.chevron} aria-hidden="true">
                      <ChevronDown size={16} />
                    </span>
                  </div>
                </div>

                {/* Submit */}
                <button type="submit" className={styles.submitBtn}>
                  Request Partnership
                  <Send size={18} />
                </button>

                <p className={styles.disclaimer}>
                  Confidentiality guaranteed. Our compliance office reviews all
                  inquiries within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
