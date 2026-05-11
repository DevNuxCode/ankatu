import { Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white dark:from-zinc-900 dark:to-zinc-950 transition-colors" />
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-200 dark:bg-emerald-900 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-200 dark:bg-teal-900 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles size={16} className="text-emerald-500" />
          <span className="text-xs tracking-[0.4em] uppercase text-emerald-600 dark:text-emerald-400 font-medium">
            Cuidado natural
          </span>
          <Sparkles size={16} className="text-emerald-500" />
        </div>

        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
          Asuka
        </h1>

        <p className="text-lg md:text-xl font-light text-zinc-500 dark:text-zinc-400 mb-10 leading-relaxed">
          Esencias, aromas y skincare que conectan tu cuerpo con la naturaleza.
          Productos artesanales para tu bienestar diario.
        </p>

        <button
          onClick={() => onNavigate('productos')}
          className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm tracking-wide rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-all"
        >
          Ver productos
        </button>
      </div>
    </section>
  );
}
