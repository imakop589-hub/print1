import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';
import { ShoppingBag, UploadCloud, ClipboardCheck, Printer, Truck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-[#0b182e]" />;
      case 'UploadCloud': return <UploadCloud className="w-5 h-5 text-[#0b182e]" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-5 h-5 text-[#0b182e]" />;
      case 'Printer': return <Printer className="w-5 h-5 text-[#0b182e]" />;
      case 'Truck': return <Truck className="w-5 h-5 text-[#0b182e]" />;
      default: return <ShoppingBag className="w-5 h-5 text-[#0b182e]" />;
    }
  };

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0b182e] tracking-tight">
            How It Works
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* 5 Steps Horizontal Container */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4">
          
          {/* Connecting Line behind steps on desktop */}
          <div className="hidden lg:block absolute top-8 left-12 right-12 h-0.5 bg-slate-300 border-t-2 border-dashed border-slate-300 -z-0"></div>

          {HOW_IT_WORKS_STEPS.map((step) => (
            <div 
              key={step.step}
              className="relative bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center text-center z-10"
            >
              {/* Numbered Badge Circle */}
              <div className="relative mb-4">
                <div className="w-14 h-14 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center shadow-inner">
                  {getStepIcon(step.icon)}
                </div>
                
                {/* Yellow Step Number */}
                <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-950 font-black text-xs w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow">
                  {step.step}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-sm font-bold text-[#0b182e] mb-1.5">
                {step.title}
              </h3>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal max-w-[180px]">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
