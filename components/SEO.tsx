import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  type?: 'website' | 'product' | 'article';
  keywords?: string[];
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image, 
  type = 'website',
  keywords = [],
  noindex = false
}) => {
  const location = useLocation();
  const siteUrl = window.location.origin;
  const currentUrl = `${siteUrl}${location.pathname}`;
  const defaultImage = `https://picsum.photos/seed/adidas1/1200/630`; // Fallback image
  const fullTitle = `${title} | NextGen Store`;
  const metaDescription = description || 'Shop premium sports gear, shoes, and clothing at NextGen Store. Experience AI-powered styling and exclusive drops.';

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const updateMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update link tags (canonical)
    const updateLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    updateMeta('description', metaDescription);
    updateMeta('keywords', ['adidas', 'sports', 'running', 'fashion', 'nextgen', ...keywords].join(', '));
    updateMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // 3. Open Graph (Facebook/LinkedIn)
    updateMeta('og:title', fullTitle, 'property');
    updateMeta('og:description', metaDescription, 'property');
    updateMeta('og:type', type, 'property');
    updateMeta('og:url', currentUrl, 'property');
    updateMeta('og:image', image || defaultImage, 'property');
    updateMeta('og:site_name', 'NextGen Store', 'property');

    // 4. Twitter Cards
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', metaDescription);
    updateMeta('twitter:image', image || defaultImage);

    // 5. Canonical URL
    updateLink('canonical', currentUrl);

  }, [fullTitle, metaDescription, image, type, currentUrl, keywords, noindex]);

  return null;
};