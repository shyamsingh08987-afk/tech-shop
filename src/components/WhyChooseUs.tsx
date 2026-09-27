import React from 'react';
import { ShieldCheck, Tag, Truck, Lock, Headset, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      title: 'Genuine Products',
      subtitle: '100% Authentic Electronics',
      desc: 'Sourced directly from certified brand distributors with intact original seals and full brand warranty support.',
      accent: 'border-blue-500/30 bg-blue-950/10',
    },
    {
      icon: <Tag className="w-6 h-6 text-emerald-400" />,
      title: 'Best Prices',
      subtitle: 'Competitive Prices & Offers',
      desc: 'Transparent Indian Rupee pricing with daily deals, no hidden fees, and seasonal festival discounts.',
      accent: 'border-emerald-500/30 bg-emerald-950/10',
    },
    {
      icon: <Truck className="w-6 h-6 text-amber-400" />,
      title: 'Fast Delivery',
      subtitle: 'Reliable Express Service',
      desc: 'Lightning-fast delivery across India with real-time tracking, protective bubble packaging, and insured transit.',
      accent: 'border-amber-500/30 bg-amber-950/10',
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-400" />,
      title: 'Secure Shopping',
      subtitle: 'Safe Checkout Experience',
      desc: '256-bit encrypted payments supporting UPI, Cards, Net Banking, and convenient Cash on Delivery.',
      accent: 'border-purple-500/30 bg-purple-950/10',
    },
    {
      icon: <Headset className="w-6 h-6 text-cyan-400" />,
      title: 'Expert Support',
      subtitle: 'AI & Human Guidance',
      desc: 'Our 24/7 TechZone AI assistant and trained retail specialists help you select the exact device for your needs.',
      accent: 'border-cyan-500/30 bg-cyan-950/10',
    },
  ];

  return (
    <section className="py-14 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            The TechZone Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Why Choose TechZone Electronics?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            We are committed to delivering the ultimate technology purchasing experience with authentic gear, honest advice, and seamless delivery.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-slate-900/80 border ${card.accent} flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-lg`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 shadow-inner">
                  {card.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-0.5">{card.title}</h3>
                <h4 className="text-[11px] font-semibold text-blue-400 mb-2">{card.subtitle}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
