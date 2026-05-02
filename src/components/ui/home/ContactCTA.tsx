"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  CONTACT_PHONES,
  CONTACT_WHATSAPP_URL,
} from "@/data/contact";

export default function ContactCTA() {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-32 bg-gradient-to-l from-[#27231e] via-dark to-[#141414] text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="section-title mb-4 text-2xl text-white md:text-3xl">
          هل لديكم مشروع أو استفسار؟
        </h2>
        <p className="text-slate-200 text-lg mb-6 leading-relaxed">
          نرحب بمناقشة احتياجاتكم في التطوير العقاري أو المقاولات العامة.
          تواصلوا معنا لتحديد موعد استشارة أو تقديم عرض مناسب لنطاق العمل.
        </p>
        <div className="mb-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-slate-200 text-sm sm:text-base">
          {CONTACT_PHONES.map((p) => (
            <a
              key={p.tel}
              href={`tel:${p.tel}`}
              className="font-semibold transition-colors duration-300 ease-in-out hover:text-white hover:underline underline-offset-4"
              dir="ltr"
            >
              {p.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center flex-wrap">
          <Link
            href="/Contact_us"
            className="ui-btn-primary-motion inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3.5 font-bold text-dark shadow-sm hover:bg-[#c8a574]"
          >
            تواصل معنا
          </Link>
          <Link
            href="/Projects"
            className="ui-btn-primary-motion inline-flex items-center justify-center rounded-xl border-2 border-white/90 px-8 py-3.5 font-bold text-white hover:bg-white/10 hover:shadow-md hover:shadow-black/20"
          >
            تصفح مشاريعنا
          </Link>
          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ui-btn-primary-motion inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-bold text-dark shadow-sm hover:bg-[#c8a574]"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
            واتساب
          </a>
        </div>
      </div>
    </section>
  );
}
