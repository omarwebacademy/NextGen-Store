import React from 'react';
import { useParams } from 'react-router-dom';
import { User, ShoppingBag } from 'lucide-react';

export const CustomerProfile = () => {
  const { id } = useParams();

  return (
    <div className="space-y-6 animate-fadeIn">
      <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">Customer Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center">
             <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                 <User className="w-10 h-10 text-gray-500" />
             </div>
             <h2 className="text-xl font-bold">Alex Shopper</h2>
             <p className="text-gray-500 text-sm">Customer ID: {id}</p>
             <p className="mt-4 text-sm">Member since 2023</p>
         </div>

         <div className="md:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
             <h3 className="font-bold uppercase text-sm mb-4">Recent Orders</h3>
             <div className="space-y-4">
                 <div className="flex items-center justify-between p-4 border rounded hover:bg-gray-50">
                     <div className="flex items-center gap-4">
                         <ShoppingBag className="w-5 h-5 text-gray-400" />
                         <div>
                             <p className="font-bold text-sm">Order #ORD-7752</p>
                             <p className="text-xs text-gray-500">Oct 24, 2025</p>
                         </div>
                     </div>
                     <span className="font-bold text-sm">$240.00</span>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
};
