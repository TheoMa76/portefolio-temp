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
      className={`w-full max-w-6xl px-4 xl:px-0 mx-auto py-12 grid place-items-center ${className}`} 
      role="region" 
      aria-labelledby={headingId}
    >
      <div className="w-full">
        <h2
          id={headingId}
          className="text-3xl md:text-5xl font-bold mb-12 text-[var(--tertiary)] text-center drop-shadow-lg animate-float"
        >
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isOdd = items.length % 2 !== 0;

            return (
              <div
                key={`${headingId}-item-${index}`}
                className={
                  isLast && isOdd
                    ? "md:max-w-[424px] lg:max-w-full md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0"
                    : ""
                }
              >
                <GridCard
                  title={item.title}
                  content={item.content}
                  icon={item.icon}
                  animationDelay={index * 0.2}
                />
              </div>
            );
          })}
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

const isDarkTheme = typeof document !== "undefined" && document.documentElement.getAttribute("data-theme") === "dark";


const GridCard = ({ title, content, icon, animationDelay = 0 }: GridCardProps) => (
  <div
    className="bg-[var(--background)] min-h-[220px] border-2 border-[var(--primary)] p-6 rounded-2xl glowblue transition-all duration-300 group"
    style={{ animationDelay: `${animationDelay}s` }}
  >
    {icon && <div className={`${isDarkTheme ? 'text-[var(--tertiary)]' : 'text-[var(--white)]'} mb-4`}>{icon}</div>}
    <h3 className="text-xl font-bold mb-3 text-[var(--tertiary)]">{title}</h3>
    <div className="text-[var(--white)] leading-relaxed">{content}</div>
  </div>
);