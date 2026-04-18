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
  title: "Matter Most Insurance",
  description: "Protecting your health, family, and wealth.",
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
