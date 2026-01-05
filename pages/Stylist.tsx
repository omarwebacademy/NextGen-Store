import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { getStylistRecommendation } from '../services/geminiService';
import { MOCK_PRODUCTS } from '../constants';

export const Stylist = () => {
  const [messages, setMessages] = useState<{role: 'user'|'model', text: string, products?: string[]}[]>([
    { role: 'model', text: 'Hello! I am your personal NextGen Stylist. Tell me what you are looking for (e.g., "running in the rain", "stylish gym outfit") and I will help you look your best.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const { text, recommendedIds } = await getStylistRecommendation(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text, products: recommendedIds }]);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 h-[80vh] flex flex-col">
       <div className="mb-6 text-center">
         <h1 className="text-3xl font-heading font-bold uppercase mb-2 flex items-center justify-center gap-3">
           <Sparkles className="w-8 h-8 text-adidas-accent" /> AI Stylist
         </h1>
         <p className="text-gray-500">Powered by Gemini 2.5</p>
       </div>

       <div className="flex-1 overflow-y-auto bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-inner mb-6 space-y-6">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl p-5 ${
                msg.role === 'user' ? 'bg-black text-white rounded-br-none' : 'bg-white text-black shadow-md rounded-bl-none border'
              }`}>
                <p className="text-sm md:text-base leading-relaxed">{msg.text}</p>
                {msg.products && msg.products.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs font-bold uppercase mb-3 text-gray-500">Recommended for you:</p>
                    <div className="grid grid-cols-1 gap-3">
                      {msg.products.map(pid => {
                        const p = MOCK_PRODUCTS.find(prod => prod.id === pid);
                        if (!p) return null;
                        return (
                          <Link to={`/product/${p.id}`} key={pid} className="flex gap-3 items-center bg-gray-50 p-2 rounded hover:bg-gray-100 transition group">
                            <img src={p.image} className="w-12 h-12 object-cover rounded bg-white" alt={p.name} />
                            <div className="flex-1">
                              <p className="font-bold text-sm truncate">{p.name}</p>
                              <p className="text-xs text-gray-500">${p.price}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-black" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          {loading && (
             <div className="flex justify-start">
               <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow border flex items-center gap-2">
                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
               </div>
             </div>
          )}
       </div>

       <div className="relative">
         <input 
           type="text" 
           value={input}
           onChange={(e) => setInput(e.target.value)}
           onKeyDown={(e) => e.key === 'Enter' && handleSend()}
           placeholder="Describe your style, activity, or needs..."
           className="w-full pl-6 pr-14 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black shadow-lg"
         />
         <button 
           onClick={handleSend}
           disabled={!input.trim() || loading}
           className="absolute right-2 top-2 p-2 bg-black text-white rounded-full hover:bg-gray-800 disabled:opacity-50 transition"
         >
           <ArrowRight className="w-5 h-5" />
         </button>
       </div>
    </div>
  );
};