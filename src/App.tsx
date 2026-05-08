import { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import BlogGrid from './components/BlogGrid';
import BlogPost from './components/BlogPost';
import Cart from './components/Cart';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { useCart } from './hooks/useCart';
import { useTheme } from './hooks/useTheme';
import { useSEO } from './hooks/useSEO';
import type { Product } from './data/products';
import type { BlogPost as BlogPostType } from './data/blog';

type View = 'home' | 'blog' | 'blog-post';

function App() {
  const cart = useCart();
  const theme = useTheme();
  const [view, setView] = useState<View>('home');
  const [activePost, setActivePost] = useState<BlogPostType | null>(null);

  const seoConfig =
    view === 'blog'
      ? { title: 'Blog', description: 'Artículos, guías y tips sobre skincare, aromaterapia y bienestar natural.' }
      : activePost
        ? { title: activePost.title, description: activePost.excerpt, image: activePost.image, type: 'article' }
        : {};

  useSEO(seoConfig);

  const navigate = useCallback((section: string) => {
    if (section === 'blog') {
      setView('blog');
      setActivePost(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (view !== 'home') {
      setView('home');
      setActivePost(null);
      requestAnimationFrame(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, [view]);

  const handleReadPost = useCallback((post: BlogPostType) => {
    setActivePost(post);
    setView('blog-post');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToBlog = useCallback(() => {
    setActivePost(null);
    setView('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleAdd = useCallback(
    (product: Product) => {
      cart.addItem(product);
    },
    [cart]
  );

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
      <Header
        cartCount={cart.count}
        onCartOpen={() => cart.setIsOpen(true)}
        dark={theme.dark}
        onToggleTheme={theme.toggle}
        onNavigate={navigate}
      />

      {view === 'home' && (
        <>
          <Hero onNavigate={navigate} />
          <ProductGrid onAdd={handleAdd} />
          <BlogGrid onRead={handleReadPost} />
          <ContactForm />
          <Footer />
        </>
      )}

      {view === 'blog' && (
        <>
          <div className="pt-24">
            <BlogGrid onRead={handleReadPost} />
          </div>
          <Footer />
        </>
      )}

      {view === 'blog-post' && activePost && (
        <>
          <BlogPost post={activePost} onBack={handleBackToBlog} />
          <Footer />
        </>
      )}

      <Cart
        isOpen={cart.isOpen}
        onClose={() => cart.setIsOpen(false)}
        items={cart.items}
        onUpdateQuantity={cart.updateQuantity}
        onRemove={cart.removeItem}
        onClear={cart.clearCart}
        total={cart.total}
        onSendWhatsApp={cart.sendWhatsApp}
      />
    </div>
  );
}

export default App;
