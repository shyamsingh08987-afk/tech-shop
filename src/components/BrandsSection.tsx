import React from 'react';
import { useShop } from '../context/ShopContext';
import { popularBrands } from '../data/products';

export const BrandsSection: React.FC = () => {
  const { products, setActiveView, setSearchQuery, setSelectedCategory } = useShop();

  const handleBrandClick = (brandName: string) => {
    setSelectedCategory('All');
    setSearchQuery(brandName);
    setActiveView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            Authorized Retail Partner
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Shop By Popular Brands
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-lg mx-auto">
            100% genuine products directly sourced from leading global electronics manufacturers.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {popularBrands.map((brand) => {
            const count = products.filter((p) => p.brand === brand).length;

            return (
              <div
                key={brand}
                onClick={() => handleBrandClick(brand)}
                className="group p-4 rounded-2xl bg-slate-900/60 hover:bg-slate-850 border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-sm font-black text-white group-hover:text-blue-400 transition-colors mb-2 shadow-inner">
                  {brand.slice(0, 2).toUpperCase()}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                  {brand}
                </h4>
                <span className="text-[10px] text-slate-500 mt-0.5">
                  {count > 0 ? `${count} Products` : 'Authorized'}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
