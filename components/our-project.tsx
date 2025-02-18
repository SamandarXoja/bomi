"use client";

import Image from "next/image";

// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import { FreeMode, Pagination } from 'swiper/modules';
// import { Autoplay } from "swiper/modules";

// import cardBuilding from "@/public/card-buildings/project-01-thumbnail.jpg";
// import cardBuilding1 from "@/public/card-buildings/project-02-thumbnail.jpg";
// import cardBuilding2 from "@/public/card-buildings/project-04-1-thumbnail.jpg";
// import cardBuilding3 from "@/public/card-buildings/project-05-thumbnail.jpg";
// import cardBuilding4 from "@/public/card-buildings/project-07-thumbnail-1.jpg";
// import cardBuilding5 from "@/public/card-buildings/project-08-1-thumbnail-1.jpg";
// import cardBuilding6 from "@/public/card-buildings/project-08-thumbnail.jpg";
// import cardBuilding7 from "@/public/card-buildings/unnamed-file-65.jpg";

// import about from "@/public/images/imgt.jpg"
import about1 from "@/public/images/bomi-banner-1.jpg"
// import { Building, Handshake, Lightbulb, ShieldCheck } from "lucide-react";






export default function OurProject() {



    return (
        <section className="bg-[#fff] pt-[100px]" id="about">
            <div className="mb-[100px]">
                <div className="container mx-auto px-4">
                    <h2 className="font-bold text-[28px] text-[#303030] mb-6">Bomi E&C</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Картинка */}
                        <div className="relative w-full">
                            <Image
                                src={about1}
                                alt="О компании Bomi E&C"
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                                width={600}
                                height={400}
                            />
                            {/* Белый оверлей при наведении */}
                            <div className="absolute inset-0 bg-white/0 hover:bg-white/40 transition duration-300 rounded-lg"></div>
                        </div>

                        {/* Текст */}
                        <div>
                            <p className="text-[#000] text-xl leading-[170%]">
                                Bomi E&C — ведущая строительная компания с более чем 30-летним опытом работы в отрасли.
                                Мы предоставляем полный спектр услуг, включая проектирование, строительство и сдачу
                                объектов «под ключ», обеспечивая строгий контроль качества на всех этапах.
                            </p>
                        </div>
                    </div>


                    {/* Блок с цифрами */}
                    <div className="bg-[#f8f8f8] rounded-[10px] mt-28 py-[45px] px-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        <div>
                            <b className="font-bold text-[35px] text-[#272727]">+30</b>
                            <p className="text-[#272727] text-xl">лет на рынке</p>
                        </div>

                        <div className="border-l border-gray-300 pl-6">
                            <b className="font-bold text-[35px] text-[#272727]">2 млн м²</b>
                            <p className="text-[#272727] text-xl">недвижимости в продаже</p>
                        </div>

                        <div className="border-l border-gray-300 pl-6">
                            <b className="font-bold text-[35px] text-[#272727]">25</b>
                            <p className="text-[#272727] text-xl">объектов в реализации</p>
                        </div>

                        <div className="border-l border-gray-300 pl-6">
                            <b className="font-bold text-[35px] text-[#272727]">30 тыс.</b>
                            <p className="text-[#272727] text-xl">человек проживают в наших домах</p>
                        </div>
                    </div>


                    {/* Таймлайн компании */}
                    <div className="mt-16">
                        <h3 className="font-bold text-[28px] text-[#000] text-center mb-8">Наш путь к успеху</h3>

                        <div className="relative border-l-4 border-[#272727] pl-6 space-y-8">
                            <div>
                                <h4 className="font-bold text-xl text-[#000]">1993</h4>
                                <p className="text-[#272727] text-lg">Основание компании. Первые проекты в жилой застройке.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-xl text-[#000]">2005</h4>
                                <p className="text-[#272727] text-lg">Расширение в коммерческое строительство. Открытие филиалов.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-xl text-[#000]">2015</h4>
                                <p className="text-[#272727] text-lg">Запуск первых эко-комплексов с зелеными технологиями.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-xl text-[#000]">2024</h4>
                                <p className="text-[#272727] text-lg">Лидер рынка. 2 млн м² недвижимости. Строим города будущего.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {/* Блок с ценностями */}



        </section>
    )
}