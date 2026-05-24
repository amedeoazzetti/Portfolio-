import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import batmanLogo from "./image/batmanlogo.jpg";
import jokerLogo from "./image/Joker-Logo.png";

export default function App() {
  const [theme, setTheme] = useState<"batman" | "joker">("batman");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "batman" ? "joker" : "batman"));
  };

  // Dynamic Favicon Update based on active theme
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = theme === "joker" ? jokerLogo : batmanLogo;
  }, [theme]);

  // Dynamic Title Update based on active theme
  useEffect(() => {
    document.title = theme === "joker" ? "Amedeo | Joker Mode 🃏" : "Amedeo | Batman Mode 🦇";
  }, [theme]);

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

