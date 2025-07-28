// import { useState } from 'react';
// import { themes, type Theme } from './theme';
// import Name from './Name';
// import { ToggleThemeButton } from './ToggleThemeButton';

// export default function App() {
//   const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

//   return (
//     <div data-theme={currentTheme.value} className="min-h-screen p-8 bg-background">
//       <Name />
//       <div className="max-w-3xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Theme Selector</h1>
//           <ToggleThemeButton 
//             currentTheme={currentTheme} 
//             setCurrentTheme={setCurrentTheme} 
//           />
//         </div>
        
//         <div className="flex gap-4 mb-8">
//           {themes.map(theme => (
//             <button
//               key={theme.value}
//               onClick={() => setCurrentTheme(theme)}
//               className={`p-2 rounded-md transition-colors ${
//                 currentTheme.value === theme.value 
//                   ? 'bg-primary text-white' 
//                   : 'bg-gray-200 hover:bg-gray-300'
//               }`}
//             >
//               {theme.name}
//             </button>
//           ))}
//         </div>

//         <div className="p-6 border border-foreground/20 rounded-lg">
//           <h2 className="text-xl font-bold mb-3">Theme Preview</h2>
//           <p className="mb-4">Current theme: <span className="font-semibold text-secondary">{currentTheme.name}</span></p>
          
//           <div className="flex gap-4">
//             <button className="bg-primary text-white px-4 py-2 rounded">
//               Primary Button
//             </button>
//             <button className="border-2 border-secondary text-secondary px-4 py-2 rounded">
//               Secondary Button
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }