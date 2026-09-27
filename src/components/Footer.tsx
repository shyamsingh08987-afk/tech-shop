import React, { useState } from 'react';
import {
  Zap,
  Mail,
  Send,
  CheckCircle2,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ShieldCheck,
  Phone,
  MapPin
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Footer: React.FC = () => {
  const { setActiveView, setSelectedCategory } = useShop();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const handleShopCategory = (cat: string) => {
    setSelectedCategory(cat as any);
    setActiveView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border-b border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              TechZone VIP Club
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Get the latest technology deals directly in your inbox.
            </h3>
            <p className="text-slate-400 text-xs max-w-lg">
              Receive secret discount coupons, new product launch alerts, and festival price drops.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800 px-4 py-2.5 rounded-full">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you for subscribing to TechZone Deals!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md w-full">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-full text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full sm:w-72"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-colors shrink-0 shadow-md"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Brand Info (Col 1 & 2) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                TechZone Electronics
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              “Power Your World With Better Technology.” Official electronics retail store delivering genuine smartphones, laptops, smart accessories, and gaming hardware across India with AI-powered shopping assistance.
            </p>

            <div className="space-y-1.5 pt-2 text-[11px] text-slate-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Main Market, Mathura, Uttar Pradesh, India (281001)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Helpline: +91 98765 43210</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>support@techzoneelectronics.com</span>
              </p>
            </div>
          </div>

          {/* Col 3: Shop */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Shop Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleShopCategory('Smartphones')} className="hover:text-blue-400 transition-colors">
                  Smartphones
                </button>
              </li>
              <li>
                <button onClick={() => handleShopCategory('Laptops')} className="hover:text-blue-400 transition-colors">
                  Laptops & Ultrabooks
                </button>
              </li>
              <li>
                <button onClick={() => handleShopCategory('TVs & Monitors')} className="hover:text-blue-400 transition-colors">
                  TVs & 4K Monitors
                </button>
              </li>
              <li>
                <button onClick={() => handleShopCategory('Computer Accessories')} className="hover:text-blue-400 transition-colors">
                  Accessories & Keyboards
                </button>
              </li>
              <li>
                <button onClick={() => handleShopCategory('Gaming')} className="hover:text-blue-400 transition-colors">
                  Gaming Consoles
                </button>
              </li>
              <li>
                <button onClick={() => handleShopCategory('Smart Watches')} className="hover:text-blue-400 transition-colors">
                  Smart Watches
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Customer Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Customer Support
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setActiveView('contact')} className="hover:text-blue-400 transition-colors">
                  Contact Store
                </button>
              </li>
              <li>
                <span className="hover:text-blue-400 transition-colors cursor-pointer" onClick={() => setActiveView('about')}>
                  Shipping Policy (Free above ₹999)
                </span>
              </li>
              <li>
                <span className="hover:text-blue-400 transition-colors cursor-pointer" onClick={() => setActiveView('about')}>
                  7-Day Returns & Replacements
                </span>
              </li>
              <li>
                <span className="hover:text-blue-400 transition-colors cursor-pointer" onClick={() => setActiveView('about')}>
                  Official Warranty Terms
                </span>
              </li>
              <li>
                <span className="hover:text-blue-400 transition-colors cursor-pointer" onClick={() => setActiveView('about')}>
                  FAQs & Support Guides
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Social */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => setActiveView('about')} className="hover:text-blue-400 transition-colors">
                    About TechZone
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveView('about')} className="hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveView('about')} className="hover:text-blue-400 transition-colors">
                    Terms & Conditions
                  </button>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <h5 className="text-[11px] font-bold uppercase text-slate-300 mb-2">Connect With Us</h5>
              <div className="flex items-center gap-2">
                <a
                  href="#instagram"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#facebook"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#youtube"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#linkedin"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} TechZone Electronics. All rights reserved. Indian Rupee (₹ / INR) Store.</p>
          <div className="flex items-center gap-4">
            <span>Genuine Quality Guarantee</span>
            <span>•</span>
            <span>Mathura, UP</span>
            <span>•</span>
            <span>Fast Express Dispatch</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
