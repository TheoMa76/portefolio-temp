"use client"

import { useState } from "react"
import ProjectCard from "./ProjectCard"
import { Project } from "../type/Project.type"



const projects: Project[] = [
  {
    id: 1,
    title: "GreenPot : Plateforme participative écologique",
    description:
      "Une plateforme participative pour promouvoir les initiatives écologiques locales",
    image: "/images/greenpot.webp",
    liveUrl: "https://theomaerten.fr",
    githubUrl: "https://github.com/TheoMa76/greenpot",
    technologies: ["Laravel", "PHP", "Apex.js", "Tailwind CSS", "MariaDB/SQL"],
    featured: true,
  },
  {
    id: 2,
    title: "PixelPerfect : Site vitrine",
    description:
      "Site vitrine pour une agence de design avec animations CSS, optimisé SEO, entièrement responsive et accessible.",
    image: "/images/pixelperfect.webp",
    liveUrl: "https://pixelperfectastro.netlify.app/",
    githubUrl: "https://github.com/TheoMa76/pixelperfectastro",
    technologies: ["Astro.js", "React.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 3,
    title: "Easymod : OpenClassroom pour minecraft",
    description:
      "Site web éducatif pour apprendre à modder Minecraft, avec tutoriels interactifs. UI style Minecraft, responsive et accessible.",
    image: "/images/easymod.webp",
    liveUrl: "https://easymod.theomaerten.fr",
    githubUrl: "https://github.com/TheoMa76/easymodfront",
    technologies: ["Next.js", "React.js", "Symfony/API REST", "Tailwind CSS"],
  }
]

export default function PortfolioProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[var(--white)]">
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
            <p className="text-lg mb-6 text-[var(--white)]">
            Vous recherchez un développeur passionné, créatif et rigoureux pour concrétiser vos projets web&nbsp;? Fort d’une expertise en React, Next.js, Tailwind CSS et développement fullstack, je mets mes compétences au service de votre réussite digitale. Discutons ensemble de vos besoins et donnons vie à vos idées&nbsp;!
            </p>
          <a
            href="#contact"
            className="bg-[var(--tertiary)] text-[var(--background)] inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 glow"
          >
            Contactez-moi
          </a>
        </div>
      </div>
    </section>
  )
}