import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { INFO_CONTENT } from '../constants';
import { ChevronRight } from 'lucide-react';

export const InfoPage = () => {
  const { topic } = useParams<{ topic: string }>();
  const data = topic ? INFO_CONTENT[topic] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Sidebar Nav */}
        <div className="col-span-1 border-r border-gray-100 pr-8 hidden md:block">
          <h3 className="font-heading font-bold text-lg mb-6 uppercase">Company</h3>
          <ul className="space-y-3 text-sm text-gray-600 mb-8">
            <li><Link to="/company/about-us" className="hover:text-black hover:underline">About Us</Link></li>
            <li><Link to="/company/careers" className="hover:text-black hover:underline">Careers</Link></li>
            <li><Link to="/company/press" className="hover:text-black hover:underline">Press</Link></li>
            <li><Link to="/company/sustainability" className="hover:text-black hover:underline">Sustainability</Link></li>
            <li><Link to="/company/privacy-policy" className="hover:text-black hover:underline">Privacy Policy</Link></li>
            <li><Link to="/company/terms-and-conditions" className="hover:text-black hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/company/cookies" className="hover:text-black hover:underline">Cookies</Link></li>
          </ul>

          <h3 className="font-heading font-bold text-lg mb-6 uppercase">Support</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link to="/support/help" className="hover:text-black hover:underline">Help</Link></li>
            <li><Link to="/support/customer-service" className="hover:text-black hover:underline">Customer Service</Link></li>
            <li><Link to="/support/returns-exchanges" className="hover:text-black hover:underline">Returns & Exchanges</Link></li>
            <li><Link to="/support/shipping" className="hover:text-black hover:underline">Shipping</Link></li>
            <li><Link to="/support/size-charts" className="hover:text-black hover:underline">Size Charts</Link></li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="col-span-1 md:col-span-3">
          {data ? (
            <div className="animate-fadeIn">
              <h1 className="text-4xl font-heading font-bold uppercase mb-8">{data.title}</h1>
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <p className="text-lg">{data.content}</p>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mt-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          ) : (
             <div className="text-center py-20">
               <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
               <Link to="/" className="text-blue-600 hover:underline">Return Home</Link>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
