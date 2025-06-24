"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark")
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (resolvedTheme) {
      setCurrentTheme(resolvedTheme as "light" | "dark")
    }
    setMounted(true)
  }, [resolvedTheme])

  const toggleTheme = () => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    setCurrentTheme(nextTheme)
  }

  if (!mounted) {
    return (
      <div className="sticky top-4 right-4 z-50 w-12 h-12 rounded-full bg-[var(--primary)] animate-float" />
    )
  }

  return (
    <div className="fixed top-4 z-50 flex justify-end px-4">
      <button
        onClick={toggleTheme}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group glowblue cursor-pointer rounded-full animate-float bg-[var(--background)] xl:hover:bg-[var(--white)] p-3 transition-colors duration-300 ease-in-out"
        aria-label={`Basculer vers le thème ${currentTheme === "dark" ? "clair" : "sombre"}`}
      >
        <FontAwesomeIcon
          icon={
            isHovered
              ? currentTheme === "dark"
                ? faSun
                : faMoon
              : currentTheme === "dark"
              ? faMoon
              : faSun
          }
          className="w-6 h-6 text-[var(--white)] transition-all duration-300 transform group-xl:hover:rotate-180 group-xl:hover:text-[var(--background)]"
        />
      </button>
    </div>
  )
}