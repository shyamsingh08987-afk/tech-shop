import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, CustomerInfo, OrderConfirmationData, ProductCategory } from '../types';
import { products } from '../data/products';

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: string[];
  compareList: string[];
  activeView: 'home' | 'products' | 'deals' | 'details' | 'compare' | 'cart' | 'checkout' | 'about' | 'contact';
  selectedProduct: Product | null;
  selectedCategory: ProductCategory | 'All';
  searchQuery: string;
  orderConfirmation: OrderConfirmationData | null;
  isAIChatOpen: boolean;
  isQuickViewOpen: boolean;
  quickViewProduct: Product | null;
  isCartDrawerOpen: boolean;
  appliedPromo: { code: string; discountPercent: number; flatDiscount: number } | null;
  
  // Actions
  setActiveView: (view: 'home' | 'products' | 'deals' | 'details' | 'compare' | 'cart' | 'checkout' | 'about' | 'contact') => void;
  setSelectedCategory: (category: ProductCategory | 'All') => void;
  setSearchQuery: (query: string) => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  toggleCompare: (productId: string) => void;
  isInCompare: (productId: string) => boolean;
  clearCompare: () => void;
  openProductDetails: (product: Product) => void;
  openProductDetailsById: (productId: string) => void;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  setIsAIChatOpen: (open: boolean) => void;
  setIsCartDrawerOpen: (open: boolean) => void;
  openAIChatWithPrompt: (prompt: string) => void;
  aiInitialPrompt: string;
  setAiInitialPrompt: (prompt: string) => void;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;
  placeOrder: (customerInfo: CustomerInfo) => OrderConfirmationData;
  resetOrderConfirmation: () => void;
  
  // Computed values
  cartSubtotal: number;
  cartDiscount: number;
  promoDiscountAmount: number;
  deliveryCharge: number;
  taxAmount: number;
  cartTotal: number;
  cartItemCount: number;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load saved Cart from localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('techzone_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Load saved Wishlist from localStorage
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('techzone_wishlist');
      return saved ? JSON.parse(saved) : ['ph-01', 'hp-01'];
    } catch {
      return ['ph-01', 'hp-01'];
    }
  });

  const [compareList, setCompareList] = useState<string[]>([]);
  const [activeView, setActiveView] = useState<'home' | 'products' | 'deals' | 'details' | 'compare' | 'cart' | 'checkout' | 'about' | 'contact'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [orderConfirmation, setOrderConfirmation] = useState<OrderConfirmationData | null>(null);
  const [isAIChatOpen, setIsAIChatOpen] = useState<boolean>(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);
  const [aiInitialPrompt, setAiInitialPrompt] = useState<string>('');
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discountPercent: number; flatDiscount: number } | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('techzone_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('techzone_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Cart Handlers
  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  // Wishlist Handlers
  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  // Compare Handlers
  const toggleCompare = (productId: string) => {
    setCompareList((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      if (prev.length >= 4) {
        alert('You can compare a maximum of 4 products at once.');
        return prev;
      }
      return [...prev, productId];
    });
  };

  const isInCompare = (productId: string) => compareList.includes(productId);
  const clearCompare = () => setCompareList([]);

  // Navigation & Product details
  const openProductDetails = (product: Product) => {
    setSelectedProduct(product);
    setActiveView('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProductDetailsById = (productId: string) => {
    const prod = products.find((p) => p.id === productId);
    if (prod) {
      openProductDetails(prod);
    }
  };

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    setQuickViewProduct(null);
  };

  const openAIChatWithPrompt = (prompt: string) => {
    setAiInitialPrompt(prompt);
    setIsAIChatOpen(true);
  };

  // Promo Code
  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'TECHZONE10') {
      setAppliedPromo({ code: clean, discountPercent: 10, flatDiscount: 0 });
      return { success: true, message: '🎉 10% TechZone Special Discount Applied!' };
    }
    if (clean === 'WELCOME500') {
      setAppliedPromo({ code: clean, discountPercent: 0, flatDiscount: 500 });
      return { success: true, message: '🎉 ₹500 Welcome Discount Applied!' };
    }
    return { success: false, message: 'Invalid coupon code. Try TECHZONE10 or WELCOME500' };
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
  };

  // Computed Cart Numbers
  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.originalPrice * item.quantity, 0);
  const storeDiscount = cart.reduce(
    (sum, item) => sum + (item.product.originalPrice - item.product.price) * item.quantity,
    0
  );
  const discountedSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  let promoDiscountAmount = 0;
  if (appliedPromo) {
    if (appliedPromo.discountPercent > 0) {
      promoDiscountAmount = Math.round((discountedSubtotal * appliedPromo.discountPercent) / 100);
    } else if (appliedPromo.flatDiscount > 0) {
      promoDiscountAmount = Math.min(appliedPromo.flatDiscount, discountedSubtotal);
    }
  }

  const deliveryCharge = discountedSubtotal > 999 || cart.length === 0 ? 0 : 99;
  const taxAmount = 0; // GST is already included in Indian MRP pricing
  const cartTotal = Math.max(0, discountedSubtotal - promoDiscountAmount + deliveryCharge);
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Place Order Simulation
  const placeOrder = (customerInfo: CustomerInfo): OrderConfirmationData => {
    const orderId = `TZ-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 3);

    const orderData: OrderConfirmationData = {
      orderId,
      customerInfo,
      items: [...cart],
      subtotal: cartSubtotal,
      discount: storeDiscount + promoDiscountAmount,
      deliveryCharge,
      tax: taxAmount,
      total: cartTotal,
      orderDate: today.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
      estimatedDeliveryDate: deliveryDate.toLocaleDateString('en-IN', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      }),
    };

    setOrderConfirmation(orderData);
    clearCart();
    setActiveView('home');
    return orderData;
  };

  const resetOrderConfirmation = () => {
    setOrderConfirmation(null);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        compareList,
        activeView,
        selectedProduct,
        selectedCategory,
        searchQuery,
        orderConfirmation,
        isAIChatOpen,
        isQuickViewOpen,
        quickViewProduct,
        isCartDrawerOpen,
        appliedPromo,
        setActiveView,
        setSelectedCategory,
        setSearchQuery,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        toggleCompare,
        isInCompare,
        clearCompare,
        openProductDetails,
        openProductDetailsById,
        openQuickView,
        closeQuickView,
        setIsAIChatOpen,
        setIsCartDrawerOpen,
        openAIChatWithPrompt,
        aiInitialPrompt,
        setAiInitialPrompt,
        applyPromoCode,
        removePromoCode,
        placeOrder,
        resetOrderConfirmation,
        cartSubtotal,
        cartDiscount: storeDiscount,
        promoDiscountAmount,
        deliveryCharge,
        taxAmount,
        cartTotal,
        cartItemCount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
