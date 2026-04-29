import ServicesHero from "@/components/services/ServicesHero";
import ServicesLifeHealth from "@/components/services/ServicesLifeHealth";
import ServicesRetirement from "@/components/services/ServicesRetirement";
import ServicesLivingBenefits from "@/components/services/ServicesLivingBenefits";
import ServicesSidebar from "@/components/services/ServicesSidebar";
import MainNav from "@/components/navbars/MainNav";
import MainFooter from "@/components/footers/MainFooter";
import styles from "@/components/services/ServicesLayout.module.css";
import ServicesLivingBenefits2 from "@/components/services/ServicesLivingBenefits2";
import ServicesBusinessContinuity from "@/components/services/ServicesBusinessContinuity";

export default function ServicesPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#f7fafc" }}
    >
      <MainNav />

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
              <ServicesLivingBenefits2 />
              <ServicesBusinessContinuity />
             {/*  <ServicesLivingBenefits /> */}
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
