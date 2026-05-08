import { useState } from 'react';
import { products, categories, type Category } from '../data/products';
import ProductCard from './ProductCard';
import type { Product } from '../data/products';

interface ProductGridProps {
  onAdd: (product: Product) => void;
}

export default function ProductGrid({ onAdd }: ProductGridProps) {
  const [active, setActive] = useState<Category>('Todos');

  const filtered =
    active === 'Todos'
      ? products
      : products.filter((p) => p.category === active);

  return (
    <section id="productos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.4em] uppercase text-emerald-600 dark:text-emerald-400 font-medium">
            Catálogo
          </span>
          <h2 className="text-3xl md:text-4xl font-extralight text-zinc-900 dark:text-zinc-100 mt-3">
            Nuestros Productos
          </h2>
        </div>

        <div id="categorias" className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs tracking-wide rounded-full transition-all ${
                active === cat
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-zinc-400 dark:text-zinc-500 py-12">
            No hay productos en esta categoría.
          </p>
        )}
      </div>
    </section>
  );
}
