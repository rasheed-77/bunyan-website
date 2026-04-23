"use client";

import Image from "next/image";

const BANNER_IMAGE = "/Image/Message Picture.jpg";

export default function VisionMission() {
  return (
    <section className="bg-slate-50 py-16 md:py-20 px-4 sm:px-6 lg:px-32">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 text-center mb-8">
          الرؤية والرسالة
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
          صورة من بيئة العمل والتنفيذ تعكس التزامنا بجودة الميدان والمقاولات.
        </p>

        <div className="relative w-full max-w-4xl mx-auto h-44 sm:h-52 md:h-60 rounded-2xl overflow-hidden shadow-lg mb-12 ring-1 ring-slate-200/80">
          <Image
            src={BANNER_IMAGE}
            alt="مشهد مرتبط بالتنفيذ والمقاولات — بنيان"
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-indigo-950/50 to-transparent pointer-events-none"
            aria-hidden
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-indigo-100/80 border-t-4 border-t-indigo-800">
            <h3 className="text-2xl font-bold text-indigo-950 mb-4">رؤيتنا</h3>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">
              أن نكون من الشركات الرائدة في التطوير العقاري والمقاولات في
              منطقتنا، بسمعة تُبنى على جودة التنفيذ وثقة العملاء على المدى
              الطويل.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-amber-100/80 border-t-4 border-t-amber-600">
            <h3 className="text-2xl font-bold text-indigo-950 mb-4">رسالتنا</h3>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">
              تنفيذ مشاريع تلتزم بالمواصفات والسلامة والبيئة، مع شفافية في
              التعامل وتقارير واضحة لصاحب المشروع، لنحقق تسليماً يفوق التوقعات
              حيثما أمكن ذلك ضمن الإطار التعاقدي.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
