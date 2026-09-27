import React, { useState } from 'react';
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Heart,
  ShoppingCart,
  Zap,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowLeft,
  Share2,
  Clock,
  ChevronRight
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Product } from '../types';

interface ExplainData {
  goodFor: string;
  whoShouldBuy: string;
  simpleSpecs: string;
  advantages: string[];
  considerations: string[];
  alternatives?: { id: string; name: string; price?: number; reason?: string }[];
}

export const ProductDetails: React.FC = () => {
  const {
    selectedProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    toggleCompare,
    isInCompare,
    setActiveView,
    openAIChatWithPrompt,
    openProductDetailsById,
    setIsCartDrawerOpen,
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isExplaining, setIsExplaining] = useState(false);
  const [explainData, setExplainData] = useState<ExplainData | null>(null);
  const [showExplainModal, setShowExplainModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!selectedProduct) {
    return (
      <div className="py-20 text-center text-slate-400 bg-slate-950">
        <p>No product selected.</p>
        <button
          onClick={() => setActiveView('products')}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full text-xs font-bold"
        >
          Back to Catalog
        </button>
      </div>
    );
  }

  const isFavorited = isInWishlist(selectedProduct.id);
  const isCompared = isInCompare(selectedProduct.id);

  // Trigger AI Explanation
  const handleExplainWithAI = async () => {
    setShowExplainModal(true);
    if (explainData) return; // already fetched

    setIsExplaining(true);
    try {
      const res = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: selectedProduct.id }),
      });
      const data = await res.json();
      setExplainData(data);
    } catch (err) {
      console.error(err);
      // Fallback data
      setExplainData({
        goodFor: `${selectedProduct.name} is optimized for high-performance computing, durability, and daily multitasking.`,
        whoShouldBuy: 'Students, creative professionals, and tech enthusiasts looking for reliable performance.',
        simpleSpecs: selectedProduct.features.slice(0, 3).join('. '),
        advantages: [
          `Authentic product with official ${selectedProduct.specifications.warranty}`,
          `Significant discount of ${selectedProduct.discountPercentage}% off MRP`,
          'Direct customer support and hassle-free returns',
        ],
        considerations: [
          'Verify available ports and connectivity against your home/office setup',
        ],
      });
    } finally {
      setIsExplaining(false);
    }
  };

  const handleBuyNow = () => {
    addToCart(selectedProduct, quantity);
    setIsCartDrawerOpen(true);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="py-8 bg-slate-950 min-h-screen border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={() => setActiveView('home')}
              className="hover:text-blue-400 transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <button
              onClick={() => setActiveView('products')}
              className="hover:text-blue-400 transition-colors"
            >
              {selectedProduct.category}
            </button>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-slate-200 font-medium truncate max-w-xs sm:max-w-md">
              {selectedProduct.name}
            </span>
          </div>

          <button
            onClick={() => setActiveView('products')}
            className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Products</span>
          </button>
        </div>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Big Main Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl flex items-center justify-center p-4">
              <img
                src={selectedProduct.images[activeImageIndex] || selectedProduct.images[0]}
                alt={selectedProduct.name}
                className="w-full h-full object-contain object-center transition-all duration-300"
              />

              {/* Discount Badge */}
              {selectedProduct.discountPercentage > 0 && (
                <div className="absolute top-4 left-4 bg-rose-600 text-white text-xs font-black px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
                  {selectedProduct.discountPercentage}% OFF
                </div>
              )}

              {/* Stock Status Badge */}
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700 text-xs font-bold text-emerald-400">
                {selectedProduct.stockStatus}
              </div>
            </div>

            {/* Thumbnail Carousel */}
            {selectedProduct.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {selectedProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden bg-slate-900 border-2 transition-all shrink-0 p-1 ${
                      activeImageIndex === idx
                        ? 'border-blue-500 shadow-md shadow-blue-500/20 scale-105'
                        : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
                  </button>
                ))}
              </div>
            )}

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center">
              <div className="flex flex-col items-center">
                <Truck className="w-5 h-5 text-blue-400 mb-1" />
                <span className="text-[11px] font-bold text-white">Free Express Delivery</span>
                <span className="text-[10px] text-slate-400">In 2 to 3 days</span>
              </div>
              <div className="flex flex-col items-center border-x border-slate-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
                <span className="text-[11px] font-bold text-white">100% Genuine</span>
                <span className="text-[10px] text-slate-400">{selectedProduct.specifications.warranty}</span>
              </div>
              <div className="flex flex-col items-center">
                <RotateCcw className="w-5 h-5 text-purple-400 mb-1" />
                <span className="text-[11px] font-bold text-white">7 Days Replacement</span>
                <span className="text-[10px] text-slate-400">Hassle-free guarantee</span>
              </div>
            </div>

          </div>

          {/* Right Column: Title, Price, Description, Buy CTA & AI Explainer */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Brand & Category */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-800/50">
                  {selectedProduct.brand}
                </span>
                <span className="text-xs text-slate-400">
                  Category: <span className="text-slate-200 font-semibold">{selectedProduct.category}</span>
                </span>
              </div>

              {/* Share button */}
              <button
                onClick={handleShare}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-800"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Copied Link!' : 'Share'}</span>
              </button>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {selectedProduct.name}
            </h1>

            {/* Ratings & Reviews */}
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-lg text-amber-400">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1.5" />
                <span className="text-xs font-bold text-white">{selectedProduct.rating}</span>
              </div>
              <span className="text-xs text-slate-400">
                Based on <strong className="text-slate-200">{selectedProduct.reviewCount}</strong> verified customer reviews
              </span>
            </div>

            {/* Price Area */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-850 border border-slate-800 space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-black text-white">
                  ₹{selectedProduct.price.toLocaleString('en-IN')}
                </span>
                {selectedProduct.originalPrice > selectedProduct.price && (
                  <>
                    <span className="text-sm sm:text-base text-slate-500 line-through">
                      ₹{selectedProduct.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-400">
                      Save ₹{(selectedProduct.originalPrice - selectedProduct.price).toLocaleString('en-IN')} ({selectedProduct.discountPercentage}% OFF)
                    </span>
                  </>
                )}
              </div>
              <p className="text-[11px] text-slate-400">
                Inclusive of all taxes. Free delivery across India. Cash on delivery available.
              </p>
            </div>

            {/* AI Assistant Special Banners */}
            <div className="flex flex-wrap gap-2.5 p-3 rounded-2xl bg-indigo-950/40 border border-indigo-500/30">
              <button
                onClick={handleExplainWithAI}
                className="flex-1 min-w-[200px] py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-300 animate-spin" />
                <span>🤖 Explain With AI</span>
              </button>

              <button
                onClick={() =>
                  openAIChatWithPrompt(
                    `I am interested in ${selectedProduct.name} priced at ₹${selectedProduct.price.toLocaleString(
                      'en-IN'
                    )}. Is this the best choice for me or are there better alternatives?`
                  )
                }
                className="py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-indigo-300 border border-indigo-500/30 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Ask AI About This Product</span>
              </button>
            </div>

            {/* Short Description */}
            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedProduct.description}
            </p>

            {/* Quantity & Main Purchase Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-slate-400 uppercase">Quantity:</span>
                <div className="flex items-center bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1 text-sm font-bold text-slate-300 hover:bg-slate-800"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-xs font-bold text-white min-w-[36px] text-center font-mono">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1 text-sm font-bold text-slate-300 hover:bg-slate-800"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => addToCart(selectedProduct, quantity)}
                  className="flex-1 min-w-[160px] py-3.5 px-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={handleBuyNow}
                  className="flex-1 min-w-[160px] py-3.5 px-6 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer"
                >
                  <Zap className="w-4 h-4" />
                  <span>Buy Now</span>
                </button>
              </div>

              {/* Wishlist & Compare Buttons */}
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => toggleWishlist(selectedProduct.id)}
                  className={`flex-1 py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                    isFavorited
                      ? 'bg-rose-950/40 border-rose-600 text-rose-400'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
                  <span>{isFavorited ? 'In Wishlist' : 'Add to Wishlist'}</span>
                </button>

                <button
                  onClick={() => toggleCompare(selectedProduct.id)}
                  className={`flex-1 py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                    isCompared
                      ? 'bg-indigo-950/40 border-indigo-600 text-indigo-400'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>{isCompared ? 'In Compare List' : 'Compare Product'}</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Features & Specifications Tabs / Tables */}
        <div className="mt-14 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Key Features */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span>Key Features & Highlights</span>
              </h3>
              <ul className="space-y-2.5">
                {selectedProduct.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detailed Technical Specifications Table */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-400" />
                <span>Technical Specifications</span>
              </h3>
              <div className="rounded-2xl border border-slate-800 overflow-hidden divide-y divide-slate-800/80 bg-slate-900/40 text-xs sm:text-sm">
                {Object.entries(selectedProduct.specifications).map(([key, val]) => (
                  <div key={key} className="grid grid-cols-12 p-3 hover:bg-slate-800/40 transition-colors">
                    <span className="col-span-4 font-bold text-slate-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="col-span-8 text-slate-200 font-medium">
                      {String(val)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* AI Explanation Modal Dialog */}
      {showExplainModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-indigo-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 p-0.5">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-cyan-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">
                    TechZone AI Product Analysis
                  </h3>
                  <p className="text-xs text-slate-400">
                    Objective breakdown for: <span className="text-blue-300 font-semibold">{selectedProduct.name}</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowExplainModal(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            {isExplaining ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-sm text-slate-300 font-semibold">
                  Analyzing specifications against real-world use cases...
                </p>
                <p className="text-xs text-slate-500">
                  TechZone AI is generating a plain-English explanation
                </p>
              </div>
            ) : explainData ? (
              <div className="space-y-5 text-xs sm:text-sm">
                
                {/* What it is good for */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" /> What this product is great for:
                  </h4>
                  <p className="text-slate-200 leading-relaxed">{explainData.goodFor}</p>
                </div>

                {/* Who should buy it */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Who should buy it:
                  </h4>
                  <p className="text-slate-200 leading-relaxed">{explainData.whoShouldBuy}</p>
                </div>

                {/* Specs in simple layman terms */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" /> Key specs in simple English:
                  </h4>
                  <p className="text-slate-300 leading-relaxed">{explainData.simpleSpecs}</p>
                </div>

                {/* Advantages & Considerations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-800/40">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                      Key Advantages
                    </h4>
                    <ul className="space-y-1.5 text-slate-300">
                      {explainData.advantages?.map((adv, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-400">✓</span>
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-800/40">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                      Things to Consider
                    </h4>
                    <ul className="space-y-1.5 text-slate-300">
                      {explainData.considerations?.map((con, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-400">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Store Alternatives */}
                {explainData.alternatives && explainData.alternatives.length > 0 && (
                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Catalog Alternatives to Consider:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {explainData.alternatives.map((alt) => (
                        <div
                          key={alt.id}
                          onClick={() => {
                            setShowExplainModal(false);
                            openProductDetailsById(alt.id);
                          }}
                          className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500 cursor-pointer transition-colors flex items-center justify-between"
                        >
                          <div>
                            <p className="font-bold text-white truncate">{alt.name}</p>
                            {alt.price && (
                              <p className="text-xs text-emerald-400 font-bold">
                                ₹{alt.price.toLocaleString('en-IN')}
                              </p>
                            )}
                          </div>
                          <span className="text-xs text-blue-400 font-bold">View →</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ) : null}

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setShowExplainModal(false)}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowExplainModal(false);
                  addToCart(selectedProduct, quantity);
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5"
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>Add to Cart</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
