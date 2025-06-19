import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
}

const Textblock = ({ title, children }: Props) => {
  return (
    <section
        className="p-4 w-2/3 rounded-[2rem] mx-auto my-25 bg-[var(--background)] shadow-2xl text-[var(--secondary)] text-justify"
        role="region"
        style={{
            boxShadow: `0 20px 25px -5px var(--primary), 0 10px 10px -5px var(--secondary)`,
        }}
        aria-labelledby={`heading-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <h2
        id={`heading-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="text-xl font-bold mb-2 text-[var(--secondary)] text-center md:text-2xl"
      >
        {title}
      </h2>
      <p className="text-base leading-relaxed text-[var(--secondary)]" aria-label={`Contenu du bloc ${title}`}>
        {children}
      </p>
    </section>
  )
}

export default Textblock