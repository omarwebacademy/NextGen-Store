import React from 'react';
import { Leaf, Recycle, Droplets } from 'lucide-react';
import { SEO } from '../../components/SEO';

export const SustainabilityPage = () => {
  return (
    <div className="animate-fadeIn">
      <SEO title="Sustainability" description="Our commitment to the planet and a greener future." />

      <div className="relative h-[50vh] bg-green-900 flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-6 tracking-tight">End Plastic Waste</h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed">
            Sustainability isn't just a goal; it's our responsibility. We are innovating to reduce our footprint and protect the places we play.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-24">
           <div>
             <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
               <Recycle className="w-10 h-10 text-green-700" />
             </div>
             <h3 className="text-xl font-bold uppercase mb-3">Recycled Materials</h3>
             <p className="text-gray-600">By 2025, 90% of our products will be made from sustainable materials.</p>
           </div>
           <div>
             <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
               <Leaf className="w-10 h-10 text-green-700" />
             </div>
             <h3 className="text-xl font-bold uppercase mb-3">Carbon Neutral</h3>
             <p className="text-gray-600">We are committed to achieving climate neutrality across our entire value chain by 2030.</p>
           </div>
           <div>
             <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
               <Droplets className="w-10 h-10 text-green-700" />
             </div>
             <h3 className="text-xl font-bold uppercase mb-3">Water Saving</h3>
             <p className="text-gray-600">Our new dyeing technologies use 50% less water than traditional methods.</p>
           </div>
        </div>

        <div className="bg-gray-100 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
           <div className="p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-heading font-bold uppercase mb-6">The Loop Initiative</h2>
              <p className="text-gray-700 text-lg mb-8">
                Made to be remade. Our Loop products are designed from a single material, meaning they can be fully recycled into new high-performance gear, keeping waste out of landfills.
              </p>
              <button className="self-start bg-black text-white px-8 py-3 font-bold uppercase rounded hover:bg-gray-800">Shop Sustainable</button>
           </div>
           <div className="h-96 md:h-auto bg-[url('https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=2679&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>
      </div>
    </div>
  );
};