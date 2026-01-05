import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Printer, Package, Check, Truck, AlertCircle } from 'lucide-react';
import { useStore } from '../../../context/StoreContext';
import { Order } from '../../../types';

export const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getOrder, updateOrderStatus } = useStore();
  const [order, setOrder] = useState<Order | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const foundOrder = getOrder(id);
      if (foundOrder) {
        setOrder(foundOrder);
      } else {
        // Only navigate away if we are sure it doesn't exist (in a real app, maybe fetch from API)
        // For now, we wait for context to be ready
      }
    }
  }, [id, getOrder]);

  const handleStatusChange = (newStatus: Order['status']) => {
    if (order) {
      updateOrderStatus(order.id, newStatus);
      setOrder({ ...order, status: newStatus });
    }
  };

  if (!order) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500 mb-4">Order not found.</p>
        <Link to="/admin/orders" className="text-black underline font-bold">Back to Orders</Link>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Delivered': return 'bg-green-100 text-green-700';
      case 'Shipped': return 'bg-blue-100 text-blue-700';
      case 'Processing': return 'bg-purple-100 text-purple-700';
      case 'Cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-yellow-100 text-yellow-700';
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn pb-12">
      <div className="flex items-center gap-4 mb-4">
        <Link to="/admin/orders" className="p-2 hover:bg-gray-200 rounded-full transition">
           <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
           <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">Order {order.id}</h1>
           <p className="text-sm text-gray-500">Placed on {order.date}</p>
        </div>
        <div className="ml-auto flex gap-2">
            <button 
              onClick={() => window.print()}
              className="px-4 py-2 border border-gray-300 rounded text-sm font-bold hover:bg-gray-50 flex items-center gap-2"
            >
                <Printer className="w-4 h-4" /> Print Invoice
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 space-y-6">
             {/* Order Status & Actions */}
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                 <h3 className="font-bold uppercase text-sm mb-4">Order Status</h3>
                 <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className={`px-3 py-1 rounded-full font-bold text-sm ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                    <span className="text-sm text-gray-500">Last updated: Just now</span>
                 </div>

                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button 
                      onClick={() => handleStatusChange('Processing')}
                      disabled={order.status === 'Processing'}
                      className="px-3 py-2 border rounded hover:bg-gray-50 text-xs font-bold flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Package className="w-4 h-4" /> Processing
                    </button>
                    <button 
                      onClick={() => handleStatusChange('Shipped')}
                      disabled={order.status === 'Shipped'}
                      className="px-3 py-2 border rounded hover:bg-gray-50 text-xs font-bold flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Truck className="w-4 h-4" /> Ship Order
                    </button>
                    <button 
                      onClick={() => handleStatusChange('Delivered')}
                      disabled={order.status === 'Delivered'}
                      className="px-3 py-2 border rounded hover:bg-gray-50 text-xs font-bold flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Check className="w-4 h-4" /> Deliver
                    </button>
                    <button 
                      onClick={() => handleStatusChange('Cancelled')}
                      disabled={order.status === 'Cancelled'}
                      className="px-3 py-2 border rounded hover:bg-red-50 text-red-600 text-xs font-bold flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <AlertCircle className="w-4 h-4" /> Cancel
                    </button>
                 </div>
             </div>

             {/* Items */}
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                 <h3 className="font-bold uppercase text-sm mb-4">Order Items</h3>
                 <div className="space-y-6">
                     {order.items.map((item, idx) => (
                       <div key={idx} className="flex gap-4 items-center">
                           <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                             <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                           </div>
                           <div className="flex-1">
                               <p className="font-bold text-sm">{item.name}</p>
                               <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>
                           </div>
                           <p className="font-bold text-sm">${item.price.toFixed(2)} x {item.quantity}</p>
                           <p className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                       </div>
                     ))}
                 </div>
                 <div className="border-t mt-6 pt-4 space-y-2">
                     <div className="flex justify-between text-sm">
                       <span className="text-gray-500">Subtotal</span>
                       <span>${(order.total / 1.08).toFixed(2)}</span>
                     </div>
                     <div className="flex justify-between text-sm">
                       <span className="text-gray-500">Tax (8%)</span>
                       <span>${(order.total - (order.total / 1.08)).toFixed(2)}</span>
                     </div>
                     <div className="flex justify-between text-sm">
                       <span className="text-gray-500">Shipping</span>
                       <span className="text-green-600 font-bold">Free</span>
                     </div>
                     <div className="flex justify-between font-bold text-lg pt-2 border-t">
                         <span>Total</span>
                         <span>${order.total.toFixed(2)}</span>
                     </div>
                 </div>
             </div>
         </div>

         <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="font-bold uppercase text-sm mb-4">Customer</h3>
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">
                      {order.customerName.charAt(0)}
                    </div>
                    <div>
                        <p className="font-bold text-sm">{order.customerName}</p>
                        <p className="text-xs text-blue-600">{order.customerEmail}</p>
                    </div>
                </div>
                <div className="border-t pt-4 space-y-4">
                    <div>
                      <h4 className="font-bold text-xs uppercase text-gray-500 mb-1">Shipping Address</h4>
                      <p className="text-sm text-gray-600">123 Adidas St,<br/>Herzogenaurach, 91074<br/>Germany</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase text-gray-500 mb-1">Billing Address</h4>
                      <p className="text-sm text-gray-600">Same as shipping</p>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};
