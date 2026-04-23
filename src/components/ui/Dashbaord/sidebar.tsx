import React from "react";
import Link from "next/link";
import { FaHome, FaChartLine, FaUsers, FaCog, FaList } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 bg-gradient-to-r from-indigo-700 to-indigo-950 text-white p-4">
      <Link
        href="/"
        className="text-2xl sm:text-3xl font-bold cursor-pointer hover:text-amber-200 transition-colors duration-300 block"
      >
        بنيان
      </Link>
      <nav className="mt-10">
        <Link
          href="/Dashboard"
          className="flex items-center py-2 px-4 text-lg hover:bg-indigo-800 rounded mb-4"
        >
          <FaHome className="ms-3 shrink-0" /> لوحة التحكم
        </Link>
        <Link
          href="/Dashboard/Detail"
          className="flex items-center py-2 px-4 text-lg hover:bg-indigo-800 rounded mb-4"
        >
          <FaList className="ms-3 shrink-0 text-white" /> تفاصيل المشاريع
        </Link>
        <Link
          href="/Dashboard"
          className="flex items-center py-2 px-4 text-lg hover:bg-indigo-800 rounded mb-4"
        >
          <FaChartLine className="ms-3 shrink-0" /> التقارير
        </Link>

        <Link
          href="/Dashboard"
          className="flex items-center py-2 px-4 text-lg hover:bg-indigo-800 rounded mb-4"
        >
          <FaUsers className="ms-3 shrink-0" /> العملاء
        </Link>
        <Link
          href="/Contact_us"
          className="flex items-center py-2 px-4 text-lg hover:bg-indigo-800 rounded"
        >
          <FaCog className="ms-3 shrink-0" /> الإعدادات
        </Link>
      </nav>
    </aside>
  );
}
