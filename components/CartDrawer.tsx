import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  const handleViewBag = () => {
    onClose();
    navigate('/cart');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="cart-title" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      
      <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
        <div className="h-full w-full bg-white shadow-xl flex flex-col animate-slideInRight">
          
          <div className="px-6 py-6 border-b flex justify-between items-center bg-black text-white">
            <h2 id="cart-title" className="text-xl font-heading font-bold uppercase tracking-wider">Your Bag ({cart.length})</h2>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-white/20 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close cart"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 mb-4">Your bag is empty.</p>
                <button onClick={onClose} className="text-black font-bold underline hover:text-gray-700">
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-gray-100 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-sm uppercase leading-tight">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id, item.selectedSize)} 
                        className="text-gray-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded p-1"
                        aria-label={`Remove ${item.name} size ${item.selectedSize} from cart`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">{item.category} • Size: {item.selectedSize}</p>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border border-gray-300">
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                          className="px-2 py-1 hover:bg-gray-100 disabled:opacity-50"
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-sm font-bold" aria-label={`Quantity: ${item.quantity}`}>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                          className="px-2 py-1 hover:bg-gray-100"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-bold">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t p-6 bg-gray-50">
              <div className="flex justify-between mb-4 text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-bold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-6 text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-600 font-bold">FREE</span>
              </div>
              <div className="flex justify-between mb-6 text-xl font-bold font-heading uppercase">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                 <button 
                  onClick={handleViewBag}
                  className="w-full border border-black text-black py-4 font-bold uppercase tracking-widest hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-black"
                >
                  View Bag
                </button>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-900 transition flex justify-center items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Checkout <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};