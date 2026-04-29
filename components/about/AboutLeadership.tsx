import React from "react";
import Image from "next/image";
import styles from "./AboutLeadership.module.css";

const team = [
  {
    id: "elias-thorne",
    name: "Elias Thorne",
    role: "Chief Executive Officer",
    photo: "/partner01.png",
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Managing Partner",
    photo: "/partner02.png",
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "Chief Risk Officer",
    photo: "/partner03.png",
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Chief Actuary",
    photo: "/partner04.png",
  },
];

export default function AboutLeadership() {
  return (
    <section className={styles.section} aria-label="Our Leadership team">
      <div className={styles.container}>

        {/* ── Section header ─────────────────────── */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Leadership</h2>
          <p className={styles.subhead}>
            The architects behind the certainty. A convergence of actuarial
            science, legal acumen, and strategic foresight.
          </p>
        </div>

        {/* ── Team grid ──────────────────────────── */}
        <ul className={styles.grid} role="list">
          {team.map((member) => (
            <li key={member.id} className={styles.card}>
              <div className={styles.photoWrap}>
                <Image
                  src={member.photo}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(max-width:600px) 50vw, 25vw"
                  className={styles.photo}
                />
              </div>
              <p className={styles.name}>{member.name}</p>
              <p className={styles.role}>{member.role}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
