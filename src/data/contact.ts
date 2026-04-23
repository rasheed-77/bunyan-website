/** بيانات التواصل الرسمية — شركة بنيان */

export const CONTACT_LOCATION = "عدن - الجمهورية اليمنية";

export const CONTACT_PHONES = [
  { tel: "+967777140850", label: "+967 777140850" },
  { tel: "+967713200333", label: "+967 713200333" },
] as const;

export const CONTACT_EMAIL = "sas3walq@gmail.com";

/** رقم واتساب لـ wa.me (بدون + أو مسافات) */
export const CONTACT_WHATSAPP_DIGITS = "967777140850";

export const CONTACT_WHATSAPP_URL = `https://wa.me/${CONTACT_WHATSAPP_DIGITS}`;

export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
