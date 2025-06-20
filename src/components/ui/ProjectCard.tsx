"use client"

import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEye, faExternalLink } from "@fortawesome/free-solid-svg-icons"
import { Project } from "@/components/type/Project.type"

interface Props {
  project: Project
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}

export default function ProjectCard({ project, isHovered, onHover, onLeave }: Props) {
  return (
    <article
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 ${
        project.featured ? "md:col-span-2 xl:col-span-1" : ""
      } ${isHovered ? "glow" : "glowblue"}`}
      style={{ backgroundColor: "var(--primary)" }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      tabIndex={0}
      role="article"
      aria-labelledby={`project-title-${project.id}`}
    >
      {project.featured && (
        <div
          className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-sm font-semibold animate-float"
          style={{ backgroundColor: "var(--tertiary)", color: "var(--background)" }}
          aria-label="Projet mis en avant"
        >
          ⭐ Featured
        </div>
      )}

      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={`Capture d'écran du projet ${project.title}`}
          className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          width={500}
          height={300}
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: "var(--tertiary)", color: "var(--background)" }}
          >
            <FontAwesomeIcon icon={faEye} />
            <span className="sr-only">Voir le projet</span>
            Live
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "var(--white)", color: "var(--background)" }}
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="sr-only">Code source</span>
              Code
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3
          id={`project-title-${project.id}`}
          className="text-xl font-bold mb-3 group-hover:text-opacity-90 transition-colors"
          style={{ color: "var(--white)" }}
        >
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--secondary)" }}>
          {project.description}
        </p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
                <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                        backgroundColor: "var(--background)",
                        color: "var(--secondary)",
                    }}
                >
                    {tech}
                </span>
            ))}
          </div>
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium transition-all duration-200 hover:gap-3 rounded"
          style={{ color: "var(--tertiary)" }}
        >
          Voir le projet
          <FontAwesomeIcon icon={faExternalLink} />
        </a>
      </div>
    </article>
  )
}