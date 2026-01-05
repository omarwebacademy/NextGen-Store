import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu, Search, ShoppingBag, User as UserIcon, Sparkles, LogIn } from 'lucide-react';
import { CartDrawer } from './CartDrawer';
import { Footer } from './Footer';
import { Breadcrumbs } from './Breadcrumbs';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export const Layout: React.FC = () => {
  const { user, logout } = useAuth();
  const { cartCount, isCartOpen, openCart, closeCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Accessibility: Skip to Content */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-black text-white px-4 py-2 font-bold uppercase transition-transform"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200" role="banner">
        <div className="bg-black text-white text-xs font-bold uppercase py-2 text-center tracking-widest" role="alert">
          Free Delivery on orders over $100 • Join the Club
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="p-2 text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-black rounded"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center group" aria-label="NextGen Home">
              <span className="font-heading font-bold text-3xl tracking-tighter transform -skew-x-6 group-hover:skew-x-0 transition-transform">NEXTGEN</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
              <Link to="/products/new-arrivals" className="text-sm font-bold uppercase hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-black rounded px-1">New</Link>
              <Link to="/products/shoes" className="text-sm font-bold uppercase hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-black rounded px-1">Shoes</Link>
              <Link to="/products/clothing" className="text-sm font-bold uppercase hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-black rounded px-1">Clothing</Link>
              <Link to="/sports/running" className="text-sm font-bold uppercase hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-black rounded px-1">Running</Link>
              <Link to="/products/best-sellers" className="text-sm font-bold uppercase text-red-600 hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-black rounded px-1">Sale</Link>
              <Link to="/stylist" className="text-sm font-bold uppercase text-black hover:text-gray-600 flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-black rounded px-1">
                <Sparkles className="w-3 h-3 text-adidas-accent" aria-hidden="true" /> AI Stylist
              </Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <div className="hidden lg:flex relative">
                 <label htmlFor="desktop-search" className="sr-only">Search products</label>
                 <input 
                   id="desktop-search"
                   type="text" 
                   placeholder="Search" 
                   className="bg-gray-100 px-4 py-2 pl-10 rounded text-sm focus:outline-none focus:ring-1 focus:ring-black w-32 focus:w-48 transition-all" 
                 />
                 <Search className="w-4 h-4 absolute left-3 top-3 text-gray-500" aria-hidden="true" />
              </div>
              
              {user ? (
                <Link to="/dashboard" className="text-gray-700 hover:text-black hidden sm:flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-black rounded" aria-label={`My Account: ${user.name}`}>
                  <UserIcon className="w-6 h-6" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase hidden xl:block group-hover:underline">{user.name.split(' ')[0]}</span>
                </Link>
              ) : (
                <Link to="/login" className="text-gray-700 hover:text-black hidden sm:block focus:outline-none focus:ring-2 focus:ring-black rounded" title="Login" aria-label="Login">
                  <LogIn className="w-6 h-6" aria-hidden="true" />
                </Link>
              )}

              <button 
                onClick={openCart} 
                className="relative text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-black rounded p-1"
                aria-label={`Shopping cart, ${cartCount} items`}
                aria-expanded={isCartOpen}
              >
                <ShoppingBag className="w-6 h-6" aria-hidden="true" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
           <div id="mobile-menu" className="md:hidden bg-white border-t p-4 space-y-4 shadow-lg absolute w-full left-0 z-50 overflow-y-auto max-h-[80vh]">
              <div className="flex justify-between items-center mb-6">
                 {user ? (
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                       <UserIcon className="w-6 h-6" />
                     </div>
                     <div>
                       <p className="text-sm font-bold">Hi, {user.name.split(' ')[0]}</p>
                       <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-gray-500 hover:underline">Go to Dashboard</Link>
                     </div>
                   </div>
                 ) : (
                   <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 font-bold uppercase text-sm">
                     <LogIn className="w-5 h-5" /> Log In / Sign Up
                   </Link>
                 )}
              </div>

              <div className="border-b pb-4">
                <h3 className="text-xs font-bold text-gray-500 uppercase mb-2">Products</h3>
                <Link to="/products/shoes" className="block text-sm font-bold uppercase py-1" onClick={() => setIsMobileMenuOpen(false)}>Shoes</Link>
                <Link to="/products/clothing" className="block text-sm font-bold uppercase py-1" onClick={() => setIsMobileMenuOpen(false)}>Clothing</Link>
                <Link to="/products/accessories" className="block text-sm font-bold uppercase py-1" onClick={() => setIsMobileMenuOpen(false)}>Accessories</Link>
                <Link to="/products/new-arrivals" className="block text-sm font-bold uppercase py-1" onClick={() => setIsMobileMenuOpen(false)}>New Arrivals</Link>
              </div>
              <div className="border-b py-4">
                <h3 className="text-xs font-bold text-gray-500 uppercase mb-2">Sports</h3>
                <Link to="/sports/running" className="block text-sm font-bold uppercase py-1" onClick={() => setIsMobileMenuOpen(false)}>Running</Link>
                <Link to="/sports/football" className="block text-sm font-bold uppercase py-1" onClick={() => setIsMobileMenuOpen(false)}>Football</Link>
                <Link to="/sports/basketball" className="block text-sm font-bold uppercase py-1" onClick={() => setIsMobileMenuOpen(false)}>Basketball</Link>
                <Link to="/sports/training" className="block text-sm font-bold uppercase py-1" onClick={() => setIsMobileMenuOpen(false)}>Training</Link>
              </div>
              <div className="pt-4">
                <Link to="/stylist" className="block text-sm font-bold uppercase text-red-600 mb-2" onClick={() => setIsMobileMenuOpen(false)}>AI Stylist</Link>
                <Link to="/support/help" className="block text-sm font-bold uppercase text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Help</Link>
                {user && (
                  <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="block w-full text-left text-sm font-bold uppercase text-gray-500 mt-4 pt-4 border-t">
                    Log Out
                  </button>
                )}
              </div>
           </div>
        )}
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-grow" role="main">
        <Breadcrumbs />
        <Outlet />
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={closeCart} 
      />
    </div>
  );
};