import React from "react";
import Image from "next/image";
import { Lock, Shield, EyeOff } from "lucide-react";
import styles from "./CompliancePrivacy.module.css";

const protocols = [
  {
    id: "encryption",
    title: "256-Bit AES Encryption",
    body: "All client data is encrypted at rest and in transit using military-grade protocols. Your privacy is baked into our architecture, not added as an afterthought.",
    icon: <Lock size={22} />,
  },
  {
    id: "gdpr",
    title: "GDPR & CCPA Compliant",
    body: "We respect the global right to privacy. Our systems are fully compliant with the most stringent data protection acts worldwide.",
    icon: <Shield size={22} />,
  },
  {
    id: "zero-knowledge",
    title: "Zero-Knowledge Storage",
    body: "Where possible, we implement zero-knowledge protocols, ensuring that sensitive documents are only accessible to you and authorised agents.",
    icon: <EyeOff size={22} />,
  },
];

export default function CompliancePrivacy() {
  return (
    <section
      className={styles.section}
      aria-label="Data Sovereignty and Privacy Protocols"
    >
      <div className={styles.container}>
        {/* ── Left: grayscale photo ─────────────────── */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <Image
              src="/compliance-image.png"
              alt="High-end server room with blue ambient lighting and glass panels reflecting digital security hardware"
              fill
              sizes="(max-width:900px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        </div>

        {/* ── Right: heading + protocol rows ──────────── */}
        <div className={styles.contentCol}>
          <h2 className={styles.heading}>
            Data Sovereignty &amp;
            <br />
            Privacy Protocols
          </h2>

          <ul className={styles.protocolList} role="list">
            {protocols.map((p) => (
              <li key={p.id} className={styles.protocolItem}>
                <div className={styles.iconWrap} aria-hidden="true">
                  {p.icon}
                </div>
                <div>
                  <h3 className={styles.protocolTitle}>{p.title}</h3>
                  <p className={styles.protocolBody}>{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
