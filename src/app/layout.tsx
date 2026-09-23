import type { Metadata } from "next";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "استودیو معماری",
  description: "وب‌سایت فارسی یک استودیوی معماری معاصر",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}
        <PageTransition />
      </body>
    </html>
  );
}
