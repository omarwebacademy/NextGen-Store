import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { SEO } from '../components/SEO';

export const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 animate-fadeIn">
        <SEO title="Shopping Bag" />
        <h1 className="text-4xl font-heading font-bold uppercase mb-4">Your Bag is Empty</h1>
        <p className="text-gray-600 mb-8 max-w-md">Once you add something to your bag, it will appear here. Ready to get started?</p>
        <Link to="/" className="bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition flex items-center gap-2 focus:ring-4 focus:ring-blue-500">
          Start Shopping <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
      <SEO title="Shopping Bag" description="View items in your shopping bag and proceed to checkout." />
      <h1 className="text-4xl font-heading font-bold uppercase mb-8">Your Bag <span className="text-gray-500">({cart.reduce((a,c) => a + c.quantity, 0)} items)</span></h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="flex-1 space-y-6">
          {cart.map((item) => (
            <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6 border border-gray-200 p-4 rounded-lg bg-white shadow-sm">
              <div className="w-32 h-32 bg-gray-100 flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-heading font-bold text-lg uppercase leading-tight mb-1">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.category} • {item.type}</p>
                    <p className="text-gray-500 text-sm">Size: <span className="font-bold text-black">{item.selectedSize}</span></p>
                  </div>
                  <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <div className="flex justify-between items-end mt-4">
                   <div className="flex items-center border border-gray-300 rounded">
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                        className="p-2 hover:bg-gray-100 disabled:opacity-50 transition"
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 font-bold text-sm w-12 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                        className="p-2 hover:bg-gray-100 transition"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                   </div>
                   
                   <button 
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                      className="text-gray-400 hover:text-red-600 transition underline text-sm flex items-center gap-1"
                   >
                     <Trash2 className="w-4 h-4" /> Remove
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="w-full lg:w-96">
          <div className="bg-gray-50 p-8 rounded-lg sticky top-24 border border-gray-100">
            <h2 className="text-2xl font-heading font-bold uppercase mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Original Price</span>
                <span className="font-bold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery</span>
                <span className="text-green-600 font-bold">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (estimated)</span>
                <span className="font-bold">${(cartTotal * 0.08).toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mb-8 flex justify-between items-center">
              <span className="font-heading font-bold text-xl uppercase">Total</span>
              <span className="font-heading font-bold text-xl">${(cartTotal * 1.08).toFixed(2)}</span>
            </div>

            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-900 transition flex justify-center items-center gap-2 group mb-4 focus:ring-4 focus:ring-blue-500"
            >
              Checkout <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
            
            <div className="text-xs text-gray-500 text-center">
              <p className="mb-2">Accepted Payment Methods</p>
              <div className="flex justify-center gap-2 opacity-60">
                <span>VISA</span>
                <span>Mastercard</span>
                <span>Amex</span>
                <span>PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
