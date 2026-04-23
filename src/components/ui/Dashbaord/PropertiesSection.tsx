"use client";
import React from "react";
import Link from "next/link";
import { PROJECT_RECORDS } from "@/data/projects";

const PropertiesSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100">
      <h2 className="text-xl font-bold text-indigo-950 mb-4">مشاريع منفذة</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="py-2 px-4 text-end bg-slate-50 font-semibold">
                المشروع
              </th>
              <th className="py-2 px-4 text-end bg-slate-50 font-semibold">
                الموقع
              </th>
              <th className="py-2 px-4 text-end bg-slate-50 font-semibold">
                النوع
              </th>
              <th className="py-2 px-4 text-end bg-slate-50 font-semibold">رابط</th>
            </tr>
          </thead>
          <tbody>
            {PROJECT_RECORDS.slice(0, 5).map((p) => (
              <tr key={p.id} className="border-b border-slate-100">
                <td className="py-2 px-4">{p.title}</td>
                <td className="py-2 px-4">{p.location}</td>
                <td className="py-2 px-4 text-xs">{p.type}</td>
                <td className="py-2 px-4">
                  <Link
                    href={`/Projects/${p.id}`}
                    className="text-indigo-800 font-semibold hover:underline"
                  >
                    التفاصيل
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertiesSection;
