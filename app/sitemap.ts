import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing"; // Импорт локалей

export default function sitemap(): MetadataRoute.Sitemap {
    const locales = routing.locales; // Получаем список локалей

    const pages = ["", "/about", "/services"]; // Список статичных страниц

    const urls = locales.flatMap((locale) =>
        pages.map((page) => ({
            url: `https://bomi-test.vercel.app/${locale}${page}`,
            lastModified: new Date(),
        }))
    );

    return urls;
}