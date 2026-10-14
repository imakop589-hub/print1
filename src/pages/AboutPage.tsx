import React from 'react';
import { 
  Printer, Award, ShieldCheck, Clock, MapPin, Sparkles, CheckCircle2, ChevronRight, Users, Heart
} from 'lucide-react';

interface AboutPageProps {
  onNavigatePage: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigatePage }) => {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Hero Header */}
      <div className="bg-[#0b182e] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button onClick={() => onNavigatePage('home')} className="hover:text-amber-400">Home</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-bold">About Us</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              About Printify.pk
            </h1>
            <p className="text-xs sm:text-sm text-amber-300 font-bold">
              Pakistan's Leading Custom Printing Studio & Gift Personalization Destination
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12 text-slate-800">
        
        {/* Story Section */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 font-extrabold text-xs px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Founded in Lahore, Pakistan</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-black text-[#0b182e] tracking-tight">
              Bringing Your Imagination to Life on Every Surface
            </h2>

            <p>
              Started in 2021 as a specialized sublimation printing studio in DHA Lahore, <strong>Printify.pk</strong> has grown into Pakistan’s most reliable online custom printing platform, serving over 50,000+ individual customers and 500+ corporate partners nationwide.
            </p>

            <p>
              Whether you are looking to surprise a loved one with a personalized photo magic mug, order laser-engraved executive pens for a graduation, or brand 1,000+ employee welcome onboarding kits for your software house, our state-of-the-art facility delivers unmatched print sharpness, durability, and speed.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-[#0b182e]">
              <div className="flex items-center gap-2 bg-slate-100 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>50,000+ Orders Delivered</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-100 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>99.4% Customer Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative aspect-4/3 flex items-center justify-center p-4">
            <img
              src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=800"
              alt="Printify.pk Studio"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Printing Technologies Equipment Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-[#0b182e]">
              Our State-of-the-Art Production Machinery
            </h2>
            <p className="text-xs text-slate-500">
              We invest in Japanese and German precision machinery to guarantee long-lasting, vibrant prints.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Printer className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-[#0b182e] text-sm">HD Sublimation Presses</h3>
              <p className="text-slate-600">
                Operates at 200°C for deep dye infusion into Grade-A ceramic mugs, water bottles, and coasters. Never peels or fades.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-[#0b182e] text-sm">Fiber Laser Engravers</h3>
              <p className="text-slate-600">
                0.01mm high-precision metallic etching for pens, metal keychains, stainless steel thermoses, and wooden boxes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-[#0b182e] text-sm">Epson DTF Apparel Printers</h3>
              <p className="text-slate-600">
                Direct-to-Film soft hand-feel fabric transfers for t-shirts, polo shirts, hoodies, and caps.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-[#0b182e] text-sm">UV Glass Printers</h3>
              <p className="text-slate-600">
                Instant UV cured prints for glass cups, frosted highballs, and acrylic awards with scratch resistance.
              </p>
            </div>

          </div>
        </div>

        {/* Quality Commitment CTA */}
        <div className="bg-[#0b182e] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-amber-400">
              100% Quality & Breakage Replacement Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              If your mug or glassware arrives damaged during courier transport, send us an unboxing photo on WhatsApp and we will dispatch a free replacement immediately!
            </p>
          </div>

          <button
            onClick={() => onNavigatePage('shop')}
            className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-6 py-3 rounded-xl text-xs shrink-0 cursor-pointer"
          >
            Explore Product Collection
          </button>
        </div>

      </div>
    </div>
  );
};
