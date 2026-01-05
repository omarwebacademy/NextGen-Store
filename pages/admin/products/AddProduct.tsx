import React, { useState } from 'react';
import { Upload, Save, Search } from 'lucide-react';
import { useStore } from '../../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

export const AddProduct = () => {
  const { addProduct } = useStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Men',
    type: 'Shoes',
    image: 'https://picsum.photos/seed/new/600/600',
    stock: '100',
    seoTitle: '',
    seoDesc: ''
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!formData.name || !formData.price) return;

    addProduct({
      name: formData.name,
      description: formData.description,
      price: Number(formData.price),
      category: formData.category as any,
      type: formData.type as any,
      image: formData.image,
      features: ['New Arrival'],
      rating: 0,
      reviews: 0,
      new: true,
      stock: Number(formData.stock)
    });
    
    navigate('/admin/products');
  };

  return (
    <div className="max-w-5xl mx-auto animate-fadeIn pb-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">Add New Product</h1>
        <div className="flex gap-2">
          <button onClick={() => navigate('/admin/products')} className="px-4 py-2 border border-gray-300 rounded text-sm font-bold hover:bg-gray-50">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 bg-black text-white rounded text-sm font-bold hover:bg-gray-800 flex items-center gap-2">
            <Save className="w-4 h-4" /> Save Product
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
                <input name="name" onChange={handleChange} type="text" className="w-full p-2 border border-gray-300 rounded focus:border-black focus:outline-none" placeholder="e.g. Ultraboost Light" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Description</label>
                <textarea name="description" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:border-black focus:outline-none h-32" placeholder="Product description..."></textarea>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold uppercase text-sm mb-4">Media</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:bg-gray-50 transition cursor-pointer">
              <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
              <p className="text-sm font-bold text-gray-600">Click to upload images</p>
              <p className="text-xs text-gray-400">or drag and drop</p>
            </div>
          </div>

          {/* SEO Section */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold uppercase text-sm mb-4 flex items-center gap-2">
              <Search className="w-4 h-4" /> SEO Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Meta Title</label>
                <input name="seoTitle" onChange={handleChange} type="text" className="w-full p-2 border border-gray-300 rounded focus:border-black focus:outline-none" placeholder="Product Page Title" />
                <p className="text-xs text-gray-400 mt-1">Leave blank to use Product Name.</p>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Meta Description</label>
                <textarea name="seoDesc" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:border-black focus:outline-none h-20" placeholder="Brief description for search engines..."></textarea>
                <p className="text-xs text-gray-400 mt-1">Max 160 characters recommended.</p>
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
                <select name="category" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded">
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Type</label>
                <select name="type" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded">
                  <option value="Shoes">Shoes</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Gear">Gear</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Price ($)</label>
                <input name="price" onChange={handleChange} type="number" className="w-full p-2 border border-gray-300 rounded" placeholder="0.00" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Stock</label>
                <input name="stock" onChange={handleChange} type="number" defaultValue="100" className="w-full p-2 border border-gray-300 rounded" placeholder="100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};