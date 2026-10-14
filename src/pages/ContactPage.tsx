import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, ChevronRight, Building2
} from 'lucide-react';

interface ContactPageProps {
  onNavigatePage: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigatePage }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Support');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Header Banner */}
      <div className="bg-[#0b182e] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button onClick={() => onNavigatePage('home')} className="hover:text-amber-400">Home</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-bold">Contact Us</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Contact Printify.pk Customer Care
            </h1>
            <p className="text-xs sm:text-sm text-amber-300 font-bold">
              We are available 6 days a week to answer your custom printing questions and track your orders.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        
        {/* Contact Info Cards + Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Contact Details & Locations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs">
              <h3 className="font-extrabold text-[#0b182e] text-sm border-b border-slate-200 pb-2">
                Helpline & Direct Support
              </h3>

              <div className="space-y-3 text-slate-700">
                <a href="tel:03121234567" className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl hover:bg-amber-50 transition-colors border border-slate-200">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">Phone Helpline</span>
                    <strong className="text-sm text-[#0b182e]">0312-1234567</strong>
                  </div>
                </a>

                <a href="mailto:info@printify.pk" className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl hover:bg-amber-50 transition-colors border border-slate-200">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">Official Support Email</span>
                    <strong className="text-sm text-[#0b182e]">info@printify.pk</strong>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">Operating Hours</span>
                    <strong className="text-xs text-[#0b182e]">Mon - Sat: 10:00 AM - 08:00 PM</strong>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/923121234567"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#128C7E] hover:bg-[#0e7065] text-white font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Live Support</span>
                </a>
              </div>
            </div>

            {/* Offices Nationwide */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs">
              <h3 className="font-extrabold text-[#0b182e] text-sm border-b border-slate-200 pb-2 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-500" />
                <span>Our Factory & Branch Locations</span>
              </h3>

              <div className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                  <strong className="text-amber-600 block">📍 Lahore Main Factory & Studio</strong>
                  <p className="text-slate-600">123 Commercial Area, DHA Phase 2, Lahore, Pakistan</p>
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                  <strong className="text-slate-800 block">📍 Karachi Distribution Hub</strong>
                  <p className="text-slate-600">Plot 45-C, Shahrah-e-Faisal, PECHS Block 6, Karachi</p>
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                  <strong className="text-slate-800 block">📍 Islamabad Express Counter</strong>
                  <p className="text-slate-600">Shop #12, F-7 Markaz, Islamabad</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Message Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
            <h2 className="text-lg font-black text-[#0b182e] border-b border-slate-200 pb-3">
              Send Us a Direct Message
            </h2>

            {sent ? (
              <div className="text-center py-12 space-y-3">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-[#0b182e]">Thank You, {name}!</h3>
                <p className="text-xs text-slate-600">
                  Your message has been sent to our customer care team. We will get back to you within 30 minutes.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="bg-[#0b182e] text-amber-400 font-bold px-5 py-2.5 rounded-xl text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Bilal Hassan"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Phone / Mobile *</label>
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
                    <label className="font-semibold text-slate-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Inquiry Topic</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="General Support">General Support / Question</option>
                    <option value="Order Status">Track Existing Order Status</option>
                    <option value="Custom Design">Custom Design Help</option>
                    <option value="Bulk Order">Bulk Corporate Order Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe how we can assist you today..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0b182e] hover:bg-[#162a4d] text-amber-400 font-extrabold py-3.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Support</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
