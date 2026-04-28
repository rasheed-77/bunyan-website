import React from "react";

const INTRO_VIDEO = "/Image/website%20video%20advertisment/0428.mp4";

export default function IntroVideo() {
  return (
    <section className="bg-light py-20 md:py-24 px-4 sm:px-6 lg:px-32 border-b border-slate-200/70">
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold text-primary tracking-wide mb-3">
          فيديو تعريفي
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-4">
          فيديو تعريفي عن بنيان
        </h2>
        <p className="text-slate-700 text-center text-base md:text-lg mb-10">
          لمحة مرئية عن أعمالنا ومشاريعنا في العقارات والمقاولات العامة
        </p>

        <div className="w-full max-w-5xl mx-auto rounded-2xl bg-white p-3 md:p-4 shadow-sm ring-1 ring-slate-200/80 overflow-hidden">
          <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-black">
            <video
              className="w-full h-full object-contain"
              controls
              preload="metadata"
              playsInline
            >
              <source src={INTRO_VIDEO} type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
