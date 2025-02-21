"use client";

import React, { useEffect, useState } from "react";
import LocaleSwitcher from "./LocaleSwitcher";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/images/logo-5.png";
import Link from "next/link";



import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { useParams } from "next/navigation";



export default function NavBar() {
  const { locale } = useParams()

  const [isOpen, setIsOpen] = useState(false); // Бургер-меню
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown
  // const [position, setPosition] = React.useState("ru");
  const [scrolled, setScrolled] = useState(false);

  console.log(isDropdownOpen);
  // console.log(position);



  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const closeDropdown = (e: any) => {
      if (!e.target.closest(".dropdown-menu")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // const menuItems = [
  //   { title: "bomi", submenu: ["Подпункт 1", "Подпункт 2"] },
  //   { title: "О проекте", submenu: ["Цели", "Документы"] },
  //   { title: "Концепция", submenu: ["Идея", "План"] },
  //   { title: "Комфорт", submenu: ["Удобства", "Транспорт"] },
  //   { title: "Безопасность", submenu: ["Охрана", "Технологии"] },
  //   { title: "Локация", submenu: ["Карта", "Доступность"] },
  //   { title: "Контакты", submenu: ["Телефон", "Email"] },
  // ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const menuItems = [
    { title: "BOMI", submenu: ["ABOUT RIEUL", "CONTACT"], src: "/about" },
    { title: "LOOK BOOK", submenu: ["ABOUT RIEUL", "CONTACT"] },
    { title: "CAMPAIGN", submenu: ["ABOUT RIEUL", "CONTACT"] },
    { title: "EVENT", submenu: ["ABOUT RIEUL", "CONTACT"] },
    { title: "SHOP", submenu: ["ABOUT RIEUL", "CONTACT"] },
    { title: "NEWS", submenu: ["ABOUT RIEUL", "CONTACT"] },
    { title: "SPONSOR SHIP", submenu: ["ABOUT RIEUL", "CONTACT"] },
  ];
  return (
    <div className="">



      


      <nav className={`text-black block nav`}>

        <div className="">
          {/* Логотип */}
          <Link href={`/`} className="nav-logo block">

            <Image className="w-[130px]" src={logo} width={200} height={200} alt="logo" />

          </Link>

          <ul className="flex flex-col space-y-2 text-black text-[12px] font-medium trees">
            {menuItems.map((item, index) => (
              <li key={index} className="navs">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="uppercase w-full text-left"
                    >
                      {item.title}
                    </button>
                    <ul
                      className={`mt-0 space-y-1 text-[#666] text-[11px]  nav-submenu ${openIndex === index ? "open" : ""
                        }`}
                    >
                      <div className="mt-[10px]">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="ml-4 mt-1">
                            <Link href={`/${locale}${item.src}`}>{subItem}</Link>
                          </li>
                        ))}
                      </div>
                    </ul>
                  </>
                ) : (
                  <Link href="/#" className="uppercase block">
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>









          <button onClick={() => setIsOpen(!isOpen)} className="nav-toggle">
            {isOpen ? <X size={30} color="#000" /> : <Menu size={30} color="#000" />}
          </button>
        </div>



      </nav>

    </div>
  );
}
