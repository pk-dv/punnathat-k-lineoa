
import React from 'react';

const steps = [
  {
    number: "01",
    title: "รับบรีฟงาน",
    description: "รับรายละเอียดและความต้องการจากลูกค้า พร้อมให้คำปรึกษาเบื้องต้น"
  },
  {
    number: "02",
    title: "พัฒนาและปรับปรุง",
    description: "ดำเนินการสร้างระบบและปรับแก้ไขให้ตรงกับความต้องการของผู้จ้างมากที่สุด"
  },
  {
    number: "03",
    title: "ส่งมอบงานทดสอบ",
    description: "ลูกค้าทดลองใช้งานจริงในระบบ Sandbox หรือ Test Environment"
  },
  {
    number: "04",
    title: "ปิดงาน & ส่งมอบ",
    description: "ส่งมอบผลงานฉบับสมบูรณ์ พร้อมคู่มือการใช้งานเบื้องต้น"
  },
  {
    number: "05",
    title: "Support ตลอดชีพ",
    description: "ดูแลและให้ความช่วยเหลือหากพบปัญหาจากการใช้งานตลอดอายุการใช้งาน"
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">ขั้นตอนการทำงานที่ชัดเจน</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              เพื่อให้งานออกมาถูกใจคุณที่สุด เรามีขั้นตอนการทำงานที่เป็นระบบ ตรวจสอบได้ทุกขั้นตอน ตั้งแต่เริ่มจนถึงบริการหลังการขาย
            </p>
            <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100">
              <p className="text-emerald-800 font-medium italic">
                "เราอยากให้ผลงานของเรา เป็นงานที่ถูกใจคุณมากที่สุด"
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 grid gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-300 font-bold group-hover:border-emerald-500 group-hover:text-emerald-500 transition-all">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
