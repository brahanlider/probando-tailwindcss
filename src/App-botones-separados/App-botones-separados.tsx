// import { useState } from "react";
// import Name from "./Name";

// function App() {
//   const [theme, setTheme] = useState("dark");

//   const themes = [
//     { name: "Light", value: "light" },
//     { name: "Dark", value: "dark" },
//     { name: "Forest", value: "forest" },
//   ];

//   return (
//     <div data-theme={theme} className="min-h-screen p-8 bg-background text-foreground">
//       <Name></Name>
//       <div className="flex gap-4 mb-8">
//         {themes.map((t) => (
//           <button
//             key={t.value}
//             onClick={() => setTheme(t.value)}
//             className={`px-4 py-2 rounded-md ${
//               theme === t.value ? "bg-primary text-black" : "bg-gray-200"
//             }`}
//           >
//             {t.name}
//           </button>
//         ))}
//       </div>

//       <h1 className="text-secondary text-3xl font-bold underline mb-4">
//         Hello world!
//       </h1>
      
//       <div className="p-4 bg-background border border-foreground rounded">
//         <p>Este es un ejemplo de contenido con el tema {theme} aplicado.</p>
//         <button className="mt-2 px-3 py-1 bg-primary text-white rounded">
//           Botón de ejempasdlo
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;