import React from 'react';
import { Sparkles, Sliders, Zap, Tag, Headphones } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/mockData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Sliders': return <Sliders className="w-6 h-6 text-amber-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Tag': return <Tag className="w-6 h-6 text-amber-400" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navy Blue Banner Container */}
        <div className="bg-[#0b182e] text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Grid Layout: Left Intro + Right 5 Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-3 text-left border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-8">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                Why Choose <br />
                <span className="text-amber-400">Printify.pk?</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                We combine quality, creativity and technology to deliver the best custom printing services across Pakistan.
              </p>
            </div>

            {/* Right 5 Features Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div key={idx} className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 hover:border-amber-400/50 transition-colors text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-3">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 leading-snug">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
