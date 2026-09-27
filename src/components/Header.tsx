import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  ShoppingCart,
  Heart,
  Bot,
  Layers,
  Menu,
  X,
  Sparkles,
  Zap,
  Phone,
  Flame,
  ArrowRight
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { categoriesList } from '../data/products';

export const Header: React.FC = () => {
  const {
    products,
    cartItemCount,
    wishlist,
    compareList,
    activeView,
    setActiveView,
    searchQuery,
    setSearchQuery,
    setSelectedCategory,
    openProductDetails,
    setIsAIChatOpen,
    setIsCartDrawerOpen,
    cartTotal
  } = useShop();

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Suggestions for smart search
  const filteredSuggestions = searchQuery.trim().length > 0
    ? products
        .filter((p) => {
          const q = searchQuery.toLowerCase();
          return (
            p.name.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.features.some((f) => f.toLowerCase().includes(q)) ||
            (p.specifications.processor && p.specifications.processor.toLowerCase().includes(q)) ||
            (p.specifications.ram && p.specifications.ram.toLowerCase().includes(q))
          );
        })
        .slice(0, 5)
    : [];

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setActiveView('products');
      setIsSearchFocused(false);
    }
  };

  const handleSelectProduct = (prod: any) => {
    openProductDetails(prod);
    setIsSearchFocused(false);
    setSearchQuery('');
  };

  const popularSearches = [
    'Gaming Laptop',
    'Wireless Headphones',
    'Phone under 30000',
    '16GB Laptop',
    'Bluetooth Speaker'
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800 transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-slate-300 text-xs py-1.5 px-4 border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-blue-400 font-medium">
              <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Free 2-Day Delivery on orders over ₹999</span>
            </span>
            <span className="hidden sm:inline-block text-slate-500">•</span>
            <span className="hidden sm:inline-block text-slate-400">100% Genuine Tech with Official Warranty</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              <Phone className="w-3 h-3 text-emerald-400" />
              <span className="hidden xs:inline">Support:</span> +91 98765 43210
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-medium">INR (₹)</span>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo Brand */}
          <div 
            onClick={() => { setActiveView('home'); setSelectedCategory('All'); }} 
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Zap className="w-6 h-6 text-blue-400 group-hover:scale-110 group-hover:text-cyan-300 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  TechZone
                </span>
                <span className="text-xs font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">
                  Electronics
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium tracking-tight -mt-0.5">
                Power Your World With Better Technology
              </p>
            </div>
          </div>

          {/* Smart Search Bar (Desktop & Tablet) */}
          <div ref={searchContainerRef} className="hidden md:flex flex-1 max-w-xl relative">
            <form onSubmit={handleSearchSubmit} className="w-full relative">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search laptops, smartphones, headphones under ₹5000..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  className="w-full pl-11 pr-24 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-full text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-inner"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-full transition-colors flex items-center gap-1 shadow-sm"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Live Autocomplete / Suggestions Dropdown */}
            {isSearchFocused && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-50 p-3 animate-in fade-in slide-in-from-top-2 duration-150">
                {searchQuery.trim().length > 0 ? (
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-1.5 border-b border-slate-800">
                      Matching Products ({filteredSuggestions.length})
                    </div>
                    {filteredSuggestions.length > 0 ? (
                      <div className="mt-1 divide-y divide-slate-800/60">
                        {filteredSuggestions.map((prod) => (
                          <div
                            key={prod.id}
                            onClick={() => handleSelectProduct(prod)}
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 cursor-pointer transition-colors"
                          >
                            <img
                              src={prod.images[0]}
                              alt={prod.name}
                              className="w-11 h-11 object-cover rounded-lg bg-slate-950 border border-slate-800 shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-slate-100 truncate">{prod.name}</p>
                              <div className="flex items-center gap-2 text-xs text-slate-400">
                                <span className="text-blue-400 font-medium">{prod.brand}</span>
                                <span>•</span>
                                <span>{prod.category}</span>
                              </div>
                            </div>
                            <div className="text-right shrink-0">
                              <p className="text-sm font-bold text-emerald-400">₹{prod.price.toLocaleString('en-IN')}</p>
                              <p className="text-[11px] text-slate-500 line-through">₹{prod.originalPrice.toLocaleString('en-IN')}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-sm text-slate-400">
                        No catalog items found for "{searchQuery}".
                        <button
                          onClick={() => {
                            setIsSearchFocused(false);
                            setActiveView('products');
                          }}
                          className="mt-2 block mx-auto text-xs text-blue-400 hover:underline"
                        >
                          Browse all products instead
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-2 py-1">
                      Popular Searches
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2 px-1">
                      {popularSearches.map((term) => (
                        <button
                          key={term}
                          type="button"
                          onClick={() => {
                            setSearchQuery(term);
                            setActiveView('products');
                            setIsSearchFocused(false);
                          }}
                          className="px-3 py-1.5 bg-slate-800 hover:bg-blue-600/30 hover:border-blue-500 border border-slate-700 rounded-full text-xs text-slate-300 hover:text-blue-300 transition-colors flex items-center gap-1.5"
                        >
                          <Search className="w-3 h-3 text-slate-400" />
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* AI Assistant Button (Major Feature) */}
            <button
              onClick={() => setIsAIChatOpen(true)}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 active:scale-95 group"
              title="Open TechZone AI Assistant"
            >
              <Bot className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">Ask AI</span>
              <span className="inline sm:hidden">AI</span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-300"></span>
              </span>
            </button>

            {/* Compare Tool Shortcut */}
            <button
              onClick={() => setActiveView('compare')}
              className={`relative p-2.5 rounded-full border transition-all ${
                activeView === 'compare'
                  ? 'bg-blue-600/20 border-blue-500 text-blue-400'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
              }`}
              title="Compare Selected Products"
            >
              <Layers className="w-5 h-5" />
              {compareList.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-950">
                  {compareList.length}
                </span>
              )}
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => {
                setActiveView('products');
                // You can view wishlist or filter
              }}
              className="relative p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white transition-all"
              title="Saved Wishlist"
            >
              <Heart className="w-5 h-5 hover:text-rose-400 transition-colors" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-950">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartDrawerOpen(true)}
              className="flex items-center gap-2 p-2 sm:px-3.5 sm:py-2 rounded-full bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:text-blue-300 transition-all group"
              title="Open Shopping Cart"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-950">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <div className="hidden lg:flex flex-col text-left leading-none">
                <span className="text-[10px] text-slate-400 font-medium">Cart</span>
                <span className="text-xs font-bold text-slate-100">₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Search Bar Row */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearchSubmit} className="w-full relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search phones, laptops, headphones..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-20 py-2 bg-slate-900 border border-slate-800 rounded-full text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 bg-blue-600 text-white text-[11px] font-semibold rounded-full"
            >
              Search
            </button>
          </form>
        </div>

        {/* Secondary Category / Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center justify-between border-t border-slate-800/80 py-2.5 text-xs font-semibold">
          <div className="flex items-center gap-6">
            <button
              onClick={() => { setActiveView('home'); setSelectedCategory('All'); }}
              className={`hover:text-blue-400 transition-colors ${activeView === 'home' ? 'text-blue-400 font-bold' : 'text-slate-300'}`}
            >
              Home
            </button>

            <button
              onClick={() => { setActiveView('products'); setSelectedCategory('All'); }}
              className={`hover:text-blue-400 transition-colors ${activeView === 'products' ? 'text-blue-400 font-bold' : 'text-slate-300'}`}
            >
              All Electronics
            </button>

            {/* Quick Category Jump */}
            {categoriesList.slice(0, 5).map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id as any);
                  setActiveView('products');
                }}
                className="text-slate-400 hover:text-slate-100 transition-colors flex items-center gap-1"
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}

            <button
              onClick={() => setActiveView('deals')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold transition-all ${
                activeView === 'deals'
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                  : 'text-amber-400 hover:text-amber-300 hover:bg-amber-400/10'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-bounce" />
              <span>Today's Deals</span>
            </button>
          </div>

          <div className="flex items-center gap-5 text-slate-400">
            <button
              onClick={() => setActiveView('compare')}
              className="hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Compare ({compareList.length})</span>
            </button>
            <button
              onClick={() => setActiveView('about')}
              className={`hover:text-blue-400 transition-colors ${activeView === 'about' ? 'text-blue-400 font-bold' : ''}`}
            >
              About Us
            </button>
            <button
              onClick={() => setActiveView('contact')}
              className={`hover:text-blue-400 transition-colors ${activeView === 'contact' ? 'text-blue-400 font-bold' : ''}`}
            >
              Contact Store
            </button>
          </div>
        </nav>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 p-4 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 text-xs font-medium">
            <button
              onClick={() => { setActiveView('home'); setMobileMenuOpen(false); }}
              className="p-3 bg-slate-900 rounded-xl text-left hover:bg-slate-800 text-slate-200"
            >
              🏠 Home
            </button>
            <button
              onClick={() => { setActiveView('products'); setSelectedCategory('All'); setMobileMenuOpen(false); }}
              className="p-3 bg-slate-900 rounded-xl text-left hover:bg-slate-800 text-slate-200"
            >
              ⚡ All Products
            </button>
            <button
              onClick={() => { setActiveView('deals'); setMobileMenuOpen(false); }}
              className="p-3 bg-rose-950/40 border border-rose-900/50 rounded-xl text-left text-rose-300 font-semibold"
            >
              🔥 Today's Best Deals
            </button>
            <button
              onClick={() => { setActiveView('compare'); setMobileMenuOpen(false); }}
              className="p-3 bg-slate-900 rounded-xl text-left hover:bg-slate-800 text-slate-200"
            >
              ⚖️ Compare ({compareList.length})
            </button>
            <button
              onClick={() => { setActiveView('about'); setMobileMenuOpen(false); }}
              className="p-3 bg-slate-900 rounded-xl text-left hover:bg-slate-800 text-slate-200"
            >
              🏢 About TechZone
            </button>
            <button
              onClick={() => { setActiveView('contact'); setMobileMenuOpen(false); }}
              className="p-3 bg-slate-900 rounded-xl text-left hover:bg-slate-800 text-slate-200"
            >
              📍 Contact & Store
            </button>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Shop by Category</p>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              {categoriesList.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id as any);
                    setActiveView('products');
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 p-2 rounded-lg text-slate-300 hover:bg-slate-800 text-left"
                >
                  <span>{cat.icon}</span>
                  <span className="truncate">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
