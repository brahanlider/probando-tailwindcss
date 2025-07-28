import { create } from "zustand";
import { persist } from "zustand/middleware";
import { themes, type Theme } from "../types/theme";
import { getSystemTheme } from "../lib/theme-utils";

type ThemeState = {
  currentTheme: Theme;
  effectiveTheme: 'light' | 'dark'; // Tema visual actual
  setTheme: (theme: Theme) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      currentTheme: themes[2], // Default a system
      effectiveTheme: getSystemTheme(), // Tema real aplicado
      
      setTheme: (theme) => {
        const newEffectiveTheme = theme.value === 'system' 
          ? getSystemTheme() 
          : theme.value;
        
        document.documentElement.setAttribute('data-theme', newEffectiveTheme);
        
        set({ 
          currentTheme: theme,
          effectiveTheme: newEffectiveTheme
        });
      },
    }),
    {
      name: 'theme-storage',
      partialize: (state) => ({ currentTheme: state.currentTheme }),
    }
  )
);

// Inicialización sincrónica al cargar el store
const initializeTheme = () => {
  const storeState = useThemeStore.getState();
  const effective = storeState.currentTheme.value === 'system'
    ? getSystemTheme()
    : storeState.currentTheme.value;
  
  document.documentElement.setAttribute('data-theme', effective);
  useThemeStore.setState({ effectiveTheme: effective });
};

initializeTheme();
