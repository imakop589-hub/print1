import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Tag, HeartHandshake, Sparkles, Edit3 } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
  onGetQuote: () => void;
  onLaunchCustomizer: (productType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNow, onGetQuote, onLaunchCustomizer }) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-100 via-slate-50 to-white pt-8 pb-12 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#0b182e] text-xs font-bold uppercase tracking-wider border border-sky-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>CUSTOM PRINTING SERVICES IN PAKISTAN</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-[#0b182e] tracking-tight leading-[1.15]">
              Print Your Ideas, <br />
              <span className="text-amber-500 underline decoration-amber-300 decoration-wavy decoration-2">
                Make It Unique!
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              High quality printing on Mugs, Glasses, Keychains, Pens, T-Shirts and more. Perfect for personalized gifts, company branding & marketing promotions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onShopNow}
                className="bg-[#0b182e] hover:bg-[#162a4d] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-950/20 hover:shadow-xl transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-400" />
              </button>

              <button
                onClick={onGetQuote}
                className="bg-white hover:bg-slate-100 text-[#0b182e] border-2 border-slate-300 hover:border-slate-400 px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* 4 Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border border-amber-200">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Premium Quality</h4>
                  <p className="text-[10px] text-slate-500">Best in Class Printing</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center shrink-0 border border-sky-200">
                  <Truck className="w-4 h-4 text-sky-700" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Fast Delivery</h4>
                  <p className="text-[10px] text-slate-500">Across Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Tag className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Affordable Prices</h4>
                  <p className="text-[10px] text-slate-500">Best Price Guarantee</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center shrink-0 border border-purple-200">
                  <HeartHandshake className="w-4 h-4 text-purple-700" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">100% Satisfaction</h4>
                  <p className="text-[10px] text-slate-500">We Value Our Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Product Showcase (Hero Graphic) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none bg-gradient-to-tr from-amber-50 to-sky-50 p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-xl">
              
              {/* Product Mockups Grid Display */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-inner p-4 sm:p-6 border border-slate-100">
                
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-200/30 rounded-full blur-2xl"></div>

                <div className="grid grid-cols-2 gap-4 items-center">
                  
                  {/* Mug Mockup */}
                  <div 
                    onClick={() => onLaunchCustomizer('mugs')}
                    className="relative group cursor-pointer bg-slate-50 rounded-2xl p-4 border border-slate-200/80 hover:border-amber-400 hover:shadow-lg transition-all"
                  >
                    <div className="aspect-square rounded-xl overflow-hidden mb-2 relative flex items-center justify-center bg-white border border-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400" 
                        alt="Custom Mug" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                        <div className="bg-white/95 backdrop-blur-xs text-[#0b182e] text-[11px] font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1 group-hover:scale-110 transition-transform">
                          <Edit3 className="w-3 h-3 text-amber-500" />
                          <span>Your Design Here</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-800 block text-center">Custom Ceramic Mug</span>
                  </div>

                  {/* Glass Mockup */}
                  <div 
                    onClick={() => onLaunchCustomizer('glasses')}
                    className="relative group cursor-pointer bg-slate-50 rounded-2xl p-4 border border-slate-200/80 hover:border-amber-400 hover:shadow-lg transition-all"
                  >
                    <div className="aspect-square rounded-xl overflow-hidden mb-2 relative flex items-center justify-center bg-white border border-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&q=80&w=400" 
                        alt="Custom Glass" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                        <div className="bg-white/95 backdrop-blur-xs text-[#0b182e] text-[11px] font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1 group-hover:scale-110 transition-transform">
                          <Edit3 className="w-3 h-3 text-amber-500" />
                          <span>Your Design Here</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-800 block text-center">Printed Glassware</span>
                  </div>

                  {/* Keychain Mockup */}
                  <div 
                    onClick={() => onLaunchCustomizer('keychains')}
                    className="relative group cursor-pointer bg-slate-50 rounded-2xl p-4 border border-slate-200/80 hover:border-amber-400 hover:shadow-lg transition-all"
                  >
                    <div className="aspect-square rounded-xl overflow-hidden mb-2 relative flex items-center justify-center bg-white border border-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1622445268465-840246e904fb?auto=format&fit=crop&q=80&w=400" 
                        alt="Custom Keychain" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                        <div className="bg-white/95 backdrop-blur-xs text-[#0b182e] text-[11px] font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1 group-hover:scale-110 transition-transform">
                          <Edit3 className="w-3 h-3 text-amber-500" />
                          <span>Your Logo</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-800 block text-center">Wooden Keychain</span>
                  </div>

                  {/* Pen Mockup */}
                  <div 
                    onClick={() => onLaunchCustomizer('pens')}
                    className="relative group cursor-pointer bg-slate-50 rounded-2xl p-4 border border-slate-200/80 hover:border-amber-400 hover:shadow-lg transition-all"
                  >
                    <div className="aspect-square rounded-xl overflow-hidden mb-2 relative flex items-center justify-center bg-white border border-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=400" 
                        alt="Custom Pen" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                        <div className="bg-white/95 backdrop-blur-xs text-[#0b182e] text-[11px] font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1 group-hover:scale-110 transition-transform">
                          <Edit3 className="w-3 h-3 text-amber-500" />
                          <span>Engraved Pen</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-800 block text-center">Laser Metal Pen</span>
                  </div>

                </div>

                {/* Floating Interactive Badge */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>Live 2D Customizer Active</span>
                  </div>
                  <button 
                    onClick={() => onLaunchCustomizer()}
                    className="text-xs font-extrabold text-[#0b182e] bg-amber-400 hover:bg-amber-500 px-3.5 py-1.5 rounded-lg shadow-xs transition-colors flex items-center gap-1"
                  >
                    <span>Click to Customize Any Product</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
