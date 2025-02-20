"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import { FreeMode, Pagination } from 'swiper/modules';
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import imgBomi from "@/public/images/bomic.jpg"
// import imgBomi2 from "@/public/images/bomic2.webp";

export default function Designers() {

  // bg-[#f8f8f8]

  return (
    <section className="mt-[130px]" >
      <div className="container  mx-auto px-4">
        <h2 className="text-[30px] font-bold text-center ">Архитектор-дизайнер</h2>

        <Swiper
          className="mySwiper h-[600px]  flex"
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          <SwiperSlide className="flex justify-center items-center ">
            <div className="container mx-auto px-4 relative mt-[130px] 2xl:block xl:hidden lg:hidden md:hidden sm:hidden xs:hidden">
              <Image
                className="w-full max-w-[350px] min-h-[350px] object-cover rounded-2xl mx-auto absolute  top-[-80px] left-[40px]"
                src={imgBomi}
                width={350}
                height={350}
                alt=""
              />
              <div className="flex justify-end">
                <div className="bg-[#f8f8f8] max-w-[1240px] w-full min-h-[350px] rounded-2xl">
                  <div className="max-w-[1030px] w-full ml-[170px] pt-[15px]">
                    <h3 className="font-semibold uppercase text-[#000] text-xl">Park Seon</h3>
                    <p className="text-[#272727] text-lg mt-[15px] mb-[15px]">Архитектур Дизайн</p>
                    <p className="text-[#272727] text-lg">(В настоящее время)
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
            <div className="container mx-auto px-4 flex relative mt-[130px] 2xl:hidden xl:block lg:block md:block sm:block xs:block">
              <Image
                className="w-full max-w-[350px] min-h-[350px] object-cover rounded-2xl mx-auto  top-[-80px] left-[40px]"
                src={imgBomi}
                width={350}
                height={350}
                alt=""
              />
              <div className="flex justify-end mt-4">
                <div className="bg-[#f8f8f8] container w-full min-h-[350px] rounded-2xl">
                  <div className="max-w-[1030px] w-full mx-auto pt-[15px]">
                    <h3 className="font-semibold uppercase text-[#000] text-xl">Park Seon</h3>
                    <p className="text-[#272727] text-lg mt-[15px] mb-[15px]">Архитектур Дизайн</p>
                    <p className="text-[#272727] text-lg">(В настоящее время)
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
            <div className="container mx-auto px-4 relative mt-[130px] 2xl:block xl:hidden lg:hidden md:hidden sm:hidden xs:hidden">
              <Image
                className="w-full max-w-[350px] min-h-[350px] object-cover rounded-2xl mx-auto absolute  top-[-80px] left-[40px]"
                src={imgBomi}
                width={350}
                height={350}
                alt=""
              />
              <div className="flex justify-end">
                <div className="bg-[#f8f8f8] max-w-[1240px] w-full min-h-[350px] rounded-2xl">
                  <div className="max-w-[1030px] w-full ml-[170px] pt-[15px]">
                    <h3 className="font-semibold uppercase text-[#000] text-xl">Park Seon</h3>
                    <p className="text-[#272727] text-lg mt-[15px] mb-[15px]">Архитектур Дизайн</p>
                    <p className="text-[#272727] text-lg">(В настоящее время)
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
            <div className="container mx-auto px-4 flex relative mt-[130px] 2xl:hidden xl:block lg:block md:block sm:block xs:block">
              <Image
                className="w-full max-w-[350px] min-h-[350px] object-cover rounded-2xl mx-auto   top-[-80px] left-[40px]"
                src={imgBomi}
                width={350}
                height={350}
                alt=""
              />
              <div className="flex justify-end mt-4">
                <div className="bg-[#f8f8f8] container w-full min-h-[350px] rounded-2xl">
                  <div className="max-w-[1030px] w-full  pt-[15px] mx-auto">
                    <h3 className="font-semibold uppercase text-[#000] text-xl">Park Seon</h3>
                    <p className="text-[#272727] text-lg mt-[15px] mb-[15px]">Архитектур Дизайн</p>
                    <p className="text-[#272727] text-lg">(В настоящее время)
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

        </Swiper>

      </div>
    </section>
  )
}