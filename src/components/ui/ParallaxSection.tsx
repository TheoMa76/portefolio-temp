"use client";

import React, { useEffect, useState, useRef } from "react";

type BackgroundElement = {
  id: string;
  element: React.ReactNode;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  animationDelay: number;
  animationDuration: number;
};

type ParallaxSectionProps = {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  backgroundElements?: BackgroundElement[];
  id?: string;
  className?: string;
};

export const ParallaxSection = ({
  title,
  subtitle,
  content,
  backgroundElements = [],
  id,
  className = "",
}: ParallaxSectionProps) => {
  const headingId = id || `parallax-heading-${title.replace(/\s+/g, "-").toLowerCase()}`;
  const [scrollY, setScrollY] = useState(0);
  const elementRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = elementRefs.current[id];
    if (el) {
      el.animate(
        [
          { transform: "translate(0, 0) rotate(0deg)" },
          { transform: `translate(${Math.random() * 500 - 250}px, ${Math.random() * 500 - 250}px) rotate(${Math.random() * 360}deg)` },
          { transform: "translate(0, 0) rotate(0deg)" }
        ],
        {
          duration: 1000,
          easing: "ease-in-out"
        }
      );
    }
  };

  return (
    <section
      className={`w-full px-4 sm:px-6 relative overflow-visible min-h-screen flex items-center ${className}`}
      role="region"
      aria-labelledby={headingId}
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {backgroundElements.map((element) => {
          const parallaxOffset = scrollY * 0.1;

          return (
            <div
              key={element.id}
              ref={(ref) => { elementRefs.current[element.id] = ref; }}
              onClick={() => handleClick(element.id)}
              className="absolute animate-float opacity-80 transition-transform duration-300 cursor-pointer"
              style={{
                top: element.position.top,
                left: element.position.left,
                right: element.position.right,
                bottom: element.position.bottom,
                animationDelay: `${element.animationDelay}s`,
                animationDuration: `${element.animationDuration}s`,
                transform: `translateY(${parallaxOffset}px)`,
              }}
            >
              {element.element}
            </div>
          );
        })}
      </div>

      <div className="w-full max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 id={headingId} className="text-3xl md:text-5xl font-bold mb-12 text-[var(--tertiary)] text-center drop-shadow-lg animate-float">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-[var(--white)] bg-[var(--secondary)] rounded-2xl py-5 font-bold drop-shadow-lg mb-10">
            {subtitle}
          </p>
        </div>

        <div className="bg-[var(--background)]/90 backdrop-blur-sm border-2 border-[var(--primary)] p-8 md:p-12 rounded-2xl glow">
          <div className="text-[var(--white)] leading-relaxed text-lg text-center">{content}</div>
        </div>
      </div>
    </section>
  );
};