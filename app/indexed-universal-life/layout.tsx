import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IUL: The Hero of All Protection Plans | Matter Most Insurance",
  description:
    "Indexed Universal Life insurance provides tax-free wealth building, market growth without market risk, and access to living benefits when you need them most.",
};

export default function IULLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
