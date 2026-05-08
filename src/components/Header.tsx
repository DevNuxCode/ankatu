import { ShoppingCart, Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onCartOpen: () => void;
  dark: boolean;
  onToggleTheme: () => void;
  onNavigate: (section: string) => void;
}

export default function Header({
  cartCount,
  onCartOpen,
  dark,
  onToggleTheme,
  onNavigate,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate('hero')}
          className="text-xl font-light tracking-[0.3em] text-zinc-900 dark:text-zinc-100 uppercase"
        >
          Ankatu
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {['Productos', 'Blog', 'Contacto'].map((s) => (
            <button
              key={s}
              onClick={() => onNavigate(s.toLowerCase())}
              className="text-sm tracking-wide text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {s}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={onCartOpen}
            className="relative p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Open cart"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-emerald-500 text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-4 flex flex-col gap-3">
          {['Productos', 'Blog', 'Contacto'].map((s) => (
            <button
              key={s}
              onClick={() => {
                onNavigate(s.toLowerCase());
                setMenuOpen(false);
              }}
              className="text-sm tracking-wide text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-left py-2"
            >
              {s}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
