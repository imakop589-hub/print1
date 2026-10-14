import React, { useState } from 'react';
import { CartItem } from '../types';
import { 
  X, Trash2, ShoppingCart, ArrowRight, Truck, Tag, ShieldCheck, Check
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartId: string, newQty: number) => void;
  onRemoveItem: (cartId: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  
  // Free delivery threshold: PKR 5,000
  const freeShippingThreshold = 5000;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 250;
  const totalAmount = subtotal - discountAmount + shippingFee;

  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'PRINT10') {
      setDiscountPercent(10);
      setCouponApplied(true);
      setCouponError('');
    } else if (couponCode.trim().toUpperCase() === 'PRINT20') {
      setDiscountPercent(20);
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon. Try PRINT10 or PRINT20');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity animate-in fade-in"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-300">
          
          {/* Cart Header */}
          <div className="bg-[#0b182e] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-amber-400" />
              <h2 className="text-base font-black text-white">Your Shopping Cart</h2>
              <span className="bg-amber-400 text-slate-950 font-black text-xs px-2 py-0.5 rounded-full">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)} items
              </span>
            </div>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Bar */}
          <div className="bg-amber-50 px-6 py-3 border-b border-amber-200 text-xs">
            {subtotal >= freeShippingThreshold ? (
              <div className="flex items-center gap-2 text-emerald-800 font-bold">
                <Truck className="w-4 h-4 text-emerald-600" />
                <span>🎉 Congratulations! You unlocked FREE Delivery across Pakistan!</span>
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold text-amber-900">
                  <span>Add <strong>PKR {amountNeededForFreeShipping.toLocaleString()}</strong> more for FREE Delivery!</span>
                  <span>{progressPercent}%</span>
                </div>
                <div className="w-full bg-amber-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-amber-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-slate-100">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">Your cart is currently empty</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Explore our custom mugs, keychains, glasses, and t-shirts to create something unique!
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 bg-[#0b182e] text-amber-400 font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-[#162a4d] transition-colors"
                >
                  Start Customizing Products
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.cartId} className="pt-4 first:pt-0 flex gap-3 items-start">
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 relative">
                    <img src={item.product.imageUrl} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xs font-bold text-[#0b182e] truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.cartId)}
                        className="text-slate-400 hover:text-red-600 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Customization Details Summary */}
                    <div className="text-[10px] text-slate-500 space-y-0.5 mt-0.5">
                      {item.customization.customText && (
                        <p className="truncate">Text: <strong className="text-slate-800">"{item.customization.customText}"</strong></p>
                      )}
                      {item.customization.uploadedLogoName && (
                        <p className="text-amber-700 font-semibold">Logo Attached: {item.customization.uploadedLogoName}</p>
                      )}
                    </div>

                    {/* Quantity Modifier & Subtotal */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-slate-300 rounded-lg bg-slate-50">
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-slate-600 font-bold hover:bg-slate-200 rounded-l-lg"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-slate-600 font-bold hover:bg-slate-200 rounded-r-lg"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-black text-[#0b182e]">
                        PKR {item.totalPrice.toLocaleString()}
                      </span>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-3 shrink-0">
              
              {/* Promo Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Promo Code (Try PRINT10)"
                  className="flex-1 bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs uppercase focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  className="bg-slate-800 hover:bg-slate-900 text-amber-400 font-bold px-3 py-1.5 rounded-lg text-xs transition-colors"
                >
                  Apply
                </button>
              </form>

              {couponApplied && (
                <div className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>Promo {discountPercent}% OFF Applied!</span>
                </div>
              )}
              {couponError && (
                <div className="text-[10px] text-red-600 font-medium">{couponError}</div>
              )}

              {/* Cost Calculations */}
              <div className="space-y-1 text-xs pt-2 border-t border-slate-200 text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-bold text-slate-800">PKR {subtotal.toLocaleString()}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Discount ({discountPercent}%):</span>
                    <span>- PKR {discountAmount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Estimated Shipping:</span>
                  <span className="font-bold text-slate-800">
                    {shippingFee === 0 ? <span className="text-emerald-700 font-extrabold">FREE</span> : `PKR ${shippingFee}`}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-black text-[#0b182e] pt-2 border-t border-slate-200">
                  <span>Total Amount:</span>
                  <span className="text-base text-amber-600">PKR {totalAmount.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={onProceedToCheckout}
                className="w-full bg-[#0b182e] hover:bg-[#162a4d] text-amber-400 font-black py-3.5 rounded-xl text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <div className="text-center pt-1 text-[10px] text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Safe & Secure Order Processing</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
