"use client";

import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_MAILTO,
  CONTACT_PHONES,
  CONTACT_WHATSAPP_URL,
} from "@/data/contact";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mlgaykgr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      event.currentTarget.reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            تواصل معنا
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            نحن هنا للإجابة عن استفساراتكم. يمكنكم التواصل عبر الهاتف أو البريد
            أو واتساب، وسنعود إليكم في أقرب وقت.
          </p>
        </section>

        <section className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <FaPhoneAlt className="text-primary text-4xl mb-3" />
            <h2 className="text-2xl font-bold text-dark mb-2">الهاتف</h2>
            <div className="flex flex-col gap-2 text-lg">
              {CONTACT_PHONES.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="text-primary font-semibold hover:underline"
                  dir="ltr"
                >
                  {p.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaEnvelope className="text-primary text-4xl mb-3" />
            <h2 className="text-2xl font-bold text-dark mb-2">
              البريد الإلكتروني
            </h2>
            <a
              href={CONTACT_MAILTO}
              className="text-lg text-primary font-semibold hover:underline break-all"
              dir="ltr"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaMapMarkerAlt className="text-primary text-4xl mb-3" />
            <h2 className="text-2xl font-bold text-dark mb-2">العنوان</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xs">
              {CONTACT_LOCATION}
            </p>
          </div>
        </section>

        <section className="mb-16 flex justify-center">
          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-dark shadow-sm hover:bg-[#c8a574] transition"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="h-7 w-7" />
            مراسلة عبر واتساب
          </a>
        </section>

        <section className="mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-3xl sm:text-4xl font-semibold text-dark mb-6">
              أرسل رسالة
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-lg text-slate-700 mb-2 font-medium">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="اكتب اسمك"
                  autoComplete="name"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg text-slate-700 mb-2 font-medium">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="أدخل رقم هاتفك"
                  dir="ltr"
                  autoComplete="tel"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg text-slate-700 mb-2 font-medium">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="أدخل بريدك الإلكتروني"
                  dir="ltr"
                  autoComplete="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg text-slate-700 mb-2 font-medium">
                  نص الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-40 resize-y"
                  placeholder="اكتب استفسارك أو تفاصيل مشروعك"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-primary text-dark text-lg font-bold rounded-lg hover:bg-[#c8a574] transition duration-300"
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
              </button>
              {submitStatus === "success" ? (
                <p className="text-sm text-center text-emerald-700 font-medium">
                  تم إرسال رسالتك بنجاح، سنتواصل معك قريباً.
                </p>
              ) : null}
              {submitStatus === "error" ? (
                <p className="text-sm text-center text-red-600 font-medium">
                  حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقاً.
                </p>
              ) : null}
              <p className="text-sm text-slate-500 text-center leading-relaxed">
                للتواصل السريع يمكنكم الاتصال أو استخدام واتساب والبريد أعلاه.
              </p>
            </form>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-dark mb-6 text-center">
            موقعنا على الخريطة
          </h2>
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-sm border border-slate-200">
            <iframe
              title="موقع بنيان — عدن"
              src="https://www.google.com/maps?q=Aden+Yemen&hl=ar&z=12&output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
