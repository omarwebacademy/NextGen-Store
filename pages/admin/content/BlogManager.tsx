import React from 'react';
import { Plus, Edit } from 'lucide-react';

export const BlogManager = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">Blog Manager</h1>
        <button className="bg-black text-white px-4 py-2 text-sm font-bold rounded flex items-center gap-2">
           <Plus className="w-4 h-4" /> Create Post
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[1, 2, 3].map(i => (
             <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
                 <div className="h-40 bg-gray-100"></div>
                 <div className="p-6">
                     <h3 className="font-bold text-lg mb-2">The Future of Running</h3>
                     <p className="text-sm text-gray-500 mb-4">Published on Oct 20, 2025</p>
                     <button className="text-sm font-bold underline flex items-center gap-1 hover:text-adidas-accent">
                        <Edit className="w-3 h-3" /> Edit Post
                     </button>
                 </div>
             </div>
         ))}
      </div>
    </div>
  );
};
