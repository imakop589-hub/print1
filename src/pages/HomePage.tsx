import React from 'react';
import { Product } from '../types';
import { Hero } from '../components/Hero';
import { ShopByCategory } from '../components/ShopByCategory';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { HowItWorks } from '../components/HowItWorks';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { StatsSection } from '../components/StatsSection';
import { Testimonials } from '../components/Testimonials';
import { FaqSection } from '../components/FaqSection';
import { Printer, ShieldCheck, Truck, Sparkles, Award } from 'lucide-react';

interface HomePageProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
  onAddToCart: (product: Product) => void;
  onLaunchCustomizerWithProduct: (product: Product) => void;
  onLaunchCustomizer: (category?: string) => void;
  onNavigatePage: (page: string, param?: string) => void;
  addedProductId: string | null;
}

export const HomePage: React.FC<HomePageProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onLaunchCustomizerWithProduct,
  onLaunchCustomizer,
  onNavigatePage,
  addedProductId,
}) => {
  return (
    <div className="space-y-0">
      {/* Hero Banner */}
      <Hero
        onShopNow={() => onNavigatePage('shop')}
        onGetQuote={() => onNavigatePage('bulk-quote')}
        onLaunchCustomizer={(cat) => onLaunchCustomizer(cat)}
      />

      {/* Shop By Category Section */}
      <ShopByCategory
        onSelectCategory={(catId) => onNavigatePage('category', catId)}
        onLaunchCustomizer={(cat) => onLaunchCustomizer(cat)}
      />

      {/* Why Choose Printify.pk */}
      <WhyChooseUs />

      {/* How It Works Workflow */}
      <HowItWorks />

      {/* Featured Products Grid */}
      <FeaturedProducts
        products={products}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
        onAddToCart={onAddToCart}
        onLaunchCustomizerWithProduct={onLaunchCustomizerWithProduct}
        addedProductId={addedProductId}
      />

      {/* Stats Counter Section */}
      <StatsSection />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Lengthy SEO Content Section for Printify.pk */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0b182e] tracking-tight">
              Pakistan's Premier Online Custom Printing & Corporate Gifting Hub
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              High-Definition Sublimation, Laser Engraving & DTF Fabric Printing Delivered Nationwide
            </p>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700 leading-relaxed">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Printer className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-[#0b182e] text-sm">Personalized Photo Mugs & Glassware</h3>
              <p>
                Whether you need a memorable anniversary gift mug, a temperature-sensitive magic ceramic mug, or custom logo printed frosted highball glasses for your cafe in Lahore or Karachi, Printify.pk provides dish-washer safe prints with 100% color accuracy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-[#0b182e] text-sm">Laser Engraved Corporate Giveaways</h3>
              <p>
                Elevate your brand identity with precision metallic pen laser engraving, wooden keychains, and custom employee welcome onboarding boxes. Perfect for tech startups, multinational companies, universities, and corporate events across Pakistan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-[#0b182e] text-sm">Express Shipping Across Pakistan</h3>
              <p>
                We partner with Leopard, TCS, M&P, and CallCourier to deliver your custom printed orders securely in Lahore, Karachi, Islamabad, Rawalpindi, Peshawar, Multan, Faisalabad, Sialkot, and all other cities with Cash on Delivery options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
