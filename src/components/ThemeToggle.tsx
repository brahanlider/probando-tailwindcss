import { getSystemTheme } from "../lib/theme-utils";
import { useThemeStore } from "../stores/themeStore";
import { themes } from "../types/theme";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  // Extrae del store el tema actual, el efectivo (visual) y el setter
  const { currentTheme, effectiveTheme, setTheme } = useThemeStore();
  // Detecta si es móvil (<768px)
  const [isMobile, setIsMobile] = useState(false);
  // Controla si el menú está abierto (modo escritorio)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //* ⬛ 1. Escuchar si cambia el tema del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => {
      if (currentTheme.value === "system") {
        const newSystemTheme = getSystemTheme();
        document.documentElement.setAttribute("data-theme", newSystemTheme);
        useThemeStore.setState({ effectiveTheme: newSystemTheme });
      }
    };
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [currentTheme.value]);

  //* 📱 2. Detectar si el tamaño de pantalla es móvil
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  //* 📱 3. Versión móvil: solo cambia entre dark/light
  if (isMobile) {
    return (
      <button
        onClick={() => {
          setTheme(effectiveTheme === "dark" ? themes[0] : themes[1]);
        }}
        className="md:hidden relative w-16 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none bg-gray-200 dark:bg-gray-700"
        aria-label={`Switch to ${
          effectiveTheme === "dark" ? "light" : "dark"
        } mode`}
      >
        <div
          className={`absolute top-1 w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center ${
            effectiveTheme === "dark"
              ? "bg-gray-900 translate-x-8"
              : "bg-yellow-300 translate-x-0"
          }`}
        >
          {effectiveTheme === "dark" ? "🌙" : "☀️"}
        </div>
      </button>
    );
  }

  //* 🖥️ 4. Versión escritorio: botón con menú
  return (
    <div className="relative hidden md:block">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Theme menu"
      >
        {currentTheme.icon}
      </button>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {themes.map((theme) => (
              <button
                key={theme.value}
                onClick={() => {
                  setTheme(theme);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center w-full px-4 py-2 text-sm ${
                  currentTheme.value === theme.value
                    ? "bg-primary text-white"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <span className="mr-2">{theme.icon}</span>
                <span>{theme.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
