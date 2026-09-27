import React from 'react';
import { Heart, ShoppingCart, Eye, Star, Layers, Check, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
  highlightDeal?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, highlightDeal = false }) => {
  const {
    openProductDetails,
    openQuickView,
    addToCart,
    toggleWishlist,
    isInWishlist,
    toggleCompare,
    isInCompare,
    openAIChatWithPrompt,
  } = useShop();

  const isFavorited = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);

  return (
    <div className={`group relative bg-slate-900/90 hover:bg-slate-850 border rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 ${
      highlightDeal
        ? 'border-amber-500/40 hover:border-amber-500 shadow-amber-500/10'
        : 'border-slate-800 hover:border-blue-500/50 shadow-slate-950/40'
    }`}>
      
      {/* Top Badges & Actions */}
      <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-950 mb-3.5 flex items-center justify-center border border-slate-800/80">
        
        {/* Product Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
        />

        {/* Discount Badge */}
        {product.discountPercentage > 0 && (
          <span className="absolute top-2.5 left-2.5 bg-gradient-to-r from-rose-600 to-red-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider">
            {product.discountPercentage}% OFF
          </span>
        )}

        {/* Badge (e.g. Deal of the Day, Bestseller) */}
        {product.badge && (
          <span className={`absolute bottom-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-md shadow-sm ${
            product.badge === 'Deal of the Day'
              ? 'bg-amber-500/90 text-slate-950'
              : product.badge === 'Bestseller'
              ? 'bg-blue-500/90 text-white'
              : 'bg-emerald-500/90 text-white'
          }`}>
            {product.badge}
          </span>
        )}

        {/* Wishlist Heart Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-md transition-all ${
            isFavorited
              ? 'bg-rose-500 text-white shadow-rose-500/30 shadow-md'
              : 'bg-slate-950/70 text-slate-300 hover:text-white hover:bg-slate-900'
          }`}
          title={isFavorited ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
        </button>

        {/* Hover Quick Actions Overlay */}
        <div className="absolute inset-x-2 bottom-2 hidden sm:flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={() => openQuickView(product)}
            className="flex-1 py-2 px-3 bg-slate-900/95 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold rounded-lg shadow-lg backdrop-blur-md flex items-center justify-center gap-1.5 border border-slate-700 transition-all hover:scale-102"
          >
            <Eye className="w-3.5 h-3.5 text-blue-400" />
            <span>Quick View</span>
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleCompare(product.id);
            }}
            className={`p-2 rounded-lg text-xs font-semibold shadow-lg backdrop-blur-md flex items-center justify-center border transition-all ${
              isCompared
                ? 'bg-indigo-600 border-indigo-500 text-white'
                : 'bg-slate-900/95 hover:bg-slate-800 border-slate-700 text-slate-200'
            }`}
            title="Toggle Comparison"
          >
            {isCompared ? <Check className="w-3.5 h-3.5" /> : <Layers className="w-3.5 h-3.5 text-indigo-400" />}
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="flex-1 flex flex-col">
        {/* Brand & Stock status */}
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            {product.brand}
          </span>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
            product.stockStatus === 'In Stock'
              ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'
              : 'bg-amber-950/60 text-amber-400 border border-amber-800/40'
          }`}>
            {product.stockStatus}
          </span>
        </div>

        {/* Product Name */}
        <h3
          onClick={() => openProductDetails(product)}
          className="text-sm font-bold text-slate-100 line-clamp-2 hover:text-blue-400 cursor-pointer transition-colors leading-snug mb-1.5"
          title={product.name}
        >
          {product.name}
        </h3>

        {/* Rating Stars */}
        <div className="flex items-center gap-1.5 mb-2.5">
          <div className="flex items-center text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="ml-1 text-xs font-bold text-slate-200">{product.rating}</span>
          </div>
          <span className="text-[11px] text-slate-500">({product.reviewCount})</span>
          <span className="text-slate-600 text-[10px]">•</span>
          <span className="text-[11px] text-slate-400 truncate">{product.category}</span>
        </div>

        {/* Highlight Specs Summary */}
        <div className="text-[11px] text-slate-400 line-clamp-1 mb-3 bg-slate-950/50 px-2 py-1 rounded-md border border-slate-800/60">
          {product.specifications.processor || product.specifications.display || product.specifications.powerOutput || product.features[0]}
        </div>

        {/* Pricing Area */}
        <div className="mt-auto pt-2 border-t border-slate-800/80">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg font-black text-white">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-slate-500 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/20 hover:shadow-blue-600/40 transition-all active:scale-97 cursor-pointer"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Add to Cart</span>
            </button>

            {/* Quick Ask AI button */}
            <button
              onClick={() => openAIChatWithPrompt(`Tell me more about ${product.name} and why I should buy it.`)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-300 border border-slate-700 transition-colors"
              title="Ask AI about this product"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
