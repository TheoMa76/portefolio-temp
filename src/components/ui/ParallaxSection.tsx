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
  const headingId = id || `${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <section
      className={`w-full px-4 relative overflow-visible min-h-screen flex items-center ${className}`}
      role="region"
      aria-labelledby={headingId}
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {backgroundElements.map((element) => {

          return (
            <div
              key={element.id}
              className="absolute animate-float opacity-80 transition-transform duration-300"
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
          );
        })}
      </div>

      <div className="w-full mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-8">
          <h2 id={headingId} className="text-3xl md:text-5xl font-bold mb-12 text-[var(--tertiary)] text-center drop-shadow-lg animate-float">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-[var(--white)] bg-[var(--secondary)] rounded-2xl py-5 font-bold drop-shadow-lg mb-10">
            {subtitle}
          </p>
        </div>

        <div className="bg-[var(--background)]/90 backdrop-blur-sm border-2 border-[var(--primary)] p-8 rounded-2xl glow">
          <div className="text-[var(--white)] leading-relaxed text-lg text-center">{content}</div>
        </div>
      </div>
    </section>
  );
};