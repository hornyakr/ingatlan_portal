import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans, Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const ralewayHeading = Raleway({subsets:['latin'],variable:'--font-heading'});

const dmSans = DM_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ingatlan Portál",
  description: "Ingatlan kereső és közvetítő portál eladásra és kiadásra szánt lakásokhoz, házakhoz és irodákhoz. Eladók, kiadók, vevők és bérlők számára, ingatlanirodákkal és szakemberekkel, térképes kereséssel és részletes hirdetésekkel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", dmSans.variable, ralewayHeading.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
