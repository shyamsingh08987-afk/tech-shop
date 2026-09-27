import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { products } from './src/data/products.ts';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Compact Catalog Summary for System Context
const catalogSummary = products.map((p) => ({
  id: p.id,
  name: p.name,
  brand: p.brand,
  category: p.category,
  price: p.price,
  originalPrice: p.originalPrice,
  discount: `${p.discountPercentage}%`,
  rating: p.rating,
  reviews: p.reviewCount,
  inStock: p.inStock,
  stockStatus: p.stockStatus,
  specs: p.specifications,
  features: p.features.slice(0, 3),
}));

// Fallback search logic if AI service is unavailable or key is missing
function fallbackRecommend(query: string) {
  const q = query.toLowerCase();
  let matched = [...products];

  // Budget detection like "under 60000" or "under 30k" or "under ₹5,000"
  const underMatch = q.match(/under\s*(?:₹|inr|rs\.?)?\s*(\d+)(k)?/i);
  let budgetLimit: number | null = null;
  if (underMatch) {
    let amt = parseInt(underMatch[1], 10);
    if (underMatch[2]?.toLowerCase() === 'k') amt *= 1000;
    budgetLimit = amt;
  }

  // Category or keyword detection
  if (q.includes('laptop') || q.includes('coding') || q.includes('programming') || q.includes('bca')) {
    matched = products.filter((p) => p.category === 'Laptops');
  } else if (q.includes('phone') || q.includes('mobile') || q.includes('smartphone')) {
    matched = products.filter((p) => p.category === 'Smartphones');
  } else if (q.includes('headphone') || q.includes('earbud') || q.includes('earphone') || q.includes('audio')) {
    matched = products.filter((p) => p.category === 'Headphones & Earbuds');
  } else if (q.includes('tv') || q.includes('monitor') || q.includes('screen')) {
    matched = products.filter((p) => p.category === 'TVs & Monitors');
  } else if (q.includes('watch')) {
    matched = products.filter((p) => p.category === 'Smart Watches');
  } else if (q.includes('game') || q.includes('gaming') || q.includes('console')) {
    matched = products.filter((p) => p.category === 'Gaming' || p.features.some((f) => f.toLowerCase().includes('gaming')));
  } else if (q.includes('speaker') || q.includes('bluetooth speaker')) {
    matched = products.filter((p) => p.category === 'Speakers');
  } else if (q.includes('camera')) {
    matched = products.filter((p) => p.category === 'Cameras');
  } else if (q.includes('mouse') || q.includes('keyboard') || q.includes('accessory') || q.includes('accessories')) {
    matched = products.filter((p) => p.category === 'Computer Accessories');
  } else if (q.includes('charger') || q.includes('cable')) {
    matched = products.filter((p) => p.category === 'Chargers & Cables');
  } else if (q.includes('deal') || q.includes('discount') || q.includes('offer')) {
    matched = products.filter((p) => p.discountPercentage >= 20);
  }

  if (budgetLimit !== null) {
    const budgetFiltered = matched.filter((p) => p.price <= budgetLimit!);
    if (budgetFiltered.length > 0) {
      matched = budgetFiltered;
    }
  }

  // Sort by rating & discount
  matched.sort((a, b) => b.rating - a.rating);
  const selected = matched.slice(0, 3);

  return {
    text: `Based on your request "${query}", here are our top verified recommendations from the TechZone Electronics catalog:`,
    recommendedProductIds: selected.map((p) => p.id),
    comparisons: selected.map((p) => ({
      productId: p.id,
      why: `${p.name} matches your requirements with ${p.specifications.processor || p.specifications.connectivity || p.specifications.display || 'great performance'}, priced at ₹${p.price.toLocaleString('en-IN')}.`,
    })),
  };
}

// 1. AI Chat Endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  const { message, history } = req.body;

  if (!message || typeof message !== 'string') {
    res.status(400).json({ error: 'Message is required' });
    return;
  }

  if (!ai) {
    const fallback = fallbackRecommend(message);
    res.json(fallback);
    return;
  }

  try {
    const systemInstruction = `You are TechZone AI, the friendly, expert shopping assistant for "TechZone Electronics" (Tagline: "Power Your World With Better Technology").
The currency is Indian Rupee (₹ / INR).

Store Catalog:
${JSON.stringify(catalogSummary)}

CRITICAL RULES:
1. ONLY recommend products that exist in the TechZone Store Catalog above. Never invent, hallucinate, or suggest external products or specs.
2. If there are no products matching the user's specific constraints (e.g. budget or feature), explicitly state: "I don't have that exact match in the current TechZone catalog, but here are the closest options available:" and suggest the closest catalog items.
3. If information is unavailable in the database, clearly say: "I don't have that information in the current TechZone catalog."
4. Never invent prices, discounts, stock availability, or warranty. Use exact catalog values.
5. Identify 1 to 4 relevant products. For each, give a clear, direct reason "Why" it is ideal for their use case (e.g. BCA coding, high-FPS gaming, ANC travel, office multitasking).
6. Format your response strictly as valid JSON matching this schema:
{
  "text": "Introductory or conversational guidance explaining how you evaluated their request.",
  "recommendedProductIds": ["id1", "id2"],
  "comparisons": [
    {
      "productId": "id1",
      "why": "Specific, concise reason why this model suits the user's needs."
    }
  ]
}
Do not wrap your response in markdown code blocks like \`\`\`json. Return pure JSON only.`;

    const contents = [
      ...(Array.isArray(history)
        ? history.slice(-6).map((h: { sender: string; text: string }) => ({
            role: h.sender === 'assistant' ? 'model' : 'user',
            parts: [{ text: h.text }],
          }))
        : []),
      {
        role: 'user',
        parts: [{ text: message }],
      },
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: contents as any,
      config: {
        systemInstruction,
        temperature: 0.2,
        responseMimeType: 'application/json',
      },
    });

    const raw = response.text || '';
    try {
      const parsed = JSON.parse(raw);
      // Validate that recommended IDs exist in products
      if (Array.isArray(parsed.recommendedProductIds)) {
        parsed.recommendedProductIds = parsed.recommendedProductIds.filter((id: string) =>
          products.some((p) => p.id === id)
        );
      }
      res.json(parsed);
    } catch {
      res.json({
        text: raw,
        recommendedProductIds: [],
        comparisons: [],
      });
    }
  } catch (err: any) {
    console.error('Gemini Chat Error:', err?.message || err);
    // Graceful fallback to rule-based catalog matcher
    const fallback = fallbackRecommend(message);
    res.json(fallback);
  }
});

