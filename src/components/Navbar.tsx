import React from "react";
import { FadeIn } from "./FadeIn";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  theme: "batman" | "joker";
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const navLinks = [
    { name: "About", targetId: "about-section" },
    { name: "Projects", targetId: "projects-section" },
    { name: "Contact", targetId: "contact-section" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <FadeIn delay={0} y={-20} as="nav" className="w-full z-50">
      <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
        <div className="flex justify-between w-full items-center">
          {navLinks.map((link, i) => (
            <React.Fragment key={link.name}>
              <button
                onClick={() => handleScroll(link.targetId)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-75 cursor-pointer"
              >
                {link.name}
              </button>
              {/* Place the toggle switch after the first link (About) */}
              {i === 0 && (
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default Navbar;
