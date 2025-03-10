'use client';
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function Navhead({ themeColor =""}) {
    const logoText = `<u>`; 
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
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
            <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
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
                    className="cursor-pointer rounded-full p-2 text-white transition-all duration-300 ease-in-out"
                    style={{ 
                        backgroundColor: themeColor,
                        display: showMenu ? "block" : "none" 
                    }}
                    icon="gridicons:cross"
                    width="40"
                    height="40"
                />

                {/* Menu */}
                <div
                    className="absolute top-[10vh] right-0 pr-5 flex flex-col font-ibm text-[4vh] gap-[0.5vh] px-4 ibm-plex-mono-regular mr-4 transition-all duration-300 ease-in-out"
                    style={{ 
                        borderRightWidth: "2px",
                        borderRightColor: themeColor,
                        display: showMenu ? "flex" : "none"
                    }}
                >
                    <Link href="#" className="text-right hover:scale-110 transition-all duration-300 ease-in-out uppercase cursor-pointer">Home</Link>
                    <Link href="#profile-section" className="text-right hover:scale-110 transition-all duration-300 ease-in-out uppercase cursor-pointer">Profile</Link>
                    <Link href="" className="text-right hover:scale-110 transition-all duration-300 ease-in-out uppercase cursor-pointer">Projects</Link>
                    <Link href="#services-section" className="text-right hover:scale-110 transition-all duration-300 ease-in-out uppercase cursor-pointer">Services</Link>
                    <Link href="#contact-section" className="text-right hover:scale-110 transition-all duration-300 ease-in-out uppercase cursor-pointer">Contact</Link>
                </div>
            </div>
        </div>
    );
}