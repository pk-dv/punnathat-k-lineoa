
import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 line-gradient rounded-lg flex items-center justify-center text-white font-bold">P</div>
              <span className="text-lg font-bold text-slate-900">Punnathat.k Developer</span>
            </div>
            <p className="text-slate-500 text-sm">
              Professional Line API & Bot Developer
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://lin.ee/BQ0cbgF" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-600 transition-colors">
              <MessageCircle size={24} />
            </a>
            <a href="https://www.instagram.com/punnathat_k_dev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-600 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 uppercase tracking-widest font-medium">
          <p>© {new Date().getFullYear()} Punnathat.k. All rights reserved.</p>
          <p>Built with ❤️ for your business</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
