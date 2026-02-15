import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-white">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-6 animate-pulse">
            <Sparkles size={14} />
            Professional Line API & LineBot AI Developer
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            ยกระดับธุรกิจด้วย <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
              LineBot AI & Flex Message
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
            ผู้เชี่ยวชาญด้านการพัฒนา <strong>Line Flex Message</strong>, <strong>LineBot AI</strong>, <strong>Broadcast LineOA</strong> และ <strong>Line LIFF</strong> ครบวงจร 
            เพื่อให้งานออกมาถูกใจคุณมากที่สุด พร้อมบริการ Support ดูแลระบบให้คุณตลอดอายุการใช้งาน
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services"
              className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-medium flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
            >
              ดูบริการ Line API ทั้งหมด
              <ChevronRight size={20} />
            </a>
            <a 
              href="https://lin.ee/BQ0cbgF" 
              className="px-8 py-4 rounded-2xl border border-slate-200 bg-white text-slate-700 font-medium flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
            >
              ปรึกษาโปรเจกต์ฟรี
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-32 max-w-7xl mx-auto px-4">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white ring-1 ring-slate-200 rounded-2xl p-8 overflow-hidden">
             <img 
               src="https://picsum.photos/id/1/1200/400" 
               alt="ตัวอย่างงาน Line Flex Message และ LineBot AI" 
               className="w-full h-auto rounded-lg shadow-inner grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;