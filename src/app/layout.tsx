import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Le Jardin Restaurant | Cuisine Méditerranéenne d'Exception",
  description:
    "Découvrez Le Jardin Restaurant à Alger. Une expérience culinaire méditerranéenne d'exception avec des plats signatures préparés par le Chef Karim Benali.",
  keywords: [
    "restaurant",
    "méditerranéen",
    "Alger",
    "cuisine",
    "gastronomie",
    "Le Jardin",
    "Chef Karim Benali",
  ],
  openGraph: {
    title: "Le Jardin Restaurant | Cuisine Méditerranéenne d'Exception",
    description:
      "Une expérience culinaire méditerranéenne d'exception au cœur d'Alger.",
    url: "https://lejardinrestaurant.com",
    siteName: "Le Jardin Restaurant",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1920,
        height: 1080,
        alt: "Le Jardin Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Jardin Restaurant | Cuisine Méditerranéenne d'Exception",
    description:
      "Une expérience culinaire méditerranéenne d'exception au cœur d'Alger.",
    images: ["/images/hero.jpg"],
  },
  metadataBase: new URL("https://lejardinrestaurant.com"),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      fr: "/",
      en: "/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="alternate" hrefLang="fr" href="/" />
        <link rel="alternate" hrefLang="en" href="/" />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
