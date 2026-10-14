import { Category, Product, Testimonial, FAQItem } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'mugs',
    name: 'Custom Mugs',
    startPrice: 450,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
    iconName: 'Coffee',
    description: 'Ceramic, Magic, and Travel mugs with high-definition sublimation printing.'
  },
  {
    id: 'glasses',
    name: 'Glass Printing',
    startPrice: 350,
    imageUrl: 'https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&q=80&w=600',
    iconName: 'Wine',
    description: 'Custom frosted & clear glass printing for homes, cafes & events.'
  },
  {
    id: 'keychains',
    name: 'Keychain Printing',
    startPrice: 150,
    imageUrl: 'https://images.unsplash.com/photo-1622445268465-840246e904fb?auto=format&fit=crop&q=80&w=600',
    iconName: 'Key',
    description: 'Wooden, Acrylic, and Metal keychains with precise laser engraving.'
  },
  {
    id: 'pens',
    name: 'Pen Printing',
    startPrice: 120,
    imageUrl: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600',
    iconName: 'PenTool',
    description: 'Engraved metal pens and branded plastic pens for bulk business giveaways.'
  },
  {
    id: 'tshirts',
    name: 'T-Shirt Printing',
    startPrice: 650,
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600',
    iconName: 'Shirt',
    description: '100% Premium Cotton & Sublimation T-shirts with vibrant DTF prints.'
  },
  {
    id: 'corporate',
    name: 'Corporate Gifts',
    startPrice: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=600',
    iconName: 'Gift',
    description: 'Luxury executive gift boxes, diaries, bottles, and employee onboarding kits.'
  }
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'p-1',
    name: 'Best Teacher Mug',
    category: 'mugs',
    price: 850,
    originalPrice: 1100,
    rating: 4.9,
    reviewsCount: 142,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
    badge: 'Best Seller',
    description: 'High-quality 11oz white ceramic mug with glossy photo finish. Microwave and dishwasher safe.',
    availableColors: ['#FFFFFF', '#1E293B', '#DC2626', '#2563EB'],
    minQuantity: 1
  },
  {
    id: 'p-2',
    name: 'Good Vibes Glass',
    category: 'glasses',
    price: 650,
    originalPrice: 850,
    rating: 4.8,
    reviewsCount: 98,
    imageUrl: 'https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&q=80&w=600',
    badge: 'Popular',
    description: 'Frosted 350ml highball glass with scratch-resistant UV print for juice, coffee, or cocktails.',
    availableColors: ['#FFFFFF', '#F59E0B'],
    minQuantity: 1
  },
  {
    id: 'p-3',
    name: 'Wooden Keychain',
    category: 'keychains',
    price: 250,
    originalPrice: 350,
    rating: 4.7,
    reviewsCount: 215,
    imageUrl: 'https://images.unsplash.com/photo-1622445268465-840246e904fb?auto=format&fit=crop&q=80&w=600',
    badge: 'Trending',
    description: 'Natural oak wood double-sided laser engraved keychain with sturdy stainless ring.',
    availableColors: ['#D97706', '#78350F'],
    minQuantity: 1
  },
  {
    id: 'p-4',
    name: 'Metal Pen',
    category: 'pens',
    price: 180,
    originalPrice: 250,
    rating: 4.9,
    reviewsCount: 310,
    imageUrl: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600',
    badge: 'Corporate Choice',
    description: 'Sleek metal ballpoint pen with precision laser name/logo engraving and black gel ink.',
    availableColors: ['#000000', '#1E3A8A', '#475569', '#B45309'],
    minQuantity: 5
  },
  {
    id: 'p-5',
    name: 'Sublimation T-Shirt',
    category: 'tshirts',
    price: 1200,
    originalPrice: 1500,
    rating: 4.8,
    reviewsCount: 184,
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600',
    badge: 'Hot Item',
    description: 'Breathable polyester-cotton blend crew neck t-shirt with full color fade-resistant print.',
    availableColors: ['#FFFFFF', '#000000', '#0F172A', '#DC2626', '#059669'],
    minQuantity: 1
  },
  {
    id: 'p-6',
    name: 'Corporate Gift Set',
    category: 'corporate',
    price: 2500,
    originalPrice: 3200,
    rating: 5.0,
    reviewsCount: 89,
    imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=600',
    badge: 'Premium Box',
    description: 'Luxury branded box containing customized metal pen, leather diary, temperature bottle & USB drive.',
    availableColors: ['#0B192C', '#1E293B', '#78350F'],
    minQuantity: 1
  },
  {
    id: 'p-7',
    name: 'Color Changing Magic Mug',
    category: 'mugs',
    price: 950,
    originalPrice: 1300,
    rating: 4.9,
    reviewsCount: 176,
    imageUrl: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&q=80&w=600',
    badge: 'Magic Effect',
    description: 'Black heat-sensitive ceramic mug that reveals your hidden custom photo when hot liquid is poured!',
    availableColors: ['#000000'],
    minQuantity: 1
  },
  {
    id: 'p-8',
    name: 'Stainless Steel Water Bottle',
    category: 'corporate',
    price: 1450,
    originalPrice: 1800,
    rating: 4.8,
    reviewsCount: 112,
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600',
    badge: 'Eco Friendly',
    description: '500ml double-wall vacuum insulated smart LED temperature display flask with laser engraved logo.',
    availableColors: ['#000000', '#1E293B', '#2563EB', '#DC2626'],
    minQuantity: 1
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Adeel Khan',
    city: 'Lahore',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    quote: 'Excellent quality printing on mugs and very fast delivery. Highly recommended for corporate gifts in Lahore!',
    rating: 5,
    productBought: 'Best Teacher Mug'
  },
  {
    id: 't-2',
    name: 'Faiza Malik',
    city: 'Karachi',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    quote: 'We ordered corporate gift sets for our company event. Amazing print clarity, elegant packaging and on-time delivery.',
    rating: 5,
    productBought: 'Corporate Gift Set'
  },
  {
    id: 't-3',
    name: 'Usman Raza',
    city: 'Islamabad',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    quote: 'Best place for custom printing in Pakistan. Affordable prices, very smooth website ordering, and awesome customer support.',
    rating: 5,
    productBought: 'Sublimation T-Shirt'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the minimum order quantity?',
    answer: 'For most individual items like Mugs, Glasses, T-Shirts, and Keychains, there is NO minimum order quantity! You can order just 1 piece. For bulk items like pens, minimum order is 5 units.',
    category: 'Orders'
  },
  {
    id: 'faq-2',
    question: 'How long does delivery take across Pakistan?',
    answer: 'Standard delivery takes 3 to 5 working days anywhere in Pakistan (Lahore, Karachi, Islamabad, Faisalabad, Multan, Rawalpindi, Peshawar, Quetta, etc.). Urgent express delivery (24-48 hours) is also available.',
    category: 'Delivery'
  },
  {
    id: 'faq-3',
    question: 'Can I see a sample before placing a bulk order?',
    answer: 'Yes! For corporate bulk orders above 50 units, we can print and dispatch a single physical sample for your approval before starting main production.',
    category: 'Bulk'
  },
  {
    id: 'faq-4',
    question: 'Do you offer custom design assistance?',
    answer: 'Absolutely! If you do not have a ready print file, our expert graphic designers will help layout your logo, photo, or typography free of cost.',
    category: 'Design'
  },
  {
    id: 'faq-5',
    question: 'Do you deliver outside Pakistan?',
    answer: 'Currently we deliver across all cities and rural addresses in Pakistan. For international bulk orders, please contact our support team via WhatsApp or email.',
    category: 'Delivery'
  },
  {
    id: 'faq-6',
    question: 'What payment methods do you accept?',
    answer: 'We accept Cash on Delivery (COD), JazzCash, EasyPaisa, Direct Bank Transfer, and Visa/Mastercard debit and credit cards.',
    category: 'Payment'
  }
];

