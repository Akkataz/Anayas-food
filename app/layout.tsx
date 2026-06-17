import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anaya's Food — Smash Burgers & Tenders maison",
  description:
    "Smash burgers fondants, tenders maison croustillants et boxs généreuses. Anaya's Food, le snack fait maison. Découvrez le menu et commandez.",
  openGraph: {
    title: "Anaya's Food — Smash Burgers & Tenders maison",
    description:
      "Smash burgers fondants, tenders maison croustillants et boxs généreuses. Le snack fait maison.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
