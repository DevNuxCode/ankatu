import { ArrowLeft, Clock } from 'lucide-react';
import type { BlogPost as BlogPostType } from '../data/blog';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

export default function BlogPost({ post, onBack }: BlogPostProps) {
  const dateFormatted = new Date(post.date).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const paragraphs = post.content.split('\n').filter((line) => line.trim());

  return (
    <article className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Volver al blog
        </button>

        <div className="mb-8">
          <span className="inline-block px-2.5 py-1 text-[10px] tracking-wider uppercase font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-light text-zinc-900 dark:text-zinc-100 leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-xs text-zinc-400 dark:text-zinc-500">
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            <time dateTime={post.date}>{dateFormatted}</time>
            <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            <span className="flex items-center gap-1">
              <Clock size={10} />
              {post.readTime} min
            </span>
          </div>
        </div>

        <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-zinc-100 dark:bg-zinc-800">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose-custom">
          {paragraphs.map((p, i) => {
            const trimmed = p.trim();
            if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
              return (
                <h3
                  key={i}
                  className="text-base font-medium text-zinc-900 dark:text-zinc-100 mt-8 mb-3"
                >
                  {trimmed.replace(/\*\*/g, '')}
                </h3>
              );
            }
            if (trimmed.startsWith('- ')) {
              return (
                <li
                  key={i}
                  className="text-sm text-zinc-600 dark:text-zinc-400 ml-4 mb-1 leading-relaxed"
                >
                  {trimmed.replace(/^- /, '').replace(/\*\*/g, '')}
                </li>
              );
            }
            if (/^\d+\./.test(trimmed)) {
              return (
                <li
                  key={i}
                  className="text-sm text-zinc-600 dark:text-zinc-400 ml-4 mb-1 leading-relaxed list-decimal"
                >
                  {trimmed.replace(/^\d+\.\s*/, '').replace(/\*\*/g, '')}
                </li>
              );
            }
            return (
              <p
                key={i}
                className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4"
              >
                {trimmed.replace(/\*\*/g, '')}
              </p>
            );
          })}
        </div>
      </div>
    </article>
  );
}
