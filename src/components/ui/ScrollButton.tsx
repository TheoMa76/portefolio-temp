'use client'
import React, { useEffect } from 'react'

const ScrollButton = () => {
  const scrollToContent = () => {
    const header = document.getElementById('div-content')
    if (header) {
      const offset = header.offsetTop + header.offsetHeight
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      scrollToContent()
      window.removeEventListener('scroll', handleScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={scrollToContent}
      className="z-50 bg-white/70 text-black px-4 py-2 rounded-full shadow-md hover:bg-white transition"
    >
      ↓ Scroll
    </button>
  )
}

export default ScrollButton