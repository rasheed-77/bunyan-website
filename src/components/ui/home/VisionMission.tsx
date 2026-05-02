"use client";

import Image from "next/image";

const BANNER_IMAGE = "/Image/Message Picture.jpg";

export default function VisionMission() {
  return (
    <section className="bg-white py-20 md:py-24 px-4 sm:px-6 lg:px-32">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-8">
          الرؤية والرسالة
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
          صورة من بيئة العمل والتنفيذ تعكس التزامنا بجودة الميدان والمقاولات.
        </p>

        <div className="group/banner relative mx-auto mb-12 h-44 w-full max-w-4xl overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200/80 transition-shadow duration-300 ease-in-out hover:shadow-lg sm:h-52 md:h-60">
          <Image
            src={BANNER_IMAGE}
            alt="مشهد مرتبط بالتنفيذ والمقاولات — بنيان"
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover/banner:scale-[1.02]"
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-dark/45 to-transparent pointer-events-none"
            aria-hidden
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="ui-card-hover rounded-2xl border border-slate-200/80 border-t-4 border-t-primary bg-light p-8 shadow-sm md:p-10">
            <h3 className="text-2xl font-bold text-dark mb-4">رؤيتنا</h3>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">
              أن نكون من الشركات الرائدة في التطوير العقاري والمقاولات في
              منطقتنا، بسمعة تُبنى على جودة التنفيذ وثقة العملاء على المدى
              الطويل.
            </p>
          </div>
          <div className="ui-card-hover rounded-2xl border border-slate-200/80 border-t-4 border-t-primary bg-light p-8 shadow-sm md:p-10">
            <h3 className="text-2xl font-bold text-dark mb-4">رسالتنا</h3>
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
