import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <div className="py-12 bg-slate-950 min-h-screen border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Contact TechZone Electronics
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Have questions about a laptop, smartphone, or bulk order? Our Mathura retail store team and tech specialists are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Store Info Cards (Left Column) */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-base font-extrabold text-white pb-3 border-b border-slate-800">
                Store Information
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Store Address</h4>
                  <p className="text-slate-300 mt-0.5">
                    Main Market, Mathura, Uttar Pradesh, India
                  </p>
                  <span className="text-[11px] text-slate-500 font-mono">Pincode: 281001</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Customer Helpline</h4>
                  <a href="tel:+919876543210" className="text-slate-300 hover:text-blue-400 mt-0.5 block">
                    +91 98765 43210
                  </a>
                  <span className="text-[11px] text-slate-500">Toll-free / WhatsApp Support available</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center shrink-0 text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Official Email</h4>
                  <a href="mailto:support@techzoneelectronics.com" className="text-slate-300 hover:text-blue-400 mt-0.5 block">
                    support@techzoneelectronics.com
                  </a>
                  <span className="text-[11px] text-slate-500">Replies within 4 business hours</span>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-600/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Opening Hours</h4>
                  <p className="text-slate-300 mt-0.5">
                    Monday – Saturday: 10:00 AM – 8:00 PM
                  </p>
                  <p className="text-[11px] text-amber-400 mt-0.5">Sunday: Closed for inventory restock</p>
                </div>
              </div>

            </div>

            {/* Map Placeholder */}
            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] bg-slate-900 border border-slate-800 shadow-xl flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-2">
                <MapPin className="w-6 h-6 animate-pulse" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Mathura Main Market Flagship Store</h4>
              <p className="text-[11px] text-slate-400 mt-1 max-w-xs">
                Opposite Central Bank, Main Market Road, Mathura, UP
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-[10px] text-blue-400 font-semibold">
                📍 Coordinates: 27.4924° N, 77.6737° E
              </div>
            </div>

          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
              
              <div>
                <h3 className="text-lg font-bold text-white">Send Us a Direct Message</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill out the form below and an electronics specialist will get back to you promptly.
                </p>
              </div>

              {submitted && (
                <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 text-xs sm:text-sm flex items-center gap-3 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="block text-white">Message Sent Successfully!</strong>
                    <span>Our TechZone team will contact you shortly via email or phone.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div>
                  <label className="block text-slate-400 font-bold mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@example.com"
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 00000"
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 font-bold mb-1">Your Message or Inquiry</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what product you need advice on, bulk requirements, or warranty questions..."
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-102 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Store</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
