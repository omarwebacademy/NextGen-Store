import React, { useState } from 'react';
import { Truck, CreditCard, Plus, Trash2, Globe } from 'lucide-react';

export const ShippingAndPayments = () => {
  const [shippingZones, setShippingZones] = useState([
    { id: 1, name: 'Domestic (US)', rate: '5.00', delivery: '3-5 Business Days', active: true },
    { id: 2, name: 'Europe', rate: '15.00', delivery: '5-10 Business Days', active: true },
    { id: 3, name: 'Rest of World', rate: '25.00', delivery: '10-20 Business Days', active: true },
  ]);

  const [paymentMethods, setPaymentMethods] = useState([
    { id: 'stripe', name: 'Stripe (Credit Cards)', active: true, icon: 'S' },
    { id: 'paypal', name: 'PayPal', active: true, icon: 'P' },
    { id: 'cod', name: 'Cash on Delivery', active: false, icon: '$' },
  ]);

  const toggleZone = (id: number) => {
    setShippingZones(prev => prev.map(z => z.id === id ? { ...z, active: !z.active } : z));
  };

  const togglePayment = (id: string) => {
    setPaymentMethods(prev => prev.map(p => p.id === id ? { ...p, active: !p.active } : p));
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">Shipping & Payments</h1>
          <p className="text-gray-500 text-sm">Configure delivery zones, rates, and payment gateways.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Shipping Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold uppercase flex items-center gap-2">
              <Truck className="w-5 h-5" /> Shipping Zones
            </h2>
            <button className="text-xs font-bold uppercase flex items-center gap-1 bg-black text-white px-3 py-1.5 rounded hover:bg-gray-800">
              <Plus className="w-3 h-3" /> Add Zone
            </button>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {shippingZones.map((zone) => (
              <div key={zone.id} className="p-4 border-b border-gray-100 last:border-0 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <span className="font-bold text-sm">{zone.name}</span>
                    <span className="text-xs bg-gray-100 px-2 py-0.5 rounded font-bold">${zone.rate}</span>
                  </div>
                  <p className="text-xs text-gray-500 pl-6">{zone.delivery}</p>
                </div>
                <div className="flex items-center gap-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={zone.active} onChange={() => toggleZone(zone.id)} />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-black"></div>
                  </label>
                  <button className="text-gray-400 hover:text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Section */}
        <div className="space-y-6">
           <h2 className="text-lg font-bold uppercase flex items-center gap-2">
              <CreditCard className="w-5 h-5" /> Payment Methods
           </h2>
           
           <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
             {paymentMethods.map((method) => (
               <div key={method.id} className="p-4 border-b border-gray-100 last:border-0 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center font-bold text-gray-500">
                     {method.icon}
                   </div>
                   <span className="font-bold text-sm">{method.name}</span>
                 </div>
                 <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={method.active} onChange={() => togglePayment(method.id)} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                 </label>
               </div>
             ))}
           </div>

           <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-xs text-yellow-800">
             <p className="font-bold mb-1">Configuration Required</p>
             <p>Ensure API keys for Stripe and PayPal are set in the <a href="/#/admin/system" className="underline font-bold">System</a> tab before enabling live payments.</p>
           </div>
        </div>
      </div>
    </div>
  );
};