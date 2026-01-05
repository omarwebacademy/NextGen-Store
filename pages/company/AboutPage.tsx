import React from 'react';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';
import { SEO } from '../../components/SEO';

export const AboutPage = () => {
  return (
    <div className="animate-fadeIn">
      <SEO title="About Us" description="Learn about NextGen's mission to redefine the future of sport." />
      
      {/* Hero */}
      <div className="relative h-[60vh] bg-black flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2565&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase mb-6 tracking-tight">We Are NextGen</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Defining the future of sport through innovation, sustainability, and style. We don't just follow trends; we set the pace.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
             <h2 className="text-3xl font-heading font-bold uppercase mb-6">Our Mission</h2>
             <p className="text-lg text-gray-700 leading-relaxed mb-6">
               At NextGen, we believe that sport has the power to change lives. Our mission is to provide the world's best athletes—and those who aspire to be—with the most advanced gear on the planet.
             </p>
             <p className="text-lg text-gray-700 leading-relaxed">
               Founded in 2024, we started with a single goal: to remove the barriers between potential and performance. Today, we are a global community of creators, dreamers, and doers.
             </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop" className="rounded-lg shadow-lg w-full h-64 object-cover mt-8" alt="Shoe detail" />
            <img src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1000&auto=format&fit=crop" className="rounded-lg shadow-lg w-full h-64 object-cover" alt="Athlete training" />
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <div>
                <Globe className="w-8 h-8 mx-auto mb-4 text-black" />
                <span className="block text-4xl font-heading font-bold mb-1">100+</span>
                <span className="text-sm uppercase text-gray-500 font-bold tracking-widest">Countries</span>
             </div>
             <div>
                <Users className="w-8 h-8 mx-auto mb-4 text-black" />
                <span className="block text-4xl font-heading font-bold mb-1">5M+</span>
                <span className="text-sm uppercase text-gray-500 font-bold tracking-widest">Happy Customers</span>
             </div>
             <div>
                <Award className="w-8 h-8 mx-auto mb-4 text-black" />
                <span className="block text-4xl font-heading font-bold mb-1">#1</span>
                <span className="text-sm uppercase text-gray-500 font-bold tracking-widest">Rated Brand</span>
             </div>
             <div>
                <TrendingUp className="w-8 h-8 mx-auto mb-4 text-black" />
                <span className="block text-4xl font-heading font-bold mb-1">2024</span>
                <span className="text-sm uppercase text-gray-500 font-bold tracking-widest">Founded</span>
             </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold uppercase mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition">
               <h3 className="font-bold text-lg mb-2">Innovation</h3>
               <p className="text-gray-600 text-sm">We never stop evolving. We use data and AI to build the future.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition">
               <h3 className="font-bold text-lg mb-2">Sustainability</h3>
               <p className="text-gray-600 text-sm">We are committed to zero carbon footprint by 2030.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition">
               <h3 className="font-bold text-lg mb-2">Inclusion</h3>
               <p className="text-gray-600 text-sm">Sport is for everyone. We build for every body and every ability.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};