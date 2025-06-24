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
    <section className="px-4 sm:px-6 lg:px-8" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[var(--white)] bg-[var(--secondary)] bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
            Découvrez une sélection de mes réalisations web, alliant créativité, performance technique et expérience utilisateur optimale.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isLast = index === projects.length - 1
            const isOdd = projects.length % 2 !== 0

            return (
              <div
                key={project.id}
                className={`
                  ${isLast && isOdd ? "xl:col-span-1 xl:max-w-full md:col-span-2 md:max-w-1/2 md:mx-auto" : ""}
                `}
              >
                <ProjectCard
                  project={project}
                  isHovered={hoveredProject === project.id}
                  onHover={() => setHoveredProject(project.id)}
                  onLeave={() => setHoveredProject(null)}
                />
              </div>
            )
          })}
        </div>

        <div className="text-center mt-20">
            <p className="text-lg text-[var(--white)] bg-[var(--secondary)] p-6 rounded-2xl shadow-lg max-w-3xl mx-auto">
            Vous recherchez un développeur passionné, créatif et rigoureux pour concrétiser vos projets web&nbsp;? Fort d’une expertise en React, Next.js, Tailwind CSS et développement fullstack, je mets mes compétences au service de votre réussite digitale. Discutons ensemble de vos besoins et donnons vie à vos idées&nbsp;!
            </p>
          </div>
          <div className="flex justify-center mt-20 animate-float">
              <a
              href="#contact"
              className="bg-[var(--tertiary)] mx-auto text-[var(--background)] inline-flex items-center px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 glow hover:glowblue"
            >
              Contactez-moi
            </a>
          </div>
          
        </div>
    </section>
  )
}