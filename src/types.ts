export interface Product {
  id: string;
  name: string;
  category: string;
  price: number; // in PKR
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  badge?: string;
  description: string;
  availableColors: string[];
  minQuantity: number;
}

export interface Category {
  id: string;
  name: string;
  startPrice: number; // in PKR
  imageUrl: string;
  iconName: string;
  description: string;
}

export interface CustomizationState {
  productId: string;
  productName: string;
  basePrice: number;
  selectedColor: string;
  customText: string;
  textColor: string;
  fontFamily: string;
  textSize: number;
  textPosition: { x: number; y: number };
  uploadedLogoUrl: string | null;
  uploadedLogoName?: string;
  specialInstructions: string;
  quantity: number;
  side: 'front' | 'back';
}

export interface CartItem {
  cartId: string;
  product: Product;
  customization: CustomizationState;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  avatarUrl: string;
  quote: string;
  rating: number;
  productBought: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CustomerOrder {
  orderId: string;
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  paymentMethod: 'cod' | 'jazzcash' | 'easypaisa' | 'bank_transfer';
  items: CartItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  totalAmount: number;
  status: 'Pending' | 'Printing' | 'Shipped' | 'Delivered';
  createdAt: string;
}
