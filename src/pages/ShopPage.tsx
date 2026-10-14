import React, { useState } from 'react';
import { Product } from '../types';
import { 
  Filter, Search, ArrowUpDown, Sparkles, ShoppingBag, Eye, Star, Check, Grid, List, ChevronRight, RefreshCw 
} from 'lucide-react';
import { ProductDetailModal } from '../components/ProductDetailModal';

interface ShopPageProps {
  products: Product[];
  initialCategory?: string;
  onAddToCart: (product: Product) => void;
  onLaunchCustomizerWithProduct: (product: Product) => void;
  onNavigatePage: (page: string, param?: string) => void;
  addedProductId: string | null;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  initialCategory = 'all',
  onAddToCart,
  onLaunchCustomizerWithProduct,
  onNavigatePage,
  addedProductId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState<number>(5000);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'mugs', name: 'Custom Mugs', count: products.filter(p => p.category === 'mugs').length },
    { id: 'glasses', name: 'Glassware', count: products.filter(p => p.category === 'glasses').length },
    { id: 'keychains', name: 'Keychains', count: products.filter(p => p.category === 'keychains').length },
    { id: 'pens', name: 'Printed Pens', count: products.filter(p => p.category === 'pens').length },
    { id: 'tshirts', name: 'T-Shirts', count: products.filter(p => p.category === 'tshirts').length },
    { id: 'corporate', name: 'Corporate Boxes', count: products.filter(p => p.category === 'corporate').length },
  ];

  // Filtering
  let filtered = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = p.price <= priceFilter;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  // Sorting
  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Page Header / Breadcrumb Banner */}
      <div className="bg-[#0b182e] text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
            <button onClick={() => onNavigatePage('home')} className="hover:text-amber-400">Home</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-bold">Custom Products Catalog</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                All Custom Printed Products
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Explore personalized mugs, keychains, pens, glassware, t-shirts, and corporate gift sets.
              </p>
            </div>

            <button
              onClick={() => onNavigatePage('studio')}
              className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Live Design Studio</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar Filters */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Search Input */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <label className="text-xs font-extrabold text-[#0b182e] uppercase tracking-wider flex items-center gap-1.5">
                <Search className="w-4 h-4 text-amber-500" />
                <span>Search Products</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Magic mug, pen..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-2 text-xs text-slate-400 hover:text-slate-700"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter List */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-xs font-extrabold text-[#0b182e] uppercase tracking-wider flex items-center justify-between">
                <span>Categories</span>
                <Filter className="w-3.5 h-3.5 text-amber-500" />
              </h3>

              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      if (cat.id !== 'all') {
                        onNavigatePage('category', cat.id);
                      }
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-between ${
                      selectedCategory === cat.id
                        ? 'bg-[#0b182e] text-amber-400 shadow-xs'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      selectedCategory === cat.id ? 'bg-amber-400/20 text-amber-300' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-[#0b182e] uppercase tracking-wider">Max Price</span>
                <span className="font-bold text-amber-600">PKR {priceFilter.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="300"
                max="5000"
                step="100"
                value={priceFilter}
                onChange={(e) => setPriceFilter(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                <span>PKR 300</span>
                <span>PKR 5,000</span>
              </div>
            </div>

            {/* Reset Filter Button */}
            {(selectedCategory !== 'all' || searchQuery || priceFilter < 5000) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setPriceFilter(5000);
                }}
                className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}

            {/* Help Callout */}
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl space-y-2 text-xs">
              <h4 className="font-bold text-[#0b182e]">Need Bulk Company Discounts?</h4>
              <p className="text-[11px] text-slate-600">
                Ordering 50+ items for employees or events? Get custom wholesale quotations with company logo setup.
              </p>
              <button
                onClick={() => onNavigatePage('bulk-quote')}
                className="text-amber-700 font-extrabold hover:underline block pt-1"
              >
                Request Corporate Quote →
              </button>
            </div>

          </div>

          {/* Right Product Grid */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Top Toolbar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="text-slate-600 font-medium">
                Showing <strong className="text-slate-900">{filtered.length}</strong> items
              </div>

              <div className="flex items-center gap-3">
                {/* View toggle */}
                <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-[#0b182e] text-amber-400' : 'text-slate-500'}`}
                    title="Grid View"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-[#0b182e] text-amber-400' : 'text-slate-500'}`}
                    title="List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* Sort selector */}
                <div className="flex items-center gap-1.5">
                  <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                  <select
                    value={sortBy}
                    onChange={(e: any) => setSortBy(e.target.value)}
                    className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 font-bold text-slate-800 focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer"
                  >
                    <option value="featured">Featured First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products List or Grid */}
            {filtered.length === 0 ? (
              <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-3">
                <Search className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="text-base font-bold text-[#0b182e]">No products match your criteria</h3>
                <p className="text-xs text-slate-500">Try adjusting your price filter or search keyword.</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSearchQuery(''); setPriceFilter(5000); }}
                  className="bg-[#0b182e] text-amber-400 font-bold px-4 py-2 rounded-xl text-xs"
                >
                  View All Products
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filtered.map((product) => {
                  const isJustAdded = addedProductId === product.id;

                  return (
                    <div
                      key={product.id}
                      className="group bg-white rounded-2xl border border-slate-200 hover:border-amber-400/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                    >
                      <div className="relative aspect-square bg-slate-50 overflow-hidden flex items-center justify-center p-2">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                          onClick={() => setQuickViewProduct(product)}
                        />
                        {product.popular && (
                          <span className="absolute top-2 left-2 bg-amber-400 text-slate-950 font-black text-[9px] uppercase px-2 py-0.5 rounded-md">
                            Popular
                          </span>
                        )}

                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 p-3">
                          <button
                            onClick={() => onLaunchCustomizerWithProduct(product)}
                            className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black py-1.5 px-3 rounded-xl flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Customize</span>
                          </button>
                          <button
                            onClick={() => setQuickViewProduct(product)}
                            className="w-full bg-white text-slate-900 text-xs font-bold py-1.5 px-3 rounded-xl flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>

                      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between space-y-2">
                        <div>
                          <div className="flex items-center gap-1 text-amber-500 mb-1">
                            <Star className="w-3 h-3 fill-amber-400" />
                            <span className="text-[10px] font-bold text-slate-700">{product.rating}</span>
                            <span className="text-[10px] text-slate-400">({product.reviewsCount})</span>
                          </div>

                          <h3 
                            onClick={() => setQuickViewProduct(product)}
                            className="text-xs sm:text-sm font-bold text-[#0b182e] line-clamp-1 hover:text-amber-600 cursor-pointer"
                          >
                            {product.name}
                          </h3>

                          <div className="flex items-baseline gap-1.5 mt-1">
                            <span className="text-xs sm:text-sm font-extrabold text-[#0b182e]">
                              PKR {product.price.toLocaleString()}
                            </span>
                            {product.originalPrice && (
                              <span className="text-[10px] text-slate-400 line-through">
                                PKR {product.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={() => onAddToCart(product)}
                          className={`w-full py-2 px-2 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                            isJustAdded 
                              ? 'bg-emerald-600 text-white' 
                              : 'bg-[#0b182e] hover:bg-[#162a4d] text-white shadow-xs'
                          }`}
                        >
                          {isJustAdded ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />}
                          <span>{isJustAdded ? 'Added' : 'Add to Cart'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* List view */
              <div className="space-y-3">
                {filtered.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-amber-400 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-xl bg-slate-100 border border-slate-200 shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-wider">{product.category}</span>
                          <span className="text-[10px] text-slate-400">★ {product.rating}</span>
                        </div>
                        <h3 className="font-bold text-[#0b182e] text-sm">{product.name}</h3>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{product.description}</p>
                        <div className="text-sm font-black text-[#0b182e] mt-1">
                          PKR {product.price.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={() => onAddToCart(product)}
                        className="flex-1 sm:flex-none bg-[#0b182e] hover:bg-[#162a4d] text-amber-400 font-bold px-4 py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>
                      <button
                        onClick={() => onLaunchCustomizerWithProduct(product)}
                        className="flex-1 sm:flex-none bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Customize</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>
      </div>

      {/* Quick View Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(prod, qty) => {
          for (let i = 0; i < qty; i++) {
            onAddToCart(prod);
          }
          setQuickViewProduct(null);
        }}
        onLaunchCustomizer={(prod) => {
          setQuickViewProduct(null);
          onLaunchCustomizerWithProduct(prod);
        }}
      />
    </div>
  );
};
