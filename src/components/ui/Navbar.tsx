"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export interface NavbarProps {
  links: {
    name: string;
    href: string;
    icon: React.ReactNode;
  }[];
}

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ links }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <>
        <button
          onClick={toggleMenu}
          className={`fixed left-5 bottom-5 z-50 flex items-center justify-center w-12 h-12 bg-[var(--background)]/50 text-[var(--white)] rounded-2xl shadow-lg backdrop-blur-xs transition-all duration-300 ${
            isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
          aria-label="Toggle navigation menu"
          style={{ transformOrigin: "center" }}
        >
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>

        {/* Menu principal */}
        <nav
          ref={ref}
          className={`fixed bottom-5 left-5 right-5 z-40 transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <div className="relative w-full">
            <ul className="flex justify-between items-center bg-[var(--background)]/50 bg-opacity-50 text-[var(--white)] rounded-2xl py-3 shadow-lg backdrop-blur-xs max-w-xl mx-auto">
              {links.map((link) => (
                <li key={link.href} className="flex-1 text-center">
                  <a
                    href={link.href}
                    aria-label={link.name}
                    className="block p-2 hover:bg-[var(--primary)] rounded-2xl transition-transform"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
              <li className="absolute -top-12 right-0">
                <button
                  onClick={toggleMenu}
                  className="flex items-center justify-center w-10 h-10 bg-[var(--background)]/50 text-[var(--white)] rounded-full shadow-lg backdrop-blur-xs hover:scale-110 transition-transform"
                  aria-label="Close menu"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
);

Navbar.displayName = "Navbar";

export { Navbar };