# Adidas NextGen Store

A high-fidelity, full-stack capable e-commerce application designed to replicate the premium digital experience of the Adidas online store. This project features a dual-interface system: a customer-facing storefront with AI styling capabilities and a comprehensive admin dashboard for store management.

## 🚀 Key Features

### Storefront (Customer)
*   **Dynamic Product Catalog**: Browse by category (Men, Women, Kids), sport (Running, Football), or collection.
*   **AI Personal Stylist**: Integrated with Google Gemini API to provide personalized outfit recommendations based on natural language queries.
*   **Shopping Cart & Checkout**: Full state-managed cart with real-time calculations, tax estimation, and a multi-step checkout simulation.
*   **Responsive Design**: Mobile-first architecture ensuring seamless experience across devices.
*   **SEO & Accessibility**: Dynamic meta tags, semantic HTML5, and ARIA compliance for inclusive access.

### Admin Dashboard (Business)
*   **Secure Access**: Protected routes requiring authentication.
*   **Analytics Hub**: Real-time visualization of sales, traffic, and conversion rates using Recharts.
*   **Inventory Management**: CRUD operations for products (Add, Edit, Delete).
*   **Order Fulfillment**: View order details, status, and customer information.
*   **Content Management**: Tools to manage blog posts and banners (UI mocked).

## 🛠 Tech Stack

*   **Core**: React 19, TypeScript
*   **Routing**: React Router DOM v7
*   **Styling**: Tailwind CSS (Utility-first)
*   **State Management**: React Context API (AuthContext, CartContext, StoreContext)
*   **AI Integration**: Google GenAI SDK (Gemini 2.5 Flash)
*   **Visualization**: Recharts
*   **Icons**: Lucide React

## 📂 Project Structure

```bash
/
├── components/          # Reusable UI components
│   ├── Layout.tsx       # Main layout with Header/Footer
│   ├── SEO.tsx          # Head management
│   └── CartDrawer.tsx   # Slide-out shopping bag
├── context/             # Global State Management
│   ├── AuthContext.tsx  # User & Admin authentication
│   ├── CartContext.tsx  # Shopping bag logic
│   └── StoreContext.tsx # "Database" layer (Products/Orders)
├── pages/
│   ├── admin/           # Admin Dashboard views
│   │   ├── dashboard/   # Analytics & Overview
│   │   ├── products/    # Product CRUD
│   │   └── orders/      # Order management
│   ├── products/        # Specific category pages
│   ├── CartPage.tsx     # Full cart view
│   ├── CheckoutPage.tsx # Payment flow
│   └── Stylist.tsx      # AI Chat interface
├── services/            # External API integrations (Gemini)
└── types.ts             # TypeScript interfaces
```

## 🗺️ Routing System

### Public Routes
*   `/` - Homepage
*   `/products/:category` - Dynamic listing (Shoes, Clothing, etc.)
*   `/product/:id` - Product details
*   `/cart` - Shopping bag
*   `/checkout` - Secure checkout
*   `/stylist` - AI Stylist chat
*   `/login` / `/signup` - Customer auth

### Admin Routes (Protected)
*   `/admin/login` - Admin entry point
*   `/admin` - Layout wrapper
    *   `/dashboard` - Overview & Analytics
    *   `/products` - Inventory list
    *   `/products/create` - Add new item
    *   `/orders` - Order management
    *   `/customers` - CRM view

## 🔐 Admin Dashboard Workflow

1.  **Authentication**: Access `/admin/login`. Default mock credentials allow entry to demonstrate the flow.
2.  **Context Logic**: The `AuthContext` tracks the `isAdmin` boolean state. If `false`, access to `/admin/*` routes is blocked via `Navigate` components in `App.tsx`.
3.  **Data Persistence**: Admin actions (adding products, deleting items) modify the `StoreContext` state, which persists to `localStorage`. This simulates a real database, allowing changes to reflect immediately on the storefront.

## 📈 Future Scalability & Roadmap

This project is architected to be "Framework Ready", meaning it can be easily migrated to Next.js or Remix for production scaling.

1.  **API Integration Layer**:
    *   Replace `StoreContext` with React Query or SWR.
    *   Connect to a headless CMS (Contentful/Strapi) or a real backend (Node.js/PostgreSQL) for product data.

2.  **Authentication**:
    *   Replace local mock auth with Auth0, Firebase Auth, or NextAuth.js for secure, token-based sessions.

3.  **Performance**:
    *   Implement Server-Side Rendering (SSR) for product pages to improve SEO ranking.
    *   Add image optimization service (Cloudinary/Vercel Blob).

4.  **Payment Processing**:
    *   Replace simulated checkout with Stripe Elements or PayPal SDK integration.

## 🎨 Design System

The app follows the "Fierce" design methodology:
*   **Typography**: 'Oswald' for headings (bold, uppercase) and 'Inter' for body text.
*   **Color Palette**: Minimalist Black/White with `adidas-gray` (#eceff1) for backgrounds and `adidas-accent` (#e81e25) for high-priority calls to action.
