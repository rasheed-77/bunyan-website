"use client";

import React from "react";
import Link from "next/link";
import {
  FaHardHat,
  FaBuilding,
  FaTools,
  FaClipboardCheck,
  FaFileContract,
} from "react-icons/fa";

const items = [
  {
    title: "المقاولات العامة",
    desc: "هياكل إنشائية، أساسات، وأعمال مدنية وفق المخططات المعتمدة.",
    icon: FaHardHat,
  },
  {
    title: "التطوير العقاري",
    desc: "تخطيط وتنفيذ مجمعات سكنية وتجارية حتى التسليم.",
    icon: FaBuilding,
  },
  {
    title: "الترميم والتوسعة",
    desc: "تحديث المباني القائمة وتوسعة الوحدات بأقل تعطيل ممكن.",
    icon: FaTools,
  },
  {
    title: "الإشراف وإدارة المشاريع",
    desc: "متابعة ميدانية، جودة، ومستخلصات وتنسيق مع الموردين.",
    icon: FaClipboardCheck,
  },
  {
    title: "إعداد العقود والاتفاقيات",
    desc: "إعداد ومراجعة كافة العقود والاتفاقيات الخاصة بالمشاريع، بما يضمن وضوح الالتزامات وحفظ حقوق جميع الأطراف.",
    icon: FaFileContract,
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-32">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="section-title mb-3 text-3xl md:text-4xl">
              خدماتنا
            </h2>
            <p className="section-subtitle max-w-2xl">
              نقدّم حزمة خدمات تناسب مشاريع المقاولات والتطوير العقاري؛ يمكنكم
              الاطلاع على التفاصيل الكاملة في صفحة الخدمات.
            </p>
          </div>
          <Link
            href="/Services"
            className="inline-flex justify-center items-center shrink-0 rounded-xl bg-indigo-900 text-white font-bold px-6 py-3 hover:bg-indigo-800 transition shadow-md"
          >
            جميع الخدمات
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="ui-card-hover rounded-2xl border border-slate-200 bg-slate-50/80 p-6 md:p-8 hover:border-indigo-200"
            >
              <item.icon className="text-3xl text-indigo-800 mb-4" />
              <h3 className="text-xl font-bold text-indigo-950 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
