
import React from 'react';
import { Heart, Headphones, ShieldCheck } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <section id="support" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">ความมั่นใจที่มากกว่าแค่การพัฒนา</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            เพราะความพึงพอใจของคุณคือเป้าหมายสูงสุดของเรา เราจึงมอบบริการที่คุ้มค่าและปลอดภัยที่สุด
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex gap-6 p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
              <Headphones className="text-emerald-500" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Support ตลอดอายุการใช้งาน</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                เรามีบริการดูแลหากคุณเจอปัญหาจากการใช้งานจริง ไม่ว่าเวลาจะผ่านไปนานแค่ไหน มั่นใจได้ว่ามีคนคอยช่วยเหลือเสมอ
              </p>
            </div>
          </div>

          <div className="flex gap-6 p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="text-blue-500" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">ความเป็นเจ้าของโดยสมบูรณ์</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                ผู้จ้างจะได้รับสิทธิ์ถือครองและดูแล Script ไว้เพียงผู้เดียว เพื่อความเป็นส่วนตัวสูงสุดและความสะดวกในการต่อยอดธุรกิจในอนาคต
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-all cursor-pointer shadow-lg shadow-emerald-900/20">
            <Heart size={20} />
            พร้อมให้คำปรึกษาฟรี ทักมาคุยกันได้เลย
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
