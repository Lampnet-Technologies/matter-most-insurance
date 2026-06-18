import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Equity Indexed Annuity Opportunities",
  description:
    "Explore Equity Indexed Annuity strategies for principal protection, retirement income security, market-linked growth potential, and legacy planning.",
  alternates: {
    canonical: "/equity-indexed-annuity",
  },
  openGraph: {
    title: "Equity Indexed Annuity Opportunities | Matter Most Insurance",
    description:
      "Build wealth, protect retirement income, and access market-linked growth with downside protection.",
    url: "/equity-indexed-annuity",
    images: [
      {
        url: "/eia-img1.png",
        width: 488,
        height: 589,
        alt: "Reflective glass tower representing structured financial protection",
      },
    ],
  },
};
export default function EIALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
