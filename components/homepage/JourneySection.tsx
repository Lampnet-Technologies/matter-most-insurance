"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import styles from "./JourneySection.module.css";

const steps = [
  {
    number: 1,
    title: "Indexed Universal Life",
    description:
      "Good Health Safety And Deadly illnesses & Diseases Care Protection",
  },
  {
    number: 2,
    title: "Long-term Care",
    description:
      "Long-term care insurance can fill coverage gaps, short-term skilled care in a nursing home after a hospital stay (up to 100 days)",
  },
  {
    number: 3,
    title: "Equity Indexed Annuity",
    description:
      "For purchasing an annuity you can receive an up front bonus of up to 26% on your money",
  },
  {
    number: 4,
    title: "Term Life Insurance with Living Benefits",
    description:
      "Find plans with rates that are 20-30% lower than standard coverage options.",
  },
];

export default function JourneySection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className={styles.section} aria-label="What You Get">
      <div className={styles.container}>
        {/* ── Left: Steps ──────────────── */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            What you will get when you buy a plan
          </h2>
          <p className={styles.subheading}>
            We&apos;ve mapped out the path to total protection. It&apos;s simpler than you think.
          </p>

          <ol className={styles.steps}>
            {steps.map((step) => (
              <li key={step.number} className={styles.step}>
                <div
                  className={styles.stepNumber}
                  aria-label={`Step ${step.number}`}
                >
                  {step.number}
                </div>
                <div className={styles.stepContent}>
                  <p className={styles.stepTitle}>{step.title}</p>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.action}>
            <Link href="/services" className={styles.btnPrimary}>
              Claim License
            </Link>
          </div>
        </div>

        {/* ── Right: Video player ───────── */}
        <div className={styles.videoWrapper} aria-label="Overview video">
          <div className={styles.videoPlayer}>
            {/* Thumbnail / placeholder */}
            <div className={styles.videoThumb} aria-hidden="true">
              <div className={styles.scanlines} />
            </div>

            {!playing ? (
              <button
                className={styles.playBtn}
                aria-label="Play video"
                onClick={() => setPlaying(true)}
              >
                <Play size={24} />
              </button>
            ) : (
              <div className={styles.playingState}>
                <p className={styles.playingText}>Video playing…</p>
              </div>
            )}

            {/* Video controls bar */}
            <div className={styles.controls} aria-hidden="true">
              <div className={styles.progress}>
                <div
                  className={styles.progressFill}
                  style={{ width: playing ? "40%" : "0%" }}
                />
              </div>
              <div className={styles.controlBtns}>
                <span className={styles.timeLabel}>0:00 / 2:34</span>
                <span className={styles.volumeIcon}>🔊</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
