import React from 'react';
import { UserPlus, Trash2 } from 'lucide-react';

export const AdminUsers = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
         <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">User Management</h1>
         <button className="bg-black text-white px-4 py-2 text-sm font-bold rounded flex items-center gap-2">
            <UserPlus className="w-4 h-4" /> Add User
         </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
         <table className="w-full text-left">
            <thead>
               <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">User</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Role</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 text-right">Action</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
               <tr>
                  <td className="px-6 py-4 text-sm font-bold">Admin User <span className="text-gray-400 font-normal">(You)</span></td>
                  <td className="px-6 py-4 text-sm">Super Admin</td>
                  <td className="px-6 py-4 text-right"></td>
               </tr>
               <tr>
                  <td className="px-6 py-4 text-sm font-bold">Editor Jane</td>
                  <td className="px-6 py-4 text-sm">Content Manager</td>
                  <td className="px-6 py-4 text-right">
                     <button className="text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4 ml-auto" /></button>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
    </div>
  );
};
