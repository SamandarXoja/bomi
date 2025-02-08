"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react"; // Иконки
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Бургер-меню
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown
  const [position, setPosition] = React.useState("ru")

  // Закрывать dropdown при клике вне его
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".dropdown-menu")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <nav className="bg-white text-black py-4 ">

      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Логотип */}
        <Link href="/">
          <Image src={logo} width={200} height={200} alt="logo" />
        </Link>

        {/* Меню для больших экранов */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li><Link href="/" className="hover:text-gray-400 text-xl">Главная</Link></li>
          <li><Link href="/projects" className="hover:text-gray-400 text-xl">Проекты</Link></li>
          <li><Link href="/about" className="hover:text-gray-400 text-xl">О нас</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400 text-xl">Контакты</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400 text-xl">Контакты</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400 text-xl">Контакты</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400 text-xl">Контакты</Link></li>

          {/* Dropdown меню */}

        </ul>

        <div className="hidden md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{position}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="ru">ru</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="uz">uz</DropdownMenuRadioItem>
                {/* <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem> */}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Бургер-меню для мобильных */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={30} color="#000" /> : <Menu size={30} color="#000" />}
        </button>
      </div>

      {/* Выпадающее меню для мобильных устройств */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-4 mt-4 ">
          <ul className="flex flex-col space-y-4">
            <li><Link href="/" className="text-black" onClick={() => setIsOpen(false)}>Главная</Link></li>
            <li><Link href="/projects" className="text-black" onClick={() => setIsOpen(false)}>Проекты</Link></li>
            <li><Link href="/about" className="text-black" onClick={() => setIsOpen(false)}>О нас</Link></li>
            <li><Link href="/contact" className="text-black" onClick={() => setIsOpen(false)}>Контакты</Link></li>

            {/* Dropdown для мобильного меню */}
            <li className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">{position}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
                  {/* <DropdownMenuSeparator /> */}
                  <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="ru">ru</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="uz">uz</DropdownMenuRadioItem>
                    {/* <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem> */}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              {isDropdownOpen && (
                <ul className="mt-2 space-y-2">
                  <li><Link href="/services/design" className="block hover:bg-gray-100 px-4 py-2">Дизайн</Link></li>
                  <li><Link href="/services/construction" className="block hover:bg-gray-100 px-4 py-2">Строительство</Link></li>
                  <li><Link href="/services/consulting" className="block hover:bg-gray-100 px-4 py-2">Консалтинг</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
