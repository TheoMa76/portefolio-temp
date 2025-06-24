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
    const mainContent = document.getElementById('main-content');
    const targetElement = document.getElementById(targetId);
    if (targetElement && mainContent) {
      window.scrollTo({
        top: mainContent.offsetTop,
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
            const mainContent = document.getElementById('main-content');
            if (mainContent && rect.bottom > currentScroll && rect.bottom > 0 && currentScroll > window.innerHeight / 5) {
            isScrolling.current = true;
            window.scrollTo({
              top: mainContent.offsetTop,
              behavior: 'smooth'
            });
            setTimeout(() => { isScrolling.current = false }, 1000);
            }
        } else {
          let isVisible = false
          if (rect.bottom < currentScroll && rect.bottom > 0) {
            isVisible = true
          }
            if (Math.abs(rect.bottom) < (currentScroll / 6) && isVisible) {
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
      className={`rounded-2xl bg-[var(--primary)] drop-shadow-md px-5 cursor-pointer my-2 py-2
        transition transform duration-200 ease-in-out
        xl:hover:bg-[var(--white)] xl:hover:shadow-lg xl:hover:text-[var(--background)]
        active:scale-95 active:translate-y-0.5 xl:hover:border-[var(--secondary)] xl:hover:border-2
        ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default ScrollButton