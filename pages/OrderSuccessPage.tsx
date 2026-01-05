import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const OrderSuccessPage = () => {
  const { orders } = useStore();
  const [latestOrder, setLatestOrder] = useState<any>(null);

  useEffect(() => {
    if (orders.length > 0) {
      setLatestOrder(orders[0]); // Assuming the newest order is added to the top
    }
  }, [orders]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-12 px-4 animate-fadeIn">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full text-center border border-gray-100">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
           <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-heading font-bold uppercase mb-2">Order Confirmed!</h1>
        <p className="text-gray-500 mb-8">Thank you for your purchase. Your order has been received and is being processed.</p>
        
        {latestOrder && (
          <div className="bg-gray-50 p-4 rounded-lg mb-8 text-left border border-gray-200">
             <div className="flex justify-between border-b border-gray-200 pb-2 mb-2">
               <span className="text-sm text-gray-500 uppercase font-bold">Order ID</span>
               <span className="text-sm font-bold font-mono">{latestOrder.id}</span>
             </div>
             <div className="flex justify-between">
               <span className="text-sm text-gray-500 uppercase font-bold">Total Amount</span>
               <span className="text-sm font-bold">${latestOrder.total.toFixed(2)}</span>
             </div>
             <p className="text-xs text-gray-400 mt-4 text-center">A confirmation email has been sent to {latestOrder.customerEmail}</p>
          </div>
        )}

        <div className="flex flex-col gap-3">
           <Link to="/dashboard" className="w-full bg-white border border-gray-300 text-black py-3 font-bold uppercase tracking-widest hover:bg-gray-50 transition flex items-center justify-center gap-2">
             View Order Status
           </Link>
           <Link to="/" className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition flex items-center justify-center gap-2">
             Continue Shopping <ArrowRight className="w-5 h-5" />
           </Link>
        </div>
      </div>
    </div>
  );
};
