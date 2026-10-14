import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0b182e] tracking-tight">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Testimonials 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-amber-400/60 transition-all flex flex-col justify-between relative shadow-xs"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-200 pointer-events-none" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                <img
                  src={item.avatarUrl}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-amber-400"
                />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0b182e] leading-tight">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <MapPin className="w-3 h-3 text-amber-500" />
                    <span>{item.city}, Pakistan</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
