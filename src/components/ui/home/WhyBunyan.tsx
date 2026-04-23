"use client";

import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "جودة التنفيذ",
    description:
      "معايير واضحة للمواد والإشراف الميداني، وفحوصات قبل التسليم.",
    icon: "🏗️",
  },
  {
    title: "الالتزام بالمواعيد",
    description:
      "تخطيط مراحل واقعي ومتابعة يومية لتقليل التأخير غير المبرر.",
    icon: "⏱️",
  },
  {
    title: "خبرة ميدانية",
    description:
      "فرق هندسية وإدارية تعمل على مشاريع سكنية وتجارية متنوعة.",
    icon: "📐",
  },
  {
    title: "شفافية مع العميل",
    description:
      "تواصل واضح حول التغييرات والمستخلصات والمخاطر المحتملة.",
    icon: "🤝",
  },
];

export default function WhyBunyan() {
  return (
    <section className="bg-gradient-to-b from-indigo-950 to-indigo-900 text-white py-16 md:py-20 px-4 sm:px-6 lg:px-32">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title mb-4 text-center text-white md:text-4xl">
          لماذا بنيان؟
        </h2>
        <p className="text-center text-indigo-100/95 max-w-2xl mx-auto mb-12 leading-relaxed">
          نؤمن بأن سمعة الشركة تُبنى مشروعاً بعد مشروع — هذه محاور عملنا
          الأساسية.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => (
            <motion.div
              key={item.title}
              className="ui-card-hover flex flex-col items-center rounded-2xl border border-indigo-100/60 bg-white p-6 text-center text-indigo-950 shadow-lg"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <div className="text-4xl mb-3" aria-hidden>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
