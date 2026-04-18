import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Matter Most Insurance",
  description:
    "Request a private consultation with a senior advisor. Architectural security for your future — protecting what matters most.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
