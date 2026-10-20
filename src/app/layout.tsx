import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Only used inside the ClawQuant interface fragment, which is real product UI.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const TITLE = "Saad Lamkadam — Software & AI Systems Engineer";
const DESCRIPTION =
  "Saad (Jake) Lamkadam, software and AI systems engineer in Gżira, Malta: 7+ years of IoT telemetry pipelines, government automation for the Office of the Prime Minister, and a 24/7 algorithmic trading engine.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://saadlamkadam-portfolio.up.railway.app"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "profile",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/saad_lamkadam_portrait.png", width: 800, height: 800, alt: "Portrait of Saad Lamkadam" }],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/saad_lamkadam_portrait.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
