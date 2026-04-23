"use client";
import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "@/components/ui/Dashbaord/sidebar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-4 md:p-8">
        <header className="bg-gradient-to-t from-indigo-900 to-indigo-600 shadow-md p-4 mb-6 rounded-lg text-white">
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <GiHamburgerMenu className="text-xl shrink-0" />
            لوحة متابعة المشاريع
          </h3>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">
              إجمالي المشاريع
            </h3>
            <p className="text-2xl font-bold text-indigo-700" dir="ltr">
              1,234
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">
              الإيرادات (تقديري)
            </h3>
            <p className="text-2xl font-bold text-emerald-700" dir="ltr">
              12.5M ر.س
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">
              متوسط قيمة الوحدة
            </h3>
            <p className="text-2xl font-bold text-blue-700" dir="ltr">
              425K ر.س
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">
              رضا العملاء
            </h3>
            <p className="text-2xl font-bold text-amber-600" dir="ltr">
              94%
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md border border-slate-100">
            <h3 className="text-xl font-semibold text-slate-700 mb-4">
              اتجاه الإيرادات
            </h3>
            <div className="h-[300px]">
              <Line
                data={{
                  labels: [
                    "يناير",
                    "فبراير",
                    "مارس",
                    "أبريل",
                    "مايو",
                    "يونيو",
                  ],
                  datasets: [
                    {
                      label: "الإيرادات",
                      data: [500, 800, 700, 850, 750, 900],
                      borderColor: "#4f46e5",
                      backgroundColor: "rgba(79, 70, 229, 0.15)",
                      fill: true,
                    },
                  ],
                }}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-slate-100">
            <h3 className="text-xl font-semibold text-slate-700 mb-4">
              أداء ربع سنوي
            </h3>
            <div className="h-[300px]">
              <Bar
                data={{
                  labels: ["الربع 1", "الربع 2", "الربع 3", "الربع 4"],
                  datasets: [
                    {
                      label: "مبيعات",
                      data: [1800, 2100, 1950, 2300],
                      backgroundColor: "#10B981",
                    },
                    {
                      label: "إيجارات",
                      data: [1200, 1400, 1300, 1600],
                      backgroundColor: "#F59E0B",
                    },
                  ],
                }}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md border border-slate-100">
            <h3 className="text-xl font-semibold text-slate-700 mb-4">
              توزيع أنواع العقارات
            </h3>
            <div className="h-[300px]">
              <Doughnut
                data={{
                  labels: ["سكني", "تجاري", "صناعي"],
                  datasets: [
                    {
                      data: [55, 30, 15],
                      backgroundColor: ["#2f6fab", "#10B981", "#F59E0B"],
                    },
                  ],
                }}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-slate-100">
            <h3 className="text-xl font-semibold mb-4 text-slate-700">
              معاملات حديثة (نموذج)
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="px-4 py-2 text-end font-semibold">المشروع</th>
                    <th className="px-4 py-2 text-end font-semibold">النوع</th>
                    <th className="px-4 py-2 text-end font-semibold">السعر</th>
                    <th className="px-4 py-2 text-end font-semibold">الحالة</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      p: "برج النخيل",
                      t: "سكني",
                      price: "450,000 ر.س",
                      s: "مباع",
                      ok: true,
                    },
                    {
                      p: "مجمع الأعمال",
                      t: "تجاري",
                      price: "1,200,000 ر.س",
                      s: "قيد الإجراء",
                      ok: false,
                    },
                    {
                      p: "فيلا الروضة",
                      t: "سكني",
                      price: "890,000 ر.س",
                      s: "مباع",
                      ok: true,
                    },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="px-4 py-2">{row.p}</td>
                      <td className="px-4 py-2">{row.t}</td>
                      <td className="px-4 py-2" dir="ltr">
                        {row.price}
                      </td>
                      <td className="px-4 py-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            row.ok
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {row.s}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
