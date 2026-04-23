"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/About", label: "من نحن" },
  { href: "/Projects", label: "مشاريعنا" },
  { href: "/Contact_us", label: "تواصل معنا" },
] as const;

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 py-3 backdrop-blur-md transition-all duration-300 md:py-4 ${
        isScrolled
          ? "py-2 md:py-3 shadow-lg shadow-slate-900/10"
          : "shadow-sm shadow-slate-900/5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center gap-3">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 md:gap-3 min-w-0 shrink"
          >
            <Image
              src="/Image/Image.png"
              alt="شعار بنيان"
              width={48}
              height={48}
              className="h-9 w-9 md:h-11 md:w-11 object-contain shrink-0"
              priority
            />
            <span className="min-w-0 text-start font-bold text-indigo-950 leading-snug text-xs sm:text-sm md:text-base">
              <span className="block sm:inline">بنيان للعقارات</span>
              <span className="hidden sm:inline"> </span>
              <span className="block sm:inline text-slate-700 font-semibold sm:text-indigo-950">
                والمقاولات العامة
              </span>
            </span>
          </Link>

          <div className="flex lg:hidden items-center shrink-0">
            <button
              type="button"
              className="text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-700 rounded-md p-1"
              onClick={handleMobileMenuToggle}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <div
            className={`lg:flex lg:items-center lg:justify-end absolute lg:relative top-full inset-x-0 bg-white lg:bg-transparent border-b border-slate-100 lg:border-0 shadow-lg lg:shadow-none ${
              isMobileMenuOpen ? "block" : "hidden"
            } transition-all duration-300 lg:transition-none`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:flex-wrap lg:justify-end gap-1 sm:gap-0 lg:gap-x-1 xl:gap-x-3 2xl:gap-x-4 p-4 lg:p-0">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-md border-b border-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 ease-in-out hover:bg-indigo-50/70 hover:text-indigo-800 lg:border-0 lg:py-2 lg:text-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
