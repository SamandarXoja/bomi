"use client";

import Image from "next/image";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import { FreeMode, Pagination } from 'swiper/modules';
import { Autoplay } from "swiper/modules";


import imgBomi from "@/public/images/bomic.jpg"
import imgBomi2 from "@/public/images/parkin.webp";



export default function Comfort() {
    return (
        <section className="mb-32" id="comfort">
            <div className="container mx-auto px-4">
                <h2 className="mb-16 mt-[100px] text-[30px] font-bold text-center text-black">
                    Комфорт</h2>
            </div>
            <div className="container mx-auto px-4">
                <Swiper
                    className="mySwiper"
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                >
                    <SwiperSlide className="flex justify-center items-center">
                        <Image
                            className="h-[600px] object-cover rounded-2xl mx-auto"
                            src={imgBomi2}
                            width={1500}
                            height={400}

                            alt=""
                            priority
                            objectFit="cover"
                        // fill
                        />
                        <div className="text-center mt-9">
                            <h3 className="text-[30px] text-black font-bold">Пространства для вашего бизнеса</h3>
                            <p className="mt-4 max-w-[1200px] mx-auto text-[#272727] text-lg">Мы предлагаем вам современную и высококачественную недвижимость</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center">
                        <Image
                            className="h-[600px] object-cover rounded-2xl mx-auto"
                            src={imgBomi}
                            width={1500}
                            height={400}
                            alt=""
                        />

                        <div className="text-center mt-9">
                            <h3 className="text-[30px] text-black font-bold">Статус и возможности</h3>
                            <p className="mt-4 max-w-[1200px] mx-auto text-[#272727] text-lg">Который подчеркнет статус вашей компании и станет идеальным местом для работы</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    )
}