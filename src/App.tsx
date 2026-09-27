import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryShowcase } from './components/CategoryShowcase';
import { DealsSection } from './components/DealsSection';
import { ProductListing } from './components/ProductListing';
import { ProductDetails } from './components/ProductDetails';
import { ProductComparison } from './components/ProductComparison';
import { CheckoutView } from './components/CheckoutView';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { BrandsSection } from './components/BrandsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Footer } from './components/Footer';
import { AIChatDrawer } from './components/AIChatDrawer';
import { CartDrawer } from './components/CartView';
import { QuickViewModal } from './components/QuickViewModal';
import { ArrowRight, Flame } from 'lucide-react';
import { ProductCard } from './components/ProductCard';

const MainContent: React.FC = () => {
  const { activeView, setActiveView, products, setSelectedCategory } = useShop();

  const renderActiveView = () => {
    switch (activeView) {
      case 'products':
        return <ProductListing />;
      
      case 'deals':
        return (
          <div>
            <DealsSection />
            <div className="py-8 bg-slate-950">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">More Discounted Gadgets</h3>
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setActiveView('products');
                    }}
                    className="text-xs font-bold text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <span>View All Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {products
                    .filter((p) => p.discountPercentage >= 15)
                    .slice(4, 12)
                    .map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'details':
        return <ProductDetails />;

      case 'compare':
        return <ProductComparison />;

      case 'checkout':
        return <CheckoutView />;

      case 'about':
        return <AboutUs />;

      case 'contact':
        return <ContactUs />;

      case 'home':
      default:
        return (
          <main>
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Category Showcase */}
            <CategoryShowcase />

            {/* 3. Today's Best Deals with Countdown */}
            <DealsSection />

            {/* 4. Featured Bestsellers Grid */}
            <section className="py-14 bg-slate-950 border-b border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                      <span>Customer Favorites</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Trending Electronics in India
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setActiveView('products');
                    }}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors group self-start sm:self-auto"
                  >
                    <span>Explore All 30+ Products</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {products.slice(0, 8).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>

            {/* 5. Why Choose Us (5 cards) */}
            <WhyChooseUs />

            {/* 6. Popular Brands Section */}
            <BrandsSection />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <Header />

      {/* Main Dynamic View */}
      <div className="flex-1">
        {renderActiveView()}
      </div>

      {/* Floating AI Shopping Assistant Drawer */}
      <AIChatDrawer />

      {/* Slide-out Cart Drawer */}
      <CartDrawer />

      {/* Quick View Modal */}
      <QuickViewModal />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainContent />
    </ShopProvider>
  );
}
