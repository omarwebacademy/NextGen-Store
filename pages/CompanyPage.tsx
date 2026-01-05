import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { INFO_CONTENT } from '../constants';
import { Globe, Users, Award } from 'lucide-react';

export const CompanyPage = () => {
  const { topic } = useParams<{ topic: string }>();
  const data = topic ? INFO_CONTENT[topic] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Sidebar */}
        <div className="col-span-1 border-r border-gray-100 pr-8 hidden md:block">
          <h3 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Company Info</h3>
          <ul className="space-y-4 text-sm text-gray-600">
            <li><Link to="/company/about-us" className={`hover:text-black hover:underline ${topic === 'about-us' ? 'font-bold text-black' : ''}`}>About Us</Link></li>
            <li><Link to="/company/careers" className={`hover:text-black hover:underline ${topic === 'careers' ? 'font-bold text-black' : ''}`}>Careers</Link></li>
            <li><Link to="/company/press" className={`hover:text-black hover:underline ${topic === 'press' ? 'font-bold text-black' : ''}`}>Press</Link></li>
            <li><Link to="/company/sustainability" className={`hover:text-black hover:underline ${topic === 'sustainability' ? 'font-bold text-black' : ''}`}>Sustainability</Link></li>
            <li className="pt-4 border-t"><Link to="/company/privacy-policy" className={`hover:text-black hover:underline ${topic === 'privacy-policy' ? 'font-bold text-black' : ''}`}>Privacy Policy</Link></li>
            <li><Link to="/company/terms-and-conditions" className={`hover:text-black hover:underline ${topic === 'terms-and-conditions' ? 'font-bold text-black' : ''}`}>Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="col-span-1 md:col-span-3">
          {data ? (
            <div className="animate-fadeIn">
              <div className="mb-8 relative h-48 bg-black w-full overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-90"></div>
                 <h1 className="relative text-5xl text-white font-heading font-bold uppercase tracking-widest">{data.title}</h1>
              </div>
              
              <div className="prose max-w-none text-gray-700 leading-relaxed text-lg">
                <p>{data.content}</p>
                <p className="mt-6">
                   At Adidas NextGen, we are constantly pushing the boundaries of what is possible. 
                   Whether it's through sustainable innovation, digital transformation, or inclusive culture, 
                   we define the future of sport.
                </p>
                
                {topic === 'about-us' && (
                   <div className="grid grid-cols-3 gap-6 mt-12">
                      <div className="text-center">
                         <Globe className="w-8 h-8 mx-auto mb-2" />
                         <span className="font-bold text-xl block">100+</span>
                         <span className="text-xs uppercase text-gray-500">Countries</span>
                      </div>
                      <div className="text-center">
                         <Users className="w-8 h-8 mx-auto mb-2" />
                         <span className="font-bold text-xl block">50k+</span>
                         <span className="text-xs uppercase text-gray-500">Employees</span>
                      </div>
                      <div className="text-center">
                         <Award className="w-8 h-8 mx-auto mb-2" />
                         <span className="font-bold text-xl block">#1</span>
                         <span className="text-xs uppercase text-gray-500">In Innovation</span>
                      </div>
                   </div>
                )}
              </div>
            </div>
          ) : (
             <div className="text-center py-20">
               <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
               <Link to="/company/about-us" className="text-black underline">Return to About Us</Link>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
