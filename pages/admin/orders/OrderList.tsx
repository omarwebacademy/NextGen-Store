import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Filter } from 'lucide-react';
import { useStore } from '../../../context/StoreContext';

export const OrderList = () => {
  const { orders } = useStore();

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">Orders</h1>
        <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 text-sm font-bold rounded hover:bg-gray-50">
           <Filter className="w-4 h-4" /> Filter
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Order ID</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Customer</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Date</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Total</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Status</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold text-sm">{order.id}</td>
                <td className="px-6 py-4 text-sm">{order.customerName}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                <td className="px-6 py-4 text-sm font-bold">${order.total.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                    order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link to={`/admin/orders/${order.id.replace('#', '')}`} className="text-gray-400 hover:text-black">
                    <Eye className="w-5 h-5 ml-auto" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
