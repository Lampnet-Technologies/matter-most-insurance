"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
import styles from "./JourneySection.module.css";

const steps = [
  {
    number: 1,
    title: "The Call to Action",
    description:
      "Submit your basic details to start your custom plan generation.",
  },
  {
    number: 2,
    title: "Meet Your Mentor",
    description:
      "Connect with a dedicated specialist who understands your unique goals.",
  },
  {
    number: 3,
    title: "The Secret Map",
    description:
      "Receive a comprehensive, structured roadmap for your financial safety.",
  },
  {
    number: 4,
    title: "Becoming the Hero",
    description:
      "Execute the plan and rest easy knowing your legacy is bulletproof.",
  },
];

export default function JourneySection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className={styles.section} aria-label="Your Heroic Journey">
      <div className={styles.container}>
        {/* ── Left: Steps ──────────────── */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Your Heroic Journey in 4 Simple Steps
          </h2>
          <p className={styles.subheading}>
            We&apos;ve mapped out the path to total protection. It&apos;s simpler than you
            think.
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
