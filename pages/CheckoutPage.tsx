import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useStore } from '../context/StoreContext';
import { useAuth } from '../context/AuthContext';
import { Lock, CreditCard, Truck, AlertOctagon } from 'lucide-react';
import { SEO } from '../components/SEO';

export const CheckoutPage = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const { createOrder } = useStore();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    country: 'United States',
    email: user?.email || '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart');
    }
  }, [cart, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    // Simulate Payment Processing Delay
    setTimeout(() => {
      const finalTotal = cartTotal * 1.08; // Including Tax
      
      // Attempt to create order (transactional)
      const success = createOrder(cart, finalTotal, user);

      if (success) {
        clearCart();
        setIsProcessing(false);
        navigate('/order-confirmation');
      } else {
        setIsProcessing(false);
        setError("One or more items in your cart are no longer available in the requested quantity. Please update your cart.");
      }
    }, 2000);
  };

  const tax = cartTotal * 0.08;
  const total = cartTotal + tax;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
      <SEO title="Checkout" description="Complete your purchase securely." />
      <h1 className="text-4xl font-heading font-bold uppercase mb-8">Checkout</h1>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 mb-6 rounded-lg flex items-center gap-3">
          <AlertOctagon className="w-5 h-5" />
          <p className="font-bold">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Shipping Details */}
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold uppercase mb-6 flex items-center gap-2">
                <Truck className="w-5 h-5" aria-hidden="true" /> Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="firstName" className="block text-xs font-bold uppercase text-gray-500 mb-1">First Name</label>
                   <input required id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none transition" />
                 </div>
                 <div>
                   <label htmlFor="lastName" className="block text-xs font-bold uppercase text-gray-500 mb-1">Last Name</label>
                   <input required id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none transition" />
                 </div>
                 <div className="md:col-span-2">
                   <label htmlFor="address" className="block text-xs font-bold uppercase text-gray-500 mb-1">Address</label>
                   <input required id="address" name="address" value={formData.address} onChange={handleChange} type="text" className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none transition" />
                 </div>
                 <div>
                   <label htmlFor="city" className="block text-xs font-bold uppercase text-gray-500 mb-1">City</label>
                   <input required id="city" name="city" value={formData.city} onChange={handleChange} type="text" className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none transition" />
                 </div>
                 <div>
                   <label htmlFor="zip" className="block text-xs font-bold uppercase text-gray-500 mb-1">Zip Code</label>
                   <input required id="zip" name="zip" value={formData.zip} onChange={handleChange} type="text" className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none transition" />
                 </div>
                 <div className="md:col-span-2">
                   <label htmlFor="email" className="block text-xs font-bold uppercase text-gray-500 mb-1">Email</label>
                   <input required id="email" name="email" value={formData.email} onChange={handleChange} type="email" className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none transition" />
                 </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold uppercase mb-6 flex items-center gap-2">
                <CreditCard className="w-5 h-5" aria-hidden="true" /> Payment Method
              </h2>
              <div className="grid grid-cols-1 gap-6">
                 <div>
                   <label htmlFor="cardNumber" className="block text-xs font-bold uppercase text-gray-500 mb-1">Card Number</label>
                   <div className="relative">
                     <input required id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} type="text" placeholder="0000 0000 0000 0000" className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none transition pl-10" />
                     <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" aria-hidden="true" />
                   </div>
                 </div>
                 <div className="grid grid-cols-2 gap-6">
                   <div>
                     <label htmlFor="expiry" className="block text-xs font-bold uppercase text-gray-500 mb-1">Expiry Date</label>
                     <input required id="expiry" name="expiry" value={formData.expiry} onChange={handleChange} type="text" placeholder="MM/YY" className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none transition" />
                   </div>
                   <div>
                     <label htmlFor="cvc" className="block text-xs font-bold uppercase text-gray-500 mb-1">CVC</label>
                     <input required id="cvc" name="cvc" value={formData.cvc} onChange={handleChange} type="text" placeholder="123" className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none transition" />
                   </div>
                 </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full bg-black text-white py-5 font-bold uppercase tracking-widest hover:bg-gray-800 transition shadow-lg disabled:opacity-70 flex justify-center items-center focus:ring-4 focus:ring-blue-500"
            >
              {isProcessing ? (
                <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Processing Order...</span>
              ) : (
                `Pay $${total.toFixed(2)}`
              )}
            </button>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div>
           <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
             <h3 className="font-heading font-bold text-lg uppercase mb-4">In Your Bag</h3>
             <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map(item => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 mb-4">
                     <div className="w-16 h-16 bg-white border border-gray-200 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                     </div>
                     <div>
                        <p className="font-bold text-sm leading-tight">{item.name}</p>
                        <p className="text-xs text-gray-500">Size: {item.selectedSize} | Qty: {item.quantity}</p>
                        <p className="font-bold text-sm mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                     </div>
                  </div>
                ))}
             </div>
             
             <div className="border-t border-gray-200 mt-4 pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                   <span className="text-gray-600">Subtotal</span>
                   <span className="font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-gray-600">Shipping</span>
                   <span className="text-green-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-gray-600">Tax (8%)</span>
                   <span className="font-bold">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-200 text-lg">
                   <span className="font-heading font-bold uppercase">Total</span>
                   <span className="font-heading font-bold">${total.toFixed(2)}</span>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};