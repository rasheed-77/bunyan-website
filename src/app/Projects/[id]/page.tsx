import Link from "next/link";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaLayerGroup,
  FaCheck,
  FaExclamationTriangle,
} from "react-icons/fa";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ProjectExtendedDetails from "@/components/projects/ProjectExtendedDetails";
import { getProjectById, getProjectCoverImage } from "@/data/projects";
import { CONTACT_WHATSAPP_URL } from "@/data/contact";

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = parseInt(params.id, 10);
  const project = Number.isFinite(id) ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto max-w-2xl px-4 py-28 text-center sm:py-32">
          <p className="mb-6 text-lg text-slate-700">المشروع غير موجود.</p>
          <Link
            href="/Projects"
            className="inline-flex min-h-[2.75rem] items-center justify-center rounded-xl bg-indigo-900 px-6 py-2.5 font-bold text-white transition hover:bg-indigo-800"
          >
            العودة إلى مشاريعنا
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const heroSrc = getProjectCoverImage(project);
  /** صور إضافية بعد صورة الغلاف لتجنب تكرار نفس الصورة في المعرض */
  const galleryImages = project.images.slice(1);
  const isImageFocusedLayout = project.visualLayout === "imageFocused";
  const hasExtendedSheet = Boolean(project.extendedSheet) && !isImageFocusedLayout;
  const simpleInfoCards = project.simpleInfoCards?.filter(
    (item) => item.label && item.value
  );
  const finalViewImages = project.finalViewGallery?.filter(Boolean) ?? [];

  return (
    <>
      <Navbar />

      <article className="min-h-[50vh] bg-white pb-16 sm:pb-20">
        {/* Hero — صورة عريضة للمشروع */}
        <div className="relative w-full bg-slate-900">
          <div
            className={`relative mx-auto w-full max-w-[1920px] ${
              hasExtendedSheet
                ? "h-[clamp(240px,48vw,380px)] sm:h-[clamp(280px,42vh,440px)] md:h-[clamp(300px,40vh,520px)]"
                : "h-[clamp(200px,42vw,320px)] sm:h-[clamp(240px,38vh,400px)] md:h-[clamp(260px,36vh,480px)]"
            }`}
          >
            <Image
              src={heroSrc}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div
              className={`absolute inset-0 ${
                hasExtendedSheet
                  ? "bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-900/20"
                  : "bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/10"
              }`}
              aria-hidden
            />
            {hasExtendedSheet && project.extendedSheet ? (
              <div className="absolute inset-0 z-10 flex flex-col justify-end">
                <div className="w-full bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-transparent pb-1 pt-24 sm:pt-28">
                  <div className="container mx-auto max-w-5xl px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-amber-200/95 backdrop-blur-sm sm:text-sm">
                        الرقم التعريفي
                      </span>
                      <span
                        className="rounded-lg border border-indigo-400/40 bg-indigo-950/60 px-4 py-2 font-mono text-lg font-bold tracking-wide text-white shadow-lg backdrop-blur-md sm:text-xl md:text-2xl"
                        dir="ltr"
                      >
                        {project.extendedSheet.referenceCode}
                      </span>
                    </div>
                    <h1 className="max-w-4xl text-3xl font-extrabold leading-[1.15] text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:text-[2.75rem]">
                      {project.title}
                    </h1>
                    <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/85 sm:text-base">
                      <span className="font-semibold text-amber-100/95">
                        {project.type}
                      </span>
                      <span className="hidden text-white/40 sm:inline" aria-hidden>
                        ·
                      </span>
                      <span className="text-white/80">{project.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="container mx-auto max-w-4xl px-4 pt-8 sm:px-6 sm:pt-10 lg:max-w-5xl lg:px-8">
          <nav className="mb-6 text-sm" aria-label="مسار التنقل">
            <ol className="flex flex-wrap items-center gap-2 text-slate-500">
              <li>
                <Link href="/" className="hover:text-indigo-800">
                  الرئيسية
                </Link>
              </li>
              <li aria-hidden className="text-slate-300">
                /
              </li>
              <li>
                <Link href="/Projects" className="hover:text-indigo-800">
                  مشاريعنا
                </Link>
              </li>
              <li aria-hidden className="text-slate-300">
                /
              </li>
              <li className="font-semibold text-indigo-950 line-clamp-1">
                {project.title}
              </li>
            </ol>
          </nav>

          <header className="mb-10 border-b border-slate-200 pb-8 sm:mb-12 sm:pb-10">
            {hasExtendedSheet ? (
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-2">
                <p className="flex items-start gap-2 text-base text-slate-600 sm:items-center">
                  <FaMapMarkerAlt
                    className="mt-1 shrink-0 text-amber-600 sm:mt-0"
                    aria-hidden
                  />
                  <span>{project.location}</span>
                </p>
                <p className="flex items-start gap-2 text-base text-slate-600 sm:items-center">
                  <FaLayerGroup
                    className="mt-1 shrink-0 text-indigo-700 sm:mt-0"
                    aria-hidden
                  />
                  <span className="font-semibold text-indigo-950">
                    {project.type}
                  </span>
                </p>
              </div>
            ) : (
              <>
                <h1 className="text-3xl font-bold leading-tight text-indigo-950 sm:text-4xl lg:text-[2.35rem]">
                  {project.title}
                </h1>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-2">
                  <p className="flex items-start gap-2 text-base text-slate-600 sm:items-center">
                    <FaMapMarkerAlt
                      className="mt-1 shrink-0 text-amber-600 sm:mt-0"
                      aria-hidden
                    />
                    <span>{project.location}</span>
                  </p>
                  <p className="flex items-start gap-2 text-base text-slate-600 sm:items-center">
                    <FaLayerGroup
                      className="mt-1 shrink-0 text-indigo-700 sm:mt-0"
                      aria-hidden
                    />
                    <span className="font-semibold text-indigo-950">
                      {project.type}
                    </span>
                  </p>
                </div>
              </>
            )}
          </header>

          {project.extendedSheet && !isImageFocusedLayout ? (
            <ProjectExtendedDetails
              sheet={project.extendedSheet}
              designGallery={project.designGallery}
              projectTitle={project.title}
              extendedSummaryText={
                project.extendedSheet.includeSummaryCard
                  ? project.shortDescription
                  : undefined
              }
            />
          ) : null}

          {isImageFocusedLayout && simpleInfoCards && simpleInfoCards.length > 0 ? (
            <section className="mb-12 sm:mb-14" aria-labelledby="quick-info-heading">
              <h2
                id="quick-info-heading"
                className="mb-4 text-xl font-bold text-indigo-950 sm:text-2xl"
              >
                معلومات المشروع
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {simpleInfoCards.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm ring-1 ring-black/[0.03]"
                  >
                    <p className="text-sm font-semibold text-slate-500">{item.label}</p>
                    <p className="mt-2 text-lg font-bold text-indigo-950">{item.value}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {isImageFocusedLayout && project.capacityText ? (
            <section className="mb-12 sm:mb-14" aria-labelledby="capacity-heading">
              <h2
                id="capacity-heading"
                className="mb-4 text-xl font-bold text-indigo-950 sm:text-2xl"
              >
                السعة الاستيعابية
              </h2>
              <div className="rounded-2xl border border-indigo-200/90 bg-gradient-to-br from-indigo-50 to-white p-6 shadow-sm ring-1 ring-indigo-950/[0.05] sm:p-7">
                <p className="text-2xl font-extrabold text-indigo-950 sm:text-3xl">
                  {project.capacityText}
                </p>
              </div>
            </section>
          ) : null}

          {project.finalViewNotice ? (
            <aside
              className="mb-12 overflow-hidden rounded-2xl border border-amber-200/90 bg-white shadow-md shadow-amber-900/5 ring-1 ring-indigo-950/[0.04]"
              role="note"
              aria-label="ملاحظة بخصوص الشكل النهائي"
            >
              <div className="border-s-4 border-amber-500 bg-gradient-to-l from-amber-50/90 via-orange-50/30 to-white px-5 py-5 sm:px-6 sm:py-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center self-start rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md ring-2 ring-amber-400/40"
                    aria-hidden
                  >
                    <FaExclamationTriangle className="h-7 w-7" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-indigo-950 sm:text-xl">
                        ملاحظة مهمة
                      </h3>
                      <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-900 ring-1 ring-amber-300/60">
                        الشكل النهائي
                      </span>
                    </div>
                    <p className="text-sm font-medium leading-[1.9] text-slate-700 sm:text-base">
                      {project.finalViewNotice}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          ) : null}

          {project.projectStatusSection ? (
            <section
              className="mb-12 sm:mb-14"
              aria-labelledby="project-status-heading"
            >
              <h2
                id="project-status-heading"
                className="mb-4 text-xl font-bold text-indigo-950 sm:text-2xl"
              >
                حالة المشروع
              </h2>
              <div className="overflow-hidden rounded-2xl border border-amber-200/90 bg-gradient-to-br from-amber-50 via-white to-orange-50/40 p-6 shadow-md ring-1 ring-amber-900/5 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                  <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-amber-300/90 bg-amber-500 px-4 py-2 text-sm font-bold text-white shadow-sm sm:text-base">
                    {project.projectStatusSection.badgeLabel}
                  </span>
                  <p className="text-base font-medium leading-[1.85] text-slate-800 sm:text-lg">
                    {project.projectStatusSection.body}
                  </p>
                </div>
              </div>
            </section>
          ) : null}

          <section className="mb-12 sm:mb-14" aria-labelledby="overview-heading">
            <h2
              id="overview-heading"
              className="mb-4 text-xl font-bold text-indigo-950 sm:text-2xl"
            >
              نبذة عن المشروع
            </h2>
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/90 p-5 sm:p-7">
              <p className="text-base leading-[1.9] text-slate-700 sm:text-lg">
                {project.description}
              </p>
            </div>
          </section>

          <section
            className="mb-12 sm:mb-14"
            aria-labelledby="works-heading"
          >
            <h2
              id="works-heading"
              className="mb-4 text-xl font-bold text-indigo-950 sm:text-2xl"
            >
              الأعمال المنفذة
            </h2>
            <ul className="space-y-3 sm:space-y-3.5">
              {project.completedWorks.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-4"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-900 text-xs text-white">
                    <FaCheck className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="text-[0.9375rem] leading-relaxed text-slate-700 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12 sm:mb-14" aria-labelledby="gallery-heading">
            <h2
              id="gallery-heading"
              className="mb-4 text-xl font-bold text-indigo-950 sm:text-2xl"
            >
              {isImageFocusedLayout ? "معرض الصور الرئيسية" : "معرض الصور"}
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {galleryImages.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100 shadow-sm ring-1 ring-black/5 transition hover:ring-indigo-200/80"
                >
                  <Image
                    src={src}
                    alt={`${project.title} — صورة ${index + 2} من المعرض`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
            {galleryImages.length === 0 && (
              <p className="rounded-xl border border-dashed border-slate-200 bg-slate-50/80 p-6 text-center text-slate-500">
                لا توجد صور إضافية لهذا المشروع حالياً.
              </p>
            )}
          </section>

          {isImageFocusedLayout && project.designGallery && project.designGallery.length > 0 ? (
            <section className="mb-12 sm:mb-14" aria-labelledby="design-gallery-heading">
              <h2
                id="design-gallery-heading"
                className="mb-4 text-xl font-bold text-indigo-950 sm:text-2xl"
              >
                المخططات والتصاميم
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {project.designGallery.map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100 shadow-sm ring-1 ring-black/5 transition hover:ring-indigo-200/80"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} — مخطط ${index + 1}`}
                      fill
                      className="bg-white p-2 object-contain transition-transform duration-500 ease-out hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {finalViewImages.length > 0 ? (
            <section
              className="mb-12 sm:mb-14"
              aria-labelledby="final-view-heading"
            >
              <h2
                id="final-view-heading"
                className="mb-2 text-xl font-bold text-indigo-950 sm:text-2xl"
              >
                الشكل النهائي بعد التنفيذ
              </h2>
              {project.finalViewNotice ? (
                <div className="mb-6 max-w-3xl overflow-hidden rounded-2xl border border-amber-200/90 bg-white shadow-sm ring-1 ring-indigo-950/[0.04] sm:mb-7">
                  <div className="border-s-4 border-amber-500 bg-gradient-to-l from-amber-50/90 via-orange-50/25 to-white px-4 py-4 sm:px-5 sm:py-5">
                    <div className="flex gap-3 sm:gap-4">
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-sm ring-1 ring-amber-300/50"
                        aria-hidden
                      >
                        <FaExclamationTriangle className="h-5 w-5" />
                      </span>
                      <p className="min-w-0 flex-1 text-sm font-medium leading-[1.9] text-slate-700 sm:text-base">
                        {project.finalViewNotice}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="mb-5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:mb-6 sm:text-base">
                  لقطات توضّح المشروع بعد إتمام أعمال التنفيذ، بما يعكس الجودة
                  النهائية للواجهات والتفاصيل.
                </p>
              )}
              {finalViewImages.length === 1 ? (
                <div className="relative h-[400px] w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-gray-100 shadow-lg ring-1 ring-black/[0.04] lg:h-[600px]">
                  <Image
                    src={finalViewImages[0]}
                    alt={`${project.title} — الشكل النهائي بعد التنفيذ`}
                    fill
                    className="object-contain object-center transition-transform duration-500 ease-out hover:scale-[1.01]"
                    sizes="100vw"
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                  {finalViewImages.map((src, index) => (
                    <div
                      key={`${src}-${index}`}
                      className="relative h-[400px] w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-gray-100 shadow-lg ring-1 ring-black/[0.04] transition hover:ring-indigo-200/70 lg:h-[600px]"
                    >
                      <Image
                        src={src}
                        alt={`${project.title} — الشكل النهائي ${index + 1}`}
                        fill
                        className="object-contain object-center transition-transform duration-500 ease-out hover:scale-[1.01]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>
          ) : null}

          <section className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-lg font-bold text-indigo-950">
                طلب استشارة أو عرض تنفيذ
              </h3>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                نرحب بمناقشة نطاق عمل مشابه أو مراحل تنفيذ جديدة وفق احتياجكم.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-end">
              <Link
                href="/Contact_us"
                className="inline-flex min-h-[2.75rem] w-full shrink-0 items-center justify-center rounded-xl bg-amber-600 px-6 py-2.5 text-center text-sm font-bold text-white shadow-md transition hover:bg-amber-500 sm:w-auto sm:min-w-[180px] sm:text-base"
              >
                تواصل معنا
              </Link>
              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[2.75rem] w-full items-center justify-center rounded-xl bg-emerald-600 px-6 py-2.5 text-center text-sm font-bold text-white shadow-md transition hover:bg-emerald-500 sm:w-auto sm:min-w-[180px] sm:text-base"
              >
                واتساب
              </a>
            </div>
          </section>

          <div className="mt-10 border-t border-slate-100 pt-8">
            <Link
              href="/Projects"
              className="font-bold text-indigo-800 transition hover:text-indigo-950 hover:underline"
            >
              العودة إلى قائمة المشاريع
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
