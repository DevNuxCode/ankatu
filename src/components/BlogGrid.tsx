import { useState } from 'react';
import { blogPosts, blogCategories, type BlogCategory, type BlogPost } from '../data/blog';
import BlogCard from './BlogCard';

interface BlogGridProps {
  onRead: (post: BlogPost) => void;
}

export default function BlogGrid({ onRead }: BlogGridProps) {
  const [active, setActive] = useState<BlogCategory>('Todos');

  const filtered =
    active === 'Todos'
      ? blogPosts
      : blogPosts.filter((p) => p.category === active);

  return (
    <section id="blog" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900/30 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.4em] uppercase text-emerald-600 dark:text-emerald-400 font-medium">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-extralight text-zinc-900 dark:text-zinc-100 mt-3">
            Artículos y Guías
          </h2>
          <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-3">
            Tips, rutinas y conocimiento para tu bienestar diario.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs tracking-wide rounded-full transition-all ${
                active === cat
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                  : 'bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} onRead={onRead} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-zinc-400 dark:text-zinc-500 py-12">
            No hay artículos en esta categoría.
          </p>
        )}
      </div>
    </section>
  );
}
