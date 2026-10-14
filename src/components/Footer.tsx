import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, Heart, CheckCircle2
} from 'lucide-react';

interface FooterProps {
  onNavigatePage: (page: string, param?: string) => void;
  onOpenTrackOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigatePage,
  onOpenTrackOrderModal,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#0b182e] text-slate-300 pt-12 pb-6 border-t-4 border-amber-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-3 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-[#1e3a8a] to-[#0b182e] rounded-xl flex items-center justify-center border border-slate-700 shadow-md">
                <span className="text-xl font-black text-white">P</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-xl font-black text-white">Printify</span>
                <span className="text-lg font-extrabold text-amber-400">.pk</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
              Pakistan's leading custom printing service for all your personalized gifts and promotional needs.
            </p>
            {/* Social Media icons */}
            <div className="flex items-center space-x-2 pt-2">
              <span className="w-7 h-7 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center cursor-pointer font-bold transition-colors">f</span>
              <span className="w-7 h-7 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center cursor-pointer font-bold transition-colors">ig</span>
              <span className="w-7 h-7 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center cursor-pointer font-bold transition-colors">wa</span>
              <span className="w-7 h-7 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center cursor-pointer font-bold transition-colors">yt</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 text-amber-400">
              Quick Links
            </h3>
            <ul className="space-y-1.5 text-slate-300">
              <li>
                <button onClick={() => onNavigatePage('home')} className="hover:text-amber-400 transition-colors cursor-pointer">Home</button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('shop')} className="hover:text-amber-400 transition-colors cursor-pointer">All Products Catalog</button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('bulk-quote')} className="hover:text-amber-400 transition-colors cursor-pointer">Bulk Wholesale Orders</button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('category', 'corporate')} className="hover:text-amber-400 transition-colors cursor-pointer">Corporate Gift Boxes</button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('about')} className="hover:text-amber-400 transition-colors cursor-pointer">About Us & Factory</button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('contact')} className="hover:text-amber-400 transition-colors cursor-pointer">Contact Support</button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('blog')} className="hover:text-amber-400 transition-colors cursor-pointer">Printing Guides & Blog</button>
              </li>
              <li>
                <button onClick={onOpenTrackOrderModal} className="hover:text-amber-400 transition-colors cursor-pointer">Track Courier Delivery</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 text-amber-400">
              Categories
            </h3>
            <ul className="space-y-1.5 text-slate-300">
              <li>
                <button onClick={() => onNavigatePage('category', 'mugs')} className="hover:text-amber-400 transition-colors cursor-pointer">Custom Ceramic Mugs</button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('category', 'glasses')} className="hover:text-amber-400 transition-colors cursor-pointer">Frosted Glassware</button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('category', 'keychains')} className="hover:text-amber-400 transition-colors cursor-pointer">Keychain Printing</button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('category', 'pens')} className="hover:text-amber-400 transition-colors cursor-pointer">Laser Engraved Pens</button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('category', 'tshirts')} className="hover:text-amber-400 transition-colors cursor-pointer">DTF T-Shirt Printing</button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('category', 'corporate')} className="hover:text-amber-400 transition-colors cursor-pointer">VIP Employee Kits</button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 text-amber-400">
              Factory Contact
            </h3>
            <div className="space-y-2 text-slate-300">
              <a href="tel:03121234567" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>0312-1234567</span>
              </a>
              <a href="mailto:info@printify.pk" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>info@printify.pk</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-snug">
                  123 Commercial Area, DHA Phase 2, Lahore, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-[11px]">Mon - Sat: 10:00 AM - 08:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1 text-amber-400">
              Newsletter
            </h3>
            <p className="text-[11px] text-slate-400">
              Subscribe to get updates on wholesale deals & new products.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-500 px-3 py-2 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-2 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Subscribe</span>
              </button>
            </form>

            {subscribed && (
              <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Subscribed successfully!</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Payment Methods */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 Printify.pk - Pakistan's #1 Custom Printing Platform. All Rights Reserved.
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-500 mr-1">We Accept:</span>
            <span className="px-2 py-0.5 bg-slate-800 text-white font-bold rounded text-[10px]">VISA</span>
            <span className="px-2 py-0.5 bg-slate-800 text-white font-bold rounded text-[10px]">Mastercard</span>
            <span className="px-2 py-0.5 bg-amber-500 text-slate-950 font-black rounded text-[10px]">COD</span>
            <span className="px-2 py-0.5 bg-[#128C7E] text-white font-bold rounded text-[10px]">JazzCash</span>
            <span className="px-2 py-0.5 bg-emerald-600 text-white font-bold rounded text-[10px]">EasyPaisa</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>in Lahore, Pakistan</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
