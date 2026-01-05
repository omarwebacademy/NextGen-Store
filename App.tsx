import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProductListing } from './pages/ProductListing';
import { ProductDetail } from './pages/ProductDetail';
import { SupportPage } from './pages/SupportPage';
import { CompanyPage } from './pages/CompanyPage';
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { Stylist } from './pages/Stylist';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderSuccessPage } from './pages/OrderSuccessPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

// Specific Product Pages
import { ShoesPage } from './pages/products/Shoes';
import { ClothingPage } from './pages/products/Clothing';
import { AccessoriesPage } from './pages/products/Accessories';

// New Dedicated Pages
import { AboutPage } from './pages/company/AboutPage';
import { CareersPage } from './pages/company/CareersPage';
import { SustainabilityPage } from './pages/company/SustainabilityPage';
import { ReturnsPage } from './pages/support/ReturnsPage';
import { ShippingPage } from './pages/support/ShippingPage';
import { SizeCharts } from './pages/support/SizeCharts';
import { PrivacyPolicy, TermsConditions, CookiesPolicy } from './pages/legal/LegalPages';

// Admin Imports
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminLogin } from './pages/admin/AdminLogin';
import { DashboardOverview } from './pages/admin/dashboard/Overview';
import { Analytics } from './pages/admin/dashboard/Analytics';
import { Notifications } from './pages/admin/dashboard/Notifications';
import { ProductList } from './pages/admin/products/ProductList';
import { AddProduct } from './pages/admin/products/AddProduct';
import { EditProduct } from './pages/admin/products/EditProduct';
import { Inventory } from './pages/admin/products/Inventory';
import { OrderList } from './pages/admin/orders/OrderList';
import { OrderDetails } from './pages/admin/orders/OrderDetails';
import { Returns } from './pages/admin/orders/Returns';
import { CustomerList } from './pages/admin/customers/CustomerList';
import { CustomerProfile } from './pages/admin/customers/CustomerProfile';
import { BlogManager } from './pages/admin/content/BlogManager';
import { BannerManager } from './pages/admin/content/BannerManager';
import { Reviews } from './pages/admin/content/Reviews';
import { Discounts } from './pages/admin/marketing/Discounts';
import { StoreSettings } from './pages/admin/settings/StoreSettings';
import { AdminUsers } from './pages/admin/settings/AdminUsers';
import { ShippingAndPayments } from './pages/admin/settings/ShippingAndPayments';
import { SystemStatus } from './pages/admin/system/SystemStatus';

// Placeholder for other admin pages
const AdminPlaceholder = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-[50vh] text-center">
    <h2 className="text-3xl font-heading font-bold text-gray-300 mb-4">{title}</h2>
    <p className="text-gray-500">This module is under development.</p>
  </div>
);

const App = () => {
  const { user } = useAuth();

  return (
    <HashRouter>
      <Routes>
        {/* --- ADMIN ROUTES --- */}
        <Route path="/admin/login" element={
          user?.role === 'admin' ? <Navigate to="/admin/dashboard" replace /> : <AdminLogin />
        } />
        
        <Route path="/admin" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="/admin/dashboard" />} />
          
          <Route path="dashboard" element={<DashboardOverview />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="dashboard/notifications" element={<Notifications />} />
          
          <Route path="products" element={<ProductList />} />
          <Route path="products/create" element={<AddProduct />} />
          <Route path="products/brands" element={<AdminPlaceholder title="Brand Management" />} />
          <Route path="products/categories" element={<AdminPlaceholder title="Category Management" />} />
          <Route path="products/inventory" element={<Inventory />} />
          <Route path="products/:id/edit" element={<EditProduct />} />
          
          <Route path="orders" element={<OrderList />} />
          <Route path="orders/returns" element={<Returns />} />
          <Route path="orders/:id" element={<OrderDetails />} />
          
          <Route path="customers" element={<CustomerList />} />
          <Route path="customers/:id" element={<CustomerProfile />} />
          
          <Route path="marketing" element={<Navigate to="/admin/marketing/discounts" />} />
          <Route path="marketing/campaigns" element={<AdminPlaceholder title="Campaigns" />} />
          <Route path="marketing/discounts" element={<Discounts />} />
          
          <Route path="content" element={<Navigate to="/admin/content/blog" />} />
          <Route path="content/blog" element={<BlogManager />} />
          <Route path="content/reviews" element={<Reviews />} />
          <Route path="content/banners" element={<BannerManager />} />
          
          <Route path="shipping-payments" element={<ShippingAndPayments />} />
          
          <Route path="settings" element={<Navigate to="/admin/settings/general" />} />
          <Route path="settings/general" element={<StoreSettings />} />
          <Route path="settings/users" element={<AdminUsers />} />
          
          <Route path="system" element={<SystemStatus />} />
        </Route>


        {/* --- STORE ROUTES --- */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <LoginPage />} />
          <Route path="/signup" element={user ? <Navigate to="/dashboard" /> : <SignupPage />} />
          
          <Route path="/dashboard" element={
            <ProtectedRoute allowedRoles={['customer', 'admin']}>
              <DashboardPage />
            </ProtectedRoute>
          } />
          
          {/* Cart & Checkout */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderSuccessPage />} />

          {/* Content Pages */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Specific Company Pages */}
          <Route path="/company/about-us" element={<AboutPage />} />
          <Route path="/company/careers" element={<CareersPage />} />
          <Route path="/company/sustainability" element={<SustainabilityPage />} />
          <Route path="/company/press" element={<AboutPage />} />
          
          {/* Specific Support Pages */}
          <Route path="/support/returns-exchanges" element={<ReturnsPage />} />
          <Route path="/support/shipping" element={<ShippingPage />} />
          <Route path="/support/size-charts" element={<SizeCharts />} />
          <Route path="/support/help" element={<SupportPage />} />

          {/* Legal Pages */}
          <Route path="/company/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/company/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/company/cookies" element={<CookiesPolicy />} />

          {/* Specific Product Routes */}
          <Route path="/products/shoes" element={<ShoesPage />} />
          <Route path="/products/clothing" element={<ClothingPage />} />
          <Route path="/products/accessories" element={<AccessoriesPage />} />
          
          {/* Dynamic Fallbacks */}
          <Route path="/products/:category" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/sports/:sport" element={<ProductListing />} />
          <Route path="/support/:topic" element={<SupportPage />} />
          <Route path="/company/:topic" element={<CompanyPage />} />
          <Route path="/stylist" element={<Stylist />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;