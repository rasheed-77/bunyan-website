import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] bg-slate-50/80 pt-28 sm:pt-32">
        <section className="container mx-auto max-w-3xl px-4 pb-16 text-center sm:px-6 lg:px-8">
          <p className="mb-4 inline-flex rounded-full border border-amber-300/80 bg-amber-50 px-4 py-1 text-sm font-bold text-amber-800">
            404
          </p>
          <h1 className="section-title mb-4">الصفحة غير موجودة</h1>
          <p className="section-subtitle mx-auto mb-8 max-w-2xl text-base sm:text-lg">
            الصفحة التي تبحث عنها غير متاحة حالياً. يمكنكم العودة إلى الصفحة
            الرئيسية أو استعراض مشاريعنا للاطلاع على أحدث أعمال شركة بنيان.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex min-h-[2.9rem] items-center justify-center rounded-xl bg-indigo-900 px-6 py-2.5 text-sm font-bold text-white shadow-md hover:bg-indigo-800 sm:text-base"
            >
              العودة للرئيسية
            </Link>
            <Link
              href="/Projects"
              className="inline-flex min-h-[2.9rem] items-center justify-center rounded-xl border border-indigo-200 bg-white px-6 py-2.5 text-sm font-bold text-indigo-900 shadow-sm hover:bg-indigo-50 sm:text-base"
            >
              تصفح المشاريع
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
