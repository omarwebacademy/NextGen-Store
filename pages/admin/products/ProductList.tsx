import React from 'react';
import { useStore } from '../../../context/StoreContext';
import { Edit, Trash2, Plus, Filter, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProductList = () => {
  const { products, deleteProduct } = useStore();

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
           <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">All Products</h1>
           <p className="text-gray-500 text-sm">Manage your catalog, prices, and inventory.</p>
        </div>
        <div className="flex gap-2">
           <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 text-sm font-bold rounded hover:bg-gray-50">
             <Filter className="w-4 h-4" /> Filter
           </button>
           <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 text-sm font-bold rounded hover:bg-gray-50">
             <Download className="w-4 h-4" /> Export
           </button>
           <Link to="/admin/products/create" className="flex items-center gap-2 bg-black text-white px-4 py-2 text-sm font-bold rounded hover:bg-gray-800">
             <Plus className="w-4 h-4" /> Add Product
           </Link>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Product</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Category</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Price</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Stock</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Status</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded overflow-hidden">
                        <img src={product.image} alt="" className="w-full h-full object-cover mix-blend-multiply" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-gray-900">{product.name}</p>
                        <p className="text-xs text-gray-500">ID: {product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{product.category} / {product.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-sm">${product.price}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">124</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link to={`/admin/products/${product.id}/edit`} className="p-2 hover:bg-gray-200 rounded text-gray-500 hover:text-black transition">
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button onClick={() => handleDelete(product.id)} className="p-2 hover:bg-red-50 rounded text-gray-400 hover:text-red-600 transition">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
