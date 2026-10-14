import React from 'react';
import { STATS } from '../data/mockData';
import { Users, Palette, Building2, Award } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-5 h-5 text-amber-500" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#0b182e]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-amber-500" />;
      case 'Award': return <Award className="w-5 h-5 text-[#0b182e]" />;
      default: return <Users className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section className="py-8 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 sm:divide-x divide-slate-100">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex items-center justify-center gap-3 p-2">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-center shrink-0 shadow-inner">
                  {getIcon(stat.icon)}
                </div>
                <div className="text-left">
                  <span className="text-2xl sm:text-3xl font-black text-[#0b182e] tracking-tight block leading-none">
                    {stat.count}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 block mt-1">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
