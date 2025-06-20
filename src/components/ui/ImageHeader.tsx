"use client"

import { useEffect, useState } from "react"
import ScrollButton from "./ScrollButton"
import Image from "next/image"
import useIsMobile from "@/app/hooks/useIsMobile"

type Props = {
  mobileVideoUrl: string
  desktopVideoUrl: string
}

const ImageHeader = ({ mobileVideoUrl, desktopVideoUrl }: Props) => {
  const [videoUrl, setVideoUrl] = useState(desktopVideoUrl)
  const isMobile = useIsMobile()

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)")
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setVideoUrl(e.matches ? mobileVideoUrl : desktopVideoUrl)
    }

    setVideoUrl(mediaQuery.matches ? mobileVideoUrl : desktopVideoUrl)
    mediaQuery.addEventListener("change", handleMediaChange)

    return () => mediaQuery.removeEventListener("change", handleMediaChange)
  }, [desktopVideoUrl, mobileVideoUrl])

  return (
    <div
      id="image-header"
      className="relative w-full min-h-screen overflow-hidden border-b-2 border-[var(--secondary)] glowblue mb-20"
      role="banner"
      aria-label="En-tête du portfolio de Théo Maerten"
      style={{
          boxShadow: `0 20px 25px -5px var(--secondary), 0 10px 10px -5px var(--white)`,
        }}
    >
      <video
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto w-full min-h-screen px-4 md:px-0 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] min-h-screen items-center">
          <div className="flex flex-col items-center w-full justify-center space-y-6 p-4">
            <div className="order-1 text-center">
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[var(--tertiary)] mb-2 drop-shadow-lg">
                Développeur Full‑Stack
              </h1>
              <p className="text-base md:text-lg text-[var(--white)] drop-shadow-lg">
                Spécialisé en <strong>Symfony</strong>, <strong>React.js</strong> &amp; <strong>Java</strong>
              </p>
            </div>

            <div className="order-2">
              <div className="bg-[var(--secondary)] rounded-2xl p-3 md:p-4 xl:p-6 shadow-lg">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 overflow-hidden rounded-2xl mx-auto">
                  <Image
                    src="/images/theomaerten.webp"
                    alt="Photo portrait de Théo Maerten"
                    fill
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 224px, 256px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center h-3/4 my-auto">
            <div className="w-px h-full bg-[var(--background)]"></div>
          </div>

          <div className="flex items-center w-8/12 mx-auto justify-center p-4">
            <div className="bg-[var(--background)] drop-shadow-lg rounded-2xl p-6 shadow-lg text-[var(--white)] text-justify space-y-4 w-full">
              <h2
                id="intro-title"
                className="font-bold text-lg md:text-2xl xl:text-3xl text-[var(--primary)] text-center"
                aria-label="Bienvenue sur mon portfolio"
              >
                Bienvenue sur mon portfolio
              </h2>

              {isMobile === null ? null : (
                <p className="text-base md:text-lg">
                  {isMobile ? (
                    <>
                      Passionné et rigoureux, spécialisé en Symfony, PHP, Java, JavaScript, React.js, et Node.js.
                      J&apos;interviens sur toutes les phases de développement de vos projets web.
                    </>
                  ) : (
                    <>
                      Passionné et rigoureux, spécialisé en Symfony, PHP, Java, JavaScript, React.js, et Node.js.
                      J&apos;interviens sur toutes les phases de développement de vos projets web : conception UI/UX,
                      développement back-end/API REST, intégration frontend, tests unitaires et CI/CD, jusqu&apos;au
                      déploiement (Docker, Ansible, GitHub Actions). Fort d&apos;une expertise dans mes compétences et en
                      bases de données SQL/NoSQL, performance, scalabilité, et sécurité, je crée des applications
                      robustes, responsive et centrées utilisateur.
                    </>
                  )}
                </p>
              )}

              {isMobile === null
                ? null
                : !isMobile && (
                    <p className="font-bold text-[var(--primary)] text-lg md:text-xl xl:text-2xl text-center">
                      Ensemble, donnons vie à vos idées avec une stack moderne et agile.
                    </p>
                  )}

              {isMobile === null ? null : (
                <div className="text-sm md:text-base xl:text-lg text-center">
                  <ScrollButton className="italic" targetId="image-header">
                    {isMobile ? "Découvrez mon parcours" : "Découvrez mon parcours et mes réalisations"}
                  </ScrollButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageHeader