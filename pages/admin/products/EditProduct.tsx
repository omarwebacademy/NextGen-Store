import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Save, ArrowLeft, Trash2 } from 'lucide-react';
import { useStore } from '../../../context/StoreContext';
import { Product } from '../../../types';

export const EditProduct = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProduct, updateProduct, deleteProduct } = useStore();
  
  const [formData, setFormData] = useState<Partial<Product> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const product = getProduct(id);
      if (product) {
        setFormData(product);
      } else {
        alert("Product not found");
        navigate('/admin/products');
      }
      setLoading(false);
    }
  }, [id, getProduct, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (formData) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSave = () => {
    if (id && formData) {
      updateProduct(id, formData);
      navigate('/admin/products');
    }
  };

  const handleDelete = () => {
    if (id && window.confirm("Are you sure you want to delete this product? This cannot be undone.")) {
      deleteProduct(id);
      navigate('/admin/products');
    }
  };

  if (loading || !formData) return <div className="p-8">Loading product data...</div>;

  return (
    <div className="max-w-5xl mx-auto animate-fadeIn pb-12">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/admin/products')} className="p-2 hover:bg-gray-200 rounded-full transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
              <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">Edit Product</h1>
              <p className="text-sm text-gray-500">ID: {id}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={handleDelete} className="px-4 py-2 border border-red-200 text-red-600 rounded text-sm font-bold hover:bg-red-50 flex items-center gap-2">
            <Trash2 className="w-4 h-4" /> Delete
          </button>
          <button onClick={handleSave} className="px-4 py-2 bg-black text-white rounded text-sm font-bold hover:bg-gray-800 flex items-center gap-2">
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold uppercase text-sm mb-4">Basic Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Product Name</label>
                <input 
                  name="name" 
                  value={formData.name || ''} 
                  onChange={handleChange} 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded focus:border-black focus:outline-none" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Description</label>
                <textarea 
                  name="description" 
                  value={formData.description || ''} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded focus:border-black focus:outline-none h-32" 
                ></textarea>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold uppercase text-sm mb-4">Media</h3>
            <div className="flex gap-6 items-start">
               <div className="w-32 h-32 bg-gray-100 rounded border border-gray-200 overflow-hidden">
                 <img src={formData.image} alt="Product" className="w-full h-full object-cover" />
               </div>
               <div className="flex-1">
                 <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Image URL</label>
                 <input 
                  name="image" 
                  value={formData.image || ''} 
                  onChange={handleChange} 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded focus:border-black focus:outline-none mb-2" 
                 />
                 <p className="text-xs text-gray-400">Enter a direct image URL (e.g., from CDN or storage bucket).</p>
               </div>
            </div>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold uppercase text-sm mb-4">Organization</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Category</label>
                <select 
                  name="category" 
                  value={formData.category} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Type</label>
                <select 
                  name="type" 
                  value={formData.type} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="Shoes">Shoes</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Gear">Gear</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Price ($)</label>
                <input 
                  name="price" 
                  value={formData.price || 0} 
                  onChange={handleChange} 
                  type="number" 
                  className="w-full p-2 border border-gray-300 rounded" 
                />
              </div>
              <div className="flex items-center gap-2 pt-2">
                 <input 
                  id="new"
                  type="checkbox" 
                  checked={formData.new || false}
                  onChange={(e) => setFormData({...formData, new: e.target.checked})}
                  className="w-4 h-4 text-black focus:ring-black"
                 />
                 <label htmlFor="new" className="text-sm font-medium">Mark as New Arrival</label>
              </div>
              <div className="flex items-center gap-2">
                 <input 
                  id="bestseller"
                  type="checkbox" 
                  checked={formData.bestseller || false}
                  onChange={(e) => setFormData({...formData, bestseller: e.target.checked})}
                  className="w-4 h-4 text-black focus:ring-black"
                 />
                 <label htmlFor="bestseller" className="text-sm font-medium">Mark as Bestseller</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
