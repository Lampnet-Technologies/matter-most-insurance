import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Overview | Matter Most Insurance",
  description:
    "Explore our protective frameworks including Life & Health, Retirement Strategy, and Business Continuity.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--svc-surface, #f7fafc)",
        color: "var(--svc-text-primary, #181c1e)",
        fontFamily: "var(--svc-font-body, sans-serif)",
      }}
    >
      {children}
    </div>
  );
}
