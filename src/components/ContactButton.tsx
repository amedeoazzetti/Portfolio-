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
        background: "linear-gradient(123deg, #090A0D 7%, #1F232B 37%, #FFB800 72%, #A87600 100%)",
        boxShadow: "0px 4px 4px rgba(255, 184, 0, 0.25), inset 4px 4px 12px #1F232B",
        outline: "2px solid #FFB800",
        outlineOffset: "-3px",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 6px 12px rgba(255, 184, 0, 0.4), inset 4px 4px 12px #1F232B",
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
