export type ProductCategory =
  | 'Smartphones'
  | 'Laptops'
  | 'Tablets'
  | 'TVs & Monitors'
  | 'Headphones & Earbuds'
  | 'Smart Watches'
  | 'Gaming'
  | 'Cameras'
  | 'Computer Accessories'
  | 'Speakers'
  | 'Chargers & Cables'
  | 'Home Appliances';

export interface ProductSpecifications {
  processor?: string;
  ram?: string;
  storage?: string;
  display?: string;
  battery?: string;
  camera?: string;
  os?: string;
  weight?: string;
  connectivity?: string;
  warranty: string;
  powerOutput?: string;
  noiseCancellation?: string;
  refreshRate?: string;
  resolution?: string;
  dimensions?: string;
  color?: string;
  inTheBox?: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  description: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  stockStatus: 'In Stock' | 'Only 2 left' | 'Only 4 left' | 'Only 3 left' | 'Out of Stock';
  inStock: boolean;
  images: string[];
  features: string[];
  specifications: ProductSpecifications;
  badge?: 'Deal of the Day' | 'Bestseller' | 'New' | 'Top Rated' | 'Trending';
  isDealOfTheDay?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerInfo {
  fullName: string;
  mobile: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: 'upi' | 'card' | 'cod';
  upiId?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
}

export interface OrderConfirmationData {
  orderId: string;
  customerInfo: CustomerInfo;
  items: CartItem[];
  subtotal: number;
  discount: number;
  deliveryCharge: number;
  tax: number;
  total: number;
  orderDate: string;
  estimatedDeliveryDate: string;
}

export interface AIChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  recommendedProductIds?: string[];
  comparisons?: {
    productId: string;
    why: string;
  }[];
  timestamp: string;
}
