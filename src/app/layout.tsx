import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomFooter from "@/components/layout/CustomFooter";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from "@/components/layout/Navbar";
import ImageHeader from "@/components/ui/ImageHeader";

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
  metadataBase: new URL("https://theomaerten.com"),
  openGraph: {
    title: "Théo Maerten | Portfolio",
    description: "Portfolio de Théo Maerten, un développeur web passionné.",
    url: "https://theomaerten.com",
    siteName: "Théo Maerten | Portfolio",
    images: [
      {
        url: "https://theomaerten.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Théo Maerten | Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Théo Maerten | Portfolio",
    description: "Portfolio de Théo Maerten, un développeur web passionné.",
    images: ["https://theomaerten.com/og-image.png"],
  },
  description: "Portfolio de Théo Maerten, un développeur web passionné.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header>
            <ImageHeader videoUrl="/videos/test.mp4" />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <CustomFooter />
          </footer>
        </body>
      </html>
  );
}
