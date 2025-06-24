import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomFooter from "@/components/layout/CustomFooter";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import ImageHeader from "@/components/ui/ImageHeader";
import FullPageDecoration from "@/components/layout/FullPageDecoration";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

config.autoAddCss = false

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Théo Maerten | Portfolio",
  metadataBase: new URL(process.env.SITE_URL || "https://theomaerten.fr"),
  openGraph: {
    title: "Théo Maerten | Développeur Full-Stack Freelance | Création de sites web et applications sur mesure",
    description: "Portfolio de Théo Maerten, un développeur web passionné.",
    url: process.env.SITE_URL || "https://theomaerten.fr",
    siteName: "Théo Maerten | Développeur Full-Stack Freelance | Création de sites web et applications sur mesure",
    images: [
      {
        url: `${process.env.SITE_URL || "https://theomaerten.fr"}/images/theomaerten.webp`,
        width: 1200,
        height: 630,
        alt: "Théo Maerten | Développeur Full-Stack Freelance | Création de sites web et applications sur mesure",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  description: "Portfolio de Théo Maerten, un développeur web full-stack ( Symfony, React, Node.js, Next.js, Java, Spring, Go, CI/CD, Ansible, Docker, Automatisation ) passionné.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
            <FullPageDecoration />
            <header>
              <ImageHeader desktopVideoUrl="/videos/presentation-desktop.mp4" mobileVideoUrl="/videos/presentation-mobile-s.mp4" />
                        <ThemeToggle />

            </header>
            <main>
                {children}
            </main>
            <footer>
              <CustomFooter />
            </footer>
          </ThemeProvider>
        </body>
      </html>
  );
}
