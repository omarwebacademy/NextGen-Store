import React from 'react';

export const StoreSettings = () => {
  return (
    <div className="max-w-3xl space-y-6 animate-fadeIn">
      <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">General Settings</h1>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
         <div>
             <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Store Name</label>
             <input type="text" className="w-full p-2 border border-gray-300 rounded" defaultValue="NextGen Store" />
         </div>
         <div>
             <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Support Email</label>
             <input type="email" className="w-full p-2 border border-gray-300 rounded" defaultValue="support@nextgen.com" />
         </div>
         <div>
             <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Currency</label>
             <select className="w-full p-2 border border-gray-300 rounded">
                 <option>USD ($)</option>
                 <option>EUR (€)</option>
             </select>
         </div>
         <div className="pt-4">
             <button className="bg-black text-white px-6 py-3 font-bold uppercase text-sm rounded">Save Changes</button>
         </div>
      </div>
    </div>
  );
};