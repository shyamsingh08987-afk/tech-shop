import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  CreditCard,
  QrCode,
  Truck,
  IndianRupee,
  ShoppingBag,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { CustomerInfo, OrderConfirmationData } from '../types';

export const CheckoutView: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    cartDiscount,
    promoDiscountAmount,
    deliveryCharge,
    cartTotal,
    placeOrder,
    setActiveView,
    orderConfirmation,
    resetOrderConfirmation,
  } = useShop();

  const [formData, setFormData] = useState<CustomerInfo>({
    fullName: 'Aditya Sharma',
    mobile: '9876543210',
    email: 'aditya.sharma@example.com',
    address: 'Flat 402, Krishna Heights, Civil Lines',
    city: 'Mathura',
    state: 'Uttar Pradesh',
    pincode: '281001',
    paymentMethod: 'upi',
    upiId: 'aditya@okaxis',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<OrderConfirmationData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const order = placeOrder(formData);
      setCompletedOrder(order);
      setIsSubmitting(false);
    }, 1200);
  };

  // If order was completed, render Order Confirmation screen!
  if (completedOrder) {
    return (
      <div className="py-12 bg-slate-950 min-h-screen border-b border-slate-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-center shadow-2xl space-y-6">
            
            {/* Success Icon */}
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Payment & Order Verified
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                Order Placed Successfully!
              </h1>
              <p className="text-xs sm:text-sm text-slate-400">
                Thank you for choosing TechZone Electronics. Your order confirmation has been emailed to{' '}
                <strong className="text-slate-200">{completedOrder.customerInfo.email}</strong>.
              </p>
            </div>

            {/* Order Details Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Order ID</span>
                  <p className="text-sm font-extrabold text-white font-mono">{completedOrder.orderId}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Est. Delivery</span>
                  <p className="text-xs font-bold text-emerald-400">{completedOrder.estimatedDeliveryDate}</p>
                </div>
              </div>

              {/* Items summary */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase block mb-2">
                  Items Purchased ({completedOrder.items.length}):
                </span>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1 divide-y divide-slate-800/60">
                  {completedOrder.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={item.product.images[0]}
                          alt=""
                          className="w-10 h-10 rounded-lg object-cover bg-slate-900"
                        />
                        <div>
                          <p className="text-xs font-bold text-white truncate max-w-[200px] sm:max-w-xs">
                            {item.product.name}
                          </p>
                          <p className="text-[10px] text-slate-400">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-white">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              <div className="pt-3 border-t border-slate-800 text-xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
                  Delivering To:
                </span>
                <p className="text-slate-200 font-semibold">{completedOrder.customerInfo.fullName}</p>
                <p className="text-slate-400">
                  {completedOrder.customerInfo.address}, {completedOrder.customerInfo.city},{' '}
                  {completedOrder.customerInfo.state} - {completedOrder.customerInfo.pincode}
                </p>
                <p className="text-slate-400">Mobile: +91 {completedOrder.customerInfo.mobile}</p>
              </div>

              {/* Payment Summary */}
              <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-sm font-bold">
                <span className="text-slate-300">Total Amount Paid:</span>
                <span className="text-blue-400 text-base">₹{completedOrder.total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Return to shop */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  setCompletedOrder(null);
                  setActiveView('home');
                }}
                className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-lg"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => {
                  setCompletedOrder(null);
                  setActiveView('products');
                }}
                className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold"
              >
                Browse Catalog
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // If cart is empty
  if (cart.length === 0) {
    return (
      <div className="py-20 text-center bg-slate-950 text-slate-400 space-y-4">
        <ShoppingBag className="w-12 h-12 mx-auto text-slate-600" />
        <h2 className="text-xl font-bold text-white">Your Cart Is Empty</h2>
        <p className="text-xs text-slate-400">Add electronics before proceeding to checkout.</p>
        <button
          onClick={() => setActiveView('products')}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-xs font-bold"
        >
          View Electronics
        </button>
      </div>
    );
  }

  return (
    <div className="py-8 bg-slate-950 min-h-screen border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Safe & Encrypted Checkout
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Order Checkout
            </h1>
          </div>

          <button
            onClick={() => setActiveView('products')}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </button>
        </div>

        {/* Form and Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Customer & Shipping Form */}
          <div className="lg:col-span-7 space-y-6">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Shipping Information Card */}
              <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
                <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                  <Truck className="w-4 h-4 text-blue-400" />
                  <span>1. Delivery & Contact Details</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Mobile Number (India)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-slate-500 font-bold">+91</span>
                      <input
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="10 digit number"
                        className="w-full pl-11 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-400 font-bold mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-400 font-bold mb-1">Delivery Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="House/Flat number, Street, Landmark"
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 font-bold mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 font-bold mb-1">State</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Pincode</label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500 font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selection Card */}
              <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
                <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-emerald-400" />
                  <span>2. Payment Option</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  
                  {/* UPI */}
                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                    className={`p-3.5 rounded-2xl border cursor-pointer flex flex-col justify-between transition-all ${
                      formData.paymentMethod === 'upi'
                        ? 'bg-blue-600/15 border-blue-500 text-white shadow-lg'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <QrCode className="w-5 h-5 text-blue-400" />
                      <input
                        type="radio"
                        name="payment"
                        checked={formData.paymentMethod === 'upi'}
                        onChange={() => {}}
                        className="accent-blue-500"
                      />
                    </div>
                    <span className="font-bold text-white text-xs">Instant UPI</span>
                    <span className="text-[10px] text-slate-500">GPay, PhonePe, Paytm</span>
                  </label>

                  {/* Cards */}
                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`p-3.5 rounded-2xl border cursor-pointer flex flex-col justify-between transition-all ${
                      formData.paymentMethod === 'card'
                        ? 'bg-blue-600/15 border-blue-500 text-white shadow-lg'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <CreditCard className="w-5 h-5 text-purple-400" />
                      <input
                        type="radio"
                        name="payment"
                        checked={formData.paymentMethod === 'card'}
                        onChange={() => {}}
                        className="accent-blue-500"
                      />
                    </div>
                    <span className="font-bold text-white text-xs">Debit/Credit Card</span>
                    <span className="text-[10px] text-slate-500">Visa, Mastercard, RuPay</span>
                  </label>

                  {/* Cash on Delivery */}
                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className={`p-3.5 rounded-2xl border cursor-pointer flex flex-col justify-between transition-all ${
                      formData.paymentMethod === 'cod'
                        ? 'bg-blue-600/15 border-blue-500 text-white shadow-lg'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Truck className="w-5 h-5 text-amber-400" />
                      <input
                        type="radio"
                        name="payment"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={() => {}}
                        className="accent-blue-500"
                      />
                    </div>
                    <span className="font-bold text-white text-xs">Cash on Delivery</span>
                    <span className="text-[10px] text-slate-500">Pay when delivered</span>
                  </label>

                </div>

                {/* Sub-inputs for UPI or Card */}
                {formData.paymentMethod === 'upi' && (
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
                    <label className="block text-slate-400 font-bold">Your UPI ID</label>
                    <input
                      type="text"
                      value={formData.upiId || ''}
                      onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                      placeholder="e.g. mobile@upi or username@okhdfcbank"
                      className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                    />
                    <span className="text-[10px] text-slate-500 block">
                      Demo mode: simulated instant verification without actual banking deduction.
                    </span>
                  </div>
                )}

                {formData.paymentMethod === 'card' && (
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
                    <div>
                      <label className="block text-slate-400 font-bold mb-1">Card Number</label>
                      <input
                        type="text"
                        placeholder="•••• •••• •••• 4242"
                        className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-slate-400 font-bold mb-1">Expiry</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 font-bold mb-1">CVV</label>
                        <input
                          type="password"
                          maxLength={3}
                          placeholder="•••"
                          className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Order Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-extrabold text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Order...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-cyan-300" />
                    <span>Place Order (₹{cartTotal.toLocaleString('en-IN')})</span>
                  </>
                )}
              </button>

            </form>

          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4 sticky top-28">
              <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center justify-between pb-3 border-b border-slate-800">
                <span>Order Summary</span>
                <span className="text-xs text-blue-400 font-semibold">{cart.length} item(s)</span>
              </h3>

              {/* Products in Cart */}
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1 divide-y divide-slate-800/60">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-3 pt-2">
                    <img
                      src={item.product.images[0]}
                      alt=""
                      className="w-12 h-12 rounded-xl object-cover bg-slate-950 shrink-0 border border-slate-800"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-white truncate">{item.product.name}</p>
                      <p className="text-[10px] text-slate-400">Qty: {item.quantity}</p>
                      <p className="text-xs font-black text-emerald-400 mt-0.5">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-2 pt-3 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Subtotal MRP</span>
                  <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Store Discount</span>
                  <span>-₹{cartDiscount.toLocaleString('en-IN')}</span>
                </div>
                {promoDiscountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Coupon Discount</span>
                    <span>-₹{promoDiscountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Charge</span>
                  <span>{deliveryCharge === 0 ? <strong className="text-emerald-400">FREE</strong> : `₹${deliveryCharge}`}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-white pt-3 border-t border-slate-800">
                  <span>Total Payable</span>
                  <span className="text-blue-400">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5 text-blue-400 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>TechZone 100% Buyer Protection</span>
                </div>
                <p>Authentic brand warranty, verified payment gateway simulation, and fast dispatch.</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
