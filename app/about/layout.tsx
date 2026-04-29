import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Matter Most Insurance",
  description:
    "Building fortresses for financial legacies since 1994. We architect certainty in an uncertain world — the monolithic foundation for the world's most complex enterprises.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
