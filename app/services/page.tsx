import ServicesHero from "@/components/services/ServicesHero";
import ServicesLifeHealth from "@/components/services/ServicesLifeHealth";
import ServicesRetirement from "@/components/services/ServicesRetirement";
import ServicesLivingBenefits from "@/components/services/ServicesLivingBenefits";
import ServicesSidebar from "@/components/services/ServicesSidebar";
import NavThree from "@/components/navbars/NavThree";
import MainFooter from "@/components/footers/MainFooter";
import styles from "@/components/services/ServicesLayout.module.css";

export default function ServicesPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#f7fafc" }}
    >
      <NavThree />

      <main className="w-full grow">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <ServicesHero />
        </div>

        {/* Sidebar grid — explicit CSS module, no Tailwind grid classes */}
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className={styles.servicesGrid}>
            <div className={styles.mainCol}>
              <ServicesLifeHealth />
              <ServicesRetirement />
              <ServicesLivingBenefits />
            </div>

            <aside className={styles.sidebarCol}>
              <ServicesSidebar />
            </aside>
          </div>
        </div>

        {/* Full-width sections 03 + 04 — outside sidebar grid */}
        {/* <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <ServicesLivingBenefits />
        </div> */}
      </main>

      <MainFooter />
    </div>
  );
}
