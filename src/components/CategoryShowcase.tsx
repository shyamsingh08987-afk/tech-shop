import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categoriesList } from '../data/products';
import { useShop } from '../context/ShopContext';

export const CategoryShowcase: React.FC = () => {
  const { setSelectedCategory, setActiveView } = useShop();

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId as any);
    setActiveView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
              <span>Explore Tech Categories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Featured Electronics Categories
            </h2>
          </div>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setActiveView('products');
            }}
            className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors self-start sm:self-auto group"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {categoriesList.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="group relative bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-blue-500/60 rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col items-center text-center select-none"
            >
              {/* Category Icon with glow */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700/80 group-hover:border-blue-500/60 flex items-center justify-center text-2xl mb-3 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <span>{cat.icon}</span>
              </div>

              {/* Title & Item Count */}
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                {cat.name}
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {cat.count} items
              </p>

              {/* Hover Indicator */}
              <div className="mt-2 text-[10px] font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Explore →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
