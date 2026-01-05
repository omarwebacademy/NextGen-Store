import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1">
            <h3 className="font-heading font-bold text-lg mb-6 uppercase">Products</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/products/shoes" className="hover:underline hover:text-black">Shoes</Link></li>
              <li><Link to="/products/clothing" className="hover:underline hover:text-black">Clothing</Link></li>
              <li><Link to="/products/accessories" className="hover:underline hover:text-black">Accessories</Link></li>
              <li><Link to="/products/new-arrivals" className="hover:underline hover:text-black">New Arrivals</Link></li>
              <li><Link to="/products/best-sellers" className="hover:underline hover:text-black">Best Sellers</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-heading font-bold text-lg mb-6 uppercase">Sports</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/sports/running" className="hover:underline hover:text-black">Running</Link></li>
              <li><Link to="/sports/football" className="hover:underline hover:text-black">Football</Link></li>
              <li><Link to="/sports/basketball" className="hover:underline hover:text-black">Basketball</Link></li>
              <li><Link to="/sports/outdoor" className="hover:underline hover:text-black">Outdoor</Link></li>
              <li><Link to="/sports/training" className="hover:underline hover:text-black">Training</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-heading font-bold text-lg mb-6 uppercase">Support</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/contact" className="hover:underline hover:text-black font-bold">Contact Us</Link></li>
              <li><Link to="/support/help" className="hover:underline hover:text-black">Help Center</Link></li>
              <li><Link to="/support/returns-exchanges" className="hover:underline hover:text-black">Returns & Exchanges</Link></li>
              <li><Link to="/support/shipping" className="hover:underline hover:text-black">Shipping</Link></li>
              <li><Link to="/support/size-charts" className="hover:underline hover:text-black">Size Charts</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-heading font-bold text-lg mb-6 uppercase">Company Info</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/company/about-us" className="hover:underline hover:text-black">About Us</Link></li>
              <li><Link to="/blog" className="hover:underline hover:text-black font-bold">Blog & Stories</Link></li>
              <li><Link to="/company/careers" className="hover:underline hover:text-black">Careers</Link></li>
              <li><Link to="/company/press" className="hover:underline hover:text-black">Press</Link></li>
              <li><Link to="/company/sustainability" className="hover:underline hover:text-black">Sustainability</Link></li>
            </ul>
            <div className="flex space-x-4 mt-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-500" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
                <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-500" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel">
                <Youtube className="w-6 h-6 cursor-pointer hover:text-gray-500" />
              </a>
            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="/company/privacy-policy" className="cursor-pointer hover:text-black">Privacy Policy</Link>
            <Link to="/company/terms-and-conditions" className="cursor-pointer hover:text-black">Terms and Conditions</Link>
            <Link to="/company/cookies" className="cursor-pointer hover:text-black">Cookies</Link>
          </div>
          <p>© 2026 NextGen Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};