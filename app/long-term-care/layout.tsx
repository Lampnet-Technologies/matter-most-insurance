import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Long-Term Care (LTC) | Matter Most Insurance",
  description:
    "LTC coverage fills the gaps Medicare doesn't — protecting your assets, preserving your dignity, and reducing your family's burden. Architectural security for every season of life.",
};

export default function LTCLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
