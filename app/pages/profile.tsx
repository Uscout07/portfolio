'use client';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Aos from "aos";

export default function Profile({ themeColor = "#F89245" }) {
   const { theme, resolvedTheme } = useTheme();
    // Add mounted state to prevent hydration mismatch
    const [mounted, setMounted] = useState(false);
  
    // Set mounted to true after component is mounted
    useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) {return (
    
    <div  id="profile-section" className="w-screen relative bg-transparent overflow-hidden">
      <div  className="h-[50vh] max-md:h-[25vh]"></div>
      <div  className="absolute inset-0 flex justify-center items-center">

        <img
          className="w-[30%] max-md:w-4/5 absolute animate-spin z-10"
          src="/profileCircle.png"
          alt=""
          style={{ animationDuration: '8s' }}
        />
        <img className="relative z-30 max-md:w-[55vw] w-1/5 rounded-full" src="/photo.png" alt="" />
      </div>
      <div
      data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out"
        className={`
          modileProfileDiv
          relative w-full max-md:h-[30vh] 
          md:min-h-[50vh] z-20 flex flex-col
          items-center justify-center max-md:justify-end bg-[var(--theme-color)]/70 backdrop-filter backdrop-blur-[1.5px]
        `}
      
      >
        <div className="w-full px-6 py-2 font-bold text-black bg-white dark:text-white dark:bg-[#1E1E1E]  md:mt-[30vh] text-center uppercase overflow-hidden max-md:mt-2">
          <div className="relative text-[min(2.75vw)] whitespace-nowrap text-center z-40">
            udit pant - delhi technological university - Bachelor of Technology
          </div>
        </div>
        <div className="flex items-center justify-between w-[95vw] md:mt-8 text-7xl md:mb-8">
          <Icon className="max-md:px-[1vw]" icon="skill-icons:html" />
          <Icon className="max-md:px-[1vw]" icon="skill-icons:css" />
          <Icon className="max-md:px-[1vw]" icon="vscode-icons:file-type-js-official" />
          <Icon className="max-md:px-[1vw]" icon="skill-icons:react-dark" />
          <Icon className="max-md:px-[1vw]" icon="vscode-icons:file-type-light-next" />
          <Icon className="max-md:px-[1vw]" icon="devicon:nodejs" />
          <Icon className="max-md:px-[1vw]" icon="skill-icons:expressjs-dark" />
          <Icon className="max-md:px-[1vw]" icon="logos:postgresql" />
          <Icon className="max-md:px-[1vw]" icon="skill-icons:supabase-dark" />
          <Icon className="max-md:px-[1vw]" icon="logos:python" />
        </div>
      </div>
    </div>
  )} ; 
  const isDark = theme === 'dark' || resolvedTheme === 'dark';
  {
    return (
    
      <div  id="profile-section" className="w-screen relative bg-transparent overflow-hidden">
        <div  className="h-[50vh] max-md:h-[25vh]"></div>
        <div  className="absolute inset-0 flex justify-center items-center">
      
        {!isDark ? (
          <img
            className="max-md:w-[97vw] w-[40vw] absolute animate-spin z-10"
            src="/profileCircle.png"
            alt="Light Theme Circle"
            style={{ animationDuration: "8s" }}
          />
        ) : (
          <img
            className="max-md:w-[97vw] w-[40vw] absolute animate-spin z-10"
            src="/darkProfileCircle.png"
            alt="Dark Theme Circle"
            style={{ animationDuration: "8s" }}
          />
        )}
          <img className="relative z-30 max-md:w-[55vw] w-1/5 rounded-full" src="/photo.png" alt="" />
        </div>
        <div
        data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out"
          className={`
            modileProfileDiv
            relative w-full max-md:h-[30vh] 
            md:min-h-[50vh] z-20 flex flex-col
            items-center justify-center max-md:justify-end bg-[var(--theme-color)]/40 backdrop-filter backdrop-blur-[15px]
          `}
        >
          <div className="w-full px-6 py-2 font-bold text-black bg-white/90 dark:text-white dark:bg-[#1E1E1E]/90 backdrop-blur-sm  md:mt-[30vh] text-center uppercase overflow-hidden max-md:mt-2">
            <div className="relative text-[min(2.75vw)] whitespace-nowrap text-center z-40">
              udit pant - delhi technological university - Bachelor of Technology
            </div>
          </div>
          <div className="flex items-center justify-between w-[95vw] md:mt-8 text-7xl md:mb-8">
            <Icon className="max-md:px-[1vw]" icon="skill-icons:html" />
            <Icon className="max-md:px-[1vw]" icon="skill-icons:css" />
            <Icon className="max-md:px-[1vw]" icon="vscode-icons:file-type-js-official" />
            <Icon className="max-md:px-[1vw]" icon="skill-icons:react-dark" />
            <Icon className="max-md:px-[1vw]" icon="vscode-icons:file-type-light-next" />
            <Icon className="max-md:px-[1vw]" icon="devicon:nodejs" />
            <Icon className="max-md:px-[1vw]" icon="skill-icons:expressjs-dark" />
            <Icon className="max-md:px-[1vw]" icon="logos:postgresql" />
            <Icon className="max-md:px-[1vw]" icon="skill-icons:supabase-dark" />
            <Icon className="max-md:px-[1vw]" icon="logos:python" />
          </div>
        </div>
      </div>
    )
  }
}
