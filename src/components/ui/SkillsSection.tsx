import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSymfony, faReact, faJava, faGolang, faDocker } from "@fortawesome/free-brands-svg-icons"
import LogoElement from "./LogoElement"
import { faRobot } from "@fortawesome/free-solid-svg-icons"

type SkillsSectionProps = {
  title: string
}

export const SkillsSection = ({ title }: SkillsSectionProps) => {

  const headingId = `heading-${title.replace(/\s+/g, "-").toLowerCase()}`

  const skills = [
    {
      icon: <FontAwesomeIcon icon={faSymfony} className="text-5xl" />,
      text: "Symfony",
      description: "Framework PHP robuste pour développer des applications web complexes et évolutives.",
    },
    {
      icon: <FontAwesomeIcon icon={faReact} className="text-5xl" />,
      text: "React.js / Next.js",
      description:
        "Bibliothèque JavaScript moderne pour créer des interfaces utilisateur interactives et performantes.",
    },
    {
      icon: <FontAwesomeIcon icon={faJava} className="text-5xl" />,
      text: "Java / Spring",
      description: "Langage orienté objet et framework pour développer des applications d'entreprise robustes.",
    },
    {
      icon: <FontAwesomeIcon icon={faGolang} className="text-5xl" />,
      text: "Go",
      description: "Langage de programmation performant pour développer des services backend scalables.",
    },
    {
      icon: <FontAwesomeIcon icon={faRobot} className="text-5xl" />,
      text: "CI/CD",
      description: "Mise en place de pipelines CI/CD avec GitHub Actions, Docker et Ansible.",
    },
    {
      icon: <FontAwesomeIcon icon={faDocker} className="text-5xl" />,
      text: "Docker",
      description: "Outil de conteneurisation pour automatiser le déploiement d'applications.",
    },
  ]

  return (
    <section className="w-full px-4 sm:px-6 grid place-items-center" role="region" id="compétences" aria-labelledby={headingId}>
      <div className="w-full max-w-6xl">
        <h2
          id={headingId}
          className={`text-3xl md:text-5xl font-bold mb-12 text-[var(--tertiary)] text-center drop-shadow-lg animate-float`}
        >
          {title}
        </h2>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[var(--background)] border-2 border-[var(--primary)] p-8 rounded-2xl glowblue transition-all duration-300 group text-center"
              style={{
                animationDelay: `${index * 0.3}s`,
              }}
            >
              
              <div className="text-[var(--tertiary)] mb-6 transition-all duration-300">
                <LogoElement logo={skill.icon} text={skill.text} />
              </div>
              <p className="text-[var(--white)] leading-relaxed text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="flex flex-col space-y-6 justify-center items-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[var(--background)] border-2 border-[var(--primary)] p-6 rounded-2xl glowblue transition-all duration-300 group w-full max-w-sm text-center"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="text-[var(--tertiary)] mb-4 transition-all duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-[var(--secondary)]">{skill.text}</h3>
                <p className="text-[var(--white)] leading-relaxed text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
