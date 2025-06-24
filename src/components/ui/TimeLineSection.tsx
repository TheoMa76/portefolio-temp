import type React from "react";

type TimelineItem = {
  date: string;
  title: string;
  content: React.ReactNode;
};

type TimelineSectionProps = {
  title: string;
  items: TimelineItem[];
  id?: string;
  className?: string;
};

export const TimelineSection = ({ title, items, id, className = "" }: TimelineSectionProps) => {
  const headingId = id || `timeline-heading-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <section className={`w-full px-4 sm:px-6 ${className}`} role="region" aria-labelledby={headingId}>
      <div className="w-full mx-auto">
        <h2
          id={headingId}
          className="text-3xl md:text-5xl font-bold mb-12 text-[var(--tertiary)] text-center drop-shadow-lg animate-float"
        >
          {title}
        </h2>
        <div className="relative">
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--tertiary)] to-[var(--secondary)] rounded-full"
            aria-hidden="true"
          />

          <div className="space-y-12 w-full">
            {items.map((item, index) => (
              <TimelineItem 
                key={`${headingId}-item-${index}`}
                item={item}
                index={index}
                isLast={index === items.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type TimelineItemProps = {
  item: TimelineItem;
  index: number;
  isLast: boolean;
};

const TimelineItem = ({ item, index, isLast }: TimelineItemProps) => (
  <div className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
    <div className="flex-1 w-full px-4 lg:px-8">
      <div
        className={`bg-[var(--background)] p-6 md:p-8 rounded-2xl border-2 border-[var(--primary)] glow transition-all duration-300 ${
          index % 2 === 0 ? "lg:mr-4" : "lg:ml-4"
        }`}
      >
        <div className="text-[var(--tertiary)] font-semibold mb-2 text-sm md:text-base uppercase tracking-wider">
          {item.date}
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-[var(--secondary)]">
          {item.title}
        </h3>
        <div className="text-[var(--white)] text-base md:text-lg leading-relaxed md:leading-loose prose prose-invert">
          {typeof item.content === "string" ? (
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            ) : (
              item.content
            )}
        </div>
      </div>
    </div>

     <div className={`relative z-10 my-8 lg:my-0 ${isLast ? "hidden lg:block" : ""}`}>
      <div 
        className={`w-6 h-6 bg-[var(--tertiary)] rounded-full border-4 border-[var(--background)] animate-float ${
          isLast ? "lg:block hidden" : ""
        }`}
        aria-hidden="true"
      />
    </div>

    <div className={`flex-1 hidden lg:block `} />
  </div>
);