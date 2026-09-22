import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { Noto_Serif_Arabic } from "next/font/google";

import "./globals.css";

import { ContactFooter } from "@/components/footer/ContactFooter";
import { Cursor } from "@/components/cursor/Cursor";
import { OpeningSequence } from "@/components/intro/OpeningSequence";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const vazirmatn = localFont({
  src: [
    {
      path: "../fonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Vazirmatn-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
});

const notoSerifArabic = Noto_Serif_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading-arabic",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "UrumSima — Architecture Studio",
    template: "%s — UrumSima",
  },

  description:
    "UrumSima is an architecture studio exploring space, light, material, proportion, and human experience.",

  applicationName: "UrumSima",

  keywords: [
    "UrumSima",
    "architecture",
    "architecture studio",
    "architectural design",
    "Urmia architecture",
    "Iran architecture",
    "spatial design",
    "interior architecture",
  ],

  authors: [
    {
      name: "UrumSima Architecture Studio",
    },
  ],

  creator: "UrumSima Architecture Studio",

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: "UrumSima",
    title: "UrumSima — Architecture Studio",
    description:
      "Architecture that shapes human experience.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1600,
        height: 900,
        alt: "UrumSima architectural space",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "UrumSima — Architecture Studio",
    description:
      "Architecture that shapes human experience.",
    images: ["/images/hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F5F3EE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirmatn.variable} ${notoSerifArabic.variable} bg-background text-foreground antialiased`}
      >
        <SmoothScroll>
          <OpeningSequence />

          <Navbar />

          <Cursor />

          {children}

          <ContactFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}