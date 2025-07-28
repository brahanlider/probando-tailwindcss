import { create } from "zustand";
import { themes, type Theme } from "../types/theme";
import { getSystemTheme } from "../lib/theme-utils";

// 1. Definir tipo para el estado del tema
type ThemeState = {
  currentTheme: Theme; // 1.1 Tema actual
  setTheme: (theme: Theme) => void; // 1.2 Función para cambiar
};

// 2. Crear store con Zustand
export const useThemeStore = create<ThemeState>((set) => ({
  // 2.1 Estado inicial (usar guardado o sistema)
  currentTheme: themes.find((t) => t.value === localStorage.theme) || themes[2],

  // 2.2 Función para cambiar tema
  setTheme: (theme) => {
    if (theme.value === "system") {
      localStorage.removeItem("theme"); // 2.3 No guardar 'system'
    } else {
      localStorage.theme = theme.value; // 2.4 Guardar preferencia
    }

    set({ currentTheme: theme }); // 2.5 Actualizar estado

    // 2.6 Aplicar al documento HTML
    document.documentElement.setAttribute(
      "data-theme",
      theme.value === "system" ? getSystemTheme() : theme.value
    );
  },
}));
