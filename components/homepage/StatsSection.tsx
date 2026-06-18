import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, RotateCcw, Headphones } from "lucide-react";
import styles from "./StatsSection.module.css";

const stats = [
  {
    value: "A+",
    label: "Financial Rating",
    badge: "Verified",
    icon: <CheckCircle2 />,
  },
  {
    value: "$1B+",
    label: "Assets Protected",
    icon: <ShieldCheck />,
  },
  {
    value: "1000+",
    label: "Exams Waived",
    icon: <RotateCcw />,
  },
  {
    value: "24/7",
    label: "Priority Support",
    icon: <Headphones />,
  },
];

export default function StatsSection() {
  return (
    <section className={styles.section} aria-label="Our statistics">
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>
            Why Matter Most Insurance Matters Most
          </h2>
          <p className={styles.subheading}>
            Our strength is our stability. We build fortresses around what you
            value.
          </p>
        </div>

        <ul className={styles.grid} role="list">
          {stats.map((stat) => (
            <li key={stat.label} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.icon} aria-hidden="true">
                  {stat.icon}
                </span>
                {stat.badge && (
                  <span className={styles.badge}>{stat.badge}</span>
                )}
              </div>
              <p className={styles.value}>{stat.value}</p>
              <p className={styles.label}>{stat.label}</p>
            </li>
          ))}
        </ul>

        <div className={styles.providersBlock}>
          <p className={styles.providersTitle}>
            We partner with only the top and best insurance companies in Canada and the US
          </p>
          <div className={styles.providersGrid}>
            <div className={styles.providerCard}>
              <div className={styles.providerImageWrapper}>
                <Image
                  src="/P1.png"
                  alt="Equitable logo"
                  width={127}
                  height={76}
                  className={styles.providerImage}
                />
              </div>
            </div>
            <div className={styles.providerCard}>
              <div className={styles.providerImageWrapper}>
                <Image
                  src="/P2.png"
                  alt="Financial Group logo"
                  width={127}
                  height={49}
                  className={styles.providerImage}
                />
              </div>
            </div>
            <div className={styles.providerCard}>
              <div className={styles.providerImageWrapper}>
                <Image
                  src="/P3.png"
                  alt="National Life logo"
                  width={144}
                  height={46}
                  className={styles.providerImage}
                />
              </div>
            </div>
            <div className={styles.providerCard}>
              <div className={styles.providerImageWrapper}>
                <Image
                  src="/P4.png"
                  alt="BMO logo"
                  width={127}
                  height={65}
                  className={styles.providerImage}
                />
              </div>
            </div>
          </div>
          <div className={styles.providersAction}>
            <Link href="/services" className={styles.btnPrimary}>
              See our Providers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
