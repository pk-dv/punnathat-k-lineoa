
import React from 'react';
import { MessageCircle, Instagram, Code2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 line-gradient rounded-xl flex items-center justify-center text-white shadow-lg">
            <Code2 size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
            Punnathat.k Developer
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-emerald-600 transition-colors">บริการ</a>
          <a href="#process" className="hover:text-emerald-600 transition-colors">ขั้นตอนการทำงาน</a>
          <a href="#support" className="hover:text-emerald-600 transition-colors">การซัพพอร์ต</a>
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href="https://lin.ee/BQ0cbgF" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full line-gradient text-white text-sm font-medium hover:opacity-90 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">Line Contact</span>
          </a>
          <a 
            href="https://www.instagram.com/punnathat_k_dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-pink-600 hover:border-pink-200 transition-all active:scale-95 shadow-sm"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
