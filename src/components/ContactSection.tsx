import React from "react";
import { Mail, Instagram, Linkedin, ArrowUp, Sparkles, Globe } from "lucide-react";
import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";

export const ContactSection: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { name: "Instagram", url: "https://instagram.com", icon: <Instagram className="w-5 h-5" /> },
    { name: "LinkedIn", url: "https://linkedin.com", icon: <Linkedin className="w-5 h-5" /> },
    { name: "Dribbble", url: "https://dribbble.com", icon: <Globe className="w-5 h-5 font-light" /> },
  ];

  return (
    <footer
      id="contact-section"
      className="relative bg-[#0C0C0C] px-6 md:px-12 pt-20 pb-12 overflow-hidden border-t border-[#D7E2EA]/10 w-full"
      style={{ contentVisibility: "auto" }}
    >
      {/* Visual background ambient haze */}
      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(182,0,168,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(118,33,176,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12 relative z-10">

        {/* Top: Large Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-[#D7E2EA]/10">
          <div className="flex flex-col gap-2">
            <FadeIn delay={0} y={20}>
              <div className="flex items-center gap-2 text-[#D7E2EA]/55 text-xs sm:text-sm uppercase tracking-widest font-mono">
                <Sparkles className="w-4 h-4 text-[#B600A8]" />
                available for freelance work
              </div>
            </FadeIn>
            <FadeIn delay={0.1} y={20}>
              <h2 className="text-[#D7E2EA] font-semibold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none mt-2">
                Let&apos;s craft your vision
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={20}>
            <a
              id="footer-email-link"
              href="mailto:azzetti.amedeo@gmail.com"
              className="inline-flex items-center gap-3 bg-[#D7E2EA]/5 hover:bg-[#D7E2EA]/15 text-[#D7E2EA] px-6 py-4 rounded-full border border-[#D7E2EA]/15 transition-all duration-300 pointer-events-auto select-none"
            >
              <Mail className="w-5 h-5 text-[#B600A8]" />
              <span className="font-semibold uppercase tracking-wider text-sm">
                azzetti.amedeo@gmail.com
              </span>
            </a>
          </FadeIn>
        </div>

        {/* Middle: Links and Brand info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-6 py-6 items-start">

          {/* Col 1: Brand block */}
          <div className="flex flex-col gap-4">
            <h3 className="hero-heading font-black text-2xl uppercase tracking-tight">
              AMEDEO
            </h3>
            <p className="text-[#D7E2EA]/60 uppercase tracking-wide text-xs sm:text-sm font-light leading-relaxed max-w-[280px]">
              Studente di informatica e web developer, trasformo idee in esperienze digitali moderne e interattive.
            </p>
          </div>

          {/* Col 2: Social Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#D7E2EA]/40 text-xs sm:text-sm uppercase tracking-widest font-mono select-none">
              Social Coordinates
            </h4>
            <div className="flex gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  id={`social-${social.name.toLowerCase()}`}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center border border-[#D7E2EA]/20 text-[#D7E2EA]/80 hover:text-[#FFFFFF] hover:border-[#B600A8] transition-all duration-300"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(182,0,168,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 3: Back to top */}
          <div className="flex justify-start md:justify-end items-center h-full">
            <motion.button
              id="scroll-to-top"
              onClick={handleScrollToTop}
              className="flex items-center gap-2 group text-[#D7E2EA]/75 hover:text-[#FFFFFF] transition-colors duration-300 cursor-pointer text-xs sm:text-sm uppercase tracking-widest font-mono"
              whileHover={{ x: 2 }}
            >
              Back to top
              <span className="w-10 h-10 rounded-full border border-[#D7E2EA]/10 flex items-center justify-center group-hover:border-[#B600A8] transition-colors duration-350 bg-[#D7E2EA]/5">
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </motion.button>
          </div>

        </div>

        {/* Bottom: Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-10 border-t border-[#D7E2EA]/10 text-[#D7E2EA]/40 text-xs tracking-wider select-none">
          <span>&copy; {new Date().getFullYear()} AMEDEO. ALL RIGHTS RESERVED.</span>
          <span className="font-light hover:text-[#D7E2EA] transition-colors duration-200">
            CRAFTED WITH PRECISION
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;
