import React from "react";
import { FadeIn } from "./FadeIn";
import { Service } from "../types";

const servicesList: Service[] = [
  {
    id: "s1",
    number: "01",
    title: "3D Modeling",
    description: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    id: "s2",
    number: "02",
    title: "Rendering",
    description: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    id: "s3",
    number: "03",
    title: "Motion Design",
    description: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    id: "s4",
    number: "04",
    title: "Branding",
    description: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.",
  },
  {
    id: "s5",
    number: "05",
    title: "Web Design",
    description: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services-section"
      className="relative bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10"
      style={{ contentVisibility: "auto" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center tracking-tight leading-none"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col w-full">
          {servicesList.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.1}
              y={30}
              className="w-full"
            >
              <div
                className="flex items-center gap-6 sm:gap-10 md:gap-14 border-t border-[rgba(12,12,12,0.15)] last:border-b py-8 sm:py-10 md:py-12 w-full select-none hover:bg-gray-50/50 transition-colors duration-300 px-2 rounded-lg"
              >
                {/* Left side huge number */}
                <span
                  className="font-black text-[#0C0C0C] flex-shrink-0 tracking-tight leading-none text-right min-w-[70px] sm:min-w-[120px] md:min-w-[160px]"
                  style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                >
                  {service.number}
                </span>

                {/* Right side group */}
                <div className="flex flex-col gap-1.5 sm:gap-2 pr-2 sm:pr-4">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl opacity-60"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
