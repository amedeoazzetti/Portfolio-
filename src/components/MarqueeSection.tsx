import React, { useEffect, useRef, useState } from "react";

const row1Words = [
  "3D DESIGN",
  "✦",
  "BRANDING",
  "✦",
  "WEB DEVELOPMENT",
  "✦",
  "MOTION",
  "✦",
  "UI / UX",
  "✦",
  "CREATIVE DIRECTION",
  "✦",
];

const row2Words = [
  "VISUAL IDENTITY",
  "◆",
  "ANIMATION",
  "◆",
  "INTERACTION",
  "◆",
  "STRATEGY",
  "◆",
  "CONCEPT",
  "◆",
  "DIGITAL ART",
  "◆",
];

// Triple for seamless infinite loop
const row1Tripled = [...row1Words, ...row1Words, ...row1Words];
const row2Tripled = [...row2Words, ...row2Words, ...row2Words];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const computedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.35;
      setOffset(computedOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="marquee-section"
      className="relative bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full select-none"
      style={{ contentVisibility: "auto" }}
    >
      {/* Subtle top/bottom fade masks */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(90deg, #0C0C0C 0%, transparent 8%, transparent 92%, #0C0C0C 100%)",
        }}
      />

      <div className="flex flex-col gap-4 md:gap-6 w-full">
        {/* Row 1: Moves RIGHT on scroll */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div
            className="flex items-center gap-0"
            style={{
              transform: `translateX(${offset - 600}px)`,
              willChange: "transform",
              transition: "transform 0.1s ease-out",
            }}
          >
            {row1Tripled.map((word, idx) => {
              const isSymbol = word === "✦";
              return (
                <span
                  key={`r1-${idx}`}
                  className={`flex-shrink-0 ${
                    isSymbol
                      ? "text-[#B600A8] text-lg sm:text-xl md:text-2xl mx-6 sm:mx-8 md:mx-10"
                      : "font-black uppercase tracking-tight text-[#D7E2EA]/[0.08] mx-3 sm:mx-4 md:mx-6"
                  }`}
                  style={
                    isSymbol
                      ? undefined
                      : { fontSize: "clamp(2.5rem, 7vw, 6rem)", lineHeight: 1.1 }
                  }
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>

        {/* Thin decorative line */}
        <div className="w-full flex items-center justify-center px-8">
          <div
            className="w-full h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D7E2EA10, #B600A820, #D7E2EA10, transparent)",
            }}
          />
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div
            className="flex items-center gap-0"
            style={{
              transform: `translateX(${-(offset - 600)}px)`,
              willChange: "transform",
              transition: "transform 0.1s ease-out",
            }}
          >
            {row2Tripled.map((word, idx) => {
              const isSymbol = word === "◆";
              return (
                <span
                  key={`r2-${idx}`}
                  className={`flex-shrink-0 ${
                    isSymbol
                      ? "text-[#D7E2EA]/30 text-xs sm:text-sm md:text-base mx-6 sm:mx-8 md:mx-10"
                      : "font-black uppercase tracking-tight mx-3 sm:mx-4 md:mx-6"
                  }`}
                  style={
                    isSymbol
                      ? undefined
                      : {
                          fontSize: "clamp(2.5rem, 7vw, 6rem)",
                          lineHeight: 1.1,
                          WebkitTextStroke: "1.5px rgba(215, 226, 234, 0.12)",
                          color: "transparent",
                        }
                  }
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
