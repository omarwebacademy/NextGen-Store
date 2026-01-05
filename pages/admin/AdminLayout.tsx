import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingBag, ShoppingCart, Users, Megaphone, 
  FileText, BarChart3, Settings, ChevronDown, ChevronRight, LogOut,
  Bell, Search, Menu, Truck, Server, Shield
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const { logout, user } = useAuth();

  const isActive = (path: string) => location.pathname.includes(path);

  const MenuItem = ({ icon: Icon, label, path, subItems }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const active = isActive(path);

    if (subItems) {
      return (
        <div className="mb-1">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors ${active || isOpen ? 'text-white bg-gray-800' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
          >
            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5" />
              {isSidebarOpen && <span>{label}</span>}
            </div>
            {isSidebarOpen && (isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />)}
          </button>
          
          {isOpen && isSidebarOpen && (
            <div className="bg-gray-900 py-2">
              {subItems.map((item: any) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={`block pl-12 pr-4 py-2 text-xs font-medium ${location.pathname === item.path ? 'text-adidas-accent' : 'text-gray-500 hover:text-white'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link 
        to={path}
        className={`flex items-center gap-3 px-4 py-3 text-sm font-medium mb-1 transition-colors ${active ? 'text-white bg-gray-800 border-r-4 border-adidas-accent' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
      >
        <Icon className="w-5 h-5" />
        {isSidebarOpen && <span>{label}</span>}
      </Link>
    );
  };

  const navItems = [
    {
      label: '1. Overview',
      icon: LayoutDashboard,
      path: '/admin/dashboard',
    },
    {
      label: '2. Products',
      icon: ShoppingBag,
      path: '/admin/products',
      subItems: [
        { label: 'All Products', path: '/admin/products' },
        { label: 'Add Product', path: '/admin/products/create' },
        { label: 'Inventory', path: '/admin/products/inventory' }
      ]
    },
    {
      label: '3. Orders',
      icon: ShoppingCart,
      path: '/admin/orders',
      subItems: [
        { label: 'All Orders', path: '/admin/orders' },
        { label: 'Returns', path: '/admin/orders/returns' }
      ]
    },
    {
      label: '4. Customers',
      icon: Users,
      path: '/admin/customers',
    },
    {
      label: '5. Content (CMS)',
      icon: FileText,
      path: '/admin/content',
      subItems: [
        { label: 'Blog', path: '/admin/content/blog' },
        { label: 'Reviews', path: '/admin/content/reviews' },
        { label: 'Banners', path: '/admin/content/banners' }
      ]
    },
    {
      label: '6. Marketing',
      icon: Megaphone,
      path: '/admin/marketing',
      subItems: [
        { label: 'Discounts', path: '/admin/marketing/discounts' },
        { label: 'Campaigns', path: '/admin/marketing/campaigns' }
      ]
    },
    {
      label: '7. Analytics',
      icon: BarChart3,
      path: '/admin/analytics',
    },
    {
      label: '8. Shipping & Pay',
      icon: Truck,
      path: '/admin/shipping-payments',
    },
    {
      label: '9. Settings',
      icon: Settings,
      path: '/admin/settings',
      subItems: [
        { label: 'General Info', path: '/admin/settings/general' },
        { label: 'Admin Users', path: '/admin/settings/users' }
      ]
    },
    {
      label: '10. System',
      icon: Server,
      path: '/admin/system',
    }
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside 
        className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-black text-white flex flex-col transition-all duration-300 ease-in-out flex-shrink-0 overflow-y-auto no-scrollbar`}
      >
        <div className="h-16 flex items-center justify-center border-b border-gray-800">
          {isSidebarOpen ? (
            <span className="font-heading font-bold text-2xl tracking-tighter">/// NEXTGEN</span>
          ) : (
             <span className="font-heading font-bold text-xl">///</span>
          )}
        </div>

        <nav className="flex-1 py-6 space-y-1">
          {navItems.map((item) => (
            <MenuItem key={item.label} {...item} />
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={logout}
            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors w-full px-2 py-2"
          >
            <LogOut className="w-5 h-5" />
            {isSidebarOpen && <span className="text-sm font-bold uppercase">Log Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-100 rounded">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="bg-gray-100 pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black w-64"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            </div>
            
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center gap-3 border-l pl-6 border-gray-200">
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xs uppercase">
                {user?.name.charAt(0) || 'A'}
              </div>
              <div className="text-sm hidden md:block">
                <p className="font-bold text-gray-900 leading-none">{user?.name || 'Admin User'}</p>
                <p className="text-gray-500 text-xs mt-0.5 capitalize">{user?.role || 'Super Admin'}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
           <Outlet />
        </main>
      </div>
    </div>
  );
};