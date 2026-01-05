import React from 'react';
import { Truck, Globe, Clock, AlertCircle } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';

export const ShippingPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
      <SEO title="Shipping Information" description="Everything you need to know about NextGen delivery methods and times." />

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-heading font-bold uppercase mb-8">Shipping Information</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-700 mt-0.5" />
          <div>
            <p className="text-blue-900 font-bold text-sm">Holiday Shipping Update</p>
            <p className="text-blue-800 text-sm">Due to high volume, orders may take an additional 1-2 business days to process. Thank you for your patience.</p>
          </div>
        </div>

        <div className="space-y-12">
          {/* Methods */}
          <section>
            <h2 className="text-2xl font-bold uppercase mb-4 flex items-center gap-2">
              <Truck className="w-6 h-6" /> Delivery Methods
            </h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="p-4 font-bold uppercase text-gray-600">Type</th>
                    <th className="p-4 font-bold uppercase text-gray-600">Timeframe</th>
                    <th className="p-4 font-bold uppercase text-gray-600">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 font-bold">Standard Delivery</td>
                    <td className="p-4">3-5 Business Days</td>
                    <td className="p-4">$5.00 (Free over $100)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Express Delivery</td>
                    <td className="p-4">1-2 Business Days</td>
                    <td className="p-4">$15.00</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Next Day Air</td>
                    <td className="p-4">1 Business Day (Order by 2pm)</td>
                    <td className="p-4">$25.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">* NextGen Creators Club members get free standard shipping on all orders.</p>
          </section>

          {/* International */}
          <section>
            <h2 className="text-2xl font-bold uppercase mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6" /> International Shipping
            </h2>
            <p className="text-gray-700 mb-4">
              We ship to over 100 countries worldwide. International shipping rates vary based on destination and weight. Duties and taxes are calculated at checkout.
            </p>
            <Link to="/contact" className="text-black font-bold underline">Contact support for specific country inquiries.</Link>
          </section>

          {/* Tracking */}
          <section>
            <h2 className="text-2xl font-bold uppercase mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6" /> Order Tracking
            </h2>
            <p className="text-gray-700 mb-4">
              Once your order ships, you will receive a confirmation email with a tracking number. You can also track your order status in your dashboard.
            </p>
            <Link to="/dashboard" className="bg-black text-white px-6 py-3 font-bold uppercase text-sm rounded hover:bg-gray-800 inline-block">
              Track My Order
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};