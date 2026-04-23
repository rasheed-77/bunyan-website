import React from "react";

export default function Team() {
  return (
    <section className="text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-950 mb-4">
        قيمنا
      </h2>
      <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
        قيمنا ليست شعارات فقط — بل التزام يومي يوجّه قراراتنا في الموقع، وفي
        التعامل مع العملاء والموردين والمجتمع.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-indigo-950 mb-2">النزاهة</h3>
          <p className="text-slate-600 leading-relaxed">
            الشفافية في العروض والعقود والمستخلصات، وبناء الثقة من خلال الوفاء
            بالتعهدات.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-indigo-950 mb-2">الابتكار</h3>
          <p className="text-slate-600 leading-relaxed">
            اعتماد حلول هندسية وإدارية تُحسّن الكفاءة وتقلل الهدر دون المساس
            بالجودة.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-indigo-950 mb-2">التميّز</h3>
          <p className="text-slate-600 leading-relaxed">
            السعي لأن يكون كل مشروع مرجعاً في التنفيذ والتسليم، وفق أعلى معايير
            السلامة والمواصفات.
          </p>
        </div>
      </div>
    </section>
  );
}
