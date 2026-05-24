import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import batmanLogo from "../image/batmanlogo.jpg";
import jokerLogo from "../image/Joker-Logo.png";

// @ts-ignore
import jokerLaugh from "../audio/joker-laugh.mp3";
// @ts-ignore
import batmanWhoosh from "../audio/batman-whoosh.mp3";

interface ThemeToggleProps {
  theme: "batman" | "joker";
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  const isJoker = theme === "joker";
  const [popup, setPopup] = useState<{ show: boolean; mode: "batman" | "joker" } | null>(null);

  const handleToggle = useCallback(() => {
    const nextMode = isJoker ? "batman" : "joker";

    // Play corresponding theme audio
    try {
      const audio = new Audio(nextMode === "joker" ? jokerLaugh : batmanWhoosh);
      audio.volume = 0.55; // Good balance, not too loud or too quiet
      audio.play().catch((err) => {
        console.warn("Audio autoplay blocked by browser:", err);
      });
    } catch (error) {
      console.error("Audio playback error:", error);
    }

    toggleTheme();
    setPopup({ show: true, mode: nextMode });
    setTimeout(() => {
      setPopup(null);
    }, 1800);
  }, [isJoker, toggleTheme]);

  return (
    <>
      {/* Fullscreen Mode Popup */}
      <AnimatePresence>
        {popup?.show && (
          <motion.div
            key="mode-popup"
            className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop blur + dark overlay */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: popup.mode === "joker"
                  ? "radial-gradient(ellipse at center, rgba(157, 0, 255, 0.15) 0%, rgba(8, 2, 15, 0.85) 100%)"
                  : "radial-gradient(ellipse at center, rgba(255, 184, 0, 0.1) 0%, rgba(5, 5, 7, 0.85) 100%)",
                backdropFilter: "blur(8px)",
              }}
            />

            {/* Accent glow lines */}
            <motion.div
              className="absolute top-0 left-0 w-full h-[2px]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                background: popup.mode === "joker"
                  ? "linear-gradient(90deg, transparent, #39FF14, #9D00FF, transparent)"
                  : "linear-gradient(90deg, transparent, #FFB800, #005CFF, transparent)",
                transformOrigin: "center",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[2px]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              style={{
                background: popup.mode === "joker"
                  ? "linear-gradient(90deg, transparent, #9D00FF, #39FF14, transparent)"
                  : "linear-gradient(90deg, transparent, #005CFF, #FFB800, transparent)",
                transformOrigin: "center",
              }}
            />

            {/* Main text — drops from top */}
            <motion.h2
              className="hero-heading font-black uppercase tracking-tight leading-none text-center select-none relative z-10"
              style={{
                fontSize: "clamp(3rem, 12vw, 10rem)",
                background: popup.mode === "joker"
                  ? "linear-gradient(135deg, #39FF14 0%, #9D00FF 100%)"
                  : "linear-gradient(135deg, #E2E8F0 0%, #FFB800 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "none",
                filter: popup.mode === "joker"
                  ? "drop-shadow(0 0 40px rgba(57, 255, 20, 0.3)) drop-shadow(0 0 80px rgba(157, 0, 255, 0.2))"
                  : "drop-shadow(0 0 40px rgba(255, 184, 0, 0.3)) drop-shadow(0 0 80px rgba(0, 92, 255, 0.2))",
              }}
              initial={{ y: -200, opacity: 0, scale: 0.7 }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  mass: 1,
                  duration: 0.8,
                },
              }}
              exit={{
                y: 60,
                opacity: 0,
                scale: 0.9,
                filter: "blur(8px)",
                transition: { duration: 0.4, ease: "easeIn" },
              }}
            >
              {popup.mode === "joker" ? "JOKER" : "BATMAN"}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.5, ease: "easeOut" },
                }}
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 4.5rem)",
                  letterSpacing: "0.25em",
                }}
              >
                MODE
              </motion.span>
            </motion.h2>

            {/* Decorative particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 4 + Math.random() * 6,
                  height: 4 + Math.random() * 6,
                  background: popup.mode === "joker"
                    ? i % 2 === 0 ? "#39FF14" : "#9D00FF"
                    : i % 2 === 0 ? "#FFB800" : "#005CFF",
                  left: `${15 + i * 14}%`,
                  top: `${40 + (i % 3) * 10}%`,
                }}
                initial={{ opacity: 0, scale: 0, y: -50 }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.5, 0],
                  y: [0, 30 + i * 15],
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.2 + i * 0.08,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Toggle Switch — premium design */}
      <motion.button
        id="theme-toggle-btn"
        onClick={handleToggle}
        className="relative flex items-center cursor-pointer outline-none select-none group"
        style={{
          width: 76,
          height: 38,
          borderRadius: 19,
          border: `2px solid ${isJoker ? "rgba(57, 255, 20, 0.4)" : "rgba(255, 184, 0, 0.4)"}`,
          background: isJoker
            ? "linear-gradient(135deg, #0A0314 0%, #1A0A2E 50%, #0D0520 100%)"
            : "linear-gradient(135deg, #0A0B0F 0%, #15171D 50%, #0E1014 100%)",
          boxShadow: isJoker
            ? "0 0 18px rgba(57, 255, 20, 0.15), 0 0 40px rgba(157, 0, 255, 0.08), inset 0 1px 0 rgba(255,255,255,0.04)"
            : "0 0 18px rgba(255, 184, 0, 0.12), 0 0 40px rgba(0, 92, 255, 0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
          padding: 4,
        }}
        whileHover={{
          boxShadow: isJoker
            ? "0 0 28px rgba(57, 255, 20, 0.35), 0 0 50px rgba(157, 0, 255, 0.15), inset 0 1px 0 rgba(255,255,255,0.06)"
            : "0 0 28px rgba(255, 184, 0, 0.3), 0 0 50px rgba(0, 92, 255, 0.1), inset 0 1px 0 rgba(255,255,255,0.06)",
          scale: 1.08,
        }}
        whileTap={{ scale: 0.94 }}
        title={isJoker ? "Attiva Batman Mode" : "Attiva Joker Mode"}
      >
        {/* Animated background glow on the active side */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 30,
            height: 30,
            top: 2,
            filter: "blur(10px)",
          }}
          animate={{
            left: isJoker ? 40 : 2,
            background: isJoker
              ? "radial-gradient(circle, rgba(57, 255, 20, 0.35) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(255, 184, 0, 0.3) 0%, transparent 70%)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />

        {/* Track inner gradient overlay */}
        <motion.div
          className="absolute inset-[1px] rounded-full pointer-events-none overflow-hidden"
          animate={{
            background: isJoker
              ? "linear-gradient(90deg, rgba(157, 0, 255, 0.08) 0%, rgba(57, 255, 20, 0.12) 100%)"
              : "linear-gradient(90deg, rgba(255, 184, 0, 0.08) 0%, rgba(0, 92, 255, 0.05) 100%)",
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Left icon (Batman) — visible when in Joker mode */}
        <motion.div
          className="absolute left-[8px] top-1/2 -translate-y-1/2 pointer-events-none"
          animate={{ opacity: isJoker ? 0.4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <img src={batmanLogo} alt="" className="w-[16px] h-[16px] object-contain rounded-full" />
        </motion.div>

        {/* Right icon (Joker) — visible when in Batman mode */}
        <motion.div
          className="absolute right-[8px] top-1/2 -translate-y-1/2 pointer-events-none"
          animate={{ opacity: isJoker ? 0 : 0.4 }}
          transition={{ duration: 0.3 }}
        >
          <img src={jokerLogo} alt="" className="w-[16px] h-[16px] object-contain rounded-full" />
        </motion.div>

        {/* Sliding knob */}
        <motion.div
          className="relative z-10 flex items-center justify-center"
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
          }}
          animate={{
            x: isJoker ? 36 : 0,
            background: isJoker
              ? "linear-gradient(145deg, #39FF14 0%, #7A00F7 100%)"
              : "linear-gradient(145deg, #FFB800 0%, #FF8C00 100%)",
            boxShadow: isJoker
              ? "0 0 14px rgba(57, 255, 20, 0.6), 0 0 28px rgba(157, 0, 255, 0.3), inset 0 1px 2px rgba(255,255,255,0.2)"
              : "0 0 14px rgba(255, 184, 0, 0.55), 0 0 28px rgba(255, 140, 0, 0.2), inset 0 1px 2px rgba(255,255,255,0.25)",
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 22,
            mass: 0.7,
          }}
        >
          {/* Glow ring around knob */}
          <motion.div
            className="absolute inset-[-3px] rounded-full pointer-events-none"
            animate={{
              boxShadow: isJoker
                ? "0 0 8px rgba(57, 255, 20, 0.4)"
                : "0 0 8px rgba(255, 184, 0, 0.35)",
              borderColor: isJoker
                ? "rgba(57, 255, 20, 0.25)"
                : "rgba(255, 184, 0, 0.2)",
            }}
            style={{ border: "1px solid transparent", borderRadius: "50%" }}
            transition={{ duration: 0.4 }}
          />

          {/* Knob inner icon */}
          <AnimatePresence mode="wait">
            {isJoker ? (
              <motion.div
                key="j-icon"
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0, rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3, ease: "backOut" }}
              >
                <img src={jokerLogo} alt="Joker" className="w-[20px] h-[20px] object-contain" />
              </motion.div>
            ) : (
              <motion.div
                key="b-icon"
                initial={{ scale: 0, rotate: 180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0, rotate: -180, opacity: 0 }}
                transition={{ duration: 0.3, ease: "backOut" }}
              >
                <img src={batmanLogo} alt="Batman" className="w-[20px] h-[20px] object-contain rounded-full" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.button>
    </>
  );
};

export default ThemeToggle;

