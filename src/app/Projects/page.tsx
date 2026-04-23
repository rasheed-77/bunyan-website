"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import {
  PROJECT_RECORDS,
  getProjectCoverImage,
  type ProjectRecord,
} from "@/data/projects";

const ProjectCard: React.FC<{ project: ProjectRecord }> = ({ project }) => {
  const cover = getProjectCoverImage(project);
  return (
    <motion.article
      className="group ui-card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md shadow-slate-900/5 hover:border-indigo-200/80 hover:shadow-slate-900/10"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22 }}
    >
      <Link
        href={`/Projects/${project.id}`}
        className="relative block aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-200"
      >
        <Image
          src={cover}
          alt={project.title}
          fill
          className="ui-image-hover object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent opacity-90"
          aria-hidden
        />
        {project.cardStatusBadge ? (
          <span className="absolute top-3 end-3 z-10">
            <span className="inline-flex items-center rounded-full border border-amber-400/90 bg-amber-500 px-2.5 py-1 text-[0.6875rem] font-bold text-white shadow-md ring-1 ring-amber-700/20 backdrop-blur-sm sm:px-3 sm:text-xs">
              {project.cardStatusBadge}
            </span>
          </span>
        ) : null}
        <span className="absolute bottom-3 start-3 end-3 inline-flex max-w-[calc(100%-1.5rem)]">
          <span className="truncate rounded-lg bg-white/95 px-3 py-1 text-xs font-bold text-indigo-950 shadow-sm ring-1 ring-slate-200/80 backdrop-blur-sm sm:text-sm">
            {project.type}
          </span>
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h2 className="text-lg font-bold leading-snug text-indigo-950 sm:text-xl">
          <Link
            href={`/Projects/${project.id}`}
            className="transition hover:text-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-sm"
          >
            {project.title}
          </Link>
        </h2>

        <p className="mt-2 flex items-start gap-2 text-sm text-slate-600">
          <FaMapMarkerAlt
            className="mt-0.5 shrink-0 text-amber-600"
            aria-hidden
          />
          <span className="leading-relaxed">{project.location}</span>
        </p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3 sm:text-[0.9375rem]">
          {project.shortDescription}
        </p>

        <Link
          href={`/Projects/${project.id}`}
          className="mt-5 inline-flex min-h-[2.75rem] w-full items-center justify-center rounded-xl bg-indigo-900 px-4 py-2.5 text-center text-sm font-bold text-white shadow-md transition hover:bg-indigo-800 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400/90 sm:text-base"
        >
          عرض التفاصيل
        </Link>
      </div>
    </motion.article>
  );
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] bg-slate-50/80">
        <div className="border-b border-slate-200/90 bg-white">
          <div className="container mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
            <p className="mb-2 text-center text-sm font-semibold tracking-wide text-amber-700 sm:text-start">
              معرض أعمال التنفيذ
            </p>
            <h1 className="section-title text-center leading-tight sm:text-start lg:text-5xl">
              مشاريعنا المنفذة
            </h1>
            <p className="section-subtitle mx-auto mt-4 max-w-3xl text-center text-base sm:mx-0 sm:text-start sm:text-lg">
              نماذج من مشاريع المقاولات والتطوير العمراني التي نفّذتها بنيان
              وفق المواصفات والجداول الزمنية المتفق عليها. يمكنكم الاطلاع على
              تفاصيل كل مشروع والأعمال المنفذة ومعرض الصور.
            </p>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {PROJECT_RECORDS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
