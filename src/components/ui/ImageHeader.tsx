"use client"

import ScrollButton from "./ScrollButton"
import Image from "next/image"
import {useIsMobile} from "@/app/hooks/useIsMobile"

type Props = {
  mobileVideoUrl: string
  desktopVideoUrl: string
}

const ImageHeader = ({ mobileVideoUrl, desktopVideoUrl }: Props) => {
  const isMobile = useIsMobile()
  const videoUrl = isMobile ? mobileVideoUrl : desktopVideoUrl

  return (
    <div
      id="accueil"
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
            <div className="order-1 text-center w-full xs:w-10/12 lg:w-7/12">
              <h1 className="flex flex-col gap-1 ">
              <span className="text-3xl xl:text-5xl font-bold text-[var(--tertiary)] drop-shadow-lg">
                Théo Maerten <span className="text-2xl xl:text-4xl">Développeur Full-Stack</span>
              </span>

              <span className="text-base md:text-lg text-[var(--white)] font-medium drop-shadow-lg">
                Spécialisé en <strong>Symfony</strong>, <strong>React.js</strong> & <strong>Java</strong>
              </span>
            </h1>
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

          <div className="flex items-center w-full xl:w-10/12 2xl:w-8/12 mx-auto justify-center p-4">
            <div className="bg-[var(--background)] drop-shadow-lg rounded-2xl p-6 shadow-lg text-[var(--white)] space-y-4 w-full">
              <h2
                id="intro-title"
                className="font-bold text-lg md:text-2xl xl:text-3xl text-[var(--primary)] text-center"
                aria-label="Bienvenue sur mon portfolio"
              >
                Bienvenue sur mon portfolio
              </h2>
                <div className="text-base 2xl:text-lg space-y-4">
                      <p>
                        Passionné et rigoureux, spécialisé en Symfony, PHP, Java, JavaScript, React.js, et Node.js.
                      </p>
                      <p>
                        J&apos;interviens sur toutes les phases de développement de vos projets web. De la réalisation au déploiement. Chaque étape est conçu pour durer.
                      </p>
                </div>

                <p className="font-bold text-[var(--primary)] text-lg md:text-xl xl:text-2xl text-center">
                  Ensemble, donnons vie à vos idées.
                </p>


              {isMobile === null ? null : (
                <div className="text-sm md:text-base xl:text-lg text-center">
                  <ScrollButton
                    className="italic border-transparent border-2 xl:hover:border-[var(--primary)] transition-colors duration-200"
                    targetId="image-header"
                  >
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