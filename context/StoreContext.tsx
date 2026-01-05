import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, Order, CartItem, User } from '../types';
import { MOCK_PRODUCTS } from '../constants';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

interface StoreContextType {
  products: Product[];
  orders: Order[];
  blogPosts: BlogPost[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  updateStock: (id: string, newStock: number) => void;
  deleteProduct: (id: string) => void;
  createOrder: (items: CartItem[], total: number, user: User | null) => boolean;
  updateOrderStatus: (id: string, status: Order['status']) => void;
  getProduct: (id: string) => Product | undefined;
  getOrder: (id: string) => Order | undefined;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with MOCK_PRODUCTS but allow mutations
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('products');
    return saved ? JSON.parse(saved) : MOCK_PRODUCTS;
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('orders');
    return saved ? JSON.parse(saved) : [
       { 
         id: '#ORD-7752', 
         userId: 'u1', 
         customerName: 'Alex Shopper', 
         customerEmail: 'alex@example.com', 
         items: [{ ...MOCK_PRODUCTS[0], quantity: 1, selectedSize: '10' }], 
         total: 190.00, 
         status: 'Pending', 
         date: 'Oct 24, 2025' 
       },
       { 
         id: '#ORD-7751', 
         userId: 'u2', 
         customerName: 'Sarah Connor', 
         customerEmail: 'sarah@example.com', 
         items: [{ ...MOCK_PRODUCTS[1], quantity: 2, selectedSize: '8' }], 
         total: 200.00, 
         status: 'Shipped', 
         date: 'Oct 23, 2025' 
       }
    ];
  });

  // Mock Blog Posts
  const [blogPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'The Future of Running: Energy Return Explained',
      excerpt: 'Discover how our latest Ultraboost technology changes the game for long-distance runners.',
      content: 'Full article content goes here...',
      image: 'https://picsum.photos/seed/run/800/400',
      date: 'Oct 20, 2025',
      author: 'Adidas Running Team',
      category: 'Innovation'
    },
    {
      id: '2',
      title: 'Sustainable Style: From Ocean to Street',
      excerpt: 'How we are turning plastic waste into high-performance sportswear.',
      content: 'Full article content goes here...',
      image: 'https://picsum.photos/seed/ocean/800/400',
      date: 'Oct 18, 2025',
      author: 'Eco Team',
      category: 'Sustainability'
    },
    {
      id: '3',
      title: 'Retro Revival: The Return of the Samba',
      excerpt: 'Why this classic football shoe is taking over the fashion world once again.',
      content: 'Full article content goes here...',
      image: 'https://picsum.photos/seed/samba/800/400',
      date: 'Oct 15, 2025',
      author: 'Style Editor',
      category: 'Fashion'
    }
  ]);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: `p${Date.now()}`, // Generate simple ID
    };
    setProducts(prev => [newProduct, ...prev]);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const updateStock = (id: string, newStock: number) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, stock: newStock } : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const getProduct = (id: string) => {
    return products.find(p => p.id === id);
  };

  // Transactional Create Order
  const createOrder = (items: CartItem[], total: number, user: User | null): boolean => {
    // 1. Verify Stock Availability
    for (const item of items) {
      const product = products.find(p => p.id === item.id);
      if (!product || product.stock < item.quantity) {
        return false; // Transaction Failed: Out of stock
      }
    }

    // 2. Deduct Stock
    const updatedProducts = products.map(p => {
      const itemInCart = items.find(i => i.id === p.id);
      if (itemInCart) {
        return { ...p, stock: p.stock - itemInCart.quantity };
      }
      return p;
    });
    setProducts(updatedProducts);

    // 3. Create Order Record
    const newOrder: Order = {
      id: `#ORD-${Math.floor(Math.random() * 10000)}`,
      userId: user ? user.id : 'guest',
      customerName: user ? user.name : 'Guest User',
      customerEmail: user ? user.email : 'guest@example.com',
      items: items,
      total: total,
      status: 'Pending',
      date: new Date().toLocaleDateString()
    };
    setOrders(prev => [newOrder, ...prev]);
    return true; // Transaction Successful
  };

  const updateOrderStatus = (id: string, status: Order['status']) => {
    // Optional: If status becomes 'Cancelled', we could restock items here.
    // For now, we just update the status.
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
  };

  const getOrder = (id: string) => {
    const searchId = id.startsWith('#') ? id : `#${id}`;
    return orders.find(o => o.id === searchId);
  };

  return (
    <StoreContext.Provider value={{ 
      products, 
      orders, 
      blogPosts,
      addProduct, 
      updateProduct, 
      updateStock,
      deleteProduct, 
      createOrder, 
      updateOrderStatus,
      getProduct,
      getOrder
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within a StoreProvider');
  return context;
};