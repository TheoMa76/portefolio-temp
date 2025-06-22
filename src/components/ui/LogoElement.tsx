import React from 'react';

type Props = {
  logo: React.ReactNode;
  text: string;
};

const LogoElement = ({ logo, text }: Props) => {
  return (
    <div
      role="img"
      aria-label={`${text} logo`}
      className="flex flex-col items-center text-[var(--primary)]"
    >
      <div
        className="animate-float mb-2 text-[3rem] text-[var(--secondary)]"
        aria-hidden="true"
      >
        {logo}
      </div>
      <p className="text-[var(--white)] text-lg font-semibold">{text}</p>
    </div>
  );
};

export default LogoElement;