import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password?: string) => Promise<boolean>;
  signup: (name: string, email: string, password?: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
  }, [user]);

  const login = async (email: string, password?: string): Promise<boolean> => {
    // SIMULATED AUTHENTICATION LOGIC
    // In a real app, this would hit an API endpoint.
    
    // Admin Simulation
    if (email.toLowerCase() === 'admin@nextgen.com') {
      const adminUser: User = {
        id: 'admin-001',
        name: 'Admin User',
        email: email,
        role: 'admin'
      };
      setUser(adminUser);
      return true;
    }

    // Customer Simulation
    const customerUser: User = {
      id: `u-${Date.now()}`,
      name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1), // Auto-generate name from email
      email: email,
      role: 'customer'
    };
    
    setUser(customerUser);
    return true;
  };

  const signup = async (name: string, email: string, password?: string) => {
    // Default to customer role on signup
    const newUser: User = {
      id: `u-${Date.now()}`,
      name,
      email,
      role: 'customer'
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    // Optional: Redirect logic can be handled by the component calling logout
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      login, 
      signup, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};