// 1. Función para detectar tema del sistema
export const getSystemTheme = (): 'light' | 'dark' => {
  // 1.1 API para detectar preferencia oscura
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// 2. Aplicar tema inicial al cargar
export const applyInitialTheme = () => {
  // 2.1 Verificar tema guardado
  const savedTheme = localStorage.theme;
  // 2.2 Obtener tema del sistema
  const systemTheme = getSystemTheme();
  
  // 2.3 Determinar tema a aplicar
  const initialTheme = savedTheme === 'system' ? systemTheme : 
                      savedTheme || systemTheme;
  
  // 2.4 Aplicar al documento HTML
  document.documentElement.setAttribute('data-theme', initialTheme);
};
