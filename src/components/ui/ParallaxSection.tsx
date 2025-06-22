// components/sections/ParallaxSection.tsx
import type React from "react";

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

  return (
    <section
      className={`w-full px-4 sm:px-6 py-20 relative overflow-hidden min-h-screen flex items-center ${className}`}
      role="region"
      aria-labelledby={headingId}
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {backgroundElements.map((element) => (
          <div
            key={element.id}
            className="absolute animate-float opacity-20"
            style={{
                top: element.position.top,
                left: element.position.left,
                right: element.position.right,
                bottom: element.position.bottom,
                animationDelay: `${element.animationDelay}s`,
                animationDuration: `${element.animationDuration}s`,
            }}
          >
            {element.element}
          </div>
        ))}
      </div>

      <div className="w-full max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 id={headingId} className="text-4xl md:text-6xl font-bold mb-4 text-[var(--tertiary)] drop-shadow-lg">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-[var(--secondary)] mb-8">{subtitle}</p>
        </div>

        <div className="bg-[var(--background)]/90 backdrop-blur-sm border-2 border-[var(--primary)] p-8 md:p-12 rounded-3xl glow">
          <div className="text-[var(--white)] leading-relaxed text-lg text-center">{content}</div>
        </div>
      </div>
    </section>
  );
};