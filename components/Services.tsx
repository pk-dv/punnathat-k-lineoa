import React from 'react';
import { MessageSquare, Zap, Clock, LayoutGrid, UserCheck, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "รับทำ Line Flex Message Template",
    description: "ออกแบบและพัฒนา Flex Message Template ตามบรีฟลูกค้า พร้อมระบบตอบกลับอัตโนมัติ (Linebot) ให้ข้อความโดดเด่นสะดุดตา",
    icon: <MessageSquare className="text-emerald-600" size={32} />
  },
  {
    title: "LineBot AI & Webhook",
    description: "เชื่อมต่อ LineOA กับ AI หรือระบบ Webhook เพื่อจับ Keywords สำคัญ แล้วส่งข้อมูลหรือ Flex Message กลับแบบอัจฉริยะ",
    icon: <Zap className="text-blue-600" size={32} />
  },
  {
    title: "ระบบ Broadcast LineOA อัตโนมัติ",
    description: "รับทำระบบส่งข้อความ Broadcast แจ้งเตือนตามช่วงเวลาในรูปแบบ Flex Message ช่วยเพิ่มยอดขายและรักษาฐานลูกค้า",
    icon: <Clock className="text-orange-600" size={32} />
  },
  {
    title: "Rich Menu Setup & Actions",
    description: "รับเซ็ตอัพ Rich Menu กำหนดตำแหน่งกด (Action) ให้แม่นยำตามดีไซน์ที่ลูกค้าต้องการ เพื่อ User Experience ที่ดีที่สุด",
    icon: <LayoutGrid className="text-purple-600" size={32} />
  },
  {
    title: "Line LIFF & Line Login",
    description: "พัฒนาหน้าเว็บเชื่อมต่อ Line Login ผ่าน LIFF SDK เพื่อดึงโปรไฟล์ลูกค้า หรือสร้างระบบจอง ระบบขายของบน Line",
    icon: <UserCheck className="text-pink-600" size={32} />
  },
  {
    title: "สิทธิ์การดูแล Script (Private)",
    description: "ผู้จ้างได้รับสิทธิ์ถือและดูแล Script ไว้เพียงผู้เดียว มั่นใจในเรื่องความเป็นส่วนตัวและความปลอดภัยของข้อมูลธุรกิจ",
    icon: <ShieldCheck className="text-slate-800" size={32} />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">บริการพัฒนา Line API มืออาชีพ</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            ครอบคลุมทุกความต้องการด้าน <strong>Line OA</strong> ไม่ว่าจะเป็น <strong>Flex Message</strong>, <strong>LineBot AI</strong> หรือ <strong>LIFF</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;