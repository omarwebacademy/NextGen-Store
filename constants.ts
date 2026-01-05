import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  // Existing Products
  {
    id: 'p1',
    name: 'Ultraboost Light',
    price: 190,
    category: 'Men',
    type: 'Shoes',
    sport: 'Running',
    image: 'https://picsum.photos/seed/adidas1/600/600',
    description: 'Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever.',
    features: ['Regular fit', 'Lace closure', 'Textile upper', 'Light BOOST'],
    rating: 4.8,
    reviews: 1240,
    new: true,
    stock: 15
  },
  {
    id: 'p2',
    name: 'Samba OG Shoes',
    price: 100,
    category: 'Women',
    type: 'Shoes',
    sport: 'Football',
    image: 'https://picsum.photos/seed/adidas2/600/600',
    description: 'Born on the pitch, the Samba is a timeless icon of street style.',
    features: ['Regular fit', 'Leather upper', 'Suede T-toe', 'Gum rubber outsole'],
    rating: 4.9,
    reviews: 3500,
    bestseller: true,
    stock: 8
  },
  {
    id: 'p3',
    name: 'Adicolor Classics Firebird Track Top',
    price: 80,
    category: 'Men',
    type: 'Apparel',
    sport: 'Lifestyle',
    image: 'https://picsum.photos/seed/adidas3/600/600',
    description: 'A modern remix of a legendary look. This track top is essential DNA.',
    features: ['Loose fit', 'Full zip with stand-up collar', '100% recycled polyester tricot'],
    rating: 4.7,
    reviews: 890,
    stock: 25
  },
  {
    id: 'p4',
    name: 'Essentials 3-Stripes Hoodie',
    price: 65,
    category: 'Women',
    type: 'Apparel',
    sport: 'Training',
    image: 'https://picsum.photos/seed/adidas4/600/600',
    description: 'Cozy comfort for everyday wear. The fleece lining keeps you warm post-workout.',
    features: ['Regular fit', 'Drawcord on hood', 'Kangaroo pocket'],
    rating: 4.6,
    reviews: 500,
    stock: 40
  },
  {
    id: 'p5',
    name: 'Forum Low Shoes',
    price: 110,
    category: 'Men',
    type: 'Shoes',
    sport: 'Basketball',
    image: 'https://picsum.photos/seed/adidas5/600/600',
    description: 'More than just a shoe, it is a statement. The Forum Low brings 80s basketball style to the streets.',
    features: ['Lace closure with hook-and-loop strap', 'Leather upper', 'Rubber outsole'],
    rating: 4.8,
    reviews: 210,
    stock: 5
  },
  {
    id: 'p6',
    name: 'Terrex Free Hiker 2',
    price: 200,
    category: 'Men',
    type: 'Shoes',
    sport: 'Outdoor',
    image: 'https://picsum.photos/seed/adidas9/600/600',
    description: 'Hiking shoes for long-distance comfort, made in part with Parley Ocean Plastic.',
    features: ['Regular fit', 'BOOST midsole', 'Continental™ Rubber outsole'],
    rating: 4.7,
    reviews: 320,
    stock: 12
  },
  {
    id: 'p7',
    name: 'Running Cap',
    price: 30,
    category: 'Accessories',
    type: 'Gear',
    sport: 'Running',
    image: 'https://picsum.photos/seed/adidas7/600/600',
    description: 'Keep the sun out of your eyes and focus on your run with this lightweight cap.',
    features: ['One size fits most', 'Adjustable back strap', 'Moisture-absorbing AEROREADY'],
    rating: 4.5,
    reviews: 150,
    stock: 100
  },
  {
    id: 'p8',
    name: 'Predator Accuracy.3',
    price: 90,
    category: 'Kids',
    type: 'Shoes',
    sport: 'Football',
    image: 'https://picsum.photos/seed/adidas10/600/600',
    description: 'Control + accuracy = confidence. These junior soccer cleats keep you in charge.',
    features: ['Regular fit', 'Coated textile upper', 'Firm ground outsole'],
    rating: 4.6,
    reviews: 120,
    stock: 18
  },
  {
    id: 'ng1',
    name: 'NextGen Elite Smartwatch',
    price: 299,
    category: 'Accessories',
    type: 'Gear',
    sport: 'Training',
    image: 'https://picsum.photos/seed/ng1/600/600',
    description: 'Track your performance with precision. The NextGen Elite Smartwatch monitors heart rate, sleep, and recovery.',
    features: ['GPS tracking', 'Water resistant', '7-day battery life'],
    rating: 4.9,
    reviews: 45,
    new: true,
    stock: 50
  }
];

export const INFO_CONTENT: Record<string, { title: string; content: string }> = {
  'about-us': {
    title: 'About Us',
    content: 'NextGen is a global leader in the sporting goods industry. Founded on the passion for sports and a sporting lifestyle, we strive to be the best sports retailer in the world. Our mission is to provide the best equipment for every athlete to achieve their dreams.'
  },
  'careers': {
    title: 'Careers',
    content: 'Join the team! We are looking for creators, makers, and dreamers. At NextGen, we believe that through sport, we have the power to change lives. Check out our open positions and find your fit in our dynamic global family.'
  },
  'press': {
    title: 'Press',
    content: 'Stay up to date with the latest news, product launches, and company announcements. Download media kits and get in touch with our PR team for inquiries.'
  },
  'sustainability': {
    title: 'Sustainability',
    content: 'We are committed to ending plastic waste. Our sustainability strategy focuses on moving towards a circular economy, using recycled materials, and reducing our carbon footprint across all operations.'
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    content: 'Your privacy is important to us. This policy outlines how we collect, use, and protect your personal data when you use our website and services. We are committed to transparency and security.'
  },
  'terms-and-conditions': {
    title: 'Terms & Conditions',
    content: 'Please read these terms carefully before using our services. They govern your relationship with NextGen Store and outline the rules for purchasing products, returns, and account usage.'
  },
  'cookies': {
    title: 'Cookie Policy',
    content: 'We use cookies to improve your experience, analyze site traffic, and personalize content. You can manage your cookie preferences at any time.'
  },
  'help': {
    title: 'Help Center',
    content: 'Need assistance? Browse our FAQs to find answers to common questions about orders, products, and account management. Our support team is here to help.'
  },
  'customer-service': {
    title: 'Customer Service',
    content: 'Contact us via phone, email, or live chat. Our dedicated customer service team is available Mon-Fri 8am-8pm to assist with any issues or inquiries you may have.'
  },
  'returns-exchanges': {
    title: 'Returns & Exchanges',
    content: 'Not the perfect fit? No problem. You can return or exchange items within 30 days of delivery. Ensure items are unworn and in original packaging. Start your return online today.'
  },
  'shipping': {
    title: 'Shipping Information',
    content: 'We offer standard, express, and next-day delivery options. Free standard shipping is available for orders over $100. Track your order status in real-time via your account.'
  },
  'size-charts': {
    title: 'Size Charts',
    content: 'Find your perfect fit with our comprehensive size guides for shoes, clothing, and accessories. Measure yourself and compare with our charts to ensure comfort and performance.'
  }
};