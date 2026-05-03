"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { FaSearchPlus, FaTimes } from "react-icons/fa";

export type LightboxSlide = { src: string; alt: string };

type LightboxContextValue = {
  open: (slides: LightboxSlide[], index: number) => void;
  close: () => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useProjectDetailLightbox(): LightboxContextValue {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error("useProjectDetailLightbox must be used within ProjectDetailLightboxProvider");
  }
  return ctx;
}

function LightboxOverlay({
  slides,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  slides: LightboxSlide[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const slide = slides[index];
  const multi = slides.length > 1;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col bg-slate-950/88 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label="عرض الصورة بحجم كامل"
      dir="rtl"
      onClick={onClose}
    >
      <div className="relative flex min-h-0 flex-1 flex-col">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="fixed right-3 top-3 z-[250] flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-black/50 text-[#D6B588] shadow-lg ring-1 ring-white/15 transition-colors duration-200 ease-out hover:bg-[#D6B588] hover:text-[#1F1F1F] sm:right-4 sm:top-4"
          aria-label="إغلاق"
        >
          <FaTimes className="h-5 w-5 shrink-0" />
        </button>

        {multi ? (
          <p className="pointer-events-none absolute start-1/2 top-14 z-10 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white/95 backdrop-blur-sm sm:top-16 sm:text-sm">
            {index + 1} / {slides.length}
          </p>
        ) : null}

        <div
          className="flex min-h-0 flex-1 items-center justify-center px-3 pb-2 pt-14 sm:px-6 sm:pt-16"
          onClick={onClose}
        >
          <div
            className="relative h-[min(85dvh,85vh)] w-full max-w-[min(96vw,1400px)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-contain object-center"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>

      {multi ? (
        <div
          className="relative z-30 flex shrink-0 items-center justify-center gap-3 border-t border-white/10 bg-black/25 px-4 py-3 backdrop-blur-sm sm:gap-4 sm:py-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onPrev}
            className="min-h-[44px] min-w-[44px] rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-bold text-white shadow-md backdrop-blur-sm transition hover:bg-white/20 sm:px-5"
          >
            السابق
          </button>
          <button
            type="button"
            onClick={onNext}
            className="min-h-[44px] min-w-[44px] rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-bold text-white shadow-md backdrop-blur-sm transition hover:bg-white/20 sm:px-5"
          >
            التالي
          </button>
        </div>
      ) : null}
    </div>
  );
}

export function ProjectDetailLightboxProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<LightboxSlide[]>([]);
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => {
    setOpen(false);
    setSlides([]);
    setIndex(0);
  }, []);

  const handleOpen = useCallback((nextSlides: LightboxSlide[], startIndex: number) => {
    if (!nextSlides.length) return;
    const i = Math.max(0, Math.min(startIndex, nextSlides.length - 1));
    setSlides(nextSlides);
    setIndex(i);
    setOpen(true);
  }, []);

  const onPrev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const onNext = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
      if (slides.length <= 1) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setIndex((i) => (i - 1 + slides.length) % slides.length);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setIndex((i) => (i + 1) % slides.length);
      }
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, slides]);

  return (
    <LightboxContext.Provider value={{ open: handleOpen, close }}>
      {children}
      {mounted &&
        open &&
        slides.length > 0 &&
        createPortal(
          <LightboxOverlay
            slides={slides}
            index={index}
            onClose={close}
            onPrev={onPrev}
            onNext={onNext}
          />,
          document.body
        )}
    </LightboxContext.Provider>
  );
}

type LightboxImageProps = {
  src: string;
  alt: string;
  slides: LightboxSlide[];
  slideIndex: number;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  wrapperClassName?: string;
};

/** صورة قابلة للنقر تفتح الـ Lightbox؛ نفس المجموعة تدعم السابق/التالي */
export function ProjectDetailLightboxImage({
  src,
  alt,
  slides,
  slideIndex,
  fill = true,
  width,
  height,
  priority,
  sizes,
  className = "",
  wrapperClassName = "",
}: LightboxImageProps) {
  const { open } = useProjectDetailLightbox();

  return (
    <button
      type="button"
      onClick={() => open(slides, slideIndex)}
      className={`group/lightbox relative block h-full w-full cursor-pointer overflow-hidden border-0 bg-transparent p-0 text-start ${wrapperClassName}`}
      aria-label={`تكبير الصورة: ${alt}`}
    >
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`transition duration-300 ease-out group-hover/lightbox:scale-[1.03] ${className}`}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={`transition duration-300 ease-out group-hover/lightbox:scale-[1.03] ${className}`}
        />
      )}
      <span
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/0 transition duration-300 group-hover/lightbox:bg-slate-950/25"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover/lightbox:opacity-100"
        aria-hidden
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-indigo-900 shadow-lg ring-2 ring-white/40">
          <FaSearchPlus className="h-5 w-5" />
        </span>
      </span>
    </button>
  );
}
