import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';

export const Home = () => {
  return (
    <div className="space-y-20 pb-20">
      <SEO 
        title="Home" 
        description="Welcome to the official NextGen Store. Shop for premium shoes, clothing and view new collections for running, football, training and more."
      />

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full bg-black text-white overflow-hidden" aria-label="Hero Banner">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/adidashero/1920/1080')] bg-cover bg-center opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="relative h-full flex flex-col justify-end items-start p-8 md:p-20 max-w-7xl mx-auto">
          <h2 className="text-sm font-bold tracking-[0.2em] mb-4 text-adidas-gray uppercase animate-fadeIn">New Arrival</h2>
          <h1 className="text-5xl md:text-8xl font-heading font-bold uppercase mb-8 leading-none animate-slideUp">
            The Future<br/>Of Sport
          </h1>
          <div className="flex flex-col md:flex-row gap-4 animate-fadeIn delay-300">
            <Link to="/products/new-arrivals" className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition flex items-center gap-2 focus:ring-4 focus:ring-blue-500">
              Shop Now <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link to="/stylist" className="bg-transparent border border-white text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white/10 transition flex items-center gap-2 focus:ring-4 focus:ring-blue-500">
              Ask AI Stylist <Sparkles className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4" aria-labelledby="popular-heading">
        <h2 id="popular-heading" className="text-3xl font-heading font-bold uppercase mb-8">Popular Right Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Running', link: '/sports/running', img: 'https://picsum.photos/seed/adidasRunning/800/1000' },
            { name: 'Football', link: '/sports/football', img: 'https://picsum.photos/seed/adidasFootball/800/1000' },
            { name: 'Essentials', link: '/products/clothing', img: 'https://picsum.photos/seed/adidasEssentials/800/1000' }
          ].map((cat) => (
            <Link to={cat.link} key={cat.name} className="group relative h-[500px] overflow-hidden cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 rounded-lg">
              <img 
                src={cat.img} 
                alt={`${cat.name} Collection`} 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
              <div className="absolute bottom-8 left-8">
                <span className="bg-white text-black px-4 py-2 text-sm font-bold uppercase tracking-wider mb-2 inline-block">Collection</span>
                <h3 className="text-4xl font-heading font-bold text-white uppercase underline decoration-transparent group-hover:decoration-white transition-all underline-offset-8">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* AI Teaser */}
      <section className="bg-gray-100 py-24" aria-labelledby="ai-stylist-heading">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 id="ai-stylist-heading" className="text-4xl md:text-5xl font-heading font-bold uppercase mb-6">Meet Your New <br/>Personal Stylist</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-md">
                Not sure what to wear for your next marathon or casual hangout? Our AI Stylist, powered by Gemini, creates custom looks just for you.
              </p>
              <Link to="/stylist" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition focus:ring-4 focus:ring-blue-500">
                Try AI Stylist <Sparkles className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
            <div className="order-1 md:order-2 h-[400px] bg-white shadow-xl p-6 relative">
              <div className="absolute -top-4 -right-4 bg-adidas-accent text-white px-4 py-2 font-bold uppercase transform rotate-3">New Feature</div>
              {/* Mock Chat UI */}
              <div className="h-full border border-gray-200 flex flex-col" aria-hidden="true">
                <div className="flex-1 p-4 bg-gray-50 overflow-hidden">
                   <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm mb-4 max-w-[80%]">
                     <p className="text-sm font-bold mb-1">AI Stylist</p>
                     <p className="text-xs text-gray-600">I recommend the Ultraboost Light for your 5k run. It offers superior energy return!</p>
                   </div>
                   <div className="bg-black text-white p-3 rounded-lg rounded-tr-none shadow-sm ml-auto max-w-[80%]">
                     <p className="text-xs">That sounds perfect, thanks!</p>
                   </div>
                </div>
                <div className="p-3 border-t bg-white">
                   <div className="h-8 bg-gray-100 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
         </div>
      </section>
    </div>
  );
};