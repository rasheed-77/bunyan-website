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
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-32 bg-gradient-to-l from-indigo-900 via-indigo-800 to-slate-900 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="section-title mb-4 text-2xl text-white md:text-3xl">
          هل لديكم مشروع أو استفسار؟
        </h2>
        <p className="text-indigo-100/95 text-lg mb-6 leading-relaxed">
          نرحب بمناقشة احتياجاتكم في التطوير العقاري أو المقاولات العامة.
          تواصلوا معنا لتحديد موعد استشارة أو تقديم عرض مناسب لنطاق العمل.
        </p>
        <div className="mb-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-indigo-100/95 text-sm sm:text-base">
          {CONTACT_PHONES.map((p) => (
            <a
              key={p.tel}
              href={`tel:${p.tel}`}
              className="font-semibold hover:text-white hover:underline"
              dir="ltr"
            >
              {p.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center flex-wrap">
          <Link
            href="/Contact_us"
            className="inline-flex justify-center items-center rounded-xl bg-amber-500 text-indigo-950 font-bold px-8 py-3.5 hover:bg-amber-400 transition shadow-lg"
          >
            تواصل معنا
          </Link>
          <Link
            href="/Projects"
            className="inline-flex justify-center items-center rounded-xl border-2 border-white/90 text-white font-bold px-8 py-3.5 hover:bg-white/10 transition"
          >
            تصفح مشاريعنا
          </Link>
          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 rounded-xl bg-emerald-600 text-white font-bold px-8 py-3.5 hover:bg-emerald-500 transition shadow-lg"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
            واتساب
          </a>
        </div>
      </div>
    </section>
  );
}
