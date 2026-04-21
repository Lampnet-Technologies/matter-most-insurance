import { Shield, Wallet, Activity, FileSignature } from "lucide-react";
import styles from "./ServicesSidebar.module.css";

export default function ServicesSidebar() {
  return (
    <div className={styles.outerWrapper}>
      {/* Dark sticky card */}
      <div className={`sticky top-0 ${styles.sidebarContainer}`}>
        <h3 className={styles.heading}>The Heroic Selection</h3>
        <p className={styles.description}>
          Specific vehicles designed for aggressive protection and sophisticated
          wealth accumulation.
        </p>

        <div className={styles.list}>
          {[
            { icon: Shield, title: "IUL", subtitle: "Indexed Universal Life" },
            { icon: Wallet, title: "EIA", subtitle: "Equity Indexed Annuity" },
            { icon: Activity, title: "LTC", subtitle: "Long-Term Care" },
            {
              icon: FileSignature,
              title: "TLB",
              subtitle: "Term with Living Benefits",
            },
          ].map((item, index) => (
            <div key={index} className={styles.listItem}>
              <div className={styles.listcontainer}>
                <div className={styles.iconWrapper}>
                  <item.icon size={18} className={styles.icon} />
                </div>
                <div className={styles.textWrapper}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <p className={styles.itemSubtext}>{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ad placeholder inside the dark card, at the bottom */}
        <div className={styles.adPlaceholder}>
          <span className={styles.adText}>Medium Rectangle 300×250</span>
        </div>
      </div>
    </div>
  );
}
