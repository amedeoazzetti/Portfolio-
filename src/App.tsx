import React from "react";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#050507] text-[#D7E2EA] overflow-x-hidden antialiased selection:bg-[#FFB800]/20 selection:text-[#FFB800]">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Projects Section */}
      <ProjectsSection />

      {/* 6. Contact & Footer Section */}
      <ContactSection />
    </div>
  );
}
