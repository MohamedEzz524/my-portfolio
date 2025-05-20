import { useEffect, useState } from "react";
import { FaPalette, FaMoon, FaSun } from "react-icons/fa";
import Label from "./Label";

export default function Themes() {
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") || "light";
    } else return "color-light";
  });

  const handleTheme = (themeType) => {
    if (themeType === "basic") {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    } else if (themeType === "colored") {
      setTheme((prevTheme) =>
        prevTheme === "color-light" ? "color-dark" : "color-light"
      );
    } else return;
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="fixed left-0 top-0 inline-flex  gap-4 z-20  bg-[var(--footer-bg)] shadow-md backdrop:blur-cardBlur p-2 text-white">
      <button
        className={`cursor-pointer relative group sm:p-2 p-1.5 inline-flex items-center rounded-full shadow-[0_10px_24px_var(--shadow)] ${
          theme === "light"
            ? "bg-gradient-to-r from-[#222222] to-[#111]"
            : "bg-gradient-to-r from-[#bdbdbd]  to-[#9e9e9e]"
        }`}
        onClick={() => handleTheme("basic")}
        role="img"
        aria-label="theme-toggle"
      >
        <Label text="Monochrome" />

        <span className="group-hover:rotate-45 main-trans">
          {theme === "light" ? (
            <FaMoon className="text-lg sm:text-2xl" />
          ) : (
            <FaSun className="text-lg sm:text-2xl" />
          )}
        </span>
      </button>
      <button
        className={`cursor-pointer relative group inline-flex items-center sm:p-2 p-1.5 rounded-xl shadow-[0_10px_24px_var(--shadow)] ${
          theme === "color-light"
            ? "bg-gradient-to-r from-[#1a1a1a] to-[#39ff14]"
            : "bg-gradient-to-r from-[#c8e6c9] to-[#a5d6a7] "
        }`}
        onClick={() => handleTheme("colored")}
      >
        <Label text="Fancy" />
        <span
          role="img"
          aria-label="color-theme"
          className="group-hover:rotate-45 main-trans"
        >
          <FaPalette className="text-lg sm:text-2xl" />
        </span>
      </button>
    </div>
  );
}
