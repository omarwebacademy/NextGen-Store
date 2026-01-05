export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Men' | 'Women' | 'Kids' | 'Accessories';
  type: 'Shoes' | 'Apparel' | 'Gear';
  sport?: 'Running' | 'Football' | 'Basketball' | 'Outdoor' | 'Training' | 'Lifestyle';
  image: string;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  new?: boolean;
  bestseller?: boolean;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export type UserRole = 'admin' | 'customer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Order {
  id: string;
  userId: string | 'guest';
  customerName: string;
  customerEmail: string;
  items: CartItem[];
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  products?: Product[];
}

export enum SortOption {
  NEWEST = 'Newest',
  PRICE_LOW = 'Price: Low-High',
  PRICE_HIGH = 'Price: High-Low',
  POPULAR = 'Most Popular'
}