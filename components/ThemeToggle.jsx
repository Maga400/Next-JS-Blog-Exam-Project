"use client";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-[60px] h-[30px] rounded-full bg-gray-300 dark:bg-gray-700 relative transition-colors duration-300"
    >
      <div
        className={`w-[24px] h-[24px] rounded-full bg-white absolute top-[3px] transition-all duration-300 ${
          isDark ? "left-[32px]" : "left-[3px]"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
