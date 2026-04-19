import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us — Matter Most Insurance",
  description:
    "Architect your own success. Join the Hero Team at Matter Most Insurance and leverage our turnkey infrastructure to build a legacy of protection.",
};

export default function JoinUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
