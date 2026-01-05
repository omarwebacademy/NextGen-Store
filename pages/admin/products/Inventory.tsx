import React, { useState } from 'react';
import { useStore } from '../../../context/StoreContext';
import { Search, Save, AlertTriangle, CheckCircle } from 'lucide-react';

export const Inventory = () => {
  const { products, updateStock } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Local state to handle input changes before saving, or instant save. 
  // For better UX in a dashboard, let's make it direct update for this demo or simple "on blur" logic.
  // To keep it robust, we will edit the live context directly via the input, but in a real app you might want a "Save" button.
  
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStockChange = (productId: string, value: number) => {
    // Ensure value is non-negative
    const safeValue = Math.max(0, value);
    updateStock(productId, safeValue);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">Inventory Management</h1>
          <p className="text-gray-500 text-sm">Track and update stock levels. Changes reflect immediately on the storefront.</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search products by name..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Product</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">SKU</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Current Stock</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Status</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 text-right">Adjust</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredProducts.map((product) => {
              return (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded overflow-hidden">
                        <img src={product.image} alt="" className="w-full h-full object-cover mix-blend-multiply" />
                      </div>
                      <span className="font-bold text-sm">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-500">
                    NG-{product.id.substring(0, 6).toUpperCase()}
                  </td>
                  <td className="px-6 py-4 font-bold text-sm">
                    {product.stock} Units
                  </td>
                  <td className="px-6 py-4">
                    {product.stock <= 5 ? (
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${product.stock === 0 ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        <AlertTriangle className="w-3 h-3" /> {product.stock === 0 ? 'Out of Stock' : 'Low Stock'}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3" /> In Stock
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 items-center">
                       <button 
                        onClick={() => handleStockChange(product.id, product.stock - 1)}
                        className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100 font-bold"
                       >-</button>
                       <input 
                         type="number" 
                         className="w-16 p-1 text-center border border-gray-200 rounded text-sm font-bold focus:border-black focus:outline-none"
                         value={product.stock}
                         onChange={(e) => handleStockChange(product.id, parseInt(e.target.value) || 0)}
                       />
                       <button 
                        onClick={() => handleStockChange(product.id, product.stock + 1)}
                        className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100 font-bold"
                       >+</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};