import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Rocket, TrendingUp, Share2 } from "lucide-react";
import styles from "./AgentCTASection.module.css";

const perks = [
  {
    icon: ShieldCheck,
    title: "Full Carrier Appointments",
    description: "Access top-tier products from major providers.",
  },
  {
    icon: Rocket,
    title: "4-Step Onboarding System",
    description: "Go from zero to production in record time.",
  },
  {
    icon: TrendingUp,
    title: "High Comp Contracts",
    description: "Industry-leading compensation for high achievers.",
  },
  {
    icon: Share2,
    title: "Proprietary CRM",
    description: "Advanced tools to manage your hero empire.",
  },
];

export default function AgentCTASection() {
  return (
    <section className={styles.section} aria-label="Join the Hero Network">
      <div className={styles.container}>
        {/* ── Left ──────────────────────── */}
        <div className={styles.content}>
          <h2 className={styles.heading}>Join the Hero Network</h2>
          <p className={styles.lead}>
            Are you a high-performance advisor ready to scale? Leverage the{" "}
            <strong className={styles.highlight}>
              Turnkey Hero Business Platform
            </strong>{" "}
            and redefine what it means to be an insurance professional.
          </p>

          <ul className={styles.perks} role="list">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <li key={perk.title} className={styles.perk}>
                  <span className={styles.perkIcon} aria-hidden="true">
                    <Icon size={16} className={styles.perkIconSvg} />
                  </span>
                  <div>
                    <p className={styles.perkTitle}>{perk.title}</p>
                    <p className={styles.perkDesc}>{perk.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <Link href="/join-us" className={styles.ctaBtn}>
            Become an Agent
          </Link>
        </div>
            {/* ───── Right ──────────────────────── */}
        <div className={styles.imagePanel} aria-hidden="true">
          <Image
            src="/Container%20(11).png"
            alt="Insurance agent platform preview"
            fill
            sizes="fill"
            className={styles.heroImage}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
