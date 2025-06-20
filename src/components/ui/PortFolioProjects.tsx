"use client"

import { useState } from "react"
import ProjectCard from "./ProjectCard"

interface Project {
  id: number
  title: string
  description: string
  image: string
  liveUrl: string
  githubUrl?: string
  technologies: string[]
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Une plateforme e-commerce moderne avec panier, paiement et gestion des commandes. Interface responsive et optimisée pour les performances.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce",
    technologies: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description:
      "Tableau de bord interactif pour visualiser des données analytiques avec graphiques en temps réel et filtres avancés.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "https://example-dashboard.com",
    githubUrl: "https://github.com/username/dashboard",
    technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Portfolio Créatif",
    description:
      "Site portfolio pour un artiste avec galerie interactive, animations fluides et système de contact intégré.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "https://example-portfolio.com",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
  },
  {
    id: 4,
    title: "Application Mobile",
    description:
      "Application mobile cross-platform pour la gestion de tâches avec synchronisation cloud et notifications push.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "https://example-app.com",
    githubUrl: "https://github.com/username/mobile-app",
    technologies: ["React Native", "Firebase", "Redux"],
  },
]

export default function PortfolioProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--white)" }}>
            Mes Projets
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary)" }}>
            Découvrez une sélection de mes réalisations web, alliant créativité, performance technique et expérience utilisateur optimale.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredProject === project.id}
              onHover={() => setHoveredProject(project.id)}
              onLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg mb-6" style={{ color: "var(--secondary)" }}>
            Intéressé par mon travail ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 glow"
            style={{
              backgroundColor: "var(--tertiary)",
              color: "var(--background)",
            }}
          >
            Contactez-moi
          </a>
        </div>
      </div>
    </section>
  )
}