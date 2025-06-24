import React from 'react'

type LinkProps = {
    href: string
    ariaLabel?: string
    target?: '_blank' | '_self'
    rel?: string
    children: React.ReactNode
    icone?: React.ReactNode
}

const Link = (props: LinkProps) => {
  return (
    
    <a
      href={props.href}
      aria-label={props.ariaLabel}
      target={props.target}
      rel={props.rel}
      className='text-[var(--white)] hover:text-[var(--background)] transition-colors duration-300 flex items-center gap-2 px-4 py-2 rounded-2xl bg-[var(--background)] hover:bg-[var(--secondary)] shadow-lg hover:shadow-xl'
    >
      {props.icone && <span className="icon">{props.icone}</span>}
      {props.children}
    </a>
  )
}

export default Link
export type { LinkProps }