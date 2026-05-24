import React from "react";
import { Navbar } from "./Navbar";
import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./ContactButton";
import avatarImg from "../image/3Davatar-removebg-preview.png";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C]"
      style={{ contentVisibility: "auto" }}
    >
      {/* Navbar in Hero */}
      <Navbar />

      {/* Hero Portait - Centered Absolutely */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none sm:pointer-events-auto top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[240px] xs:w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30} duration={0.9} className="flex justify-center select-none">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full"
          >
            <img
              src={avatarImg}
              alt="Portrait of Amedeo"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Hero Heading Container - Elevated styling */}
      <div className="flex-grow flex items-center justify-center relative z-0 mix-blend-difference px-4 sm:px-6">
        <div className="overflow-hidden w-full text-center">
          <FadeIn delay={0.15} y={40} duration={0.8} className="w-full">
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[9vw] sm:text-[10vw] md:text-[11vw] lg:text-[12vw] select-none mt-6 sm:mt-4 md:-mt-5"
            >
              Hi, i&apos;m amedeo
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar Container */}
      <div className="relative z-20 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end w-full gap-4">
        {/* Left: Headline subtitle */}
        <div className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <FadeIn delay={0.35} y={20} duration={0.8}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
              style={{ fontSize: "clamp(0.75rem, 1.2vw, 1.25rem)" }}
            >
              Sono Amedeo, un ragazzo a cui piace giocare con le AI
            </p>
          </FadeIn>
        </div>

        {/* Right: Contact button */}
        <div className="flex justify-end">
          <FadeIn delay={0.5} y={20} duration={0.8}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
