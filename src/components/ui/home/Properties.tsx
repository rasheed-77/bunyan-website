"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaArrowRight } from "react-icons/fa";
import {
  PROJECT_RECORDS,
  getProjectCoverImage,
  type ProjectRecord,
} from "@/data/projects";

const carouselProjects = PROJECT_RECORDS.slice(0, 10);

const ProjectCard: React.FC<{ project: ProjectRecord }> = ({ project }) => {
  const cover = getProjectCoverImage(project);
  return (
    <div className="group/card flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-md hover:shadow-primary/15">
      <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl md:h-60 lg:h-48">
        <Image
          src={cover}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-[1.02]"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-dark">{project.title}</h3>
        <p className="text-slate-600 text-sm">{project.location}</p>
        <p className="text-xs font-semibold text-primary mt-2 mb-2">
          {project.type}
        </p>
        <p className="text-slate-600 text-sm leading-relaxed flex-1 line-clamp-3">
          {project.shortDescription}
        </p>
        <Link
          href={`/Projects/${project.id}`}
          className="group/btn ui-btn-primary-motion mt-4 inline-flex min-h-[2.75rem] w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#D6B588] px-4 py-2.5 text-center text-sm font-bold text-[#1F1F1F] shadow-[0_2px_8px_rgba(31,41,55,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#c4a574] hover:text-[#1F1F1F] hover:shadow-[0_8px_20px_rgba(31,41,55,0.14)] active:translate-y-0 active:scale-100"
        >
          <span className="select-none">عرض التفاصيل</span>
          <span
            className="inline-flex shrink-0 transition-transform duration-300 ease-in-out group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1"
            aria-hidden
          >
            <FaArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default function FeaturedProjects() {
  const swiperRef = useRef<SwiperType | null>(null);

  const goToNextProject = () => {
    const s = swiperRef.current;
    if (!s) return;
    if (s.isEnd) {
      s.slideTo(0);
    } else {
      s.slideNext();
    }
  };

  return (
    <div className="container mx-auto py-20 md:py-24 px-4 sm:px-6 lg:px-32">
      <div className="relative flex flex-wrap justify-between items-end gap-4 mb-10">
        <div>
          <h2 className="section-title mb-2 text-3xl sm:text-4xl lg:text-5xl">
            مشاريعنا المميزة
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            هذه مجموعة من بعض مشاريعنا المنفذة التي تم توثيقها، ونمتلك العديد من
            المشاريع الأخرى في مجالات مختلفة.
          </p>
          <p className="section-subtitle max-w-xl text-sm sm:text-base">
            نماذج من مشاريع تم تنفيذها؛ للاطلاع على القائمة الكاملة زر «جميع
            المشاريع».
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Link
            href="/Projects"
            className="bg-primary text-dark px-5 py-2.5 text-sm sm:text-base rounded-lg shadow-sm hover:bg-[#c8a574] transition duration-300 font-bold"
          >
            جميع المشاريع
          </Link>
          <button
            type="button"
            className="featured-projects-next-btn"
            onClick={goToNextProject}
            aria-label="المشروع التالي"
          >
            <span className="featured-projects-next-btn__icon" aria-hidden>
              <FaChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </span>
          </button>
        </div>
      </div>
      <div className="relative">
        <Swiper
          dir="rtl"
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper mb-8"
        >
          {carouselProjects.map((project) => (
            <SwiperSlide key={project.id} className="!h-auto">
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
