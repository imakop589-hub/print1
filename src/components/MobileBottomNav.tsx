import React from 'react';
import { Home, Grid, Sparkles, ShoppingBag, PackageCheck } from 'lucide-react';
import { CartItem } from '../types';

interface MobileBottomNavProps {
  cartItems: CartItem[];
  currentPage: string;
  onNavigatePage: (page: string, param?: string) => void;
  onOpenCart: () => void;
  onOpenCustomizer: () => void;
  onOpenTrackOrder: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cartItems,
  currentPage,
  onNavigatePage,
  onOpenCart,
  onOpenCustomizer,
  onOpenTrackOrder,
}) => {
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0b182e]/95 backdrop-blur-md border-t border-slate-800 text-white shadow-2xl px-2 py-1.5 flex items-center justify-around">
      
      {/* Home Button */}
      <button
        onClick={() => onNavigatePage('home')}
        className={`flex flex-col items-center justify-center min-w-[56px] py-1 text-[10px] font-bold transition-colors cursor-pointer ${
          currentPage === 'home' ? 'text-amber-400' : 'text-slate-400 hover:text-white'
        }`}
      >
        <Home className="w-5 h-5 mb-0.5" />
        <span>Home</span>
      </button>

      {/* Shop Catalog */}
      <button
        onClick={() => onNavigatePage('shop')}
        className={`flex flex-col items-center justify-center min-w-[56px] py-1 text-[10px] font-bold transition-colors cursor-pointer ${
          currentPage === 'shop' || currentPage === 'category' ? 'text-amber-400' : 'text-slate-400 hover:text-white'
        }`}
      >
        <Grid className="w-5 h-5 mb-0.5" />
        <span>Shop</span>
      </button>

      {/* Central Design Studio Button */}
      <button
        onClick={onOpenCustomizer}
        className="flex flex-col items-center justify-center min-w-[64px] py-1 relative text-[10px] font-extrabold text-amber-300 group cursor-pointer"
      >
        <div className="w-10 h-10 -mt-5 rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-amber-500 text-slate-950 flex items-center justify-center shadow-lg border-2 border-[#0b182e] animate-bounce" style={{ animationDuration: '3s' }}>
          <Sparkles className="w-5 h-5 text-slate-950" />
        </div>
        <span className="mt-0.5 text-amber-400 font-black">Studio</span>
      </button>

      {/* Cart Button */}
      <button
        onClick={onOpenCart}
        className="flex flex-col items-center justify-center min-w-[56px] py-1 text-[10px] font-bold text-slate-400 hover:text-white relative cursor-pointer"
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5 mb-0.5" />
          {totalCartCount > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-amber-500 text-slate-950 text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow">
              {totalCartCount}
            </span>
          )}
        </div>
        <span>Cart</span>
      </button>

      {/* Track Order */}
      <button
        onClick={onOpenTrackOrder}
        className="flex flex-col items-center justify-center min-w-[56px] py-1 text-[10px] font-bold text-slate-400 hover:text-white cursor-pointer"
      >
        <PackageCheck className="w-5 h-5 mb-0.5" />
        <span>Track</span>
      </button>

    </div>
  );
};
