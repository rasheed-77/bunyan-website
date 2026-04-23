"use client";
import React from "react";

const TasksSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 border border-slate-100">
      <h2 className="text-xl font-bold text-indigo-950 mb-4">مهام</h2>
      <ul className="list-disc list-inside text-slate-700 space-y-1">
        <li>تحديث وصف مشروع على الموقع</li>
        <li>تنسيق زيارة موقع مع عميل</li>
        <li>مراجعة ملاحظات العملاء</li>
      </ul>
    </div>
  );
};

export default TasksSection;
