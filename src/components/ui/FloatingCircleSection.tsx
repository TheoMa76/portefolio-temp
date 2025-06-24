import type React from "react";

type FloatingItem = {
  content: React.ReactNode;
  position: string;
};

type FloatingCircleSectionProps = {
  title: string;
  centerContent: React.ReactNode;
  floatingItems: FloatingItem[];
  id?: string;
  className?: string;
};

export const FloatingCircleSection = ({
  title,
  centerContent,
  floatingItems,
  id,
  className = "",
}: FloatingCircleSectionProps) => {
  const headingId = id || `floating-heading-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <section
      className={`w-full px-4 sm:px-6 py-16 min-h-screen flex flex-col justify-center ${className}`}
      role="region"
      aria-labelledby={headingId}
    >
      <h2
        id={headingId}
        className="text-3xl md:text-5xl font-bold mb-16 text-[var(--secondary)] text-center drop-shadow-lg"
      >
        {title}
      </h2>

      <div className="relative w-full max-w-4xl mx-auto h-96 md:h-[500px]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div 
            className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[var(--primary)] to-[var(--tertiary)] rounded-full glow flex items-center justify-center animate-float"
            aria-hidden="true"
          >
            <div className="text-center text-[var(--white)] p-6">{centerContent}</div>
          </div>
        </div>

        {floatingItems.map((item, index) => (
          <FloatItem
            key={`${headingId}-item-${index}`}
            content={item.content}
            position={item.position}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

type FloatingItemProps = {
  content: React.ReactNode;
  position: string;
  index: number;
};

const FloatItem = ({ content, position, index }: FloatingItemProps) => (
  <div
    className={`absolute ${position} animate-float`}
    style={{
      animationDelay: `${index * 0.5}s`,
      animationDuration: `${3 + index * 0.5}s`,
    }}
  >
    <div className="w-24 h-24 md:w-32 md:h-32 bg-[var(--background)] border-2 border-[var(--secondary)] rounded-full glowblue flex items-center justify-center xl:hover:scale-110 transition-all duration-300">
      <div className="text-[var(--white)] text-center p-2 text-sm">{content}</div>
    </div>
  </div>
);