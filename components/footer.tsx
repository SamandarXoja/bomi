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
                <Link className='text-[#a0a0a0] text-[14px] flex gap-3' href={'#'}>About <span>/</span></Link>
                <Link className='text-[#a0a0a0] text-[14px] flex gap-3' href={'#'}>Contact <span>/</span></Link>
                <Link className='text-[#a0a0a0] text-[14px] flex gap-3' href={'#'}>Project <span>/</span></Link>
                <Link className='text-[#a0a0a0] text-[14px] flex gap-3' href={'#'}>Safety</Link>
            </div>
            <div className='text-center mt-1'>
                <p className='text-[#a0a0a0] text-[14px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit aliquam illo libero! Lorem, ipsum dolor.</p>
                <p className='text-[#a0a0a0] text-[14px] mt-2'>Copyright © 2016 리을(BOMI) All rights reserved. designed by DESIGN MOON</p>
            </div>
        </footer>
    );
}

export default Footer;
