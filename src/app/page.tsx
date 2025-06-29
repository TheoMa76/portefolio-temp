import { GridSection } from "@/components/ui/GridSection";
import { ParallaxSection } from "@/components/ui/ParallaxSection";
import PortfolioProjects from "@/components/ui/PortFolioProjects";
import SkillsSection from "@/components/ui/SkillsSection";
import { TimelineSection } from "@/components/ui/TimeLineSection";
import { ZigzagSection } from "@/components/ui/ZigZagSection";
import Form from "@/components/utilities/Form";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import { faCogs, faComputer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type React from "react";

export default function Home() {
  return (
    <main className="space-y-20" id="main-content">
      <SkillsSection title="Mes compétences" />
      
      <PortfolioProjects />

      <GridSection
        title="Mes compétences Techniques"
        items={[
          {
            title: "Frontend",
            content: "Développement d'interfaces modernes avec React, Next.js et TypeScript",
            icon: <FontAwesomeIcon icon={faComputer} className="text-2xl" />,
          },
          {
            title: "Backend",
            content: "API Rest et microservices avec Symfony, Node.js ou Go",
            icon: <FontAwesomeIcon icon={faCogs} className="text-2xl" />,
          },
          {
            title: "DevOps & CI/CD",
            content: "Mise en ligne automatisée au CI/CD avec GitHub Actions, Docker et Ansible",
            icon: <FontAwesomeIcon icon={faDocker} className="text-2xl" />,
          },
        ]}
      />

      <TimelineSection
        title="Mon Parcours"
        items={[
          {
            date: "mai 2025 - présent",
            title: "Développeur Full-Stack Freelance",
            content: `
              <p class="mb-10">
                J’ai conçu et développé sur <strong>Symfony</strong> plusieurs modules de communication sur mesure pour des cabinets d’expert‑comptable, visant à fluidifier et simplifier les échanges professionnels.
              </p>
              <p class="mb-10">
                Ma mission a été pensée pour offrir une expérience utilisateur intuitive, rapide et accessible , ainsi qu'un code robuste et maintenable : j’ai adapté du code existant et réalisé des développements spécifiques pour répondre aux besoins uniques de chaque module.
              </p>
              <p class="mb-10 p-6">
                <strong>Résultat </strong>: une solution robuste, maintenable dans le temps, adoptée par les utilisateurs et permettant aux cabinets de gérer leurs communications en toute autonomie.
              </p>
              <p class="text-[var(--tertiary)] font-semibold text-xl">
                La collaboration se poursuit aujourd’hui avec de nouveaux modules en développement et une relation client durable.
              </p>
            `,
          },
            {
            date: "août 2023 - août 2025",
            title: "Développeur Full‑Stack Alternant",
            content: `
              <p class="mb-10">
                J’ai conçu et déployé une plateforme de gestion de bornes de recharge pour véhicules électriques (EV charging platform) en <strong>Java</strong>, utilisant un microservice de paiement sécurisé avec <strong>Lyra</strong> et <strong>PayPal</strong>. J’ai implémenté un algorithme de gestion de charge intelligent (smart charging) optimisé pour équilibrer efficacement la distribution d’énergie.
              </p>
              <p class="mb-10">
                J’ai assuré la sécurité des communications via une cryptographie asymétrique (RSA), garantissant la confidentialité et l’intégrité des données sensibles dans un environnement distribué.
              </p>
              <p class="mb-10">
                J’ai développé le front‑end de supervision en <strong>Angular</strong> : une interface UI/UX réactive et intuitive, conçue pour offrir une expérience utilisateur fluide et améliorer la lisibilité des données en temps réel.
              </p>
              <p class="mb-10">
                J’ai mis en place des tests de bout en bout (E2E) avec <strong>Playwright</strong>, validant les parcours critiques sur plusieurs navigateurs (Chromium, Firefox, WebKit), et facilitant l’intégration continue (CI/CD).
              </p>
              <p class="mb-10">
                J’ai également optimisé les performances applicatives, réduisant les temps de latence, améliorant la scalabilité, tout en garantissant un monitoring en temps réel de la charge et de la disponibilité des bornes.
              </p>
              <p class="mb-10">
                En parallèle, j’ai développé un site vitrine sous <strong>Symfony</strong>, optimisé pour le SEO local et technique (on-page SEO, balises meta, structure H1/H2), favorisant le trafic organique et les conversions. Un back‑office intuitif a été mis en place pour faciliter la gestion des contenus et l’actualisation des services.
              </p>
              <p class="mb-10 p-6">
                <strong>Résultat :</strong> une solution full‑stack sécurisée et performante (Java, Angular, Symfony), adoptée par les utilisateurs, consolidant la position de l’entreprise comme acteur de référence dans l’écosystème des bornes de recharge.
              </p>
            `,
          },
        ]}
      />

       <ZigzagSection
        title="Mes passions"
        items={[
          {
            title: "Beatbox",
            content: "Je pratique le beatbox depuis 2010, créant des sons percutants et des rythmes complexes uniquement avec ma voix. J'ai participé à des compétitions en ligne et en live, développant une technique unique et un style personnel, renforçant ma créativité, ma gestion du stress et mon esprit de compétition.",
            image: "/images/beatbox.webp",
            imageAlt: "Image de Wing, un beatboxer de corée du Sud en action",
          },
          {
            title: "Jeux Vidéo",
            content: "J'aime les jeux vidéo compétitifs. J'ai d'ailleurs été joueur de Counter-Strike dans une équipe amateur, où j'ai appris la stratégie, le travail d'équipe et la gestion du stress. J'apprécie particulièrement les jeux qui demandent de la réflexion et de la coordination. J'ai ensuite basculé sur Valorant, en passant chef d'équipe, où j'ai développé mes compétences en leadership et en communication.",
            image: "/images/jeuxvideo.webp",
            imageAlt: "Image de Valorant et Counter-Strike, deux jeux vidéo compétitifs",
          },
          {
            title: "Musique MAO",
            content: "Je suis passionné par la musique assistée par ordinateur (MAO). J'utilise des logiciels comme FL Studio pour créer des compositions musicales, majoritairement de l'électro expérimentant avec différents genres et styles. Cette passion m'a permis de développer ma créativité, mon sens du rythme et ma capacité à travailler sur des projets complexes. J'ai d'ailleurs une chaîne YouTube où je partage mes créations musicales.",
            image: "/images/mao.webp",
            imageAlt: "Image d'un poste de musique assistée par ordinateur (MAO)",
            url:"https://www.youtube.com/@nephthys3965",
            urlText: "lien vers la chaîne YouTube de Théo Maerten, où il partage ses créations musicales.",
          },
        ]}
      />

      <ParallaxSection
        title="Créons Ensemble"
        subtitle="Votre projet mérite une attention particulière"
        content={
          <div>
            <p className="mb-6">
              Je suis passionné par la création d&apos;expériences numériques <span className="text-[var(--tertiary)] font-semibold">exceptionnelles</span>. Chaque projet est une
              opportunité d&apos;innover et de repousser les limites du possible.
            </p>
            <p><span className="text-[var(--tertiary)] font-semibold">Contactez-moi</span> pour discuter de votre vision et la transformer en réalité.</p>
          </div>
        }
        backgroundElements={[
          {
            id: "1",
            element: <div className="w-20 h-20 bg-[var(--tertiary)] rounded-full glow" />,
            position: { top: "5%", left: "5%" },
            animationDelay: 0,
            animationDuration: 6,
          },
          {
            id: "2",
            element: <div className="w-16 h-16 bg-[var(--primary)] rounded-full glowblue" />,
            position: { top: "10%", right: "10%" },
            animationDelay: 1,
            animationDuration: 7,
          },
          {
            id: "3",
            element: <div className="w-12 h-12 bg-[var(--secondary)] rounded-full glowblue" />,
            position: { top: "20%", left: "30%" },
            animationDelay: 2,
            animationDuration: 5,
          },
          {
            id: "4",
            element: <div className="w-24 h-24 bg-[var(--tertiary)] rounded-full glow" />,
            position: { top: "25%", right: "5%" },
            animationDelay: 0.5,
            animationDuration: 8,
          },
          {
            id: "5",
            element: <div className="w-14 h-14 bg-[var(--primary)] rounded-full glowblue" />,
            position: { top: "35%", left: "20%" },
            animationDelay: 1.2,
            animationDuration: 6,
          },
          {
            id: "6",
            element: <div className="w-10 h-10 bg-[var(--secondary)] rounded-full glowblue" />,
            position: { top: "40%", right: "25%" },
            animationDelay: 0.3,
            animationDuration: 5,
          },
          {
            id: "7",
            element: <div className="w-20 h-20 bg-[var(--primary)] rounded-full glowblue" />,
            position: { top: "50%", left: "10%" },
            animationDelay: 1.5,
            animationDuration: 7,
          },
          {
            id: "8",
            element: <div className="w-16 h-16 bg-[var(--tertiary)] rounded-full glow" />,
            position: { top: "55%", right: "5%" },
            animationDelay: 2.2,
            animationDuration: 6,
          },
          {
            id: "9",
            element: <div className="w-12 h-12 bg-[var(--secondary)] rounded-full glowblue" />,
            position: { top: "65%", left: "50%" },
            animationDelay: 0.8,
            animationDuration: 5,
          },
          {
            id: "10",
            element: <div className="w-18 h-18 bg-[var(--primary)] rounded-full glowblue" />,
            position: { bottom: "20%", right: "10%" },
            animationDelay: 1.1,
            animationDuration: 7,
          },
          {
            id: "11",
            element: <div className="w-14 h-14 bg-[var(--tertiary)] rounded-full glow" />,
            position: { bottom: "10%", left: "15%" },
            animationDelay: 0.4,
            animationDuration: 6,
          },
          {
            id: "12",
            element: <div className="w-16 h-16 bg-[var(--secondary)] rounded-full glowblue" />,
            position: { bottom: "5%", right: "20%" },
            animationDelay: 1.7,
            animationDuration: 8,
          },
        ]}

      />
      <div className="w-full max-w-6xl mx-auto p-4 xl:p-0">
        <Form />
      </div>
    </main>
  );
}