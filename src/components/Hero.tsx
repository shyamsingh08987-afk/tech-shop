import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Tag,
  Truck,
  Lock,
  Sparkles,
  Zap,
  Star,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Hero: React.FC = () => {
  const { setActiveView, setSelectedCategory, openAIChatWithPrompt, openProductDetailsById } = useShop();

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-8 pb-14 border-b border-slate-800">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading, Subheading, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 text-xs font-semibold shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Next-Gen Electronics Store in India</span>
              <span className="text-slate-500">•</span>
              <span className="text-cyan-400 flex items-center gap-1 font-bold">
                <Cpu className="w-3.5 h-3.5" /> AI Assisted
              </span>
            </div>

            {/* Hero Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Power Your World With{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Better Technology
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Discover smartphones, laptops, gaming devices, smart gadgets and accessories at prices you'll love.
            </p>

            {/* Buttons: Shop Now and Explore Deals */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setActiveView('products');
                }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveView('deals')}
                className="px-7 py-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-100 hover:text-white font-bold text-sm border border-slate-700 hover:border-slate-600 shadow-md flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Explore Deals</span>
              </button>

              {/* Quick AI Trigger chip */}
              <button
                onClick={() => openAIChatWithPrompt('Help me find the best gadget for my budget')}
                className="px-4 py-3.5 rounded-full bg-indigo-950/40 hover:bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 text-xs font-semibold flex items-center gap-1.5 transition-all hover:border-indigo-400"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Need Advice? Ask AI</span>
              </button>
            </div>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <p className="text-xl sm:text-2xl font-black text-white">30+</p>
                <p className="text-xs text-slate-400 font-medium">Verified Gadgets</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-cyan-400">100%</p>
                <p className="text-xs text-slate-400 font-medium">Genuine Brands</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-amber-400">4.8 ★</p>
                <p className="text-xs text-slate-400 font-medium">Customer Rating</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase of Electronics */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Feature Showcase Card (Laptops / Phones / Consoles collage) */}
              <div className="relative rounded-3xl bg-gradient-to-b from-slate-800/80 via-slate-900 to-slate-950 p-3 sm:p-5 border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl">
                
                {/* Floating Highlight Chips */}
                <div className="absolute top-4 left-4 z-20 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-blue-500/40 flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-[11px] font-bold text-white">Festival Tech Bonanza</span>
                </div>

                <div className="absolute top-4 right-4 z-20 bg-rose-600 text-white px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider shadow-md">
                  Up to 45% OFF
                </div>

                {/* Collage Image Showcase */}
                <div className="relative mt-8 rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 border border-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1000&auto=format&fit=crop&q=80"
                    alt="Electronics Tech Showcase"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Overlay Product Mini-Cards */}
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700/70 shadow-lg">
                    <div>
                      <p className="text-[10px] text-blue-400 uppercase font-bold tracking-wider">Spotlight Laptop</p>
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate max-w-[180px] sm:max-w-xs">
                        HP Pavilion 15 Core i5 (16GB/512GB)
                      </h4>
                      <p className="text-xs font-black text-emerald-400">₹54,999 <span className="text-[10px] text-slate-400 line-through">₹68,990</span></p>
                    </div>
                    <button
                      onClick={() => openProductDetailsById('lap-01')}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors"
                    >
                      View
                    </button>
                  </div>
                </div>

                {/* Sub-Showcase Quick Grid (Phones, Headphones, Smartwatch, Gaming) */}
                <div className="grid grid-cols-4 gap-2 mt-3">
                  {[
                    { id: 'ph-01', name: 'S24 Ultra', img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop&q=80', tag: 'Phones' },
                    { id: 'hp-01', name: 'Sony XM5', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80', tag: 'ANC' },
                    { id: 'sw-01', name: 'Series 9', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80', tag: 'Watches' },
                    { id: 'gm-01', name: 'PS5 Slim', img: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&auto=format&fit=crop&q=80', tag: 'Gaming' },
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={() => openProductDetailsById(item.id)}
                      className="group/sub relative rounded-xl overflow-hidden aspect-square bg-slate-950 border border-slate-800 hover:border-blue-500 cursor-pointer transition-all"
                    >
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover/sub:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex flex-col justify-end p-1.5">
                        <span className="text-[9px] font-bold text-white leading-tight truncate">{item.name}</span>
                        <span className="text-[8px] text-blue-300 font-medium">{item.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Trust Indicators Banner */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white">Genuine Products</h4>
                <p className="text-[11px] text-slate-400">100% authentic with brand warranty</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Tag className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white">Best Prices</h4>
                <p className="text-[11px] text-slate-400">Direct deals & lowest INR prices</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-600/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white">Fast Delivery</h4>
                <p className="text-[11px] text-slate-400">Express dispatch across India</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white">Secure Payments</h4>
                <p className="text-[11px] text-slate-400">UPI, Cards & Cash on Delivery</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
