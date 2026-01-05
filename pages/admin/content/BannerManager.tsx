import React from 'react';

export const BannerManager = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">Banner Manager</h1>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
         <h3 className="font-bold uppercase text-sm mb-4">Homepage Hero</h3>
         <div className="aspect-video bg-gray-100 rounded flex items-center justify-center mb-4">
             <span className="text-gray-400 text-sm">Current Banner Preview</span>
         </div>
         <div className="flex gap-4">
             <button className="px-4 py-2 border border-gray-300 rounded text-sm font-bold">Change Image</button>
             <button className="px-4 py-2 border border-gray-300 rounded text-sm font-bold">Edit Text Overlay</button>
         </div>
      </div>
    </div>
  );
};
