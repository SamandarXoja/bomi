"use client";

import { usePathname } from "next/navigation"; // Импортируем usePathname
// import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
// import telegram from "@/public/images/telegram3.svg";
// import Image from "next/image";
import Link from "next/link";

function Footer() {
    const pathname = usePathname();

    // Проверяем, является ли текущая страница главной (с учетом локали)
    const isHomePage = /^\/(uz|ru|en)?\/?$/.test(pathname);

    if (isHomePage) return null; // Если главная страница — не рендерим футер

    return (
        <footer className="mt-[100px] mb-[70px]" id="contacts">
            <div className='flex gap-1 justify-center mt-[120px]'>
                <Link className='text-[#a0a0a0] text-[14px] flex gap-3' href={'#'}>О нас <span>/</span></Link>
                <Link className='text-[#a0a0a0] text-[14px] flex gap-3' href={'#'}>Соглашение <span>/</span></Link>
                <Link className='text-[#a0a0a0] text-[14px] flex gap-3' href={'#'}>Политика <span>/</span></Link>
                <Link className='text-[#a0a0a0] text-[14px] flex gap-3' href={'#'}>Гид по недвижимости</Link>
            </div>
            <div className='text-center mt-3 mb-3'>
                <p className='text-[#a0a0a0] text-[14px] max-w-[850px] mx-auto'>(보미)BoMI· Генеральный директор: (Канг Чанг Хун) (강창훈) · Адрес: 03044 , Республика Узбекистан, г.Ташкент Шайхантахурский, район улица Матлубот, 129А , 5-й этаж.</p>
                <p className="text-[#a0a0a0] flex justify-center text-[14px] mt-2"><Link className='text-[#a0a0a0] text-[14px] flex gap-3' href={'#'}>Тел:  77 299 60 00 · bomiuzbekistan@gmail.com</Link></p>
                <p className='text-[#a0a0a0] text-[14px] mt-2'>Copyright © 2016 (보미) BoMI.Все права защищены : BOMI Engineering & Construction.</p>
            </div>
        </footer>
    );
}

export default Footer;
