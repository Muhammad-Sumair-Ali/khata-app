import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex justify-center items-center md:m-2">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="h-11 w-11 rounded-lg p-2 m-0 hover:text-gray-700 dark:hover:text-gray-300"
      >
        {darkMode ? (
          <FaSun className="text-yellow-500" size={24} />
        ) : (
          <FaMoon className="text-violet-700" size={24} />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
