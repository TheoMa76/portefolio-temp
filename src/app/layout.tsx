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
import { Analytics } from "@vercel/analytics/next"


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
  title: "Théo Maerten | Développeur Full-Stack Freelance | Création de sites web et applications sur mesure",
  metadataBase: new URL(process.env.SITE_URL || "https://theomaerten.fr"),
  openGraph: {
    title: "Théo Maerten | Développeur Full-Stack Freelance | Création de sites web et applications sur mesure",
    description: "Portfolio de Théo Maerten, Développeur full-stack Symfony, React.js, Next.js, Java, Spring, Go, Docker, Ansible, CI/CD, DevOps",
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
  description: "Portfolio de Théo Maerten, un développeur web full-stack ( Symfony, React, Node.js, Next.js, Java, Spring, Go, CI/CD, Ansible, Docker, Automatisation ) passionné. Créons ensemble des sites web et applications sur mesure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr" suppressHydrationWarning>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="canonical" href={`${process.env.SITE_URL}`} />
          <title>{String(metadata.title ?? "")}</title>
          <meta name="description" content={metadata.description ?? ""} />
          <meta name="theme-color" content="#758bfd" />
          <meta name="author" content="Théo Maerten" />
          <meta name="keywords" content="Théo Maerten, développeur web, fullstack, dev, portfolio, freelance, Symfony, React, Node.js, Next.js, Java, Spring, Go, CI/CD, Ansible, Docker, Automatisation, DevOps" />
          <meta name="robots" content="max-snippet:150, nosnippet,index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta property="og:title" content="Théo Maerten | Développeur Full-Stack Freelance | Création de sites web et applications sur mesure"/>
          <meta property="og:description" content="Portfolio de Théo Maerten, Développeur full-stack Symfony, React.js, Next.js, Java, Spring, Go, Docker, Ansible, CI/CD, DevOps"/>
          <meta property="og:image" content={`${process.env.SITE_URL}/images/theomaerten.webp`}/>
          <meta property="og:url" content={`${process.env.SITE_URL}`}/>
          <meta name="twitter:card" content="summary_large_image"/>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Théo Maerten | Portfolio",
                "url": process.env.SITE_URL || "https://theomaerten.fr",
                "description": "Portfolio de Théo Maerten, un développeur web passionné.",
                "image": `${process.env.SITE_URL || "https://theomaerten.fr"}/images/theomaerten.webp`
              }),
            }}
          />

        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
            <FullPageDecoration />
            <header>
              <ImageHeader desktopVideoUrl="/videos/presentation-desktop.mp4" mobileVideoUrl="/videos/presentation-mobile-s.mp4" />
                        <ThemeToggle />

            </header>
            <main>
                {children}
                <Analytics />
            </main>
            <footer>
              <CustomFooter />
            </footer>
          </ThemeProvider>
        </body>
      </html>
  );
}
