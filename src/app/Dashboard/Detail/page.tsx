"use client";
import React from "react";
import Sidebar from "@/components/ui/Dashbaord/sidebar";
import { PROJECT_RECORDS } from "@/data/projects";

const Detail: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-grow bg-slate-100 p-4">
        <header className="bg-gradient-to-b from-indigo-600 to-indigo-900 shadow-md p-4 mb-6 rounded-lg text-white">
          <h3 className="text-2xl font-bold">قائمة المشاريع المنفذة</h3>
        </header>

        <div className="overflow-x-auto bg-white text-indigo-950 md:text-base p-4 rounded-lg shadow-md border border-slate-100 sm:text-sm">
          <div className="min-w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center border-b border-slate-200 pb-2 mb-2">
              <div className="font-semibold text-sm md:text-base py-2">اسم المشروع</div>
              <div className="font-semibold text-sm md:text-base py-2">الموقع</div>
              <div className="font-semibold text-sm md:text-base py-2">نوع المشروع</div>
              <div className="font-semibold text-sm md:text-base py-2">وصف مختصر</div>
            </div>

            {PROJECT_RECORDS.map((project) => (
              <div
                key={project.id}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center border-b border-slate-100 py-4 md:py-6 items-center"
              >
                <div className="p-2 truncate font-medium">{project.title}</div>
                <div className="p-2 truncate">{project.location}</div>
                <div className="p-2 text-sm">{project.type}</div>
                <div className="p-2 text-sm text-slate-600 line-clamp-2">
                  {project.shortDescription}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
