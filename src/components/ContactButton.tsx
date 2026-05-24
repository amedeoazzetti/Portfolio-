import React from "react";
import { motion } from "motion/react";

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  className = "",
  label = "Contact Me",
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default: smooth scroll to a Contact section, or open mailto if requested
      const contactSec = document.getElementById("contact-section");
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "mailto:azzetti.amedeo@gmail.com?subject=Inquiry%20from%203D%20Portfolio";
      }
    }
  };

  return (
    <motion.button
      id="contact-me-btn"
      onClick={handleClick}
      className={`relative rounded-full font-medium uppercase tracking-widest text-[#FFFFFF] select-none cursor-pointer overflow-hidden transition-all duration-300 ${className}`}
      style={{
        background: "var(--gradient-btn)",
        boxShadow: "0px 4px 4px var(--color-btn-glow), inset 4px 4px 12px var(--color-btn-inset)",
        outline: "2px solid var(--color-btn-outline)",
        outlineOffset: "-3px",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 6px 12px var(--color-btn-glow), inset 4px 4px 12px var(--color-btn-inset)",
        filter: "brightness(1.1)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base block">
        {label}
      </span>
    </motion.button>
  );
};