export const STATS = [
  { label: 'Happy Customers', count: '5000+', icon: 'Users' },
  { label: 'Custom Designs', count: '1000+', icon: 'Palette' },
  { label: 'Corporate Clients', count: '300+', icon: 'Building2' },
  { label: 'Positive Reviews', count: '98%', icon: 'Award' }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Premium Quality',
    description: 'High quality materials & latest HD printing tech for long lasting prints.',
    icon: 'Sparkles'
  },
  {
    title: 'Custom Solutions',
    description: 'Personalized printing for every need — gifts, branding, events & souvenirs.',
    icon: 'Sliders'
  },
  {
    title: 'Fast Turnaround',
    description: 'Quick processing & on-time delivery doorstep anywhere in Pakistan.',
    icon: 'Zap'
  },
  {
    title: 'Affordable Prices',
    description: 'Best wholesale and retail prices with transparent tier discounts.',
    icon: 'Tag'
  },
  {
    title: 'Customer Support',
    description: 'We are always here to help you via WhatsApp, Phone, and Email.',
    icon: 'Headphones'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Choose Product',
    description: 'Select the product you want to customize from our vast catalog.',
    icon: 'ShoppingBag'
  },
  {
    step: 2,
    title: 'Upload Design',
    description: 'Upload your logo, photo, or type your custom text in live 2D editor.',
    icon: 'UploadCloud'
  },
  {
    step: 3,
    title: 'Place Order',
    description: 'Review your live preview, select quantity, and place the order.',
    icon: 'ClipboardCheck'
  },
  {
    step: 4,
    title: 'We Print',
    description: 'We print with premium sublimation/laser technology & quality check.',
    icon: 'Printer'
  },
  {
    step: 5,
    title: 'Fast Delivery',
    description: 'We deliver at your doorstep anywhere in Pakistan within 3-5 days.',
    icon: 'Truck'
  }
];
