// components/DashboardLayout.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 text-white flex flex-col">
        <div className="p-4 font-bold text-xl">بنيان</div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="py-2"><Link href="/Projects" className="hover:text-indigo-300">المشاريع</Link></li>
            <li className="py-2"><Link href="/Dashboard" className="hover:text-indigo-300">المهام</Link></li>
            <li className="py-2"><Link href="/Dashboard" className="hover:text-indigo-300">التقويم</Link></li>
          </ul>
        </nav>
      </aside>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-900">لوحة المشاريع</h1>
            <div className="flex items-center gap-4">
              <Image src="/Image/agent1.jpg" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
              <span className="font-medium">مستخدم</span>
            </div>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
