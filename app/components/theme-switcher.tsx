'use client'
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ThemeSwitcher() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Set mounted to true after component is mounted
    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch
    if (!mounted) {
        return <div className="w-6 h-6"></div>; // Placeholder with same dimensions
    }

    // Use resolvedTheme for more accurate detection
    const currentTheme = theme || resolvedTheme || "light";

    return (
        <button 
            onClick={() => { setTheme(currentTheme === "light" ? "dark" : "light"); }}
            aria-label={`Switch to ${currentTheme === "light" ? "dark" : "light"} mode`}
            className="transition-colors duration-200"
        >
            {currentTheme === "light" ? (
                <Icon icon="solar:moon-bold" className="max-md:text-[5vw] text-[1.6vw]"  />
            ) : (
                <Icon icon="solar:sun-bold"  className="max-md:text-[5vw] text-[1.6vw]" />
            )}
        </button>
    );
}