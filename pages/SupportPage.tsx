import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { INFO_CONTENT } from '../constants';
import { MessageCircle, Phone, Mail } from 'lucide-react';

export const SupportPage = () => {
  const { topic } = useParams<{ topic: string }>();
  const data = topic ? INFO_CONTENT[topic] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Support Sidebar */}
        <div className="col-span-1 border-r border-gray-100 pr-8 hidden md:block">
          <h3 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Customer Support</h3>
          <ul className="space-y-4 text-sm text-gray-600">
            <li><Link to="/support/help" className={`hover:text-black hover:underline ${topic === 'help' ? 'font-bold text-black' : ''}`}>Help Center</Link></li>
            <li><Link to="/support/customer-service" className={`hover:text-black hover:underline ${topic === 'customer-service' ? 'font-bold text-black' : ''}`}>Customer Service</Link></li>
            <li><Link to="/support/returns-exchanges" className={`hover:text-black hover:underline ${topic === 'returns-exchanges' ? 'font-bold text-black' : ''}`}>Returns & Exchanges</Link></li>
            <li><Link to="/support/shipping" className={`hover:text-black hover:underline ${topic === 'shipping' ? 'font-bold text-black' : ''}`}>Shipping Info</Link></li>
            <li><Link to="/support/size-charts" className={`hover:text-black hover:underline ${topic === 'size-charts' ? 'font-bold text-black' : ''}`}>Size Charts</Link></li>
          </ul>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold text-sm uppercase mb-4">Need urgent help?</h4>
            <div className="flex items-center gap-3 text-sm mb-3">
               <Phone className="w-4 h-4" /> <span>1-800-ADIDAS</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
               <MessageCircle className="w-4 h-4" /> <span>Live Chat 24/7</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="col-span-1 md:col-span-3">
          {data ? (
            <div className="animate-fadeIn">
              <h1 className="text-4xl font-heading font-bold uppercase mb-8">{data.title}</h1>
              <div className="prose max-w-none text-gray-700 leading-relaxed mb-12">
                <p className="text-lg">{data.content}</p>
                {/* Simulated rich content */}
                <div className="mt-8 p-6 bg-gray-50 border border-gray-100 rounded">
                  <h3 className="font-bold uppercase text-sm mb-2">Did you know?</h3>
                  <p className="text-sm">You can track your return status in real-time by logging into your account dashboard.</p>
                </div>
              </div>
              
              {/* Contact Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t pt-12">
                 <div className="text-center p-6 border hover:border-black transition cursor-pointer group">
                    <MessageCircle className="w-8 h-8 mx-auto mb-4 text-gray-400 group-hover:text-black" />
                    <h3 className="font-bold uppercase text-sm">Chat with us</h3>
                    <p className="text-xs text-gray-500 mt-2">Available 24/7</p>
                 </div>
                 <div className="text-center p-6 border hover:border-black transition cursor-pointer group">
                    <Phone className="w-8 h-8 mx-auto mb-4 text-gray-400 group-hover:text-black" />
                    <h3 className="font-bold uppercase text-sm">Call Us</h3>
                    <p className="text-xs text-gray-500 mt-2">Mon-Fri, 8am-8pm</p>
                 </div>
                 <div className="text-center p-6 border hover:border-black transition cursor-pointer group">
                    <Mail className="w-8 h-8 mx-auto mb-4 text-gray-400 group-hover:text-black" />
                    <h3 className="font-bold uppercase text-sm">Email</h3>
                    <p className="text-xs text-gray-500 mt-2">Response in 24h</p>
                 </div>
              </div>
            </div>
          ) : (
             <div className="text-center py-20">
               <h1 className="text-2xl font-bold mb-4">Topic Not Found</h1>
               <Link to="/support/help" className="text-black underline">Go to Help Center</Link>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
