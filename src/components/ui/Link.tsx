import React from 'react'

type LinkProps = {
    href: string
    ariaLabel?: string
    target?: '_blank' | '_self'
    rel?: string
    children: React.ReactNode
    //FontAwesome icon, optional
    icone?: React.ReactNode
}

const Link = (props: LinkProps) => {
  return (
    
    <a
      href={props.href}
      aria-label={props.ariaLabel}
      target={props.target}
      rel={props.rel}
    >
      {props.icone && <span className="icon">{props.icone}</span>}
      {props.children}
    </a>
  )
}

export default Link
export type { LinkProps }