import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { User, LogOut, Package, Settings, CreditCard, LayoutDashboard, ChevronRight, MapPin, Gift } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { useAuth } from '../context/AuthContext';

export const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'payment' | 'settings'>('overview');
  const { orders } = useStore();

  // Filter orders for the logged-in user
  const userOrders = orders.filter(o => o.userId === user?.id);

  const chartData = [
    { name: 'Jan', points: 400 },
    { name: 'Feb', points: 300 },
    { name: 'Mar', points: 550 },
    { name: 'Apr', points: 800 },
    { name: 'May', points: 1200 },
    { name: 'Jun', points: 1500 },
    { name: 'Jul', points: 2450 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6 animate-fadeIn">
            {/* Loyalty Card */}
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
               <div className="relative z-10 flex justify-between items-start">
                 <div>
                   <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Creators Club</p>
                   <h2 className="text-3xl font-heading font-bold uppercase">Icon Level</h2>
                 </div>
                 <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                   <Gift className="w-6 h-6 text-white" />
                 </div>
               </div>
               <div className="mt-8">
                 <div className="flex justify-between items-end mb-2">
                   <span className="text-4xl font-bold">2,450</span>
                   <span className="text-sm text-gray-400">Points Balance</span>
                 </div>
                 <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                   <div className="bg-white h-full w-[70%]"></div>
                 </div>
                 <p className="text-xs text-gray-400 mt-2">550 points to next level</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="font-bold uppercase text-sm mb-4">Recent Activity</h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                      <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} />
                      <Line type="monotone" dataKey="points" stroke="#000000" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center items-center text-center">
                 <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                   <Package className="w-8 h-8 text-black" />
                 </div>
                 <h3 className="font-bold text-xl mb-1">{userOrders.length} Orders</h3>
                 <p className="text-gray-500 text-sm mb-4">You have {userOrders.filter(o => o.status !== 'Delivered').length} active orders.</p>
                 <button 
                   onClick={() => setActiveTab('orders')}
                   className="text-sm font-bold uppercase underline hover:text-gray-600"
                 >
                   View All Orders
                 </button>
              </div>
            </div>
          </div>
        );

      case 'orders':
        return (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden animate-fadeIn">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-heading font-bold uppercase">Order History</h2>
            </div>
            {userOrders.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {userOrders.map((order) => (
                  <div key={order.id} className="p-6 hover:bg-gray-50 transition">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-bold text-lg">{order.id}</span>
                          <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                            order.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">Placed on {order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">${order.total.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">{order.items.length} items</p>
                      </div>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 border border-gray-200">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center">
                <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">No orders yet</h3>
                <p className="text-gray-500 mb-6">Start shopping to fill up your history.</p>
                <a href="/#/products/new-arrivals" className="bg-black text-white px-6 py-3 text-sm font-bold uppercase rounded hover:bg-gray-800">
                  Shop Now
                </a>
              </div>
            )}
          </div>
        );

      case 'payment':
        return (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-xl font-heading font-bold uppercase mb-4">Payment Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mock Saved Card */}
              <div className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl text-white shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="flex justify-between items-start mb-8">
                  <CreditCard className="w-8 h-8 opacity-80" />
                  <span className="font-mono text-sm opacity-60">Debit</span>
                </div>
                <div className="mb-6">
                  <span className="font-mono text-xl tracking-widest">•••• •••• •••• 4242</span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-gray-400 uppercase mb-1">Card Holder</p>
                    <p className="font-bold text-sm tracking-wider uppercase">{user?.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase mb-1">Expires</p>
                    <p className="font-bold text-sm tracking-wider">12/28</p>
                  </div>
                </div>
              </div>

              {/* Add New Card */}
              <button className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-gray-500 hover:border-black hover:text-black transition h-full min-h-[200px]">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-gray-200">
                  <span className="text-2xl font-light">+</span>
                </div>
                <span className="font-bold uppercase text-sm">Add New Card</span>
              </button>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 animate-fadeIn">
            <h2 className="text-xl font-heading font-bold uppercase mb-6">Account Settings</h2>
            <form className="space-y-6 max-w-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">First Name</label>
                  <input type="text" defaultValue={user?.name.split(' ')[0]} className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Last Name</label>
                  <input type="text" defaultValue={user?.name.split(' ')[1]} className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email Address</label>
                <input type="email" defaultValue={user?.email} className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none bg-gray-50" readOnly />
                <p className="text-xs text-gray-400 mt-1">Contact support to change email.</p>
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <h3 className="font-bold uppercase text-sm mb-4">Shipping Address</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div className="flex-1">
                       <p className="font-bold text-sm">Home</p>
                       <p className="text-sm text-gray-600">123 Innovation Dr, San Francisco, CA 94105</p>
                    </div>
                    <button type="button" className="text-xs font-bold underline">Edit</button>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button type="button" className="bg-black text-white px-8 py-3 font-bold uppercase rounded hover:bg-gray-800 transition">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-[80vh]">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-72 flex-shrink-0">
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm mb-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center border-2 border-white shadow">
                <User className="w-7 h-7 text-gray-600" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Welcome</p>
                <p className="font-heading font-bold text-xl truncate">{user?.name || 'User'}</p>
              </div>
            </div>
            
            <nav className="space-y-1">
              {[
                { id: 'overview', label: 'Overview', icon: LayoutDashboard },
                { id: 'orders', label: 'My Orders', icon: Package },
                { id: 'payment', label: 'Payment Methods', icon: CreditCard },
                { id: 'settings', label: 'Settings', icon: Settings },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold flex items-center justify-between group transition-all ${
                    activeTab === item.id 
                    ? 'bg-black text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`w-4 h-4 ${activeTab === item.id ? 'text-white' : 'text-gray-400 group-hover:text-black'}`} />
                    {item.label}
                  </div>
                  {activeTab === item.id && <ChevronRight className="w-4 h-4" />}
                </button>
              ))}
            </nav>
          </div>
          
          <button 
            onClick={logout}
            className="w-full border border-gray-200 px-4 py-3 text-sm font-bold uppercase text-red-600 bg-white rounded-xl hover:bg-red-50 hover:border-red-100 flex items-center justify-center gap-2 transition shadow-sm"
          >
            <LogOut className="w-4 h-4" /> Log Out
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};