// 2. AI Product Explainer Endpoint
app.post('/api/explain', async (req: Request, res: Response) => {
  const { productId } = req.body;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    res.status(404).json({ error: 'Product not found in catalog' });
    return;
  }

  if (!ai) {
    res.json({
      goodFor: `${product.name} is exceptional for ${product.category.toLowerCase()} enthusiasts, students, and professionals looking for dependable everyday performance.`,
      whoShouldBuy: `Ideal for users who prioritize ${product.specifications.processor || product.specifications.battery || 'reliability'} and want great value at ₹${product.price.toLocaleString('en-IN')}.`,
      simpleSpecs: `Comes with ${product.features.slice(0, 3).join(', ')}. Offers ${product.specifications.warranty}.`,
      advantages: [
        `Competitive Indian market price of ₹${product.price.toLocaleString('en-IN')}`,
        `${product.discountPercentage}% discount off original MRP`,
        `Official warranty: ${product.specifications.warranty}`,
      ],
      considerations: [
        'Check device compatibility and ports for your specific workflow',
        'Verify dimensions if desktop or bag space is limited',
      ],
      alternatives: products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 2)
        .map((p) => ({ id: p.id, name: p.name, price: p.price })),
    });
    return;
  }

  try {
    const prompt = `Explain the following electronic product from the TechZone Electronics catalog in simple, honest, easy-to-understand language.
Product Data:
${JSON.stringify(product)}

Other products in same category for alternatives:
${JSON.stringify(products.filter((p) => p.category === product.category && p.id !== product.id).map((p) => ({ id: p.id, name: p.name, price: p.price })))}

Return pure JSON matching this schema:
{
  "goodFor": "What the product is good for",
  "whoShouldBuy": "Who should buy it (target persona, profession, student type)",
  "simpleSpecs": "Important specifications explained in plain English without technical jargon",
  "advantages": ["Advantage 1", "Advantage 2", "Advantage 3"],
  "considerations": ["Consideration or tradeoff 1", "Consideration 2"],
  "alternatives": [
    { "id": "other-product-id", "name": "Name", "reason": "Why consider this alternative" }
  ]
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.2,
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json(parsed);
  } catch (err: any) {
    console.error('Explain Error:', err);
    res.json({
      goodFor: `${product.name} is great for daily work and entertainment.`,
      whoShouldBuy: `Anyone looking for a reliable ${product.category} with solid specs.`,
      simpleSpecs: product.features.slice(0, 3).join('. '),
      advantages: [`Genuine product with ${product.specifications.warranty}`, 'Priced competitively'],
      considerations: ['Verify availability and color preferences'],
      alternatives: [],
    });
  }
});

// 3. AI Compare Endpoint
app.post('/api/compare', async (req: Request, res: Response) => {
  const { productIds } = req.body;
  if (!Array.isArray(productIds) || productIds.length < 2) {
    res.status(400).json({ error: 'At least two product IDs are required for comparison' });
    return;
  }

  const selectedProducts = products.filter((p) => productIds.includes(p.id));

  if (selectedProducts.length < 2) {
    res.status(404).json({ error: 'Selected products were not found in store catalog' });
    return;
  }

  if (!ai) {
    res.json({
      summary: `Comparing ${selectedProducts.map((p) => p.name).join(' vs ')}. Both offer distinct advantages depending on your budget and primary use case.`,
      verdict: `If you want higher performance or premium features, choose ${selectedProducts[0].name}. For optimal price-to-performance value, choose ${selectedProducts[1].name}.`,
      recommendationsByUserType: [
        { userType: 'Budget Conscious', winner: selectedProducts.reduce((min, p) => (p.price < min.price ? p : min)).name },
        { userType: 'Power Users / Heavy Workloads', winner: selectedProducts.reduce((max, p) => (p.rating >= max.rating ? p : max)).name },
      ],
    });
    return;
  }

  try {
    const prompt = `You are the chief technology analyst at TechZone Electronics. Compare these products side-by-side:
${JSON.stringify(selectedProducts)}

Provide an objective, non-biased breakdown for different use cases. Do not make unsupported claims. Keep it sharp and actionable.
Format as JSON:
{
  "summary": "High level summary of the comparison",
  "keyDifferences": ["Difference 1", "Difference 2", "Difference 3"],
  "useCaseWinners": [
    { "useCase": "e.g. BCA Coding / Programming or Gaming or Daily Travel", "productName": "Name of winning product", "why": "Explanation" }
  ],
  "verdict": "Final purchasing recommendation"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.2,
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json(parsed);
  } catch (err: any) {
    console.error('Compare Error:', err);
    res.json({
      summary: 'Comparison generated based on specifications.',
      keyDifferences: ['Price points and processor capabilities vary.'],
      useCaseWinners: [],
      verdict: 'Choose based on your prioritized specs and budget.',
    });
  }
});

// Vite Middleware & Static Serving
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('dist'));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve('dist/index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`TechZone Electronics server listening on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
