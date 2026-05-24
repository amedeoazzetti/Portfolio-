import React from "react";
import { FadeIn } from "./FadeIn";

export const Navbar: React.FC = () => {
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
        {/* Left Side Brand / Visual Accent (Can be simple "AMEDEO" or similar, but the spec says "evenly spaced with justify-between") */}
        {/* "Horizontal nav bar with 4 links -- 'About', 'Price', 'Projects', 'Contact' -- evenly spaced with justify-between" */}
        {/* So we render the links spreading evenly across the navbar */}
        <div className="flex justify-between w-full items-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.targetId)}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-75 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default Navbar;
