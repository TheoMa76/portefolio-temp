import React from 'react'
import ScrollButton from './ScrollButton'
import Image from 'next/image'

type Props = {
  videoUrl: string
}

const ImageHeader = ({ videoUrl }: Props) => {
  return (
    <header 
      id="image-header" 
      className="relative w-full min-h-screen overflow-hidden" 
      role="banner"
      aria-label="En-tête du portfolio de Théo Maerten"
    >
      <video
        src={videoUrl}
        autoPlay muted loop playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        aria-hidden="true"
      />
      <div className="absolute top-1/4 left-3/12 transform ml-0.5 -translate-x-2/5 -translate-y-1/2 text-center z-20">
        <h1 className="text-3xl md:text-6xl font-bold text-[var(--primary)] mb-4">
          Développeur Full‑Stack
          <br />
          <span className="text-lg md:text-2xl text-[var(--secondary)] mb-8">
            Specialisé en <strong>Symfony</strong>, <strong>React.js</strong> &amp; <strong>Java</strong>
          </span>
        </h1>
      </div>
      <div 
        className="absolute ml-0.5 top-1/2 left-3/12 transform -translate-x-1/3 -translate-y-1/2 w-[300px] h-[300px] rounded-4xl overflow-hidden shadow-lg"
        aria-hidden="false"
      >
        <Image
          src="/images/theomaerten.webp"
          alt="Photo portrait de Théo Maerten"
          fill
          className="object-cover"
        />
      </div>
      <section 
        className="absolute top-1/4 translate-y-1/12 right-1/12 transform -translate-x-1/12 text-justify z-20 w-1/3"
        aria-labelledby="intro-title"
      >
      <h3 id="intro-title" className="font-bold text-lg md:text-3xl text-[var(--primary)] my-5 text-center" aria-label='Bienvenue sur mon portfolio'>Bienvenue sur mon portfolio</h3>
        <p className="w-full text-lg md:text-xl text-[var(--secondary)] mb-4">
          Passionné et rigoureux, spécialisé en Symfony, PHP, Java, JavaScript, React.js, et Node.js. J’interviens sur toutes les phases de développement de vos projets web : conception UI/UX, développement back-end/API REST, intégration frontend, tests unitaires et CI/CD, jusqu’au déploiement (Docker, Ansible, GitHub Actions).  
          Fort d’une expertise dans mes compétences et en bases de données SQL/NoSQL, performance, scalabilité, et sécurité, je crée des applications robustes, responsive et centrées utilisateur.  
        </p>
        <p className='font-bold text-[var(--primary)] text-lg md:text-2xl text-center my-5'>Ensemble, donnons vie à vos idées avec une stack moderne et agile.</p>

        <p className="text-sm md:text-lg text-[var(--secondary)] text-center">
          <ScrollButton className="italic" targetId="image-header">Découvrez mon parcours et mes réalisations</ScrollButton>
        </p>
      </section>
    </header>
  )
}

export default ImageHeader