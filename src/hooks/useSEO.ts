import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function useSEO({
  title,
  description,
  image,
  type = 'website',
}: SEOProps = {}) {
  useEffect(() => {
    const siteName = 'Asuka';
    const defaultDesc =
      'Tienda de esencias, aromas, skincare y cuidado corporal natural. Productos artesanales para tu bienestar.';
    const defaultImage =
      'https://images.pexels.com/photos/6262402/pexels-photo-6262402.jpeg?auto=compress&cs=tinysrgb&w=1200';

    const t = title ? `${title} | ${siteName}` : `${siteName} - Esencias, Aromas y Skincare Natural`;
    const d = description || defaultDesc;
    const img = image || defaultImage;

    document.title = t;

    const setMeta = (prop: string, content: string) => {
      const el = document.querySelector(`meta[${prop}]`) as HTMLMetaElement | null;
      if (el) el.content = content;
    };

    setMeta('name', d); // description
    setMeta('property="og:title"', t);
    setMeta('property="og:description"', d);
    setMeta('property="og:image"', img);
    setMeta('property="og:type"', type);
    setMeta('name="twitter:title"', t);
    setMeta('name="twitter:description"', d);
    setMeta('name="twitter:image"', img);
  }, [title, description, image, type]);
}
