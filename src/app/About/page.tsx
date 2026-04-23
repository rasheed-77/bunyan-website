"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Team from "@/components/ui/About/Team";

const ABOUT_HERO_IMAGE = "/Image/who are we 1.png";
const ABOUT_STORY_IMAGE = "/Image/who are we 2.png";
const ABOUT_COMMITMENT_IMAGE = "/Image/who are we 3.png";
const ABOUT_GALLERY_IMAGES = [
  "/Image/who are we 4.png",
  "/Image/who are we 5.png",
  "/Image/who are we 6.png",
];

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="text-center lg:text-start">
              <h1 className="text-4xl sm:text-5xl font-bold text-indigo-950 mb-4">
                من نحن
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                شركة{" "}
                <strong className="text-indigo-900">
                  بنيان للعقارات والمقاولات العامة
                </strong>{" "}
                — نجمع بين الخبرة الميدانية والتخطيط
                الدقيق لتقديم مشاريع تُنجز وفق أعلى معايير الجودة والسلامة،
                ونبني مع شركائنا علاقات طويلة الأمد مبنية على الثقة والشفافية.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] max-h-[380px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200/80">
              <Image
                src={ABOUT_HERO_IMAGE}
                alt="من نحن — بنيان للعقارات والمقاولات العامة"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-950 mb-4">
                قصتنا
              </h2>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                انطلقت بنيان من رؤية واضحة: تقديم أعمال إنشاء وتطوير عقاري يعكس
                احتياج السوق المحلي ويطابق أفضل الممارسات العالمية. نمونا بفضل
                فريق متكامل وشراكات موثوقة، وبحثٍ مستمر عن حلول عملية لكل تحدٍ
                في موقع العمل.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                اليوم، نواصل توسيع محفظة مشاريعنا في التطوير السكني والتجاري
                والمقاولات العامة، مع الالتزام بالمواعيد والمواصفات التعاقدية،
                لأن سمعتنا تُبنى مشروعاً بعد مشروع.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-80 lg:order-2 rounded-2xl overflow-hidden shadow-lg ring-1 ring-slate-200/80">
              <Image
                src={ABOUT_STORY_IMAGE}
                alt="قصة شركة بنيان"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-64 sm:h-80 lg:order-1 rounded-2xl overflow-hidden shadow-lg ring-1 ring-slate-200/80">
              <Image
                src={ABOUT_COMMITMENT_IMAGE}
                alt="رسالة شركة بنيان"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:order-2 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-950 mb-4">
                التزامنا
              </h2>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                أن نكون الخيار الموثوق للتطوير العقاري والمقاولات في منطقتنا، من
                خلال تنفيذ يلتزم بالجودة والابتكار في التصميم والتشغيل، مع
                احترام البيئة وسلامة العاملين والمجتمع.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                نؤمن بالاستدامة المالية والبيئية، والنزاهة في كل تعامل، والتحسين
                المستمر لأنظمة الإدارة والإشراف لضمان رضا العملاء في كل مرحلة.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-950 mb-6 text-center">
            هيكلنا والعمل
          </h2>
          <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10 text-slate-700 leading-relaxed text-center md:text-justify">
            <p className="mb-4">
              نعتمد هيكلاً تنظيمياً يجمع بين الإدارة الهندسية والمالية والميدانية،
              مع فرق تنفيذ متخصصة حسب نوع المشروع. لا نعرض على الموقع أسماء أو
              صوراً شخصية للفريق إلا عند الحاجة الرسمية والموافقة — والتركيز
              هنا على سجل الأعمال والجودة والالتزام.
            </p>
            <p>
              للاستفسارات الإعلامية أو الشراكات، يرجى التواصل عبر صفحة{" "}
              <Link href="/Contact_us" className="font-bold text-indigo-800 underline">
                تواصل معنا
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ABOUT_GALLERY_IMAGES.map((src, index) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-lg ring-1 ring-slate-200/80"
              >
                <Image
                  src={src}
                  alt={`من أعمال بنيان — صورة واقعية ${index + 4}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        <Team />
      </div>
      <Footer />
    </>
  );
}
