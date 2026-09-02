import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { StickyCallBar } from "@/components/site/StickyCallBar";
import { site } from "@/lib/site";
import "./globals.css";

/**
 * Jedna rodina ve dvou šířkách: nadpisy rozšířené (wdth ~110), text základní.
 * Ušetří to dva soubory písma proti klasické dvojici display + text.
 */
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Instalatér a topenář ${site.city} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Instalatér a topenář v Hrušovanech nad Jevišovkou a širokém okolí. Voda, topení, plyn, kanalizace, inspekce potrubí kamerou a strojní čištění odpadů. Firma s dvacetiletou tradicí.",
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: site.name,
    url: site.url,
    title: `Instalatér a topenář ${site.city} | ${site.name}`,
    description:
      "Voda, topení, plyn, kanalizace, inspekce kamerou a čištění odpadů v Hrušovanech nad Jevišovkou a okolí. Dvacet let praxe.",
    images: [
      {
        url: "/img/van.jpg",
        width: 1253,
        height: 1112,
        alt: "Dodávka s polepem VODA TOPENÍ PLYN a kontaktem na Miroslava Tisoně",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#0A2340",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={archivo.variable}>
      <body>
        <a
          href="#obsah"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy focus:px-4 focus:py-2 focus:font-display focus:font-semibold focus:text-white"
        >
          Přeskočit na obsah
        </a>
        <Header />
        <main id="obsah">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
