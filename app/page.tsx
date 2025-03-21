"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from "./pages/hero";
import Profile from "./pages/profile";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Navhead from "./components/header";
import LoadingPage from "./components/loadingPage";
import useThemeSafety from "./components/theme-context";

export default function Page() {
  const { isDark, mounted } = useThemeSafety();
  const [themeColor, setThemeColor] = useState("#06AA5B");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const sections = [
      { id: "hero-section", color: "#06AA5B" },
      { id: "profile-section", color: "#F89245" },
      { id: "projects-section", color: "#FF2626" },
      { id: "services-section", color: "#4131F0" },
      { id: "contact-section", color: "#000000" },
    ];

    const colorProxy = { currentColor: sections[0].color };

    gsap.set(document.documentElement, { "--theme-color": colorProxy.currentColor });
    setThemeColor(colorProxy.currentColor);

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

              colorProxy.currentColor = interpolatedColor;
              document.documentElement.style.setProperty('--theme-color', interpolatedColor);
              setThemeColor(interpolatedColor);
            }
          }
        });
      }
    }
    
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      clearTimeout(timer);
    };
  }, []);

  if (!mounted || loading) return <LoadingPage />;
  
  return (
    <div className="overflow-x-hidden w-screen"> 
      <Navhead themeColor={themeColor} />
      <Hero themeColor={themeColor} />
      <Profile themeColor={themeColor} />
      <Projects themeColor={themeColor} />
      <Services themeColor={themeColor} />
      <Contact />
    </div>
  );
}
