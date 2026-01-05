import React from 'react';
import { Tag, Plus, MoreHorizontal } from 'lucide-react';

export const Discounts = () => {
  const discounts = [
    { code: 'WELCOME20', type: 'Percentage', value: '20%', usage: '1,240', status: 'Active', expiry: 'Dec 31, 2026' },
    { code: 'SUMMER25', type: 'Percentage', value: '25%', usage: '450', status: 'Expired', expiry: 'Aug 31, 2025' },
    { code: 'FREESHIP', type: 'Fixed', value: 'Free Shipping', usage: '890', status: 'Active', expiry: 'Never' },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">Discount Codes</h1>
          <p className="text-gray-500 text-sm">Manage promotions and coupons.</p>
        </div>
        <button className="bg-black text-white px-4 py-2 text-sm font-bold rounded flex items-center gap-2 hover:bg-gray-800">
          <Plus className="w-4 h-4" /> Create Discount
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Code</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Discount</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Usage</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Status</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Expiry</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {discounts.map((discount, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <span className="font-bold text-sm font-mono bg-gray-100 px-2 py-1 rounded">{discount.code}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">{discount.value}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{discount.usage} uses</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    discount.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {discount.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{discount.expiry}</td>
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