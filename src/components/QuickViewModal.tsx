import React from 'react';
import { X, Star, ShoppingCart, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const QuickViewModal: React.FC = () => {
  const {
    isQuickViewOpen,
    quickViewProduct,
    closeQuickView,
    addToCart,
    openProductDetails,
    openAIChatWithPrompt,
    setIsCartDrawerOpen,
  } = useShop();

  if (!isQuickViewOpen || !quickViewProduct) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Image */}
          <div className="md:col-span-5 aspect-square rounded-2xl bg-slate-950 p-3 border border-slate-800 overflow-hidden">
            <img
              src={quickViewProduct.images[0]}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Details */}
          <div className="md:col-span-7 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                {quickViewProduct.brand} • {quickViewProduct.category}
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-white mt-1">
                {quickViewProduct.name}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center text-amber-400 text-xs font-bold bg-amber-500/10 px-2 py-0.5 rounded">
                <Star className="w-3.5 h-3.5 fill-current mr-1" />
                <span>{quickViewProduct.rating}</span>
              </div>
              <span className="text-xs text-slate-400">({quickViewProduct.reviewCount} reviews)</span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-emerald-400 font-semibold">{quickViewProduct.stockStatus}</span>
            </div>

            <div className="flex items-baseline gap-2.5">
              <span className="text-2xl font-black text-white">
                ₹{quickViewProduct.price.toLocaleString('en-IN')}
              </span>
              {quickViewProduct.originalPrice > quickViewProduct.price && (
                <>
                  <span className="text-sm text-slate-500 line-through">
                    ₹{quickViewProduct.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-bold text-emerald-400">
                    {quickViewProduct.discountPercentage}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
              {quickViewProduct.description}
            </p>

            {/* Highlights */}
            <div className="space-y-1.5 text-xs text-slate-300">
              {quickViewProduct.features.slice(0, 3).map((f, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="truncate">{f}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => {
                  addToCart(quickViewProduct);
                  closeQuickView();
                  setIsCartDrawerOpen(true);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={() => {
                  closeQuickView();
                  openProductDetails(quickViewProduct);
                }}
                className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <Eye className="w-4 h-4 text-blue-400" />
                <span>Full Details</span>
              </button>

              <button
                onClick={() => {
                  closeQuickView();
                  openAIChatWithPrompt(`Tell me more about ${quickViewProduct.name}`);
                }}
                className="p-2.5 rounded-xl bg-indigo-950/60 hover:bg-indigo-900 border border-indigo-500/40 text-indigo-300"
                title="Ask AI"
              >
                <Sparkles className="w-4 h-4 text-cyan-300" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
