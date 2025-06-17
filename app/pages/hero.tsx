'use client';
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero({
  themeColor = "#06AA5B",
}: {
  themeColor?: string;
}) {
  const { theme, resolvedTheme } = useTheme();
  // Add mounted state to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  const stylizedText = (
    <>
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hello! I'm Udit Pant, a passionate web developer and technology
        enthusiast based in Delhi, India. I specialize in creating dynamic,
        user-centric web solutions. Explore my work and feel free to connect!
      </p>
    </>
  );

  // Show placeholder or simplified UI while not mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div
        id="hero-section"
        className="w-screen relative max-h-[100vh] bg-transparent overflow-hidden"
      >
        {/* Simplified content while loading */}
        <div className="w-full h-[50vh] md:flex items-center">
          <div className="pl-10 w-[25%] max-md:w-[90vw] text-[1vw]">
            {stylizedText}
          </div>
        </div>
        <div
          className={`relative w-full h-[50vh] z-20 flex flex-col items-center justify-center bg-[var(--theme-color)]/40 backdrop-filter backdrop-blur-[1.5px]`}
        >
          <div className="px-6 py-4 font-bold text-white max-md:mt-10 mt-24 text-7xl max-md:text-[10vw]">
            WELCOME TO MY DEVFOLIO
          </div>
          {/* Placeholder button */}
          <div className="text-3xl py-3 px-5 bg-white rounded-full">
            GET IN TOUCH
          </div>
        </div>
      </div>
    );
  }

  // The actual theme-aware UI
  const isDark = theme === 'dark' || resolvedTheme === 'dark';

  return (
    <div
      id="hero-section"
      className="w-screen relative max-h-[100vh] bg-transparent overflow-hidden"
    >
      {/* Background Animated Images */}
      <div className="absolute inset-0 flex justify-center items-center">
        {!isDark ? (
          <img
            className="max-md:w-[97vw] w-[40vw] absolute animate-spin z-10"
            src="/homePageCircle.png"
            alt="Light Theme Circle"
            style={{ animationDuration: "8s" }}
          />
        ) : (
          <img
            className="max-md:w-[97vw] w-[40vw] absolute animate-spin z-10"
            src="/darkHomePageCircle.png"
            alt="Dark Theme Circle"
            style={{ animationDuration: "8s" }}
          />
        )}

        <img
          className="w-[25vw] relative z-30 max-md:w-[55vw]"
          src="/computer.png"
          alt="Computer Illustration"
        />
      </div>

      {/* Intro Text Section */}
      <div className="w-full h-[50vh] md:flex items-center">
        <div className="pl-10 w-[25%] max-md:text-[2vw] max-md:w-[90vw] ibm-plex-mono-regular text-[1vw] max-md:pt-30">
          {stylizedText}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div
        className={`relative w-full h-[50vh] z-20 flex flex-col items-center justify-center bg-[var(--theme-color)]/70 backdrop-filter backdrop-blur-[20px]`}
        
      >
        <div className={`px-6 py-4 font-bold text-white dark:text-[#1E1E1E] max-md:mt-10 mt-24 text-7xl max-md:text-[10vw] `}>
          WELCOME TO MY DEVFOLIO
        </div>
        
        {/* Dynamic styling based on theme */}
        <Link
          href="#contact-section"
          className={`text-3xl py-3 px-5 rounded-full text-[var(--theme-color)] hover:animate-pulse transition-all duration-300 ease-in-out hover:scale-105 ${
            isDark ? 'bg-[#1E1E1E]' : 'bg-white'
          }`}
        >
          GET IN TOUCH
        </Link>

      </div>
    </div>
  );
}