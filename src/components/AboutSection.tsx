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
      {/* Main content flow */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl text-center">
        {/* Heading: About me */}
        <FadeIn delay={0} y={40} className="mb-10 sm:mb-14 md:mb-16">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            CHI SONO
          </h2>
        </FadeIn>

        {/* Scroll Reveal Text Block */}
        <div className="mb-16 sm:mb-20 md:mb-24 w-full">
          <AnimatedText
            text={
              "Sviluppo interfacce web moderne, performanti e curate in ogni dettaglio. Scrivo codice pulito, progetto architetture digitali solide e integro strumenti di intelligenza artificiale e automazione per risolvere problemi reali. Imparo rapidamente nuove tecnologie e le applico per dare vita a prodotti affidabili ed eleganti. Collaboriamo per costruire qualcosa di concreto e di valore."
            }
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
