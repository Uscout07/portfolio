'use client';
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function Navhead({ themeColor =""}) {
    const logoText = `<u>`; 
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Handle window resize to detect device size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // lg breakpoint in Tailwind is 1024px
        };
        
        // Set initial value
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        // Prevent scrolling when menu is open on mobile
        if (!showMenu && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    return (
        <div className="w-screen p-5 z-50 top-0 fixed flex justify-between">
            {/* Logo */}
            <div
                className="w-[7vh] h-[7vh] rounded-full text-white font-passion text-[5vh] flex items-center justify-center"
                style={{ backgroundColor: themeColor }}
            >
                {logoText}
            </div>

            {/* Social Icons */}
            <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 ${showMenu && isMobile ? 'hidden' : 'block'}`}>
                <div 
                    className="py-5 px-5 h-[5vh] rounded-br-lg rounded-bl-lg text-white flex justify-center items-center gap-4"
                    style={{ backgroundColor: themeColor }}
                >
                    <Link href="https://github.com/Uscout07"><Icon
                        className="hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer"
                        icon="mdi:github"
                        width="24"
                        height="24"
                    /></Link>
                     <Link href="https://www.linkedin.com/in/udit-pant-20869318b/"><Icon
                        className="hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer"
                        icon="mdi:linkedin"
                        width="24"
                        height="24"
                    /></Link>
                    <Link href="https://www.instagram.com/pantudit007/">
                    <Icon
                        className="hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer"
                        icon="ant-design:instagram-filled"
                        width="24"
                        height="24"
                    />
                    </Link>
                </div>
            </div>

            {/* Hamburger / Cross Icons & Menu */}
            <div className="ml-auto pr-5 relative">
                {/* Hamburger Icon */}
                <Icon
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all duration-300 ease-in-out"
                    style={{ 
                        color: themeColor, 
                        display: showMenu ? "none" : "block" 
                    }}
                    icon="solar:hamburger-menu-outline"
                    width="48"
                    height="48"
                />

                {/* Cross Icon */}
                <Icon
                    onClick={toggleMenu}
                    className="cursor-pointer rounded-full p-2 mr-4 text-white transition-all duration-300 ease-in-out"
                    style={{ 
                        backgroundColor: themeColor,
                        display: showMenu ? "block" : "none",
                        position: isMobile ? "fixed" : "absolute",
                        top: isMobile ? "20px" : "auto",
                        right: isMobile ? "20px" : "0.4rem",
                        zIndex: 60
                    }}
                    icon="gridicons:cross"
                    width="40"
                    height="40"
                />

                {/* Mobile Full Screen Menu */}
                {isMobile && (
                    <div
                        className={`fixed inset-0 bg-white bg-opacity-95 backdrop-blur-md z-50 flex flex-col justify-center items-center transition-all duration-500 ${
                            showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                    >
                        <div className="w-full h-full flex flex-col justify-center items-center gap-8">
                            {/* Social Icons in Menu for Mobile */}
                            <div className="flex gap-6 mb-8">
                                <Link href="https://github.com/Uscout07">
                                    <div className="rounded-full p-3" style={{ backgroundColor: themeColor }}>
                                        <Icon
                                            className="text-white"
                                            icon="mdi:github"
                                            width="28"
                                            height="28"
                                        />
                                    </div>
                                </Link>
                                <Link href="https://www.linkedin.com/in/udit-pant-20869318b/">
                                    <div className="rounded-full p-3" style={{ backgroundColor: themeColor }}>
                                        <Icon
                                            className="text-white"
                                            icon="mdi:linkedin"
                                            width="28"
                                            height="28"
                                        />
                                    </div>
                                </Link>
                                <Link href="https://www.instagram.com/pantudit007/">
                                    <div className="rounded-full p-3" style={{ backgroundColor: themeColor }}>
                                        <Icon
                                            className="text-white"
                                            icon="ant-design:instagram-filled"
                                            width="28"
                                            height="28"
                                        />
                                    </div>
                                </Link>
                            </div>

                            {/* Nav Items */}
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                    toggleMenu();
                                }}
                                className="text-center font-ibm text-[6vh] uppercase relative group"
                            >
                                <span>Home</span>
                                <span 
                                    className="absolute -bottom-2 left-0 w-0 h-1 bg-current group-hover:w-full transition-all duration-300"
                                    style={{ backgroundColor: themeColor }}
                                ></span>
                            </button>
                            
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("profile-section")?.scrollIntoView({ behavior: "smooth" });
                                    toggleMenu();
                                }}
                                className="text-center font-ibm text-[6vh] uppercase relative group"
                            >
                                <span>Profile</span>
                                <span 
                                    className="absolute -bottom-2 left-0 w-0 h-1 bg-current group-hover:w-full transition-all duration-300"
                                    style={{ backgroundColor: themeColor }}
                                ></span>
                            </button>
                            
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
                                    toggleMenu();
                                }}
                                className="text-center font-ibm text-[6vh] uppercase relative group"
                            >
                                <span>Projects</span>
                                <span 
                                    className="absolute -bottom-2 left-0 w-0 h-1 bg-current group-hover:w-full transition-all duration-300"
                                    style={{ backgroundColor: themeColor }}
                                ></span>
                            </button>
                            
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" });
                                    toggleMenu();
                                }}
                                className="text-center font-ibm text-[6vh] uppercase relative group"
                            >
                                <span>Services</span>
                                <span 
                                    className="absolute -bottom-2 left-0 w-0 h-1 bg-current group-hover:w-full transition-all duration-300"
                                    style={{ backgroundColor: themeColor }}
                                ></span>
                            </button>
                            
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
                                    toggleMenu();
                                }}
                                className="text-center font-ibm text-[6vh] uppercase relative group"
                            >
                                <span>Contact</span>
                                <span 
                                    className="absolute -bottom-2 left-0 w-0 h-1 bg-current group-hover:w-full transition-all duration-300"
                                    style={{ backgroundColor: themeColor }}
                                ></span>
                            </button>
                        </div>
                    </div>
                )}

                {/* Desktop Menu - Only show for non-mobile */}
                {!isMobile && (
                    <div
                        className="absolute top-[10vh] right-0 pr-5 flex flex-col font-ibm text-[4vh] gap-[0.5vh] mr-4 px-4 ibm-plex-mono-regular md:mr-4 transition-all duration-300 ease-in-out bg-[#ffffffa0] backdrop-blur-sm"
                        style={{ 
                            borderRightWidth: "2px",
                            borderRightColor: themeColor,
                            display: showMenu ? "flex" : "none"
                        }}
                    >
                        <button onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                                toggleMenu();
                            }}
                            className="text-right hover:scale-110 transition-all duration-300 ease-in-out uppercase cursor-pointer"
                        >
                            Home
                        </button>
                        <button onClick={(e) => {
                                e.preventDefault();
                                document
                                    .getElementById("profile-section")
                                    ?.scrollIntoView({ behavior: "smooth" });
                                toggleMenu();
                            }}
                            className="text-right hover:scale-110 transition-all duration-300 ease-in-out uppercase cursor-pointer"
                        >
                            Profile
                        </button>
                        <button onClick={(e) => {
                                e.preventDefault();
                                document
                                    .getElementById("projects-section")
                                    ?.scrollIntoView({ behavior: "smooth" });
                                toggleMenu();
                            }}
                            className="text-right hover:scale-110 transition-all duration-300 ease-in-out uppercase cursor-pointer"
                        >
                            Projects
                        </button>
                        <button onClick={(e) => {
                                e.preventDefault();
                                document
                                    .getElementById("services-section")
                                    ?.scrollIntoView({ behavior: "smooth" });
                                toggleMenu();
                            }}
                            className="text-right hover:scale-110 transition-all duration-300 ease-in-out uppercase cursor-pointer"
                        >
                            Services
                        </button>
                        <button onClick={(e) => {
                                e.preventDefault();
                                document
                                    .getElementById("contact-section")
                                    ?.scrollIntoView({ behavior: "smooth" });
                                toggleMenu();
                            }}
                            className="text-right hover:scale-110 transition-all duration-300 ease-in-out uppercase cursor-pointer"
                        >
                            Contact
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}