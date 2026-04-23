import type { ReactNode } from "react";
import Image from "next/image";
import type { ProjectExtendedSheet } from "@/data/projects";

type Props = {
  sheet: ProjectExtendedSheet;
  designGallery?: string[];
  projectTitle: string;
  /** يُعرض في بطاقة «الوصف المختصر» عند تفعيل `includeSummaryCard` */
  extendedSummaryText?: string;
};

function InfoCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-md shadow-slate-900/[0.04] ring-1 ring-black/[0.02] transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-900/[0.06] hover:ring-indigo-100 sm:p-6">
      <h3 className="mb-4 flex items-center gap-2.5 border-b border-slate-100 pb-3 text-base font-bold text-indigo-950 sm:text-lg">
        {icon ? (
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-900 text-white shadow-inner shadow-indigo-950/20"
            aria-hidden
          >
            {icon}
          </span>
        ) : null}
        <span>{title}</span>
      </h3>
      {children}
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-slate-100 py-3 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <dt className="text-sm font-semibold text-slate-600">{label}</dt>
      <dd className="text-base font-bold text-indigo-950 sm:text-end">{value}</dd>
    </div>
  );
}

export default function ProjectExtendedDetails({
  sheet,
  designGallery,
  projectTitle,
  extendedSummaryText,
}: Props) {
  const showPlanBlock = Boolean(sheet.planType || sheet.documentDate);
  const showApprovals = Boolean(
    sheet.officialApprovals && sheet.officialApprovals.length > 0
  );

  return (
    <>
      <section
        className="mb-12 sm:mb-14"
        aria-labelledby="project-spec-heading"
      >
        {sheet.showIdentityStrip ? (
          <div className="mb-6 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/90 to-white p-5 shadow-sm ring-1 ring-indigo-950/5 sm:p-6">
            <dl className="grid gap-4 sm:grid-cols-2">
              <SpecRow label="اسم المشروع" value={projectTitle} />
              <div className="flex flex-col gap-0.5 border-b border-slate-100 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:border-0 sm:py-0">
                <dt className="text-sm font-semibold text-slate-600">
                  الرقم التعريفي
                </dt>
                <dd
                  className="font-mono text-base font-bold text-indigo-950 sm:text-end sm:text-lg"
                  dir="ltr"
                >
                  {sheet.referenceCode}
                </dd>
              </div>
            </dl>
          </div>
        ) : null}

        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <h2
            id="project-spec-heading"
            className="text-xl font-bold text-indigo-950 sm:text-2xl"
          >
            بيانات المشروع
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex min-h-[2.25rem] items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-bold text-indigo-950">
              {sheet.floorsCount} أدوار
            </span>
            <span className="inline-flex min-h-[2.25rem] items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-bold text-indigo-950">
              {sheet.panelsCount} لوحات
            </span>
            <span className="inline-flex min-h-[2.25rem] items-center rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-sm font-bold text-indigo-950">
              لوحة {sheet.panelNumber}
            </span>
          </div>
        </div>

        <div
          className={`grid gap-4 sm:gap-5 ${
            sheet.location ? "lg:grid-cols-3" : "lg:grid-cols-2"
          }`}
        >
          {sheet.location ? (
            <InfoCard
              title="الموقع"
              icon={
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                  aria-hidden
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 0 1 0-128z" />
                </svg>
              }
            >
              <dl>
                {sheet.location.governorate ? (
                  <SpecRow label="المحافظة" value={sheet.location.governorate} />
                ) : null}
                {sheet.location.directorate ? (
                  <SpecRow
                    label="المديرية"
                    value={sheet.location.directorate}
                  />
                ) : null}
                {sheet.location.area ? (
                  <SpecRow label="المنطقة" value={sheet.location.area} />
                ) : null}
              </dl>
            </InfoCard>
          ) : null}

          <InfoCard
            title={sheet.landCardTitle ?? "بيانات الأرض والمخطط"}
            icon={
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 448 512"
                aria-hidden
              >
                <path d="M384 96V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3H384zM64 416c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V160H256c-17.7 0-32-14.3-32-32V32H96C78.3 32 64 46.3 64 64V416zM200 232h-48v-48c0-13.3-10.7-24-24-24s-24 10.7-24 24v48H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48h48c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
              </svg>
            }
          >
            <dl>
              {sheet.land.landNumber ? (
                <SpecRow label="رقم الأرضية" value={sheet.land.landNumber} />
              ) : null}
              {sheet.land.block ? (
                <SpecRow label="البلوك" value={sheet.land.block} />
              ) : null}
              {sheet.land.neighborUnit ? (
                <SpecRow label="وحدة الجوار" value={sheet.land.neighborUnit} />
              ) : null}
              {sheet.land.groupNumber ? (
                <SpecRow label="مجموعة رقم" value={sheet.land.groupNumber} />
              ) : null}
              {sheet.land.landArea ? (
                <SpecRow label="المساحة" value={sheet.land.landArea} />
              ) : null}
              {sheet.land.totalBuiltArea ? (
                <SpecRow
                  label="إجمالي المساحة البنائية للطابقين"
                  value={sheet.land.totalBuiltArea}
                />
              ) : null}
              {sheet.land.additionalNumber ? (
                <SpecRow label="رقم إضافي" value={sheet.land.additionalNumber} />
              ) : null}
            </dl>
          </InfoCard>

          <InfoCard
            title={sheet.footprintCardTitle ?? "المساحة (أبعاد المسقط)"}
            icon={
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 512 512"
                aria-hidden
              >
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 168h48V120H120v80zm0 104h48V224H120v80zm104-104h48V224H224v80zm-104 72h48v80H120V352zm104 0h48v80H224V352zm152-72h48v80H376V280zm0 104h48v80H376V384zm0-200h48v80H376V184z" />
              </svg>
            }
          >
            <div className="flex flex-1 flex-col justify-center py-2">
              <p className="text-sm font-semibold text-slate-600">
                {sheet.footprintSubtitle ?? "الأبعاد المعتمدة للمسقط"}
              </p>
              <p className="mt-3 text-2xl font-extrabold tracking-tight text-indigo-950 sm:text-3xl">
                <span className="font-mono tabular-nums" dir="ltr">
                  {sheet.footprintDimensions}
                </span>
                <span className="me-2 text-base font-semibold text-slate-500 sm:text-lg">
                  م
                </span>
              </p>
            </div>
          </InfoCard>
        </div>

        {(showPlanBlock || showApprovals || sheet.includeSummaryCard) && (
          <div className="mt-6 grid gap-4 sm:gap-5 lg:grid-cols-3">
            {showPlanBlock ? (
              <InfoCard title="المخطط والمرجع الزمني">
                <dl>
                  {sheet.planType ? (
                    <SpecRow label="نوع المخطط" value={sheet.planType} />
                  ) : null}
                  {sheet.drawingScale ? (
                    <SpecRow label="مقياس الرسم" value={sheet.drawingScale} />
                  ) : null}
                  {sheet.documentDate ? (
                    <>
                      <SpecRow label="السنة" value={sheet.documentDate.year} />
                      {sheet.documentDate.month ? (
                        <SpecRow label="الشهر" value={sheet.documentDate.month} />
                      ) : null}
                    </>
                  ) : null}
                </dl>
              </InfoCard>
            ) : null}

            {showApprovals ? (
              <InfoCard title="الاعتمادات الرسمية">
                <ul className="space-y-2">
                  {sheet.officialApprovals?.map((approval) => (
                    <li
                      key={approval}
                      className="rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2 text-sm font-semibold text-slate-700"
                    >
                      {approval}
                    </li>
                  ))}
                </ul>
              </InfoCard>
            ) : null}

            {sheet.includeSummaryCard && extendedSummaryText ? (
              <InfoCard title="الوصف المختصر">
                <p className="text-sm leading-[1.9] text-slate-700 sm:text-base">
                  {extendedSummaryText}
                </p>
              </InfoCard>
            ) : null}
          </div>
        )}
      </section>

      {designGallery && designGallery.length > 0 ? (
        <section
          className="mb-12 sm:mb-14"
          aria-labelledby="designs-heading"
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-indigo-50/30 p-6 shadow-sm ring-1 ring-slate-900/[0.03] sm:p-8 lg:p-10">
            <div
              className="pointer-events-none absolute -start-24 -top-24 h-48 w-48 rounded-full bg-indigo-200/25 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 -end-16 h-40 w-40 rounded-full bg-amber-200/20 blur-3xl"
              aria-hidden
            />

            <div className="relative">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex items-start gap-4">
                  <span
                    className="mt-1 hidden h-12 w-1.5 shrink-0 rounded-full bg-indigo-600 sm:block"
                    aria-hidden
                  />
                  <div>
                    <h2
                      id="designs-heading"
                      className="text-2xl font-extrabold text-indigo-950 sm:text-3xl"
                    >
                      المخططات والتصاميم
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                      معرض للوثائق التصميمية والمخططات المرتبطة بالمشروع، بجودة
                      عرض مناسبة للشاشات المختلفة.
                    </p>
                  </div>
                </div>
              </div>

              <ul className="relative grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                {designGallery.map((src, index) => (
                  <li key={`${src}-${index}`} className="min-w-0">
                    <figure className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md shadow-slate-900/[0.06] ring-1 ring-black/[0.03] transition duration-300 ease-out hover:-translate-y-1 hover:border-indigo-200/80 hover:shadow-xl hover:shadow-indigo-900/10">
                      <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-slate-50 to-white">
                        <Image
                          src={src}
                          alt={`${projectTitle} — مخطط أو تصميم ${index + 1}`}
                          fill
                          className="object-contain p-3 transition duration-500 ease-out group-hover:scale-[1.02] sm:p-4"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <figcaption className="border-t border-slate-100 bg-slate-50/80 px-4 py-2.5 text-center text-xs font-semibold text-slate-500">
                        تصميم {index + 1}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
