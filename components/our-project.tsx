"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FreeMode, Pagination } from 'swiper/modules';
import { Autoplay } from "swiper/modules";

import cardBuilding from "@/public/card-buildings/project-01-thumbnail.jpg";
import cardBuilding1 from "@/public/card-buildings/project-02-thumbnail.jpg";
import cardBuilding2 from "@/public/card-buildings/project-04-1-thumbnail.jpg";
import cardBuilding3 from "@/public/card-buildings/project-05-thumbnail.jpg";
import cardBuilding4 from "@/public/card-buildings/project-07-thumbnail-1.jpg";
import cardBuilding5 from "@/public/card-buildings/project-08-1-thumbnail-1.jpg";
import cardBuilding6 from "@/public/card-buildings/project-08-thumbnail.jpg";
import cardBuilding7 from "@/public/card-buildings/unnamed-file-65.jpg";



export default function OurProject() {
    return (
        <section className="bg-[#fff] pt-[100px]" id="about">
            <div className="mb-[100px]">
                <div className="container mx-auto px-4 ">
                    <h2 className="font-bold text-[35px] text-black mb-6">Bomi E&C </h2>
                    <p className="text-[#45525B] text-lg">Bomi E&C — ведущая строительная компания с более чем 30-летним опытом работы в отрасли. Мы предоставляем полный спектр услуг, включая</p>
                    <p className="text-[#45525B] text-lg">проектирование, строительство и сдачу объектов «под ключ», обеспечивая строгий контроль качества на всех этапах.</p>
                    <p className="mt-4 backdrop: text-[#45525B] text-lg">Наша команда ориентирована на высокие стандарты, инновационные подходы и долговечность объектов.</p>

                    <p className="mt-2 text-lg ">Наши ценности:</p>
                    <div className="flex gap-1 flex-col">
                        <p className="text-[#6F7278] text-lg">• Профессионализм: Использование передовых технологий и методов.</p>
                        <p className="text-[#6F7278] text-lg">• Качество и надежность: Строгое соблюдение стандартов и долговечность объектов.</p>
                        <p className="text-[#6F7278] text-lg">• Инновации: Внедрение современных решений для оптимизации каждого проекта.</p>
                        <p className="text-[#6F7278] text-lg">• Опыт: Более 30 лет успешной практики в строительной отрасли. </p>
                    </div>
                </div>
            </div>
            <div className="container px-4 mx-auto">


                <div className="flex gap-4 flex-wrap mt-[40px] mb-[40px]">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        freeMode={true}
                        autoplay={{
                            delay: 2000, // Задержка перед сменой слайда (2 секунды)
                            disableOnInteraction: false, // Автоплей не отключается после взаимодействия
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination, Autoplay]}

                        className="mySwiper"
                    >
                        <SwiperSlide>

                            <Image className="rounded-[25px] project_card" src={cardBuilding} width={450} height={400} alt="" />

                        </SwiperSlide>
                        <SwiperSlide>

                            <Image className="rounded-[25px] project_card" src={cardBuilding1} width={450} height={400} alt="" />

                        </SwiperSlide>
                        <SwiperSlide>

                            <Image className="rounded-[25px] project_card" src={cardBuilding2} width={450} height={400} alt="" />

                        </SwiperSlide>
                        <SwiperSlide>

                            <Image className="rounded-[25px] project_card" src={cardBuilding3} width={450} height={400} alt="" />

                        </SwiperSlide>
                        <SwiperSlide>

                            <Image className="rounded-[25px] project_card" src={cardBuilding4} width={450} height={400} alt="" />

                        </SwiperSlide>
                        <SwiperSlide>

                            <Image className="rounded-[25px] project_card" src={cardBuilding5} width={450} height={400} alt="" />

                        </SwiperSlide>
                        <SwiperSlide>

                            <Image className="rounded-[25px] project_card" src={cardBuilding6} width={450} height={400} alt="" />

                        </SwiperSlide>
                        <SwiperSlide>

                            <Image className="rounded-[25px] project_card" src={cardBuilding7} width={450} height={400} alt="" />

                        </SwiperSlide>

                    </Swiper>


                </div>
            </div>
        </section>
    )
}