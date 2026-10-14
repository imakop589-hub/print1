import React, { useState } from 'react';
import { 
  Building2, Calculator, Send, CheckCircle2, Award, ShieldCheck, Download, FileText, ChevronRight, Sparkles, Users
} from 'lucide-react';

interface BulkQuotePageProps {
  onNavigatePage: (page: string) => void;
}

export const BulkQuotePage: React.FC<BulkQuotePageProps> = ({ onNavigatePage }) => {
  // Calculator state
  const [selectedProductType, setSelectedProductType] = useState('mugs');
  const [quantity, setQuantity] = useState(50);
  const [includeBox, setIncludeBox] = useState(true);
  const [includeLogoEngraving, setIncludeLogoEngraving] = useState(true);

  // Form state
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Lahore');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Price Calculation Logic
  const basePrices: Record<string, number> = {
    mugs: 890,
    glasses: 1250,
    keychains: 450,
    pens: 650,
    tshirts: 1450,
    corporate: 3800,
  };

  const getDiscountRate = (qty: number) => {
    if (qty >= 200) return 0.45; // 45% off
    if (qty >= 100) return 0.35; // 35% off
    if (qty >= 50) return 0.25;  // 25% off
    if (qty >= 20) return 0.15;  // 15% off
    return 0;
  };

  const unitBase = basePrices[selectedProductType] || 890;
  const discountRate = getDiscountRate(quantity);
  const discountedUnit = unitBase * (1 - discountRate);
  const boxCost = includeBox ? 150 : 0;
  const engravingCost = includeLogoEngraving ? 100 : 0;
  
  const finalUnitPrice = Math.round(discountedUnit + boxCost + engravingCost);
  const estimatedTotal = finalUnitPrice * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Header Banner */}
      <div className="bg-[#0b182e] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button onClick={() => onNavigatePage('home')} className="hover:text-amber-400">Home</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-bold">Bulk & Corporate Orders</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Corporate Wholesale Printing & Executive Gift Kits
              </h1>
              <p className="text-xs sm:text-sm text-amber-300 font-bold mt-1">
                Custom Branded Merchandise for Companies, Software Houses, Banks & Universities across Pakistan
              </p>
            </div>

            <div className="flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 p-3 rounded-2xl">
              <Award className="w-8 h-8 text-amber-400 shrink-0" />
              <div className="text-xs">
                <strong className="block text-white">Trusted by 500+ Corporations</strong>
                <span className="text-slate-300 text-[11px]">Free sample boxes & 3D digital mockups</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        
        {/* Interactive Instant Estimator & Order Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Instant Calculator */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <Calculator className="w-5 h-5 text-amber-500" />
              <h2 className="text-base font-black text-[#0b182e]">Instant Wholesale Price Calculator</h2>
            </div>

            <div className="space-y-4 text-xs">
              {/* Product Selection */}
              <div>
                <label className="font-extrabold text-slate-800 block mb-1">Select Custom Item:</label>
                <select
                  value={selectedProductType}
                  onChange={(e) => setSelectedProductType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="mugs">Custom Ceramic & Magic Mugs</option>
                  <option value="glasses">Frosted Glassware & Water Bottles</option>
                  <option value="keychains">Laser Engraved Metallic Keychains</option>
                  <option value="pens">Executive Laser Engraved Pens</option>
                  <option value="tshirts">Custom Cotton Polo & Event T-Shirts</option>
                  <option value="corporate">Complete 5-Piece VIP Employee Gift Box</option>
                </select>
              </div>

              {/* Quantity Input */}
              <div>
                <div className="flex justify-between font-extrabold text-slate-800 mb-1">
                  <span>Order Quantity (Units):</span>
                  <span className="text-amber-600 font-black">{quantity} Pcs</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                  <span>10 pcs</span>
                  <span>100 pcs (35% OFF)</span>
                  <span>1,000+ pcs (45% OFF)</span>
                </div>
              </div>

              {/* Extras Toggles */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeBox}
                    onChange={(e) => setIncludeBox(e.target.checked)}
                    className="accent-amber-500 w-4 h-4 rounded"
                  />
                  <span className="font-semibold text-slate-800">Include Custom Velvet / Matte Hard Box (+PKR 150/pc)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeLogoEngraving}
                    onChange={(e) => setIncludeLogoEngraving(e.target.checked)}
                    className="accent-amber-500 w-4 h-4 rounded"
                  />
                  <span className="font-semibold text-slate-800">Include Fiber Laser Logo Engraving (+PKR 100/pc)</span>
                </label>
              </div>

              {/* Calculation Summary Box */}
              <div className="bg-[#0b182e] text-white p-4 rounded-2xl space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Applied Volume Discount:</span>
                  <span className="text-amber-400 font-bold">{(discountRate * 100).toFixed(0)}% OFF</span>
                </div>
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Estimated Unit Rate:</span>
                  <span className="font-bold text-white">PKR {finalUnitPrice.toLocaleString()} / pc</span>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between items-baseline">
                  <span className="font-black text-xs text-amber-400 uppercase tracking-wider">Estimated Total:</span>
                  <span className="text-xl font-black text-amber-400">PKR {estimatedTotal.toLocaleString()}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Quotation Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <Building2 className="w-5 h-5 text-amber-500" />
              <h2 className="text-base font-black text-[#0b182e]">Submit Official RFQ / Quote Request</h2>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-black text-[#0b182e]">Quotation Request Received!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you <strong>{contactPerson}</strong> ({companyName}). Our Corporate Sales Manager will send you an official PDF quotation along with 3D mockups within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#0b182e] text-amber-400 font-bold px-6 py-2.5 rounded-xl text-xs"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-extrabold text-slate-800 block mb-1">Company / Organization Name *</label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Systems Ltd, Jazz, NUST"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="font-extrabold text-slate-800 block mb-1">Contact Person Name *</label>
                    <input
                      type="text"
                      required
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      placeholder="e.g. Ali Raza (HR Lead)"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="font-extrabold text-slate-800 block mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="03xx-xxxxxxx"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="font-extrabold text-slate-800 block mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="font-extrabold text-slate-800 block mb-1">Delivery City *</label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Rawalpindi">Rawalpindi</option>
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Multan">Multan</option>
                      <option value="Sialkot">Sialkot</option>
                      <option value="Peshawar">Peshawar</option>
                      <option value="Other">Other City</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-extrabold text-slate-800 block mb-1">Specific Requirements & Logo Setup Notes</label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mention branding details, target delivery date, or specific color schemes required..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0b182e] hover:bg-[#162a4d] text-amber-400 font-extrabold py-3.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Quotation Request (Get Estimate: PKR {estimatedTotal.toLocaleString()})</span>
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Corporate Client Portfolio Showcase */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-[#0b182e]">
              Trusted By Top Pakistani Brands & IT Houses
            </h2>
            <p className="text-xs text-slate-500">
              We have manufactured over 100,000+ custom branded merchandise items for leading corporate entities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {['TechLogix', 'Systems Ltd', 'NetSol', 'Jazz', 'Educative', 'NUST Events'].map((brand, i) => (
              <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 font-black text-slate-700 text-xs flex items-center justify-center h-20 shadow-2xs">
                <span>{brand}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
