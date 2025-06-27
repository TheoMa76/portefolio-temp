import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import type React from "react";

type ZigzagItem = {
  title: string;
  content: React.ReactNode;
  image?: string;
  imageAlt?: string;
  url?: string;
  urlText?: string;
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
    <section className={`w-full max-w-6xl px-4 xl:px-0 mx-auto ${className}`} role="region" aria-labelledby={headingId} id="passions">
      <div className="w-full mx-auto">
        <h2
          id={headingId}
          className="text-3xl md:text-5xl font-bold mb-12 text-[var(--tertiary)] text-center drop-shadow-lg animate-float"
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

const ZigzagItem = ({ item, index }: ZigzagItemProps) => {
  const content = (
    <>
      <div className="flex-1">
        <div
          className={`bg-[var(--background)] border-l-4 border-[var(--tertiary)] p-8 rounded-r-3xl glow transition-all duration-500${
            item.url ? " xl:hover:translate-x-2" : ""
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--secondary)]">{item.title}</h3>
          <div className="text-[var(--white)] leading-relaxed text-lg">{item.content}</div>
        </div>
      </div>
      {item.image && (
        <div className="flex-1 relative min-h-[200px] md:min-h-[300px]">
          <ZigzagImage 
            src={item.image} 
            alt={item.imageAlt || item.title}
            url={item.url}
          />
        </div>
      )}
    </>
  );

  return (
    <div
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-stretch gap-8 lg:gap-12`}
    >      
      {content}
    </div>
  );
};

type ZigzagImageProps = {
  src: string;
  alt: string;
  url?: string;
};

const ZigzagImage = ({ src, alt, url }: ZigzagImageProps) => (
  <div className="w-full lg:h-full h-64 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl glowblue flex items-center justify-center relative overflow-hidden">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover rounded-2xl"
      loading="lazy"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    {url && (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${alt} — cliquez pour ouvrir le lien`}
        title={`${alt} — cliquez pour ouvrir le lien`}
        className="absolute hover:scale-120 cursor-pointer animate-bounce top-4 right-4 bg-[var(--tertiary)] text-[var(--background)] p-2 rounded-full"
      >
        <FontAwesomeIcon
          icon={faExternalLink}
          className="w-4 h-4"
          aria-hidden="true"
        />
      </a>
    )}
  </div>
);