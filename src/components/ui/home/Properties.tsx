"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import {
  PROJECT_RECORDS,
  getProjectCoverImage,
  type ProjectRecord,
} from "@/data/projects";

const carouselProjects = PROJECT_RECORDS.slice(0, 10);

const ProjectCard: React.FC<{ project: ProjectRecord }> = ({ project }) => {
  const cover = getProjectCoverImage(project);
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-md hover:shadow-primary/15">
      <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl md:h-60 lg:h-48">
        <Image
          src={cover}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
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
          className="mt-4 bg-primary text-dark px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#c8a574] transition duration-300 text-center shrink-0"
        >
          عرض التفاصيل
        </Link>
      </div>
    </div>
  );
};

export default function FeaturedProjects() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

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
        <Link
          href="/Projects"
          className="bg-primary text-dark px-5 py-2.5 text-sm sm:text-base rounded-lg shadow-sm hover:bg-[#c8a574] transition duration-300 font-bold"
        >
          جميع المشاريع
        </Link>
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
          onBeforeInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation]}
          className="mySwiper mb-8"
        >
          {carouselProjects.map((project) => (
            <SwiperSlide key={project.id} className="!h-auto">
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type="button"
          ref={prevRef}
          className="hidden md:flex absolute top-1/2 start-0 z-10 -translate-y-1/2 text-dark bg-white/90 hover:bg-primary/25 text-3xl w-11 h-11 items-center justify-center rounded-full shadow-sm transition duration-300 border border-slate-200"
          aria-label="السابق"
        >
          ‹
        </button>
        <button
          type="button"
          ref={nextRef}
          className="hidden md:flex absolute top-1/2 end-0 z-10 -translate-y-1/2 text-dark bg-white/90 hover:bg-primary/25 text-3xl w-11 h-11 items-center justify-center rounded-full shadow-sm transition duration-300 border border-slate-200"
          aria-label="التالي"
        >
          ›
        </button>
      </div>
    </div>
  );
}
