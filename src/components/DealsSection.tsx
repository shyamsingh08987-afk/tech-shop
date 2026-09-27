import React, { useState, useEffect } from 'react';
import { Flame, Clock, ArrowRight, Zap, ShoppingCart, Star, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';

export const DealsSection: React.FC = () => {
  const { products, setActiveView, setSelectedCategory, addToCart, openProductDetails } = useShop();

  // Deal countdown timer state (24-hour cycle)
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 36,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Filter products marked as deals or with high discounts (>= 20%)
  const dealProducts = products
    .filter((p) => p.isDealOfTheDay || p.discountPercentage >= 20)
    .slice(0, 8);

  const heroDeal = dealProducts[0];

  return (
    <section className="py-14 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header with Real-Time Countdown */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-600/40 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Flame className="w-4 h-4 fill-rose-500 text-rose-500 animate-bounce" />
              <span>Limited Time Mega Savings</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Today's Best Deals
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Handpicked electronics on massive discounts with verified warranty.
            </p>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-3 rounded-2xl shadow-xl">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider pr-2 border-r border-slate-800">
              <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="hidden sm:inline">Deals End In:</span>
            </div>
            <div className="flex items-center gap-2 text-center">
              <div className="bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl min-w-[48px]">
                <span className="text-base sm:text-lg font-black text-white font-mono">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="block text-[9px] uppercase tracking-wider text-slate-500 font-bold">Hrs</span>
              </div>
              <span className="text-slate-500 font-bold text-lg">:</span>
              <div className="bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl min-w-[48px]">
                <span className="text-base sm:text-lg font-black text-white font-mono">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="block text-[9px] uppercase tracking-wider text-slate-500 font-bold">Min</span>
              </div>
              <span className="text-slate-500 font-bold text-lg">:</span>
              <div className="bg-slate-950 border border-rose-900/40 px-3 py-1.5 rounded-xl min-w-[48px]">
                <span className="text-base sm:text-lg font-black text-rose-400 font-mono">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="block text-[9px] uppercase tracking-wider text-slate-500 font-bold">Sec</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Big Spotlight Deal Banner */}
        {heroDeal && (
          <div className="relative rounded-3xl bg-gradient-to-r from-blue-950/70 via-slate-900 to-indigo-950/70 border border-blue-600/30 p-6 sm:p-8 mb-10 shadow-2xl overflow-hidden backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-4 relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl group">
                <img
                  src={heroDeal.images[0]}
                  alt={heroDeal.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-black px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
                  {heroDeal.discountPercentage}% OFF
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    {heroDeal.brand} • {heroDeal.category}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 text-xs font-bold border border-emerald-800/40">
                    Flash Deal Spotlight
                  </span>
                </div>

                <h3
                  onClick={() => openProductDetails(heroDeal)}
                  className="text-xl sm:text-3xl font-extrabold text-white hover:text-blue-400 cursor-pointer transition-colors"
                >
                  {heroDeal.name}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm line-clamp-2">
                  {heroDeal.description}
                </p>

                {/* Pricing & Stock Claim Meter */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-black text-white">
                        ₹{heroDeal.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-base text-slate-500 line-through">
                        ₹{heroDeal.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-bold text-emerald-400">
                        Save ₹{(heroDeal.originalPrice - heroDeal.price).toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
                      <div className="flex items-center text-amber-400">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="ml-1 font-bold text-slate-200">{heroDeal.rating}</span>
                      </div>
                      <span>({heroDeal.reviewCount} customer reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 self-center">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-400">Deal Claimed:</span>
                      <span className="text-rose-400 font-bold">84% Claimed</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full w-[84%]" />
                    </div>
                    <p className="text-[11px] text-amber-400/90 font-medium">
                      Hurry, only a few units left at this promotional price!
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => addToCart(heroDeal)}
                    className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Claim Deal Now</span>
                  </button>

                  <button
                    onClick={() => openProductDetails(heroDeal)}
                    className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm transition-colors"
                  >
                    View Specifications
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Grid of Deals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {dealProducts.slice(1, 9).map((product) => (
            <ProductCard key={product.id} product={product} highlightDeal={true} />
          ))}
        </div>

        {/* View All Deals button */}
        <div className="text-center mt-10">
          <button
            onClick={() => {
              setSelectedCategory('All');
              setActiveView('products');
            }}
            className="px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-bold text-sm inline-flex items-center gap-2 shadow-md hover:border-blue-500 transition-all"
          >
            <span>Explore All Discounted Electronics</span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
