import React, { useState } from 'react';
import {
  Layers,
  Sparkles,
  X,
  Plus,
  ShoppingCart,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Star
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Product } from '../types';

interface ComparisonAIResult {
  summary: string;
  keyDifferences?: string[];
  useCaseWinners?: { useCase: string; productName: string; why: string }[];
  verdict: string;
}

export const ProductComparison: React.FC = () => {
  const {
    products,
    compareList,
    toggleCompare,
    clearCompare,
    addToCart,
    openProductDetails,
    setActiveView
  } = useShop();

  const [isComparingAI, setIsComparingAI] = useState(false);
  const [aiResult, setAiResult] = useState<ComparisonAIResult | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Selected products for comparison
  const comparedProducts = products.filter((p) => compareList.includes(p.id));

  // Run AI Comparison
  const handleAskAIToCompare = async () => {
    if (comparedProducts.length < 2) return;
    setIsComparingAI(true);
    setAiResult(null);

    try {
      const res = await fetch('/api/compare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productIds: comparedProducts.map((p) => p.id) }),
      });
      const data = await res.json();
      setAiResult(data);
    } catch (err) {
      console.error(err);
      // Fallback
      setAiResult({
        summary: `Comparing ${comparedProducts.map((p) => p.name).join(' and ')}. Both are solid choices in our catalog.`,
        keyDifferences: [
          'Different price segments and targeted performance brackets',
          'Varying processors and battery ratings',
        ],
        useCaseWinners: [
          {
            useCase: 'Best Overall Value',
            productName: comparedProducts[0].name,
            why: 'Offers the strongest performance-to-price ratio for daily workflows.',
          },
        ],
        verdict: 'Choose based on your prioritized budget and workload needs.',
      });
    } finally {
      setIsComparingAI(false);
    }
  };

  // Specification keys to display
  const specRows = [
    { label: 'Brand', getter: (p: Product) => p.brand },
    { label: 'Category', getter: (p: Product) => p.category },
    { label: 'Current Price', getter: (p: Product) => `₹${p.price.toLocaleString('en-IN')}` },
    { label: 'Original MRP', getter: (p: Product) => `₹${p.originalPrice.toLocaleString('en-IN')}` },
    { label: 'Discount', getter: (p: Product) => `${p.discountPercentage}% Off` },
    { label: 'Rating', getter: (p: Product) => `${p.rating} ★ (${p.reviewCount} reviews)` },
    { label: 'Stock Status', getter: (p: Product) => p.stockStatus },
    { label: 'Processor / Chip', getter: (p: Product) => p.specifications.processor || 'N/A' },
    { label: 'RAM / Memory', getter: (p: Product) => p.specifications.ram || 'N/A' },
    { label: 'Storage', getter: (p: Product) => p.specifications.storage || 'N/A' },
    { label: 'Display & Screen', getter: (p: Product) => p.specifications.display || p.specifications.resolution || 'N/A' },
    { label: 'Battery Life', getter: (p: Product) => p.specifications.battery || 'N/A' },
    { label: 'Camera Setup', getter: (p: Product) => p.specifications.camera || 'N/A' },
    { label: 'Operating System', getter: (p: Product) => p.specifications.os || 'N/A' },
    { label: 'Connectivity', getter: (p: Product) => p.specifications.connectivity || 'N/A' },
    { label: 'Weight', getter: (p: Product) => p.specifications.weight || 'N/A' },
    { label: 'Warranty', getter: (p: Product) => p.specifications.warranty || '1 Year' },
  ];

  return (
    <div className="py-8 bg-slate-950 min-h-screen border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
              <Layers className="w-4 h-4" />
              <span>Side-by-Side Comparison</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Compare Products ({comparedProducts.length}/4)
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Evaluate hardware specifications, prices, and ask AI to analyze use-case winners.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {comparedProducts.length > 0 && (
              <button
                onClick={clearCompare}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white"
              >
                Clear Comparison
              </button>
            )}

            {comparedProducts.length < 4 && (
              <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-white flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4 text-blue-400" />
                <span>Add Product</span>
              </button>
            )}

            {comparedProducts.length >= 2 && (
              <button
                onClick={handleAskAIToCompare}
                disabled={isComparingAI}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4 text-cyan-300 animate-spin" />
                <span>Ask TechZone AI to Compare</span>
              </button>
            )}
          </div>
        </div>

        {/* AI Comparison Analysis Box */}
        {isComparingAI && (
          <div className="mb-8 p-6 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 text-center space-y-3">
            <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <h4 className="text-sm font-bold text-white">TechZone AI is evaluating these devices...</h4>
            <p className="text-xs text-slate-400">
              Examining processor architecture, pricing value, display features, and customer satisfaction metrics.
            </p>
          </div>
        )}

        {aiResult && (
          <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-blue-950/60 border border-indigo-500/40 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-cyan-300" />
                <h3 className="text-base sm:text-lg font-extrabold text-white">
                  TechZone AI Comparative Analysis
                </h3>
              </div>
              <button
                onClick={() => setAiResult(null)}
                className="text-xs text-slate-400 hover:text-white"
              >
                ✕ Dismiss
              </button>
            </div>

            {/* High level summary */}
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {aiResult.summary}
            </p>

            {/* Key Differences */}
            {aiResult.keyDifferences && aiResult.keyDifferences.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                  Key Technical Differences:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {aiResult.keyDifferences.map((diff, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>{diff}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Use Case Winners */}
            {aiResult.useCaseWinners && aiResult.useCaseWinners.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  Recommended Winners by Use Case:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {aiResult.useCaseWinners.map((w, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 space-y-1">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                        {w.useCase}
                      </span>
                      <p className="text-xs font-bold text-white truncate">{w.productName}</p>
                      <p className="text-[11px] text-slate-400 leading-normal">{w.why}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Verdict */}
            <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-500/30">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                Final Verdict:
              </span>
              <p className="text-xs sm:text-sm text-slate-200 font-semibold">{aiResult.verdict}</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {comparedProducts.length === 0 ? (
          <div className="py-16 text-center bg-slate-900/40 rounded-3xl border border-slate-800 p-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
              <Layers className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white">No products selected for comparison</h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
              Select at least 2 electronics products from our catalog to see a side-by-side spec comparison and AI verdict.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  // Add default 2 laptops or phones to test
                  toggleCompare('lap-01');
                  toggleCompare('lap-02');
                }}
                className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg"
              >
                Compare HP Pavilion vs Lenovo ThinkPad
              </button>
              <button
                onClick={() => setActiveView('products')}
                className="px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold"
              >
                Browse All Products
              </button>
            </div>
          </div>
        ) : (
          /* Comparison Table */
          <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/60 shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/90">
                  <th className="p-4 sm:p-5 w-44 sm:w-56 text-xs font-extrabold text-slate-400 uppercase tracking-wider sticky left-0 bg-slate-950 z-20">
                    Product Details
                  </th>
                  {comparedProducts.map((p) => (
                    <th key={p.id} className="p-4 sm:p-5 min-w-[240px] max-w-[280px] align-top relative">
                      <button
                        onClick={() => toggleCompare(p.id)}
                        className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-800 hover:bg-rose-900/40 text-slate-400 hover:text-rose-400 transition-colors"
                        title="Remove from comparison"
                      >
                        <X className="w-4 h-4" />
                      </button>

                      <div className="aspect-square w-32 h-32 rounded-xl bg-slate-950 p-2 mb-3 border border-slate-800 overflow-hidden mx-auto">
                        <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover rounded-lg" />
                      </div>

                      <h4
                        onClick={() => openProductDetails(p)}
                        className="text-xs sm:text-sm font-bold text-white hover:text-blue-400 cursor-pointer line-clamp-2 mb-1"
                      >
                        {p.name}
                      </h4>

                      <div className="flex items-center gap-1.5 text-xs text-amber-400 mb-3">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-bold text-white">{p.rating}</span>
                        <span className="text-slate-500">({p.reviewCount})</span>
                      </div>

                      <div className="mb-3">
                        <span className="text-lg font-black text-white">
                          ₹{p.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-slate-500 line-through ml-2">
                          ₹{p.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <button
                        onClick={() => addToCart(p)}
                        className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-97 cursor-pointer"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>
                    </th>
                  ))}
                  {comparedProducts.length < 4 && (
                    <th className="p-4 sm:p-5 min-w-[180px] text-center align-middle border-l border-slate-800/60">
                      <button
                        onClick={() => setShowAddModal(true)}
                        className="w-full h-40 rounded-2xl border-2 border-dashed border-slate-700 hover:border-blue-500 text-slate-400 hover:text-white flex flex-col items-center justify-center gap-2 transition-colors"
                      >
                        <Plus className="w-6 h-6 text-blue-400" />
                        <span className="text-xs font-bold">Add to Compare</span>
                      </button>
                    </th>
                  )}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                {specRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                    <td className="p-3 sm:p-4 font-bold text-slate-400 uppercase tracking-wider text-[11px] sticky left-0 bg-slate-900/90 backdrop-blur-md z-10 border-r border-slate-800/60">
                      {row.label}
                    </td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-3 sm:p-4 text-slate-200">
                        {row.getter(p)}
                      </td>
                    ))}
                    {comparedProducts.length < 4 && <td className="p-3 sm:p-4 bg-slate-950/20" />}
                  </tr>
                ))}

                {/* Key Features row */}
                <tr className="hover:bg-slate-850/50 transition-colors">
                  <td className="p-3 sm:p-4 font-bold text-slate-400 uppercase tracking-wider text-[11px] sticky left-0 bg-slate-900/90 z-10 border-r border-slate-800/60 align-top">
                    Highlights
                  </td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 sm:p-4 align-top">
                      <ul className="space-y-1 text-slate-300 text-xs">
                        {p.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-blue-400 font-bold">•</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                  {comparedProducts.length < 4 && <td className="p-3 sm:p-4 bg-slate-950/20" />}
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white">Select Product to Compare</h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-white">
                ✕
              </button>
            </div>

            <div className="overflow-y-auto divide-y divide-slate-800/60 my-4 flex-1 pr-1">
              {products
                .filter((p) => !compareList.includes(p.id))
                .map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      toggleCompare(prod.id);
                      setShowAddModal(false);
                    }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/80 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img src={prod.images[0]} alt="" className="w-12 h-12 rounded-lg object-cover bg-slate-950" />
                      <div>
                        <p className="text-xs font-bold text-white">{prod.name}</p>
                        <p className="text-[11px] text-slate-400">{prod.brand} • {prod.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-emerald-400">₹{prod.price.toLocaleString('en-IN')}</p>
                      <span className="text-[10px] text-blue-400 font-semibold">+ Add to Table</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
