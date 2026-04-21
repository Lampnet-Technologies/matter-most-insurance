import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "EIA: Retire Like a Hero | Matter Most Insurance",
  description: "Guaranteed lifetime income with 0% market risk. Equity Indexed Annuities — secure your architectural legacy with precision risk management.",
};
export default function EIALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
