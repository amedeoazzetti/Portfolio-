import React from "react";
import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";

export const ProjectsSection: React.FC = () => {
  const titleText = "PROGETTI";
  const wipTitleText = "PROGETTI IN ARRIVO";
  const wipSubtitleText =
    "Sto preparando una selezione dei miei lavori migliori. I progetti saranno pubblicati a breve.";

  return (
    <section
      id="projects-section"
      className="relative bg-[var(--color-bg)] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-24 pb-32 -mt-10 sm:-mt-12 md:-mt-14 z-15 w-full"
      style={{ contentVisibility: "auto" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="hero-heading font-black uppercase text-center tracking-tight leading-none"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            {titleText}
          </h2>
        </FadeIn>

        {/* Work in Progress Card */}
        <FadeIn delay={0.2} y={30} className="w-full max-w-3xl">
          <div 
            className="border-2 border-[#D7E2EA]/10 rounded-[35px] sm:rounded-[45px] md:rounded-[55px] p-10 sm:p-14 md:p-20 flex flex-col items-center justify-center text-center relative overflow-hidden"
            style={{ backgroundColor: "var(--color-bg-card)" }}
          >
            {/* Subtle gradient accent */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-wip-accent)" }} />

            {/* Animated pulsing dot */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-4 h-4 rounded-full mb-8"
              style={{ background: "var(--gradient-wip-dot)" }}
            />

            <h3
              className="font-black uppercase tracking-tight text-[#D7E2EA] leading-none mb-4"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
            >
              {wipTitleText}
            </h3>

            <p className="text-[#D7E2EA]/50 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-md leading-relaxed">
              {wipSubtitleText}
            </p>

            {/* Decorative animated border glow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-[0.05] pointer-events-none"
              style={{ background: "var(--gradient-wip-glow)" }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProjectsSection;
