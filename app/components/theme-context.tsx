'use client';
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

// Custom hook that safely handles theme with mounted state
export default function useThemeSafety() {
  const { theme, setTheme, resolvedTheme, ...rest } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Helper to determine if we're in dark mode
  const isDark = mounted ? (theme === 'dark' || resolvedTheme === 'dark') : false;
  
  return {
    theme,
    setTheme,
    resolvedTheme,
    mounted,
    isDark,
    ...rest
  };
}