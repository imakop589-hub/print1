import React, { useState } from 'react';
import { CartItem, CustomerOrder } from '../types';
import { 
  X, ShieldCheck, Truck, CheckCircle, Smartphone, CreditCard, Building, MapPin, Phone, User, Mail
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderSuccess: (order: CustomerOrder) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderSuccess,
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Lahore');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'jazzcash' | 'easypaisa' | 'bank_transfer'>('cod');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<CustomerOrder | null>(null);

  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const shippingFee = subtotal >= 5000 || subtotal === 0 ? 0 : 250;
  const totalAmount = subtotal + shippingFee;

  const pakistaniCities = [
    'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan',
    'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala', 'Hyderabad', 'Sukkur',
    'Abbottabad', 'Bahawalpur', 'Sargodha', 'Gujrat', 'Wah Cantt'
  ];

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newOrder: CustomerOrder = {
        orderId: `PK-${Math.floor(10000 + Math.random() * 90000)}`,
        fullName,
        phone,
        email,
        address,
        city,
        paymentMethod,
        items: cartItems,
        subtotal,
        discount: 0,
        shippingFee,
        totalAmount,
        status: 'Pending',
        createdAt: new Date().toLocaleString(),
      };

      setConfirmedOrder(newOrder);
      setIsSubmitting(false);
      onOrderSuccess(newOrder);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-auto">
        
        {/* Header */}
        <div className="bg-[#0b182e] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <h2 className="text-base font-black text-white">
              {confirmedOrder ? 'Order Confirmed!' : 'Secure Express Checkout'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Confirmed Order State */}
        {confirmedOrder ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner border-2 border-emerald-300">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="bg-amber-100 text-amber-800 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                Order #{confirmedOrder.orderId}
              </span>
              <h3 className="text-xl font-black text-[#0b182e] mt-2">
                Thank You, {confirmedOrder.fullName}!
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                Your custom print order has been received! Our production team in Lahore will start preparing your item shortly.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between font-bold text-slate-800 border-b border-slate-200 pb-2">
                <span>Shipping Address:</span>
                <span className="text-right">{confirmedOrder.address}, {confirmedOrder.city}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Payment Method:</span>
                <span className="font-bold uppercase text-slate-800">{confirmedOrder.paymentMethod.replace('_', ' ')}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Total Amount Due:</span>
                <span className="font-extrabold text-amber-600 text-sm">PKR {confirmedOrder.totalAmount.toLocaleString()}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/923121234567?text=Hi%20Printify.pk,%20I%20just%20placed%20Order%20%23${confirmedOrder.orderId}%20for%20PKR%20${confirmedOrder.totalAmount}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#128C7E] hover:bg-[#0e7065] text-white font-bold px-6 py-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow"
              >
                <span>Confirm via WhatsApp (0312-1234567)</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto bg-[#0b182e] hover:bg-[#162a4d] text-amber-400 font-bold px-6 py-3 rounded-xl text-xs transition-colors"
              >
                Continue Shopping
              </button>
            </div>

          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmitOrder} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Left Column: Customer Details */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-[#0b182e] uppercase tracking-wider border-b border-slate-200 pb-2">
                  1. Shipping Information
                </h3>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-amber-500" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Adeel Khan"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-amber-500" />
                    <span>Mobile Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="03xx-xxxxxxx"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-amber-500" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@gmail.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      <span>City *</span>
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs text-slate-800 font-medium"
                    >
                      {pakistaniCities.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Delivery Speed</label>
                    <div className="p-2 bg-slate-100 rounded-xl text-[11px] font-bold text-slate-700 border border-slate-200">
                      Standard (3-5 Days)
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Complete Delivery Address *</label>
                  <textarea
                    rows={2}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="House / Street #, Sector, Area Name..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Right Column: Payment & Order Summary */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-[#0b182e] uppercase tracking-wider border-b border-slate-200 pb-2">
                  2. Payment Method
                </h3>

                <div className="space-y-2">
                  <label 
                    onClick={() => setPaymentMethod('cod')}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === 'cod' ? 'border-amber-500 bg-amber-50/60 font-bold' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Truck className="w-4 h-4 text-amber-600" />
                      <div>
                        <span className="text-xs block text-slate-900">Cash on Delivery (COD)</span>
                        <span className="text-[10px] text-slate-500 font-normal">Pay cash to rider upon arrival</span>
                      </div>
                    </div>
                    <input type="radio" checked={paymentMethod === 'cod'} readOnly className="accent-amber-500" />
                  </label>

                  <label 
                    onClick={() => setPaymentMethod('jazzcash')}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === 'jazzcash' ? 'border-amber-500 bg-amber-50/60 font-bold' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Smartphone className="w-4 h-4 text-red-600" />
                      <div>
                        <span className="text-xs block text-slate-900">JazzCash Mobile Wallet</span>
                        <span className="text-[10px] text-slate-500 font-normal">Instant digital payment</span>
                      </div>
                    </div>
                    <input type="radio" checked={paymentMethod === 'jazzcash'} readOnly className="accent-amber-500" />
                  </label>

                  <label 
                    onClick={() => setPaymentMethod('easypaisa')}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === 'easypaisa' ? 'border-amber-500 bg-amber-50/60 font-bold' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Smartphone className="w-4 h-4 text-emerald-600" />
                      <div>
                        <span className="text-xs block text-slate-900">EasyPaisa Account</span>
                        <span className="text-[10px] text-slate-500 font-normal">Instant digital payment</span>
                      </div>
                    </div>
                    <input type="radio" checked={paymentMethod === 'easypaisa'} readOnly className="accent-amber-500" />
                  </label>

                  <label 
                    onClick={() => setPaymentMethod('bank_transfer')}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === 'bank_transfer' ? 'border-amber-500 bg-amber-50/60 font-bold' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Building className="w-4 h-4 text-blue-600" />
                      <div>
                        <span className="text-xs block text-slate-900">Direct Bank Transfer</span>
                        <span className="text-[10px] text-slate-500 font-normal">Meezan / HBL / UBL</span>
                      </div>
                    </div>
                    <input type="radio" checked={paymentMethod === 'bank_transfer'} readOnly className="accent-amber-500" />
                  </label>
                </div>

                {/* Total Summary */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal:</span>
                    <span>PKR {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Delivery Fee:</span>
                    <span>{shippingFee === 0 ? 'FREE' : `PKR ${shippingFee}`}</span>
                  </div>
                  <div className="flex justify-between font-black text-[#0b182e] text-base pt-2 border-t border-slate-200">
                    <span>Grand Total:</span>
                    <span className="text-amber-600">PKR {totalAmount.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0b182e] hover:bg-[#162a4d] text-amber-400 font-black py-3.5 rounded-xl text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing Order...' : `Confirm Order — PKR ${totalAmount.toLocaleString()}`}
                </button>

              </div>

            </div>
          </form>
        )}

      </div>
    </div>
  );
};
