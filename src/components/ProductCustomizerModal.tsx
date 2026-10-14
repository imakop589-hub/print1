import React, { useState } from 'react';
import { Product, CustomizationState } from '../types';
import { 
  X, Upload, Sparkles, Check, RefreshCw, Type, Palette, Layout, ShoppingCart, Layers, Sliders, Image as ImageIcon
} from 'lucide-react';

interface ProductCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product | null;
  onAddToCart: (customizedItem: { product: Product; customization: CustomizationState; totalPrice: number }) => void;
}

export const ProductCustomizerModal: React.FC<ProductCustomizerModalProps> = ({
  isOpen,
  onClose,
  product,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  // Default product fallback if opened directly from top bar
  const activeProduct: Product = product || {
    id: 'p-1',
    name: 'Custom Sublimation Mug',
    category: 'mugs',
    price: 850,
    rating: 4.9,
    reviewsCount: 150,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
    description: 'Custom ceramic mug with full color wrap-around sublimation printing.',
    availableColors: ['#FFFFFF', '#1E293B', '#DC2626', '#2563EB', '#059669'],
    minQuantity: 1
  };

  const [selectedColor, setSelectedColor] = useState(
    activeProduct.availableColors[0] || '#FFFFFF'
  );
  const [customText, setCustomText] = useState('Best Teacher Ever');
  const [textColor, setTextColor] = useState('#0B192C');
  const [fontFamily, setFontFamily] = useState('sans-serif');
  const [textSize, setTextSize] = useState(18);
  const [textPosition, setTextPosition] = useState({ x: 50, y: 50 });
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);
  const [uploadedLogoName, setUploadedLogoName] = useState<string>('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeSide, setActiveSide] = useState<'front' | 'back'>('front');

  // Sample quick logos
  const sampleLogos = [
    { label: 'Company Logo', url: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200' },
    { label: 'Star Emblem', url: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200' },
    { label: 'Floral Design', url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=200' },
  ];

  const fonts = [
    { id: 'sans-serif', name: 'Clean Sans' },
    { id: 'serif', name: 'Classic Serif' },
    { id: 'monospace', name: 'Modern Mono' },
    { id: 'cursive', name: 'Elegant Handwriting' },
  ];

  const colorOptions = [
    { hex: '#FFFFFF', name: 'Glossy White' },
    { hex: '#1E293B', name: 'Midnight Black' },
    { hex: '#DC2626', name: 'Crimson Red' },
    { hex: '#2563EB', name: 'Royal Blue' },
    { hex: '#D97706', name: 'Amber Gold' },
  ];

  // Tiered discount calculation
  let discountMultiplier = 1;
  if (quantity >= 50) {
    discountMultiplier = 0.8; // 20% off
  } else if (quantity >= 10) {
    discountMultiplier = 0.9; // 10% off
  }

  const unitPrice = activeProduct.price * discountMultiplier;
  const totalPrice = unitPrice * quantity;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedLogoName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddToCartSubmit = () => {
    const customization: CustomizationState = {
      productId: activeProduct.id,
      productName: activeProduct.name,
      basePrice: activeProduct.price,
      selectedColor,
      customText,
      textColor,
      fontFamily,
      textSize,
      textPosition,
      uploadedLogoUrl: uploadedLogo,
      uploadedLogoName,
      specialInstructions,
      quantity,
      side: activeSide,
    };

    onAddToCart({
      product: activeProduct,
      customization,
      totalPrice,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-auto flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-[#0b182e] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black tracking-tight text-white leading-tight">
                Live Custom Studio — {activeProduct.name}
              </h2>
              <p className="text-[11px] text-slate-300">
                Design your custom print with instant real-time live preview
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Customizer Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          
          {/* Left Column: Interactive Live Preview Mockup Box */}
          <div className="lg:col-span-6 bg-slate-100 p-4 sm:p-6 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200 relative min-h-[300px] sm:min-h-[360px]">
            
            {/* Front / Back Toggle */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-xs p-1 rounded-xl shadow border border-slate-200 flex gap-1 z-10 text-[11px] sm:text-xs font-bold">
              <button
                onClick={() => setActiveSide('front')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  activeSide === 'front' ? 'bg-[#0b182e] text-amber-400 font-extrabold' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Front View
              </button>
              <button
                onClick={() => setActiveSide('back')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  activeSide === 'back' ? 'bg-[#0b182e] text-amber-400 font-extrabold' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Back View
              </button>
            </div>

            {/* Reset button */}
            <button
              onClick={() => {
                setCustomText('Your Custom Text');
                setUploadedLogo(null);
                setTextColor('#0B192C');
                setFontFamily('sans-serif');
                setTextSize(18);
              }}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 hover:bg-white text-slate-700 text-[11px] sm:text-xs font-semibold px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-xl shadow border border-slate-200 flex items-center gap-1 cursor-pointer z-10"
            >
              <RefreshCw className="w-3.5 h-3.5 text-amber-500" />
              <span>Reset</span>
            </button>

            {/* Simulated 2D Mockup Canvas */}
            <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 rounded-2xl bg-white shadow-xl p-3 sm:p-4 flex items-center justify-center overflow-hidden border border-slate-200/80 transition-colors mt-8 sm:mt-0"
                 style={{ backgroundColor: selectedColor === '#FFFFFF' ? '#FFFFFF' : '#f8fafc' }}
            >
              {/* Product Base Image */}
              <img
                src={activeProduct.imageUrl}
                alt={activeProduct.name}
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90"
              />

              {/* Color overlay layer */}
              <div 
                className="absolute inset-0 mix-blend-color opacity-25 pointer-events-none"
                style={{ backgroundColor: selectedColor }}
              ></div>

              {/* Overlay Custom Logo preview if uploaded */}
              {uploadedLogo && (
                <div 
                  className="absolute z-20 max-w-[100px] max-h-[100px] pointer-events-none transition-all"
                  style={{ top: '28%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  <img src={uploadedLogo} alt="Uploaded logo" className="w-full h-full object-contain filter drop-shadow-md" />
                </div>
              )}

              {/* Overlay Custom Text rendered on mockup */}
              {customText && (
                <div
                  className="absolute z-30 text-center px-4 max-w-[80%] pointer-events-none transition-all"
                  style={{
                    top: `${textPosition.y}%`,
                    left: `${textPosition.x}%`,
                    transform: 'translate(-50%, -50%)',
                    color: textColor,
                    fontFamily: fontFamily,
                    fontSize: `${textSize}px`,
                    textShadow: textColor === '#FFFFFF' ? '0 1px 3px rgba(0,0,0,0.8)' : '0 1px 2px rgba(255,255,255,0.8)',
                    fontWeight: '800',
                  }}
                >
                  {customText}
                </div>
              )}

              {/* Grid guidelines for precision print layout */}
              <div className="absolute inset-4 border border-dashed border-amber-400/40 rounded-xl pointer-events-none flex items-center justify-center">
                <span className="text-[9px] font-bold text-amber-500/60 uppercase tracking-widest absolute top-1">
                  Print Area Guide ({activeSide})
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 mt-4 text-center font-medium">
              ✨ High-Definition Sublimation & Laser Print Preview
            </p>

          </div>

          {/* Right Column: Customization Form & Controls */}
          <div className="lg:col-span-6 p-6 space-y-5 overflow-y-auto max-h-[600px]">
            
            {/* Step 1: Select Color */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#0b182e] uppercase tracking-wider flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-amber-500" />
                <span>1. Select Product Color</span>
              </label>
              <div className="flex items-center gap-2">
                {colorOptions.map((col) => (
                  <button
                    key={col.hex}
                    onClick={() => setSelectedColor(col.hex)}
                    title={col.name}
                    className={`w-8 h-8 rounded-full border-2 transition-transform cursor-pointer flex items-center justify-center ${
                      selectedColor === col.hex ? 'border-amber-500 scale-110 shadow-md' : 'border-slate-300'
                    }`}
                    style={{ backgroundColor: col.hex }}
                  >
                    {selectedColor === col.hex && (
                      <Check className={`w-4 h-4 ${col.hex === '#FFFFFF' ? 'text-slate-900' : 'text-white'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Custom Text */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#0b182e] uppercase tracking-wider flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Type className="w-3.5 h-3.5 text-amber-500" />
                  <span>2. Add Custom Text / Name</span>
                </span>
                <span className="text-[10px] text-slate-400 font-normal">Max 40 chars</span>
              </label>
              <input
                type="text"
                maxLength={40}
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Type your name, quote, or slogan..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
              />

              {/* Font & Color controls */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 block mb-1">Font Style:</span>
                  <select
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-xs text-slate-800 font-medium"
                  >
                    {fonts.map((f) => (
                      <option key={f.id} value={f.id}>{f.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-500 block mb-1">Text Color:</span>
                  <div className="flex items-center gap-1.5 pt-1">
                    {['#0B192C', '#FFFFFF', '#D97706', '#DC2626', '#2563EB'].map((c) => (
                      <button
                        key={c}
                        onClick={() => setTextColor(c)}
                        className={`w-6 h-6 rounded-full border transition-all ${
                          textColor === c ? 'ring-2 ring-amber-500 scale-110' : 'border-slate-300'
                        }`}
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Size Slider */}
              <div className="pt-1">
                <div className="flex justify-between text-[10px] font-bold text-slate-500">
                  <span>Text Size</span>
                  <span>{textSize}px</span>
                </div>
                <input
                  type="range"
                  min={12}
                  max={32}
                  value={textSize}
                  onChange={(e) => setTextSize(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Step 3: Upload Logo or Choose Sample */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-xs font-bold text-[#0b182e] uppercase tracking-wider flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Upload className="w-3.5 h-3.5 text-amber-500" />
                  <span>3. Upload Your Logo / Image</span>
                </span>
                <span className="text-[10px] text-amber-600 font-bold">PNG / JPG (Optional)</span>
              </label>

              <div className="flex items-center gap-3">
                <label className="flex-1 border-2 border-dashed border-slate-300 hover:border-amber-500 bg-slate-50 hover:bg-amber-50/50 p-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors text-center">
                  <ImageIcon className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-bold text-slate-700">
                    {uploadedLogoName ? uploadedLogoName : 'Click to Upload Logo File'}
                  </span>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>

                {uploadedLogo && (
                  <button
                    onClick={() => { setUploadedLogo(null); setUploadedLogoName(''); }}
                    className="text-xs text-red-600 hover:underline font-bold px-2 py-1"
                  >
                    Remove
                  </button>
                )}
              </div>

              {/* Quick sample logo selector */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-[10px] text-slate-400 font-bold">Or try sample:</span>
                {sampleLogos.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setUploadedLogo(s.url); setUploadedLogoName(s.label); }}
                    className="text-[10px] font-semibold bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-slate-900 px-2 py-1 rounded-md transition-colors"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Special Instructions */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <label className="text-xs font-bold text-[#0b182e] uppercase tracking-wider block">
                4. Special Printing Notes (Optional)
              </label>
              <textarea
                rows={2}
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="E.g., Please align text to center, use gift wrapping, double-sided print..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            {/* Step 5: Quantity & Pricing Breakdown */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#0b182e] block">Select Quantity:</span>
                  <span className="text-[10px] text-slate-500">Min. order: {activeProduct.minQuantity} unit</span>
                </div>

                <div className="flex items-center border border-slate-300 rounded-xl bg-white overflow-hidden shadow-xs">
                  <button
                    onClick={() => setQuantity(Math.max(activeProduct.minQuantity, quantity - 1))}
                    className="px-3 py-1.5 text-slate-700 font-bold hover:bg-slate-100 text-sm"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 font-black text-xs text-[#0b182e]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-slate-700 font-bold hover:bg-slate-100 text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Bulk discount tag notice */}
              {discountMultiplier < 1 ? (
                <div className="bg-emerald-50 text-emerald-800 text-[11px] font-bold p-2 rounded-lg border border-emerald-200 flex items-center justify-between">
                  <span>🎉 Bulk Order Discount Applied!</span>
                  <span>{discountMultiplier === 0.8 ? '20% Off' : '10% Off'}</span>
                </div>
              ) : (
                <div className="text-[10px] text-slate-500 italic">
                  💡 Tip: Order 10+ for 10% OFF, 50+ for 20% OFF!
                </div>
              )}

              {/* Total Price display */}
              <div className="flex items-baseline justify-between border-t border-slate-200 pt-2">
                <span className="text-xs text-slate-600 font-semibold">Total Customization Price:</span>
                <div className="text-right">
                  <span className="text-lg font-black text-[#0b182e]">
                    PKR {totalPrice.toLocaleString()}
                  </span>
                  <span className="block text-[10px] text-slate-400">
                    (PKR {unitPrice.toLocaleString()} / item)
                  </span>
                </div>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              onClick={handleAddToCartSubmit}
              className="w-full bg-[#0b182e] hover:bg-[#162a4d] text-amber-400 font-black py-3.5 rounded-xl text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4 text-amber-400" />
              <span>Add Custom Order to Cart — PKR {totalPrice.toLocaleString()}</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};
