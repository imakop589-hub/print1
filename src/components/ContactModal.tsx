import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-auto">
        
        {/* Header */}
        <div className="bg-[#0b182e] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-amber-400" />
            <h2 className="text-base font-black text-white">Contact Printify.pk Support</h2>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Left Info */}
          <div className="md:col-span-5 bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-4 text-xs">
            <h3 className="font-bold text-[#0b182e] text-sm border-b border-slate-200 pb-2">
              Our Head Office
            </h3>

            <div className="space-y-3 text-slate-700">
              <a href="tel:03121234567" className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-bold">0312-1234567</span>
              </a>

              <a href="mailto:info@printify.pk" className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-bold">info@printify.pk</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>123 Commercial Area, DHA Phase 2, Lahore, Pakistan</span>
              </div>

              <div className="flex items-center gap-2 text-slate-500">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Mon - Sat: 10:00 AM - 08:00 PM</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <a
                href="https://wa.me/923121234567"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#128C7E] hover:bg-[#0e7065] text-white font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors"
              >
                <span>Live WhatsApp Support</span>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:col-span-7 space-y-4">
            {sent ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-base font-bold text-[#0b182e]">Message Sent!</h3>
                <p className="text-xs text-slate-600">
                  Thank you, <strong>{name}</strong>. Our customer care representative will contact you shortly.
                </p>
                <button
                  onClick={() => { setSent(false); onClose(); }}
                  className="bg-[#0b182e] text-amber-400 font-bold px-4 py-2 rounded-xl text-xs"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Usman Malik"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="03xx-xxxxxxx"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@domain.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Your Message / Inquiry *</label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you today?"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0b182e] hover:bg-[#162a4d] text-amber-400 font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
