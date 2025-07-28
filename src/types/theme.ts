//* 1. Definimos el tipo Theme
export type Theme = {
  name: string;
  value: "light" | "dark" | "system";
  icon: string;
};

//* 2. Lista de temas disponibles
export const themes: Theme[] = [
  { name: "Light", value: "light", icon: "☀️" },
  { name: "Dark", value: "dark", icon: "🌙" },
  { name: "System", value: "system", icon: "🖥️" },
];
