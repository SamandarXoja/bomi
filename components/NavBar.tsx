"use client";

import React, { useEffect, useState } from "react";
import LocaleSwitcher from "./LocaleSwitcher";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/images/logo-5.png";
import Link from "next/link";
export default function NavBar() {
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



  return (
    <>
      <div className="absolute  right-[100px]">
        <LocaleSwitcher />
      </div>



      <nav className={`text-black block nav ${scrolled ? "scrolled" : ""}`}>

        <div className="">
          {/* Логотип */}
          <div className="nav-logo">

            <Image className="w-[130px]" src={logo} width={200} height={200} alt="logo" />

          </div>

          {/* Меню для больших экранов */}
          <ul className="flex flex-col nav-list mb-5">
            <li><Link onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }} href="/#" className=" uppercase nav__link text-[13px] font-medium">О нас</Link></li>


            <li><Link onClick={(e) => {
              e.preventDefault();
              document.getElementById("aboutProject")?.scrollIntoView({ behavior: "smooth" });
            }} href="/#" className="hover:text-red-600 uppercase nav__link text-[13px] font-medium">О проекте</Link></li>



            <li><Link onClick={(e) => {
              e.preventDefault();
              document.getElementById("concept")?.scrollIntoView({ behavior: "smooth" });
            }} href="/#" className="hover:text-red-600 uppercase nav__link text-[13px] font-medium">Концепция   </Link></li>
            <li><Link onClick={(e) => {
              e.preventDefault();
              document.getElementById("comfort")?.scrollIntoView({ behavior: "smooth" });
            }} href="/#" className="hover:text-red-600 uppercase nav__link text-[13px] font-medium">Комфорт          </Link></li>
            <li><Link onClick={(e) => {
              e.preventDefault();
              document.getElementById("safety")?.scrollIntoView({ behavior: "smooth" });
            }} href="/#" className="hover:text-red-600 uppercase nav__link text-[13px] font-medium">Безопасность
            </Link></li>
            <li><Link onClick={(e) => {
              e.preventDefault();
              document.getElementById("location")?.scrollIntoView({ behavior: "smooth" });
            }} href="/#" className="hover:text-red-600 uppercase nav__link text-[13px] font-medium">Локация</Link></li>
            <li><Link onClick={(e) => {
              e.preventDefault();
              document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
            }} href="/#" className="hover:text-red-600 uppercase nav__link text-[13px] font-medium">Контакты</Link></li>

            {/* Dropdown меню */}

          </ul>




          <button onClick={() => setIsOpen(!isOpen)} className="nav-toggle">
            {isOpen ? <X size={30} color="#000" /> : <Menu size={30} color="#000" />}
          </button>
        </div>



      </nav>

    </>
  );
}
