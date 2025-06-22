import type React from "react";

type ZigzagItem = {
  title: string;
  content: React.ReactNode;
  image?: string;
  imageAlt?: string;
};

type ZigzagSectionProps = {
  title: string;
  items: ZigzagItem[];
  id?: string;
  className?: string;
};

export const ZigzagSection = ({ title, items, id, className = "" }: ZigzagSectionProps) => {
  const headingId = id || `zigzag-heading-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <section className={`w-full px-4 sm:px-6 py-12 ${className}`} role="region" aria-labelledby={headingId}>
      <div className="w-full max-w-6xl mx-auto">
        <h2
          id={headingId}
          className="text-3xl md:text-5xl font-bold mb-16 text-[var(--tertiary)] text-center drop-shadow-lg"
        >
          {title}
        </h2>
        <div className="space-y-16">
          {items.map((item, index) => (
            <ZigzagItem 
              key={`${headingId}-item-${index}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type ZigzagItemProps = {
  item: ZigzagItem;
  index: number;
};

const ZigzagItem = ({ item, index }: ZigzagItemProps) => (
  <div
    className={`flex flex-col ${
      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
    } items-center gap-8 lg:gap-12`}
  >
    <div className="flex-1">
      <div className="bg-[var(--background)] border-l-4 border-[var(--tertiary)] p-8 rounded-r-3xl glow hover:translate-x-2 transition-all duration-500">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--secondary)]">{item.title}</h3>
        <div className="text-[var(--white)] leading-relaxed text-lg">{item.content}</div>
      </div>
    </div>
    <div className="flex-1">
      <ZigzagImage 
        src={item.image} 
        alt={item.imageAlt || item.title} 
      />
    </div>
  </div>
);

type ZigzagImageProps = {
  src?: string;
  alt: string;
};

const ZigzagImage = ({ src, alt }: ZigzagImageProps) => (
  <div className="w-full h-64 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-3xl glowblue animate-float flex items-center justify-center">
    {src ? (
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-3xl"
        loading="lazy"
      />
    ) : (
      <div className="text-6xl text-[var(--white)]" aria-hidden="true">🎨</div>
    )}
  </div>
);