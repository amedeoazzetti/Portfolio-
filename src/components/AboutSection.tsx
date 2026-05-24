import React from "react";
import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about-section"
      className="relative min-h-screen w-full bg-[var(--color-bg)] flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
      style={{ contentVisibility: "auto" }}
    >
      {/* Absolute Decorative 3D Images in Corners */}

      {/* Top-Left Moon Icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 select-none pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D floating Moon icon decoration"
            referrerPolicy="no-referrer"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(255,255,255,0.05)] animate-bounce duration-[4s]"
            style={{ animationDuration: "5s" }}
          />
        </FadeIn>
      </div>

      {/* Bottom-Left 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 select-none pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D floating glass object decoration"
            referrerPolicy="no-referrer"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain animate-pulse"
            style={{ animationDuration: "6s" }}
          />
        </FadeIn>
      </div>

      {/* Top-Right Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 select-none pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D floating Lego icon decoration"
            referrerPolicy="no-referrer"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain animate-bounce"
            style={{ animationDuration: "4s" }}
          />
        </FadeIn>
      </div>

      {/* Bottom-Right 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 select-none pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D floating elements group decoration"
            referrerPolicy="no-referrer"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain animate-spin"
            style={{ animationDuration: "14s" }}
          />
        </FadeIn>
      </div>

      {/* Main content flow */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl text-center">
        {/* Heading: About me */}
        <FadeIn delay={0} y={40} className="mb-10 sm:mb-14 md:mb-16">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Scroll Reveal Text Block */}
        <div className="mb-16 sm:mb-20 md:mb-24 w-full">
          <AnimatedText
            text="Sono uno studente di informatica con una forte passione per lo sviluppo web e le tecnologie digitali. Mi occupo di programmazione, progettazione di siti web e sperimentazione con strumenti di automazione e intelligenza artificiale. Ho un approccio pratico: imparo velocemente nuove tecnologie e le applico subito in contesti reali, con l'obiettivo di migliorare costantemente. Let's build something incredible together!"
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] mx-auto"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" } as any}
          />
        </div>

        {/* Contact Button */}
        <FadeIn delay={0.4} y={30}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
