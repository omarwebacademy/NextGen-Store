import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MoreHorizontal } from 'lucide-react';

export const CustomerList = () => {
  const customers = [
    { id: 1, name: 'Alex Shopper', email: 'alex@example.com', orders: 12, spent: '$2,450' },
    { id: 2, name: 'Sarah Connor', email: 'sarah@example.com', orders: 5, spent: '$890' },
    { id: 3, name: 'John Doe', email: 'john@example.com', orders: 2, spent: '$120' },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">Customers</h1>
      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Name</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Email</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Orders</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Total Spent</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {customers.map((cust) => (
              <tr key={cust.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                    <Link to={`/admin/customers/${cust.id}`} className="font-bold text-sm text-gray-900 hover:underline">{cust.name}</Link>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{cust.email}</td>
                <td className="px-6 py-4 text-sm">{cust.orders}</td>
                <td className="px-6 py-4 text-sm font-bold">{cust.spent}</td>
                <td className="px-6 py-4 text-right">
                   <button className="text-gray-400 hover:text-black">
                      <MoreHorizontal className="w-5 h-5 ml-auto" />
                   </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
