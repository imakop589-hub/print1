import React, { useState } from 'react';
import { X, Search, PackageCheck, Truck, Clock, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';

interface TrackOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrackOrderModal: React.FC<TrackOrderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [orderIdInput, setOrderIdInput] = useState('');
  const [searched, setSearched] = useState(false);
  const [trackingData, setTrackingData] = useState<any | null>(null);

  const mockOrders: Record<string, any> = {
    'PK-89241': {
      orderId: 'PK-89241',
      customerName: 'Muhammad Hamza',
      date: '28 July 2026',
      city: 'Lahore',
      items: '2x Premium Custom Ceramic Photo Mugs',
      amount: 'PKR 1,780',
      status: 'In Transit',
      courier: 'Leopard Courier Express (Tracking # LE-904128)',
      steps: [
        { title: 'Order Confirmed', date: '28 Jul, 10:30 AM', completed: true },
        { title: 'Custom Sublimation Printing', date: '28 Jul, 02:15 PM', completed: true },
        { title: 'Quality & Glaze Inspection', date: '29 Jul, 11:00 AM', completed: true },
        { title: 'Dispatched via Courier', date: '29 Jul, 04:30 PM', completed: true },
        { title: 'Out for Delivery', date: '30 Jul, 09:00 AM', completed: false },
      ],
    },
    'PK-91024': {
      orderId: 'PK-91024',
      customerName: 'Sara Ahmed',
      date: '29 July 2026',
      city: 'Karachi',
      items: '1x Laser Engraved Executive Metal Pen',
      amount: 'PKR 750',
      status: 'Printing Studio',
      courier: 'TCS Courier Services (Pending Dispatch)',
      steps: [
        { title: 'Order Confirmed', date: '29 Jul, 03:00 PM', completed: true },
        { title: 'Custom Sublimation Printing', date: '30 Jul, 10:00 AM', completed: true },
        { title: 'Quality & Glaze Inspection', date: '30 Jul, 03:00 PM', completed: false },
        { title: 'Dispatched via Courier', date: 'Pending', completed: false },
        { title: 'Out for Delivery', date: 'Pending', completed: false },
      ],
    },
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const id = orderIdInput.trim().toUpperCase();
    if (mockOrders[id]) {
      setTrackingData(mockOrders[id]);
    } else {
      // Default fallback demo data for any typed order number
      setTrackingData({
        orderId: id || 'PK-10928',
        customerName: 'Valued Customer',
        date: '30 July 2026',
        city: 'Islamabad',
        items: '1x Custom Magic Mug + Keychain Set',
        amount: 'PKR 1,450',
        status: 'Order Confirmed & Design Queued',
        courier: 'TCS Express Pakistan',
        steps: [
          { title: 'Order Confirmed', date: '30 Jul, 01:15 PM', completed: true },
          { title: 'Custom Sublimation Printing', date: 'In Progress', completed: false },
          { title: 'Quality & Glaze Inspection', date: 'Pending', completed: false },
          { title: 'Dispatched via Courier', date: 'Pending', completed: false },
          { title: 'Out for Delivery', date: 'Pending', completed: false },
        ],
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-auto">
        
        {/* Header */}
        <div className="bg-[#0b182e] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <PackageCheck className="w-5 h-5 text-amber-400" />
            <h2 className="text-base font-black text-white">Track Your Printify.pk Order</h2>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Tracking Input Form */}
          <form onSubmit={handleTrack} className="space-y-2">
            <label className="block text-xs font-bold text-slate-700">
              Enter Order Tracking ID or Phone Number
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                required
                value={orderIdInput}
                onChange={(e) => setOrderIdInput(e.target.value)}
                placeholder="e.g. PK-89241 or 0312-1234567"
                className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono"
              />
              <button
                type="submit"
                className="bg-[#0b182e] hover:bg-[#162a4d] text-amber-400 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Track</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-500">
              Try sample order IDs: <button type="button" onClick={() => { setOrderIdInput('PK-89241'); }} className="text-amber-600 font-bold underline">PK-89241</button> or <button type="button" onClick={() => { setOrderIdInput('PK-91024'); }} className="text-amber-600 font-bold underline">PK-91024</button>
            </p>
          </form>

          {/* Result Display */}
          {searched && trackingData && (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-4 animate-in fade-in duration-300">
              
              {/* Order summary box */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-3 rounded-xl border border-slate-200 gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-[#0b182e] text-sm">Order #{trackingData.orderId}</span>
                    <span className="bg-amber-100 text-amber-800 font-extrabold text-[10px] px-2 py-0.5 rounded-full">
                      {trackingData.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">{trackingData.items} • {trackingData.amount}</p>
                </div>
                <div className="text-right text-[11px] text-slate-500">
                  <div className="flex items-center gap-1 text-slate-700 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    <span>{trackingData.city}, Pakistan</span>
                  </div>
                  <span>Order Date: {trackingData.date}</span>
                </div>
              </div>

              {/* Courier details */}
              <div className="text-xs bg-amber-50/60 border border-amber-200 p-2.5 rounded-xl text-amber-900 flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-600 shrink-0" />
                <div>
                  <strong>Dispatch Partner:</strong> {trackingData.courier}
                </div>
              </div>

              {/* Progress Steps Timeline */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-800">Order Progress Timeline:</h4>
                <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                  {trackingData.steps.map((step: any, idx: number) => (
                    <div key={idx} className="relative flex items-start gap-3 text-xs">
                      <div className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        step.completed 
                          ? 'bg-emerald-500 text-white shadow-xs' 
                          : 'bg-slate-200 text-slate-500 border border-slate-300'
                      }`}>
                        {step.completed ? <CheckCircle2 className="w-3.5 h-3.5" /> : idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className={`font-bold ${step.completed ? 'text-slate-900' : 'text-slate-400'}`}>
                          {step.title}
                        </div>
                        <div className="text-[10px] text-slate-500">{step.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
