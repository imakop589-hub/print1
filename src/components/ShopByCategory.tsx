import React from 'react';
import { CATEGORIES } from '../data/mockData';
import { ArrowRight, Coffee, Wine, Key, PenTool, Shirt, Gift } from 'lucide-react';

interface ShopByCategoryProps {
  onSelectCategory: (catId: string) => void;
  onLaunchCustomizer: (catId: string) => void;
}

export const ShopByCategory: React.FC<ShopByCategoryProps> = ({ onSelectCategory, onLaunchCustomizer }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee': return <Coffee className="w-4 h-4" />;
      case 'Wine': return <Wine className="w-4 h-4" />;
      case 'Key': return <Key className="w-4 h-4" />;
      case 'PenTool': return <PenTool className="w-4 h-4" />;
      case 'Shirt': return <Shirt className="w-4 h-4" />;
      case 'Gift': return <Gift className="w-4 h-4" />;
      default: return <Coffee className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with yellow bar */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0b182e] tracking-tight">
            Shop By Category
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                // Scroll down to featured products
                const el = document.getElementById('products-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group cursor-pointer bg-slate-50 hover:bg-white rounded-2xl p-4 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative"
            >
              {/* Product Image Box */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-white border border-slate-100 flex items-center justify-center">
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Circle Icon Overlay */}
                <div className="absolute bottom-2 left-2 w-8 h-8 rounded-full bg-[#0b182e] text-amber-400 flex items-center justify-center shadow-md">
                  {getIcon(cat.iconName)}
                </div>
              </div>

              {/* Title & Price */}
              <h3 className="text-sm font-bold text-[#0b182e] group-hover:text-amber-600 transition-colors leading-snug">
                {cat.name}
              </h3>
              
              <p className="text-[11px] text-slate-500 mt-1 font-medium">
                {cat.id === 'corporate' ? (
                  <span className="text-amber-600 font-bold flex items-center justify-center gap-1">
                    View All Products
                    <ArrowRight className="w-3 h-3" />
                  </span>
                ) : (
                  <span>Start from <strong className="text-slate-800">PKR {cat.startPrice.toLocaleString()}</strong></span>
                )}
              </p>

              {/* Quick Customizer Button Hover Effect */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onLaunchCustomizer(cat.id);
                }}
                className="mt-3 w-full opacity-0 group-hover:opacity-100 transition-opacity bg-amber-400 hover:bg-amber-500 text-slate-950 text-[10px] font-black py-1.5 rounded-lg shadow-xs"
              >
                Customize {cat.name.split(' ')[0]}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
