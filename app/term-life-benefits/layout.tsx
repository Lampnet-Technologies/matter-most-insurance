import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Term Life (TLB) | Matter Most Insurance",
  description:
    "Term Life Insurance that pays you now, not just later. Coverage from $25k to $2M with no exam options and 15–30 year terms. Modern protection built for the velocity of today's wealth.",
};

export default function TLBLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
