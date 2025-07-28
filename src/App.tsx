import { useEffect } from "react";
import { applyInitialTheme, getSystemTheme } from "./lib/theme-utils";
import { ThemeToggle } from "./components/ThemeToggle";
import { useThemeStore } from "./stores/themeStore";

// 1. Componente principal
export default function App() {
  // 1.1 Obtener tema actual
  const { currentTheme } = useThemeStore();

  // 1.2 Efecto para configurar tema inicial
  useEffect(() => {
    applyInitialTheme(); // 1.3 Aplicar tema guardado/sistema

    // 1.4 Escuchar cambios en el tema del sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => {
      // 1.5 Solo actualizar si está en modo sistema
      if (currentTheme.value === "system") {
        document.documentElement.setAttribute(
          "data-theme",
          mediaQuery.matches ? "dark" : "light"
        );
      }
    };
    mediaQuery.addEventListener("change", listener);

    // 1.6 Limpiar listener al desmontar
    return () => mediaQuery.removeEventListener("change", listener);
  }, [currentTheme.value]);

  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* 2. Encabezado con selector de tema */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Theme Selector</h1>
          <ThemeToggle /> {/* 2.1 Componente de toggle */}
        </div>

        {/* 3. Vista previa del tema */}
        <div className="p-6 border border-foreground/20 rounded-lg">
          <h2 className="text-xl font-bold mb-3">Theme Preview</h2>
          <p className="mb-4">
            Current theme:{" "}
            <span className="font-semibold text-secondary">
              {currentTheme.name} {/* 3.1 Nombre del tema */}
              {currentTheme.value === "system" && `(${getSystemTheme()})`}{" "}
              {/* 3.2 Mostrar tema del sistema si aplica */}
            </span>
          </p>

          {/* 3.3 Botones de ejemplo */}
          <div className="flex gap-4">
            <button className="bg-primary text-white px-4 py-2 rounded">
              Primary Button
            </button>
            <button className="border-2 border-secondary text-secondary px-4 py-2 rounded">
              Secondary Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
