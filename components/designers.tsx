"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import { FreeMode, Pagination } from 'swiper/modules';
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import imgBomi from "@/public/images/bomic.jpg"
// import imgBomi2 from "@/public/images/bomic2.webp";

export default function Designers() {
    return (
        <section className="mt-[130px]" >
        <div className="container  mx-auto px-4">
          <h2 className="text-[30px] font-bold text-center mb-11">Архитектор-дизайнер</h2>

          <Swiper
            className="mySwiper h-[600px]  flex"
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
          >
            <SwiperSlide className="flex justify-center items-center ">
              <div className="container mx-auto px-4 relative mt-[130px]">
                <Image
                  className="w-full max-w-[350px] min-h-[350px] object-cover rounded-2xl mx-auto absolute top-[-80px] left-[40px]"
                  src={imgBomi}
                  width={350}
                  height={350}
                  alt=""
                />
                <div className=" flex justify-end ">
                  <div className="bg-[#0255950D] max-w-[1240px] w-full min-h-[350px] rounded-2xl">
                    <div className="max-w-[1030px] w-full  ml-[170px] pt-[15px]">
                      <h3 className="font-semibold uppercase">Park Seon</h3>
                      <p className="text-[#6F7278] mt-[15px] mb-[15px]">Архитектур Дизайн</p>
                      <p className="text-[#6F7278]">(В настоящее время)
                        Профессор Аппалачского государственного
                        университета в США Член Американского института архитекторов (AIA) Член Корейского института архитекторов Генслер (США), дизайнер
                        BGO Architects (США), дизайнер NBBJ (США),
                        дизайнер</p>
                      {/* <p className="text-[#6F7278] mt-[15px] mb-[15px]">Gensler (USA), designer
                        BGO Architects (USA), designer NBBJ (USA), designer
                        Представительные проекты:</p> */}
                      {/* <p className="text-[#6F7278]">Bank Of America Design Tencent Headquarters Design Alipay Headquarters Design Ananti Busan Design
                        Samsung R5 R&D Center Design
                        Samsung Semiconductor US Headquarters Design
                        NHN Headquarters Design</p> */}
                    </div>
                  </div>
                </div>
 
              </div>

            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center ">       
              <div className="container mx-auto px-4 relative mt-[130px]">
                <Image
                  className="w-full max-w-[350px] min-h-[350px] object-cover rounded-2xl mx-auto absolute top-[-80px] left-[40px]"
                  src={imgBomi}
                  width={350}
                  height={350}
                  alt=""
                />
                <div className=" flex justify-end ">
                  <div className="bg-[#0255950D] max-w-[1240px] w-full min-h-[350px] rounded-2xl">
                    <div className="max-w-[1030px] w-full  ml-[170px] pt-[15px]">
                      <h3 className="font-semibold uppercase">Park You Jin </h3>
                      <p className="text-[#6F7278] mt-[15px] mb-[15px]">Архитектур Дизайн</p>
                      {/* <p className="text-[#6F7278]">(В настоящее время)
                        ПРЕДСТАВИТЕЛЬ АРХИТЕКТУРНОГО БЮРО PNJ ARCH ITECTS ПРОФЕССОР КАФЕДРЫ НАЦИОНАЛЬНЫЙ УНИВЕРСИТЕТ KYUNGPOOK . АРХИТЕКТУРНАЯ ВЫ СТАВКА КОРЕЙСКОГО ИНСТИТУТА АРХИТЕКТОРО В . ПРИГЛАШЕННЫЙ ХУДОЖНИК . ПРОФЕССОР К АФЕДРЫ АРХИТЕКТУРЫ УНИВЕРСИТЕТА</p> */}
                      <p className="text-[#6F7278] mt-[15px] mb-[15px]">ОБЩЕСТВЕННЫЙ АРХИТЕКТОР ГОРОДА ОБЩЕСТВЕННЫЙ АРХИТЕКТОР ГОРОДА СЕУЛ</p>
                      {/* <p className="text-[#6F7278]">ПРЕДСТАВИТЕЛЬСКИЕ ПРОЕКТЫ:
                        Bukseoul DreamForestConstruction Design</p> */}
                    </div>
                  </div>
                </div>

              </div>

            </SwiperSlide>

          </Swiper>

        </div>
      </section>
    )
}