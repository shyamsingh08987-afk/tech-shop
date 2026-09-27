import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  X,
  Send,
  Sparkles,
  ShoppingCart,
  Eye,
  Star,
  Zap,
  CheckCircle2,
  RefreshCw,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { AIChatMessage, Product } from '../types';

export const AIChatDrawer: React.FC = () => {
  const {
    products,
    isAIChatOpen,
    setIsAIChatOpen,
    addToCart,
    openProductDetails,
    aiInitialPrompt,
    setAiInitialPrompt,
  } = useShop();

  const [messages, setMessages] = useState<AIChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Namaste! I am your TechZone AI shopping assistant. Tell me what technology you are looking for, your budget, or intended use, and I will recommend the best options strictly from our store catalog.',
      timestamp: 'Just now',
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle external prompt injection
  useEffect(() => {
    if (aiInitialPrompt && isAIChatOpen) {
      handleSendMessage(aiInitialPrompt);
      setAiInitialPrompt('');
    }
  }, [aiInitialPrompt, isAIChatOpen]);

  // Send message
  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isTyping) return;

    const userMsg: AIChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.slice(-5).map((m) => ({ sender: m.sender, text: m.text })),
        }),
      });

      const data = await response.json();

      const assistantMsg: AIChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: data.text || 'Here are our recommendations based on your requirements:',
        recommendedProductIds: data.recommendedProductIds || [],
        comparisons: data.comparisons || [],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error(err);
      // Fallback response from catalog
      const assistantMsg: AIChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: 'Here are the best matches from our TechZone catalog:',
        recommendedProductIds: ['lap-01', 'lap-02'],
        comparisons: [
          { productId: 'lap-01', why: 'Great for programming with 16GB RAM and i5 processor under ₹60,000.' },
          { productId: 'lap-02', why: 'Military-grade ThinkPad durability and comfortable typing experience.' },
        ],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleAddToCartFromAI = (prod: Product) => {
    addToCart(prod);
    setAddedItemNotice(`Added ${prod.name} to cart!`);
    setTimeout(() => setAddedItemNotice(null), 2500);
  };

  const exampleChips = [
    'Suggest a laptop for coding under ₹60,000',
    'Which phone is best for gaming under ₹30,000?',
    'I need wireless headphones under ₹5,000',
    'What is the best monitor for programming?',
    'I need a smartphone with a good camera',
    'Show me products with discounts',
  ];

  return (
    <>
      {/* Floating AI Button (Bottom-Right) */}
      {!isAIChatOpen && (
        <button
          onClick={() => setIsAIChatOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-sm shadow-2xl shadow-blue-600/50 hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer border border-cyan-400/40"
          title="Open TechZone AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-cyan-200 group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-200"></span>
            </span>
          </div>
          <span className="tracking-wide">🤖 Ask TechZone AI</span>
        </button>
      )}

      {/* AI Assistant Chat Modal / Drawer */}
      {isAIChatOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[460px] md:w-[500px] bg-slate-950/98 backdrop-blur-xl border-l border-slate-800 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-0.5 shadow-lg shadow-blue-600/30">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-cyan-300" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-extrabold text-white">
                    TechZone AI Assistant
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  “Tell me what technology you're looking for.”
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setMessages([
                    {
                      id: 'welcome-reset',
                      sender: 'assistant',
                      text: 'Chat cleared! What electronics can I assist you with today?',
                      timestamp: 'Just now',
                    },
                  ])
                }
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                title="Restart Chat"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsAIChatOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                title="Close Assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Notice if item added to cart */}
          {addedItemNotice && (
            <div className="bg-emerald-950 border-b border-emerald-800/80 px-4 py-2 text-xs text-emerald-300 font-semibold flex items-center gap-2 animate-in fade-in duration-150">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{addedItemNotice}</span>
            </div>
          )}

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => {
              const isAssistant = msg.sender === 'assistant';

              // Fetch matching products for this message
              const recommendedProducts = msg.recommendedProductIds
                ? products.filter((p) => msg.recommendedProductIds?.includes(p.id))
                : [];

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isAssistant ? 'items-start' : 'items-end'} space-y-1.5`}
                >
                  <div
                    className={`max-w-[92%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      isAssistant
                        ? 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-sm shadow-md'
                        : 'bg-blue-600 text-white rounded-tr-sm shadow-md'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>

                    {/* Render Recommended Products inside Chat Response */}
                    {isAssistant && recommendedProducts.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-3">
                        <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider block">
                          Verified Store Matches ({recommendedProducts.length}):
                        </span>

                        <div className="space-y-3">
                          {recommendedProducts.map((prod) => {
                            const comp = msg.comparisons?.find((c) => c.productId === prod.id);

                            return (
                              <div
                                key={prod.id}
                                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-colors shadow-inner"
                              >
                                <div className="flex gap-3">
                                  <img
                                    src={prod.images[0]}
                                    alt={prod.name}
                                    className="w-16 h-16 rounded-lg object-cover bg-slate-900 shrink-0 border border-slate-800"
                                  />
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1">
                                      <span className="text-[10px] font-bold text-blue-400 uppercase">
                                        {prod.brand}
                                      </span>
                                      <div className="flex items-center text-amber-400 text-[11px]">
                                        <Star className="w-3 h-3 fill-current" />
                                        <span className="ml-0.5 font-bold text-white">{prod.rating}</span>
                                      </div>
                                    </div>

                                    <h4 className="text-xs font-bold text-white truncate">{prod.name}</h4>

                                    <div className="flex items-baseline gap-2 mt-0.5">
                                      <span className="text-xs font-black text-emerald-400">
                                        ₹{prod.price.toLocaleString('en-IN')}
                                      </span>
                                      <span className="text-[10px] text-slate-500 line-through">
                                        ₹{prod.originalPrice.toLocaleString('en-IN')}
                                      </span>
                                    </div>

                                    {/* Key Highlight Spec */}
                                    <p className="text-[10px] text-slate-400 truncate mt-1">
                                      {prod.specifications.ram ? `${prod.specifications.ram} | ` : ''}
                                      {prod.specifications.storage || prod.specifications.processor || prod.specifications.display}
                                    </p>
                                  </div>
                                </div>

                                {/* "Why" Explanation */}
                                {comp?.why && (
                                  <div className="mt-2 p-2 rounded-lg bg-blue-950/40 border border-blue-900/40 text-[11px] text-blue-200">
                                    <strong className="text-cyan-300 font-semibold">Why this fits: </strong>
                                    {comp.why}
                                  </div>
                                )}

                                {/* Action Buttons: View Product & Add to Cart */}
                                <div className="flex items-center gap-2 mt-2.5 pt-2 border-t border-slate-800/60">
                                  <button
                                    onClick={() => {
                                      openProductDetails(prod);
                                      setIsAIChatOpen(false);
                                    }}
                                    className="flex-1 py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg text-[11px] font-bold flex items-center justify-center gap-1 transition-colors"
                                  >
                                    <Eye className="w-3 h-3 text-blue-400" />
                                    <span>View Product</span>
                                  </button>

                                  <button
                                    onClick={() => handleAddToCartFromAI(prod)}
                                    className="flex-1 py-1.5 px-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-[11px] font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                                  >
                                    <ShoppingCart className="w-3 h-3" />
                                    <span>Add to Cart</span>
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] text-slate-500 px-1">{msg.timestamp}</span>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900 border border-slate-800 p-3 rounded-2xl w-fit">
                <Bot className="w-4 h-4 text-cyan-400 animate-spin" />
                <span>TechZone AI is checking the catalog...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          <div className="p-3 bg-slate-900/60 border-t border-slate-800/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
              Suggested Questions:
            </span>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {exampleChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(chip)}
                  disabled={isTyping}
                  className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-blue-600/30 hover:border-blue-500 border border-slate-700 text-[11px] text-slate-300 hover:text-blue-300 whitespace-nowrap transition-colors shrink-0 disabled:opacity-50"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Input Bar */}
          <div className="p-3.5 bg-slate-950 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about laptops, gaming phones, earbuds..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                disabled={isTyping}
                className="flex-1 py-2.5 px-3.5 bg-slate-900 border border-slate-700 rounded-full text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isTyping}
                className="p-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-40 transition-all cursor-pointer shrink-0 shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[10px] text-slate-500 text-center mt-1.5">
              Strictly grounded in TechZone Electronics real stock & Indian pricing.
            </p>
          </div>

        </div>
      )}
    </>
  );
};
