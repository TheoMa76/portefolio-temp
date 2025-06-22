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
    <section className={`w-full px-4 sm:px-6 py-12 ${className}`} role="region" aria-labelledby={headingId}>
      <div className="w-full max-w-4xl mx-auto">
        <h2
          id={headingId}
          className="text-3xl md:text-5xl font-bold mb-16 text-[var(--primary)] text-center drop-shadow-lg"
        >
          {title}
        </h2>
        <div className="relative">
          {/* Central line */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--tertiary)] to-[var(--secondary)] rounded-full"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {items.map((item, index) => (
              <TimelineItem 
                key={`${headingId}-item-${index}`}
                item={item}
                index={index}
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
};

const TimelineItem = ({ item, index }: TimelineItemProps) => (
  <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
    <div className="flex-1 px-8">
      <div
        className={`bg-[var(--background)] p-6 rounded-2xl border-2 border-[var(--primary)] glow hover:scale-105 transition-all duration-300 ${
          index % 2 === 0 ? "mr-4" : "ml-4"
        }`}
      >
        <div className="text-[var(--tertiary)] font-bold mb-2 text-sm uppercase tracking-wide">
          {item.date}
        </div>
        <h3 className="text-xl font-bold mb-3 text-[var(--secondary)]">{item.title}</h3>
        <div className="text-[var(--white)] leading-relaxed">{item.content}</div>
      </div>
    </div>

    <div className="relative z-10">
      <div 
        className="w-6 h-6 bg-[var(--tertiary)] rounded-full border-4 border-[var(--background)] animate-float"
        aria-hidden="true"
      />
    </div>

    <div className="flex-1" />
  </div>
);