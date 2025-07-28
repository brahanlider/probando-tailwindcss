import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-secondary">Theme Selector</h1>
          <h2 className='text-primary'>Brahan lider Tunquipa</h2>
          <ThemeToggle />
        </header>
        
      </div>
    </div>
  );
}

// }
