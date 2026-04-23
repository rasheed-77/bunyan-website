/**
 * مشاريع شركة بنيان — ملف البيانات للواجهة
 *
 * القائمة أدناه تحتوي فقط على المشاريع المرتبطة بصور حقيقية تحت
 * `public/Image/First Project` … `sixth project`.
 *
 * تسمية الحقول البرمجية ثابتة؛ التعليقات العربية توضّح معنى كل حقل في الواجهة.
 */

/** موقع مفصّل — يُعرض في صفحة التفاصيل عند وجود `extendedSheet` */
export interface ProjectLocationSheet {
  governorate?: string;
  directorate?: string;
  /** إن وُجدت تُعرض صف «المنطقة» */
  area?: string;
}

/** بيانات قطعة الأرض والمخطط — مع `extendedSheet` */
export interface ProjectLandSheet {
  landNumber?: string;
  /** إن وُجد يُعرض صف «البلوك» */
  block?: string;
  neighborUnit?: string;
  groupNumber?: string;
  /** إن وُجد يُعرض صف «رقم إضافي» */
  additionalNumber?: string;
  /** مساحة الأرض، مثال: 160 م² */
  landArea?: string;
  /** إجمالي المساحة البنائية، مثال: 320 م² */
  totalBuiltArea?: string;
}

/** بطاقة بيانات موسّعة (مشروع محدد مثل المعرف 1) */
export interface ProjectExtendedSheet {
  referenceCode: string;
  floorsCount: number;
  panelsCount: number;
  panelNumber: number;
  /** إن وُجدت تُعرض بطاقة «الموقع» */
  location?: ProjectLocationSheet;
  land: ProjectLandSheet;
  /** أبعاد المسقط أو المساحة مع الخدمات، مثال: 4.5 × 14 */
  footprintDimensions: string;
  /** عنوان بطاقة المساحة — الافتراضي في الواجهة «المساحة (أبعاد المسقط)» */
  footprintCardTitle?: string;
  /** سطر توضيحي تحت الأبعاد في بطاقة المساحة */
  footprintSubtitle?: string;
  /** بطاقة هوية (اسم المشروع + الرقم التعريفي) في أعلى القسم */
  showIdentityStrip?: boolean;
  /** عرض بطاقة الوصف المختصر من `shortDescription` */
  includeSummaryCard?: boolean;
  /** نوع المخطط */
  planType?: string;
  /** مقياس الرسم */
  drawingScale?: string;
  /** تاريخ المستند */
  documentDate?: { year: string; month?: string };
  /** عنوان بطاقة الأرض — الافتراضي «بيانات الأرض والمخطط» */
  landCardTitle?: string;
  /** جهات الاعتماد الرسمية */
  officialApprovals?: string[];
}

export interface ProjectRecord {
  /** المعرف الرقمي — يُستخدم في المسار `/Projects/[id]` */
  id: number;
  /** عنوان المشروع — يظهر في البطاقة وعنوان الصفحة */
  title: string;
  /** موقع المشروع — يظهر تحت العنوان */
  location: string;
  /** نوع المشروع — يظهر كشارة أو سطر نوع */
  type: string;
  /** وصف مختصر — قائمة المشاريع والبطاقات */
  shortDescription: string;
  /** نبذة مفصلة — صفحة تفاصيل المشروع */
  description: string;
  /** الأعمال المنفذة — قائمة نقطية في صفحة التفاصيل */
  completedWorks: string[];
  /** مسارات الصور من مجلد `public` — الأولى غلاف المشروع */
  images: string[];
  /** بيانات تعريف موسّعة — اختيارية؛ تُعرض في صفحة التفاصيل فقط */
  extendedSheet?: ProjectExtendedSheet;
  /** مخططات وتصاميم إضافية — اختيارية */
  designGallery?: string[];
  /** صور الشكل النهائي بعد التنفيذ — مسارات تحت مجلد `last view` لكل مشروع */
  finalViewGallery?: string[];
  /** شارة على بطاقة المشروع في صفحة قائمة المشاريع */
  cardStatusBadge?: string;
  /** قسم «حالة المشروع» في صفحة التفاصيل */
  projectStatusSection?: {
    badgeLabel: string;
    body: string;
  };
  /** ملاحظة تتعلق بالشكل النهائي (تنبيه في الصفحة ونص داخل القسم) */
  finalViewNotice?: string;
  /** نمط عرض مبسّط يركز على الوصف والصور */
  visualLayout?: "default" | "imageFocused";
  /** بطاقات معلومات مختصرة للمشاريع التي لا تحتاج بيانات تفصيلية كثيرة */
  simpleInfoCards?: Array<{ label: string; value: string }>;
  /** السعة الاستيعابية عند الحاجة لإبرازها في قسم مستقل */
  capacityText?: string;
}

