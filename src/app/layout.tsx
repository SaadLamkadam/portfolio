import type { Metadata } from "next";
import { Cinzel_Decorative, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saad (Jake) Lamkadam — Software & AI Systems Engineer",
  description:
    "Portfolio of Saad Lamkadam — Software Developer & AI Systems Engineer. 7+ years architecting IoT telemetry pipelines, cross-ministry Maltese government systems, and 24/7 algorithmic trading architectures.",
  keywords: [
    "Saad Lamkadam",
    "Software Engineer Malta",
    "AI Systems Engineer",
    "IoT Energy Telemetry",
    "ClawQuant",
    "Python",
    "FastAPI",
    "C# .NET",
    "Servizz.gov",
  ],
  authors: [{ name: "Saad Lamkadam", url: "https://github.com/saad-lamkadam" }],
  openGraph: {
    title: "Saad Lamkadam — Software & AI Systems Engineer",
    description: "Art Deco inspired portfolio of enterprise IoT, automation, and AI systems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${plusJakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
