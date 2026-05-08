import { Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../data/blog';

interface BlogCardProps {
  post: BlogPost;
  onRead: (post: BlogPost) => void;
}

export default function BlogCard({ post, onRead }: BlogCardProps) {
  const dateFormatted = new Date(post.date).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article
      className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-all hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 cursor-pointer"
      onClick={() => onRead(post)}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-50 dark:bg-zinc-800">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] tracking-wider uppercase font-medium bg-white/90 dark:bg-zinc-900/90 text-zinc-600 dark:text-zinc-400 rounded-full backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 text-[11px] text-zinc-400 dark:text-zinc-500 mb-3">
          <time dateTime={post.date}>{dateFormatted}</time>
          <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          <span className="flex items-center gap-1">
            <Clock size={10} />
            {post.readTime} min de lectura
          </span>
        </div>

        <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100 mb-2 line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {post.title}
        </h3>

        <p className="text-xs text-zinc-400 dark:text-zinc-500 line-clamp-2 mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 group-hover:gap-2 transition-all">
          Leer más
          <ArrowRight size={12} />
        </span>
      </div>
    </article>
  );
}
