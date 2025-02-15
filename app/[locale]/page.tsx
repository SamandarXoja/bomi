


// import { Link } from "@/i18n/routing";
// import { getTranslations } from "next-intl/server";
import Image from "next/image";
import banner from "@/public/images/bomi-banner.jpg";
import OurProject from "@/components/our-project";

import card1 from "@/public/cards-1/card-1.jpg"
import card2 from "@/public/cards-1/card2.jpg"
import card3 from "@/public/cards-1/card.png"

import imgResiton from "@/public/images/registon.jpg"

import imgResiton3 from "@/public/images/vase2.jpg"
import Comfort from "@/components/comfort";


import persons from "@/public/images/Hakimov.jpg";
import safe from "@/public/images/safe.jpg"
import Designers from "@/components/designers";
import Location from "@/components/location";



export default async function HomePage() {
  // const t = await getTranslations("HomePage");
  return (
    <div>
      {/* <h1>{t("title")}</h1> */}
      {/* <Link href='/contact'>{t("contact")}</Link> */}

      <div className="bg-slate-900">
        <Image className="w-full banner" src={banner} width={1000} height={500} alt="img" />
      </div>
      <OurProject />
      <section className="pt-[100px]" id="aboutProject">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-[35px] text-black mb-6">BOMI FINANCE CENTER </h2>
          <div className="w-[70px] h-[10px] bg-red-700 mb-6"></div>
          <div className="max-w-[1085px] w-full">
            <p className="text-[#6F7278] mb-6 text-lg">Bomi Finance Center (бизнес-центр) расположен в МДЦ «Tashkent City», который является успешным проектом на национальном уровне.</p>
            <p className="text-[#6F7278] text-lg">Здание расположено прямо на главной улице и имеет преимущество в том, что к нему легко добраться, поскольку оно находится рядом с транспортными средствами (метро, автобус). Кроме того, это место имеет множество географических преимуществ, поскольку поблизости расположены правительственные учреждения и объекты общего обслуживания. </p>
          </div>

        </div>
        <div className="overflow-hidden mt-14">
          <div className="grid grid-cols-3 gap-2 w-screen overflow-hidden">
            <Image
              src={card1}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
            />
            <Image
              src={card2}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
            />
            <Image
              src={card3}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
            />
            <Image
              src={card1}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
            />
            <Image
              src={card2}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
            />
            <Image
              src={card3}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>

      </section>

      <section className="" id="concept">

        <div className="mt-[120px] mb-[40px]">
          <div className="container mx-auto px-4">
            <h2 className="text-[35px] font-bold">Концепция</h2>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <Image className="rounded-[30px]" src={imgResiton} width={480} height={588} alt="" />
            <div className="max-w-[900px] w-full mt-6">
              <h3 className="text-[25px] font-medium">Moon Jar</h3>
              <p className="mt-4 text-lg text-[#6F7278]">Лунная банка — это фарфор мягкого и элегантного чистого белого цвета, который создает красивые формы, меняя тени в зависимости от освещения.</p>
              <p className="mt-6 text-lg text-[#6F7278]">Высотная часть Bomi Finance Center использует чистый и ясный белый цвет внешней части лунного кувшина и современное серебристое стекло.</p>
            </div>

          </div>
          <div className="flex flex-wrap justify-between mt-20">
            <div className="max-w-[900px] w-full mt-6">
              <h3 className="text-[25px] font-medium">Moon Jar</h3>
              <p className="mt-4 text-lg text-[#6F7278]">Лунная банка — это фарфор мягкого и элегантного чистого белого цвета, который создает красивые формы, меняя тени в зависимости от освещения.</p>
              <p className="mt-6 text-lg text-[#6F7278]">Высотная часть Bomi Finance Center использует чистый и ясный белый цвет внешней части лунного кувшина и современное серебристое стекло.</p>
            </div>
            <Image className="rounded-[30px]" src={imgResiton3} width={480} height={588} alt="" />

          </div>
        </div>
      </section>
      <Comfort />
      <section className="mt-[140px]" id="safety">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-[40px]">
            <Image className="rounded-2xl" src={persons} width={500} height={400} alt="persons" />
            <div className="max-w-[920px] w-full">
              <h3 className="text-3xl font-medium">Проектирование структуры</h3>
              <b className="block mt-5 mb-5 text-l">Хакимов Шамил Абдуллаевич</b>
              <p> (В настоящее время)</p>
              <p className="mt-5 mb-5 text-[#6F7278]">Доктор, академик Международной инженерной академии, международный эксперт по защите строительных конструк ций от землетрясений и горных опасностей (сертификат спе циалиста № 104) Вице-президент</p>
              {/* <p className="text-[#6F7278]">Евро-Азиатской ассоциации инженерной с ейсмологии и сейсмостойкого строительства. Почетный член президиума Международной ассоциации э кспертов по сейсмостойкому строительству, член редколле гии ряда зарубежных журналов по сейсмостойкому строите льству. Почетный профессор ряда зарубежных университетов.</p> */}
            </div>
          </div>
          <div className="flex flex-wrap gap-[40px] mt-[80px]">

            <div className="max-w-[920px] w-full">
              <h3 className="text-3xl font-medium">СИСТЕМА СЕЙСМОСТОЙКОСТИ</h3>


              <p className="mt-5 mb-5 text-[#6F7278]">Сейсмическая конструкция имеет рейтинг 9, что обеспечивает высокий уровень устойчивости к стихийным бедствиям.</p>
              <p className="text-[#6F7278]">Это гарантия безопасности людей и сохранности имущества в случае землетрясения.
              </p>
              <p className="text-[#6F7278] mt-5">Сейсмостойкость  — это не только требование безопасности, но и залог вашего комфорта и уверенности в защите вашего бизнеса.</p>

            </div>
            <Image className="rounded-2xl max-w-[500px] h-[400px]" src={safe} width={500} height={400} alt="persons" />
          </div>
        </div>
      </section>
      <Designers /> 
      <Location />

    </div>
  );
}
