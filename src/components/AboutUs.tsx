import React from 'react';
import { ShieldCheck, Heart, Sparkles, Award, Users, Target, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const AboutUs: React.FC = () => {
  const { setActiveView } = useShop();

  return (
    <div className="py-12 bg-slate-950 min-h-screen border-b border-slate-800 text-slate-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 text-xs font-semibold">
            <span>About TechZone Electronics</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Technology You Can Trust
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            TechZone Electronics provides high quality electronics, computing devices, and smart accessories at competitive Indian prices while helping customers choose the right products with AI-driven intelligence.
          </p>
        </div>

        {/* Brand Banner */}
        <div className="relative rounded-3xl overflow-hidden aspect-[21/9] bg-slate-900 border border-slate-800 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80"
            alt="TechZone Electronics Experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Power Your World With Better Technology
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              From coding laptops and flagship smartphones to high-fidelity audio and smart home gadgets.
            </p>
          </div>
        </div>

        {/* 4 Core Sections: Our Story, Mission, Values, Why Customers Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Our Story */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Our Story</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Founded in Mathura, Uttar Pradesh, TechZone Electronics started with a simple belief: buying electronics in India shouldn't be confusing, overpriced, or plagued with counterfeit items. We combined direct partnerships with global brands like Apple, Samsung, Sony, HP, Lenovo, and ASUS with cutting-edge digital shopping tools so students, creators, and professionals always get genuine gear at verified fair prices.
            </p>
          </div>

          {/* Our Mission */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our mission is to empower millions of students, gamers, developers, and families with better technology. We eliminate technical confusion through our AI shopping assistant, transparent comparison engines, and dedicated after-sales support—ensuring every customer invests in a device that genuinely fulfills their aspirations.
            </p>
          </div>

          {/* Our Values */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Our Values</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Absolute Authenticity:</strong> Zero counterfeits, 100% genuine brand boxes with serial checks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Honest Guidance:</strong> Never overselling beyond a customer's real budget or workload.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Customer First:</strong> 7-day hassle-free replacement and prompt warranty coordination.</span>
              </li>
            </ul>
          </div>

          {/* Why Customers Choose Us */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Why Customers Choose Us</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Customers across India trust TechZone for our certified inventory, lightning-fast order fulfillment, and personalized AI shopping recommendations. When you purchase from TechZone, you receive not just a product, but lifetime support and dependable technology solutions.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-950/60 to-slate-900 border border-blue-500/30 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Ready to upgrade your technology setup?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Browse our catalog or chat with TechZone AI for tailored suggestions.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => setActiveView('products')}
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-lg"
            >
              Explore Catalog
            </button>
            <button
              onClick={() => setActiveView('contact')}
              className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold"
            >
              Contact Support
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
