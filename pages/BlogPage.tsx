import React from 'react';
import { useStore } from '../context/StoreContext';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

export const BlogPage = () => {
  const { blogPosts } = useStore();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
      <SEO title="Blog & Stories" description="Read the latest news, innovation stories, and style guides from Adidas." />
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-4">Stories</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the latest from the world of sport, culture, and innovation. 
          Behind the scenes access to our athletes, designers, and creators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition duration-300 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                {post.category}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
              </div>
              
              <h2 className="text-xl font-heading font-bold uppercase mb-3 leading-tight group-hover:text-gray-700 transition">
                {post.title}
              </h2>
              
              <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-3">
                {post.excerpt}
              </p>
              
              <Link 
                to={`/blog/${post.id}`} 
                className="inline-flex items-center gap-2 font-bold uppercase text-sm tracking-wider hover:underline underline-offset-4"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-20 bg-black text-white rounded-2xl p-8 md:p-16 text-center">
        <h2 className="text-3xl font-heading font-bold uppercase mb-4">Join the Conversation</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">Sign up for our newsletter to get the latest stories, product drops, and exclusive offers delivered to your inbox.</p>
        <form className="max-w-md mx-auto flex gap-2">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-4 py-3 text-black rounded focus:outline-none" 
            required
          />
          <button type="submit" className="bg-white text-black px-6 py-3 font-bold uppercase hover:bg-gray-200 transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
