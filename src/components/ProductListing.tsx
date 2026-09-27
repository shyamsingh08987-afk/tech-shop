import React, { useState, useMemo } from 'react';
import {
  SlidersHorizontal,
  X,
  Search,
  Filter,
  Check,
  ChevronDown,
  RotateCcw,
  Sparkles,
  ArrowUpDown
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { categoriesList, popularBrands } from '../data/products';
import { ProductCategory } from '../types';

export const ProductListing: React.FC = () => {
  const {
    products,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    openAIChatWithPrompt
  } = useShop();

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(150000);
  const [minRating, setMinRating] = useState<number>(0);
  const [minDiscount, setMinDiscount] = useState<number>(0);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<
    'featured' | 'newest' | 'price-asc' | 'price-desc' | 'rating-desc' | 'discount-desc'
  >('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Parse natural queries like "under 30000" or "under 60k" in search bar
  const parsedSearchBudget = useMemo(() => {
    const q = searchQuery.toLowerCase();
    const match = q.match(/under\s*(?:₹|inr|rs\.?)?\s*(\d+)(k)?/i);
    if (match) {
      let amt = parseInt(match[1], 10);
      if (match[2]?.toLowerCase() === 'k') amt *= 1000;
      return amt;
    }
    return null;
  }, [searchQuery]);

  // Brand toggle
  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedBrands([]);
    setMaxPrice(150000);
    setMinRating(0);
    setMinDiscount(0);
    setInStockOnly(false);
    setSearchQuery('');
    setSortBy('featured');
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'All' && p.category !== selectedCategory) {
        return false;
      }

      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) {
        return false;
      }

      // Max price filter (UI slider or natural language query "under X")
      const effectiveMaxPrice = parsedSearchBudget !== null ? Math.min(maxPrice, parsedSearchBudget) : maxPrice;
      if (p.price > effectiveMaxPrice) {
        return false;
      }

      // Rating filter
      if (minRating > 0 && p.rating < minRating) {
        return false;
      }

      // Discount filter
      if (minDiscount > 0 && p.discountPercentage < minDiscount) {
        return false;
      }

      // In stock filter
      if (inStockOnly && !p.inStock) {
        return false;
      }

      // Search Query filter (excluding the "under 30000" token so we match category/brand/keyword)
      if (searchQuery.trim()) {
        const cleanQuery = searchQuery
          .replace(/under\s*(?:₹|inr|rs\.?)?\s*\d+k?/i, '')
          .trim()
          .toLowerCase();

        if (cleanQuery) {
          const matchName = p.name.toLowerCase().includes(cleanQuery);
          const matchBrand = p.brand.toLowerCase().includes(cleanQuery);
          const matchCat = p.category.toLowerCase().includes(cleanQuery);
          const matchFeature = p.features.some((f) => f.toLowerCase().includes(cleanQuery));
          const matchSpec =
            (p.specifications.processor && p.specifications.processor.toLowerCase().includes(cleanQuery)) ||
            (p.specifications.ram && p.specifications.ram.toLowerCase().includes(cleanQuery)) ||
            (p.specifications.display && p.specifications.display.toLowerCase().includes(cleanQuery));

          if (!matchName && !matchBrand && !matchCat && !matchFeature && !matchSpec) {
            return false;
          }
        }
      }

      return true;
    });
  }, [
    products,
    selectedCategory,
    selectedBrands,
    maxPrice,
    parsedSearchBudget,
    minRating,
    minDiscount,
    inStockOnly,
    searchQuery,
  ]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    switch (sortBy) {
      case 'price-asc':
        return list.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return list.sort((a, b) => b.price - a.price);
      case 'rating-desc':
        return list.sort((a, b) => b.rating - a.rating);
      case 'discount-desc':
        return list.sort((a, b) => b.discountPercentage - a.discountPercentage);
      case 'newest':
        return list.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0));
      case 'featured':
      default:
        return list.sort((a, b) => {
          const scoreA = (a.badge ? 2 : 0) + a.rating;
          const scoreB = (b.badge ? 2 : 0) + b.rating;
          return scoreB - scoreA;
        });
    }
  }, [filteredProducts, sortBy]);

  // Active filter count
  const activeFiltersCount =
    (selectedCategory !== 'All' ? 1 : 0) +
    selectedBrands.length +
    (maxPrice < 150000 ? 1 : 0) +
    (minRating > 0 ? 1 : 0) +
    (minDiscount > 0 ? 1 : 0) +
    (inStockOnly ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  return (
    <div className="py-8 bg-slate-950 min-h-screen border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
              <span>Electronics Catalog</span>
              <span>•</span>
              <span>{sortedProducts.length} items available</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {selectedCategory === 'All' ? 'All Electronics & Gadgets' : selectedCategory}
            </h1>
          </div>

          {/* Quick AI Search Helper */}
          <button
            onClick={() =>
              openAIChatWithPrompt(
                searchQuery
                  ? `Can you recommend the best option among "${searchQuery}"?`
                  : 'Can you recommend the best gadget for my budget and requirements?'
              )
            }
            className="self-start md:self-auto px-4 py-2 rounded-full bg-indigo-950/70 hover:bg-indigo-900 border border-indigo-500/40 text-indigo-300 text-xs font-bold flex items-center gap-2 shadow-lg transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin" />
            <span>Not sure what to pick? Ask TechZone AI</span>
          </button>
        </div>

        {/* Toolbar: Search input, Mobile Filter Toggle, Sort Dropdown */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-slate-900/60 border border-slate-800 p-3.5 rounded-2xl">
          
          <div className="flex items-center gap-2 flex-1 min-w-[240px]">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Filter catalog: 'gaming laptop', 'wireless headphones', 'under 30000'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3.5 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-slate-200"
            >
              <Filter className="w-4 h-4 text-blue-400" />
              <span>Filters ({activeFiltersCount})</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 hidden sm:inline flex items-center gap-1">
                <ArrowUpDown className="w-3 h-3" /> Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-950 border border-slate-800 text-slate-200 text-xs font-semibold rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
              >
                <option value="featured">Featured / Best Match</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="rating-desc">Highest Customer Rated</option>
                <option value="discount-desc">Biggest Discount %</option>
                <option value="newest">New Arrivals</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filter Pills Bar */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs text-slate-400 font-medium">Active filters:</span>
            
            {selectedCategory !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs font-medium">
                Category: {selectedCategory}
                <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setSelectedCategory('All')} />
              </span>
            )}

            {selectedBrands.map((brand) => (
              <span key={brand} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium">
                {brand}
                <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => toggleBrand(brand)} />
              </span>
            ))}

            {maxPrice < 150000 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium">
                Max ₹{maxPrice.toLocaleString('en-IN')}
                <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setMaxPrice(150000)} />
              </span>
            )}

            {minRating > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium">
                {minRating}★ & above
                <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setMinRating(0)} />
              </span>
            )}

            {minDiscount > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium">
                {minDiscount}%+ Off
                <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setMinDiscount(0)} />
              </span>
            )}

            {inStockOnly && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium">
                In Stock Only
                <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setInStockOnly(false)} />
              </span>
            )}

            <button
              onClick={resetFilters}
              className="text-xs text-rose-400 hover:text-rose-300 font-bold ml-2 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset All</span>
            </button>
          </div>
        )}

        {/* Main Grid: Sidebar Filters + Products */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sticky top-28 space-y-6 shadow-xl">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-blue-400" />
                  <h3 className="text-sm font-bold text-white">Filters</h3>
                </div>
                {activeFiltersCount > 0 && (
                  <button onClick={resetFilters} className="text-[11px] text-blue-400 hover:underline font-semibold">
                    Clear all
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Category
                </h4>
                <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                      selectedCategory === 'All'
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span>All Electronics</span>
                    <span className="text-[10px] text-slate-500">{products.length}</span>
                  </button>
                  {categoriesList.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id as any)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                          : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <span>{cat.icon}</span>
                        <span className="truncate">{cat.name}</span>
                      </span>
                      <span className="text-[10px] text-slate-500">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Slider */}
              <div className="pt-2 border-t border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Max Price
                  </h4>
                  <span className="text-xs font-bold text-emerald-400">
                    ₹{maxPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="150000"
                  step="2000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>₹2,000</span>
                  <span>₹75,000</span>
                  <span>₹1,50,000+</span>
                </div>

                {/* Quick Price Presets */}
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {[5000, 30000, 60000, 100000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setMaxPrice(preset)}
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold border transition-colors ${
                        maxPrice === preset
                          ? 'bg-blue-600 border-blue-500 text-white'
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                      }`}
                    >
                      Under ₹{(preset / 1000).toFixed(0)}k
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Brands Filter */}
              <div className="pt-2 border-t border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Brand
                </h4>
                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  {popularBrands.map((brand) => {
                    const isChecked = selectedBrands.includes(brand);
                    const count = products.filter((p) => p.brand === brand).length;
                    if (count === 0) return null;
                    return (
                      <label
                        key={brand}
                        onClick={() => toggleBrand(brand)}
                        className="flex items-center justify-between text-xs text-slate-300 hover:text-white cursor-pointer select-none py-1"
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            isChecked ? 'bg-blue-600 border-blue-500 text-white' : 'border-slate-700 bg-slate-950'
                          }`}>
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                          <span>{brand}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono">({count})</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Rating Filter */}
              <div className="pt-2 border-t border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Customer Rating
                </h4>
                <div className="space-y-1">
                  {[4.5, 4.0, 3.5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setMinRating(minRating === rating ? 0 : rating)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                        minRating === rating
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <span>★</span>
                        <span>{rating} & above</span>
                      </span>
                      {minRating === rating && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Discount Filter */}
              <div className="pt-2 border-t border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Min Discount
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {[10, 20, 30, 40].map((disc) => (
                    <button
                      key={disc}
                      onClick={() => setMinDiscount(minDiscount === disc ? 0 : disc)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-colors ${
                        minDiscount === disc
                          ? 'bg-rose-600 border-rose-500 text-white'
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                      }`}
                    >
                      {disc}%+ Off
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability Filter */}
              <div className="pt-2 border-t border-slate-800">
                <label className="flex items-center gap-2.5 text-xs font-semibold text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-700 bg-slate-950 accent-blue-600"
                  />
                  <span>Exclude Out of Stock</span>
                </label>
              </div>

            </div>
          </aside>

          {/* Product Cards Grid Area */}
          <main className="lg:col-span-3">
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 px-4 bg-slate-900/40 rounded-3xl border border-slate-800">
                <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4 text-slate-400 text-2xl">
                  🔍
                </div>
                <h3 className="text-lg font-bold text-white mb-2">No matching electronics found</h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
                  We couldn't find any catalog products matching your current filters or query "{searchQuery}".
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={resetFilters}
                    className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold"
                  >
                    Clear All Filters
                  </button>
                  <button
                    onClick={() => openAIChatWithPrompt(`Suggest products similar to: ${searchQuery}`)}
                    className="px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Ask AI for Alternative</span>
                  </button>
                </div>
              </div>
            )}
          </main>

        </div>

      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex bg-black/80 backdrop-blur-sm lg:hidden animate-in fade-in duration-200">
          <div className="relative ml-auto w-full max-w-xs bg-slate-900 h-full p-5 overflow-y-auto space-y-6 border-l border-slate-800">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white">Filter Products</h3>
              <button onClick={() => setIsMobileFilterOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Category */}
            <div>
              <p className="text-xs font-bold uppercase text-slate-400 mb-2">Category</p>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-800 text-xs text-slate-200 rounded-xl p-2.5"
              >
                <option value="All">All Categories</option>
                {categoriesList.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Max Price */}
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="font-bold text-slate-400 uppercase">Max Price:</span>
                <span className="font-bold text-emerald-400">₹{maxPrice.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="2000"
                max="150000"
                step="2000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
            </div>

            {/* Mobile Brands */}
            <div>
              <p className="text-xs font-bold uppercase text-slate-400 mb-2">Brands</p>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                {popularBrands.slice(0, 8).map((b) => (
                  <button
                    key={b}
                    onClick={() => toggleBrand(b)}
                    className={`p-2 rounded-lg border text-left truncate ${
                      selectedBrands.includes(b)
                        ? 'bg-blue-600 border-blue-500 text-white font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-300'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex gap-3">
              <button
                onClick={resetFilters}
                className="flex-1 py-2.5 bg-slate-800 text-slate-300 text-xs font-bold rounded-xl"
              >
                Reset
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl"
              >
                Apply ({sortedProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
