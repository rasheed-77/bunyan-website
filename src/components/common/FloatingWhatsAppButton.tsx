"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { CONTACT_WHATSAPP_URL } from "@/data/contact";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={CONTACT_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] start-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-900/30 ring-2 ring-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-900/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200 active:scale-95 sm:bottom-8 sm:start-8 sm:h-16 sm:w-16"
      aria-label="فتح محادثة واتساب"
      title="واتساب"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
