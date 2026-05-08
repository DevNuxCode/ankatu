import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = '56978104789';
    const text = [
      `Hola Ankatu!`,
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Mensaje: ${message}`,
    ].join('\n');

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900/50 transition-colors">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.4em] uppercase text-emerald-600 dark:text-emerald-400 font-medium">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-extralight text-zinc-900 dark:text-zinc-100 mt-3">
            Escríbenos
          </h2>
          <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-3">
            ¿Tienes dudas o necesitas asesoría? Envíanos un mensaje.
          </p>
        </div>

        <form onSubmit={sendWhatsApp} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5 tracking-wide">
              Nombre
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-300 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5 tracking-wide">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-300 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5 tracking-wide">
              Mensaje
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-300 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors resize-none"
              placeholder="Tu mensaje..."
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium tracking-wide rounded-xl transition-colors"
          >
            <MessageCircle size={18} />
            Enviar por WhatsApp
          </button>

          <p className="text-center text-[11px] text-zinc-400 dark:text-zinc-600 flex items-center justify-center gap-1">
            <Send size={10} />
            Se abrirá WhatsApp con tu mensaje
          </p>
        </form>
      </div>
    </section>
  );
}
