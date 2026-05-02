import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_MAILTO,
  CONTACT_PHONES,
  CONTACT_WHATSAPP_URL,
} from "@/data/contact";

const Footer = () => {
  return (
    <footer className="bg-dark px-4 py-20 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col gap-4 border-b border-primary/35 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity duration-300 ease-in-out hover:opacity-95"
          >
            <Image
              src="/Image/Image.png"
              alt="شعار بنيان"
              width={56}
              height={56}
              className="h-12 w-12 md:h-14 md:w-14 object-contain shrink-0"
            />
            <span className="font-bold text-lg md:text-xl leading-snug text-start">
              بنيان للعقارات
              <span className="block text-primary font-semibold text-base md:text-lg">
                والمقاولات العامة
              </span>
            </span>
          </Link>
          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ui-btn-primary-motion inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-dark shadow-md hover:bg-[#c8a574] sm:w-auto"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
            تواصل سريع عبر واتساب
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-slate-200 mb-4 leading-relaxed">
              شركة متخصصة في التطوير العقاري والمقاولات العامة، نلتزم بالجودة
              والالتزام الزمني في كل مشروع.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary transition-all duration-300 ease-in-out hover:scale-110 hover:text-white"
                aria-label="واتساب بنيان"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
              </a>
              <a
                href={CONTACT_MAILTO}
                className="text-primary transition-all duration-300 ease-in-out hover:scale-110 hover:text-white"
                aria-label={`إرسال بريد إلى ${CONTACT_EMAIL}`}
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {[
                { href: "/About", label: "من نحن" },
                { href: "/Services", label: "خدماتنا" },
                { href: "/Projects", label: "مشاريعنا" },
                { href: "/Contact_us", label: "تواصل معنا" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="ui-footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              {[
                "المقاولات العامة",
                "التطوير العقاري",
                "الإشراف والإدارة",
                "التصميم والتنفيذ",
                "صيانة ما بعد التسليم",
              ].map((item, index) => (
                <li key={index}>
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-primary/35 bg-white/5 p-5">
            <h3 className="font-bold text-xl mb-6">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="h-5 w-5 mt-0.5 text-primary shrink-0"
                />
                <span className="text-slate-200 leading-relaxed">
                  {CONTACT_LOCATION}
                </span>
              </li>
              {CONTACT_PHONES.map((p) => (
                <li key={p.tel} className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="h-5 w-5 text-primary shrink-0"
                  />
                  <a
                    href={`tel:${p.tel}`}
                    className="ui-footer-link"
                    dir="ltr"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="h-5 w-5 text-primary shrink-0"
                />
                <a
                  href={CONTACT_MAILTO}
                  className="ui-footer-link break-all"
                  dir="ltr"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/35 mt-12 pt-8 text-center text-primary">
          <p>
            © {new Date().getFullYear()} بنيان للعقارات والمقاولات العامة. جميع
            الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
