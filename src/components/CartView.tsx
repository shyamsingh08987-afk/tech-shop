import React, { useState } from 'react';
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Tag,
  X,
  Truck,
  Sparkles
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    cartDiscount,
    appliedPromo,
    promoDiscountAmount,
    deliveryCharge,
    cartTotal,
    applyPromoCode,
    removePromoCode,
    setActiveView,
    openProductDetails,
  } = useShop();

  const [promoInput, setPromoInput] = useState('');
  const [promoFeedback, setPromoFeedback] = useState<{ success: boolean; message: string } | null>(null);

  if (!isCartDrawerOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromoCode(promoInput);
    setPromoFeedback(res);
    if (res.success) setPromoInput('');
  };

  const handleProceedCheckout = () => {
    setIsCartDrawerOpen(false);
    setActiveView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full sm:w-[460px] bg-slate-950 h-full border-l border-slate-800 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingCart className="w-5 h-5 text-blue-400" />
            <h3 className="text-base font-extrabold text-white">
              Shopping Cart ({cart.reduce((c, i) => c + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={() => setIsCartDrawerOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="p-3 bg-blue-950/40 border-b border-blue-900/40 text-xs">
          {cartTotal >= 999 || cart.length === 0 ? (
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <Truck className="w-4 h-4" />
              <span>You've unlocked FREE Express Delivery!</span>
            </div>
          ) : (
            <div className="space-y-1">
              <p className="text-slate-300">
                Add <strong className="text-blue-400">₹{(999 - cartTotal).toLocaleString('en-IN')}</strong> more for Free Delivery!
              </p>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${Math.min(100, (cartTotal / 999) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center mx-auto text-slate-500">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <p className="text-sm font-bold text-white">Your cart is empty</p>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Explore our best deals on smartphones, laptops and accessories.
              </p>
              <button
                onClick={() => {
                  setIsCartDrawerOpen(false);
                  setActiveView('products');
                }}
                className="mt-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-full"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex gap-3 hover:border-slate-700 transition-colors"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  onClick={() => {
                    openProductDetails(item.product);
                    setIsCartDrawerOpen(false);
                  }}
                  className="w-18 h-18 rounded-xl object-cover bg-slate-950 shrink-0 border border-slate-800 cursor-pointer"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-blue-400 uppercase">
                      {item.product.brand}
                    </span>
                    <h4
                      onClick={() => {
                        openProductDetails(item.product);
                        setIsCartDrawerOpen(false);
                      }}
                      className="text-xs font-bold text-white truncate cursor-pointer hover:text-blue-400"
                    >
                      {item.product.name}
                    </h4>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-xs font-bold text-white">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                      {item.quantity > 1 && (
                        <span className="text-[10px] text-slate-400">
                          (₹{item.product.price.toLocaleString('en-IN')} each)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Stepper + Remove */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/60">
                    <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg">
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-1 text-slate-300 hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2.5 text-xs font-bold text-white font-mono">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-1 text-slate-300 hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-slate-500 hover:text-rose-400 text-xs flex items-center gap-1 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Calculations */}
        {cart.length > 0 && (
          <div className="p-4 bg-slate-900 border-t border-slate-800 space-y-3">
            
            {/* Promo Code Form */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon (e.g. TECHZONE10)"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                className="flex-1 py-1.5 px-3 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 placeholder-slate-500 uppercase"
              />
              <button
                type="submit"
                className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700"
              >
                Apply
              </button>
            </form>

            {promoFeedback && (
              <p
                className={`text-[11px] font-semibold ${
                  promoFeedback.success ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {promoFeedback.message}
              </p>
            )}

            {appliedPromo && (
              <div className="flex items-center justify-between text-xs bg-emerald-950/40 border border-emerald-800/40 p-2 rounded-xl text-emerald-300">
                <span className="flex items-center gap-1 font-bold">
                  <Tag className="w-3 h-3" /> {appliedPromo.code} applied
                </span>
                <button onClick={removePromoCode} className="text-slate-400 hover:text-white text-[10px]">
                  Remove
                </button>
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-slate-300 pt-1">
              <div className="flex justify-between">
                <span>Total MRP</span>
                <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-emerald-400">
                <span>Catalog Discount</span>
                <span>-₹{cartDiscount.toLocaleString('en-IN')}</span>
              </div>
              {promoDiscountAmount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Promo Coupon Discount</span>
                  <span>-₹{promoDiscountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span>{deliveryCharge === 0 ? <strong className="text-emerald-400 font-bold">FREE</strong> : `₹${deliveryCharge}`}</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-white pt-2 border-t border-slate-800">
                <span>Final Total</span>
                <span className="text-blue-400">₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleProceedCheckout}
              className="w-full py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 transition-all hover:scale-102 cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
