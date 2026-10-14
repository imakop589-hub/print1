import React, { useState } from 'react';
import { X, Package, CheckCircle, Send, Calculator } from 'lucide-react';

interface BulkQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BulkQuoteModal: React.FC<BulkQuoteModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [productType, setProductType] = useState('mugs');
  const [quantity, setQuantity] = useState(50);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Quick Wholesale Estimate Calculator
  let baseUnit = 450;
  if (productType === 'mugs') baseUnit = 450;
  if (productType === 'glasses') baseUnit = 350;
  if (productType === 'keychains') baseUnit = 150;
  if (productType === 'pens') baseUnit = 120;
  if (productType === 'tshirts') baseUnit = 650;
  if (productType === 'corporate') baseUnit = 1800;

  let bulkDiscount = 0.15; // 15% off for 50+
  if (quantity >= 500) bulkDiscount = 0.30;
  else if (quantity >= 200) bulkDiscount = 0.25;
  else if (quantity >= 100) bulkDiscount = 0.20;

  const estimatedUnitPrice = Math.round(baseUnit * (1 - bulkDiscount));
  const estimatedTotal = estimatedUnitPrice * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-auto">
        
        {/* Header */}
        <div className="bg-[#0b182e] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-amber-400" />
            <h2 className="text-base font-black text-white">
              Instant Corporate Bulk Quote Request
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto border-2 border-amber-300">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black text-[#0b182e]">
              Quote Request Received!
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Thank you, <strong>{contactName}</strong> ({companyName || 'Corporate Client'}). Our wholesale accounts manager will send the detailed PDF quotation & sample preview within 2 hours.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="bg-[#0b182e] text-amber-400 font-bold px-6 py-2.5 rounded-xl text-xs"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <p className="text-xs text-slate-600">
              Get specialized wholesale volume pricing, sample proofs, and dedicated account support for orders of 50+ units.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Company / Organization Name</label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Systems Ltd, TechCorp, Beaconhouse"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Contact Person Name *</label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Usman Ali"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">WhatsApp / Phone *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="03xx-xxxxxxx"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Work Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Product & Quantity Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2 border-t border-slate-100">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Select Item Category</label>
                <select
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 font-medium"
                >
                  <option value="mugs">Custom Mugs</option>
                  <option value="glasses">Glass Printing</option>
                  <option value="keychains">Keychains</option>
                  <option value="pens">Engraved Metal Pens</option>
                  <option value="tshirts">Custom T-Shirts</option>
                  <option value="corporate">Executive Corporate Gift Sets</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Estimated Quantity ({quantity} units)</label>
                <input
                  type="range"
                  min={20}
                  max={1000}
                  step={10}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer mt-2"
                />
              </div>
            </div>

            {/* Live Wholesale Estimator Box */}
            <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 text-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-amber-600 shrink-0" />
                <div>
                  <span className="font-bold text-amber-950 block">Instant Wholesale Estimate:</span>
                  <span className="text-[11px] text-amber-800">Includes {(bulkDiscount * 100)}% Volume Discount</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-base font-black text-[#0b182e] block">
                  ~ PKR {estimatedTotal.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  (PKR {estimatedUnitPrice.toLocaleString()} / unit)
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Additional Instructions / Branding Details</label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Target delivery date, special logo placement, custom box packaging..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0b182e] hover:bg-[#162a4d] text-amber-400 font-black py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Request & Request Physical Sample</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
