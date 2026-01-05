import React, { useState } from 'react';
import { Check, X, Eye, RefreshCcw } from 'lucide-react';

export const Returns = () => {
  const [returns, setReturns] = useState([
    { id: 'RET-001', orderId: '#ORD-7752', customer: 'Alex Shopper', item: 'Ultraboost Light (Size 10)', reason: 'Wrong Size', status: 'Requested', date: 'Oct 25, 2025' },
    { id: 'RET-002', orderId: '#ORD-7740', customer: 'John Doe', item: 'Samba OG (Size 8)', reason: 'Defective', status: 'Approved', date: 'Oct 24, 2025' },
    { id: 'RET-003', orderId: '#ORD-7735', customer: 'Jane Smith', item: 'Terrex Hiker', reason: 'Changed Mind', status: 'Rejected', date: 'Oct 22, 2025' },
  ]);

  const handleAction = (id: string, action: 'Approved' | 'Rejected') => {
    setReturns(prev => prev.map(r => r.id === id ? { ...r, status: action } : r));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-700';
      case 'Rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-yellow-100 text-yellow-700';
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">Returns Management</h1>
          <p className="text-gray-500 text-sm">Process return requests and refunds.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Return ID</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Order</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Customer</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Reason</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Status</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {returns.map((ret) => (
              <tr key={ret.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold text-sm">{ret.id}</td>
                <td className="px-6 py-4 text-sm text-blue-600 hover:underline cursor-pointer">{ret.orderId}</td>
                <td className="px-6 py-4">
                  <p className="text-sm font-bold">{ret.customer}</p>
                  <p className="text-xs text-gray-500">{ret.item}</p>
                </td>
                <td className="px-6 py-4 text-sm">{ret.reason}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${getStatusColor(ret.status)}`}>
                    {ret.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  {ret.status === 'Requested' ? (
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => handleAction(ret.id, 'Approved')}
                        className="p-1.5 bg-green-50 text-green-600 rounded hover:bg-green-100 transition" 
                        title="Approve"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleAction(ret.id, 'Rejected')}
                        className="p-1.5 bg-red-50 text-red-600 rounded hover:bg-red-100 transition" 
                        title="Reject"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs text-gray-400 font-medium">Processed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};