import React, { useState } from 'react';
import { X, User, Lock, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-auto">
        
        {/* Header */}
        <div className="bg-[#0b182e] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-amber-400" />
            <h2 className="text-base font-black text-white">
              {loggedIn ? 'My Account' : mode === 'login' ? 'Login to Printify.pk' : 'Create Customer Account'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {loggedIn ? (
          <div className="p-6 text-center space-y-4 text-xs">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto border-2 border-amber-300">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-base font-bold text-[#0b182e]">Welcome Back!</h3>
            <p className="text-slate-600">
              Logged in as <strong className="text-slate-900">{emailOrPhone || 'Customer'}</strong>
            </p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left space-y-2">
              <div className="flex justify-between">
                <span>Account Status:</span>
                <span className="font-bold text-emerald-700">Active</span>
              </div>
              <div className="flex justify-between">
                <span>Saved Reward Points:</span>
                <span className="font-bold text-amber-600">120 Points</span>
              </div>
            </div>

            <button
              onClick={() => { setLoggedIn(false); onClose(); }}
              className="bg-[#0b182e] text-amber-400 font-bold px-6 py-2.5 rounded-xl text-xs w-full"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="p-6 space-y-5">
            {/* Login / Register Toggle */}
            <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200 text-xs font-bold">
              <button
                onClick={() => setMode('login')}
                className={`flex-1 py-2 rounded-lg transition-colors ${
                  mode === 'login' ? 'bg-[#0b182e] text-amber-400 shadow-xs' : 'text-slate-600'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setMode('register')}
                className={`flex-1 py-2 rounded-lg transition-colors ${
                  mode === 'register' ? 'bg-[#0b182e] text-amber-400 shadow-xs' : 'text-slate-600'
                }`}
              >
                Register
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              {mode === 'register' && (
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Adeel Khan"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              )}

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Mobile Phone or Email *</label>
                <input
                  type="text"
                  required
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder="03xx-xxxxxxx or email@domain.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Password *</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0b182e] hover:bg-[#162a4d] text-amber-400 font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{mode === 'login' ? 'Sign In to Account' : 'Register Account'}</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
