import React, { useState } from 'react';
import { 
  Search, ShoppingCart, User, Phone, Mail, Truck, ChevronDown, Menu, X, Sparkles, Gift, Package, BookOpen
} from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cartItems: CartItem[];
  currentPage: string;
  onNavigatePage: (page: string, param?: string) => void;
  onOpenCart: () => void;
  onOpenCustomizer: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenAccountModal: () => void;
  onOpenTrackOrderModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItems,
  currentPage,
  onNavigatePage,
  onOpenCart,
  onOpenCustomizer,
  searchQuery,
  setSearchQuery,
  onOpenAccountModal,
  onOpenTrackOrderModal,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartPrice = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  const navCategories = [
    { id: 'all', label: 'All Catalog' },
    { id: 'mugs', label: 'Custom Mugs' },
    { id: 'glasses', label: 'Glass Printing' },
    { id: 'keychains', label: 'Keychain Printing' },
    { id: 'pens', label: 'Pen Printing' },
    { id: 'tshirts', label: 'T-Shirt Printing' },
    { id: 'corporate', label: 'Corporate Gifts' }
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigatePage('shop');
    }
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-white shadow-xs border-b border-slate-200">
      {/* Top Announcement Bar */}
      <div className="bg-[#0b182e] text-slate-200 py-1.5 px-4 text-xs font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-amber-400">
              <Truck className="w-3.5 h-3.5" />
              <span>Delivery All Over Pakistan (Lahore, Karachi, Islamabad...)</span>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">
              Free Delivery on Orders Above <strong className="text-amber-300 font-bold">PKR 5,000</strong>
            </span>
          </div>

          <div className="flex items-center space-x-4 text-slate-300">
            <button 
              onClick={onOpenTrackOrderModal}
              className="hover:text-amber-400 text-[11px] font-bold transition-colors cursor-pointer"
            >
              Track Order
            </button>
            <span className="text-slate-600">|</span>
            <a href="tel:03121234567" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>0312-1234567</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a href="mailto:info@printify.pk" className="hidden sm:flex items-center gap-1 hover:text-amber-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>info@printify.pk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Branding Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigatePage('home')}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <div className="relative w-11 h-11 bg-gradient-to-br from-[#0b182e] to-[#1e3a8a] rounded-xl flex items-center justify-center shadow-md border border-slate-700/30 group-hover:scale-105 transition-transform">
            <span className="text-2xl font-black tracking-tighter text-white font-sans">P</span>
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-white animate-pulse"></span>
            <span className="absolute bottom-1 left-1 w-2 h-2 bg-cyan-400 rounded-full"></span>
          </div>
          <div>
            <div className="flex items-baseline">
              <span className="text-2xl font-black tracking-tight text-[#0b182e]">Printify</span>
              <span className="text-xl font-extrabold text-amber-500">.pk</span>
            </div>
            <p className="text-[10px] text-slate-500 font-medium tracking-wide leading-none -mt-0.5">
              Print Your Ideas, Make It Unique!
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <form onSubmit={handleSearchSubmit} className="relative w-full flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products (Mugs, T-Shirts, Keychains, Pens)..."
              className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-sm px-4 py-2.5 rounded-l-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-14 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button 
              type="submit"
              className="bg-[#0b182e] hover:bg-[#1a2f52] text-amber-400 px-5 rounded-r-xl flex items-center justify-center font-medium transition-colors cursor-pointer"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* User Account & Cart Buttons */}
        <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
          <button
            onClick={onOpenAccountModal}
            className="hidden sm:flex items-center gap-2 text-slate-700 hover:text-[#0b182e] py-2 px-3 rounded-lg hover:bg-slate-100 transition-colors text-xs font-semibold cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
              <User className="w-4 h-4 text-[#0b182e]" />
            </div>
            <div className="text-left hidden lg:block">
              <span className="block text-[10px] text-slate-400 leading-none">My Account</span>
              <span className="text-slate-800 font-bold">Login / Register</span>
            </div>
          </button>

          {/* Cart trigger button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2.5 bg-[#0b182e] hover:bg-[#162a4d] text-white py-2 px-3.5 sm:px-4 rounded-xl shadow-xs transition-all hover:shadow group cursor-pointer"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              {totalCartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-slate-950 font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {totalCartCount}
                </span>
              )}
            </div>
            <div className="text-left hidden sm:block">
              <span className="block text-[10px] text-slate-300 leading-none">Cart</span>
              <span className="text-xs font-extrabold text-amber-400">
                PKR {totalCartPrice.toLocaleString()}
              </span>
            </div>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search input */}
      <div className="md:hidden px-4 pb-3">
        <form onSubmit={handleSearchSubmit} className="relative flex w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-xs px-3.5 py-2 rounded-l-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
          <button type="submit" className="bg-[#0b182e] text-amber-400 px-3.5 rounded-r-lg">
            <Search className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Navigation Navbar (Desktop) */}
      <nav className="hidden md:block bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700">
          <div className="flex items-center space-x-1">
            <button
              onClick={() => onNavigatePage('home')}
              className={`py-3 px-4 transition-colors border-b-2 cursor-pointer ${
                currentPage === 'home' 
                  ? 'border-amber-500 text-[#0b182e] bg-white font-extrabold' 
                  : 'border-transparent hover:text-[#0b182e] hover:bg-slate-100'
              }`}
            >
              HOME
            </button>

            <button
              onClick={() => onNavigatePage('shop')}
              className={`py-3 px-4 transition-colors border-b-2 cursor-pointer ${
                currentPage === 'shop' 
                  ? 'border-amber-500 text-[#0b182e] bg-white font-extrabold' 
                  : 'border-transparent hover:text-[#0b182e] hover:bg-slate-100'
              }`}
            >
              ALL PRODUCTS
            </button>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsCategoryDropdownOpen(true)}
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                className={`py-3 px-4 flex items-center gap-1 transition-colors border-b-2 cursor-pointer ${
                  currentPage === 'category'
                    ? 'border-amber-500 text-[#0b182e] bg-white'
                    : 'border-transparent hover:text-[#0b182e] hover:bg-slate-100'
                }`}
              >
                <span>CATEGORIES</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>

              {isCategoryDropdownOpen && (
                <div 
                  onMouseLeave={() => setIsCategoryDropdownOpen(false)}
                  className="absolute top-full left-0 w-56 bg-white border border-slate-200 shadow-xl rounded-b-xl py-2 z-50"
                >
                  {navCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        if (cat.id === 'all') {
                          onNavigatePage('shop');
                        } else {
                          onNavigatePage('category', cat.id);
                        }
                        setIsCategoryDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-xs font-semibold capitalize flex items-center justify-between text-slate-700 hover:bg-slate-50 hover:text-amber-600 transition-colors cursor-pointer"
                    >
                      <span>{cat.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={onOpenCustomizer}
              className="py-3 px-4 hover:text-[#0b182e] hover:bg-slate-100 transition-colors border-b-2 border-transparent flex items-center gap-1.5 text-amber-600 font-extrabold cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: '4s' }} />
              <span>CUSTOM DESIGN STUDIO</span>
            </button>

            <button
              onClick={() => onNavigatePage('bulk-quote')}
              className={`py-3 px-4 transition-colors border-b-2 flex items-center gap-1 cursor-pointer ${
                currentPage === 'bulk-quote'
                  ? 'border-amber-500 text-[#0b182e] bg-white font-extrabold'
                  : 'border-transparent hover:text-[#0b182e] hover:bg-slate-100'
              }`}
            >
              <Package className="w-3.5 h-3.5 text-slate-500" />
              <span>BULK & CORPORATE</span>
            </button>

            <button
              onClick={() => onNavigatePage('about')}
              className={`py-3 px-4 transition-colors border-b-2 cursor-pointer ${
                currentPage === 'about'
                  ? 'border-amber-500 text-[#0b182e] bg-white font-extrabold'
                  : 'border-transparent hover:text-[#0b182e] hover:bg-slate-100'
              }`}
            >
              ABOUT US
            </button>

            <button
              onClick={() => onNavigatePage('contact')}
              className={`py-3 px-4 transition-colors border-b-2 cursor-pointer ${
                currentPage === 'contact'
                  ? 'border-amber-500 text-[#0b182e] bg-white font-extrabold'
                  : 'border-transparent hover:text-[#0b182e] hover:bg-slate-100'
              }`}
            >
              CONTACT US
            </button>

            <button
              onClick={() => onNavigatePage('blog')}
              className={`py-3 px-4 transition-colors border-b-2 flex items-center gap-1 cursor-pointer ${
                currentPage === 'blog'
                  ? 'border-amber-500 text-[#0b182e] bg-white font-extrabold'
                  : 'border-transparent hover:text-[#0b182e] hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-500" />
              <span>GUIDES & BLOG</span>
            </button>
          </div>

          <div className="py-2">
            <button
              onClick={() => onNavigatePage('bulk-quote')}
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 px-3.5 py-1.5 rounded-lg text-[11px] font-black transition-colors flex items-center gap-1 shadow-xs cursor-pointer"
            >
              <span>GET A BULK QUOTE</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-2">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Navigation</div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => { onNavigatePage('home'); setIsMobileMenuOpen(false); }}
              className="text-left px-3 py-2 rounded-lg text-xs font-bold bg-slate-100 text-slate-800"
            >
              Home Page
            </button>
            <button
              onClick={() => { onNavigatePage('shop'); setIsMobileMenuOpen(false); }}
              className="text-left px-3 py-2 rounded-lg text-xs font-bold bg-slate-100 text-slate-800"
            >
              All Products
            </button>
            <button
              onClick={() => { onNavigatePage('bulk-quote'); setIsMobileMenuOpen(false); }}
              className="text-left px-3 py-2 rounded-lg text-xs font-bold bg-slate-100 text-slate-800"
            >
              Bulk Orders
            </button>
            <button
              onClick={() => { onNavigatePage('blog'); setIsMobileMenuOpen(false); }}
              className="text-left px-3 py-2 rounded-lg text-xs font-bold bg-slate-100 text-slate-800"
            >
              Printing Guides
            </button>
          </div>

          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-2 mb-1">Categories</div>
          <div className="grid grid-cols-2 gap-2">
            {navCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  if (cat.id === 'all') onNavigatePage('shop');
                  else onNavigatePage('category', cat.id);
                  setIsMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 rounded-lg text-xs font-medium bg-slate-50 text-slate-700 hover:bg-amber-50"
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-3 space-y-1">
            <button
              onClick={() => { onOpenCustomizer(); setIsMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold text-amber-700 bg-amber-50 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Launch Live Custom Studio</span>
            </button>
            <button
              onClick={() => { onNavigatePage('about'); setIsMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100"
            >
              About Printify.pk
            </button>
            <button
              onClick={() => { onNavigatePage('contact'); setIsMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100"
            >
              Contact Support & Office Address
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
