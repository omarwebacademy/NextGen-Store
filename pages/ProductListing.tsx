import React, { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { SortOption } from '../types';
import { Filter } from 'lucide-react';
import { SEO } from '../components/SEO';

interface ProductListingProps {
  categoryOverride?: string;
}

export const ProductListing: React.FC<ProductListingProps> = ({ categoryOverride }) => {
  const { products } = useStore();
  const params = useParams<{ category?: string; sport?: string }>();
  const location = useLocation();

  // Use override if provided, otherwise fall back to URL params
  const category = categoryOverride || params.category;
  const { sport } = params;

  const [sortBy, setSortBy] = useState<SortOption>(SortOption.NEWEST);

  // Determine current context
  const isSportContext = location.pathname.includes('/sports/');
  const title = isSportContext ? sport : category;
  const displayTitle = title ? title.replace(/-/g, ' ') : 'Products';

  // Filter logic
  const filteredProducts = products.filter(p => {
    if (isSportContext) {
      if (!sport) return true;
      // Case-insensitive comparison for sport
      return p.sport?.toLowerCase() === sport.toLowerCase();
    }
    
    // Product Category Logic
    const normalizedCategory = category?.toLowerCase();

    switch (normalizedCategory) {
      case 'shoes': return p.type === 'Shoes';
      case 'clothing': return p.type === 'Apparel';
      case 'accessories': return p.type === 'Gear';
      case 'new-arrivals': return p.new === true;
      case 'best-sellers': return p.bestseller === true;
      default: return true;
    }
  }).sort((a, b) => {
    if (sortBy === SortOption.PRICE_LOW) return a.price - b.price;
    if (sortBy === SortOption.PRICE_HIGH) return b.price - a.price;
    if (sortBy === SortOption.POPULAR) return b.reviews - a.reviews;
    return 0; 
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-[60vh]">
      <SEO 
        title={displayTitle.charAt(0).toUpperCase() + displayTitle.slice(1)} 
        description={`Shop the latest ${displayTitle} collection at Adidas NextGen. Find the best deals on premium gear.`}
        keywords={[displayTitle, 'adidas', 'sports', 'shop']}
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-200 pb-6">
        <div>
           <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
             {isSportContext ? 'Sport' : 'Category'}
           </div>
           <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-2 capitalize leading-none">
             {displayTitle}
           </h1>
           {/* Aria-live region for screen readers to announce result count changes */}
           <p className="text-gray-600 font-medium" aria-live="polite">
             {filteredProducts.length} items found
           </p>
        </div>
        
        <div className="flex gap-4 mt-6 md:mt-0 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
             <label htmlFor="sort-select" className="sr-only">Sort products by</label>
             <select 
              id="sort-select"
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="appearance-none w-full bg-white border border-gray-300 text-black font-bold uppercase text-xs tracking-wider py-3 pl-4 pr-10 hover:border-black focus:outline-none focus:ring-1 focus:ring-black transition cursor-pointer"
            >
              {Object.values(SortOption).map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <Filter className="w-4 h-4 absolute right-3 top-3 pointer-events-none" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
        {filteredProducts.map(product => (
          <article key={product.id} className="group cursor-pointer">
            <Link to={`/product/${product.id}`} className="block focus:outline-none focus:ring-4 focus:ring-blue-500 rounded">
              <div className="relative overflow-hidden bg-gray-100 mb-4 aspect-[1/1]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply transition duration-700 ease-in-out group-hover:scale-110" 
                  loading="lazy"
                />
                
                {/* Badges */}
                <div className="absolute top-0 left-0 p-2 flex flex-col gap-1">
                  {product.new && <span className="bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">New</span>}
                  {product.bestseller && <span className="bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">Best Seller</span>}
                </div>

                {/* Hover UI */}
                <div className="absolute inset-x-0 bottom-0 bg-white/95 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out border-t border-gray-100" aria-hidden="true">
                   <div className="flex justify-between items-center">
                     <span className="font-heading font-bold text-lg">${product.price}</span>
                     <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Quick View</span>
                   </div>
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-xs text-gray-500 uppercase tracking-wide">{product.category} • {product.sport || product.type}</p>
                <h3 className="font-heading font-bold text-lg uppercase leading-tight group-hover:underline decoration-2 underline-offset-4">{product.name}</h3>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
         <div className="py-24 text-center bg-gray-50 mt-8" role="status">
            <h2 className="text-2xl font-heading font-bold uppercase mb-4">No products found</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">We couldn't find any matches for this category. Try adjusting your filters or check out our new arrivals.</p>
            <Link to="/products/new-arrivals" className="inline-block bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition focus:ring-4 focus:ring-blue-500">
              Browse New Arrivals
            </Link>
         </div>
      )}
    </div>
  );
};