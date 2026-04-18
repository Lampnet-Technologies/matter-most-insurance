import React from "react";
import ContactHeroForm from "@/components/contact/ContactHeroForm";
import ContactProtocol from "@/components/contact/ContactProtocol";
import ContactAgentBanner from "@/components/contact/ContactAgentBanner";
import MainFooter from "@/components/footers/MainFooter";
import NavTwo from "@/components/navbars/NavTwo";


export default function ContactPage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f7fafc" }}>
      <NavTwo />

      <main id="main-content">
        <ContactHeroForm />
        <ContactProtocol />
        <ContactAgentBanner />
      </main>

      <MainFooter />
    </div>
  );
}
