import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
}

const Textblock = ({ title, children }: Props) => {
  const headingId = `heading-${title.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <section
      className="w-full px-4 sm:px-6 py-6 grid place-items-center"
      role="region"
      aria-labelledby={headingId}
    >
      <div
        className="w-full border-t-2 border-[var(--tertiary)] sm:w-[90%] md:w-4/5 lg:w-2/3 bg-[var(--background)] text-[var(--white)] p-6 rounded-3xl shadow-2xl glow"
        style={{
          boxShadow: `0 20px 25px -5px var(--tertiary), 0 10px 10px -5px var(--white)`,
        }}
      >
        <h2
          id={headingId}
          className="text-xl md:text-2xl font-bold mb-4 text-[var(--tertiary)] text-center"
        >
          {title}
        </h2>
        <div
          className="text-base leading-relaxed text-justify text-[var(--white)]"
          aria-label={`Contenu du bloc ${title}`}
        >
          {children}
        </div>
      </div>
    </section>
  )
}

export default Textblock