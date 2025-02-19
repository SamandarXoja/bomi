"use client";

import Image from "next/image";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import { FreeMode, Pagination } from 'swiper/modules';
import {  EffectCoverflow, Pagination } from "swiper/modules";


import imgBomi from "@/public/images/comfort-11.jpg"
import imgBomi2 from "@/public/images/comfort-10.jpg";
import imgBomi3 from "@/public/images/comfort-12.jpg";


import './comfort.css'

export default function Comfort() {
    return (
        <section className="" id="comfort">
            <div className="container mx-auto px-4">
                <h2 className="mb-16 mt-[120px] text-[30px] font-bold text-center text-black">
                    Комфорт</h2>
            </div>
            {/* <div className="container mx-auto px-4">
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
            </div> */}
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                spaceBetween={100}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 0.8,
                    slideShadows: false,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image className="swipers-foto" src={imgBomi} alt="" priority />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="swipers-foto" src={imgBomi2} alt="" priority />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="swipers-foto" src={imgBomi3} alt="" priority />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="swipers-foto" src={imgBomi} alt="" priority />
                </SwiperSlide>
            </Swiper>




        </section>
    )
}