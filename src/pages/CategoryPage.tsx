import React, { useState } from 'react';
import { Product } from '../types';
import { 
  Printer, Sparkles, ShoppingBag, Eye, Star, Check, ChevronRight, HelpCircle, ShieldCheck, Clock, Award, FileText
} from 'lucide-react';
import { ProductDetailModal } from '../components/ProductDetailModal';

interface CategoryPageProps {
  categorySlug: string; // 'mugs' | 'glasses' | 'keychains' | 'pens' | 'tshirts' | 'corporate'
  products: Product[];
  onAddToCart: (product: Product) => void;
  onLaunchCustomizerWithProduct: (product: Product) => void;
  onNavigatePage: (page: string, param?: string) => void;
  addedProductId: string | null;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categorySlug,
  products,
  onAddToCart,
  onLaunchCustomizerWithProduct,
  onNavigatePage,
  addedProductId,
}) => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Category Metadata Configuration
  const categoryInfoMap: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    bannerImage: string;
    printingSpecs: string[];
    tierPrices: { qty: string; discount: string; pricePerUnit: string }[];
    faqs: { q: string; a: string }[];
  }> = {
    mugs: {
      title: 'Custom Mug Printing in Pakistan',
      subtitle: 'HD Sublimation Magic Mugs, Ceramic Coffee Mugs & Thermal Travel Flasks',
      description: 'Personalize ceramic mugs with photos, quotes, or corporate logos. Dishwasher safe, microwave safe, and fade-resistant high definition prints delivered across Pakistan.',
      bannerImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1200',
      printingSpecs: [
        'HD Sublimation 300+ DPI full wrap print',
        '11 oz & 15 oz Premium Grade-A AAA Ceramic Mugs',
        'Dishwasher & Microwave safe high-glaze coating',
        'Magic Color Changing Mugs available (Heat Sensitive)',
      ],
      tierPrices: [
        { qty: '1 - 5 Pcs', discount: 'Standard Price', pricePerUnit: 'PKR 890' },
        { qty: '6 - 20 Pcs', discount: '15% Off', pricePerUnit: 'PKR 750' },
        { qty: '21 - 100 Pcs', discount: '30% Off', pricePerUnit: 'PKR 620' },
        { qty: '100+ Pcs', discount: '45% Off (Wholesale)', pricePerUnit: 'PKR 490' },
      ],
      faqs: [
        { q: 'How does the Magic Color Changing Mug work?', a: 'When cold, the mug appears solid black. When hot tea, coffee, or water is poured inside, your hidden printed photo reveals smoothly!' },
        { q: 'Will the photo print peel or fade after washing?', a: 'No! Our mugs are cured at 200°C using Japanese sublimation ink, ensuring the print absorbs permanently into the ceramic glaze.' },
      ],
    },
    glasses: {
      title: 'Custom Frosted Glass & Water Bottle Printing',
      subtitle: 'Premium Highball Glasses, Beer Glassware & Insulated Stainless Steel Tumblers',
      description: 'Custom logo printed frosted glassware and laser-etched sports water bottles. Essential for coffee shops, restaurants, gifts, and personal home barware.',
      bannerImage: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=1200',
      printingSpecs: [
        'Scratch-resistant UV Direct-to-Glass Printing',
        'Food-Grade Lead-Free Crystal & Soda-Lime Glass',
        'Double-Wall Vacuum Insulated Stainless Steel Bottles',
        'Frosted matte finish with vibrant color fidelity',
      ],
      tierPrices: [
        { qty: '1 - 5 Pcs', discount: 'Standard Price', pricePerUnit: 'PKR 1,250' },
        { qty: '6 - 20 Pcs', discount: '12% Off', pricePerUnit: 'PKR 1,100' },
        { qty: '21 - 100 Pcs', discount: '25% Off', pricePerUnit: 'PKR 950' },
        { qty: '100+ Pcs', discount: '40% Off', pricePerUnit: 'PKR 750' },
      ],
      faqs: [
        { q: 'Is the UV glass print safe for daily dishwashing?', a: 'Yes, our UV cured ink bonds strongly to glass surfaces. We recommend gentle hand washing with soap.' },
      ],
    },
    keychains: {
      title: 'Custom Metallic & Wooden Keychain Printing',
      subtitle: 'Laser Engraved Leather, Metal & Acrylic Photo Keyrings',
      description: 'Premium custom keychains for car keys, home keys, and corporate promotional giveaways. Durable laser engraving and dual-sided acrylic prints.',
      bannerImage: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&q=80&w=1200',
      printingSpecs: [
        'Precision Fiber Laser Engraving on Zinc Alloy Metal',
        'Natural Sheesham & Oak Wood Engraving',
        'High-Gloss Clear Acrylic Photo Sandwiches',
        'Heavy-duty stainless steel keyrings',
      ],
      tierPrices: [
        { qty: '1 - 10 Pcs', discount: 'Standard Price', pricePerUnit: 'PKR 450' },
        { qty: '11 - 50 Pcs', discount: '20% Off', pricePerUnit: 'PKR 360' },
        { qty: '51 - 200 Pcs', discount: '35% Off', pricePerUnit: 'PKR 290' },
        { qty: '200+ Pcs', discount: '50% Off (Bulk)', pricePerUnit: 'PKR 220' },
      ],
      faqs: [
        { q: 'Can I engrave car logos like Honda, Toyota, or BMW?', a: 'Yes! You can upload any logo, name, license plate number, or custom message in our Studio.' },
      ],
    },
    pens: {
      title: 'Executive Custom Metal Pen Engraving',
      subtitle: 'Matte Black, Metallic Gold & Parker-Style Ballpoint Pens with Name Engraving',
      description: 'Personalized metal pens with laser engraved names or company logos. Ideal for doctors, lawyers, corporate executives, and graduation gifts.',
      bannerImage: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=1200',
      printingSpecs: [
        'Gold / Silver fiber laser etched permanent lettering',
        'Smooth German gel ink cartridges (0.7mm tip)',
        'Heavyweight brass and anodized aluminum bodies',
        'Includes complimentary velvet gift pouch or hard box',
      ],
      tierPrices: [
        { qty: '1 - 10 Pcs', discount: 'Standard Price', pricePerUnit: 'PKR 650' },
        { qty: '11 - 50 Pcs', discount: '20% Off', pricePerUnit: 'PKR 520' },
        { qty: '51 - 200 Pcs', discount: '35% Off', pricePerUnit: 'PKR 420' },
        { qty: '200+ Pcs', discount: '50% Off', pricePerUnit: 'PKR 320' },
      ],
      faqs: [
        { q: 'Are pen refills easily available in Pakistan?', a: 'Yes, our metal pens use standard Parker or gel ballpoint refills available at any stationery shop.' },
      ],
    },
    tshirts: {
      title: 'Custom DTF T-Shirt & Hoodie Printing',
      subtitle: '100% Cotton Shirts with Soft Hand-Feel Direct-To-Film Graphic Printing',
      description: 'Design custom graphic tees, university event t-shirts, and company polo uniforms with vibrant DTF printing that withstands endless machine washes.',
      bannerImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=1200',
      printingSpecs: [
        'Premium 180 GSM & 220 GSM Combed Ring-Spun Cotton',
        'Ultra-HD DTF (Direct-to-Film) soft stretchable prints',
        'Breathable fabric, pre-shrunk, taped neck and shoulders',
        'S, M, L, XL, XXL unisex and slim-fit sizes',
      ],
      tierPrices: [
        { qty: '1 - 5 Pcs', discount: 'Standard Price', pricePerUnit: 'PKR 1,450' },
        { qty: '6 - 20 Pcs', discount: '15% Off', pricePerUnit: 'PKR 1,230' },
        { qty: '21 - 100 Pcs', discount: '30% Off', pricePerUnit: 'PKR 1,020' },
        { qty: '100+ Pcs', discount: '45% Off', pricePerUnit: 'PKR 850' },
      ],
      faqs: [
        { q: 'Will the DTF print crack or peel off?', a: 'No, we use industrial heat presses at 160°C with TPU adhesive powder that fuses the print deep into fabric fibers.' },
      ],
    },
    corporate: {
      title: 'Corporate Employee Welcome Kits & Gift Boxes',
      subtitle: 'Complete VIP Customized Branding Sets for Companies, Tech Hubs & Events',
      description: 'Luxury hardtop gift boxes containing custom laser engraved flask, ceramic mug, metallic pen, diary notebook, USB drive, and keychain.',
      bannerImage: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1200',
      printingSpecs: [
        'Custom Matte Black / Rigid Magnetic Closure Boxes',
        'Full 5-Piece matching branding set with company logo',
        'Custom EVA foam inserts for secure product placement',
        'Free 3D digital mockup before mass production',
      ],
      tierPrices: [
        { qty: '1 - 10 Sets', discount: 'Standard Price', pricePerUnit: 'PKR 3,800' },
        { qty: '11 - 50 Sets', discount: '15% Off', pricePerUnit: 'PKR 3,230' },
        { qty: '51 - 200 Sets', discount: '25% Off', pricePerUnit: 'PKR 2,850' },
        { qty: '200+ Sets', discount: '40% Off (VIP)', pricePerUnit: 'PKR 2,280' },
      ],
      faqs: [
        { q: 'Can we sample a prototype box before placing a 100+ order?', a: 'Yes! We send physical sample boxes to corporate HRs & Procurement teams across Lahore, Karachi, and Islamabad.' },
      ],
    },
  };

  const currentInfo = categoryInfoMap[categorySlug] || categoryInfoMap['mugs'];

  // Filter products matching this category
  const categoryProducts = products.filter(
    (p) => p.category === categorySlug || (categorySlug === 'all')
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Hero Header */}
      <div className="relative bg-[#0b182e] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={currentInfo.bannerImage} alt={currentInfo.title} className="w-full h-full object-cover" />
        </div>
        
        <div className="relative max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button onClick={() => onNavigatePage('home')} className="hover:text-amber-400">Home</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <button onClick={() => onNavigatePage('shop')} className="hover:text-amber-400">Shop</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-bold capitalize">{categorySlug}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight max-w-2xl">
            {currentInfo.title}
          </h1>

          <p className="text-xs sm:text-sm text-amber-300 font-bold max-w-2xl">
            {currentInfo.subtitle}
          </p>

          <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
            {currentInfo.description}
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigatePage('studio')}
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Design Custom {categorySlug} in Studio</span>
            </button>

            <button
              onClick={() => onNavigatePage('bulk-quote')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-2.5 rounded-xl text-xs border border-slate-700 cursor-pointer"
            >
              Request Bulk Wholesale Quote
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        
        {/* Key Printing Specs & Features */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-base sm:text-lg font-black text-[#0b182e] flex items-center gap-2">
            <Printer className="w-5 h-5 text-amber-500" />
            <span>Printing Technology & Quality Assurance</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {currentInfo.printingSpecs.map((spec, idx) => (
              <div key={idx} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 flex items-start gap-2.5 text-xs text-slate-800">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-semibold">{spec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Catalog Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-xl font-black text-[#0b182e]">
                Available Items ({categoryProducts.length})
              </h2>
              <p className="text-xs text-slate-500">Instant order or custom 3D design studio personalization</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {categoryProducts.map((product) => {
              const isJustAdded = addedProductId === product.id;

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="relative aspect-square bg-slate-50 overflow-hidden flex items-center justify-center p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => setQuickViewProduct(product)}
                    />
                    {product.popular && (
                      <span className="absolute top-2 left-2 bg-amber-400 text-slate-950 font-black text-[9px] uppercase px-2 py-0.5 rounded-md">
                        Popular
                      </span>
                    )}

                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 p-3">
                      <button
                        onClick={() => onLaunchCustomizerWithProduct(product)}
                        className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black py-1.5 px-3 rounded-xl flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Customize</span>
                      </button>
                      <button
                        onClick={() => setQuickViewProduct(product)}
                        className="w-full bg-white text-slate-900 text-xs font-bold py-1.5 px-3 rounded-xl flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between space-y-2">
                    <div>
                      <div className="flex items-center gap-1 text-amber-500 mb-1">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span className="text-[10px] font-bold text-slate-700">{product.rating}</span>
                        <span className="text-[10px] text-slate-400">({product.reviewsCount})</span>
                      </div>

                      <h3 
                        onClick={() => setQuickViewProduct(product)}
                        className="text-xs sm:text-sm font-bold text-[#0b182e] line-clamp-1 hover:text-amber-600 cursor-pointer"
                      >
                        {product.name}
                      </h3>

                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="text-xs sm:text-sm font-extrabold text-[#0b182e]">
                          PKR {product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-[10px] text-slate-400 line-through">
                            PKR {product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      className={`w-full py-2 px-2 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isJustAdded 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-[#0b182e] hover:bg-[#162a4d] text-white shadow-xs'
                      }`}
                    >
                      {isJustAdded ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />}
                      <span>{isJustAdded ? 'Added' : 'Add to Cart'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bulk Wholesale Pricing Matrix Table */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-base sm:text-lg font-black text-[#0b182e]">
                Tiered Volume Discount Price Table
              </h2>
              <p className="text-xs text-slate-500">Save up to 50% on large corporate or university event orders</p>
            </div>

            <button
              onClick={() => onNavigatePage('bulk-quote')}
              className="bg-[#0b182e] text-amber-400 font-bold px-4 py-2 rounded-xl text-xs"
            >
              Calculate Custom Bulk Order
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-extrabold border-b border-slate-200">
                  <th className="p-3 rounded-l-xl">Order Quantity</th>
                  <th className="p-3">Discount Tier</th>
                  <th className="p-3 rounded-r-xl">Est. Rate / Piece</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                {currentInfo.tierPrices.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-[#0b182e]">{row.qty}</td>
                    <td className="p-3 text-amber-600 font-bold">{row.discount}</td>
                    <td className="p-3 font-extrabold text-[#0b182e]">{row.pricePerUnit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Category Specific FAQs */}
        <div className="bg-amber-50/50 p-6 sm:p-8 rounded-3xl border border-amber-200/80 space-y-4">
          <h2 className="text-base sm:text-lg font-black text-[#0b182e] flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600" />
            <span>Frequently Asked Questions ({categorySlug.toUpperCase()})</span>
          </h2>

          <div className="space-y-3">
            {currentInfo.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-amber-200/60 shadow-2xs space-y-1 text-xs">
                <h4 className="font-extrabold text-[#0b182e]">Q: {faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Quick View Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(prod, qty) => {
          for (let i = 0; i < qty; i++) {
            onAddToCart(prod);
          }
          setQuickViewProduct(null);
        }}
        onLaunchCustomizer={(prod) => {
          setQuickViewProduct(null);
          onLaunchCustomizerWithProduct(prod);
        }}
      />
    </div>
  );
};
