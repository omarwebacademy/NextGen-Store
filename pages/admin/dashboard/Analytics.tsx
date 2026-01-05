import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export const Analytics = () => {
  const data = [
    { name: 'Mon', visits: 4000, sales: 2400 },
    { name: 'Tue', visits: 3000, sales: 1398 },
    { name: 'Wed', visits: 2000, sales: 9800 },
    { name: 'Thu', visits: 2780, sales: 3908 },
    { name: 'Fri', visits: 1890, sales: 4800 },
    { name: 'Sat', visits: 2390, sales: 3800 },
    { name: 'Sun', visits: 3490, sales: 4300 },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">Analytics</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-6 uppercase text-sm">Traffic vs Sales</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#000000" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#000000" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="visits" stroke="#000000" fillOpacity={1} fill="url(#colorVisits)" />
                <Area type="monotone" dataKey="sales" stroke="#e81e25" fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-6 uppercase text-sm">Conversion Rate</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="sales" fill="#000000" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
