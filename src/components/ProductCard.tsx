import { Plus } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  const formatPrice = (p: number) =>
    `$${p.toLocaleString('es-CL')}`;

  return (
    <div className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-all hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50">
      <div className="relative aspect-square overflow-hidden bg-zinc-50 dark:bg-zinc-800">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] tracking-wider uppercase font-medium bg-white/90 dark:bg-zinc-900/90 text-zinc-600 dark:text-zinc-400 rounded-full backdrop-blur-sm">
          {product.category}
        </span>
        {product.stock <= 5 && product.stock > 0 && (
          <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] tracking-wider uppercase font-medium bg-amber-500/90 text-white rounded-full backdrop-blur-sm">
            Últimas unidades
          </span>
        )}
        {product.stock === 0 && (
          <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] tracking-wider uppercase font-medium bg-red-500/90 text-white rounded-full backdrop-blur-sm">
            Agotado
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => onAdd(product)}
            disabled={product.stock === 0}
            className="p-2 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-emerald-600 dark:hover:bg-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
