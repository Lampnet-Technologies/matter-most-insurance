import React from "react";
import ContactHeroForm from "@/components/contact/ContactHeroForm";
import ContactProtocol from "@/components/contact/ContactProtocol";
import ContactAgentBanner from "@/components/contact/ContactAgentBanner";
import MainFooter from "@/components/footers/MainFooter";
import MainNav from "@/components/navbars/MainNav";


export default function ContactPage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <MainNav />

      <main id="main-content">
        <ContactHeroForm />
        <ContactProtocol />
        <ContactAgentBanner />
      </main>

      <MainFooter />
    </div>
  );
}
