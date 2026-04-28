"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { FaCheckCircle, FaUserTie, FaCog, FaChartLine } from "react-icons/fa";

const services = [
  {
    title: "المقاولات العامة",
    desc: "تنفيذ الهياكل الإنشائية والأساسات والأعمال المدنية وفق المخططات المعتمدة والمواصفات الفنية المعتمدة.",
  },
  {
    title: "التطوير العقاري",
    desc: "تخطيط وتسليم مجمعات سكنية وتجارية متكاملة، من الفكرة حتى التسليم النهائي للوحدات.",
  },
  {
    title: "الترميم والتوسعة",
    desc: "إحياء المباني القائمة، توسعة الوحدات، وتحديث الأنظمة الكهروميكانيكية بأقل تعطيل للسكان.",
  },
  {
    title: "الإشراف الهندسي",
    desc: "مكاتب فنية في الموقع لمتابعة الجودة، الجداول الزمنية، ومطابقة المواد للمواصفات.",
  },
  {
    title: "إدارة المشاريع",
    desc: "تنسيق العقود، الموردين، والمستخلصات مع تقارير دورية لصاحب المشروع.",
  },
  {
    title: "الصيانة وما بعد التسليم",
    desc: "عقود صيانة دورية للمنشآت التجارية والسكنية الكبيرة لضمان استمرارية التشغيل.",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            خدماتنا
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            نقدّم حلولاً متكاملة في التطوير العقاري والمقاولات العامة، بفريق
            مهندسين وإداريين يركز على الجودة والالتزام بالمواعيد ورضا العميل.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-md hover:shadow-primary/15 hover:border-primary/60"
            >
              <Image
                src="/Image/Message Picture.jpg"
                alt=""
                width={500}
                height={300}
                className="rounded-lg mb-4 object-cover w-full h-48"
              />
              <h2 className="text-2xl font-bold text-dark mb-2">
                {service.title}
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <Link
                href="/Contact_us"
                className="inline-block text-center w-full text-lg font-bold rounded-lg py-3 px-4 text-dark bg-primary hover:bg-[#c8a574] transition duration-300"
              >
                اطلب استشارة
              </Link>
            </div>
          ))}
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-dark mb-6">
            لماذا بنيان؟
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            نجمع بين الخبرة المحلية والمعايير الدولية في الإدارة والسلامة، مع
            سجل مشاريع يمكن الرجوع إليه، وفريق يتحمّل المسؤولية في كل مرحلة.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaUserTie,
                title: "كفاءات معتمدة",
                description:
                  "مهندسون ومشرفون بخبرة ميدانية في المشاريع السكنية والتجارية.",
              },
              {
                icon: FaCog,
                title: "حلول مرنة",
                description:
                  "عقود واضحة وخيارات تنفيذ تناسب طبيعة المشروع وميزانيتك.",
              },
              {
                icon: FaCheckCircle,
                title: "التزام بالجودة",
                description:
                  "فحص للمواد والمراحل قبل الاعتماد، وتوثيق للتسليمات.",
              },
              {
                icon: FaChartLine,
                title: "نتائج قابلة للقياس",
                description:
                  "جداول زمنية ومؤشرات أداء نتابعها معكم بشفافية.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm text-center border border-slate-200 transition-all duration-300 hover:shadow-md hover:shadow-primary/15 hover:border-primary/60"
              >
                <item.icon className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-dark mb-10 text-center">
            آلية العمل
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-4">
            {[
              {
                step: "١",
                title: "الاستشارة",
                desc: "استلام الفكرة أو المخطط الأولي وتحديد النطاق والميزانية التقريبية.",
              },
              {
                step: "٢",
                title: "الدراسة والعرض",
                desc: "دراسة جدوى فنية ومالية وعرض شامل للمدة والتعاقد.",
              },
              {
                step: "٣",
                title: "التنفيذ",
                desc: "إدارة الموقع، الموردين، والجودة حتى الاختبارات النهائية.",
              },
              {
                step: "٤",
                title: "التسليم والدعم",
                desc: "تسليم رسمي مع مستندات، وخيارات صيانة أو متابعة حسب الاتفاق.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-1 mb-8 md:mb-0"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-dark text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-center text-slate-600 max-w-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-light p-8 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-3xl sm:text-4xl font-semibold text-dark mb-6 text-center">
            جاهزون لبدء مشروعك؟
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
            تواصل معنا لتحديد موعد استشارة أو زيارة مبدئية، وفريق بنيان يسعده
            الإجابة عن استفساراتكم.
          </p>
          <div className="text-center">
            <Link
              href="/Contact_us"
              className="inline-block text-xl font-bold rounded-lg py-3 px-8 text-dark bg-primary hover:bg-[#c8a574] transition duration-300"
            >
              تواصل معنا الآن
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
