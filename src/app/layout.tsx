import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* Disciplined 2-Family Pair: Editorial Serif + Precision Geometric Sans */
const editorialSerif = Cormorant_Garamond({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const precisionSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const telemetryMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saad (Jake) Lamkadam — Software & AI Systems Engineer",
  description:
    "Portfolio of Saad Lamkadam: 7+ years architecting IoT telemetry pipelines, Maltese government automations (Office of the Prime Minister), and 24/7 algorithmic trading systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${editorialSerif.variable} ${precisionSans.variable} ${telemetryMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
