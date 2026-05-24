import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  const [theme, setTheme] = useState<"batman" | "joker">("batman");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "batman" ? "joker" : "batman"));
  };

  return (
    <div 
      className={`w-full min-h-screen text-[#D7E2EA] overflow-x-hidden antialiased selection:bg-[var(--color-selection-bg)] selection:text-[var(--color-selection-text)] transition-colors duration-500 ${
        theme === "joker" ? "theme-joker" : "theme-batman"
      }`}
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* 1. Hero Section */}
      <HeroSection theme={theme} toggleTheme={toggleTheme} />

      {/* 2. Marquee Section */}
      <MarqueeSection theme={theme} />

      {/* 3. About Section */}
      <AboutSection theme={theme} />

      {/* 4. Projects Section */}
      <ProjectsSection theme={theme} />

      {/* 6. Contact & Footer Section */}
      <ContactSection theme={theme} />
    </div>
  );
}

