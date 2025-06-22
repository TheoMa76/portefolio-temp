// app/page.tsx
import { FloatingCircleSection } from "@/components/ui/FloatingCircleSection";
import { GridSection } from "@/components/ui/GridSection";
import { ParallaxSection } from "@/components/ui/ParallaxSection";
import PortfolioProjects from "@/components/ui/PortFolioProjects";
import SkillsSection from "@/components/ui/SkillsSection";
import { TimelineSection } from "@/components/ui/TimeLineSection";
import { ZigzagSection } from "@/components/ui/ZigZagSection";
import type React from "react";

export default function Home() {
  return (
    <main className="space-y-20">
      <SkillsSection title="Mes compétences" />
      
      <PortfolioProjects />

      <GridSection
        title="Mes Compétences Techniques"
        items={[
          {
            title: "Frontend",
            content: "Développement d'interfaces modernes avec React, Next.js et TypeScript",
            icon: <span className="text-2xl">💻</span>,
          },
          {
            title: "Backend",
            content: "API Rest et microservices avec Symfony, Node.js ou Go",
            icon: <span className="text-2xl">⚙️</span>,
          },
          {
            title: "UI/UX",
            content: "Conception d'expériences utilisateur intuitives et accessibles",
            icon: <span className="text-2xl">🎨</span>,
          },
        ]}
      />

      <TimelineSection
        title="Mon Parcours"
        items={[
           {
            date: "mai 2025 - présent",
            title: "Développeur Full-Stack Freelance",
            content: "J’ai conçu et développé sur Symfony plusieurs modules de communication sur mesure pour cabinets d’expert-comptable, visant à fluidifier et simplifier les échanges professionnels. Ma mission a été pensée pour offrir une expérience utilisateur intuitive, rapide et accessible : j’ai optimisé les performances web (temps de chargement, gestion des ressources, accessibilité) en conformité avec les meilleures pratiques SEO technique.Résultat : une solution robuste, maintenable dans le temps, adoptée par les utilisateurs et permettant aux cabinets de gérer leurs communications en toute autonomie. La collaboration se poursuit aujourd’hui avec de nouveaux modules en développement et une relation client durable..",
          },
          {
            date: "août 2023 - août 2025",
            title: "Développeur Full-Stack Alternant",
            content: "J’ai conçu et déployé une plateforme de gestion de bornes de recharge pour véhicules électriques en Java, intégrant un microservice de paiement sécurisé via Lyra et PayPal, ainsi qu’un algorithme de gestion de charge optimisé pour les pics de demande tout en garantissant une scalabilité performante. La sécurité des communications est assurée par une cryptographie asymétrique, protégeant la confidentialité et l’intégrité des données sensibles. J’ai également optimisé les performances applicatives pour réduire les latences et renforcer la robustesse du système. Pour renforcer la présence en ligne de l’entreprise, j’ai développé un site vitrine sous Symfony, optimisé pour le SEO et conçu pour améliorer le trafic organique et les conversions, accompagné d’un back‑office intuitif favorisant la diffusion d’informations précises et une meilleure expérience utilisateur.",
          },
        ]}
      />

       <ZigzagSection
        title="Mes passions"
        items={[
          {
            title: "Beatbox",
            content: "Je pratique le beatbox depuis 2010, créant des sons percutants et des rythmes complexes uniquement avec ma voix. J'ai participé à des compétitions en ligne et en live, développant une technique unique et un style personnel, renforçant ma créativitén, ma gestion du stress et mon esprit de compétition.",
            image: "/ecommerce.jpg",
          },
          {
            title: "Jeux Vidéo",
            content: "J'aime les jeux vidéo compétitifs. J'ai d'ailleurs été joueur de Counter-Strike dans une équipe amateur, où j'ai appris la stratégie, le travail d'équipe et la gestion du stress. J'apprécie particulièrement les jeux qui demandent de la réflexion et de la coordination. J'ai ensuite basculé sur Valorant, en passant chef d'équipe, où j'ai développé mes compétences en leadership et en communication.",
            image: "/saas-app.jpg",
          },
          {
            title: "Musique MAO",
            content: "Je suis passionné par la musique assistée par ordinateur (MAO). J'utilise des logiciels comme FL Studio pour créer des compositions musicales, majoritairement de l'électro expérimentant avec différents genres et styles. Cette passion m'a permis de développer ma créativité, mon sens du rythme et ma capacité à travailler sur des projets complexes. J'ai d'ailleurs une chaîne YouTube où je partage mes créations musicales.",
            image: "/portfolio.jpg",
          },
        ]}
      />

      <FloatingCircleSection
        title="Mon Univers"
        centerContent={
          <div>
            <div className="text-2xl font-bold mb-2">Développeur</div>
            <div className="text-lg">Passionné</div>
          </div>
        }
        floatingItems={[
          { content: "🚀 Innovation", position: "top-0 left-1/4" },
          { content: "💡 Créativité", position: "top-1/4 right-0" },
          { content: "🎯 Précision", position: "bottom-1/4 right-1/4" },
          { content: "🔥 Passion", position: "bottom-0 left-0" },
          { content: "⚡ Performance", position: "top-1/2 left-0" },
          { content: "🌟 Excellence", position: "top-1/2 right-0" },
        ]}
      />

      <ParallaxSection
        title="Créons Ensemble"
        subtitle="Votre projet mérite une attention particulière"
        content={
          <div>
            <p className="mb-6">
              Je suis passionné par la création d'expériences numériques exceptionnelles. Chaque projet est une
              opportunité d'innover et de repousser les limites du possible.
            </p>
            <p>Contactez-moi pour discuter de votre vision et la transformer en réalité.</p>
          </div>
        }
        backgroundElements={[
          {
            id: "1",
            element: <div className="w-20 h-20 bg-[var(--tertiary)] rounded-full glowblue" />,
            position: { top: "10", left: "10" },
            animationDelay: 0,
            animationDuration: 6,
          },
          {
            id: "2",
            element: <div className="w-16 h-16 bg-[var(--primary)] rounded-full glow" />,
            position: { top: "32", right: "20" },
            animationDelay: 1,
            animationDuration: 7,
          },
          {
            id: "3",
            element: <div className="w-12 h-12 bg-[var(--secondary)] rounded-full glowblue" />,
            position: { bottom: "20", left: "33%" },
            animationDelay: 2,
            animationDuration: 5,
          },
          {
            id: "4",
            element: <div className="w-24 h-24 bg-[var(--tertiary)] rounded-full glow" />,
            position: { bottom: "10", right: "10" },
            animationDelay: 0.5,
            animationDuration: 8,
          },
        ]}
      />
    </main>
  );
}