import type React from "react";

type GridItem = {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
};

type GridSectionProps = {
  title: string;
  items: GridItem[];
  id?: string;
  className?: string;
};

export const GridSection = ({ title, items, id, className = "" }: GridSectionProps) => {
  const headingId = id || `grid-heading-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <section 
      className={`w-full px-4 sm:px-6 py-12 grid place-items-center ${className}`} 
      role="region" 
      aria-labelledby={headingId}
    >
      <div className="w-full max-w-6xl">
        <h2
          id={headingId}
          className="text-3xl md:text-5xl font-bold mb-12 text-[var(--secondary)] text-center drop-shadow-lg animate-float"
        >
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <GridCard 
              key={`${headingId}-item-${index}`}
              title={item.title}
              content={item.content}
              icon={item.icon}
              animationDelay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type GridCardProps = {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  animationDelay?: number;
};

const GridCard = ({ title, content, icon, animationDelay = 0 }: GridCardProps) => (
  <div
    className="bg-[var(--background)] border-2 border-[var(--primary)] p-6 rounded-2xl glowblue hover:scale-105 transition-all duration-300 group"
    style={{ animationDelay: `${animationDelay}s` }}
  >
    {icon && <div className="text-[var(--tertiary)] mb-4 group-hover:animate-float">{icon}</div>}
    <h3 className="text-xl font-bold mb-3 text-[var(--secondary)]">{title}</h3>
    <div className="text-[var(--white)] leading-relaxed">{content}</div>
  </div>
);