import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import FloatingWhatsAppButton from "@/components/common/FloatingWhatsAppButton";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: {
    default: "شركة بنيان للعقارات والمقاولات العامة",
    template: "%s | شركة بنيان",
  },
  description:
    "شركة بنيان للعقارات والمقاولات العامة في عدن — تطوير عقاري، مقاولات عامة، إشراف هندسي، وتنفيذ مشاريع بجودة عالية والتزام زمني.",
  keywords: [
    "شركة بنيان",
    "العقارات",
    "المقاولات العامة",
    "عدن",
    "التطوير العقاري",
    "تنفيذ المشاريع",
  ],
  openGraph: {
    title: "شركة بنيان للعقارات والمقاولات العامة",
    description:
      "حلول احترافية في التطوير العقاري والمقاولات العامة بإشراف هندسي وجودة تنفيذ موثوقة.",
    type: "website",
    locale: "ar_YE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className={`${cairo.className} antialiased text-gray-900 bg-white`}>
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
