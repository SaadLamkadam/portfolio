import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const editorialSerif = Cormorant_Garamond({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const cleanSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saad Lamkadam — Software & AI Systems Engineer",
  description:
    "Software & AI Systems Engineer with 7+ years architecting IoT telemetry platforms, cross-ministry Maltese government automations, and 24/7 algorithmic trading systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${editorialSerif.variable} ${cleanSans.variable} ${monoFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
