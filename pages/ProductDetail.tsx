import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ArrowRight, Heart, AlertTriangle } from 'lucide-react';
import { SEO } from '../components/SEO';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getProduct } = useStore();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  
  const product = id ? getProduct(id) : undefined;

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isAdding, setIsAdding] = useState(false);

  if (!product) return <div className="p-20 text-center" role="alert">Product not found</div>;

  const isLiked = id ? isInWishlist(id) : false;
  const isOutOfStock = product.stock <= 0;
  const isLowStock = product.stock > 0 && product.stock < 5;

  const handleAdd = () => {
    if(!selectedSize) {
      alert("Please select a size");
      return;
    }
    setIsAdding(true);
    addToCart(product, selectedSize); 
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <SEO 
        title={product.name} 
        description={product.description}
        image={product.image}
        type="product"
        keywords={[product.category, product.type, product.sport || '', ...product.features]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image Section */}
        <div className="bg-gray-100 h-[600px] w-full relative group" aria-label={`Image of ${product.name}`}>
           <img 
             src={product.image} 
             alt={product.name} 
             className={`w-full h-full object-cover mix-blend-multiply ${isOutOfStock ? 'grayscale opacity-70' : ''}`} 
           />
           <button 
              onClick={() => id && toggleWishlist(id)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-black z-10"
              aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
              aria-pressed={isLiked}
           >
             <Heart className={`w-5 h-5 ${isLiked ? 'fill-black text-black' : 'text-black'}`} />
           </button>
           <div className="absolute bottom-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase shadow-sm">
             {product.reviews} Reviews
           </div>
           
           {isOutOfStock && (
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-white/90 px-8 py-4 text-2xl font-heading font-bold uppercase border-2 border-black transform -rotate-12">
                 Sold Out
               </div>
             </div>
           )}
        </div>
        
        {/* Product Details Section */}
        <div className="flex flex-col justify-center">
          <div className="flex justify-between items-start mb-4">
            <span className="text-gray-500 uppercase tracking-widest text-sm">{product.category} / {product.type}</span>
            <div className="flex text-yellow-500 text-sm" role="img" aria-label={`Rated ${product.rating} out of 5 stars`}>
               <span aria-hidden="true">{'★'.repeat(Math.round(product.rating))}</span>
               <span className="text-gray-300" aria-hidden="true">{'★'.repeat(5 - Math.round(product.rating))}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4 leading-none">{product.name}</h1>
          <p className="text-2xl font-bold mb-8">${product.price}</p>
          
          {isLowStock && (
            <div className="bg-orange-50 border border-orange-200 p-3 mb-6 flex items-center gap-2 rounded text-orange-800 text-sm font-bold animate-pulse" role="status">
               <AlertTriangle className="w-4 h-4" aria-hidden="true" /> Hurry! Only {product.stock} left in stock.
            </div>
          )}

          <p className="text-gray-700 mb-8 leading-relaxed">
            {product.description}
          </p>

          {!isOutOfStock && (
            <div className="mb-8">
              <h3 className="font-bold uppercase text-sm mb-4" id="size-label">Select Size</h3>
              <div className="grid grid-cols-4 gap-2" role="group" aria-labelledby="size-label">
                {['XS', 'S', 'M', 'L', 'XL', '2XL'].map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    aria-pressed={selectedSize === size}
                    className={`py-3 text-sm font-bold border transition focus:outline-none focus:ring-2 focus:ring-black ${
                      selectedSize === size 
                      ? 'bg-black text-white border-black' 
                      : 'bg-white text-black border-gray-200 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4">
             <button 
                onClick={handleAdd}
                disabled={isOutOfStock || isAdding}
                aria-busy={isAdding}
                className={`flex-1 py-4 font-bold uppercase tracking-widest transition flex justify-center items-center gap-2 focus:outline-none focus:ring-2 focus:ring-black ${
                  isOutOfStock 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : isAdding 
                      ? 'bg-green-600 text-white' 
                      : 'bg-black text-white hover:bg-gray-800'
                }`}
             >
               {isOutOfStock ? 'Out of Stock' : isAdding ? 'Added' : 'Add to Bag'} <ArrowRight className="w-5 h-5" aria-hidden="true" />
             </button>
             <button 
                onClick={() => id && toggleWishlist(id)}
                className={`p-4 border transition focus:outline-none focus:ring-2 focus:ring-black ${
                  isLiked ? 'bg-black text-white border-black' : 'border-gray-200 hover:border-black'
                }`}
                aria-label={isLiked ? "Remove from Wishlist" : "Add to Wishlist"}
                aria-pressed={isLiked}
             >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-white' : ''}`} aria-hidden="true" />
             </button>
          </div>

          <div className="mt-12 border-t pt-8">
            <h3 className="font-bold uppercase text-sm mb-4">Highlights</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
               {product.features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};