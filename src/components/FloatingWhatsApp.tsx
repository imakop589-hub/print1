import React, { useState } from 'react';
import { MessageSquare, X, Send, PhoneCall } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const whatsappNumber = '923121234567';

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(message || 'Hello Printify.pk support! I need help with custom printing.');
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-40 flex flex-col items-end">
      
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          
          {/* Header */}
          <div className="bg-[#128C7E] text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                🖨️
              </div>
              <div>
                <h4 className="font-extrabold text-xs">Printify.pk WhatsApp Care</h4>
                <p className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                  <span>Online • Avg reply &lt; 5 mins</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-3.5 bg-slate-50 space-y-2 text-xs">
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-slate-700 space-y-1">
              <p className="font-bold text-[#0b182e]">Assalam-o-Alaikum! 👋</p>
              <p className="text-[11px] text-slate-600">
                Welcome to Printify.pk. How can we assist you with your custom mugs, t-shirts, or corporate gift orders today?
              </p>
            </div>

            <form onSubmit={handleSend} className="pt-2 space-y-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#128C7E]"
              />

              <button
                type="submit"
                className="w-full bg-[#128C7E] hover:bg-[#0e7065] text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Start WhatsApp Chat</span>
              </button>
            </form>
          </div>

        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group cursor-pointer border-2 border-white"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2 text-white">
          WhatsApp Support
        </span>
      </button>

    </div>
  );
};
