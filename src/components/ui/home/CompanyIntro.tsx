"use client";

import React from "react";
import Image from "next/image";

const ABOUT_IMAGE = "/Image/Image (1).jpg";

export default function CompanyIntro() {
  return (
    <section className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-32 border-b border-slate-100">
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold text-amber-700 tracking-wide mb-3">
          شركة بنيان
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 text-center mb-10">
          نبذة عن الشركة
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-5 text-slate-700 text-lg leading-relaxed text-center lg:text-justify order-2 lg:order-1">
            <p>
              <strong className="text-indigo-900">
                بنيان للعقارات والمقاولات العامة
              </strong>{" "}
              نقدّم حلولاً متكاملة من التخطيط والتصميم التنفيذي حتى التسليم
              النهائي، مع التزام صارم بالمواصفات الفنية والسلامة والمواعيد
              المتفق عليها.
            </p>
            <p>
              نخدم أصحاب المشاريع السكنية والتجارية والمؤسسات التي تبحث عن شريك
              تنفيذي موثوق، يجمع بين الخبرة الميدانية والإدارة المنظمة
              للموردين والعقود والمستخلصات.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] max-h-[420px] mx-auto rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200/80 order-1 lg:order-2">
            <Image
              src={ABOUT_IMAGE}
              alt="أعمال بنيان — نبذة عن الشركة"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
