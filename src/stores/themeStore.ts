import { create } from "zustand";
import { persist } from "zustand/middleware";
import { themes, type Theme } from "../types/theme";
import { getSystemTheme } from "../lib/theme-utils";

type ThemeState = {
  currentTheme: Theme; // El tema seleccionado (light, dark, system)
  effectiveTheme: "light" | "dark"; // Tema real que se aplica
  setTheme: (theme: Theme) => void; // Cambia el tema
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      currentTheme: themes[2], // Default a system
      effectiveTheme: getSystemTheme(), // Tema real aplicado

      setTheme: (theme) => {
        const newEffectiveTheme =
          theme.value === "system" ? getSystemTheme() : theme.value;

        // Aplica el tema al HTML
        document.documentElement.setAttribute("data-theme", newEffectiveTheme);
        // Actualiza el estado
        set({
          currentTheme: theme,
          effectiveTheme: newEffectiveTheme,
        });
      },
    }),
    {
      name: "theme-storage", // clave en localStorage
      partialize: (state) => ({ currentTheme: state.currentTheme }), // Solo guarda esto
    }
  )
);

// Inicialización sincrónica al cargar el store
const initializeTheme = () => {
  const storeState = useThemeStore.getState();
  const effective =
    storeState.currentTheme.value === "system"
      ? getSystemTheme()
      : storeState.currentTheme.value;

  document.documentElement.setAttribute("data-theme", effective);
  useThemeStore.setState({ effectiveTheme: effective });
};

initializeTheme(); // Llama al cargar
