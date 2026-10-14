import React from 'react';
import { X, Sparkles, ShieldCheck, Award, Printer } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-auto">
        
        {/* Header */}
        <div className="bg-[#0b182e] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h2 className="text-base font-black text-white">About Printify.pk</h2>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs text-slate-700 leading-relaxed">
          <div className="flex items-center gap-3 bg-amber-50 p-4 rounded-2xl border border-amber-200">
            <Printer className="w-8 h-8 text-amber-600 shrink-0" />
            <div>
              <h3 className="font-extrabold text-[#0b182e] text-sm">Print Your Ideas, Make It Unique!</h3>
              <p className="text-[11px] text-slate-600 mt-0.5">
                Pakistan's premiere destination for personalized gifts and corporate brand printing.
              </p>
            </div>
          </div>

          <p>
            Founded in Lahore, <strong>Printify.pk</strong> has delivered over 50,000+ custom printed items across Pakistan. From single personalized gift mugs and custom keychains to massive 1,000+ piece corporate employee onboarding kits, we pride ourselves on precision, durability, and unbeatable turn-around times.
          </p>

          <h4 className="font-bold text-[#0b182e] text-sm pt-2 border-t border-slate-100">
            Our Printing Technologies:
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1">1. HD Sublimation</strong>
              <span className="text-slate-500 text-[11px]">Vibrant full-color photo prints on ceramic mugs, magic mugs, water bottles, and coasters.</span>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1">2. Laser Engraving</strong>
              <span className="text-slate-500 text-[11px]">Permanent high-precision laser logo engraving on metal pens, wooden keychains, & corporate boxes.</span>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1">3. DTF T-Shirt Printing</strong>
              <span className="text-slate-500 text-[11px]">Direct-To-Film soft hand-feel fabric prints that never fade or crack after washing.</span>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1">4. Frosted UV Glassware</strong>
              <span className="text-slate-500 text-[11px]">Scratch-resistant UV printing on highball glasses and mugs for cafes and home decor.</span>
            </div>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={onClose}
              className="bg-[#0b182e] text-amber-400 font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-[#162a4d] transition-colors"
            >
              Explore Our Collection
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
