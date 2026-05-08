import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-zinc-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <span className="text-lg font-light tracking-[0.3em] uppercase text-zinc-900 dark:text-zinc-100">
            Ankatu
          </span>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
            Esencias, aromas y skincare natural
          </p>
        </div>

        <p className="text-xs text-zinc-400 dark:text-zinc-500 flex items-center gap-1">
          Hecho con <Heart size={10} className="text-emerald-500" /> en Chile
        </p>
      </div>
    </footer>
  );
}
