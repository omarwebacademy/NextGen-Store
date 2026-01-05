import React from 'react';
import { Bell, AlertTriangle, CheckCircle, Info } from 'lucide-react';

export const Notifications = () => {
  const notifications = [
    { id: 1, type: 'alert', title: 'Low Stock Alert', message: 'UltraBoost Light (Size 10) is running low.', time: '2 hours ago', icon: AlertTriangle, color: 'text-red-500' },
    { id: 2, type: 'success', title: 'New Order', message: 'Order #12345 has been successfully placed.', time: '5 hours ago', icon: CheckCircle, color: 'text-green-500' },
    { id: 3, type: 'info', title: 'System Update', message: 'Maintenance scheduled for tonight at 2 AM.', time: '1 day ago', icon: Info, color: 'text-blue-500' },
  ];

  return (
    <div className="max-w-4xl space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">Notifications</h1>
        <button className="text-sm font-bold underline hover:text-gray-600">Mark all as read</button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-100">
        {notifications.map((note) => (
          <div key={note.id} className="p-6 flex gap-4 hover:bg-gray-50 transition">
            <div className={`p-2 bg-gray-50 rounded-full h-fit ${note.color}`}>
              <note.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-gray-900">{note.title}</h3>
                <span className="text-xs text-gray-500">{note.time}</span>
              </div>
              <p className="text-gray-600 text-sm">{note.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
