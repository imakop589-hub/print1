import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingCart, Edit3, Star, Check, Eye } from 'lucide-react';
import { ProductDetailModal } from './ProductDetailModal';

interface FeaturedProductsProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
  onAddToCart: (product: Product) => void;
  onLaunchCustomizerWithProduct: (product: Product) => void;
  addedProductId: string | null;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onLaunchCustomizerWithProduct,
  addedProductId,
}) => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'mugs', name: 'Mugs' },
    { id: 'glasses', name: 'Glasses' },
    { id: 'keychains', name: 'Keychains' },
    { id: 'pens', name: 'Pens' },
    { id: 'tshirts', name: 'T-Shirts' },
    { id: 'corporate', name: 'Corporate' },
  ];

  return (
    <section id="products-grid" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0b182e] tracking-tight">
            Featured Custom Products
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Choose a product to order instantly or personalize in our 3D-style Studio
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0b182e] text-amber-400 shadow-md scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {filteredProducts.map((product) => {
            const isJustAdded = addedProductId === product.id;

            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-amber-400/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative aspect-square bg-slate-50 overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setQuickViewProduct(product)}
                  />
                  
                  {/* Badge */}
                  {product.popular && (
                    <span className="absolute top-2 left-2 bg-amber-400 text-slate-950 font-black text-[9px] uppercase px-2 py-0.5 rounded-md shadow-xs">
                      Popular
                    </span>
                  )}

                  {/* Quick View & Customize Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 p-3">
                    <button
                      onClick={() => onLaunchCustomizerWithProduct(product)}
                      className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black py-1.5 px-3 rounded-xl shadow-lg flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Customize</span>
                    </button>
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="w-full bg-white/90 hover:bg-white text-slate-900 text-xs font-bold py-1.5 px-3 rounded-xl shadow-md flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 mb-1">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span className="text-[10px] font-bold text-slate-700">{product.rating}</span>
                      <span className="text-[10px] text-slate-400">({product.reviewsCount})</span>
                    </div>

                    <h3 
                      onClick={() => setQuickViewProduct(product)}
                      className="text-xs sm:text-sm font-bold text-[#0b182e] line-clamp-1 mb-1 group-hover:text-amber-600 transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    <div className="flex items-baseline gap-1.5 mb-3">
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

                  {/* Add to Cart Button */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => onAddToCart(product)}
                      className={`w-full py-2 px-2 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isJustAdded 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-[#0b182e] hover:bg-[#162a4d] text-white shadow-xs'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added to Cart</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-3.5 h-3.5 text-amber-400" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Quick View Detail Modal */}
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
    </section>
  );
};
