import React from "react";
import { motion } from "motion/react";

interface LiveProjectProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectProps> = ({
  onClick,
  className = "",
  label = "Live Project",
}) => {
  return (
    <motion.button
      id={`live-project-${label.toLowerCase().replace(/\s+/g, "-")}`}
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest select-none cursor-pointer transition-colors duration-300 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
};
