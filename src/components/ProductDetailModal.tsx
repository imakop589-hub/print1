import React, { useState } from 'react';
import { X, Star, ShieldCheck, Truck, Sparkles, ShoppingBag, Check, Heart, Share2, Printer, Clock } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onLaunchCustomizer: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onLaunchCustomizer,
}) => {
  if (!isOpen || !product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0] || '#FFFFFF');
  const [activeImage, setActiveImage] = useState(product.image);
  const [added, setAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Gallery images (product main image + category mockups)
  const galleryImages = [
    product.image,
    'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=600',
  ];

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-slate-900/60 hover:bg-slate-900 text-white p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Left: Product Images */}
          <div className="md:col-span-6 bg-slate-100 p-6 flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-slate-200">
            <div className="relative w-full aspect-square bg-white rounded-2xl shadow-inner border border-slate-200 overflow-hidden flex items-center justify-center p-4">
              <img
                src={activeImage}
                alt={product.name}
                className="max-h-full max-w-full object-contain transition-all duration-300"
              />

              {product.popular && (
                <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-md tracking-wider uppercase shadow">
                  ★ Best Seller
                </span>
              )}

              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`absolute bottom-3 right-3 p-2.5 rounded-full border shadow-sm transition-transform active:scale-95 ${
                  isWishlisted ? 'bg-rose-50 border-rose-200 text-rose-500' : 'bg-white border-slate-200 text-slate-400 hover:text-rose-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500' : ''}`} />
              </button>
            </div>

            {/* Thumbnail Row */}
            <div className="flex gap-3 mt-4 overflow-x-auto w-full justify-center pb-1">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-14 h-14 rounded-xl border-2 overflow-hidden bg-white shrink-0 transition-all ${
                    activeImage === img ? 'border-amber-500 ring-2 ring-amber-500/20 scale-105' : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="md:col-span-6 p-6 sm:p-8 space-y-5 text-slate-800 flex flex-col justify-between">
            <div>
              {/* Category & Ratings */}
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-amber-600 font-extrabold uppercase tracking-wider">
                  {product.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-slate-900">{product.rating}</span>
                  <span className="text-slate-400">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Product Title */}
              <h2 className="text-xl sm:text-2xl font-black text-[#0b182e] tracking-tight">
                {product.name}
              </h2>

              {/* Price Tag */}
              <div className="flex items-baseline gap-3 my-3">
                <span className="text-2xl font-black text-[#0b182e]">
                  PKR {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-400 line-through font-medium">
                    PKR {product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                  In Stock (Lahore Warehouse)
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed border-t border-b border-slate-100 py-3">
                {product.description}
              </p>

              {/* Color Options */}
              {product.availableColors && product.availableColors.length > 0 && (
                <div className="space-y-2 mt-4">
                  <label className="block text-xs font-bold text-slate-700">
                    Available Base Colors:
                  </label>
                  <div className="flex items-center gap-2">
                    {product.availableColors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(color)}
                        className={`w-7 h-7 rounded-full border-2 transition-transform ${
                          selectedColor === color ? 'ring-2 ring-amber-500 scale-110 border-slate-900' : 'border-slate-300'
                        }`}
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Printing Specs */}
              <div className="mt-4 bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700 font-bold">
                  <Printer className="w-4 h-4 text-amber-500" />
                  <span>Printing Process: HD Sublimation & UV Engraving</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-[11px]">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>Turnaround Time: 24 - 48 Hours Dispatch</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              
              {/* Quantity selector */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-slate-700">Quantity:</span>
                <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-slate-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-slate-600 hover:bg-slate-200 font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-xs font-bold text-slate-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-slate-600 hover:bg-slate-200 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  onClick={handleAdd}
                  className={`py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#0b182e] hover:bg-[#162a4d] text-amber-400'
                  }`}
                >
                  {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                  <span>{added ? 'Added to Cart!' : `Add to Cart (PKR ${(product.price * quantity).toLocaleString()})`}</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onLaunchCustomizer(product);
                  }}
                  className="py-3 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Customize in Studio</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
