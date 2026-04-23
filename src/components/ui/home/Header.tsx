"use client";
import Navbar from "../../common/Navbar";
import Link from "next/link";

export default function Header() {
  return (
    <div className="relative">
      <Navbar />
      <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="pointer-events-none absolute -top-24 end-[-8%] h-80 w-80 rounded-full bg-amber-400/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 start-[-10%] h-96 w-96 rounded-full bg-indigo-400/15 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/75 via-slate-900/55 to-indigo-950/80"
            aria-hidden
          />
          <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 sm:px-6 py-28 md:py-36 mt-14 md:mt-16">
            <div className="w-full max-w-3xl text-center">
              <p className="inline-block text-xs sm:text-sm text-amber-100/95 mb-6 font-semibold tracking-wide border border-amber-400/35 rounded-full px-5 py-2 bg-black/25 backdrop-blur-md shadow-sm">
                شركة بنيان — عقارات ومقاولات عامة
              </p>

              <h1 className="text-[1.65rem] sm:text-4xl md:text-5xl lg:text-[3.15rem] font-bold text-white leading-[1.45] mb-6 drop-shadow-lg text-pretty px-1">
                نصنع مشاريع عمرانية راسخة بجودة التنفيذ وثقة الشراكة
              </h1>

              <div
                className="mx-auto mb-8 h-px w-24 bg-gradient-to-l from-transparent via-amber-400/90 to-transparent"
                aria-hidden
              />

              <p className="text-base sm:text-lg md:text-xl text-slate-100/95 max-w-2xl mx-auto leading-[1.85] mb-10 font-normal text-pretty px-1">
                نجمع الخبرة في التطوير العقاري والمقاولات العامة مع الالتزام
                الصارم بالمواصفات الفنية والجداول الزمنية. ننفّذ الأعمال بدقة
                وإشراف مستمر لنمنح شركاءنا مشاريع تدوم وتعزّز الثقة في كل مرحلة
                من التخطيط حتى التسليم.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto sm:mx-auto">
                <Link
                  href="/Projects"
                  className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-9 py-3.5 text-base font-bold text-white shadow-xl shadow-black/30 transition hover:bg-amber-500 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 min-h-[3rem]"
                >
                  مشاريعنا
                </Link>
                <Link
                  href="/Contact_us"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/95 bg-white/10 px-9 py-3.5 text-base font-bold text-white backdrop-blur-md transition hover:bg-white/20 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-h-[3rem]"
                >
                  تواصل معنا
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
