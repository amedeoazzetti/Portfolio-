import React from "react";
import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";

// Import Batman 3D Assets
import batTopLeft from "../image/batman_top_left.png";
import batTopRight from "../image/batman_top_right.png";
import batBottomLeft from "../image/batman_bottom_left.png";
import batBottomRight from "../image/batman_bottom_right.png";

// Import Joker 3D Assets
import jokerTopLeft from "../image/joker_top_left.png";
import jokerTopRight from "../image/joker_top_right.png";
import jokerBottomLeft from "../image/joker_bottom_left.png";
import jokerBottomRight from "../image/joker_bottom_right.png";

interface AboutSectionProps {
  theme?: "batman" | "joker";
}

export const AboutSection: React.FC<AboutSectionProps> = ({ theme = "batman" }) => {
  const isJoker = theme === "joker";

  // Select assets based on active theme
  const images = {
    topLeft: isJoker ? jokerTopLeft : batTopLeft,
    topRight: isJoker ? jokerTopRight : batTopRight,
    bottomLeft: isJoker ? jokerBottomLeft : batBottomLeft,
    bottomRight: isJoker ? jokerBottomRight : batBottomRight,
  };

  const alts = {
    topLeft: isJoker ? "3D Joker playing card decoration" : "3D Bat-Signal projector decoration",
    topRight: isJoker ? "3D Joker laughing gas spray can" : "3D Batarang weapon decoration",
    bottomLeft: isJoker ? "3D crazy Joker smile decoration" : "3D Batman cowl mask decoration",
    bottomRight: isJoker ? "3D sinister Jack-in-the-box decoration" : "3D Batman grapnel gun decoration",
  };

  return (
    <section
      id="about-section"
      className="relative min-h-screen w-full bg-[var(--color-bg)] flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden transition-colors duration-500"
      style={{ contentVisibility: "auto" }}
    >
      {/* Absolute Decorative Dynamic 3D Images in Corners */}

      {/* Top-Left Dynamic 3D Asset */}
      <div className="absolute top-[6%] left-[1%] sm:left-[2%] md:left-[3%] z-0 select-none pointer-events-none w-[130px] sm:w-[170px] md:w-[220px]">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            key={`${theme}-tl`}
            src={images.topLeft}
            alt={alts.topLeft}
            referrerPolicy="no-referrer"
            className="w-full h-auto object-contain mix-blend-screen filter drop-shadow-[0_10px_30px_rgba(255,255,255,0.02)] animate-bounce"
            style={{ 
              animationDuration: isJoker ? "5.5s" : "4.5s",
              transition: "transform 0.5s ease" 
            }}
          />
        </FadeIn>
      </div>

      {/* Bottom-Left Dynamic 3D Asset */}
      <div className="absolute bottom-[6%] left-[2%] sm:left-[4%] md:left-[6%] z-0 select-none pointer-events-none w-[110px] sm:w-[150px] md:w-[200px]">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            key={`${theme}-bl`}
            src={images.bottomLeft}
            alt={alts.bottomLeft}
            referrerPolicy="no-referrer"
            className="w-full h-auto object-contain mix-blend-screen filter drop-shadow-[0_10px_30px_rgba(255,255,255,0.02)] animate-pulse"
            style={{ 
              animationDuration: isJoker ? "4s" : "6s",
              transition: "transform 0.5s ease"
            }}
          />
        </FadeIn>
      </div>

      {/* Top-Right Dynamic 3D Asset */}
      <div className="absolute top-[6%] right-[1%] sm:right-[2%] md:right-[3%] z-0 select-none pointer-events-none w-[130px] sm:w-[170px] md:w-[220px]">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            key={`${theme}-tr`}
            src={images.topRight}
            alt={alts.topRight}
            referrerPolicy="no-referrer"
            className="w-full h-auto object-contain mix-blend-screen filter drop-shadow-[0_10px_30px_rgba(255,255,255,0.02)] animate-bounce"
            style={{ 
              animationDuration: isJoker ? "4.8s" : "5.2s",
              transition: "transform 0.5s ease"
            }}
          />
        </FadeIn>
      </div>

      {/* Bottom-Right Dynamic 3D Asset */}
      <div className="absolute bottom-[6%] right-[2%] sm:right-[4%] md:right-[6%] z-0 select-none pointer-events-none w-[140px] sm:w-[185px] md:w-[240px]">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            key={`${theme}-br`}
            src={images.bottomRight}
            alt={alts.bottomRight}
            referrerPolicy="no-referrer"
            className="w-full h-auto object-contain mix-blend-screen filter drop-shadow-[0_10px_30px_rgba(255,255,255,0.02)] animate-spin"
            style={{ 
              animationDuration: isJoker ? "22s" : "32s",
              transition: "transform 0.5s ease"
            }}
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
