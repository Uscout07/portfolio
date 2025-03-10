"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./pages/hero";
import Profile from "./pages/profile";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Navhead from "./components/header";

export default function Page() {
  const [themeColor, setThemeColor] = useState("#06AA5B");

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Define section colors
    const sections = [
      { id: "hero-section", color: "#06AA5B" },
      { id: "profile-section", color: "#F89245" },
      { id: "projects-section", color: "#FF2626" },
      { id: "services-section", color: "#4131F0" },
      { id: "contact-section", color: "#000000" },
      
    ];

    // Create a proxy object to track color changes
    const colorProxy = { currentColor: sections[0].color };

    // Update the React state and CSS custom property when the proxy changes
    gsap.set(document.documentElement, { "--theme-color": colorProxy.currentColor });
    setThemeColor(colorProxy.currentColor);

    // Set up the ScrollTriggers for each section transition
    for (let i = 1; i < sections.length; i++) {
      const prevSection = sections[i - 1];
      const currentSection = sections[i];
      const prevElement = document.getElementById(prevSection.id);

      if (prevElement) {
        gsap.timeline({
          scrollTrigger: {
            trigger: prevElement,
            start: "top top",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
              // Calculate the interpolated color based on scroll progress
              const progress = self.progress;
              const r1 = parseInt(prevSection.color.substr(1, 2), 16);
              const g1 = parseInt(prevSection.color.substr(3, 2), 16);
              const b1 = parseInt(prevSection.color.substr(5, 2), 16);

              const r2 = parseInt(currentSection.color.substr(1, 2), 16);
              const g2 = parseInt(currentSection.color.substr(3, 2), 16);
              const b2 = parseInt(currentSection.color.substr(5, 2), 16);

              const r = Math.round(r1 + (r2 - r1) * progress);
              const g = Math.round(g1 + (g2 - g1) * progress);
              const b = Math.round(b1 + (b2 - b1) * progress);

              const interpolatedColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

              // Update the color
              colorProxy.currentColor = interpolatedColor;
              document.documentElement.style.setProperty('--theme-color', interpolatedColor);
              setThemeColor(interpolatedColor);
            }
          }
        });
      }
    }

    return () => {
      // Clean up all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --theme-color: #06AA5B;
        }
      `}</style>

      <Navhead themeColor={themeColor} />
      <Hero themeColor={themeColor} />
      <Profile themeColor={themeColor} />
      <Projects themeColor={themeColor} />
      <Services themeColor={themeColor} />
      <Contact />

    </>
  );
}