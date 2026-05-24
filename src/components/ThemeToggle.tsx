import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ThemeToggleProps {
  theme: "batman" | "joker";
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  const isJoker = theme === "joker";
  const [popup, setPopup] = useState<{ show: boolean; mode: "batman" | "joker" } | null>(null);

  const handleToggle = useCallback(() => {
    const nextMode = isJoker ? "batman" : "joker";
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

      {/* Animated Toggle Switch (inline, not fixed) */}
      <motion.button
        id="theme-toggle-btn"
        onClick={handleToggle}
        className="relative flex items-center cursor-pointer outline-none select-none"
        style={{
          width: 56,
          height: 28,
          borderRadius: 14,
          border: `1.5px solid ${isJoker ? "rgba(57, 255, 20, 0.5)" : "rgba(255, 184, 0, 0.5)"}`,
          background: isJoker
            ? "linear-gradient(135deg, #0A0314 0%, #1A0A2E 100%)"
            : "linear-gradient(135deg, #0A0B0F 0%, #131519 100%)",
          boxShadow: isJoker
            ? "0 0 12px rgba(57, 255, 20, 0.2), inset 0 0 8px rgba(157, 0, 255, 0.15)"
            : "0 0 12px rgba(255, 184, 0, 0.15), inset 0 0 8px rgba(255, 184, 0, 0.05)",
          padding: 3,
        }}
        whileHover={{
          boxShadow: isJoker
            ? "0 0 20px rgba(57, 255, 20, 0.4), inset 0 0 12px rgba(157, 0, 255, 0.25)"
            : "0 0 20px rgba(255, 184, 0, 0.35), inset 0 0 12px rgba(255, 184, 0, 0.1)",
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        title={isJoker ? "Attiva Batman Mode" : "Attiva Joker Mode"}
      >
        {/* Background glow track */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          animate={{
            background: isJoker
              ? "linear-gradient(90deg, rgba(157, 0, 255, 0.15) 0%, rgba(57, 255, 20, 0.2) 100%)"
              : "linear-gradient(90deg, rgba(255, 184, 0, 0.1) 0%, rgba(0, 92, 255, 0.08) 100%)",
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Track labels — small icons on each side */}
        <span
          className="absolute left-[7px] top-1/2 -translate-y-1/2 text-[8px] font-black tracking-wider pointer-events-none select-none transition-opacity duration-300"
          style={{
            opacity: isJoker ? 0.2 : 0,
            color: "#FFB800",
          }}
        >
          🦇
        </span>
        <span
          className="absolute right-[7px] top-1/2 -translate-y-1/2 text-[8px] font-black tracking-wider pointer-events-none select-none transition-opacity duration-300"
          style={{
            opacity: isJoker ? 0 : 0.2,
            color: "#39FF14",
          }}
        >
          🃏
        </span>

        {/* Sliding knob */}
        <motion.div
          className="relative z-10 flex items-center justify-center"
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
          }}
          animate={{
            x: isJoker ? 26 : 0,
            background: isJoker
              ? "linear-gradient(135deg, #39FF14, #7A00F7)"
              : "linear-gradient(135deg, #FFB800, #E2A300)",
            boxShadow: isJoker
              ? "0 0 10px rgba(57, 255, 20, 0.6), 0 0 20px rgba(157, 0, 255, 0.3)"
              : "0 0 10px rgba(255, 184, 0, 0.5), 0 0 20px rgba(255, 184, 0, 0.15)",
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 25,
            mass: 0.8,
          }}
        >
          {/* Inner knob icon */}
          <AnimatePresence mode="wait">
            {isJoker ? (
              <motion.span
                key="j-knob"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.25, ease: "backOut" }}
                className="text-[10px] leading-none"
                style={{ filter: "brightness(0) saturate(100%)" }}
              >
                🃏
              </motion.span>
            ) : (
              <motion.span
                key="b-knob"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: -180 }}
                transition={{ duration: 0.25, ease: "backOut" }}
                className="text-[10px] leading-none"
                style={{ filter: "brightness(0) saturate(100%)" }}
              >
                🦇
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.button>
    </>
  );
};

export default ThemeToggle;
