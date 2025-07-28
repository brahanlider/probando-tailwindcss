// import { themes, type Theme } from "./theme";

// type ToggleThemeButtonProps = {
//   currentTheme: Theme;
//   setCurrentTheme: (theme: Theme) => void;
// };

// export const ToggleThemeButton = ({
//   currentTheme,
//   setCurrentTheme,
// }: ToggleThemeButtonProps) => {
//   const isDark = currentTheme.value === "dark";

//   return (
//     <button
//       onClick={() => setCurrentTheme(isDark ? themes[0] : themes[1])}
//       className={`
//         border border-blue-700
//         relative w-16 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
//         isDark ? "bg-gray-700" : "bg-yellow-100"
//       }`}
//       aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
//     >
//       <div
//         className={`absolute top-1 w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center ${
//           isDark ? "bg-gray-900 translate-x-8" : "bg-yellow-300 translate-x-0"
//         }`}
//       >
//         {isDark ? "🌙" : "☀️"}
//       </div>
//     </button>
//   );
// };
