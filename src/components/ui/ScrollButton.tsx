"use client"
import React, { useEffect, useRef } from 'react'

interface ScrollButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  targetId: string
}

const ScrollButton = ({ children, className, targetId }: ScrollButtonProps) => {
  const prevScroll = useRef(0)
  const isScrolling = useRef(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      window.scrollTo({
        top: rect.bottom + window.innerHeight / 10,
        behavior: 'smooth'
      });
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      if (isScrolling.current) return

      const currentScroll = window.scrollY
      const targetElement = document.getElementById(targetId)
      
      if (!targetElement) return

      const rect = targetElement.getBoundingClientRect()
      const isScrollingDown = currentScroll > prevScroll.current

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }

      scrollTimeout.current = setTimeout(() => {
        if (isScrollingDown) {
          if (rect.bottom > currentScroll) {
            isScrolling.current = true
            window.scrollTo({
              top: rect.bottom + window.innerHeight/10 ,
              behavior: 'smooth'
            })
            setTimeout(() => { isScrolling.current = false }, 1000)
          }
        } else {
            if (Math.abs(rect.bottom) > (currentScroll / 3)) {
            isScrolling.current = true
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            })
            setTimeout(() => { isScrolling.current = false }, 1000)
            }
        }
      }, 100)

      prevScroll.current = currentScroll
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [targetId])

  return (
    <button
      className={`rounded-lg bg-[var(--primary)] drop-shadow-md px-5 cursor-pointer
        transition transform duration-200 ease-in-out
        hover:bg-[var(--primary-dark)] hover:translate-y-1
        active:scale-95 active:translate-y-0.5
        ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default ScrollButton