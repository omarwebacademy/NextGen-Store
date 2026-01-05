import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, ShoppingBag, Users, ArrowUpRight, ArrowDownRight, Package, Clock, ShoppingCart, UserPlus } from 'lucide-react';
import { useStore } from '../../../context/StoreContext';

export const DashboardOverview = () => {
  const { orders } = useStore();
  
  // Real stats calculation
  const totalSales = orders.reduce((acc, order) => acc + order.total, 0);
  const totalOrders = orders.length;
  // Mock today's date for demo purposes or use real date
  const todayStr = new Date().toLocaleDateString();
  const ordersToday = orders.filter(o => o.date === todayStr).length;

  const salesData = [
    { name: 'Jan', sales: 4000, orders: 240 },
    { name: 'Feb', sales: 3000, orders: 139 },
    { name: 'Mar', sales: 2000, orders: 980 },
    { name: 'Apr', sales: 2780, orders: 390 },
    { name: 'May', sales: 1890, orders: 480 },
    { name: 'Jun', sales: 2390, orders: 380 },
    { name: 'Jul', sales: 3490, orders: 430 },
  ];

  const activities = [
    { type: 'order', message: 'New order #ORD-7752 received', time: '5 min ago', user: 'Alex Shopper' },
    { type: 'user', message: 'Sarah Connor registered', time: '12 min ago', user: 'Sarah Connor' },
    { type: 'stock', message: 'Ultraboost Light stock low (3 left)', time: '1 hour ago', user: 'System' },
    { type: 'order', message: 'Order #ORD-7751 shipped', time: '2 hours ago', user: 'Admin' },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
           <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">Dashboard Overview</h1>
           <p className="text-gray-500 text-sm">Welcome back. Here is your store status.</p>
        </div>
        <div className="flex gap-2">
           <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 text-sm font-bold rounded hover:bg-gray-50">Export</button>
           <button className="bg-black text-white px-4 py-2 text-sm font-bold rounded hover:bg-gray-800">Generate Report</button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Sales', value: `$${totalSales.toLocaleString()}`, change: '+20.1%', trend: 'up', icon: DollarSign },
          { label: 'Total Users', value: '1,234', change: '+12.5%', trend: 'up', icon: Users },
          { label: 'Total Products', value: '142', change: '+4 new', trend: 'neutral', icon: Package },
          { label: 'Orders Today', value: ordersToday.toString(), change: 'Live', trend: 'neutral', icon: ShoppingBag }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition hover:shadow-md">
            <div className="flex justify-between items-start mb-4">
               <div className="p-2 bg-gray-50 rounded-lg">
                 <stat.icon className="w-5 h-5 text-gray-700" />
               </div>
               <span className={`flex items-center text-xs font-bold px-2 py-1 rounded ${
                 stat.trend === 'up' ? 'bg-green-100 text-green-700' : 
                 stat.trend === 'down' ? 'bg-red-100 text-red-700' : 'bg-blue-50 text-blue-600'
               }`}>
                 {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3 mr-1" /> : stat.trend === 'down' ? <ArrowDownRight className="w-3 h-3 mr-1" /> : null}
                 {stat.change}
               </span>
            </div>
            <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">{stat.label}</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Charts & Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
           <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-gray-900 uppercase text-sm">Sales & Visits</h3>
             <select className="text-xs bg-gray-50 border border-gray-200 rounded p-1">
               <option>Last 7 Days</option>
               <option>Last 30 Days</option>
             </select>
           </div>
           <div className="h-80">
             <ResponsiveContainer width="100%" height="100%">
               <LineChart data={salesData}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} dy={10} />
                 <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                 <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} />
                 <Line type="monotone" dataKey="sales" stroke="#000000" strokeWidth={3} dot={{r: 4, fill: '#000'}} activeDot={{r: 8}} />
               </LineChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Latest Activities */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
           <h3 className="font-bold text-gray-900 mb-6 uppercase text-sm flex items-center gap-2">
             <Clock className="w-4 h-4" /> Latest Activities
           </h3>
           <div className="space-y-6">
             {activities.map((activity, idx) => (
               <div key={idx} className="flex gap-4 items-start">
                 <div className={`mt-1 p-2 rounded-full flex-shrink-0 ${
                   activity.type === 'order' ? 'bg-green-100 text-green-600' :
                   activity.type === 'user' ? 'bg-blue-100 text-blue-600' :
                   'bg-yellow-100 text-yellow-600'
                 }`}>
                   {activity.type === 'order' ? <ShoppingCart className="w-3 h-3" /> :
                    activity.type === 'user' ? <UserPlus className="w-3 h-3" /> :
                    <Package className="w-3 h-3" />}
                 </div>
                 <div>
                   <p className="text-sm font-bold text-gray-900 leading-tight">{activity.message}</p>
                   <p className="text-xs text-gray-500 mt-1">{activity.time} • {activity.user}</p>
                 </div>
               </div>
             ))}
           </div>
           <button className="w-full mt-6 py-2 text-xs font-bold uppercase text-gray-500 hover:text-black border border-gray-200 rounded hover:bg-gray-50">
             View All Activity
           </button>
        </div>
      </div>
    </div>
  );
};