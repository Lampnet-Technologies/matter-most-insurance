import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance & Legal | Matter Most Insurance",
  description:
    "Our legal framework is the invisible foundation of your financial security. Licensed in all 50 states, A+ rated carriers, and fully GDPR & CCPA compliant.",
};

export default function ComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
