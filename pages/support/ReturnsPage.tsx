import React, { useState } from 'react';
import { RotateCcw, CheckCircle, Package, ChevronDown, ChevronUp, AlertTriangle, Clock } from 'lucide-react';
import { SEO } from '../../components/SEO';

export const ReturnsPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How do I print my return label?",
      a: "Once you submit your return request above, you will receive an email with a printable PDF shipping label. You can also access this label from your 'Order History' in the dashboard."
    },
    {
      q: "Can I exchange for a different size?",
      a: "Yes! During the return process, select 'Exchange' instead of 'Refund'. We will ship your new size as soon as the carrier scans your return package."
    },
    {
      q: "How long does a refund take?",
      a: "Once our warehouse receives and inspects your return (usually within 3-5 business days of receipt), we will process your refund. It may take an additional 3-5 business days for your bank to reflect the credit."
    },
    {
      q: "Are customized items returnable?",
      a: "No. Personalized products (e.g., custom jerseys with names) are created just for you and cannot be returned unless there is a manufacturing defect."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
      <SEO title="Returns & Exchanges" description="Easy, hassle-free returns within 30 days." />

      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-heading font-bold uppercase mb-4">Returns & Exchanges</h1>
        <p className="text-lg text-gray-600">
          Not the perfect fit? No problem. We offer free returns within 30 days of delivery for all NextGen Creators Club members.
        </p>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-50 p-8 rounded-xl text-center border border-gray-100">
           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
             <Clock className="w-8 h-8 text-black" />
           </div>
           <h3 className="font-bold uppercase mb-2">30-Day Window</h3>
           <p className="text-sm text-gray-600">Return your items within 30 days of delivery. Items must be unworn and with tags.</p>
        </div>
        <div className="bg-gray-50 p-8 rounded-xl text-center border border-gray-100">
           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
             <CheckCircle className="w-8 h-8 text-black" />
           </div>
           <h3 className="font-bold uppercase mb-2">Free Returns</h3>
           <p className="text-sm text-gray-600">Use the pre-paid shipping label included in your package or generate one online.</p>
        </div>
        <div className="bg-gray-50 p-8 rounded-xl text-center border border-gray-100">
           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
             <Package className="w-8 h-8 text-black" />
           </div>
           <h3 className="font-bold uppercase mb-2">Fast Refunds</h3>
           <p className="text-sm text-gray-600">Refunds are processed to your original payment method within 5-7 business days.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Return Form */}
        <div>
          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
            <h2 className="text-2xl font-bold uppercase mb-6 relative z-10">Start A Return</h2>
            <form className="space-y-4 relative z-10">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Order Number</label>
                <input type="text" placeholder="e.g. ORD-12345" className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email Address</label>
                <input type="email" placeholder="Used during checkout" className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none" />
              </div>
              <button type="button" className="w-full bg-black text-white py-4 font-bold uppercase hover:bg-gray-800 transition shadow-lg">
                Find Order
              </button>
            </form>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 p-6 rounded-lg flex items-start gap-4">
             <AlertTriangle className="w-6 h-6 text-yellow-700 flex-shrink-0" />
             <div>
               <h4 className="font-bold text-yellow-900 text-sm uppercase mb-1">Important Note</h4>
               <p className="text-sm text-yellow-800">
                 Please ensure that all original tags are attached. Shoe boxes must be returned in their original condition and not used as the shipping box.
               </p>
             </div>
          </div>
        </div>

        {/* FAQ & Policies */}
        <div className="space-y-8">
           <div>
             <h2 className="text-2xl font-heading font-bold uppercase mb-6">Return Policy Details</h2>
             <div className="space-y-3">
               {faqs.map((faq, idx) => (
                 <div key={idx} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                   <button 
                     onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                     className="w-full flex justify-between items-center p-4 text-left font-bold text-sm hover:bg-gray-50 transition"
                   >
                     {faq.q}
                     {openFaq === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                   </button>
                   {openFaq === idx && (
                     <div className="p-4 pt-0 text-sm text-gray-600 bg-gray-50 border-t border-gray-100">
                       {faq.a}
                     </div>
                   )}
                 </div>
               ))}
             </div>
           </div>

           <div>
             <h3 className="font-bold uppercase text-sm mb-4">Non-Returnable Items</h3>
             <ul className="grid grid-cols-2 gap-2">
                {['Face Masks', 'Underwear', 'Customized Gear', 'Gift Cards', 'Swimwear (if tags removed)'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded border border-gray-100">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> {item}
                  </li>
                ))}
             </ul>
           </div>
        </div>

      </div>
    </div>
  );
};
