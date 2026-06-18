import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  style: ["normal", "italic",],
  display: "swap",
  variable: "--font-headline",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matter-most-insurance.vercel.app/"),
  title: {
    default: "Matter Most Insurance | Protection, Wealth, and Legacy Planning",
    template: "%s | Matter Most Insurance",
  },
  description:
    "Matter Most Insurance helps families, business owners, and advisors compare protection plans, living benefits, retirement income strategies, and legacy planning options.",
  applicationName: "Matter Most Insurance",
  keywords: [
    "insurance protection plans",
    "indexed universal life",
    "equity indexed annuity",
    "long-term care insurance",
    "term life living benefits",
    "retirement income planning",
    "legacy planning",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Matter Most Insurance",
    description:
      "Protection, wealth-building, retirement income, and legacy strategies for what matters most.",
    url: "/",
    siteName: "Matter Most Insurance",
    images: [
      {
        url: "/Heroic protection.png",
        width: 672,
        height: 589,
        alt: "Matter Most Insurance protection planning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matter Most Insurance",
    description:
      "Protection, wealth-building, retirement income, and legacy strategies for what matters most.",
    images: ["/Heroic protection.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
