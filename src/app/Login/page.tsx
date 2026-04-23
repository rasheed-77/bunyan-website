"use client";
import React, { useState } from "react";
import Navbar from "@/components/common/Navbar";
import { useRouter } from "next/navigation";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import Image from "next/image";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password123") {
      router.push("/Dashboard");
    } else {
      alert("بيانات الدخول غير صحيحة");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-slate-100 p-4 pt-24">
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-indigo-50 p-8 flex flex-col items-center md:items-start text-center md:text-start">
              <div className="text-indigo-900 font-bold text-2xl mb-4">بنيان</div>
              <p className="text-indigo-800 mb-6 leading-relaxed">
                بوابة داخلية لعرض معلومات المشاريع والمتابعة. إن لم يكن لديكم
                حساب، تواصلوا مع الإدارة.
              </p>
              <div className="w-full h-64 md:h-auto rounded-lg flex items-center justify-center relative">
                <Image
                  src="/Image/who are we 3.png"
                  alt="مبنى"
                  width={400}
                  height={300}
                  className="max-h-full max-w-full object-contain rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-indigo-950 mb-6 text-center">
                تسجيل الدخول
              </h2>
              <div className="flex flex-col space-y-4 mb-6">
                <button
                  type="button"
                  className="flex items-center justify-center bg-white border border-slate-300 text-slate-700 py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <FaGoogle className="w-5 h-5 ms-2" />
                  المتابعة عبر Google
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaFacebookF className="w-5 h-5 ms-2" />
                  المتابعة عبر Facebook
                </button>
              </div>
              <div className="relative mb-6">
                <hr className="border-slate-300" />
                <span className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-slate-500 text-sm">
                  أو
                </span>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    type="email"
                    placeholder="البريد الإلكتروني"
                    dir="ltr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    type="password"
                    placeholder="كلمة المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  className="w-full bg-indigo-900 text-white py-2 px-4 rounded-lg hover:bg-indigo-800 transition duration-300 font-bold"
                  type="submit"
                >
                  دخول
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
