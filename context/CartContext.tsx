import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, size?: string) => void;
  removeFromCart: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, delta: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product: Product, size: string = 'M') => {
    // Check global stock for this product
    if (product.stock <= 0) {
      alert("Sorry, this item is out of stock.");
      return;
    }

    setCart(prev => {
      // Check if same product AND same size exists
      const existing = prev.find(p => p.id === product.id && p.selectedSize === size);
      
      // Calculate total quantity currently in cart for this product ID (across all sizes)
      const currentTotalInCart = prev
        .filter(p => p.id === product.id)
        .reduce((sum, item) => sum + item.quantity, 0);

      if (currentTotalInCart + 1 > product.stock) {
        alert("You cannot add more items than are available in stock.");
        return prev;
      }

      if (existing) {
        return prev.map(p => 
          p.id === product.id && p.selectedSize === size 
            ? { ...p, quantity: p.quantity + 1 } 
            : p
        );
      }
      setIsCartOpen(true);
      return [...prev, { ...product, quantity: 1, selectedSize: size }];
    });
  };

  const removeFromCart = (id: string, size: string) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));
  };

  const updateQuantity = (id: string, size: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.selectedSize === size) {
        const newQuantity = item.quantity + delta;
        
        // Prevent going below 1
        if (newQuantity < 1) return item;

        // Check stock limit when increasing
        if (delta > 0 && newQuantity > item.stock) {
          alert(`Only ${item.stock} items available in stock.`);
          return item;
        }

        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      isCartOpen,
      openCart,
      closeCart,
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      cartTotal, 
      cartCount 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};