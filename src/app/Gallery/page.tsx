import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "معرض الصور | بنيان للعقارات والمقاولات العامة",
  description: "معرض صور مشاريع وأعمال بنيان — قيد التحديث",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 px-4 pt-24 pb-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">
            معرض الصور
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            هذا القسم مُجهّز لعرض صور المشاريع والتنفيذ الفعلي. سيتم تحديثه
            قريباً بالصور الحقيقية للأعمال المنجزة.
          </p>
          <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white/80 py-16 px-6 text-slate-500">
            <p className="font-medium text-base md:text-lg">
              مساحة مخصصة لمعرض الصور — جاهزة لاستقبال الصور غداً
            </p>
            <p className="text-sm mt-3 text-slate-400">
              (لا يتم عرض صور وهمية هنا حتى يتم الرفع)
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