export const PROJECT_RECORDS: ProjectRecord[] = [
  // ─── نموذج 1 — استبدال ───
  {
    id: 1,
    title: "مبنى سكني تجاري",
    location: "عدن — الشيخ عثمان — شارع ظفار",
    type: "سكني تجاري",
    shortDescription:
      "مبنى متعدد الطوابق يجمع وحدات سكنية واستخدامات تجارية في موقع حضري بمديرية الشيخ عثمان، وفق مخطط قطعة أرض منظّم.",
    description:
      "يضم المشروع سبعة أدوار ضمن نطاق سكني تجاري، مع مراعاة التكامل بين الوحدات السكنية والمحال التجارية في الواجهات والمداخل والخدمات المشتركة. تم توثيق الموقع والقطعة وفق بيانات الأرض والمخطط المعتمدة، بما يدعم المتابعة الهندسية والتنظيمية للمشروع بشكل واضح ومنظم.",
    completedWorks: [
      "الدراسات التخطيطية والربط مع مخطط القطعة واللوحات التنظيمية",
      "التصميم المعماري لتوزيع الأدوار والوحدات السكنية والتجارية",
      "التنسيق مع متطلبات البنية التحتية والخدمات في المنطقة",
      "إعداد وثائق العرض والمخططات التصميمية للمشروع",
      "متابعة جودة التنفيذ والتسليم حسب البرنامج الزمني المتفق عليه",
    ],
    images: [
      "/Image/First Project/Display picture.png",
      "/Image/First Project/picture.jpg",
      "/Image/First Project/PHOTO-2026-02-12-11-27-50.jpg",
      "/Image/First Project/PHOTO-2026-02-12-11-27-51 2.jpg",
      "/Image/First Project/PHOTO-2026-02-12-11-27-51 3.jpg",
      "/Image/First Project/PHOTO-2026-02-12-11-27-51.jpg",
      "/Image/First Project/PHOTO-2026-02-12-11-27-52 2.jpg",
      "/Image/First Project/PHOTO-2026-02-12-11-27-52 3.jpg",
      "/Image/First Project/PHOTO-2026-02-12-11-27-52.jpg",
    ],
    extendedSheet: {
      referenceCode: "ARCH-1134",
      floorsCount: 7,
      panelsCount: 9,
      panelNumber: 1,
      location: {
        governorate: "عدن",
        directorate: "الشيخ عثمان",
        area: "شارع ظفار",
      },
      land: {
        landNumber: "87-873",
        block: "4",
        neighborUnit: "D6",
        groupNumber: "6",
        additionalNumber: "1",
      },
      footprintDimensions: "4.5 × 14",
    },
    designGallery: [
      "/Image/First Project/desing arach/Image (2).jpg",
      "/Image/First Project/desing arach/Image (3).jpg",
      "/Image/First Project/desing arach/Image (4).jpg",
    ],
    finalViewGallery: [
      "/Image/First Project/last view/Image (3).jpg",
    ],
  },

  // ─── نموذج 2 — استبدال ───
  {
    id: 2,
    title: "مسجد المدارّة",
    location: "عدن — المدارّة",
    type: "ديني — مسجد",
    shortDescription:
      "مسجد بطابقين ضمن نطاق تنظيمي واضح، مع مساحة ساحة وخدمات مرتبطة بالقطعة المعتمدة، والمشروع حالياً قيد التنفيذ.",
    description:
      "يستهدف المشروع إنشاء مسجد يلبي احتياجات الصلاة والفعاليات المجتمعية في منطقة المدارّة، مع مراعاة التنسيق بين الحجم البنائي والساحات والخدمات. تُحدَّث هذه الصفحة وفق تقدم الأعمال على أرض الواقع، ويُذكر تاريخ الإنجاز المتوقع للمتابعة والتخطيط.",
    completedWorks: [
      "الإعدادات الميدانية والربط مع مخطط القطعة واللوائح",
      "الهيكل الإنشائي والأسقف حسب التصميم المعتمد",
      "التمديدات الكهروميكانيكية والسباكة الأساسية",
      "الواجهات والتشطيبات الخارجية والداخلية",
      "التسليم النهائي وفق الجدول الزمني المتوقع للمشروع",
    ],
    images: [
      "/Image/Second Project/Display picture.jpg",
      "/Image/Second Project/PHOTO-2026-02-12-12-05-47 2.jpg",
      "/Image/Second Project/PHOTO-2026-02-12-12-05-47.jpg",
      "/Image/Second Project/PHOTO-2026-04-18-21-42-18.jpg",
      "/Image/Second Project/PHOTO-2026-04-18-21-42-25.jpg",
      "/Image/Second Project/PHOTO-2026-04-18-21-42-32.jpg",
      "/Image/Second Project/PHOTO-2026-04-18-21-42-54.jpg",
    ],
    extendedSheet: {
      referenceCode: "ARCH-1145",
      floorsCount: 2,
      panelsCount: 27,
      panelNumber: 1,
      land: {
        landNumber: "87-873",
        block: "4",
        neighborUnit: "D6",
        groupNumber: "6",
        additionalNumber: "1",
      },
      footprintDimensions: "40 × 80",
      footprintCardTitle: "المساحة مع الخدمات",
      footprintSubtitle: "الأبعاد بالأمتار (شاملة نطاق الخدمات والساحات المرتبطة)",
    },
    designGallery: [
      "/Image/Second Project/design-arch/Screenshot 2026-04-19 224025.png",
      "/Image/Second Project/design-arch/Screenshot 2026-04-19 224128.png",
      "/Image/Second Project/design-arch/Screenshot 2026-04-19 224211.png",
    ],
    cardStatusBadge: "قيد التنفيذ",
    projectStatusSection: {
      badgeLabel: "قيد التنفيذ",
      body: "المشروع لا يزال قيد التنفيذ، ومن المتوقع الانتهاء منه بتاريخ 15/7/2026",
    },
  },

  // ─── نموذج 3 — استبدال ───
  {
    id: 3,
    title: "مبنى سكني",
    location: "عدن — الشيخ عثمان",
    type: "سكني — مبنى",
    shortDescription:
      "مبنى سكني حديث مكوّن من أربعة أدوار، يتميز بتصميم معماري أنيق يجمع بين الفخامة والبساطة، مع شرفات واسعة وتشطيبات خارجية راقية، يقع في مديرية الشيخ عثمان – عدن، بإشراف هندسي مرخّص وتنفيذ وفق أعلى معايير الجودة.",
    description:
      "يستهدف المشروع توفير وحدات سكنية ضمن مبنى منظم الارتفاع والواجهات، مع التركيز على جودة التشطيبات الخارجية والشرفات والإضاءة الطبيعية. تم إعداد المخططات وفق نوع معماري معتمد، مع توثيق بيانات القطعة والإشراف الهندسي والمرجعية الزمنية للمستندات المعروضة في هذه الصفحة.",
    completedWorks: [
      "الدراسات المعمارية والتوزيع الداخلي للأدوار",
      "الهيكل الإنشائي والواجهات والشرفات",
      "التمديدات الكهروميكانيكية والسباكة",
      "التشطيبات الخارجية والدهانات",
      "المتابعة الميدانية وفق اشتراطات الجودة والترخيص",
    ],
    images: [
      "/Image/Thired Project/Display picture.jpg",
      "/Image/Thired Project/PHOTO-2026-02-12-12-08-07.jpg",
      "/Image/Thired Project/PHOTO-2026-02-12-12-08-08 2.jpg",
      "/Image/Thired Project/PHOTO-2026-02-12-12-08-08 3.jpg",
      "/Image/Thired Project/PHOTO-2026-02-12-12-08-08.jpg",
      "/Image/Thired Project/PHOTO-2026-02-12-12-08-09.jpg",
    ],
    extendedSheet: {
      referenceCode: "ARCH-1137",
      floorsCount: 4,
      panelsCount: 9,
      panelNumber: 1,
      showIdentityStrip: true,
      includeSummaryCard: true,
      location: {
        governorate: "عدن",
        directorate: "الشيخ عثمان",
      },
      landCardTitle: "تفاصيل الأرض",
      land: {
        landNumber: "19",
        neighborUnit: "61F2",
        groupNumber: "E-7",
      },
      footprintDimensions: "14 × 80",
      footprintCardTitle: "المساحة",
      footprintSubtitle: "أبعاد الأرض بالأمتار",
      planType: "معماري",
      documentDate: { year: "2025", month: "يناير" },
    },
    designGallery: [
      "/Image/Thired Project/design -arch/Screenshot 2026-04-19 230325.png",
      "/Image/Thired Project/design -arch/Screenshot 2026-04-19 230336.png",
      "/Image/Thired Project/design -arch/Screenshot 2026-04-19 230346.png",
      "/Image/Thired Project/design -arch/Screenshot 2026-04-19 230354.png",
    ],
    finalViewGallery: ["/Image/Thired Project/final Look Picture.jpg"],
    finalViewNotice:
      "تم إيقاف المشروع عند هذه المرحلة بناءً على طلب المالك، لذلك فإن الشكل النهائي الحالي لا يمثل التصميم النهائي الكامل المقترح في المخططات.",
  },

  // ─── نموذج 4 — استبدال ───
  {
    id: 4,
    title: "مبنى سكني تجاري",
    location: "عدن — الشيخ عثمان",
    type: "سكني تجاري",
    shortDescription:
      "مبنى سكني تجاري مكوّن من أربعة أدوار في مديرية الشيخ عثمان بمحافظة عدن، مع تصميم معماري معتمد وإشراف هندسي مرخّص.",
    description:
      "مبنى سكني تجاري مكوّن من أربعة أدوار، يقع في مديرية الشيخ عثمان – محافظة عدن، يتميز بتصميم معماري معتمد وفق المخططات الرسمية، ويجمع بين الاستخدام السكني والتجاري، مع إشراف هندسي مرخّص وتنفيذ وفق معايير معتمدة.",
    completedWorks: [
      "إعداد المخطط المعماري بمقياس رسم 1:100 واعتماده رسمياً",
      "تنظيم بيانات الموقع والأرض وفق السجلات الهندسية المعتمدة",
      "مراجعة واعتماد المخططات لدى مكتب الأشغال العامة والطرق",
      "المصادقة الفنية من إدارة البلديات وصحة البيئة",
      "الإشراف الهندسي المرخّص على مراحل التنفيذ",
    ],
    images: [
      "/Image/Fourth Project/Display picture.jpg",
      "/Image/Fourth Project/PHOTO-2026-02-12-12-03-01 2.jpg",
      "/Image/Fourth Project/PHOTO-2026-02-12-12-03-01.jpg",
      "/Image/Fourth Project/PHOTO-2026-02-12-12-05-47.jpg",
    ],
    extendedSheet: {
      referenceCode: "arch0823",
      floorsCount: 4,
      panelsCount: 10,
      panelNumber: 1,
      showIdentityStrip: true,
      includeSummaryCard: true,
      location: {
        governorate: "عدن",
        directorate: "الشيخ عثمان",
      },
      landCardTitle: "تفاصيل الأرض",
      land: {
        landNumber: "35",
        neighborUnit: "612",
        groupNumber: "1/أ",
      },
      planType: "معماري",
      documentDate: { year: "2018", month: "فبراير" },
      footprintDimensions: "23.60 × 18.20",
    },
    designGallery: [
      "/Image/Fourth Project/design - arch/Screenshot 2026-04-20 145538.png",
      "/Image/Fourth Project/design - arch/Screenshot 2026-04-20 145620.png",
      "/Image/Fourth Project/design - arch/Screenshot 2026-04-20 145634.png",
      "/Image/Fourth Project/design - arch/Screenshot 2026-04-20 145643.png",
      "/Image/Fourth Project/design - arch/Screenshot 2026-04-20 145655.png",
      "/Image/Fourth Project/design - arch/Screenshot 2026-04-20 145702.png",
      "/Image/Fourth Project/design - arch/Screenshot 2026-04-20 145710.png",
      "/Image/Fourth Project/design - arch/Screenshot 2026-04-20 145720.png",
    ],
  },

  // ─── نموذج 5 — استبدال ───
  {
    id: 5,
    title: "مسجد حصة",
    location: "عدن — الشيخ عثمان",
    type: "معماري",
    shortDescription:
      "مشروع مسجد حصة في مديرية الشيخ عثمان – محافظة عدن، صُمم وفق مخطط معماري يراعي الوظيفة والجمالية والهوية العمرانية، مع توزيع مناسب للمساحات ليستوعب المسجد نحو 1000 مصلٍ.",
    description:
      "مشروع معماري لمسجد في مديرية الشيخ عثمان – محافظة عدن، تم تصميمه وفق رؤية معمارية متكاملة تراعي الجوانب الوظيفية والجمالية، مع توزيع مثالي للمساحات بما يخدم الاستخدام الأمثل للمبنى.",
    completedWorks: [
      "إعداد المخطط المعماري العام للمسجد وفق متطلبات الموقع",
      "توزيع الفراغات الداخلية بما يضمن سهولة الحركة وكفاءة الاستخدام",
      "مراجعة الواجهات والكتل المعمارية لتحقيق جودة بصرية متوازنة",
      "تنسيق المخططات التنفيذية بما يتوافق مع المعايير الهندسية المعتمدة",
      "تجهيز ملفات العرض المعماري للمراجعة والتنفيذ",
    ],
    images: [
      "/Image/Fifthe Project/Display picture.jpg",
      "/Image/Fifthe Project/PHOTO-2026-02-12-12-05-47 2.jpg",
      "/Image/Fifthe Project/PHOTO-2026-02-12-12-05-47 4.jpg",
      "/Image/Fifthe Project/PHOTO-2026-02-12-12-05-47 5.jpg",
    ],
    designGallery: [
      "/Image/Fifthe Project/design - arch/Screenshot 2026-04-22 145201.png",
      "/Image/Fifthe Project/design - arch/Screenshot 2026-04-22 145224.png",
      "/Image/Fifthe Project/design - arch/Screenshot 2026-04-22 145254.png",
      "/Image/Fifthe Project/design - arch/Screenshot 2026-04-22 145313.png",
      "/Image/Fifthe Project/design - arch/Screenshot 2026-04-22 145328.png",
    ],
    visualLayout: "imageFocused",
    simpleInfoCards: [
      { label: "اسم المشروع", value: "مسجد حصة" },
      { label: "الموقع", value: "عدن — الشيخ عثمان" },
      { label: "نوع المخطط", value: "معماري" },
      { label: "المساحة", value: "32 × 32" },
      { label: "السنة", value: "2025" },
      { label: "الشهر", value: "يناير" },
      { label: "السعة الاستيعابية", value: "1000 مصلٍ" },
    ],
    capacityText: "1000 مصلٍ",
  },
  {
    id: 6,
    title: "فيلا ",
    location: "الشيخ عثمان",
    type: "سكني — فيلا",
    shortDescription:
      "فيلا سكنية مكوّنة من طابقين، ضمن المشروع الخامس لشركة منازل العقارية، تقع في مديرية الشيخ عثمان، وتتميز بتصميم معماري معتمد يلبي متطلبات السكن العصري، مع إشراف هندسي مرخّص وتنفيذ وفق المعايير الهندسية المعتمدة.",
    description:
      "مشروع فيلا B يتكون من طابقين ضمن بيئة سكنية في مديرية الشيخ عثمان، ويركز على توزيع وظيفي عملي للمساحات الداخلية مع معالجة معمارية متوازنة للواجهات. تم إعداد المخطط وفق مقياس رسم 1:100 واعتمادات رسمية من الجهات المختصة، بما يدعم وضوح المتطلبات الفنية وجودة التنفيذ.",
    completedWorks: [
      "إعداد المخطط المعماري التفصيلي للفيلا بطابقين",
      "تنسيق توزيع الفراغات الداخلية بما يحقق كفاءة الاستخدام",
      "مراجعة المخطط وفق مقياس الرسم المعتمد 1:100",
      "اعتماد المخططات من الجهات الرسمية المختصة",
      "تجهيز الوثائق الفنية للمراجعة والتنفيذ",
    ],
    images: [
      "/Image/sixth project/Display picture.jpg",
      "/Image/sixth project/PHOTO-2026-02-12-12-03-01 2.jpg",
      "/Image/sixth project/PHOTO-2026-02-12-12-03-01 3.jpg",
      "/Image/sixth project/PHOTO-2026-02-12-12-03-01.jpg",
      "/Image/sixth project/PHOTO-2026-02-12-12-05-47 2.jpg",
      "/Image/sixth project/PHOTO-2026-02-12-12-05-47 3.jpg",
      "/Image/sixth project/PHOTO-2026-02-12-12-05-47 4.jpg",
    ],
    extendedSheet: {
      referenceCode: "ARCH-2016-VILLA-B",
      floorsCount: 2,
      panelsCount: 9,
      panelNumber: 1,
      showIdentityStrip: true,
      includeSummaryCard: true,
      location: {
        directorate: "الشيخ عثمان",
      },
      landCardTitle: "تفاصيل الأرض",
      land: {
        neighborUnit: "644",
        landArea: "160 م²",
        totalBuiltArea: "320 م²",
      },
      footprintDimensions: "160 م²",
      footprintCardTitle: "المساحة",
      footprintSubtitle: "مساحة الأرض المعتمدة",
      planType: "معماري",
      drawingScale: "1:100",
      documentDate: { year: "2016" },
      officialApprovals: [
        "مكتب الأشغال العامة والطرق",
        "إدارة التصاميم الهندسية",
      ],
    },
    designGallery: [
      "/Image/sixth project/design - arch/Screenshot 2026-04-23 115210.png",
      "/Image/sixth project/design - arch/Screenshot 2026-04-23 115223.png",
      "/Image/sixth project/design - arch/Screenshot 2026-04-23 115240.png",
      "/Image/sixth project/design - arch/Screenshot 2026-04-23 115254.png",
      "/Image/sixth project/design - arch/Screenshot 2026-04-23 115318.png",
    ],
  },

];

export function getProjectById(id: number) {
  return PROJECT_RECORDS.find((p) => p.id === id);
}

/** أول صورة في `images` — غلاف البطاقة والسلايدر وصورة الـ Hero */
export function getProjectCoverImage(project: ProjectRecord): string {
  return (
    project.images[0] ??
    "/Image/First Project/Display picture.png"
  );
}
