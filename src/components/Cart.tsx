import { X, Minus, Plus, Trash2, MessageCircle } from 'lucide-react';
import type { CartItem } from '../hooks/useCart';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
  onClear: () => void;
  total: number;
  onSendWhatsApp: () => void;
}

export default function Cart({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
  onClear,
  total,
  onSendWhatsApp,
}: CartProps) {
  const formatPrice = (p: number) => `$${p.toLocaleString('es-CL')}`;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white dark:bg-zinc-900 shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b border-zinc-100 dark:border-zinc-800">
            <h2 className="text-lg font-light tracking-wide text-zinc-900 dark:text-zinc-100">
              Carrito
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Close cart"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 && (
              <p className="text-center text-zinc-400 dark:text-zinc-500 py-12 text-sm">
                Tu carrito está vacío
              </p>
            )}

            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                    {item.product.name}
                  </h3>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                    {formatPrice(item.product.price)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="p-1 rounded-md bg-white dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-600 transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100 w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="p-1 rounded-md bg-white dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-600 transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => onRemove(item.product.id)}
                    className="p-1 text-zinc-300 dark:text-zinc-600 hover:text-red-400 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={14} />
                  </button>
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {items.length > 0 && (
            <div className="border-t border-zinc-100 dark:border-zinc-800 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  Total
                </span>
                <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {formatPrice(total)}
                </span>
              </div>

              <button
                onClick={onSendWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium tracking-wide rounded-xl transition-colors"
              >
                <MessageCircle size={18} />
                Comprar por WhatsApp
              </button>

              <button
                onClick={onClear}
                className="w-full py-2.5 text-xs text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                Vaciar carrito
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
