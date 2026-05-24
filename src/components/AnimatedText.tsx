import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  id?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  id,
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef as any,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  // Calculate total string length to map characters correct progress
  const totalChars = text.length;

  let globalCharCounter = 0;

  return (
    <p ref={containerRef} id={id} className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split("");
        
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-1 px-0.5 sm:px-1">
            {wordChars.map((char, charIdx) => {
              // Smooth stagger window for each character
              const start = (globalCharCounter / totalChars) * 0.75;
              const end = Math.min(start + 0.25, 1.0);
              
              globalCharCounter++;
              
              return (
                <Character
                  key={charIdx}
                  char={char}
                  scrollYProgress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })}
            {/* Account for spaces between words in progress counter */}
            {(() => {
              globalCharCounter++;
              return null;
            })()}
          </span>
        );
      })}
    </p>
  );
};

interface CharacterProps {
  char: string;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}

const Character: React.FC<CharacterProps> = ({ char, scrollYProgress, start, end }) => {
  // Morph scroll range to character opacity (0.2 to 1.0)
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1.0]);

  return (
    <span className="relative inline-block text-[#D7E2EA] font-semibold">
      {/* Invisible placeholder for width/height */}
      <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
        {char}
      </span>
      {/* Real absolute positioned character */}
      <motion.span style={{ opacity }} className="absolute inset-0 select-none block text-center">
        {char}
      </motion.span>
    </span>
  );
};

export default AnimatedText;
