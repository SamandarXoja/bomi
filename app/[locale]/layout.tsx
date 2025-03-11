import Navbar from "@/components/NavBar";
import { Locale, routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "./globals.css";
import { Gothic_A1, Open_Sans, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";



const gothicA1 = Gothic_A1({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-gothic-a1",
});


const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"], 
  variable: "--font-playfair",
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
      <body className={`${gothicA1.className} ${playfair.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
