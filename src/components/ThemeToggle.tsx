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

      {/* Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50 select-none">
        <motion.button
          id="theme-toggle-btn"
          onClick={handleToggle}
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center cursor-pointer border-2 shadow-2xl transition-all duration-300 outline-none`}
          style={{
            backgroundColor: isJoker ? "#08020F" : "#050507",
            borderColor: isJoker ? "#39FF14" : "#FFB800",
            boxShadow: isJoker
              ? "0 0 20px rgba(57, 255, 20, 0.4), inset 0 0 10px rgba(157, 0, 255, 0.3)"
              : "0 0 20px rgba(255, 184, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.05)",
          }}
          whileHover={{
            scale: 1.1,
            rotate: isJoker ? -12 : 12,
            boxShadow: isJoker
              ? "0 0 30px rgba(57, 255, 20, 0.6), 0 0 10px rgba(157, 0, 255, 0.5), inset 0 0 12px rgba(157, 0, 255, 0.5)"
              : "0 0 30px rgba(255, 184, 0, 0.6), inset 0 0 12px rgba(255, 255, 255, 0.15)",
          }}
          whileTap={{ scale: 0.9 }}
          title={isJoker ? "Attiva Batman Mode" : "Attiva Joker Mode"}
        >
          {/* Glow halo behind button */}
          <span
            className="absolute inset-0 rounded-full opacity-30 blur-md pointer-events-none"
            style={{
              background: isJoker
                ? "radial-gradient(circle, #39FF14 0%, #9D00FF 100%)"
                : "radial-gradient(circle, #FFB800 0%, transparent 100%)",
            }}
          />

          <AnimatePresence mode="wait">
            {isJoker ? (
              // Joker crazy smile / cards icon (visual representation)
              <motion.div
                key="joker-icon"
                initial={{ scale: 0, rotate: -90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0, rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3, ease: "backOut" }}
                className="relative w-8 h-8 flex items-center justify-center text-[#39FF14]"
              >
                {/* Custom SVG Joker Laugh / Smile */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                >
                  {/* Crazy eyes */}
                  <path d="M7 9l2 1.5L7 12M17 9l-2 1.5 2 1.5" />
                  {/* Lunatic smile */}
                  <path d="M4 14c1 4 4 6 8 6s7-2 8-6" />
                  <path d="M3 13.5c1.5.5 3 0 3-1.5M21 13.5c-1.5.5-3 0-3-1.5" />
                  {/* Joker teeth lines */}
                  <path d="M8 16.5v1M12 17v1.5M16 16.5v1" />
                </svg>
                {/* Small laughing text tags absolute floating */}
                <span className="absolute -top-2.5 -left-1 text-[9px] font-black tracking-widest text-[#FF003C] rotate-12 animate-pulse">
                  HA
                </span>
                <span className="absolute -bottom-2 -right-1.5 text-[9px] font-black tracking-widest text-[#9D00FF] -rotate-12">
                  HA
                </span>
              </motion.div>
            ) : (
              // Batman Batsignal icon
              <motion.div
                key="batman-icon"
                initial={{ scale: 0, rotate: 90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0, rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3, ease: "backOut" }}
                className="w-8 h-8 flex items-center justify-center text-[#FFB800]"
              >
                {/* Custom High-Tech Bat SVG */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path d="M12 4.5c-.3 0-.5.2-.6.4L11 6.5c-.8.2-1.5.6-2.1 1.2L7 7.2c-.2-.1-.5-.1-.7.1-.9.9-1.5 2.1-1.8 3.4-.1.3.1.5.3.6L6.5 12c-.1.7-.1 1.4 0 2.1l-1.7.7c-.2.1-.4.3-.3.6.3 1.3.9 2.5 1.8 3.4.2.2.5.2.7.1l1.9-.5c.6.6 1.3 1 2.1 1.2l.4 1.6c.1.2.3.4.6.4s.5-.2.6-.4l.4-1.6c.8-.2 1.5-.6 2.1-1.2l1.9.5c.2.1.5.1.7-.1.9-.9 1.5-2.1 1.8-3.4.1-.3-.1-.5-.3-.6l-1.7-.7c.1-.7.1-1.4 0-2.1l1.7-.7c.2-.1.4-.3.3-.6-.3-1.3-.9-2.5-1.8-3.4-.2-.2-.5-.2-.7-.1l-1.9.5c-.6-.6-1.3-1-2.1-1.2l-.4-1.6c-.1-.2-.3-.4-.6-.4zM12 9.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
};

export default ThemeToggle;
