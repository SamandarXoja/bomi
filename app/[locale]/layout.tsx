import Navbar from "@/components/NavBar";
import { Locale, routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"], // Поддержка кириллицы
  variable: "--font-open-sans", // CSS переменная
  weight: ["300", "400", "600", "700"], // Доступные веса
});


const googleSans = localFont({
  src: [
    {
      path: "../../public/fonts/ProductSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ProductSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ProductSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});



export const metadata: Metadata = {
  title: "bomi",
  description: "строительные компании",
  other: {
    "google-site-verification": "8787172ss",
  },
};

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  // Проверяем, поддерживается ли переданный locale
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Загружаем сообщения для локализации
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={`${openSans.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
