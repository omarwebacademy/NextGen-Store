import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from?.pathname || "/admin/dashboard";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Force strict admin email check in UI for clarity, though Context handles the logic
    if (email !== 'admin@nextgen.com') {
        setTimeout(() => {
            setError('Invalid admin credentials. Please use the authorized admin email.');
            setLoading(false);
        }, 500);
        return;
    }

    setTimeout(async () => {
      await login(email, password);
      setLoading(false);
      navigate(from, { replace: true });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="bg-black p-8 text-center">
           <Lock className="w-12 h-12 text-white mx-auto mb-4" />
           <h1 className="text-2xl font-heading font-bold text-white uppercase tracking-widest">Admin Panel</h1>
           <p className="text-gray-400 text-sm mt-2">Secure Access Only</p>
        </div>
        
        <form onSubmit={handleLogin} className="p-8 space-y-6">
          {error && (
            <div className="p-3 bg-red-100 text-red-700 text-sm font-bold rounded">
                {error}
            </div>
          )}
          
          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-black transition-colors"
              placeholder="admin@nextgen.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-black transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition disabled:opacity-70"
          >
            {loading ? 'Authenticating...' : 'Enter Dashboard'}
          </button>
        </form>
        <div className="bg-gray-50 p-4 text-center border-t text-xs text-gray-500">
          Authorized personnel only. All activities are monitored.
        </div>
      </div>
    </div>
  );
};